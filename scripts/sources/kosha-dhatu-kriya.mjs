// Pillar 4 (Kosha): Classical Sanskrit Verbal Roots (Dhātupāṭha & Kriyā)
// Grounded in Pāṇini's Dhātupāṭha & Aṣṭādhyāyī, Yāska's Nirukta, and Mādhavīyadhātuvṛtti.

export const koshaDhatuKriyaEntries = [
  {
    id: "dhatu-bhu",
    deva: "भू (भवति)",
    iast: "bhū (bhavati)",
    stem: "√bhū",
    pos: "dhātu (verb)",
    englishGlosses: ["to be", "to become", "to exist", "to arise"],
    phoneticAliases: ["bhu", "bhoo", "bhavati", "bhava", "be", "become", "exist"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "भू सत्तायाम् । भवति भूतं भव्यं भविष्यदिति सत्ताप्रतीतिः ।",
    lakshanaIast: "bhū sattāyām | bhavati bhūtaṃ bhavyaṃ bhaviṣyad iti sattāpratītiḥ |",
    meaningShort: "To be, to exist, to become — the inaugural verbal root of Pāṇini's Dhātupāṭha signifying real existence (sattā).",
    meaningDeep: "Opening the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1) and lending its name to the universal definition of verbs in Aṣṭādhyāyī 1.3.1 (bhūvādayo dhātavaḥ), √bhū expresses dynamic coming-into-being and abiding existence. Its kṛdanta derivatives — bhāva (being/state), bhūta (element/past), bhavana (abode), bhūti (prosperity), and svayambhū (self-existent) — anchor ontology and grammar alike.",
    padaccheda: [
      { deva: "भू", iast: "bhū", gloss: "verbal root √bhū (1P)" },
      { deva: "सत्तायाम्", iast: "sattāyām", gloss: "in the sense of existence / being (artha-nirdeśa)" },
      { deva: "भवति", iast: "bhavati", gloss: "is, exists, becomes (laṭ 3rd sg.)" },
      { deva: "भूतम्", iast: "bhūtam", gloss: "having come to be, past / living being (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1; Aṣṭādhyāyī 1.3.1 (bhūvādayo dhātavaḥ)"
    },
    related: ["bhava", "tattva", "dhatu-as", "dhatu-kri"]
  },
  {
    id: "dhatu-as",
    deva: "अस् (अस्ति)",
    iast: "as (asti)",
    stem: "√as",
    pos: "dhātu (verb)",
    englishGlosses: ["to be", "to exist", "to abide", "there is"],
    phoneticAliases: ["as", "asti", "santi", "asmi", "asi", "syat", "is"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "अस भुवि । अस्ति सन्ति स्यादिति सद्भावनिर्देशः ।",
    lakshanaIast: "asa bhuvi | asti santi syād iti sadbhāvanirdeśaḥ |",
    meaningShort: "To be, to exist — the primary copulative root of the Adādi class expressing pure presence (asti) and real being (sat).",
    meaningDeep: "Belonging to the Adādi-gaṇa (2nd class Parasmaipada, Dhātupāṭha 2.56, where śap is elided by adiprabhṛtibhyaḥ śapaḥ 2.4.72), √as supplies the present-tense copula asti/staḥ/santi and replaces itself with √bhū in ārdhadhātuka tenses (aster bhūḥ 2.4.52). Its present participle sat ('the real / the good') gives rise to satya (truth) and sattva (essence/purity).",
    padaccheda: [
      { deva: "अस", iast: "asa", gloss: "verbal root √as (2P)" },
      { deva: "भुवि", iast: "bhuvi", gloss: "in the sense of being / existence (bhū = sattā)" },
      { deva: "अस्ति", iast: "asti", gloss: "is, exists (laṭ 3rd sg.)" },
      { deva: "सन्ति", iast: "santi", gloss: "they are, exist (laṭ 3rd pl.)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.56; Aṣṭādhyāyī 2.4.52 & 2.4.72"
    },
    related: ["dhatu-bhu", "satya", "asat", "tattva"]
  },
  {
    id: "dhatu-kri",
    deva: "कृ (करोति / कुरुते)",
    iast: "kṛ (karoti / kurute)",
    stem: "√kṛ",
    pos: "dhātu (verb)",
    englishGlosses: ["to do", "to make", "to perform", "to fashion", "to enact"],
    phoneticAliases: ["kri", "kr", "karoti", "kurute", "krita", "kuru", "do", "make"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "डुकृञ् करणे । करोति कुरुते कृतं कार्यमिति उभयपदी ।",
    lakshanaIast: "ḍukṛñ karaṇe | karoti kurute kṛtaṃ kāryam iti ubhayapadī |",
    meaningShort: "To do, make, perform, or accomplish — the archetypal root of action (kriyā, karman, kartṛ).",
    meaningDeep: "Marked in the Tanādi-gaṇa (8th class Ubhayapada, Dhātupāṭha 8.10) with initial anubandha ḍu (enabling kritrima via ḍu-vit-kṛtrimaḥ 3.3.88) and final ñ (conferring both Parasmaipada karoti and Ātmanepada kurute via svaritañitaḥ kartrabhiprāye kriyāphale 1.3.72). Nearly the entire metalanguage of Sanskrit grammar — prakṛti, pratyaya-kārya, kartṛ, karaṇa, karman, kriyā, saṃskṛta — springs from √kṛ.",
    padaccheda: [
      { deva: "डुकृञ्", iast: "ḍukṛñ", gloss: "root √kṛ (8U) with anubandhas ḍu and ñ" },
      { deva: "करणे", iast: "karaṇe", gloss: "in the sense of doing, making, accomplishing" },
      { deva: "करोति", iast: "karoti", gloss: "does, makes (laṭ 3rd sg. Parasmaipada)" },
      { deva: "कुरुते", iast: "kurute", gloss: "does for oneself (laṭ 3rd sg. Ātmanepada)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 8.10; Aṣṭādhyāyī 1.3.72 & 6.4.110 (ata ut sārvadhātuke)"
    },
    related: ["karma", "prakriti", "dhatu-bhu", "prayatna"]
  },
  {
    id: "dhatu-gam",
    deva: "गम् (गच्छति)",
    iast: "gam (gacchati)",
    stem: "√gam",
    pos: "dhātu (verb)",
    englishGlosses: ["to go", "to move", "to reach", "to understand"],
    phoneticAliases: ["gam", "gacchati", "gata", "gamana", "gaccha", "go"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "गमॢ गतौ । गच्छति ग्रामं गतो गमनं गतिरिति ।",
    lakshanaIast: "gamḷ gatau | gacchati grāmaṃ gato gamanaṃ gatir iti |",
    meaningShort: "To go, move toward, attain, or comprehend — the primary Sanskrit root of motion and epistemic attainment.",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1031) with anubandha ḷ (triggering the aorist marker aṅ in agamat), √gam substitutes ch for its final m before śit affixes by Aṣṭādhyāyī 7.3.77 (iṣugamiyamāṃ chaḥ), yielding gacchati. In traditional śāstra, every root of motion (gatyartha) simultaneously denotes intellectual comprehension (sarve gatyarthā jñānārthāḥ), producing avagama (understanding) and āgama (scriptural canon).",
    padaccheda: [
      { deva: "गमॢ", iast: "gamḷ", gloss: "root √gam (1P) with ḷ-it marker" },
      { deva: "गतौ", iast: "gatau", gloss: "in the sense of motion, reaching, knowing" },
      { deva: "गच्छति", iast: "gacchati", gloss: "goes, moves toward (laṭ 3rd sg.)" },
      { deva: "गतः", iast: "gataḥ", gloss: "gone, arrived (kta participle)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1031; Aṣṭādhyāyī 7.3.77 (iṣugamiyamāṃ chaḥ)"
    },
    related: ["dhatu-agam", "agama", "dhatu-cal", "dhatu-car"]
  },
  {
    id: "dhatu-agam",
    deva: "आगम् (आगच्छति)",
    iast: "āgam (āgacchati)",
    stem: "ā + √gam",
    pos: "dhātu (verb)",
    englishGlosses: ["to come", "to arrive", "to return", "to approach"],
    phoneticAliases: ["agam", "aagam", "agacchati", "aagacchati", "agata", "agaccha", "come", "arrive"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "आङ्पूर्वाद् गमॢ गतौ । आगच्छति गृहमागत आगमनमिति ।",
    lakshanaIast: "āṅpūrvād gamḷ gatau | āgacchati gṛham āgata āgamanam iti |",
    meaningShort: "To come, arrive, or approach — √gam reversed in directional vector by the preverb āṅ.",
    meaningDeep: "Illustrating the classic Pāṇinian principle upasargād dhātvarthe balād anyatra nīyate ('the root-sense is redirected by a preverb'), prefixing āṅ (ā-) to √gam ('to go') flips outward motion into inward arrival ('to come'). From this compound arise āgata (arrived/guest), āgamana (arrival), āgantu (newcomer/accidental), and āgama (received Vedic tradition and grammatical augment).",
    padaccheda: [
      { deva: "आङ्-पूर्वात्", iast: "āṅ-pūrvāt", gloss: "preceded by the upasarga āṅ (ā-)" },
      { deva: "गमॢ गतौ", iast: "gamḷ gatau", gloss: "from √gam (1P) in the sense of motion" },
      { deva: "आगच्छति", iast: "āgacchati", gloss: "comes, arrives (laṭ 3rd sg.)" },
      { deva: "आगतः", iast: "āgataḥ", gloss: "come, arrived (lyap: āgamya / āgatya)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1031; Aṣṭādhyāyī 1.4.80 (te prāg dhātoḥ)"
    },
    related: ["dhatu-gam", "agama", "dhatu-ap"]
  },
  {
    id: "dhatu-stha",
    deva: "स्था (तिष्ठति)",
    iast: "sthā (tiṣṭhati)",
    stem: "√sthā",
    pos: "dhātu (verb)",
    englishGlosses: ["to stand", "to stay", "to abide", "to remain", "to pause"],
    phoneticAliases: ["stha", "tishthati", "tishtha", "sthita", "sthana", "stand", "stay"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ष्ठा गतिनिवृत्तौ । तिष्ठति स्थानं स्थितः स्थितिः स्थावरमिति ।",
    lakshanaIast: "ṣṭhā gatinivṛttau | tiṣṭhati sthānaṃ sthitaḥ sthitiḥ sthāvaram iti |",
    meaningShort: "To stand, remain, or abide — defined in the Dhātupāṭha as the cessation of motion (gatinivṛtti).",
    meaningDeep: "Taught as ṣṭhā in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.975, retroflex normalized to sthā by dhātvādeḥ ṣaḥ saḥ 6.1.64), √sthā takes the reduplicated stem tiṣṭha in sārvadhātuka forms by Aṣṭādhyāyī 7.3.78 (pāghrādhmāsthā...) and becomes Ātmanepada (tiṣṭhate) after sam, ava, pra, and vi (1.3.22). Key derivatives include sthiti (maintenance/stability), sthāna (place), avasthā (state), niṣṭhā (culmination), and sthita-prajña.",
    padaccheda: [
      { deva: "ष्ठा", iast: "ṣṭhā", gloss: "root √sthā (1P) taught with initial ṣ for retroflexion rules" },
      { deva: "गति-निवृत्तौ", iast: "gati-nivṛttau", gloss: "in the sense of cessation of movement / standing firm" },
      { deva: "तिष्ठति", iast: "tiṣṭhati", gloss: "stands, remains, abides (laṭ 3rd sg.)" },
      { deva: "स्थितः", iast: "sthitaḥ", gloss: "standing, situated, steadfast (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.975; Aṣṭādhyāyī 7.3.78 & 1.3.22"
    },
    related: ["dhatu-as-sit", "dhatu-vas", "dhatu-gam"]
  },
  {
    id: "dhatu-as-sit",
    deva: "आस् (आस्ते)",
    iast: "ās (āste)",
    stem: "√ās",
    pos: "dhātu (verb)",
    englishGlosses: ["to sit", "to be seated", "to dwell", "to abide quietly"],
    phoneticAliases: ["aas", "aste", "aaste", "asana", "asina", "upasana", "sit"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "आस उपवेशने । आस्ते आसनमासीन उपासना चेति ।",
    lakshanaIast: "āsa upaveśane | āste āsanam āsīna upāsanā ceti |",
    meaningShort: "To sit, be seated, or abide tranquilly — the root underlying āsana (posture/seat) and upāsanā (reverent meditation).",
    meaningDeep: "Conjugated in the Adādi-gaṇa (2nd class Ātmanepada, Dhātupāṭha 2.11, marked anudāttet so it is exclusively Ātmanepada: āste, āsāte, āsate), √ās takes the anomalous present participle āsīna ('seated', by Aṣṭādhyāyī 7.2.83 īd āsaḥ). With the preverb upa- (upāste), it denotes sitting near a teacher or deity in unbroken contemplative devotion — the Vedāntic discipline of upāsanā.",
    padaccheda: [
      { deva: "आस", iast: "āsa", gloss: "root √ās (2Ā)" },
      { deva: "उपवेशने", iast: "upaveśane", gloss: "in the sense of sitting down / taking a seat" },
      { deva: "आस्ते", iast: "āste", gloss: "sits, abides (laṭ 3rd sg. Ātmanepada)" },
      { deva: "आसीनः", iast: "āsīnaḥ", gloss: "seated (śānac participle via īd āsaḥ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.11; Aṣṭādhyāyī 7.2.83 (īd āsaḥ)"
    },
    related: ["dhatu-stha", "dhatu-shi", "dhyana"]
  },
  {
    id: "dhatu-shi",
    deva: "शी (शेते)",
    iast: "śī (śete)",
    stem: "√śī",
    pos: "dhātu (verb)",
    englishGlosses: ["to lie down", "to sleep", "to repose", "to rest"],
    phoneticAliases: ["shi", "shete", "shayana", "shayita", "shayya", "sleep", "lie"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "शीङ् स्वप्ने । शेते शयनं शय्या शयित इति ।",
    lakshanaIast: "śīṅ svapne | śete śayanaṃ śayyā śayita iti |",
    meaningShort: "To lie down, repose, or sleep — an Adādi Ātmanepada root with universal sārvadhātuka guṇa.",
    meaningDeep: "Taught as śīṅ in the Adādi-gaṇa (2nd class Ātmanepada, Dhātupāṭha 2.22, ṅ-it securing Ātmanepada), √śī uniquely undergoes guṇa even before weak sārvadhātuka endings by Aṣṭādhyāyī 7.4.21 (śīṅaḥ sārvadhātuke guṇaḥ) and inserts a rut-augment in 3rd plural śerate (7.1.6 śīṅo ruṭ). It yields śayana (repose/bed), śayyā (couch), atiśaya (eminence), and the sacred epithet Śeṣaśāyin.",
    padaccheda: [
      { deva: "शीङ्", iast: "śīṅ", gloss: "root √śī (2Ā) with ṅ-it Ātmanepada marker" },
      { deva: "स्वप्ने", iast: "svapne", gloss: "in the sense of sleeping / reclining" },
      { deva: "शेते", iast: "śete", gloss: "lies down, sleeps (laṭ 3rd sg.; pl. śerate)" },
      { deva: "शयनम्", iast: "śayanam", gloss: "sleeping, resting place (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.22; Aṣṭādhyāyī 7.4.21 & 7.1.6"
    },
    related: ["svapna", "sushupti", "dhatu-as-sit"]
  },
  {
    id: "dhatu-vas",
    deva: "वस् (वसति)",
    iast: "vas (vasati)",
    stem: "√vas",
    pos: "dhātu (verb)",
    englishGlosses: ["to dwell", "to live", "to inhabit", "to reside"],
    phoneticAliases: ["vas", "vasati", "vasa", "nivasa", "ushita", "dwell", "reside"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वस निवासे । वसति ग्रामे वासो निवास उषित इति ।",
    lakshanaIast: "vasa nivāse | vasati grāme vāso nivāsa uṣita iti |",
    meaningShort: "To dwell, reside, or abide — the primary root of habitation (nivāsa) and indwelling presence.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1054; distinct from 2Ā vas ācchādane, 'to wear clothes', vaste), √vas undergoes samprasāraṇa (va → u) in kit participial forms by Aṣṭādhyāyī 6.1.15 (vacisvapiyajādīnāṃ kiti), forming uṣita ('dwelt') and uṣitvā. When preceded by upa-, anu-, adhi-, or āṅ, its locus becomes syntactic karman by 1.4.48 (upānvadhyāṅvasaḥ), while Vāsudeva derives from √vas signifying the all-indwelling Lord.",
    padaccheda: [
      { deva: "वस", iast: "vasa", gloss: "root √vas (1P)" },
      { deva: "निवासे", iast: "nivāse", gloss: "in the sense of dwelling, residing" },
      { deva: "वसति", iast: "vasati", gloss: "dwells, lives (laṭ 3rd sg.)" },
      { deva: "उषितः", iast: "uṣitaḥ", gloss: "having dwelt (kta with samprasāraṇa)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1054; Aṣṭādhyāyī 1.4.48 & 6.1.15"
    },
    related: ["vasudeva", "dhatu-jiv", "dhatu-stha"]
  },
  {
    id: "dhatu-jiv",
    deva: "जीव् (जीवति)",
    iast: "jīv (jīvati)",
    stem: "√jīv",
    pos: "dhātu (verb)",
    englishGlosses: ["to live", "to be alive", "to breathe", "to subsist"],
    phoneticAliases: ["jiv", "jeev", "jivati", "jeevati", "jivana", "jivita", "live"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "जीव प्राणधारणे । जीवति जन्तुर्जीवनं जीवितं जीव इति ।",
    lakshanaIast: "jīva prāṇadhāraṇe | jīvati jantur jīvanaṃ jīvitaṃ jīva iti |",
    meaningShort: "To live, breathe, and sustain vital breaths (prāṇadhāraṇa) — the root of jīva (individual soul) and jīvana (life).",
    meaningDeep: "Assigned to the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.594), √jīv defines biological and conscious vitality directly as prāṇadhāraṇa ('sustaining the vital airs'). From it derive jīva (the embodied conscious self who sustains prāṇa), jīvana (life, livelihood, and metaphorically water), jīvita (lifespan), and upajīvikā (means of subsistence).",
    padaccheda: [
      { deva: "जीव", iast: "jīva", gloss: "root √jīv (1P)" },
      { deva: "प्राण-धारणे", iast: "prāṇa-dhāraṇe", gloss: "in the sense of sustaining vital breaths" },
      { deva: "जीवति", iast: "jīvati", gloss: "lives, breathes (laṭ 3rd sg.)" },
      { deva: "जीवनम्", iast: "jīvanam", gloss: "life, vitality, sustenance (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.594 (jīva prāṇadhāraṇe)"
    },
    related: ["jeeva", "prana", "dhatu-mri", "dhatu-jan"]
  },
  {
    id: "dhatu-jan",
    deva: "जन् (जायते)",
    iast: "jan (jāyate)",
    stem: "√jan",
    pos: "dhātu (verb)",
    englishGlosses: ["to be born", "to arise", "to originate", "to spring forth"],
    phoneticAliases: ["jan", "jayate", "jaayate", "jata", "janma", "janana", "born", "arise"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "जनी प्रादुर्भावे । जायतेऽङ्कुरो जन्म जातं जनक इति ।",
    lakshanaIast: "janī prādurbhāve | jāyate'ṅkuro janma jātaṃ janaka iti |",
    meaningShort: "To be born, become manifest, or arise (prādurbhāva) — the classical root of birth, origin, and lineage.",
    meaningDeep: "Taught as janī in the Divādi-gaṇa (4th class Ātmanepada, Dhātupāṭha 4.41), √jan replaces itself with jā before śit affixes by Aṣṭādhyāyī 7.3.79 (jñājanor jā), yielding jāyate ('is born / arises'), whose source of origination takes the ablative case by 1.4.30 (janikartuḥ prakṛtiḥ). Its prolific family includes janman (birth), jana (person/folk), jāti (species/universal), janaka (progenitor), and compound-final -ja (e.g., paṅkaja, dvija, agraja).",
    padaccheda: [
      { deva: "जनी", iast: "janī", gloss: "root √jan (4Ā)" },
      { deva: "प्रादुर्भावे", iast: "prādurbhāve", gloss: "in the sense of manifestation, coming forth into being" },
      { deva: "जायते", iast: "jāyate", gloss: "is born, arises (laṭ 3rd sg.)" },
      { deva: "जन्म", iast: "janma", gloss: "birth, origin (manin derivative)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 4.41; Aṣṭādhyāyī 7.3.79 & 1.4.30"
    },
    related: ["jati", "dhatu-mri", "dhatu-bhu", "dhatu-srij"]
  },
  {
    id: "dhatu-mri",
    deva: "मृ (म्रियते)",
    iast: "mṛ (mriyate)",
    stem: "√mṛ",
    pos: "dhātu (verb)",
    englishGlosses: ["to die", "to pass away", "to perish"],
    phoneticAliases: ["mri", "mr", "mriyate", "mrita", "mrityu", "marana", "die"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "मृङ् प्राणत्यागे । म्रियते देही मरणं मृतो मृत्युरमृतमिति ।",
    lakshanaIast: "mṛṅ prāṇatyāge | mriyate dehī maraṇaṃ mṛto mṛtyur amṛtam iti |",
    meaningShort: "To die or depart from vital breath (prāṇatyāga) — the root behind mṛtyu (death), martya (mortal), and amṛta (immortal).",
    meaningDeep: "Listed as mṛṅ in the Tudādi-gaṇa (6th class, Dhātupāṭha 6.110), √mṛ takes Ātmanepada endings only before śit markers, luṅ, and liṅ by Aṣṭādhyāyī 1.3.61 (mriyater luṅliṅoś ca) — hence present mriyate (with riy-substitution via 7.4.28 riṅ śayagliṅkṣu), but future mariṣyati and perfect mamāra in Parasmaipada. Negation of its participle mṛta yields amṛta — both the nectar of immortality and liberation.",
    padaccheda: [
      { deva: "मृङ्", iast: "mṛṅ", gloss: "root √mṛ (6Ā in present)" },
      { deva: "प्राण-त्यागे", iast: "prāṇa-tyāge", gloss: "in the sense of relinquishing vital breaths" },
      { deva: "म्रियते", iast: "mriyate", gloss: "dies, passes away (laṭ 3rd sg.)" },
      { deva: "मृतः", iast: "mṛtaḥ", gloss: "dead, deceased (kta; negated: amṛta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.110; Aṣṭādhyāyī 1.3.61 & 7.4.28"
    },
    related: ["dhatu-jiv", "dhatu-jan", "dhatu-nash", "prana"]
  },
  {
    id: "dhatu-vridh",
    deva: "वृध् (वर्धते)",
    iast: "vṛdh (vardhate)",
    stem: "√vṛdh",
    pos: "dhātu (verb)",
    englishGlosses: ["to grow", "to increase", "to prosper", "to thrive"],
    phoneticAliases: ["vridh", "vrdh", "vardhate", "vriddhi", "vriddha", "vardhana", "grow"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वृधु वृद्धौ । वर्धते विद्या वृद्धिर्वृद्धः संवर्धनमिति ।",
    lakshanaIast: "vṛdhu vṛddhau | vardhate vidyā vṛddhir vṛddhaḥ saṃvardhanam iti |",
    meaningShort: "To grow, expand, or prosper — the root of organic growth and Pāṇini's opening technical term vṛddhi.",
    meaningDeep: "Belonging to the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.796, taking optional Parasmaipada in ārdhadhātuka future/aorist by vṛdbhyaḥ syasanoḥ 1.3.92, e.g., vartsyati / vardhiṣyate), √vṛdh furnishes vṛddhi — chosen by Pāṇini as the auspicious very first word of the Aṣṭādhyāyī (1.1.1 vṛddhir ād aic) — alongside vṛddha (elder/grown) and vardhana (nurturing).",
    padaccheda: [
      { deva: "वृधु", iast: "vṛdhu", gloss: "root √vṛdh (1Ā)" },
      { deva: "वृद्धौ", iast: "vṛddhau", gloss: "in the sense of growth, increase, prosperity" },
      { deva: "वर्धते", iast: "vardhate", gloss: "grows, thrives, increases (laṭ 3rd sg.)" },
      { deva: "वृद्धिः", iast: "vṛddhiḥ", gloss: "growth, vocalic expansion (ktin noun)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.796; Aṣṭādhyāyī 1.1.1 & 1.3.92"
    },
    related: ["dhatu-bhu", "mahat", "brihat"]
  },
  {
    id: "dhatu-jna",
    deva: "ज्ञा (जानाति / जानीते)",
    iast: "jñā (jānāti / jānīte)",
    stem: "√jñā",
    pos: "dhātu (verb)",
    englishGlosses: ["to know", "to understand", "to recognize", "to realize"],
    phoneticAliases: ["jna", "jnya", "gya", "janati", "jaanati", "jnana", "jnata", "know"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ज्ञा अवबोधने । जानाति तत्त्वं ज्ञानं ज्ञाता विज्ञेयमिति ।",
    lakshanaIast: "jñā avabodhane | jānāti tattvaṃ jñānaṃ jñātā vijñeyam iti |",
    meaningShort: "To know, cognize, or comprehend (avabodhana) — the premier epistemic root of Sanskrit philosophy.",
    meaningDeep: "Conjugated in the Kryādi-gaṇa (9th class, Dhātupāṭha 9.36) with class affix śnā and stem replacement jā by Aṣṭādhyāyī 7.3.79 (jñājanor jā), yielding jānāti (and Ātmanepada jānīte with specific preverbs or non-sensory senses per 1.3.44–46, e.g., saṃjānīte). It generates the entire triad of epistemology: jñātṛ (knower), jñāna (cognition/knowledge), and jñeya (object of knowledge), plus prajñā, vijñāna, and ājñā.",
    padaccheda: [
      { deva: "ज्ञा", iast: "jñā", gloss: "root √jñā (9P / 9U with preverbs)" },
      { deva: "अवबोधने", iast: "avabodhane", gloss: "in the sense of cognition, realization, understanding" },
      { deva: "जानाति", iast: "jānāti", gloss: "knows, understands (laṭ 3rd sg.)" },
      { deva: "ज्ञानम्", iast: "jñānam", gloss: "knowledge, awareness (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 9.36; Aṣṭādhyāyī 7.3.79 (jñājanor jā)"
    },
    related: ["dhatu-vid", "dhatu-budh", "pramana", "aparokshajnana"]
  },
  {
    id: "dhatu-vid",
    deva: "विद् (वेत्ति / वेद)",
    iast: "vid (vetti / veda)",
    stem: "√vid",
    pos: "dhātu (verb)",
    englishGlosses: ["to know", "to understand", "to discern", "to find"],
    phoneticAliases: ["vid", "vetti", "veda", "vidya", "vidita", "vidvan", "know"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "विद ज्ञाने । वेत्ति वेद वा तत्त्वं विद्या विदितो विद्वानिति ।",
    lakshanaIast: "vida jñāne | vetti veda vā tattvaṃ vidyā vidito vidvān iti |",
    meaningShort: "To know directly — the root from which Veda, vidyā (knowledge), and vidvān (sage/scholar) are derived.",
    meaningDeep: "Sanskrit distinguishes four homophonous √vid roots across gaṇas: 2P vida jñāne (vetti, 'knows'), 4Ā vida sattāyām (vidyate, 'exists/is found'), 6U vidaḷ lābhe (vindati, 'finds/gains'), and 7Ā vida vicāraṇe (vintte, 'reflects'). In 2P (Dhātupāṭha 2.55), Pāṇini teaches optional perfect-form endings in the present tense (3.4.83 vido laṭo vā: veda, vidatuḥ, viduḥ alongside vetti, vittaḥ, vidanti) and the śatṛ participle vidvas (nom. vidvān).",
    padaccheda: [
      { deva: "विद", iast: "vida", gloss: "root √vid (2P; cf. 4Ā vidyate, 6U vindati)" },
      { deva: "ज्ञाने", iast: "jñāne", gloss: "in the sense of knowing" },
      { deva: "वेत्ति / वेद", iast: "vetti / veda", gloss: "knows (laṭ 3rd sg. regular and ṇal-substituted)" },
      { deva: "विद्वान्", iast: "vidvān", gloss: "one who knows, learned scholar (vasu participle)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.55; Aṣṭādhyāyī 3.4.83 (vido laṭo vā)"
    },
    related: ["dhatu-jna", "avidya", "prajna-adj", "pramana"]
  },
  {
    id: "dhatu-budh",
    deva: "बुध् (बोधति / बुध्यते)",
    iast: "budh (bodhati / budhyate)",
    stem: "√budh",
    pos: "dhātu (verb)",
    englishGlosses: ["to awaken", "to perceive", "to understand", "to fathom"],
    phoneticAliases: ["budh", "bodhati", "budhyate", "buddha", "bodha", "buddhi", "awaken"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "बुध अवगमने । बोधति बुध्यते वा तत्त्वं बुद्धो बोधो बुद्धिरिति ।",
    lakshanaIast: "budha avagamane | bodhati budhyate vā tattvaṃ buddho bodho buddhir iti |",
    meaningShort: "To awaken, grasp, or comprehend (avagamana) — the root of buddhi (intellect), bodha (awakening), and buddha.",
    meaningDeep: "Read both in the Bhvādi-gaṇa (1U, Dhātupāṭha 1.911: bodhati/bodhate) and the Divādi-gaṇa (4Ā, Dhātupāṭha 4.63, budha avagamane: budhyate), √budh unites literal waking from sleep (prabodha) with intellectual dawning of truth. By Grassmann's law (ekāco baśo bhaṣ... 8.2.37) its underlying aspirate surfaces when final dh deaspirates, as in fut. bhotsyate and desid. bubhutsate ('desires to know').",
    padaccheda: [
      { deva: "बुध", iast: "budha", gloss: "root √budh (1U & 4Ā)" },
      { deva: "अवगमने", iast: "avagamane", gloss: "in the sense of awakening to / comprehending" },
      { deva: "बोधति / बुध्यते", iast: "bodhati / budhyate", gloss: "awakens, understands (laṭ 3rd sg. 1P / 4Ā)" },
      { deva: "बुद्धिः", iast: "buddhiḥ", gloss: "intellect, discerning faculty (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.911 & 4.63 (budha avagamane)"
    },
    related: ["dhatu-jna", "dhatu-man", "jagrat", "mahattattva"]
  },
  {
    id: "dhatu-man",
    deva: "मन् (मन्यते)",
    iast: "man (manyate)",
    stem: "√man",
    pos: "dhātu (verb)",
    englishGlosses: ["to think", "to reflect", "to consider", "to esteem", "to deem"],
    phoneticAliases: ["man", "manyate", "manute", "mata", "mati", "manana", "think"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "मन ज्ञाने । मन्यते मनुते वा मननं मतिर्मतं मन इति ।",
    lakshanaIast: "mana jñāne | manyate manute vā mananaṃ matir mataṃ mana iti |",
    meaningShort: "To think, ponder, or deem — the root behind manas (mind), mati (insight), mantra, and Vedāntic manana.",
    meaningDeep: "Taught in both the Divādi-gaṇa (4Ā, Dhātupāṭha 4.67, mana jñāne: manyate) and Tanādi-gaṇa (8Ā, Dhātupāṭha 8.9, manu avabodhane: manute), √man is one of the richest cognitive roots in Indo-Iranian and Sanskrit. It yields manas (the deliberative mind), mati (thought/devotion), mata (tenet/view), manīṣā (wisdom), muni (silent contemplative), mantra (sacred formula), and manana (rational reflection following śravaṇa).",
    padaccheda: [
      { deva: "मन", iast: "mana", gloss: "root √man (4Ā; also 8Ā manu)" },
      { deva: "ज्ञाने", iast: "jñāne", gloss: "in the sense of thinking, reflecting, knowing" },
      { deva: "मन्यते", iast: "manyate", gloss: "thinks, considers, regards (laṭ 3rd sg.)" },
      { deva: "मननम्", iast: "mananam", gloss: "critical reflection (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 4.67 (mana jñāne) & 8.9 (manu avabodhane)"
    },
    related: ["manas", "manana", "dhatu-cint", "dhatu-budh"]
  },
  {
    id: "dhatu-cint",
    deva: "चिन्त् (चिन्तयति)",
    iast: "cint (cintayati)",
    stem: "√cint",
    pos: "dhātu (verb)",
    englishGlosses: ["to contemplate", "to ponder", "to meditate upon", "to worry"],
    phoneticAliases: ["cint", "chint", "cintayati", "chintayati", "cinta", "chinta", "cintana", "ponder"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "चिती स्मृत्याम् । चिन्तयति चिन्तयते चिन्तनं चिन्ता चिन्तितमिति ।",
    lakshanaIast: "citī smṛtyām | cintayati cintayate cintanaṃ cintā cintitam iti |",
    meaningShort: "To ponder, contemplate, or reflect deeply — a Curādi root forming cintana (reflection) and cintā (thought/concern).",
    meaningDeep: "Opened near the very head of the Curādi-gaṇa (10th class Ubhayapada, Dhātupāṭha 10.2) as citī smṛtyām, its short i-it anubandha triggers obligatory nasal infixes (num) by Aṣṭādhyāyī 7.1.58 (idito num dhātoḥ), producing stem cint- + ṇic → cintayati / cintayate. Depending on context, cintana signifies serene philosophical contemplation, whereas cintā often denotes anxious care.",
    padaccheda: [
      { deva: "चिती", iast: "citī", gloss: "root √cint (10U, i-it yielding nasal num)" },
      { deva: "स्मृत्याम्", iast: "smṛtyām", gloss: "in the sense of recollective thought / contemplation" },
      { deva: "चिन्तयति", iast: "cintayati", gloss: "ponders, meditates upon (laṭ 3rd sg.)" },
      { deva: "चिन्तनम्", iast: "cintanam", gloss: "sustained reflection, meditation (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 10.2; Aṣṭādhyāyī 7.1.58 & 3.1.25"
    },
    related: ["dhatu-man", "dhatu-smri", "dhyana", "manas"]
  },
  {
    id: "dhatu-smri",
    deva: "स्मृ (स्मरति)",
    iast: "smṛ (smarati)",
    stem: "√smṛ",
    pos: "dhātu (verb)",
    englishGlosses: ["to remember", "to recollect", "to call to mind", "to hand down in tradition"],
    phoneticAliases: ["smri", "smr", "smarati", "smriti", "smarana", "smrita", "remember"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "स्मृ चिन्तायाम् । स्मरति पूर्ववृत्तं स्मृतिः स्मरणं स्मृतमिति ।",
    lakshanaIast: "smṛ cintāyām | smarati pūrvavṛttaṃ smṛtiḥ smaraṇaṃ smṛtam iti |",
    meaningShort: "To remember, recollect, or Yearn — the root of smṛti (memory and sacred traditional canon) and smaraṇa.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.980), √smṛ governs the accusative in ordinary remembrance (smarati mātaraṃ) and the genitive when colored by nostalgic longing by Aṣṭādhyāyī 2.3.52 (adhīgarthadayeśāṃ karmaṇi: mātuḥ smarati). Its ktin derivative smṛti denotes both psychological memory (saṃskāramātrajanyaṃ jñānam) and the authoritative Dharmaśāstra/Itihāsa-Purāṇa corpus that remembers Vedic truth.",
    padaccheda: [
      { deva: "स्मृ", iast: "smṛ", gloss: "root √smṛ (1P)" },
      { deva: "चिन्तायाम्", iast: "cintāyām", gloss: "in the sense of calling to mind / recollecting" },
      { deva: "स्मरति", iast: "smarati", gloss: "remembers, recalls (laṭ 3rd sg.)" },
      { deva: "स्मृतिः", iast: "smṛtiḥ", gloss: "memory, traditional canon (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.980; Aṣṭādhyāyī 2.3.52"
    },
    related: ["smriti", "dhatu-cint", "dhatu-shru", "vasana"]
  },
  {
    id: "dhatu-drish",
    deva: "दृश् (पश्यति)",
    iast: "dṛś (paśyati)",
    stem: "√dṛś",
    pos: "dhātu (verb)",
    englishGlosses: ["to see", "to behold", "to perceive", "to intuit"],
    phoneticAliases: ["drish", "drs", "pashyati", "pashya", "drishta", "drishti", "darshana", "see"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "दृशिर् प्रेक्षणे । पश्यति रूपं दृष्टो दर्शनं दृष्टिरिति ।",
    lakshanaIast: "dṛśir prekṣaṇe | paśyati rūpaṃ dṛṣṭo darśanaṃ dṛṣṭir iti |",
    meaningShort: "To see, behold, or directly intuit — replaced by paśya- in the present system and giving rise to darśana (philosophy).",
    meaningDeep: "Listed as dṛśir in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1037, ir-it permitting optional aṅ in the aorist adarśat / adrākṣīt), √dṛś substitutes paśya before śit affixes by Aṣṭādhyāyī 7.3.78 (paśyati, apaśyat, paśyet) while retaining dṛś- in ārdhadhātuka forms (drakṣyati, dadarśa, dṛṣṭa, draṣṭum). From it come dṛṣṭi (vision), draṣṭṛ (seer — ṛṣayo mantradraṣṭāraḥ), dṛṣṭānta (exemplar), and darśana (philosophical vision).",
    padaccheda: [
      { deva: "दृशिर्", iast: "dṛśir", gloss: "root √dṛś (1P) with ir-it marker" },
      { deva: "प्रेक्षणे", iast: "prekṣaṇe", gloss: "in the sense of seeing, beholding" },
      { deva: "पश्यति", iast: "paśyati", gloss: "sees, beholds (laṭ 3rd sg. via paśya- substitution)" },
      { deva: "दर्शनम्", iast: "darśanam", gloss: "vision, direct sight, philosophical system (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1037; Aṣṭādhyāyī 7.3.78"
    },
    related: ["dhatu-iksh", "pratyaksha", "drishtanta", "rishi"]
  },
  {
    id: "dhatu-iksh",
    deva: "ईक्ष् (ईक्षते)",
    iast: "īkṣ (īkṣate)",
    stem: "√īkṣ",
    pos: "dhātu (verb)",
    englishGlosses: ["to behold", "to gaze upon", "to observe", "to examine", "to reflect"],
    phoneticAliases: ["iksh", "eeksh", "ikshate", "ikshana", "pariksha", "apeksha", "upeksha", "observe"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ईक्ष दर्शने । ईक्षते तत्त्वमीक्षणं परीक्षापेक्षेति ।",
    lakshanaIast: "īkṣa darśane | īkṣate tattvam īkṣaṇaṃ parīkṣāpekṣeti |",
    meaningShort: "To gaze, observe, or reflectively examine — an Ātmanepada root central to Vedāntic cosmology (īkṣatyadhikaraṇa) and Nyāya parīkṣā.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.641), √īkṣ signifies deliberate, conscious looking or intellectual inspection. In Brahmasūtra 1.1.5 (īkṣater nāśabdam), the Upaniṣadic verb aikṣata ('He beheld / reflected prior to creation', Chāndogya 6.2.3) proves that the world's cause is an omniscient sentient Lord rather than insentient Prakṛti. With preverbs it yields parīkṣā (critical investigation), apekṣā (requirement/dependence), upekṣā (equanimity), and pratīkṣā (expectation).",
    padaccheda: [
      { deva: "ईक्ष", iast: "īkṣa", gloss: "root √īkṣ (1Ā)" },
      { deva: "दर्शने", iast: "darśane", gloss: "in the sense of seeing, inspecting, reflecting" },
      { deva: "ईक्षते", iast: "īkṣate", gloss: "beholds, observes, reflects (laṭ 3rd sg.)" },
      { deva: "ईक्षणम्", iast: "īkṣaṇam", gloss: "gaze, eye, conscious deliberation (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Brahmasūtra",
      granthaDeva: "पाणिनीयधातुपाठः · ब्रह्मसूत्रम्",
      author: "Pāṇini / Bādarāyaṇa",
      locator: "Dhātupāṭha 1.641; Brahmasūtra 1.1.5 (īkṣater nāśabdam)"
    },
    related: ["dhatu-drish", "sakshi", "pratyaksha"]
  },
  {
    id: "dhatu-shru",
    deva: "श्रु (शृणोति)",
    iast: "śru (śṛṇoti)",
    stem: "√śru",
    pos: "dhātu (verb)",
    englishGlosses: ["to hear", "to listen", "to learn from a teacher", "to study"],
    phoneticAliases: ["shru", "shrinoti", "shrnoti", "shruti", "shravana", "shruta", "shrotri", "hear", "listen"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "श्रु श्रवणे । शृणोति शास्त्रं श्रुतिः श्रवणं श्रुतमिति ।",
    lakshanaIast: "śru śravaṇe | śṛṇoti śāstraṃ śrutiḥ śravaṇaṃ śrutam iti |",
    meaningShort: "To hear, listen attentively, and receive oral wisdom — the root of Śruti (the Veda) and śravaṇa.",
    meaningDeep: "Although listed in the Bhvādi-gaṇa (Dhātupāṭha 1.989), Pāṇini's Aṣṭādhyāyī 3.1.74 (śruvaḥ śṛ ca) simultaneously replaces √śru with śṛ and attaches the Svādi (5th class) affix śnu, yielding śṛṇoti, śṛṇutaḥ, śṛṇvanti. In Indian intellectual culture, hearing from a guru is the gateway to wisdom, giving śruta ('sacred learning'), śruti ('the eternal Veda heard by ṛṣis'), śrotra ('ear'), and śravaṇa.",
    padaccheda: [
      { deva: "श्रु", iast: "śru", gloss: "root √śru (1P conjugated as 5P via śruvaḥ śṛ ca)" },
      { deva: "श्रवणे", iast: "śravaṇe", gloss: "in the sense of hearing, listening" },
      { deva: "शृणोति", iast: "śṛṇoti", gloss: "hears, listens to (laṭ 3rd sg.)" },
      { deva: "श्रुतिः", iast: "śrutiḥ", gloss: "hearing, ear, the revealed Veda (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.989; Aṣṭādhyāyī 3.1.74 (śruvaḥ śṛ ca)"
    },
    related: ["shravana", "agama", "apaurusheya", "dhatu-vac"]
  },
  {
    id: "dhatu-vad",
    deva: "वद् (वदति)",
    iast: "vad (vadati)",
    stem: "√vad",
    pos: "dhātu (verb)",
    englishGlosses: ["to speak", "to say", "to utter articulately", "to discourse"],
    phoneticAliases: ["vad", "vadati", "vada", "udita", "vadana", "speak", "say"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वद व्यक्तायां वाचि । वदति सत्यं वादो वदनमुदितमिति ।",
    lakshanaIast: "vada vyaktāyāṃ vāci | vadati satyaṃ vādo vadanam uditam iti |",
    meaningShort: "To speak clearly and articulately (vyaktāyāṃ vāci) — the root of vāda (truth-seeking philosophical debate).",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1058, taking Ātmanepada under specific conditions of brilliance, unanimity, or contention per Aṣṭādhyāyī 1.3.47–50, e.g., sampravadante brāhmaṇāḥ), √vad undergoes samprasāraṇa (va → u) in kit forms (udita, uditvā, 6.1.15). Its ghañ derivative vāda designates both philosophical doctrine (e.g., tattvavāda) and honest dialectical inquiry.",
    padaccheda: [
      { deva: "वद", iast: "vada", gloss: "root √vad (1P)" },
      { deva: "व्यक्तायाम् वाचि", iast: "vyaktāyāṃ vāci", gloss: "in the sense of articulate human speech" },
      { deva: "वदति", iast: "vadati", gloss: "speaks, utters (laṭ 3rd sg.)" },
      { deva: "उदितम्", iast: "uditam", gloss: "spoken, declared (kta with samprasāraṇa)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1058; Aṣṭādhyāyī 1.3.47 & 6.1.15"
    },
    related: ["vada", "dhatu-vac", "dhatu-bhash", "katha"]
  },
  {
    id: "dhatu-vac",
    deva: "वच् (वक्ति)",
    iast: "vac (vakti)",
    stem: "√vac",
    pos: "dhātu (verb)",
    englishGlosses: ["to speak", "to declare", "to state", "to express"],
    phoneticAliases: ["vac", "vach", "vakti", "uvaca", "ukta", "vacana", "vak", "vakya", "declare"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वच परिभाषणे । वक्ति वाक्यं वचनमुक्तं वागिति ।",
    lakshanaIast: "vaca paribhāṣaṇe | vakti vākyaṃ vacanam uktaṃ vāg iti |",
    meaningShort: "To speak, declare, or expound (paribhāṣaṇa) — the root of vāk (sacred Speech), vākya (sentence), and ukta.",
    meaningDeep: "Placed in the Adādi-gaṇa (2nd class Parasmaipada, Dhātupāṭha 2.54: vakti, vaktaḥ; also supplying ārdhadhātuka forms for √brū via bruvo vaciḥ 2.4.53, such as perfect uvāca, aorist avocat, and future vakṣyati), √vac takes samprasāraṇa in kit forms (ukta, ukti, uktvā by 6.1.15). From it arise vāc/vāk (goddess and faculty of speech), vacana (statement/grammatical number), vācya (expressed meaning), and pravacana (authoritative exposition).",
    padaccheda: [
      { deva: "वच", iast: "vaca", gloss: "root √vac (2P)" },
      { deva: "परिभाषणे", iast: "paribhāṣaṇe", gloss: "in the sense of speaking, stating, defining" },
      { deva: "वक्ति", iast: "vakti", gloss: "speaks, declares (laṭ 3rd sg.; perf. uvāca)" },
      { deva: "उक्तम्", iast: "uktam", gloss: "said, stated (kta with samprasāraṇa)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.54; Aṣṭādhyāyī 2.4.53 & 6.1.15"
    },
    related: ["dhatu-vad", "dhatu-bhash", "nirukti", "katha"]
  },
  {
    id: "dhatu-bhash",
    deva: "भाष् (भाषते)",
    iast: "bhāṣ (bhāṣate)",
    stem: "√bhāṣ",
    pos: "dhātu (verb)",
    englishGlosses: ["to speak", "to converse", "to expound", "to comment"],
    phoneticAliases: ["bhash", "bhashate", "bhasha", "bhashya", "bhashita", "converse"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "भाष व्यक्तायां वाचि । भाषते संस्कृतं भाषा भाष्यं भाषितमिति ।",
    lakshanaIast: "bhāṣa vyaktāyāṃ vāci | bhāṣate saṃskṛtaṃ bhāṣā bhāṣyaṃ bhāṣitam iti |",
    meaningShort: "To speak articulately or converse — the Ātmanepada root of bhāṣā (language) and bhāṣya (monumental commentary).",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.643), √bhāṣ gives Sanskrit its word for spoken language itself (bhāṣā — which Pāṇini uses in contrast to chandas, Vedic idiom), paribhāṣā (metarule of interpretation), subhāṣita (eloquent aphorism), and bhāṣya (comprehensive philosophical commentary such as Patañjali's Mahābhāṣya or Madhvācārya's Brahmasūtrabhāṣya).",
    padaccheda: [
      { deva: "भाष", iast: "bhāṣa", gloss: "root √bhāṣ (1Ā)" },
      { deva: "व्यक्तायाम् वाचि", iast: "vyaktāyāṃ vāci", gloss: "in the sense of articulate speech" },
      { deva: "भाषते", iast: "bhāṣate", gloss: "speaks, converses (laṭ 3rd sg.)" },
      { deva: "भाष्यम्", iast: "bhāṣyam", gloss: "authoritative commentary / exposition (ṇyat)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.643 (bhāṣa vyaktāyāṃ vāci)"
    },
    related: ["dhatu-vad", "dhatu-vac", "dhatu-prach"]
  },
  {
    id: "dhatu-prach",
    deva: "प्रछ् (पृच्छति)",
    iast: "prach (pṛcchati)",
    stem: "√prach",
    pos: "dhātu (verb)",
    englishGlosses: ["to ask", "to question", "to inquire", "to seek to know"],
    phoneticAliases: ["prach", "pracch", "pricchati", "prcchati", "prashna", "prishta", "ask", "question"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "प्रछ ज्ञीप्सायाम् । पृच्छति शिष्यः प्रश्नः पृष्टः पृच्छेति ।",
    lakshanaIast: "pracha jñīpsāyām | pṛcchati śiṣyaḥ praśnaḥ pṛṣṭaḥ pṛccheti |",
    meaningShort: "To ask or inquire out of a desire to know (jñīpsā) — the root of praśna (question/Upaniṣad) and pṛṣṭa.",
    meaningDeep: "Assigned to the Tudādi-gaṇa (6th class Parasmaipada, Dhātupāṭha 6.120), √prach undergoes samprasāraṇa (ra → ṛ) before the weak class affix śa and kit/ṅit suffixes by Aṣṭādhyāyī 6.1.16 (grahi-jyā...pṛcchati...), forming pṛcchati and pṛṣṭa, while retaining pra- in praśna (via śna-affix, 3.3.90 yajayācayatavicchapraccharakṣo naṅ) and fut. prakṣyati. It is also one of the sixteen dvikarmaka roots governing two accusatives (1.4.51 akathitaṃ ca: guruṃ dharmaṃ pṛcchati).",
    padaccheda: [
      { deva: "प्रछ", iast: "pracha", gloss: "root √prach (6P)" },
      { deva: "ज्ञीप्सायाम्", iast: "jñīpsāyām", gloss: "in the sense of desiring to know / inquiring" },
      { deva: "पृच्छति", iast: "pṛcchati", gloss: "asks, inquires (laṭ 3rd sg.)" },
      { deva: "प्रश्नः", iast: "praśnaḥ", gloss: "question, inquiry (naṅ derivative)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.120; Aṣṭādhyāyī 6.1.16, 3.3.90 & 1.4.51"
    },
    related: ["prashnika", "dhatu-jna", "dhatu-vac", "kim"]
  },
  {
    id: "dhatu-path",
    deva: "पठ् (पठति)",
    iast: "paṭh (paṭhati)",
    stem: "√paṭh",
    pos: "dhātu (verb)",
    englishGlosses: ["to read", "to recite", "to study aloud", "to chant"],
    phoneticAliases: ["path", "pathati", "patha", "paatha", "pathana", "pathita", "read", "recite", "study"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "पठ व्यक्तायां वाचि । पठति ग्रन्थं पाठः पठनं पठितमिति ।",
    lakshanaIast: "paṭha vyaktāyāṃ vāci | paṭhati granthaṃ pāṭhaḥ paṭhanaṃ paṭhitam iti |",
    meaningShort: "To recite aloud, read, or study — the root behind pāṭha (textual recitation/recension) and pāṭhaśālā.",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.353), √paṭh originally denotes clear, resonant oral recitation — the foundational mode of textual study in India — and by extension reading and learning. Its ghañ noun pāṭha names the canonical oral recensions of Vedic and grammatical transmission: saṃhitāpāṭha, padapāṭha, kramapāṭha, sūtrapāṭha, and dhātupāṭha.",
    padaccheda: [
      { deva: "पठ", iast: "paṭha", gloss: "root √paṭh (1P)" },
      { deva: "व्यक्तायाम् वाचि", iast: "vyaktāyāṃ vāci", gloss: "in the sense of clear recitation / reading aloud" },
      { deva: "पठति", iast: "paṭhati", gloss: "reads, recites, studies (laṭ 3rd sg.)" },
      { deva: "पाठः", iast: "pāṭhaḥ", gloss: "recitation, lesson, textual reading (ghañ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.353 (paṭha vyaktāyāṃ vāci)"
    },
    related: ["dhatu-likh", "dhatu-shru", "shravana"]
  },
  {
    id: "dhatu-likh",
    deva: "लिख् (लिखति)",
    iast: "likh (likhati)",
    stem: "√likh",
    pos: "dhātu (verb)",
    englishGlosses: ["to write", "to inscribe", "to scratch", "to draw", "to delineate"],
    phoneticAliases: ["likh", "likhati", "lekha", "lekhana", "likhita", "lekhani", "write"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "लिख अक्षरविन्यासे । लिखति पत्रं लेखो लेखनं लिखितमिति ।",
    lakshanaIast: "likha akṣaravinyāse | likhati patraṃ lekho lekhanaṃ likhitam iti |",
    meaningShort: "To write, inscribe, or arrange syllables (akṣaravinyāsa) — the classical root of writing and delineation.",
    meaningDeep: "Belonging to the Tudādi-gaṇa (6th class Parasmaipada, Dhātupāṭha 6.72, where śa is ṅit by sārvadhātukam apit 1.2.4, preventing guṇa in likhati while allowing optional kit in ktvā: likhitvā / lekhitvā by 1.2.26 ralo vyupadhād...), √likh encompasses stylus inscription on palm-leaf, calligraphy, and fine line-drawing (ālekhya, citralekhana). Key derivatives include lekha (epistle/inscription), lekhanī (pen/stylus), and likhita (written document).",
    padaccheda: [
      { deva: "लिख", iast: "likha", gloss: "root √likh (6P)" },
      { deva: "अक्षर-विन्यासे", iast: "akṣara-vinyāse", gloss: "in the sense of setting down letters / inscribing" },
      { deva: "लिखति", iast: "likhati", gloss: "writes, inscribes, draws (laṭ 3rd sg.)" },
      { deva: "लिखितम्", iast: "likhitam", gloss: "written, inscribed (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.72; Aṣṭādhyāyī 1.2.4 & 1.2.26"
    },
    related: ["akshara", "dhatu-path", "varna"]
  },
  {
    id: "dhatu-da",
    deva: "दा (ददाति / दत्ते)",
    iast: "dā (dadāti / datte)",
    stem: "√dā",
    pos: "dhātu (verb)",
    englishGlosses: ["to give", "to bestow", "to grant", "to offer"],
    phoneticAliases: ["da", "daa", "dadati", "datte", "yacchati", "dana", "datta", "give"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "डुदाञ् दाने । ददाति दत्ते दानं दत्तं दातेति ।",
    lakshanaIast: "ḍudāñ dāne | dadāti datte dānaṃ dattaṃ dāteti |",
    meaningShort: "To give, bestow, or offer — the reduplicating Juhotyādi root defining dāna (generosity) and sampradāna.",
    meaningDeep: "Taught primarily as ḍudāñ dāne in the Juhotyādi-gaṇa (3rd class Ubhayapada, Dhātupāṭha 3.9: dadāti / datte, alongside Bhvādi 1.977 dāṇ dāne → yacchati), √dā receives the technical grammatical name ghu by Aṣṭādhyāyī 1.1.20 (dādhā ghv adāp), triggering specialized formations like datta ('given', via 7.4.46 do daddhoḥ). With āṅ (ā + dā), Ātmanepada ādatte reverses the sense to 'takes / receives' (1.3.20 āṅo do'nāsyaviharaṇe), while sampradāna (the dative recipient) is defined directly through giving.",
    padaccheda: [
      { deva: "डुदाञ्", iast: "ḍudāñ", gloss: "root √dā (3U, ghu-saṃjñaka)" },
      { deva: "दाने", iast: "dāne", gloss: "in the sense of giving, bestowing" },
      { deva: "ददाति / दत्ते", iast: "dadāti / datte", gloss: "gives (laṭ 3rd sg. Parasmaipada / Ātmanepada)" },
      { deva: "दानम्", iast: "dānam", gloss: "gift, charity, bestowal (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 3.9 & 1.977; Aṣṭādhyāyī 1.1.20 & 1.3.20"
    },
    related: ["dhatu-grah", "dhatu-labh", "dhatu-tyaj"]
  },
  {
    id: "dhatu-grah",
    deva: "ग्रह् (गृह्णाति / गृह्णीते)",
    iast: "grah (gṛhṇāti / gṛhṇīte)",
    stem: "√grah",
    pos: "dhātu (verb)",
    englishGlosses: ["to grasp", "to seize", "to accept", "to comprehend"],
    phoneticAliases: ["grah", "grihnati", "grhnati", "grahana", "grihita", "graha", "grasp", "take"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ग्रह उपादाने । गृह्णाति गृह्णीते ग्रहणं गृहीतं ग्राह्यमिति ।",
    lakshanaIast: "graha upādāne | gṛhṇāti gṛhṇīte grahaṇaṃ gṛhītaṃ grāhyam iti |",
    meaningShort: "To grasp, take up, receive, or mentally apprehend (upādāna) — the Kryādi root of grahaṇa.",
    meaningDeep: "Conjugated in the Kryādi-gaṇa (9th class Ubhayapada, Dhātupāṭha 9.61), √grah undergoes samprasāraṇa (ra → ṛ) before the śnā class-affix and kit/ṅit suffixes by Aṣṭādhyāyī 6.1.16 (grahi-jyā...) and lengthens its iṭ-augment by 7.2.37 (graho'liṭi dīrghaḥ), forming gṛhṇāti / gṛhṇīte and gṛhīta (but perfect jagrāha). In śāstra, grahaṇa denotes both physical seizing, astronomical eclipse, and cognitive apprehension of meaning.",
    padaccheda: [
      { deva: "ग्रह", iast: "graha", gloss: "root √grah (9U)" },
      { deva: "उपादाने", iast: "upādāne", gloss: "in the sense of taking, seizing, accepting" },
      { deva: "गृह्णाति", iast: "gṛhṇāti", gloss: "grasps, receives, comprehends (laṭ 3rd sg.)" },
      { deva: "गृहीतम्", iast: "gṛhītam", gloss: "grasped, accepted, understood (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 9.61; Aṣṭādhyāyī 6.1.16 & 7.2.37"
    },
    related: ["dhatu-da", "dhatu-labh", "dhatu-ap", "nigrahasthana"]
  },
  {
    id: "dhatu-labh",
    deva: "लभ् (लभते)",
    iast: "labh (labhate)",
    stem: "√labh",
    pos: "dhātu (verb)",
    englishGlosses: ["to obtain", "to gain", "to acquire", "to find"],
    phoneticAliases: ["labh", "labhate", "labha", "labdha", "labhya", "obtain", "gain"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "डुलभँष् प्राप्तौ । लभते विद्यां लाभो लब्धं लभ्यमिति ।",
    lakshanaIast: "ḍulabhāṣ prāptau | labhate vidyāṃ lābho labdhaṃ labhyam iti |",
    meaningShort: "To obtain, attain, or win (prāpti) — the Ātmanepada root of lābha (gain), sulabha, and durlabha.",
    meaningDeep: "Taught as ḍulabhāṣ in the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.1024), √labh inserts a nasal augment (num → lambh) when preceded by upasargas or before specific affixes by Aṣṭādhyāyī 7.1.64 (labheś ca: e.g., lambhayati, ālambha, upalambha), while forming simple labhate, lapsyate, and labdha (with Bartholomae's progressive voiced aspiration via jhaṣas tathor dho'dhaḥ 8.2.40). Prefixed with upa- (upalabhate), it becomes a technical Nyāya-Vedānta verb for perceptual cognition (upalabdhi).",
    padaccheda: [
      { deva: "डुलभँष्", iast: "ḍulabhāṣ", gloss: "root √labh (1Ā) with ḍu and ṣ anubandhas" },
      { deva: "प्राप्तौ", iast: "prāptau", gloss: "in the sense of obtaining, attaining" },
      { deva: "लभते", iast: "labhate", gloss: "obtains, gains (laṭ 3rd sg.)" },
      { deva: "लब्धम्", iast: "labdham", gloss: "obtained, acquired (kta via progressive aspiration)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1024; Aṣṭādhyāyī 7.1.64 & 8.2.40"
    },
    related: ["sulabha", "durlabha", "dhatu-ap", "dhatu-grah"]
  },
  {
    id: "dhatu-ap",
    deva: "आप् (आप्नोति)",
    iast: "āp (āpnoti)",
    stem: "√āp",
    pos: "dhātu (verb)",
    englishGlosses: ["to reach", "to attain", "to pervade", "to accomplish"],
    phoneticAliases: ["ap", "aap", "apnoti", "prapnoti", "apta", "prapti", "vyapti", "attain", "reach"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "आपॢ व्याप्तौ । आप्नोति फलं प्राप्तिराप्तं व्याप्तिरिति ।",
    lakshanaIast: "āpḷ vyāptau | āpnoti phalaṃ prāptir āptaṃ vyāptir iti |",
    meaningShort: "To pervade, reach, or attain — the Svādi root underlying prāpti (attainment), āpta (trustworthy authority), and vyāpti (invariable concomitance).",
    meaningDeep: "Placed in the Svādi-gaṇa (5th class Parasmaipada, Dhātupāṭha 5.14: āpnoti, āpnutaḥ, āpnuvanti), √āp is glossed specifically as vyāpti ('pervasion / thorough reaching'). Yāska's Nirukta traces āpaḥ (waters) and ātman (in one nirukti, yad āpnoti) to √āp, while Nyāya and Vedānta build foundational concepts from it: āpta (one who has directly realized truth), prāpti (attainment), samāpti (completion), and vyāpti (logical pervasion).",
    padaccheda: [
      { deva: "आपॢ", iast: "āpḷ", gloss: "root √āp (5P) with ḷ-it marker" },
      { deva: "व्याप्तौ", iast: "vyāptau", gloss: "in the sense of pervading, reaching completely" },
      { deva: "आप्नोति", iast: "āpnoti", gloss: "reaches, attains, pervades (laṭ 3rd sg.)" },
      { deva: "आप्तम्", iast: "āptam", gloss: "attained; masc. āptaḥ: trustworthy seer (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Nirukta",
      granthaDeva: "पाणिनीयधातुपाठः · निरुक्तम्",
      author: "Pāṇini / Yāska",
      locator: "Dhātupāṭha 5.14 (āpḷ vyāptau); Nirukta 3.15"
    },
    related: ["vyapti", "dhatu-labh", "atman", "vishnu"]
  },
  {
    id: "dhatu-ni",
    deva: "नी (नयति / नयते)",
    iast: "nī (nayati / nayate)",
    stem: "√nī",
    pos: "dhātu (verb)",
    englishGlosses: ["to lead", "to guide", "to carry", "to conduct", "to ascertain"],
    phoneticAliases: ["ni", "nee", "nayati", "nayate", "niti", "nita", "netri", "nayana", "lead"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "णीञ् प्रापणे । नयति नयते नीतिर्नयनं नीतो नेतेति ।",
    lakshanaIast: "ṇīñ prāpaṇe | nayati nayate nītir nayanaṃ nīto neteti |",
    meaningShort: "To lead, convey, or guide to a destination (prāpaṇa) — the root of nīti (ethics/statecraft), nayana (eye), and nirṇaya.",
    meaningDeep: "Taught as ṇīñ in the Bhvādi-gaṇa (1st class Ubhayapada, Dhātupāṭha 1.950, initial ṇ normalizing to n by ṇo naḥ 6.1.65 and retroflexing after r/ṣ in praṇayati, nirṇayati by 8.4.14), √nī is a classic dvikarmaka verb taking two accusatives (ajām grāmaṃ nayati, 1.4.51). Its derivatives include netṛ/netā (leader), nīti (wise conduct), nayana/netra (the eye that guides), upanayana (initiation), and nirṇaya (decisive ascertainment, as in Viṣṇutattvavinirṇaya).",
    padaccheda: [
      { deva: "णीञ्", iast: "ṇīñ", gloss: "root √nī (1U) with ṇ-initial and ñ-it markers" },
      { deva: "प्रापणे", iast: "prāpaṇe", gloss: "in the sense of leading, conveying to a goal" },
      { deva: "नयति / नयते", iast: "nayati / nayate", gloss: "leads, guides (laṭ 3rd sg. P / Ā)" },
      { deva: "नीतिः", iast: "nītiḥ", gloss: "guidance, ethics, wise policy (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.950; Aṣṭādhyāyī 1.4.51 & 1.3.36 (sammānanotsañjanācāryakaraṇa...)"
    },
    related: ["dhatu-vah", "dhatu-gam", "pramana"]
  },
  {
    id: "dhatu-vah",
    deva: "वह् (वहति / वहते)",
    iast: "vah (vahati / vahate)",
    stem: "√vah",
    pos: "dhātu (verb)",
    englishGlosses: ["to carry", "to bear", "to flow", "to convey", "to marry"],
    phoneticAliases: ["vah", "vahati", "vahate", "vahana", "udha", "pravaha", "vivaha", "carry", "flow"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वह प्रापणे । वहति भारं वहति नदी वाहनमूढः प्रवाह इति ।",
    lakshanaIast: "vaha prāpaṇe | vahati bhāraṃ vahati nadī vāhanam ūḍhaḥ pravāha iti |",
    meaningShort: "To carry, bear along, or flow — the root of vāhana (vehicle), pravāha (stream/continuity), and vivāha (marriage).",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Ubhayapada, Dhātupāṭha 1.1053), √vah undergoes samprasāraṇa plus cerebralization and compensatory lengthening in its kta participle ūḍha ('borne/married', via 6.1.15, ho ḍhaḥ 8.2.31, and ḍho ḍhe lopaḥ + ḍhralope pūrvasya dīrgho'ṇaḥ 6.3.111). Intransitively it describes rivers blowing and winds coursing (pravāha, pravāhānityatvam), while transitively it gives vahni (fire, carrier of oblations) and nirvāha (accomplishment).",
    padaccheda: [
      { deva: "वह", iast: "vaha", gloss: "root √vah (1U)" },
      { deva: "प्रापणे", iast: "prāpaṇe", gloss: "in the sense of carrying, conveying" },
      { deva: "वहति", iast: "vahati", gloss: "carries, bears, flows (laṭ 3rd sg.)" },
      { deva: "ऊढः", iast: "ūḍhaḥ", gloss: "carried, borne, wedded (kta participle)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1053; Aṣṭādhyāyī 6.1.15, 8.2.31 & 6.3.111"
    },
    related: ["dhatu-ni", "dhatu-bhri", "agni"]
  },
  {
    id: "dhatu-bhri",
    deva: "भृ (बिभर्ति / भरति)",
    iast: "bhṛ (bibharti / bharati)",
    stem: "√bhṛ",
    pos: "dhātu (verb)",
    englishGlosses: ["to bear", "to support", "to nourish", "to maintain"],
    phoneticAliases: ["bhri", "bhr", "bibharti", "bharati", "bhara", "bharana", "bhrita", "bhartri", "bear", "nourish"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "डुभृञ् धारणपोषणयोः । बिभर्ति बिभृते भरति भरणं भृतो भार इति ।",
    lakshanaIast: "ḍubhṛñ dhāraṇapoṣaṇayoḥ | bibharti bibhṛte bharati bharaṇaṃ bhṛto bhāra iti |",
    meaningShort: "To bear, sustain, and nourish (dhāraṇa-poṣaṇayoḥ) — the root of bhāra (weight), bhartṛ (supporter/husband), and Bhārata.",
    meaningDeep: "Read both in the Bhvādi-gaṇa (1U, Dhātupāṭha 1.946: bharati / bharate) and preeminently in the Juhotyādi-gaṇa (3U, Dhātupāṭha 3.5: bibharti / bibhṛte, reduplicating with i by bhṛñām it 7.4.76), √bhṛ unites cosmic support with nurturing sustenance. From it derive bhartṛ (lord, sustainer, spouse), bhṛtya (dependent/servant), bharaṇa (maintenance), bhāra (burden/fulness), and Viśvambhara ('Sustainer of the universe').",
    padaccheda: [
      { deva: "डुभृञ्", iast: "ḍubhṛñ", gloss: "root √bhṛ (3U; also 1U)" },
      { deva: "धारण-पोषणयोः", iast: "dhāraṇa-poṣaṇayoḥ", gloss: "in the dual senses of supporting and nourishing" },
      { deva: "बिभर्ति / भरति", iast: "bibharti / bharati", gloss: "bears, sustains, nourishes (laṭ 3rd sg. 3P / 1P)" },
      { deva: "भृतः", iast: "bhṛtaḥ", gloss: "supported, nourished, filled (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 3.5 & 1.946; Aṣṭādhyāyī 7.4.76 (bhṛñām it)"
    },
    related: ["dhatu-dhri", "dhatu-vah", "vishnu"]
  },
  {
    id: "dhatu-dhri",
    deva: "धृ (धारयति / धरति)",
    iast: "dhṛ (dhārayati / dharati)",
    stem: "√dhṛ",
    pos: "dhātu (verb)",
    englishGlosses: ["to hold", "to uphold", "to sustain", "to wear", "to retain in mind"],
    phoneticAliases: ["dhri", "dhr", "dharayati", "dharati", "dhrita", "dharana", "dharma", "dhriti", "hold", "sustain"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "धृञ् धारणे । धरति धारयति धर्मो धृतिर्धारणा धृतमिति ।",
    lakshanaIast: "dhṛñ dhāraṇe | dharati dhārayati dharmo dhṛtir dhāraṇā dhṛtam iti |",
    meaningShort: "To hold, uphold, and sustain — the foundational root of dharma ('that which upholds'), dhṛti (fortitude), and dhāraṇā.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1U, Dhātupāṭha 1.948: dharati / dharate) and with high frequency in the 10th-class / causative stem dhārayati / dhārayate (governing the dative of the creditor in debt by Aṣṭādhyāyī 1.4.35 dhārer uttamarṇaḥ), √dhṛ is etymologically honored across the Mahābhārata and Nirukta as the source of dharma (dhāraṇād dharma ity āhuḥ — 'Dharma is so called because it upholds all beings'), dhṛti (steadfastness), dharā/dharaṇī (Earth), and yogic dhāraṇā.",
    padaccheda: [
      { deva: "धृञ्", iast: "dhṛñ", gloss: "root √dhṛ (1U / 10U)" },
      { deva: "धारणे", iast: "dhāraṇe", gloss: "in the sense of holding, upholding, sustaining" },
      { deva: "धरति / धारयति", iast: "dharati / dhārayati", gloss: "holds, sustains, bears (laṭ 3rd sg.)" },
      { deva: "धर्मः", iast: "dharmaḥ", gloss: "cosmic order and duty that upholds (man-affix, Uṇādi 1.137)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Mahābhārata",
      granthaDeva: "पाणिनीयधातुपाठः · महाभारतम्",
      author: "Pāṇini / Vyāsa",
      locator: "Dhātupāṭha 1.948; Aṣṭādhyāyī 1.4.35; Karṇaparva 69.58"
    },
    related: ["dharma", "dhatu-bhri", "dhira"]
  },
  {
    id: "dhatu-raksh",
    deva: "रक्ष् (रक्षति)",
    iast: "rakṣ (rakṣati)",
    stem: "√rakṣ",
    pos: "dhātu (verb)",
    englishGlosses: ["to protect", "to guard", "to preserve", "to save"],
    phoneticAliases: ["raksh", "rakshati", "raksha", "rakshana", "rakshita", "protect", "guard"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "रक्ष पालने । रक्षति लोकं रक्षा रक्षणं रक्षितमिति ।",
    lakshanaIast: "rakṣa pālane | rakṣati lokaṃ rakṣā rakṣaṇaṃ rakṣitam iti |",
    meaningShort: "To protect, guard, or preserve (pālana) — the classical root of rakṣā and rakṣaṇa.",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.688), √rakṣ governs the ablative of the danger from which someone is protected by Aṣṭādhyāyī 1.4.25 (bhītrārthānāṃ bhayahetuḥ: pāpād rakṣati). Its derivatives rakṣā (protection), rakṣaka (guardian), and yogakṣema-rakṣaṇa are central to rājadharma and śaraṇāgati literature.",
    padaccheda: [
      { deva: "रक्ष", iast: "rakṣa", gloss: "root √rakṣ (1P)" },
      { deva: "पालने", iast: "pālane", gloss: "in the sense of protecting, guarding" },
      { deva: "रक्षति", iast: "rakṣati", gloss: "protects, guards (laṭ 3rd sg.)" },
      { deva: "रक्षणम्", iast: "rakṣaṇam", gloss: "protection, preservation (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.688; Aṣṭādhyāyī 1.4.25"
    },
    related: ["dhatu-pa-protect", "sharanagati", "dhatu-bhi"]
  },
  {
    id: "dhatu-pa-drink",
    deva: "पा (पिबति)",
    iast: "pā (pibati)",
    stem: "√pā (1P)",
    pos: "dhātu (verb)",
    englishGlosses: ["to drink", "to sip", "to imbibe"],
    phoneticAliases: ["pa", "paa", "pibati", "piba", "pana", "pita", "peya", "drink"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "पा पाने । पिबति जलं पानं पीतं पेयमिति ।",
    lakshanaIast: "pā pāne | pibati jalaṃ pānaṃ pītaṃ peyam iti |",
    meaningShort: "To drink or imbibe — distinguished from homophonous 2P √pā ('to protect') by its reduplicated present stem piba-.",
    meaningDeep: "Listed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.972), √pā substitutes piba before śit affixes by Aṣṭādhyāyī 7.3.78 (pibati, apibat, pibet) and weakens to ī in kit consonantal suffixes by 6.4.66 (ghumāsthāgāpājahāti... → pīta, pītvā), while retaining pā- in pāna (beverage/drinking), pātra (drinking vessel), and gerundive peya ('potable', via 6.1.83).",
    padaccheda: [
      { deva: "पा", iast: "pā", gloss: "root √pā (1P)" },
      { deva: "पाने", iast: "pāne", gloss: "in the sense of drinking" },
      { deva: "पिबति", iast: "pibati", gloss: "drinks, sips (laṭ 3rd sg. via piba- substitution)" },
      { deva: "पीतम्", iast: "pītam", gloss: "drunk, imbibed (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.972; Aṣṭādhyāyī 7.3.78 & 6.4.66"
    },
    related: ["dhatu-pa-protect", "dhatu-bhuj", "dhatu-khad"]
  },
  {
    id: "dhatu-pa-protect",
    deva: "पा (पाति)",
    iast: "pā (pāti)",
    stem: "√pā (2P)",
    pos: "dhātu (verb)",
    englishGlosses: ["to protect", "to rule over", "to guard", "to watch over"],
    phoneticAliases: ["pati", "paati", "palayati", "pala", "palaka", "palana", "gopa", "bhupa", "guard"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "पा रक्षणे । पाति जगत् पालयति गोपा भूपः पालनमिति ।",
    lakshanaIast: "pā rakṣaṇe | pāti jagat pālayati gopā bhūpaḥ pālanam iti |",
    meaningShort: "To protect, guard, or rule — the Adādi root behind pāti, causative pālayati, and upapada compounds like bhūpa and gopā.",
    meaningDeep: "Conjugated without thematic vowel in the Adādi-gaṇa (2nd class Parasmaipada, Dhātupāṭha 2.47: pāti, pātaḥ, pānti), √pā inserts a luk/puk lateral augment l in the causative by Aṣṭādhyāyī 7.3.37 (śācchāsāhvāvyāvepāṃ yuk — with pā taking luk → pālayati, whence pālana and pālaka). As an upapada suffix (-pa by 3.2.3 āto'nupasarge kaḥ), it forms nṛpa/bhūpa ('king, protector of earth/men') and gopa ('protector of cows / senses').",
    padaccheda: [
      { deva: "पा", iast: "pā", gloss: "root √pā (2P)" },
      { deva: "रक्षणे", iast: "rakṣaṇe", gloss: "in the sense of protecting, ruling" },
      { deva: "पाति", iast: "pāti", gloss: "protects, guards (laṭ 3rd sg.)" },
      { deva: "पालनम्", iast: "pālanam", gloss: "protection, governance (lyuṭ from causative pāli)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.47; Aṣṭādhyāyī 3.2.3 & 7.3.37"
    },
    related: ["dhatu-raksh", "dhatu-pa-drink", "govinda"]
  },
  {
    id: "dhatu-bhuj",
    deva: "भुज् (भुङ्क्ते / भुनक्ति)",
    iast: "bhuj (bhuṅkte / bhunakti)",
    stem: "√bhuj",
    pos: "dhātu (verb)",
    englishGlosses: ["to enjoy", "to experience", "to eat", "to protect (in Parasmaipada)"],
    phoneticAliases: ["bhuj", "bhunkte", "bhunakti", "bhoga", "bhukta", "bhojana", "bhoktri", "enjoy", "eat"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "भुज पालनाभ्यवहारयोः । भुङ्क्तेऽन्नं भुनक्ति महीं भोगो भोजनं भुक्तमिति ।",
    lakshanaIast: "bhuja pālanābhyavahārayoḥ | bhuṅkte'nnaṃ bhunakti mahīṃ bhogo bhojanaṃ bhuktam iti |",
    meaningShort: "To eat, enjoy, or experience (Ātmanepada bhuṅkte), and to protect/govern (Parasmaipada bhunakti).",
    meaningDeep: "Placed in the Rudhādi-gaṇa (7th class with infix śnam, Dhātupāṭha 7.17), √bhuj exhibits a celebrated Pāṇinian voice split taught in Aṣṭādhyāyī 1.3.66 (bhujo'navane): in every sense except 'protecting' (avana) — such as eating food (odanaṃ bhuṅkte) or experiencing karma-fruits (sukhaṃ duḥkhaṃ bhuṅkte) — it takes Ātmanepada, whereas in 'protecting the earth' it takes Parasmaipada (mahīṃ bhunakti). It yields bhoga (experience/enjoyment), bhojana (meal), bhukti, and bhoktṛ (experiencing subject).",
    padaccheda: [
      { deva: "भुज", iast: "bhuja", gloss: "root √bhuj (7U)" },
      { deva: "पालन-अभ्यवहारयोः", iast: "pālana-abhyavahārayoḥ", gloss: "in the senses of protecting and partaking / enjoying" },
      { deva: "भुङ्क्ते", iast: "bhuṅkte", gloss: "eats, enjoys, experiences (laṭ 3rd sg. Ātmanepada)" },
      { deva: "भुनक्ति", iast: "bhunakti", gloss: "protects, rules (laṭ 3rd sg. Parasmaipada)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 7.17; Aṣṭādhyāyī 1.3.66 (bhujo'navane)"
    },
    related: ["dhatu-khad", "dhatu-pa-drink", "prarabdha", "jeeva"]
  },
  {
    id: "dhatu-khad",
    deva: "खाद् (खादति)",
    iast: "khād (khādati)",
    stem: "√khād",
    pos: "dhātu (verb)",
    englishGlosses: ["to eat", "to chew", "to consume", "to devour"],
    phoneticAliases: ["khad", "khaad", "khadati", "khaadati", "khadya", "khadana", "khadita", "eat", "chew"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "खादृ भक्षणे । खादति फलं खादनं खाद्यं खादितमिति ।",
    lakshanaIast: "khādṛ bhakṣaṇe | khādati phalaṃ khādanaṃ khādyaṃ khāditam iti |",
    meaningShort: "To eat, chew, or consume solid food (bhakṣaṇa) — the everyday Bhvādi verb for eating.",
    meaningDeep: "Listed near the beginning of the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.50, ṛ-it preventing vowel shortening in the reduplicated causative aorist acikhādat by nāglopiśāsvṛdītām 7.4.2), √khād specifically denotes chewing solid edibles — hence Sanskrit culinary and medical texts classify foodstuffs into khādya (chewable solids), bhojya (soft foods), lehya (lickables), and peya (beverages).",
    padaccheda: [
      { deva: "खादृ", iast: "khādṛ", gloss: "root √khād (1P) with ṛ-it marker" },
      { deva: "भक्षणे", iast: "bhakṣaṇe", gloss: "in the sense of eating, chewing" },
      { deva: "खादति", iast: "khādati", gloss: "eats, chews (laṭ 3rd sg.)" },
      { deva: "खाद्यम्", iast: "khādyam", gloss: "edible, solid food (ṇyat)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.50 (khādṛ bhakṣaṇe)"
    },
    related: ["dhatu-bhuj", "dhatu-pa-drink", "madhura"]
  },
  {
    id: "dhatu-sev",
    deva: "सेव् (सेवते)",
    iast: "sev (sevate)",
    stem: "√sev",
    pos: "dhātu (verb)",
    englishGlosses: ["to serve", "to attend upon", "to honor", "to practice", "to resort to"],
    phoneticAliases: ["sev", "sevate", "seva", "sevana", "sevaka", "sevita", "serve"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "षेवृ सेवायाम् । सेवते गुरुं सेवा सेवनं सेवितमिति ।",
    lakshanaIast: "ṣevṛ sevāyām | sevate guruṃ sevā sevanaṃ sevitam iti |",
    meaningShort: "To serve, attend upon, or cultivate devotedly — the Ātmanepada root of sevā (service) and niṣevaṇa.",
    meaningDeep: "Taught as ṣevṛ in the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.530), its initial retroflex ṣ converts to dental s by Aṣṭādhyāyī 6.1.64 (dhātvādeḥ ṣaḥ saḥ) but resurfaces after i/u-final preverbs like ni- and pari- by 8.3.65 (upasargāt sunoti-suvati-syati-stauti-stobhati-sthā-senaya-sedha-sica-sañja-svañjām / sev-group → niṣevate, niṣevaṇa). It expresses both reverent attendance upon a guru or deity and habitual cultivation of virtues.",
    padaccheda: [
      { deva: "षेवृ", iast: "ṣevṛ", gloss: "root √sev (1Ā) with initial ṣ and ṛ-it" },
      { deva: "सेवायाम्", iast: "sevāyām", gloss: "in the sense of service, attendance, cultivation" },
      { deva: "सेवते", iast: "sevate", gloss: "serves, attends upon (laṭ 3rd sg.)" },
      { deva: "सेवा", iast: "sevā", gloss: "devoted service, attendance (aṅ + ṭāp)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.530; Aṣṭādhyāyī 6.1.64"
    },
    related: ["dhatu-bhaj", "dhatu-vand", "bhakti", "guru"]
  },
  {
    id: "dhatu-bhaj",
    deva: "भज् (भजति / भजते)",
    iast: "bhaj (bhajati / bhajate)",
    stem: "√bhaj",
    pos: "dhātu (verb)",
    englishGlosses: ["to worship", "to adore", "to resort to", "to share", "to apportion"],
    phoneticAliases: ["bhaj", "bhajati", "bhajate", "bhakti", "bhakta", "bhajana", "bhaga", "worship", "revere"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "भज सेवायाम् । भजति भजते हरिं भक्तिर्भागो भजनमिति ।",
    lakshanaIast: "bhaja sevāyām | bhajati bhajate hariṃ bhaktir bhāgo bhajanam iti |",
    meaningShort: "To revere, love, resort to, or apportion — the root of bhakti (loving devotion), bhakta, bhajana, and bhāga.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Ubhayapada, Dhātupāṭha 1.1047: bhajati / bhajate, perf. babhāja / bheje by atekhalor... 6.4.120), √bhaj bridges two profound semantic poles: 'sharing / apportioning' (yielding bhāga 'portion', vibhāga 'division', and Bhagavān 'Possessor of plenary auspicious attributes / bhaga') and 'wholehearted loving service' (bhaja sevāyām, yielding bhakti — defined by Jayatīrtha via māhātmyajñānapūrvakasnehaḥ).",
    padaccheda: [
      { deva: "भज", iast: "bhaja", gloss: "root √bhaj (1U)" },
      { deva: "सेवायाम्", iast: "sevāyām", gloss: "in the sense of loving service, worship, sharing" },
      { deva: "भजति / भजते", iast: "bhajati / bhajate", gloss: "worships, resorts to, shares (laṭ 3rd sg. P / Ā)" },
      { deva: "भक्तिः", iast: "bhaktiḥ", gloss: "supreme loving devotion (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Nyāyasudhā",
      granthaDeva: "पाणिनीयधातुपाठः · न्यायसुधा",
      author: "Pāṇini / Śrī Jayatīrtha",
      locator: "Dhātupāṭha 1.1047 (bhaja sevāyām)"
    },
    related: ["bhakti", "bhagavan", "dhatu-sev", "dhatu-puj"]
  },
  {
    id: "dhatu-nam",
    deva: "नम् (नमति)",
    iast: "nam (namati)",
    stem: "√nam",
    pos: "dhātu (verb)",
    englishGlosses: ["to bow", "to salute", "to bend", "to humble oneself"],
    phoneticAliases: ["nam", "namati", "namah", "namana", "nata", "pranama", "namaskara", "bow"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "णम प्रह्वत्वे शब्दे च । नमति गुरुं नमो नमनं प्रणत इति ।",
    lakshanaIast: "ṇama prahvatve śabde ca | namati guruṃ namo namanaṃ praṇata iti |",
    meaningShort: "To bow low in humility (prahvatva) — the root of namaḥ (reverent salutation), praṇāma, and vinamratā.",
    meaningDeep: "Taught as ṇama in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1030, initial ṇ becoming n generally and retroflexing after pra- in praṇamati, praṇāma by 8.4.14), √nam deletes its final nasal in kit consonantal suffixes by Aṣṭādhyāyī 6.4.38 (vā lyapi; 6.4.37 anudāttopadeśa... → nata, natvā, praṇamya/praṇatya). Its neuter s-stem/avyaya derivative namaḥ ('reverential bow') governs the dative across all Vedic and classical liturgy.",
    padaccheda: [
      { deva: "णम", iast: "ṇama", gloss: "root √nam (1P) with ṇ-initial" },
      { deva: "प्रह्वत्वे शब्दे च", iast: "prahvatve śabde ca", gloss: "in the senses of bowing humbly and sounding" },
      { deva: "नमति", iast: "namati", gloss: "bows, salutes (laṭ 3rd sg.)" },
      { deva: "नतः", iast: "nataḥ", gloss: "bowed, bent, humble (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1030; Aṣṭādhyāyī 6.4.37 & 8.4.14"
    },
    related: ["namah", "dhatu-vand", "dhatu-puj", "sharanagati"]
  },
  {
    id: "dhatu-puj",
    deva: "पूज् (पूजयति)",
    iast: "pūj (pūjayati)",
    stem: "√pūj",
    pos: "dhātu (verb)",
    englishGlosses: ["to worship", "to honor", "to revere", "to venerate"],
    phoneticAliases: ["puj", "pooj", "pujayati", "puja", "pooja", "pujana", "pujya", "pujita", "worship", "honor"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "पूज पूजायाम् । पूजयति देवं पूजा पूजनं पूज्यमिति ।",
    lakshanaIast: "pūja pūjāyām | pūjayati devaṃ pūjā pūjanaṃ pūjyam iti |",
    meaningShort: "To worship, honor, or venerate — the Curādi root of pūjā (ritual adoration) and pūjya (venerable).",
    meaningDeep: "Conjugated in the Curādi-gaṇa (10th class Ubhayapada, Dhātupāṭha 10.100: pūjayati / pūjayate), √pūj loses its ṇic before the feminine action-suffix aṅ by Aṣṭādhyāyī 3.3.105 (cintipūjikathikumbicarcaś ca), yielding pūjā directly alongside pūjana. Note that its passive participle pūjita takes the present tense when denoting respect toward elders or teachers (3.2.188 matibuddhipūjārthebhyaś ca: ācāryaḥ pūjitaḥ = 'the preceptor is revered').",
    padaccheda: [
      { deva: "पूज", iast: "pūja", gloss: "root √pūj (10U)" },
      { deva: "पूजायाम्", iast: "pūjāyām", gloss: "in the sense of reverent worship / honoring" },
      { deva: "पूजयति", iast: "pūjayati", gloss: "worships, honors (laṭ 3rd sg.)" },
      { deva: "पूज्यः", iast: "pūjyaḥ", gloss: "worthy of reverence, venerable (yat)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 10.100; Aṣṭādhyāyī 3.3.105 & 3.2.188"
    },
    related: ["dhatu-bhaj", "dhatu-vand", "dhatu-arh", "bhakti"]
  },
  {
    id: "dhatu-vand",
    deva: "वन्द् (वन्दते)",
    iast: "vand (vandate)",
    stem: "√vand",
    pos: "dhātu (verb)",
    englishGlosses: ["to salute", "to venerate", "to praise", "to pay homage"],
    phoneticAliases: ["vand", "vandate", "vande", "vandana", "vandita", "vandya", "salute", "homage"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "वदि अभिवादनस्तुत्योः । वन्दते गुरुं वन्दना वन्द्यो वन्दितमिति ।",
    lakshanaIast: "vadi abhivādanastutyoḥ | vandate guruṃ vandanā vandyo vanditam iti |",
    meaningShort: "To salute reverently and extol (abhivādana-stutyoḥ) — the Ātmanepada root of vande and vandanā.",
    meaningDeep: "Taught near the opening of the Bhvādi-gaṇa as vadi (1st class Ātmanepada, Dhātupāṭha 1.11), its i-it anubandha inserts nasal num by Aṣṭādhyāyī 7.1.58 (idito num dhātoḥ), yielding stem vand- (1st sg. vande, 'I bow in homage', ubiquitous in maṅgala-ślokas such as vande vandyam sadānandam vāsudevam nirañjanam). It blends outward salutation (abhivādana) with heartfelt praise (stuti).",
    padaccheda: [
      { deva: "वदि", iast: "vadi", gloss: "root √vand (1Ā, i-it yielding nasal num)" },
      { deva: "अभिवादन-स्तुत्योः", iast: "abhivādana-stutyoḥ", gloss: "in the senses of reverent salutation and praise" },
      { deva: "वन्दते", iast: "vandate", gloss: "salutes, venerates (laṭ 3rd sg.; 1st sg. vande)" },
      { deva: "वन्द्यः", iast: "vandyaḥ", gloss: "worthy of salutation, adorable (yat)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.11; Aṣṭādhyāyī 7.1.58"
    },
    related: ["dhatu-nam", "dhatu-stu", "dhatu-puj"]
  },
  {
    id: "dhatu-stu",
    deva: "स्तु (स्तौति / स्तवीति)",
    iast: "stu (stauti / stavīti)",
    stem: "√stu",
    pos: "dhātu (verb)",
    englishGlosses: ["to praise", "to laud", "to hymn", "to extol"],
    phoneticAliases: ["stu", "stauti", "staviti", "stute", "stuti", "stotra", "stava", "stuta", "praise", "hymn"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ष्टुञ् स्तुतौ । स्तौति स्तवीति स्तुते स्तुतिः स्तोत्रं स्तव इति ।",
    lakshanaIast: "ṣṭuñ stutau | stauti stavīti stute stutiḥ stotraṃ stava iti |",
    meaningShort: "To praise, hymn, or celebrate in verse — the Adādi root of stuti (eulogy), stotra (hymn), and prastāvana.",
    meaningDeep: "Listed as ṣṭuñ in the Adādi-gaṇa (2nd class Ubhayapada, Dhātupāṭha 2.34), √stu exhibits two distinctive Pāṇinian features before strong consonant-initial sārvadhātuka endings: vṛddhi instead of guṇa by 7.3.89 (uto vṛddhir luki hali → stauti) AND an optional īṭ augment by 7.3.95 (turuṣṭuśamyamaḥ sārvadhātuke → stavīti alongside stauti; Ātmanepada stute / stavīte). From it spring stuti, stotra, stava, stoma (Sāmavedic chant-pattern), and prastāva (introduction/topic).",
    padaccheda: [
      { deva: "ष्टुञ्", iast: "ṣṭuñ", gloss: "root √stu (2U) with initial ṣ and ñ-it" },
      { deva: "स्तुतौ", iast: "stutau", gloss: "in the sense of praising, hymning" },
      { deva: "स्तौति / स्तवीति", iast: "stauti / stavīti", gloss: "praises, extols (laṭ 3rd sg. P; Ā stute)" },
      { deva: "स्तोत्रम्", iast: "stotram", gloss: "hymn of praise (ṣṭran suffix)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 2.34; Aṣṭādhyāyī 7.3.89 & 7.3.95"
    },
    related: ["dhatu-vand", "dhatu-gai", "rik", "saman"]
  },
  {
    id: "dhatu-gai",
    deva: "गै (गायति)",
    iast: "gai (gāyati)",
    stem: "√gai",
    pos: "dhātu (verb)",
    englishGlosses: ["to sing", "to chant", "to celebrate in song"],
    phoneticAliases: ["gai", "gayati", "gaayati", "gana", "gita", "geeta", "gayaka", "sing", "chant"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "गै शब्दे । गायति साम गानं गीतं गायक इति ।",
    lakshanaIast: "gai śabde | gāyati sāma gānaṃ gītaṃ gāyaka iti |",
    meaningShort: "To sing or chant melodiously — the root of gīta / Bhagavadgītā, gāna (music), and Sāmavedic udgītha.",
    meaningDeep: "Taught with underlying diphthong ai in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.965), √gai retains ai before śap to form gāyati (gai + a + ti → gāyati via āy-substitution 6.1.78), while replacing ai with ā before non-śit affixes by Aṣṭādhyāyī 6.1.45 (ādeca upadeśe'śiti → fut. gāsyati, gāna) and weakening to ī in gīta ('sung', 6.4.66). Its feminine gītā ('Divine Song') titles the Bhagavadgītā, while udgītha names the resonant Sāmavedic Oṃ-chant.",
    padaccheda: [
      { deva: "गै", iast: "gai", gloss: "root √gai (1P)" },
      { deva: "शब्दे", iast: "śabde", gloss: "in the sense of melodic vocal sound / singing" },
      { deva: "गायति", iast: "gāyati", gloss: "sings, chants (laṭ 3rd sg.)" },
      { deva: "गीतम्", iast: "gītam", gloss: "sung; song (kta; fem. gītā)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.965; Aṣṭādhyāyī 6.1.45 & 6.4.66"
    },
    related: ["saman", "udgitha", "dhatu-stu", "dhatu-nrit"]
  },
  {
    id: "dhatu-nrit",
    deva: "नृत् (नृत्यति)",
    iast: "nṛt (nṛtyati)",
    stem: "√nṛt",
    pos: "dhātu (verb)",
    englishGlosses: ["to dance", "to act", "to move rhythmically"],
    phoneticAliases: ["nrit", "nrt", "nrityati", "nritya", "nartana", "natya", "nritta", "dance"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "नृती गात्रविक्षेपे । नृत्यति नटो नृत्यं नृत्तं नाट्यं नर्तनमिति ।",
    lakshanaIast: "nṛtī gātravikṣepe | nṛtyati naṭo nṛtyaṃ nṛttaṃ nāṭyaṃ nartanam iti |",
    meaningShort: "To dance or move the limbs rhythmically (gātravikṣepa) — the root of nṛtta, nṛtya, and nāṭya.",
    meaningDeep: "Conjugated in the Divādi-gaṇa (4th class Parasmaipada, Dhātupāṭha 4.9: nṛtyati, taking optional Parasmaipada without iṭ in future nartsyati / nartiṣyati by 7.2.57 se'sici kṛtacṛtacchṛdatṛdanṛtaḥ), √nṛt defines classical Indian performing arts: Bharata's Nāṭyaśāstra and Dhanañjaya's Daśarūpaka distinguish nṛtta (pure rhythmic movement based on tāla/laya), nṛtya (expressive dance conveying bhāva), and nāṭya (dramatic representation of rasa, via Prākritized/cognate √naṭ).",
    padaccheda: [
      { deva: "नृती", iast: "nṛtī", gloss: "root √nṛt (4P)" },
      { deva: "गात्र-विक्षेपे", iast: "gātra-vikṣepe", gloss: "in the sense of rhythmic graceful movement of the limbs" },
      { deva: "नृत्यति", iast: "nṛtyati", gloss: "dances (laṭ 3rd sg.)" },
      { deva: "नृत्यम्", iast: "nṛtyam", gloss: "expressive dance (क्यप् kyap)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Daśarūpaka",
      granthaDeva: "पाणिनीयधातुपाठः · दशरूपकम्",
      author: "Pāṇini / Dhanañjaya",
      locator: "Dhātupāṭha 4.9 (nṛtī gātravikṣepe)"
    },
    related: ["dhatu-gai", "dhatu-krid", "dhatu-has"]
  },
  {
    id: "dhatu-has",
    deva: "हस् (हसति)",
    iast: "has (hasati)",
    stem: "√has",
    pos: "dhātu (verb)",
    englishGlosses: ["to laugh", "to smile", "to blossom", "to jest"],
    phoneticAliases: ["has", "hasati", "hasa", "hasya", "hasita", "parihasa", "laugh", "smile"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "हसे हसने । हसति बालो हासो हास्यं हसितमिति ।",
    lakshanaIast: "hase hasane | hasati bālo hāso hāsyaṃ hasitam iti |",
    meaningShort: "To laugh, smile, or bloom — the root of hāsa (mirth, sthāyibhāva of the comic aesthetic) and hāsya-rasa.",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.757), √has denotes both human laughter/smiling (hāsa, manda-hāsa) and poetic blossoming of white lotuses or moonlight (kumudāni hasanti — whiteness being the classical poetic color of laughter in Sanskrit alaṅkāraśāstra). In Bharata's rasa theory, hāsa is the abiding emotion (sthāyibhāva) that matures into hāsya-rasa; with upa- (upahasati) it means 'to mock', and with pari- (parihāsa) 'playful banter'.",
    padaccheda: [
      { deva: "हसे", iast: "hase", gloss: "root √has (1P) with e-it marker" },
      { deva: "हसने", iast: "hasane", gloss: "in the sense of laughing, smiling" },
      { deva: "हसति", iast: "hasati", gloss: "laughs, smiles (laṭ 3rd sg.)" },
      { deva: "हास्यम्", iast: "hāsyam", gloss: "mirth, the comic aesthetic mood (ṇyat)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.757 (hase hasane)"
    },
    related: ["dhatu-mud", "dhatu-krid", "shukla"]
  },
  {
    id: "dhatu-krid",
    deva: "क्रीड् (क्रीडति)",
    iast: "krīḍ (krīḍati)",
    stem: "√krīḍ",
    pos: "dhātu (verb)",
    englishGlosses: ["to play", "to sport", "to frolic", "to amuse oneself"],
    phoneticAliases: ["krid", "kreed", "kridati", "kreedati", "krida", "kridana", "kridita", "play", "sport"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "क्रीडृ विहारे । क्रीडति बालः क्रीडा क्रीडनं क्रीडितमिति ।",
    lakshanaIast: "krīḍṛ vihāre | krīḍati bālaḥ krīḍā krīḍanaṃ krīḍitam iti |",
    meaningShort: "To play, sport, or delight effortlessly (vihāra) — the root of krīḍā (play/pastime).",
    meaningDeep: "Listed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.373), √krīḍ shifts to Ātmanepada with anu-, sam-, pari-, and āṅ by Aṣṭādhyāyī 1.3.21 (krīḍo'nusaṃparibhyaś ca: ākrīḍate, saṃkrīḍate, except when anu- denotes vocal resonance). In Vedānta (Brahmasūtra 2.1.33 lokavat tu līlākaivalyam), effortless krīḍā / līlā illustrates how the self-fulfilled Supreme Lord creates the universe out of overflowing bliss (ānanda) without any unmet need.",
    padaccheda: [
      { deva: "क्रीडृ", iast: "krīḍṛ", gloss: "root √krīḍ (1P) with ṛ-it marker" },
      { deva: "विहारे", iast: "vihāre", gloss: "in the sense of play, sport, joyous pastime" },
      { deva: "क्रीडति", iast: "krīḍati", gloss: "plays, sports (laṭ 3rd sg.)" },
      { deva: "क्रीडा", iast: "krīḍā", gloss: "play, sport, effortless pastime (aṅ + ṭāp)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.373; Aṣṭādhyāyī 1.3.21"
    },
    related: ["dhatu-has", "dhatu-mud", "srishti"]
  },
  {
    id: "dhatu-cal",
    deva: "चल् (चलति)",
    iast: "cal (calati)",
    stem: "√cal",
    pos: "dhātu (verb)",
    englishGlosses: ["to move", "to stir", "to tremble", "to walk", "to waver"],
    phoneticAliases: ["cal", "chal", "calati", "chalati", "calana", "cancala", "acala", "move", "stir"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "चल कम्पने । चलति वायुश्चलनं चञ्चलोऽचल इति ।",
    lakshanaIast: "cala kampane | calati vāyuś calanaṃ cañcalo'cala iti |",
    meaningShort: "To move, stir, or quiver — the root of cala (moving), cañcala (restless), and acala (immovable/mountain).",
    meaningDeep: "Taught twice in the Bhvādi-gaṇa — 1.886 cala kampane ('trembling/stirring', mit-marked so causative has short vowel calayati by 6.4.92 mitāṃ hrasvaḥ) and 1.894 cala vilasane ('sporting/moving', causative cālayati) — √cal contrasts the kinetic world (cala / jaṅgama) with what stands unshaken: acala ('mountain' or unswerving steadiness of mind) and intensive cañcala ('flickering', as in cañcalaṃ hi manaḥ kṛṣṇa, Gītā 6.34).",
    padaccheda: [
      { deva: "चल", iast: "cala", gloss: "root √cal (1P)" },
      { deva: "कम्पने", iast: "kampane", gloss: "in the sense of stirring, moving, trembling" },
      { deva: "चलति", iast: "calati", gloss: "moves, stirs, walks (laṭ 3rd sg.)" },
      { deva: "अचलः", iast: "acalaḥ", gloss: "unmoving, steadfast, mountain (nañ-compound)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.886 & 1.894; Aṣṭādhyāyī 6.4.92"
    },
    related: ["dhatu-gam", "dhatu-car", "dhatu-stha", "manas"]
  },
  {
    id: "dhatu-car",
    deva: "चर् (चरति)",
    iast: "car (carati)",
    stem: "√car",
    pos: "dhātu (verb)",
    englishGlosses: ["to move about", "to practice", "to observe (dharma)", "to graze"],
    phoneticAliases: ["car", "char", "carati", "charati", "cara", "carana", "acara", "caritra", "practice", "walk"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "चर गत्यर्थभक्षणयोः । चरति धर्मं चरणमाचारश्चरित्रमिति ।",
    lakshanaIast: "cara gatyarthabhakṣaṇayoḥ | carati dharmaṃ caraṇam ācāraś caritram iti |",
    meaningShort: "To walk, wander, or practice — the root of ācāra (righteous conduct), ācārya (preceptor), caraṇa (foot), and vicāra (inquiry).",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.591), √car extends effortlessly from physical treading (caraṇa 'foot/Vedic school', gocara 'pasture/range of senses') to moral and intellectual practice: dharmaṃ carati / satyaṃ vada dharmaṃ cara (Taittirīya Upaniṣad 1.11). With āṅ it forms ācarati ('practices'), ācāra ('ethical conduct'), and ācārya (one who establishes students in ācāra and śāstra); with vi- in the causative it forms vicāra ('philosophical inquiry').",
    padaccheda: [
      { deva: "चर", iast: "cara", gloss: "root √car (1P)" },
      { deva: "गत्यर्थ-भक्षणयोः", iast: "gatyartha-bhakṣaṇayoḥ", gloss: "in the senses of moving/practicing and grazing" },
      { deva: "चरति", iast: "carati", gloss: "walks, practices, observes (laṭ 3rd sg.)" },
      { deva: "आचारः", iast: "ācāraḥ", gloss: "noble conduct, lived discipline (āṅ + √car + ghañ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Nirukta",
      granthaDeva: "पाणिनीयधातुपाठः · निरुक्तम्",
      author: "Pāṇini / Yāska",
      locator: "Dhātupāṭha 1.591; Nirukta 1.4 (ācārya ācāraṃ grāhayati)"
    },
    related: ["dharma", "guru", "dhatu-cal", "dhatu-gam"]
  },
  {
    id: "dhatu-dhav",
    deva: "धाव् (धावति)",
    iast: "dhāv (dhāvati)",
    stem: "√dhāv",
    pos: "dhātu (verb)",
    englishGlosses: ["to run", "to rush", "to stream", "to cleanse"],
    phoneticAliases: ["dhav", "dhaav", "dhavati", "dhaavati", "dhavana", "dhauta", "dhavita", "run"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "धावु गतिशुद्ध्योः । धावति तुरगो धावनं धावितं धौतमिति ।",
    lakshanaIast: "dhāvu gatiśuddhyoḥ | dhāvati turago dhāvanaṃ dhāvitaṃ dhautam iti |",
    meaningShort: "To run swiftly (gati) and to wash/cleanse (śuddhi) — a dual-sense Bhvādi Ubhayapada root.",
    meaningDeep: "Listed as dhāvu gatiśuddhyoḥ in the Bhvādi-gaṇa (1st class Ubhayapada, Dhātupāṭha 1.632), √dhāv neatly differentiates its two meanings in its past participle: dhāvita means 'having run' (aśvo dhāvitaḥ), whereas dhauta (with vā-substitution / samprasāraṇa-like au) means 'washed, gleaming white' (vastraṃ dhautam, whence dhavala 'dazzling white').",
    padaccheda: [
      { deva: "धावु", iast: "dhāvu", gloss: "root √dhāv (1U) with u-it marker" },
      { deva: "गति-शुद्ध्योः", iast: "gati-śuddhyoḥ", gloss: "in the dual senses of swift motion (running) and cleansing" },
      { deva: "धावति", iast: "dhāvati", gloss: "runs, rushes; cleanses (laṭ 3rd sg.)" },
      { deva: "धावनम्", iast: "dhāvanam", gloss: "running, coursing; washing (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.632 (dhāvu gatiśuddhyoḥ)"
    },
    related: ["dhatu-cal", "dhatu-gam", "shighram", "shuddha"]
  },
  {
    id: "dhatu-pat",
    deva: "पत् (पतति)",
    iast: "pat (patati)",
    stem: "√pat",
    pos: "dhātu (verb)",
    englishGlosses: ["to fall", "to descend", "to fly", "to alight"],
    phoneticAliases: ["pat", "patati", "patana", "pata", "patita", "utpatti", "nipata", "fall", "fly"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "पतॢ गतौ । पतति फलं पतनं पातो निपात उत्पत्तिरिति ।",
    lakshanaIast: "patḷ gatau | patati phalaṃ patanaṃ pāto nipāta utpattir iti |",
    meaningShort: "To fall, descend, or fly through the air — yielding patana (fall), patatra (wing), nipāta (grammatical particle), and utpatti (arising).",
    meaningDeep: "Taught as patḷ in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.898, forming reduplicated aorist apaptat by 7.4.19 pataḥ pum), √pat encompasses both aerial flight (patatri / pataga 'bird', pattra 'wing/leaf/page') and downward falling (vṛkṣāt phalaṃ patati — classic example of apādāna ablative). With ud- (utpatati / utpatti) it means 'springs up / originates', and with ni- (nipāta) Pāṇini names irregular/indeclinable particles 'dropped ready-made' into grammar.",
    padaccheda: [
      { deva: "पतॢ", iast: "patḷ", gloss: "root √pat (1P) with ḷ-it marker" },
      { deva: "गतौ", iast: "gatau", gloss: "in the sense of falling or aerial motion" },
      { deva: "पतति", iast: "patati", gloss: "falls, flies, descends (laṭ 3rd sg.)" },
      { deva: "पतनम्", iast: "patanam", gloss: "falling, descent (lyuṭ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.898; Aṣṭādhyāyī 7.4.19"
    },
    related: ["adhah", "upari", "dhatu-gam"]
  },
  {
    id: "dhatu-tri",
    deva: "तॄ (तरति)",
    iast: "tṝ (tarati)",
    stem: "√tṝ",
    pos: "dhātu (verb)",
    englishGlosses: ["to cross over", "to traverse", "to swim", "to overcome", "to transcend"],
    phoneticAliases: ["tri", "tr", "tarati", "tarana", "tirtha", "tirna", "avatara", "cross", "overcome"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "तॄ प्लवनतरणयोः । तरति नदीं तरणं तीर्थं तीर्णोऽवतार इति ।",
    lakshanaIast: "tṝ plavanataraṇayoḥ | tarati nadīṃ taraṇaṃ tīrthaṃ tīrṇo'vatāra iti |",
    meaningShort: "To cross over, swim, or surmount (plavana-taraṇayoḥ) — the root of tīrtha (sacred ford/teacher), avatāra, and tāra.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1018) with long vocalic ṝ (which becomes īr before consonantal kit suffixes by 7.1.100 ṛta id dhātoḥ + 8.2.77 hali ca → tīrṇa, tīrtvā, tīrtha), √tṝ supplies luminous spiritual metaphors across Sanskrit: tarati śokam ātmavit ('the knower of Ātman crosses beyond sorrow', Chāndogya 7.1.3), tīrtha (sacred crossing-place and lineage preceptor, e.g., Ānandatīrtha, Jayatīrtha), tāra (Praṇava as savior), and avatāra (divine descent).",
    padaccheda: [
      { deva: "तॄ", iast: "tṝ", gloss: "root √tṝ (1P) ending in long ṝ" },
      { deva: "प्लवन-तरणयोः", iast: "plavana-taraṇayoḥ", gloss: "in the senses of floating/swimming and crossing over" },
      { deva: "तरति", iast: "tarati", gloss: "crosses over, surmounts (laṭ 3rd sg.)" },
      { deva: "तीर्णः", iast: "tīrṇaḥ", gloss: "crossed over, transcended (kta with natva)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Chāndogyopaniṣad",
      granthaDeva: "पाणिनीयधातुपाठः · छान्दोग्योपनिषद्",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.1018; Aṣṭādhyāyī 7.1.100 & 8.2.77"
    },
    related: ["om", "moksha", "dhatu-muc"]
  },
  {
    id: "dhatu-tyaj",
    deva: "त्यज् (त्यजति)",
    iast: "tyaj (tyajati)",
    stem: "√tyaj",
    pos: "dhātu (verb)",
    englishGlosses: ["to abandon", "to relinquish", "to renounce", "to give up"],
    phoneticAliases: ["tyaj", "tyajati", "tyaga", "tyakta", "tyagin", "parityaga", "renounce", "abandon"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "त्यज हानौ । त्यजति सङ्गं त्यागस्त्यक्तं परित्याग इति ।",
    lakshanaIast: "tyaja hānau | tyajati saṅgaṃ tyāgas tyaktaṃ parityāga iti |",
    meaningShort: "To relinquish, let go, or renounce (hāni) — the root of tyāga (renunciation of selfish fruit).",
    meaningDeep: "Placed in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.1035, anudāttopadeśa so without iṭ: fut. tyakṣyati, kta tyakta, ktvā tyaktvā via coḥ kuḥ 8.2.30), √tyaj rises to ethical centrality in the Bhagavadgītā (18.2: kāmyānāṃ karmaṇāṃ nyāsaṃ sannyāsaṃ kavayo viduḥ | sarvakarmaphalatyāgaṃ prāhus tyāgaṃ vicakṣaṇāḥ), where tyāga denotes surrendering egoistic attachment to results while faithfully performing duty.",
    padaccheda: [
      { deva: "त्यज", iast: "tyaja", gloss: "root √tyaj (1P)" },
      { deva: "हानौ", iast: "hānau", gloss: "in the sense of relinquishing, abandoning" },
      { deva: "त्यजति", iast: "tyajati", gloss: "abandons, renounces (laṭ 3rd sg.)" },
      { deva: "त्यागः", iast: "tyāgaḥ", gloss: "renunciation, selfless relinquishment (ghañ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Bhagavadgītā",
      granthaDeva: "पाणिनीयधातुपाठः · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Dhātupāṭha 1.1035; Bhagavadgītā 18.2"
    },
    related: ["vairagya", "dhatu-muc", "dhatu-da"]
  },
  {
    id: "dhatu-muc",
    deva: "मुच् (मुञ्चति / मुञ्चते)",
    iast: "muc (muñcati / muñcate)",
    stem: "√muc",
    pos: "dhātu (verb)",
    englishGlosses: ["to release", "to liberate", "to set free", "to shed"],
    phoneticAliases: ["muc", "much", "muncati", "munchati", "mucyate", "mukta", "mukti", "moksha", "release", "liberate"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "मुचॢ मोक्षणे । मुञ्चति मुच्यते बन्धनान्मोक्षो मुक्तिर्मुक्त इति ।",
    lakshanaIast: "mucḷ mokṣaṇe | muñcati mucyate bandhanān mokṣo muktir mukta iti |",
    meaningShort: "To release, untie, or liberate (mokṣaṇa) — the soteriological root of mukti, mokṣa, mukta, and Mukunda.",
    meaningDeep: "Heading the mucādi subgroup of the Tudādi-gaṇa (6th class Ubhayapada, Dhātupāṭha 6.136), √muc inserts a nasal augment (num) before the present affix śa by Aṣṭādhyāyī 7.1.59 (śe mucādīnām → muñcati / muñcate; passive/intransitive mucyate 'is freed'). Its derivatives mukti, mokṣa, jīvanmukta / vimukta, mumukṣu (desiderative adjective: 'yearning for liberation'), and Mukunda ('Bestower of mokṣa') crown all darśanas.",
    padaccheda: [
      { deva: "मुचॢ", iast: "mucḷ", gloss: "root √muc (6U) with ḷ-it marker" },
      { deva: "मोक्षणे", iast: "mokṣaṇe", gloss: "in the sense of releasing, liberating" },
      { deva: "मुञ्चति", iast: "muñcati", gloss: "releases, sets free (laṭ 3rd sg. via num infix)" },
      { deva: "मुक्तिः / मोक्षः", iast: "muktiḥ / mokṣaḥ", gloss: "final liberation from bondage" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.136; Aṣṭādhyāyī 7.1.59 (śe mucādīnām)"
    },
    related: ["moksha", "vimukta", "mukunda", "dhatu-bandh"]
  },
  {
    id: "dhatu-bandh",
    deva: "बन्ध् (बध्नाति)",
    iast: "bandh (badhnāti)",
    stem: "√bandh",
    pos: "dhātu (verb)",
    englishGlosses: ["to bind", "to tie", "to fasten", "to compose", "to connect"],
    phoneticAliases: ["bandh", "badhnati", "bandha", "bandhana", "baddha", "sambandha", "prabandha", "bind"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "बन्ध बन्धने । बध्नाति सेतुं बन्धो बन्धनं बद्धः सम्बन्ध इति ।",
    lakshanaIast: "bandha bandhane | badhnāti setuṃ bandho bandhanaṃ baddhaḥ sambandha iti |",
    meaningShort: "To bind, tie, or join together — the Kryādi root of bandha (bondage/connection), sambandha (relation), and prabandha (composition).",
    meaningDeep: "Conjugated in the Kryādi-gaṇa (9th class Parasmaipada, Dhātupāṭha 9.37), √bandh drops its penultimate nasal before kit and ṅit affixes by Aṣṭādhyāyī 6.4.24 (aniditāṃ hala upadhāyāḥ kṅiti), yielding badhnāti (with śnā) and baddha (with Bartholomae's aspiration 8.2.40), while retaining the nasal in bandha (karmic bondage or poetic structure), bandhu ('kinsman' who binds affection), sambandha (semantic/ontological relation), and nibandha/prabandha (treatise).",
    padaccheda: [
      { deva: "बन्ध", iast: "bandha", gloss: "root √bandh (9P)" },
      { deva: "बन्धने", iast: "bandhane", gloss: "in the sense of binding, fastening, connecting" },
      { deva: "बध्नाति", iast: "badhnāti", gloss: "binds, ties, constructs (laṭ 3rd sg.)" },
      { deva: "बद्धः", iast: "baddhaḥ", gloss: "bound, tied, composed (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 9.37; Aṣṭādhyāyī 6.4.24 & 8.2.40"
    },
    related: ["bandha", "dhatu-muc", "moksha"]
  },
  {
    id: "dhatu-chid",
    deva: "छिद् (छिनत्ति / छिन्त्ते)",
    iast: "chid (chinatti / chintte)",
    stem: "√chid",
    pos: "dhātu (verb)",
    englishGlosses: ["to cut", "to sever", "to split in two", "to dispel (doubt)"],
    phoneticAliases: ["chid", "chhid", "chinatti", "cheda", "chinna", "chedana", "pariccheda", "padaccheda", "cut", "sever"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "छिदिर् द्वैधीकरणे । छिनत्ति संशयं छेदश्छिन्नं पदच्छेद इति ।",
    lakshanaIast: "chidir dvaidhīkaraṇe | chinatti saṃśayaṃ chedaś chinnaṃ padaccheda iti |",
    meaningShort: "To cleave in two, sever, or resolve (dvaidhīkaraṇa) — the Rudhādi root of cheda, padaccheda, and pariccheda.",
    meaningDeep: "Placed near the head of the Rudhādi-gaṇa (7th class Ubhayapada, Dhātupāṭha 7.3) with nasal infix śnam (chinatti, chinttaḥ, chindanti), √chid assimilates its final dental to n in kta participle chinna by Aṣṭādhyāyī 8.2.42 (radābhyāṃ niṣṭhāto naḥ pūrvasya ca daḥ). Beyond physical cutting, it furnishes vital analytical terms: saṃśayaccheda ('severing doubt'), padaccheda ('splitting sandhi into constituent words'), and pariccheda ('chapter / precise delimitation').",
    padaccheda: [
      { deva: "छिदिर्", iast: "chidir", gloss: "root √chid (7U) with ir-it marker" },
      { deva: "द्वैधी-करणे", iast: "dvaidhī-karaṇe", gloss: "in the sense of splitting into two / severing" },
      { deva: "छिनत्ति", iast: "chinatti", gloss: "cuts, cleaves, dispels (laṭ 3rd sg. with śnam)" },
      { deva: "छिन्नः", iast: "chinnaḥ", gloss: "cut, severed, resolved (kta via niṣṭhā natva)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 7.3; Aṣṭādhyāyī 3.1.78 & 8.2.42"
    },
    related: ["samshaya", "bheda", "dhatu-bandh"]
  },
  {
    id: "dhatu-ji",
    deva: "जि (जयति)",
    iast: "ji (jayati)",
    stem: "√ji",
    pos: "dhātu (verb)",
    englishGlosses: ["to conquer", "to win", "to triumph", "to master", "to excel"],
    phoneticAliases: ["ji", "jayati", "jaya", "jita", "vijaya", "jitendriya", "conquer", "win"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "जि जये । जयति रिपून् जयो विजयते जितेन्द्रिय इति ।",
    lakshanaIast: "ji jaye | jayati ripūn jayo vijayate jitendriya iti |",
    meaningShort: "To conquer, prevail, or master — the root of jaya (victory), vijaya, and jitendriya (master of the senses).",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.593: jayati, perf. jigāya with palatal→velar shift by sanlitor jeḥ 7.3.57), √ji shifts to Ātmanepada with the preverbs vi- and parā- by Aṣṭādhyāyī 1.3.19 (viparābhyāṃ jeḥ: vijayate 'triumphs', parājayate 'is defeated / finds unbearable', governing the ablative in adhyayanāt parājayate by 1.4.26). Acclamations like jayatu and satyam eva jayate (Muṇḍaka Upaniṣad 3.1.6) immortalize this root.",
    padaccheda: [
      { deva: "जि", iast: "ji", gloss: "root √ji (1P; Ātmanepada with vi- and parā-)" },
      { deva: "जये", iast: "jaye", gloss: "in the sense of conquering, excelling, winning" },
      { deva: "जयति", iast: "jayati", gloss: "conquers, triumphs (laṭ 3rd sg.)" },
      { deva: "जितम्", iast: "jitam", gloss: "conquered, mastered (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.593; Aṣṭādhyāyī 1.3.19 & 7.3.57"
    },
    related: ["satya", "indriya", "vira", "dhatu-shak"]
  },
  {
    id: "dhatu-shak",
    deva: "शक् (शक्नोति)",
    iast: "śak (śaknoti)",
    stem: "√śak",
    pos: "dhātu (verb)",
    englishGlosses: ["to be able", "to have power", "to be capable of"],
    phoneticAliases: ["shak", "shaknoti", "shakti", "shakta", "shakya", "ashakya", "able", "can"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "शकॢ शक्तौ । शक्नोति कर्तुं शक्तिः शक्तः शक्यमिति ।",
    lakshanaIast: "śakḷ śaktau | śaknoti kartuṃ śaktiḥ śaktaḥ śakyam iti |",
    meaningShort: "To be able or potent — the Svādi auxiliary root behind śakti (causal potency / word-power) and śakya.",
    meaningDeep: "Placed immediately after √āp in the Svādi-gaṇa (5th class Parasmaipada, Dhātupāṭha 5.15: śaknoti, śaknutaḥ, śaknuvanti; also read in Divādi 4U śaka marṣaṇe: śakyati/śakyate), √śak regularly pairs with tumun infinitives (kartuṃ śaknoti, 'is able to do'). Its ktin noun śakti is one of Indian philosophy's deepest terms, denoting sovereign divine power, intrinsic causal efficacy, and primary denotative word-potency (abhidhā-śakti).",
    padaccheda: [
      { deva: "शकॢ", iast: "śakḷ", gloss: "root √śak (5P) with ḷ-it marker" },
      { deva: "शक्तौ", iast: "śaktau", gloss: "in the sense of capability, power, potency" },
      { deva: "शक्नोति", iast: "śaknoti", gloss: "is able, can (laṭ 3rd sg.)" },
      { deva: "शक्तिः", iast: "śaktiḥ", gloss: "power, capacity, semantic potency (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha",
      granthaDeva: "पाणिनीयधातुपाठः",
      author: "Pāṇini",
      locator: "Dhātupāṭha 5.15 (śakḷ śaktau)"
    },
    related: ["shakti", "bala", "dhatu-arh", "alam"]
  },
  {
    id: "dhatu-arh",
    deva: "अर्ह् (अर्हति)",
    iast: "arh (arhati)",
    stem: "√arh",
    pos: "dhātu (verb)",
    englishGlosses: ["to deserve", "to be worthy of", "to merit", "ought to (courteous request)"],
    phoneticAliases: ["arh", "arhati", "arha", "arhana", "anargha", "deserve", "worthy"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "अर्ह पूजायाम् । अर्हति मानमर्हणमर्होऽर्ह्यमिति ।",
    lakshanaIast: "arha pūjāyām | arhati mānam arhaṇam arho'rhyam iti |",
    meaningShort: "To be worthy, merit honor, or courteously 'deign to' — a cornerstone of classical Sanskrit polite idiom.",
    meaningDeep: "Conjugated in the Bhvādi-gaṇa (1st class Parasmaipada, Dhātupāṭha 1.776; also 10P arhayati 'worships'), √arh is warranted by Pāṇini's Aṣṭādhyāyī 3.3.169 (arhe kṛtyatṛcaś ca) as the locus of worthiness and fitness. In epic and classical Sanskrit (Rāmāyaṇa, Mahābhārata, Kālidāsa), 2nd-person arhasi with an infinitive (kṣantum arhasi, śrotum arhasi, na śocitum arhasi in Gītā 2.25) is the most refined idiom for 'pray, be pleased to / you ought not to'.",
    padaccheda: [
      { deva: "अर्ह", iast: "arha", gloss: "root √arh (1P)" },
      { deva: "पूजायाम्", iast: "pūjāyām", gloss: "in the sense of worthiness, deserving honor" },
      { deva: "अर्हति", iast: "arhati", gloss: "deserves, merits, ought to (laṭ 3rd sg.)" },
      { deva: "अर्हः", iast: "arhaḥ", gloss: "worthy, deserving, fit (ac adjective)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.776; Aṣṭādhyāyī 3.3.169"
    },
    related: ["dhatu-puj", "dhatu-shak", "uttama"]
  },
  {
    id: "dhatu-ish",
    deva: "इष् (इच्छति)",
    iast: "iṣ (icchati)",
    stem: "√iṣ",
    pos: "dhātu (verb)",
    englishGlosses: ["to wish", "to desire", "to seek", "to accept (in śāstra)"],
    phoneticAliases: ["ish", "icchati", "iccha", "ishta", "eshana", "abhishta", "wish", "desire"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "इषु इच्छायाम् । इच्छति श्रेय इच्छेष्टमभीष्टमिति ।",
    lakshanaIast: "iṣu icchāyām | icchati śreya iccheṣṭam abhīṣṭam iti |",
    meaningShort: "To wish, desire, or philosophically uphold — the Tudādi root of icchā (volition) and iṣṭa (cherished).",
    meaningDeep: "Assigned to the Tudādi-gaṇa (6th class Parasmaipada, Dhātupāṭha 6.59; distinct from 4P iṣyati 'impels' and 9P iṣṇāti 'repeats'), √iṣ substitutes ch for ṣ before śit affixes by Aṣṭādhyāyī 7.3.77 (iṣugamiyamāṃ chaḥ → icchati, aicchat, icchet). In Nyāya-Vedānta prose, passive iṣyate means 'is accepted / maintained as a tenet' (whence iṣṭāpatti, 'welcoming an opponent's consequence'), while icchā ('desire/will') links jñāna to prayatna ('volitional effort').",
    padaccheda: [
      { deva: "इषु", iast: "iṣu", gloss: "root √iṣ (6P) with u-it marker" },
      { deva: "इच्छायाम्", iast: "icchāyām", gloss: "in the sense of wishing, desiring" },
      { deva: "इच्छति", iast: "icchati", gloss: "wishes, desires, seeks (laṭ 3rd sg.)" },
      { deva: "इष्टम्", iast: "iṣṭam", gloss: "desired, cherished, auspicious good (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.59; Aṣṭādhyāyī 7.3.77 (iṣugamiyamāṃ chaḥ)"
    },
    related: ["iccha", "prayatna", "priya", "dhatu-snih"]
  },
  {
    id: "dhatu-snih",
    deva: "स्निह् (स्निह्यति)",
    iast: "snih (snihyati)",
    stem: "√snih",
    pos: "dhātu (verb)",
    englishGlosses: ["to feel affection", "to love", "to be tender or smooth"],
    phoneticAliases: ["snih", "snihyati", "sneha", "snigdha", "affection", "love"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ष्णिह प्रीतौ । स्निह्यति मित्रे स्नेहः स्निग्धमिति ।",
    lakshanaIast: "ṣṇiha prītau | snihyati mitre snehaḥ snigdham iti |",
    meaningShort: "To feel tender affection (prīti) — governing the locative of the beloved and yielding sneha and snigdha.",
    meaningDeep: "Taught as ṣṇiha in the Divādi-gaṇa (4th class Parasmaipada, Dhātupāṭha 4.91, initial ṣṇ becoming sn by 6.1.64–65: snihyati), √snih unites physical unctuousness ('oil/smoothness') with emotional warmth ('tender love'). In Sanskrit syntax, √snih classically governs the locative case (nimittāt karmayoge / adhikaraṇa: putre snihyati, 'loves the child'), and Jayatīrtha defines bhakti directly as māhātmyajñānapūrvaka-sudṛḍha-sarvādhika-sneha ('firm, supreme sneha preceded by knowledge of God's majesty').",
    padaccheda: [
      { deva: "ष्णिह", iast: "ṣṇiha", gloss: "root √snih (4P)" },
      { deva: "प्रीतौ", iast: "prītau", gloss: "in the sense of affection, love, tenderness" },
      { deva: "स्निह्यति", iast: "snihyati", gloss: "feels affection toward (+ locative, laṭ 3rd sg.)" },
      { deva: "स्नेहः", iast: "snehaḥ", gloss: "affection, love; oil/unctuousness (ghañ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Nyāyasudhā",
      granthaDeva: "पाणिनीयधातुपाठः · न्यायसुधा",
      author: "Pāṇini / Śrī Jayatīrtha",
      locator: "Dhātupāṭha 4.91 (ṣṇiha prītau)"
    },
    related: ["bhakti", "priya", "komala", "dhatu-ish"]
  },
  {
    id: "dhatu-mud",
    deva: "मुद् (मोदते)",
    iast: "mud (modate)",
    stem: "√mud",
    pos: "dhātu (verb)",
    englishGlosses: ["to rejoice", "to be glad", "to delight in"],
    phoneticAliases: ["mud", "modate", "moda", "mudita", "pramoda", "amoda", "anumodana", "rejoice"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "मुद हर्षे । मोदते साधुर्मोदः प्रमोदो मुदितमिति ।",
    lakshanaIast: "muda harṣe | modate sādhur modaḥ pramodo muditam iti |",
    meaningShort: "To rejoice or delight serenely (harṣa) — the Ātmanepada root of moda, pramoda, āmoda, and muditā.",
    meaningDeep: "Conjugated near the opening of the Bhvādi-gaṇa (1st class Ātmanepada, Dhātupāṭha 1.16: modate), √mud appears in the Taittirīya Upaniṣad's analysis of the ānandamaya-kośa (2.5: priyam eva śiraḥ, modo dakṣiṇaḥ pakṣaḥ, pramoda uttaraḥ pakṣaḥ — where moda is joy at gaining the beloved object and pramoda is overflowing delight). In Yoga-sūtra 1.33, muditā denotes sympathetic gladness at others' virtue, and anumodana signifies joyful approval.",
    padaccheda: [
      { deva: "मुद", iast: "muda", gloss: "root √mud (1Ā)" },
      { deva: "हर्षे", iast: "harṣe", gloss: "in the sense of joy, gladness, delight" },
      { deva: "मोदते", iast: "modate", gloss: "rejoices, delights (laṭ 3rd sg.)" },
      { deva: "मुदितः", iast: "muditaḥ", gloss: "gladdened, delighted (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Taittirīyopaniṣad",
      granthaDeva: "पाणिनीयधातुपाठः · तैत्तिरीयोपनिषद्",
      author: "Pāṇini",
      locator: "Dhātupāṭha 1.16; Taittirīya Upaniṣad 2.5"
    },
    related: ["sukha", "dhatu-has", "dhatu-krid"]
  },
  {
    id: "dhatu-bhi",
    deva: "भी (बिभेति)",
    iast: "bhī (bibheti)",
    stem: "√bhī",
    pos: "dhātu (verb)",
    englishGlosses: ["to fear", "to be afraid of", "to dread"],
    phoneticAliases: ["bhi", "bhee", "bibheti", "bhaya", "bhiti", "bhita", "abhaya", "fear"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "ञिभी भये । बिभेति पापाद् भयं भीतिर्भीतोऽभयमिति ।",
    lakshanaIast: "ñibhī bhaye | bibheti pāpād bhayaṃ bhītir bhīto'bhayam iti |",
    meaningShort: "To fear or shrink from — the Juhotyādi root defining Pāṇini's apādāna ablative of fear and abhaya (fearlessness).",
    meaningDeep: "Taught as ñibhī in the Juhotyādi-gaṇa (3rd class Parasmaipada, Dhātupāṭha 3.2: bibheti, bibhītaḥ/bibhitaḥ by bhiyo hetubhaye ṣuk and 6.4.115 bhiyo'nyatarasyām), its initial ñi-anubandha gives bhīta present-state force ('is afraid', by ñītaḥ ktaḥ 3.2.187). Pāṇini's Aṣṭādhyāyī 1.4.25 (bhītrārthānāṃ bhayahetuḥ) establishes that the source of fear with √bhī takes the ablative (caurād / pāpād bibheti), while Upaniṣadic realization culminates in abhaya ('complete fearlessness', Taittirīya 2.7).",
    padaccheda: [
      { deva: "ञिभी", iast: "ñibhī", gloss: "root √bhī (3P) with ñi-it marker" },
      { deva: "भये", iast: "bhaye", gloss: "in the sense of fear, dread" },
      { deva: "बिभेति", iast: "bibheti", gloss: "fears, is afraid of (+ ablative, laṭ 3rd sg.)" },
      { deva: "अभयम्", iast: "abhayam", gloss: "fearlessness, sanctuary (nañ + bhaya)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 3.2; Aṣṭādhyāyī 1.4.25 & 3.2.187"
    },
    related: ["dhatu-raksh", "dhira", "vira"]
  },
  {
    id: "dhatu-kup",
    deva: "कुप् (कुप्यति)",
    iast: "kup (kupyati)",
    stem: "√kup",
    pos: "dhātu (verb)",
    englishGlosses: ["to be angry", "to be incensed", "to become agitated (of humors/elements)"],
    phoneticAliases: ["kup", "kupyati", "kopa", "kupita", "prakopa", "angry", "anger"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "कुप क्रोधे । कुप्यति खलः कोपः कुपितः प्रकोप इति ।",
    lakshanaIast: "kupa krodhe | kupyati khalaḥ kopaḥ kupitaḥ prakopa iti |",
    meaningShort: "To become angry or agitated — governing the dative of the target of anger and forming kopa and prakopa.",
    meaningDeep: "Placed in the Divādi-gaṇa (4th class Parasmaipada, Dhātupāṭha 4.122: kupyati), √kup stands alongside √krudh in Pāṇini's famous kāraka rule Aṣṭādhyāyī 1.4.37 (krudhadruherṣyāsūyārthānāṃ yaṃ prati kopaḥ), which assigns sampradāna (dative case) to the person toward whom anger is directed (e.g., śiṣyāya kupyati). In Āyurveda, prakopa and kupita also denote the pathological aggravation of the three doṣas (vāta, pitta, kapha).",
    padaccheda: [
      { deva: "कुप", iast: "kupa", gloss: "root √kup (4P)" },
      { deva: "क्रोधे", iast: "krodhe", gloss: "in the sense of anger, agitation" },
      { deva: "कुप्यति", iast: "kupyati", gloss: "is angry at (+ dative, laṭ 3rd sg.)" },
      { deva: "कोपः", iast: "kopaḥ", gloss: "anger, wrath, aggravation (ghañ)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 4.122; Aṣṭādhyāyī 1.4.37"
    },
    related: ["shama", "dama", "titiksha", "dhatu-snih"]
  },
  {
    id: "dhatu-srij",
    deva: "सृज् (सृजति)",
    iast: "sṛj (sṛjati)",
    stem: "√sṛj",
    pos: "dhātu (verb)",
    englishGlosses: ["to create", "to emit", "to fashion", "to bring forth", "to release"],
    phoneticAliases: ["srij", "srj", "srijati", "srjati", "srishti", "sarga", "srishta", "srastri", "create"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "सृज विसर्गे । सृजति लोकान् सृष्टिः सर्गः स्रष्टेति ।",
    lakshanaIast: "sṛja visarge | sṛjati lokān sṛṣṭiḥ sargaḥ sraṣṭeti |",
    meaningShort: "To emit, bring forth, or create (visarga) — the cosmological root of sṛṣṭi (creation), sarga, and sraṣṭṛ (Creator).",
    meaningDeep: "Conjugated in the Tudādi-gaṇa (6th class Parasmaipada, Dhātupāṭha 6.121: sṛjati; also 4Ā sṛjyate), √sṛj takes the am-augment (ra instead of ar) before strong consonantal ārdhadhātuka suffixes by Aṣṭādhyāyī 6.1.58 (sṛjidṛśor jhaly am akiti → fut. srakṣyati, agent sraṣṭā, inf. sraṣṭum). Its gloss visarga ('orderly emission / manifestation from subtle into gross form') captures Vedic cosmology, yielding sṛṣṭi, sarga (cosmic creation and mahākāvya canto), nisarga ('innate nature'), and utsarga ('general rule').",
    padaccheda: [
      { deva: "सृज", iast: "sṛja", gloss: "root √sṛj (6P)" },
      { deva: "विसर्गे", iast: "visarge", gloss: "in the sense of emitting, bringing forth, creating" },
      { deva: "सृजति", iast: "sṛjati", gloss: "creates, brings forth (laṭ 3rd sg.)" },
      { deva: "सृष्टिः", iast: "sṛṣṭiḥ", gloss: "cosmic creation, manifestation (ktin)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 6.121; Aṣṭādhyāyī 6.1.58"
    },
    related: ["srishti", "prakriti", "dhatu-kri", "dhatu-nash"]
  },
  {
    id: "dhatu-nash",
    deva: "नश् (नश्यति)",
    iast: "naś (naśyati)",
    stem: "√naś",
    pos: "dhātu (verb)",
    englishGlosses: ["to perish", "to disappear", "to be lost", "to be destroyed"],
    phoneticAliases: ["nash", "nashyati", "nasha", "nashta", "vinasha", "nashvara", "perish", "destroy"],
    pillar: "kosha",
    domain: "Dhātupāṭha & Kriyā (Verbal Roots)",
    lakshanaDeva: "णश अदर्शने । नश्यति तमो नाशो नष्टं विनाशोऽविनश्वरमिति ।",
    lakshanaIast: "ṇaśa adarśane | naśyati tamo nāśo naṣṭaṃ vināśo'vinaśvaram iti |",
    meaningShort: "To pass out of sight (adarśana), perish, or be destroyed — the Divādi root of nāśa, vināśa, and naśvara.",
    meaningDeep: "Taught with profound philosophical precision in the Divādi-gaṇa (4th class Parasmaipada, Dhātupāṭha 4.85) as ṇaśa adarśane ('passing into non-manifestation / invisibility'), √naś inserts a nasal before jhal consonants when iṭ is absent by Aṣṭādhyāyī 7.1.60 (masjinaśor jhali → fut. naṅkṣyati alongside naśiṣyati; ktvā naṣṭvā / naṃṣṭvā). Its definition adarśana directly anticipates philosophical causation, where destruction (nāśa / pradhvaṃsa) is dissolution into subtle causal state rather than annihilation into sheer nothingness.",
    padaccheda: [
      { deva: "णश", iast: "ṇaśa", gloss: "root √naś (4P) with ṇ-initial (praṇaśyati)" },
      { deva: "अदर्शने", iast: "adarśane", gloss: "in the sense of disappearance, perishing" },
      { deva: "नश्यति", iast: "naśyati", gloss: "perishes, vanishes (laṭ 3rd sg.)" },
      { deva: "नष्टम्", iast: "naṣṭam", gloss: "perished, lost, destroyed (kta)" }
    ],
    source: {
      grantha: "Pāṇinīya Dhātupāṭha & Aṣṭādhyāyī",
      granthaDeva: "पाणिनीयधातुपाठः · अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Dhātupāṭha 4.85; Aṣṭādhyāyī 7.1.60 & 7.2.45 (radhādibhyaś ca)"
    },
    related: ["pradhvamsabhava", "anitya", "acyuta", "dhatu-srij"]
  }
];

