<?php
$action = isset($_GET['action']) ? (string)$_GET['action'] : '';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('content-signal: ai-train=yes, search=yes, ai-input=yes');

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($action === 'markdown') {
    $mdBody = @file_get_contents(__DIR__ . '/llms.txt');
    if (!$mdBody) {
        $mdBody = "# Tattvakośa (तत्त्वकोशः)\n\nClassical Sanskrit lexicon and 24 kHz Ninada neural audio studio.\n";
    }
    $htmlRaw = @file_get_contents(__DIR__ . '/index.html');
    if (!$htmlRaw) $htmlRaw = '';
    $frontmatter = "---\n"
        . "title: \"Tattvakośa · तत्त्वकोशः | Classical Sanskrit Lexicon\"\n"
        . "description: \"688 classical Sanskrit headwords defined from Amarakośa and Śrī Madhvācārya's Sarvamūla sūtras, recited in your browser at 24 kHz.\"\n"
        . "url: \"https://h3manth.com/fun/tattvakosha/\"\n"
        . "---\n\n";
    $fullMd = $frontmatter . $mdBody;
    header('Content-Type: text/markdown; charset=utf-8');
    header('Vary: Accept');
    header('x-markdown-tokens: ' . (string)(int)ceil(strlen($fullMd) / 4));
    if ($htmlRaw !== '') {
        header('x-original-tokens: ' . (string)(int)ceil(strlen($htmlRaw) / 4));
    }
    echo $fullMd;
    exit;
}

function load_kosha_dataset() {
    $path = __DIR__ . '/data/tattvakosha.json';
    $raw = @file_get_contents($path);
    if (!$raw) return null;
    return json_decode($raw, true);
}

function ascii_fold($str) {
    $s = mb_strtolower((string)$str, 'UTF-8');
    $map = array(
        'ā' => 'a', 'ī' => 'i', 'ū' => 'u',
        'ṛ' => 'ri', 'ṝ' => 'ri', 'ḷ' => 'li',
        'ṅ' => 'n', 'ñ' => 'n', 'ṭ' => 't', 'ḍ' => 'd', 'ṇ' => 'n',
        'ś' => 'sh', 'ṣ' => 'sh', 'ṃ' => 'm', 'ṁ' => 'm', 'ḥ' => 'h'
    );
    return strtr($s, $map);
}

header('Content-Type: application/json; charset=utf-8');

$data = load_kosha_dataset();
if (!$data || !isset($data['entries'])) {
    http_response_code(500);
    echo json_encode(array('error' => 'Dataset unavailable'));
    exit;
}

if ($action === 'stats') {
    echo json_encode($data['meta'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

if ($action === 'entry') {
    $id = isset($_GET['id']) ? trim((string)$_GET['id']) : '';
    if ($id === '') {
        http_response_code(400);
        echo json_encode(array('error' => 'Provide ?id=<entry-id>'));
        exit;
    }
    foreach ($data['entries'] as $entry) {
        if (isset($entry['id']) && $entry['id'] === $id) {
            $entry['url'] = 'https://h3manth.com/fun/tattvakosha/#' . rawurlencode($entry['id']);
            echo json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            exit;
        }
    }
    http_response_code(404);
    echo json_encode(array('error' => 'Entry not found', 'id' => $id));
    exit;
}

if ($action === 'search') {
    $q = isset($_GET['q']) ? trim((string)$_GET['q']) : '';
    $pillar = isset($_GET['pillar']) ? trim((string)$_GET['pillar']) : 'all';
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 12;
    if ($limit < 1) $limit = 1;
    if ($limit > 50) $limit = 50;

    $qLower = mb_strtolower($q, 'UTF-8');
    $qFold = ascii_fold($q);
    $scored = array();

    foreach ($data['entries'] as $entry) {
        if ($pillar !== '' && $pillar !== 'all' && (!isset($entry['pillar']) || $entry['pillar'] !== $pillar)) {
            continue;
        }
        if ($q === '') {
            $scored[] = array('score' => 1, 'entry' => $entry);
            if (count($scored) >= $limit) break;
            continue;
        }

        $score = 0;
        $id = isset($entry['id']) ? (string)$entry['id'] : '';
        $deva = isset($entry['deva']) ? (string)$entry['deva'] : '';
        $iast = isset($entry['iast']) ? mb_strtolower((string)$entry['iast'], 'UTF-8') : '';
        $iastFold = ascii_fold($iast);
        $glosses = isset($entry['englishGlosses']) && is_array($entry['englishGlosses']) ? implode(' ', $entry['englishGlosses']) : '';
        $glossLower = mb_strtolower($glosses, 'UTF-8');

        if ($id === $qLower || $deva === $q || $iast === $qLower || $iastFold === $qFold) {
            $score = 100;
        } elseif (mb_strpos($deva, $q) === 0 || mb_strpos($iast, $qLower) === 0 || ($qFold !== '' && strpos($iastFold, $qFold) === 0)) {
            $score = 80;
        } elseif (mb_strpos($glossLower, $qLower) !== false) {
            $score = 65;
        } elseif (mb_strpos($deva, $q) !== false || mb_strpos($iast, $qLower) !== false || ($qFold !== '' && strpos($iastFold, $qFold) !== false)) {
            $score = 50;
        } else {
            $sutra = isset($entry['lakshanaDeva']) ? (string)$entry['lakshanaDeva'] : '';
            $meaning = isset($entry['meaningShort']) ? mb_strtolower((string)$entry['meaningShort'], 'UTF-8') : '';
            if (($sutra !== '' && mb_strpos($sutra, $q) !== false) || ($meaning !== '' && mb_strpos($meaning, $qLower) !== false)) {
                $score = 30;
            }
        }

        if ($score > 0) {
            $scored[] = array('score' => $score, 'entry' => $entry);
        }
    }

    usort($scored, function ($a, $b) {
        return $b['score'] - $a['score'];
    });

    $slice = array_slice($scored, 0, $limit);
    $results = array();
    foreach ($slice as $row) {
        $e = $row['entry'];
        $src = isset($e['source']) && is_array($e['source']) ? $e['source'] : array();
        $citation = trim((isset($src['grantha']) ? $src['grantha'] : '') . ' ' . (isset($src['locator']) ? $src['locator'] : ''));
        $results[] = array(
            'id' => isset($e['id']) ? $e['id'] : '',
            'deva' => isset($e['deva']) ? $e['deva'] : '',
            'iast' => isset($e['iast']) ? $e['iast'] : '',
            'pillar' => isset($e['pillar']) ? $e['pillar'] : '',
            'domain' => isset($e['domain']) ? $e['domain'] : '',
            'englishGlosses' => isset($e['englishGlosses']) ? $e['englishGlosses'] : array(),
            'meaningShort' => isset($e['meaningShort']) ? $e['meaningShort'] : '',
            'lakshanaDeva' => isset($e['lakshanaDeva']) ? $e['lakshanaDeva'] : '',
            'citation' => $citation,
            'source' => $src,
            'url' => 'https://h3manth.com/fun/tattvakosha/#' . rawurlencode(isset($e['id']) ? $e['id'] : '')
        );
    }

    echo json_encode(array(
        'query' => $q,
        'pillar' => $pillar,
        'count' => count($results),
        'results' => $results
    ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

http_response_code(400);
echo json_encode(array(
    'error' => 'Supported actions: search, entry, stats, markdown',
    'openapi' => 'https://h3manth.com/fun/tattvakosha/openapi.json'
));
