// Pillar 2: Ekakshara Kosha — All 51 Sanskrit Syllables (अ to क्ष) Backed by Sri Madhvacharya's Definitions
// Primary source: Sri Madhvacharya's Tantrasarasangraha 1.5–10 (50 Pranava-vibhakta Bhagavad-murtis from अ to ळ)
// corroborated by Aitareya Bhashya (अः इति ब्रह्म), Chandogya Bhashya 1.1.1 (अ-उ-म), Mandukya Bhashya,
// and the Tattvavada Matrika-nyasa tradition (क्ष -> नृसिंहः / अक्षः as Meru-varna).

const MATRIKA_VERSES = {
  TSS_6: {
    deva: "अज आनन्द इन्द्रेशावुग्र ऊर्ज ऋतम्भरः ॥ ६ ॥",
    iast: "aja ānanda indreśāv ugra ūrja ṛtambharaḥ || 6 ||",
    locator: "TSS 1.6"
  },
  TSS_7: {
    deva: "ॠघलृशौ लॄजिरेकात्मैर ओजोभृदौरसः । अन्तोऽर्धगर्भः कपिलः खपतिर्गरुडासनः ॥ ७ ॥",
    iast: "ṝghalṛśau lṝjir ekātmaira ojobhṛd aurasaḥ | anto'rdhagarbhaḥ kapilaḥ khapatir garuḍāsanaḥ || 7 ||",
    locator: "TSS 1.7"
  },
  TSS_8: {
    deva: "घर्मो ङसारश्चार्वङ्गश्छन्दोगम्यो जनार्दनः । झटितारिर्ञमष्टङ्की ठलको डलको ढरी ॥ ८ ॥",
    iast: "gharmo ṅasāraś cārvaṅgaś chandogamyo janārdanaḥ | jhaṭitārir ñamaṣ ṭaṅkī ṭhalako ḍalako ḍharī || 8 ||",
    locator: "TSS 1.8"
  },
  TSS_9: {
    deva: "णात्मा तारस्थमो दण्डी धन्वी नम्यः परः फली । बली भगो मनुर्यज्ञो रामो लक्ष्मीपतिर्वरः ॥ ९ ॥",
    iast: "ṇātmā tāras thamo daṇḍī dhanvī namyaḥ paraḥ phalī | balī bhago manur yajño rāmo lakṣmīpatir varaḥ || 9 ||",
    locator: "TSS 1.9"
  },
  TSS_10: {
    deva: "शान्तसंवित् षड्गुणश्च सारात्मा हंसळाळुकौ । पञ्चाशन्मूर्तयस्त्वेता ममाकारादिलक्षकाः ॥ १० ॥",
    iast: "śāntasaṃvit ṣaḍguṇaś ca sārātmā haṃsaḷāḷukau | pañcāśan mūrtayas tv etā mamākārādilakṣakāḥ || 10 ||",
    locator: "TSS 1.10"
  }
};

const RAW_SYLLABLES = [
  // === 16 SVARAS (अ – अः) ===
  {
    id: "ekakshara-a",
    deva: "अ",
    iast: "a",
    aliases: ["a", "akara", "akaara", "aja", "अ", "अकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "अजः",
    murtiIast: "ajaḥ",
    verse: "TSS_6",
    niruktiDeva: "न जायत इत्यजः, सर्वस्मादधिकत्वाच्चाकारवाच्यो भगवानजः ।",
    niruktiIast: "na jāyata ity ajaḥ, sarvasmād adhikatvāc cākāravācyo bhagavān ajaḥ |",
    secondary: {
      deva: "अकारेणाधिकं प्रोक्तम् । अः इति ब्रह्म ।",
      iast: "akāreṇādhikaṃ proktam | aḥ iti brahma |",
      translation: "By the syllable 'a' is declared the Supreme Being who exceeds all ('adhika'); 'Aḥ' directly names Brahman.",
      source: "Chāndogyabhāṣyam 1.1.1 & Aitareyabhāṣyam 2.3.32"
    },
    short: "The primal syllable 'a' signifies Bhagavān Aja — the Unborn, Supreme ('adhika'), and all-pervasive fountainhead of all speech.",
    deep: "Standing first among all fifty-one varṇas (`akṣarāṇām akāro'smi` — BG 10.33), 'a' belongs to the Viśva-kalā of Praṇava. In Tantrasārasaṅgraha 1.6, Madhvācārya assigns 'a' to Bhagavān Aja (never born, yet generator of Brahmā and cosmos), and in Chāndogya Bhāṣya 1.1.1 derives it from 'adhikatva' (surpassing all beings).",
    pada: [
      { deva: "अ-कारः", iast: "a-kāraḥ", gloss: "the primal vowel syllable 'a'" },
      { deva: "अजः", iast: "ajaḥ", gloss: "the Unborn Lord; impeller of all" },
      { deva: "अधिकत्वात्", iast: "adhikatvāt", gloss: "because He transcends and exceeds all beings" }
    ],
    related: ["om", "varna", "vishva", "ekakshara-aa", "brahman"]
  },
  {
    id: "ekakshara-aa",
    deva: "आ",
    iast: "ā",
    aliases: ["aa", "aakara", "akara-dirgha", "ananda", "आ", "आकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "आनन्दः",
    murtiIast: "ānandaḥ",
    verse: "TSS_6",
    niruktiDeva: "आसमन्तान्नन्दति सर्वदोषाभावेन पूर्णसुखस्वरूप इत्याकारवाच्य आनन्दः ।",
    niruktiIast: "āsamantān nandati sarvadoṣābhāvena pūrṇasukhasvarūpa ity ākāravācya ānandaḥ |",
    short: "The long vowel 'ā' signifies Bhagavān Ānanda — Plenary, boundless Bliss untouched by any trace of sorrow.",
    deep: "With the prefix 'ā' denoting fullness on every side (ābhimukhyena samantāt pūrṇatvam), 'ā' names the second Mātṛkā-mūrti Ānanda, whose very body and limbs consist purely of infinite spiritual joy (`ānandamātrakarapādamukhodarādiḥ` — MBTN 1.11).",
    pada: [
      { deva: "आ-कारः", iast: "ā-kāraḥ", gloss: "the long vowel syllable 'ā' denoting plenary fullness" },
      { deva: "आनन्दः", iast: "ānandaḥ", gloss: "Bhagavān whose essence is infinite, unalloyed bliss" },
      { deva: "पूर्ण-सुख-स्वरूपः", iast: "pūrṇa-sukha-svarūpaḥ", gloss: "consisting wholly of plenary joy" }
    ],
    related: ["ekakshara-a", "sukha", "aduhkhasprishta", "paramatman"]
  },
  {
    id: "ekakshara-i",
    deva: "इ",
    iast: "i",
    aliases: ["i", "ikara", "indra", "इ", "इकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "इन्द्रः",
    murtiIast: "indraḥ",
    verse: "TSS_6",
    niruktiDeva: "इदि परमैश्वर्ये । परमैश्वर्ययोगादिकारवाच्यो भगवानिन्द्रः ।",
    niruktiIast: "idi paramaiśvarye | paramaiśvaryayogād ikāravācyo bhagavān indraḥ |",
    short: "The syllable 'i' signifies Bhagavān Indra — the Supreme Sovereign possessing absolute cosmic lordship (paramaiśvarya).",
    deep: "While 'Indra' secondarily designates the chief of celestials, Madhvācārya shows throughout Ṛgbhāṣya and Tantrasārasaṅgraha that in parama-mukhya-vṛtti 'i' and 'Indra' denote Viṣṇu Himself (from √ind 'paramaiśvarye'), by whose fraction of power Śakra rules.",
    pada: [
      { deva: "इ-कारः", iast: "i-kāraḥ", gloss: "the short palatal vowel 'i'" },
      { deva: "इन्द्रः", iast: "indraḥ", gloss: "the Supreme Lord of unfathomable sovereignty" },
      { deva: "परम-ऐश्वर्य-योगात्", iast: "parama-aiśvarya-yogāt", gloss: "from possessing absolute independent lordship" }
    ],
    related: ["indra", "ekakshara-ii", "svatantra"]
  },
  {
    id: "ekakshara-ii",
    deva: "ई",
    iast: "ī",
    aliases: ["ii", "ee", "iikara", "isha", "eesha", "ई", "ईकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "ईशः",
    murtiIast: "īśaḥ",
    verse: "TSS_6",
    niruktiDeva: "ईष्टे नियमयति चराचरं ब्रह्मादिकमितीकारवाच्य ईशः ।",
    niruktiIast: "īṣṭe niyamayati carācaraṃ brahmādikam itīkāravācya īśaḥ |",
    short: "The long vowel 'ī' signifies Bhagavān Īśa — the omnipotent Inner Ruler even of Brahmā, Lakṣmī, Vāyu, and Rudra.",
    deep: "From √īś ('aiśvarye'), 'ī' proclaims the Lord's effortless governance (`īśāvāsyam idaṃ sarvam`). Even eternally liberated Ramā and all deities act solely under the ordaining glance of Īśa.",
    pada: [
      { deva: "ई-कारः", iast: "ī-kāraḥ", gloss: "the long palatal vowel 'ī'" },
      { deva: "ईशः", iast: "īśaḥ", gloss: "the Supreme Ordainer and Ruler" },
      { deva: "ईष्टे नियमयति", iast: "īṣṭe niyamayati", gloss: "rules and directs all sentient and insentient beings" }
    ],
    related: ["ekakshara-i", "svatantra", "paramatman"]
  },
  {
    id: "ekakshara-u",
    deva: "उ",
    iast: "u",
    aliases: ["u", "ukara", "ugra", "उ", "उकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "उग्रः",
    murtiIast: "ugraḥ",
    verse: "TSS_6",
    niruktiDeva: "उत्कृष्टबलतेजस्त्वादसुराणां भयावहत्वाच्चोकारवाच्य उग्रः ।",
    niruktiIast: "utkṛṣṭabalatejastvād asurāṇāṃ bhayāvahatvāc cokāravācya ugraḥ |",
    secondary: {
      deva: "उकारेणोच्चमुच्यते ।",
      iast: "ukāreṇoccam ucyate |",
      translation: "By the syllable 'u' is declared He who stands loftiest above all ('ucca').",
      source: "Chāndogyabhāṣyam 1.1.1"
    },
    short: "The syllable 'u' signifies Bhagavān Ugra — fierce in irresistible majesty and supreme loftiness ('uccatva').",
    deep: "As the second constituent of Praṇava (A-U-M) and fifth Mātṛkā letter, 'u' signifies both the Lord's transcendent elevation (`uccatva` — CHU 1.1.1) and His formidable, evil-shattering might as Ugra (`mṛgaṃ na bhīmam upahatnum ugram` — ṚV 1.154 / MBTN 1.62).",
    pada: [
      { deva: "उ-कारः", iast: "u-kāraḥ", gloss: "the labial vowel 'u'" },
      { deva: "उग्रः", iast: "ugraḥ", gloss: "formidable, irresistibly mighty Lord" },
      { deva: "उच्चम् / उत्कृष्ट-तेजाः", iast: "uccam / utkṛṣṭa-tejāḥ", gloss: "supremely exalted in splendour" }
    ],
    related: ["om", "narasimha", "ekakshara-uu"]
  },
  {
    id: "ekakshara-uu",
    deva: "ऊ",
    iast: "ū",
    aliases: ["uu", "oo", "uukara", "urja", "oorja", "ऊ", "ऊकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "ऊर्जः",
    murtiIast: "ūrjaḥ",
    verse: "TSS_6",
    niruktiDeva: "ऊर्ज प्राणबलयोः । अपरिमितबलप्राणप्रदत्वादूकारवाच्य ऊर्जः ।",
    niruktiIast: "ūrja prāṇabalayoḥ | aparimitabalaprāṇapradatvād ūkāravācya ūrjaḥ |",
    short: "The long vowel 'ū' signifies Bhagavān Ūrja — inexhaustible vital vigour and infinite spiritual strength.",
    deep: "Derived from √ūrj ('bala-prāṇanayoḥ'), 'ū' reveals Bhagavān as Ūrja: the self-sustaining reservoir of cosmic energy who invigorates Prāṇa, senses, and elements without ever diminishing.",
    pada: [
      { deva: "ऊ-कारः", iast: "ū-kāraḥ", gloss: "the long labial vowel 'ū'" },
      { deva: "ऊर्जः", iast: "ūrjaḥ", gloss: "Bhagavān as boundless vital strength and abundance" },
      { deva: "बल-प्राण-प्रदत्वात्", iast: "bala-prāṇa-pradatvāt", gloss: "bestower of vigour and life-force to all" }
    ],
    related: ["ekakshara-u", "bala", "prana"]
  },
  {
    id: "ekakshara-ri",
    deva: "ऋ",
    iast: "ṛ",
    aliases: ["ri", "ru", "rikara", "ritambhara", "ऋ", "ऋकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "ऋतम्भरः",
    murtiIast: "ṛtambharaḥ",
    verse: "TSS_6",
    niruktiDeva: "ऋतं सत्यं वेदजातं यथार्थज्ञानं च बिभर्तीत्यृकारवाच्य ऋतम्भरः ।",
    niruktiIast: "ṛtaṃ satyaṃ vedajātaṃ yathārthajñānaṃ ca bibhartīty ṛkāravācya ṛtambharaḥ |",
    short: "The vocalic 'ṛ' signifies Bhagavān Ṛtambhara — the Upholder of cosmic order, unerring truth, and eternal Veda.",
    deep: "In Taittirīya Bhāṣya 1.2.11 (`ṛtaṃ jñānatater dātā`), Madhvācārya explains 'Ṛta' as exact, unerring knowledge and moral-cosmic order; 'ṛ' invokes Ṛtambhara Hari who bears and sustains truth in the hearts of seers.",
    pada: [
      { deva: "ऋ-कारः", iast: "ṛ-kāraḥ", gloss: "the short retroflex vocalic 'ṛ'" },
      { deva: "ऋतम्-भरः", iast: "ṛtam-bharaḥ", gloss: "sustainer of eternal truth and Vedic order" },
      { deva: "यथार्थ-ज्ञान-भर्ता", iast: "yathārtha-jñāna-bhartā", gloss: "upholder of unerring cognition" }
    ],
    related: ["satya", "rik", "ekakshara-rii"]
  },
  {
    id: "ekakshara-rii",
    deva: "ॠ",
    iast: "ṝ",
    aliases: ["rii", "ruu", "riikara", "righa", "ॠ", "ॠकारः"],
    varga: "Svara · Praṇava-Akāra (Viśva-pāda)",
    murtiDeva: "ॠघः",
    murtiIast: "ṝghaḥ",
    verse: "TSS_7",
    niruktiDeva: "ॠन् पापरूपानज्ञानसंघान् हन्तीति ॠकारवाच्यो भगवान् ॠघः ।",
    niruktiIast: "ṝn pāparūpān ajñānasaṃghān hantīti ṝkāravācyo bhagavān ṝghaḥ |",
    short: "The long vocalic 'ṝ' signifies Bhagavān Ṝgha — the destroyer of hosts of sin, affliction, and spiritual darkness.",
    deep: "Completing the first octet (Viśva-varga) of Tantrasārasaṅgraha 1.7 (`ṝghalṛśau`), 'ṝ' names the rare Tantric-Vaidika Mūrti Ṝgha (from 'ṝ' + √han → gha), who slays the obstructive forces besetting seekers.",
    pada: [
      { deva: "ॠ-कारः", iast: "ṝ-kāraḥ", gloss: "the long vocalic 'ṝ'" },
      { deva: "ॠघः", iast: "ṝghaḥ", gloss: "slayer of afflictions and dark obstructions" },
      { deva: "हन्ति इति घः", iast: "hanti iti ghaḥ", gloss: "who strikes down and removes (`√han`)" }
    ],
    related: ["ekakshara-ri", "hari", "ekakshara-li"]
  },
  {
    id: "ekakshara-li",
    deva: "ऌ",
    iast: "ḷ",
    aliases: ["li", "lri", "likara", "lisha", "lrisha", "ऌ", "ऌकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "ऌशः",
    murtiIast: "ḷśaḥ",
    verse: "TSS_7",
    niruktiDeva: "ऌर्भूमादेवीशैललोकानां शासक ईश इति ऌकारवाच्यो ऌशः ।",
    niruktiIast: "ḷr bhūmādevīśailalokānāṃ śāsaka īśa iti ḷkāravācyo ḷśaḥ |",
    short: "The vocalic 'ḷ' signifies Bhagavān Ḷśa — the Sovereign Lord of Bhūdevī, the terrestrial realms, and divine śakti.",
    deep: "Opening the second octet (Taijasa-varga) of Tantrasārasaṅgraha 1.7, 'ḷ' denotes divine earth/support and śakti; combined with 'īśa', Ḷśa is Viṣṇu as Lord of Bhū-tattva and sustainer of worlds.",
    pada: [
      { deva: "ऌ-कारः", iast: "ḷ-kāraḥ", gloss: "the short dental vocalic 'ḷ'" },
      { deva: "ऌशः", iast: "ḷśaḥ", gloss: "Lord of Earth (Bhū) and divine potencies" },
      { deva: "ईशः", iast: "īśaḥ", gloss: "sovereign master" }
    ],
    related: ["ekakshara-lii", "lakshmi", "taijasa"]
  },
  {
    id: "ekakshara-lii",
    deva: "ॡ",
    iast: "ḹ",
    aliases: ["lii", "lrii", "liikara", "liji", "lriji", "ॡ", "ॡकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "ॡजिः",
    murtiIast: "ḹjiḥ",
    verse: "TSS_7",
    niruktiDeva: "ॡन् दैत्यान् लोकबाधकान् जयतीति ॡकारवाच्यो भगवान् ॡजिः ।",
    niruktiIast: "ḹn daityān lokabādhakān jayatīti ḹkāravācyo bhagavān ḹjiḥ |",
    short: "The long vocalic 'ḹ' signifies Bhagavān Ḹji — the ever-victorious conqueror of all worlds and daitya-forces.",
    deep: "In Tantrasārasaṅgraha 1.7 (`lṝjir ekātmaira`), 'ḹ' names Bhagavān Ḹji (with agentive `-ji` from √ji 'to conquer'), proclaiming His unconquered supremacy (`aparājitā senā bhagavān, jiṣṇur uttamaḥ` — BR 2.1.6).",
    pada: [
      { deva: "ॡ-कारः", iast: "ḹ-kāraḥ", gloss: "the long vocalic 'ḹ'" },
      { deva: "ॡजिः", iast: "ḹjiḥ", gloss: "all-conquering Lord" },
      { deva: "जयति इति जिः", iast: "jayati iti jiḥ", gloss: "ever victorious (`√ji`)" }
    ],
    related: ["ekakshara-li", "ekakshara-e"]
  },
  {
    id: "ekakshara-e",
    deva: "ए",
    iast: "e",
    aliases: ["e", "ekara", "ekatma", "ए", "एकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "एकात्मा",
    murtiIast: "ekātmā",
    verse: "TSS_7",
    niruktiDeva: "एकः सर्वोत्तमः स्वसमोपाधिरहित आत्मा स्वामीत्येकारवाच्य एकात्मा ।",
    niruktiIast: "ekaḥ sarvottamaḥ svasamopādhirahita ātmā svāmīty ekāravācya ekātmā |",
    short: "The vowel 'e' signifies Bhagavān Ekātmā — the Peerless One without equal or superior, completely unified across all His forms.",
    deep: "In Dvaita, 'Eka' does not negate the dependent world; it affirms that Nārāyaṇa is uniquely Peerless (`na tvatsamo'sty abhyadhikaḥ kuto'nyaḥ`) and devoid of internal division (`svagatabhedavivarjitātmā` — MBTN 1.11) across all Avatāras.",
    pada: [
      { deva: "ए-कारः", iast: "e-kāraḥ", gloss: "the guṇa vowel 'e'" },
      { deva: "एक-आत्मा", iast: "eka-ātmā", gloss: "the Peerless, internally undivided Supreme Self" },
      { deva: "सम-अधिक-रहितः", iast: "sama-adhika-rahitaḥ", gloss: "having neither equal nor superior" }
    ],
    related: ["svatantra", "vishesha", "atman", "ekakshara-ai"]
  },
  {
    id: "ekakshara-ai",
    deva: "ऐ",
    iast: "ai",
    aliases: ["ai", "aikara", "aira", "ऐ", "ऐकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "ऐरः",
    murtiIast: "airaḥ",
    verse: "TSS_7",
    niruktiDeva: "इरायाः सरस्वत्या वेदवाण्या लक्ष्म्याश्च पतिः प्रेरक इत्यैकारवाच्य ऐरः ।",
    niruktiIast: "irāyāḥ sarasvatyā vedavāṇyā lakṣmyāś ca patiḥ preraka ity aikāravācya airaḥ |",
    short: "The diphthong 'ai' signifies Bhagavān Aira — Lord and Sovereign Impeller of Irā (sacred Vedic Speech, Ramā, and Bhāratī).",
    deep: "Formed with vṛddhi from 'irā' (Vedic Vāk / Ramā / nourishment), 'Aira' in Tantrasārasaṅgraha 1.7 celebrates Viṣṇu as Master of all sacred speech and wisdom (`vedamātā-abhimāninī-patiḥ`).",
    pada: [
      { deva: "ऐ-कारः", iast: "ai-kāraḥ", gloss: "the vṛddhi vowel 'ai'" },
      { deva: "ऐरः", iast: "airaḥ", gloss: "Lord of Irā (sacred Vedic speech and Śrī)" },
      { deva: "इरायाः ईश्वरः", iast: "irāyāḥ īśvaraḥ", gloss: "impeller of wisdom and speech" }
    ],
    related: ["ekakshara-e", "lakshmi", "agama"]
  },
  {
    id: "ekakshara-o",
    deva: "ओ",
    iast: "o",
    aliases: ["o", "okara", "ojobhrit", "ओ", "ओकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "ओजोभृत्",
    murtiIast: "ojobhṛt",
    verse: "TSS_7",
    niruktiDeva: "ओजः परं तेजः प्राणबलं च बिभर्ति धारयतीत्योकारवाच्य ओजोभृत् ।",
    niruktiIast: "ojaḥ paraṃ tejaḥ prāṇabalaṃ ca bibharti dhārayatīty okāravācya ojobhṛt |",
    short: "The vowel 'o' signifies Bhagavān Ojobhṛt — the Bearer of supreme spiritual radiance, cognitive brilliance, and vital power.",
    deep: "Resonating directly with Oṃ (`otatvavācī hy oṅkāraḥ` — AV 1.1.9), 'o' names Bhagavān Ojobhṛt, who sustains the luminous ojas of sun, fire, Mukhyaprāṇa, and all indriyas.",
    pada: [
      { deva: "ओ-कारः", iast: "o-kāraḥ", gloss: "the guṇa labial vowel 'o'" },
      { deva: "ओजः-भृत्", iast: "ojaḥ-bhṛt", gloss: "bearer and sustainer of supreme radiance (ojas)" },
      { deva: "तेजः-बल-धारकः", iast: "tejaḥ-bala-dhārakaḥ", gloss: "upholder of lustre and strength" }
    ],
    related: ["om", "ekakshara-au", "bala"]
  },
  {
    id: "ekakshara-au",
    deva: "औ",
    iast: "au",
    aliases: ["au", "aukara", "aurasa", "औ", "औकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "औरसः",
    murtiIast: "aurasaḥ",
    verse: "TSS_7",
    niruktiDeva: "उरसि भक्तानां हृत्कमले वसति नित्यानन्दरसपूर्णो वेत्यौकारवाच्य औरसः ।",
    niruktiIast: "urasi bhaktānāṃ hṛtkamale vasati nityānandarasapūrṇo vety aukāravācya aurasaḥ |",
    short: "The diphthong 'au' signifies Bhagavān Aurasa — He who dwells intimately in the heart-lotus ('uras') of His devotees and manifests as faithful Avatāras.",
    deep: "In Tantrasārasaṅgraha 1.7 (`ojobhṛd aurasaḥ`), 'Aurasa' points both to the Lord seated in the cave of the heart (`urasi sthitaḥ`) and to His pure, non-different Avatāras (`svāṃśa` / `pūrṇa-prādurbhāva`) who descend without material taint.",
    pada: [
      { deva: "औ-कारः", iast: "au-kāraḥ", gloss: "the vṛddhi labial vowel 'au'" },
      { deva: "औरसः", iast: "aurasaḥ", gloss: "indweller of the heart ('uras'); pure self-manifestation" },
      { deva: "उरसि वसति", iast: "urasi vasati", gloss: "abides within the lotus of the heart" }
    ],
    related: ["ekakshara-o", "bimba", "vasudeva"]
  },
  {
    id: "ekakshara-am",
    deva: "अं",
    iast: "aṃ",
    aliases: ["am", "anusvara", "bindu", "anta", "अं", "अंकारः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "अन्तः",
    murtiIast: "antaḥ",
    verse: "TSS_7",
    niruktiDeva: "अन्तयति संहरति विश्वम्, अन्तर्गतो नियमयति च सर्वमित्यनुस्वारवाच्योऽन्तः ।",
    niruktiIast: "antayati saṃharati viśvam, antargato niyamayati ca sarvam ity anusvāravācyo'ntaḥ |",
    short: "The anusvāra 'aṃ' signifies Bhagavān Anta — the Ultimate Consummation, Inner Controller ('antaryāmī'), and Dissolver of worlds at pralaya.",
    deep: "As the fifteenth svara-unit (`anto'rdhagarbhaḥ` — TSS 1.7), 'aṃ' reveals Hari as Anta: both the final resting goal of all śāstras (`vedānta-vedya`) and the indwelling Antaryāmī who gathers all beings into His belly at mahāpralaya.",
    pada: [
      { deva: "अं (अनुस्वारः)", iast: "aṃ (anusvāraḥ)", gloss: "the nasal bindu syllable 'aṃ'" },
      { deva: "अन्तः", iast: "antaḥ", gloss: "the Ultimate Goal, Inner Ruler, and Cosmic Dissolver" },
      { deva: "अन्तर्गतः नियामकः", iast: "antargataḥ niyāmakaḥ", gloss: "dwelling within and governing all" }
    ],
    related: ["om", "ekakshara-ah", "purusha"]
  },
  {
    id: "ekakshara-ah",
    deva: "अः",
    iast: "aḥ",
    aliases: ["ah", "visarga", "ardhagarbha", "अः", "विसर्गः"],
    varga: "Svara · Praṇava-Ukāra (Taijasa-pāda)",
    murtiDeva: "अर्धगर्भः",
    murtiIast: "ardhagarbhaḥ",
    verse: "TSS_7",
    niruktiDeva: "अर्धे स्वांशे उदरैकदेशे गर्भीकृतं समस्तं जगद्येन स विसर्गवाच्योऽर्धगर्भः ।",
    niruktiIast: "ardhe svāṃśe udaraikadeśe garbhīkṛtaṃ samastaṃ jagad yena sa visargavācyo'rdhagarbhaḥ |",
    secondary: {
      deva: "अः इति ब्रह्म । तत्रागतमहमिति ।",
      iast: "aḥ iti brahma | tatrāgatam aham iti |",
      translation: "'Aḥ' is Brahman Himself; from resting in Him arises the name 'Aham'.",
      source: "Aitareyopaniṣadbhāṣyam 2.3.32"
    },
    short: "The visarga 'aḥ' signifies Bhagavān Ardhagarbha — He who holds the entire cosmos effortlessly within a tiny fraction of His infinite being — and in Aitareya Śruti directly names Brahman ('Aḥ iti Brahma').",
    deep: "Closing the sixteen Svaras, 'aḥ' carries dual majesty in Madhvācārya's works: in Tantrasārasaṅgraha 1.7 He is Ardhagarbha (cradling all brahmāṇḍas in a fraction of His form, `ekāṃśena sthito jagat` — BG 10.42), and in Aitareya Bhāṣya 2.3.32 'Aḥ' is the primeval Vedic name of Parabrahman.",
    pada: [
      { deva: "अः (विसर्गः)", iast: "aḥ (visargaḥ)", gloss: "the sixteenth svara-syllable 'aḥ'" },
      { deva: "अर्ध-गर्भः", iast: "ardha-garbhaḥ", gloss: "holding all worlds as an embryo in a fraction of His being" },
      { deva: "अः इति ब्रह्म", iast: "aḥ iti brahma", gloss: "'Aḥ' is directly Supreme Brahman (Aitareya Śruti)" }
    ],
    related: ["ekakshara-a", "ekakshara-am", "brahman", "narayana"]
  },

  // === KA-VARGA (क – ङ) : Praṇava-Makāra (Prājña-pāda) ===
  {
    id: "ekakshara-ka",
    deva: "क",
    iast: "ka",
    aliases: ["ka", "kakara", "kapila", "क", "ककारः"],
    varga: "Ka-varga · Praṇava-Makāra (Prājña-pāda)",
    murtiDeva: "कपिलः",
    murtiIast: "kapilaḥ",
    verse: "TSS_7",
    niruktiDeva: "कं सुखं ज्ञानं च पिलति ददाति पाति वेति ककारवाच्यः कपिलः ।",
    niruktiIast: "kaṃ sukhaṃ jñānaṃ ca pilati dadāti pāti veti kakāravācyaḥ kapilaḥ |",
    secondary: {
      deva: "कपिलो भगवानजः प्रोवाच ब्रह्मणे विद्याः ।",
      iast: "kapilo bhagavān ajaḥ provāca brahmaṇe vidyāḥ |",
      translation: "The unborn Lord Kapila imparted all sacred sciences unto Brahmā.",
      source: "Ṛgbhāṣyam 1.1.9 (citing Padma Purāṇa)"
    },
    short: "The first consonant 'ka' signifies Bhagavān Kapila — the giver of supreme bliss ('ka') and luminous wisdom, primal teacher of Sāṅkhya-tattvajñāna.",
    deep: "Across Vedic koshas 'ka' denotes bliss (`kaṃ brahma khaṃ brahma` — Chāndogya 4.10.5). Madhvācārya identifies 'ka' with Bhagavān Kapila, the canonical Jñānāvatāra who revealed authentic twenty-four-tattva ontology and bhakti-yoga to Devahūti and Brahmā.",
    pada: [
      { deva: "क-कारः", iast: "ka-kāraḥ", gloss: "the first velar consonant 'ka' (also denoting bliss)" },
      { deva: "कपिलः", iast: "kapilaḥ", gloss: "Bhagavān Kapila, bestower of bliss and liberating knowledge" },
      { deva: "कम् सुखम् पिलति", iast: "kam sukham pilati", gloss: "imparts spiritual joy and illumination" }
    ],
    related: ["kapila", "sukha", "ekakshara-kha", "tattva"]
  },
  {
    id: "ekakshara-kha",
    deva: "ख",
    iast: "kha",
    aliases: ["kha", "khakara", "khapati", "ख", "खकारः"],
    varga: "Ka-varga · Praṇava-Makāra (Prājña-pāda)",
    murtiDeva: "खपतिः",
    murtiIast: "khapatiḥ",
    verse: "TSS_7",
    niruktiDeva: "खस्य आकाशस्येन्द्रियग्रामस्य मोक्षसुखस्य च पतिरिति खकारवाच्यः खपतिः ।",
    niruktiIast: "khasya ākāśasyendriyagrāmasya mokṣasukhasya ca patir iti khakāravācyaḥ khapatiḥ |",
    short: "The syllable 'kha' signifies Bhagavān Khapati — Sovereign Lord of infinite space ('kha'), of the senses ('khāni'), and of Vaikuṇṭha.",
    deep: "In Sanskrit, 'kha' means expanse/ākāśa, the senses (`khāni daśa` — Tattvasaṅkhyānam 9), and unconditioned joy (`khaṃ brahma`). As Khapati (TSS 1.7), Viṣṇu governs both unmanifest space and every cognitive faculty.",
    pada: [
      { deva: "ख-कारः", iast: "kha-kāraḥ", gloss: "the aspirate velar consonant 'kha' (space / senses / joy)" },
      { deva: "ख-पतिः", iast: "kha-patiḥ", gloss: "Lord of space, heaven, and the cognitive faculties" },
      { deva: "आकाश-इन्द्रिय-स्वामी", iast: "ākāśa-indriya-svāmī", gloss: "master of expanse and senses" }
    ],
    related: ["avyakritakasha", "indriya", "ekakshara-ka", "ekakshara-ga"]
  },
  {
    id: "ekakshara-ga",
    deva: "ग",
    iast: "ga",
    aliases: ["ga", "gakara", "garudasana", "ग", "गकारः"],
    varga: "Ka-varga · Praṇava-Makāra (Prājña-pāda)",
    murtiDeva: "गरुडासनः",
    murtiIast: "garuḍāsanaḥ",
    verse: "TSS_7",
    niruktiDeva: "गरुडे वेदात्मके सुपर्णे आस्ते इति गकारवाच्यो गरुडासनः ।",
    niruktiIast: "garuḍe vedātmake suparṇe āste iti gakāravācyo garuḍāsanaḥ |",
    short: "The syllable 'ga' signifies Bhagavān Garuḍāsana — He who rides enthroned upon Garuḍa, the winged embodiment of the three Vedas.",
    deep: "In Tantrasārasaṅgraha 1.7, 'ga' invokes Garuḍāsana Hari: moving swiftly (`√gam`) to rescue devotees like Gajendra, enthroned upon Suparṇa Garuḍa who personifies Vedic metre and hymnody.",
    pada: [
      { deva: "ग-कारः", iast: "ga-kāraḥ", gloss: "the voiced velar consonant 'ga'" },
      { deva: "गरुड-आसनः", iast: "garuḍa-āsanaḥ", gloss: "enthroned upon Vedic Suparṇa Garuḍa" },
      { deva: "वेदात्मके सुपर्णे आस्ते", iast: "vedātmake suparṇe āste", gloss: "seated on the Veda-winged mount" }
    ],
    related: ["ekakshara-kha", "ekakshara-gha", "vishnu"]
  },
  {
    id: "ekakshara-gha",
    deva: "घ",
    iast: "gha",
    aliases: ["gha", "ghakara", "gharma", "घ", "घकारः"],
    varga: "Ka-varga · Praṇava-Makāra (Prājña-pāda)",
    murtiDeva: "घर्मः",
    murtiIast: "gharmaḥ",
    verse: "TSS_8",
    niruktiDeva: "जिघर्ति द्योतयति तपति च विश्वं स्वतेजसेति घकारवाच्यो घर्मः ।",
    niruktiIast: "jigharti dyotayati tapati ca viśvaṃ svatejaseti ghakāravācyo gharmaḥ |",
    short: "The syllable 'gha' signifies Bhagavān Gharma — the effulgent Solar Fire and Pravargya-splendour illuminating the universe.",
    deep: "Opening Tantrasārasaṅgraha 1.8 (`gharmo ṅasāraḥ`), 'Gharma' refers to the sacred Vedic Pravargya radiance and solar heat (`ya eṣa sūryamaṇḍale sthitvā tapati bhagavān sa nārāyaṇaḥ` — AIT 2.2.1).",
    pada: [
      { deva: "घ-कारः", iast: "gha-kāraḥ", gloss: "the voiced aspirate velar 'gha'" },
      { deva: "घर्मः", iast: "gharmaḥ", gloss: "sacred solar-fire radiance; Bhagavān who warms and illumines" },
      { deva: "स्व-तेजसा द्योतयति", iast: "sva-tejasā dyotayati", gloss: "illumines all worlds by His own light" }
    ],
    related: ["pusha", "ekakshara-ga", "ekakshara-nga"]
  },
  {
    id: "ekakshara-nga",
    deva: "ङ",
    iast: "ṅa",
    aliases: ["nga", "ngakara", "ngasara", "ङ", "ङकारः"],
    varga: "Ka-varga · Praṇava-Makāra (Prājña-pāda)",
    murtiDeva: "ङसारः",
    murtiIast: "ṅasāraḥ",
    verse: "TSS_8",
    niruktiDeva: "ङानां विषयाणां जीवानां च सार उत्तमो नियामक इति ङकारवाच्यो ङसारः ।",
    niruktiIast: "ṅānāṃ viṣayāṇāṃ jīvānāṃ ca sāra uttamo niyāmaka iti ṅakāravācyo ṅasāraḥ |",
    short: "The velar nasal 'ṅa' signifies Bhagavān Ṅasāra — the supreme quintessence ('sāra') within all sense-experiences and sentient beings.",
    deep: "Even rare grammatical nasals like 'ṅa', 'ña', and 'ṇa' bear explicit Bhagavad-rūpas in Madhvācārya's Mātṛkā system (`pañcāśadvarṇavācyās tāḥ` — TSS 1.5), proving `sarvaśabdavācyatva` — that no phoneme in existence is devoid of naming Viṣṇu.",
    pada: [
      { deva: "ङ-कारः", iast: "ṅa-kāraḥ", gloss: "the velar nasal consonant 'ṅa'" },
      { deva: "ङ-सारः", iast: "ṅa-sāraḥ", gloss: "the supreme Essence indwelling all objects and senses" },
      { deva: "सर्व-सार-भूतः", iast: "sarva-sāra-bhūtaḥ", gloss: "quintessential reality behind all things" }
    ],
    related: ["varna", "ekakshara-gha", "ekakshara-sa"]
  },

  // === CA-VARGA (च – ञ) : Praṇava-Bindu (Turīya-pāda) ===
  {
    id: "ekakshara-ca",
    deva: "च",
    iast: "ca",
    aliases: ["ca", "cha", "cakara", "carvanga", "charvanga", "च", "चकारः"],
    varga: "Ca-varga · Praṇava-Bindu (Turīya-pāda)",
    murtiDeva: "चार्वङ्गः",
    murtiIast: "cārvaṅgaḥ",
    verse: "TSS_8",
    niruktiDeva: "चारूणि निर्दोषानन्दमयानि सर्वाण्यङ्गानि यस्य स चकारवाच्यश्चार्वङ्गः ।",
    niruktiIast: "cārūṇi nirdoṣānandamayāni sarvāṇy aṅgāni yasya sa cakāravācyaś cārvaṅgaḥ |",
    short: "The palatal 'ca' signifies Bhagavān Cārvaṅga — He of surpassingly auspicious, non-material limbs composed purely of consciousness and bliss.",
    deep: "In Tantrasārasaṅgraha 1.8, 'ca' invokes Cārvaṅga: against impersonalism that denies divine form, Madhvācārya affirms that every limb of Hari is uncreated, faultless, and supremely enchanting (`cidānandaikadehavān` — TSS 1.18).",
    pada: [
      { deva: "च-कारः", iast: "ca-kāraḥ", gloss: "the first palatal consonant 'ca'" },
      { deva: "चारु-अङ्गः", iast: "cāru-aṅgaḥ", gloss: "possessing faultlessly beautiful, auspicious limbs" },
      { deva: "चिदानन्द-विग्रहः", iast: "cidānanda-vigrahaḥ", gloss: "whose form is pure consciousness and bliss" }
    ],
    related: ["paramatman", "vishesha", "ekakshara-cha"]
  },
  {
    id: "ekakshara-cha",
    deva: "छ",
    iast: "cha",
    aliases: ["cha", "chha", "chakara", "chandogamya", "छ", "छकारः"],
    varga: "Ca-varga · Praṇava-Bindu (Turīya-pāda)",
    murtiDeva: "छन्दोगम्यः",
    murtiIast: "chandogamyaḥ",
    verse: "TSS_8",
    niruktiDeva: "छन्दोभिर्निखिलैर्वेदैरेव सम्यग्गम्यो वेद्य इति छकारवाच्यश्छन्दोगम्यः ।",
    niruktiIast: "chandobhir nikhilair vedair eva samyag gamyo vedya iti chakāravācyaś chandogamyaḥ |",
    short: "The aspirate palatal 'cha' signifies Bhagavān Chandogamya — He who is approachable and known supremely through the sacred Vedic metres ('chandas').",
    deep: "Echoing Bhagavadgītā 15.15 (`vedaiś ca sarvair aham eva vedyaḥ`) and Taittirīya Bhāṣya 1.1.12 (`yo viśvarūpo bhagavāṃś chandasām adhipo hariḥ`), 'cha' names Chandogamya — reachable through apauruṣeya Veda.",
    pada: [
      { deva: "छ-कारः", iast: "cha-kāraḥ", gloss: "the aspirate palatal consonant 'cha'" },
      { deva: "छन्दः-गम्यः", iast: "chandaḥ-gamyaḥ", gloss: "knowable through the sacred Vedic hymns (chandas)" },
      { deva: "एक-वेद-वेद्यः", iast: "eka-veda-vedyaḥ", gloss: "supreme purport of all Vedas" }
    ],
    related: ["agama", "apaurusheya", "tatparyalinga", "ekakshara-ja"]
  },
  {
    id: "ekakshara-ja",
    deva: "ज",
    iast: "ja",
    aliases: ["ja", "jakara", "janardana", "ज", "जकारः"],
    varga: "Ca-varga · Praṇava-Bindu (Turīya-pāda)",
    murtiDeva: "जनार्दनः",
    murtiIast: "janārdanaḥ",
    verse: "TSS_8",
    niruktiDeva: "जनान् दुष्टानर्दयति सज्जनानां जन्मसंसारं च नाशयतीति जकारवाच्यो जनार्दनः ।",
    niruktiIast: "janān duṣṭān ardayati sajjanānāṃ janmasaṃsāraṃ ca nāśayatīti jakāravācyo janārdanaḥ |",
    short: "The syllable 'ja' signifies Bhagavān Janārdana — Vanquisher of wicked forces, petitioned by devotees for liberation from birth ('janma').",
    deep: "In Tantrasārasaṅgraha 1.8 and Anubhāṣya 1.6 (`mukhyataḥ sarvaśabdaiś ca vācya eko janārdanaḥ`), Janārdana is both the crusher of asuras (`ardana`) and the One entreated (`yācita` — √ard 'gatau yācane ca') for eternal welfare.",
    pada: [
      { deva: "ज-कारः", iast: "ja-kāraḥ", gloss: "the voiced palatal consonant 'ja'" },
      { deva: "जन-अर्दनः", iast: "jana-ardanaḥ", gloss: "subduer of evil; besought by all beings for mokṣa" },
      { deva: "जन्म-निवर्तकः", iast: "janma-nivartakaḥ", gloss: "deliverer from repeated birth" }
    ],
    related: ["janardana", "moksha", "ekakshara-jha"]
  },
  {
    id: "ekakshara-jha",
    deva: "झ",
    iast: "jha",
    aliases: ["jha", "jhakara", "jhatitari", "झ", "झकारः"],
    varga: "Ca-varga · Praṇava-Bindu (Turīya-pāda)",
    murtiDeva: "झटितारिः",
    murtiIast: "jhaṭitāriḥ",
    verse: "TSS_8",
    niruktiDeva: "झटिति क्षिप्रमेवारीन् भक्तान्तरायान् नाशयतीति झकारवाच्यो झटितारिः ।",
    niruktiIast: "jhaṭiti kṣipram evārīn bhaktāntarāyān nāśayatīti jhakāravācyo jhaṭitāriḥ |",
    short: "The voiced aspirate 'jha' signifies Bhagavān Jhaṭitāri — He who swiftly ('jhaṭiti') shatters the inner and outer foes of His devotees.",
    deep: "In Tantrasārasaṅgraha 1.8 (`jhaṭitārir ñamaṣ ṭaṅkī`), 'jha' evokes instantaneous protective grace: like Narasiṃha bursting from the pillar in an instant (`jhaṭiti`), the Lord destroys obstacles to devotion.",
    pada: [
      { deva: "झ-कारः", iast: "jha-kāraḥ", gloss: "the voiced aspirate palatal 'jha'" },
      { deva: "झटिति-अरिः", iast: "jhaṭiti-ariḥ", gloss: "instantaneous vanquisher of enemies and sins" },
      { deva: "क्षिप्र-रक्षकः", iast: "kṣipra-rakṣakaḥ", gloss: "swift protector of those who take refuge" }
    ],
    related: ["ekakshara-ja", "narasimha", "ekakshara-nya"]
  },
  {
    id: "ekakshara-nya",
    deva: "ञ",
    iast: "ña",
    aliases: ["nya", "jna", "nyakara", "nyama", "ञ", "ञकारः"],
    varga: "Ca-varga · Praṇava-Bindu (Turīya-pāda)",
    murtiDeva: "ञमः",
    murtiIast: "ñamaḥ",
    verse: "TSS_8",
    niruktiDeva: "ञान् गायतो भक्तान् मानयति नियच्छति च सर्वमिति ञकारवाच्यो ञमः ।",
    niruktiIast: "ñān gāyato bhaktān mānayati niyacchati ca sarvam iti ñakāravācyo ñamaḥ |",
    short: "The palatal nasal 'ña' signifies Bhagavān Ñama — the Measurer, Ordainer, and Honourer of chanting devotees.",
    deep: "From lexical 'ña' (chanting/praise, √gai) and √mā / √yam, Tantrasārasaṅgraha 1.8 reveals Ñama as the Lord who receives Sāma-praise and regulates cosmic law.",
    pada: [
      { deva: "ञ-कारः", iast: "ña-kāraḥ", gloss: "the palatal nasal consonant 'ña'" },
      { deva: "ञमः", iast: "ñamaḥ", gloss: "ordainer and receiver of sacred chant" },
      { deva: "नियन्ता मानयिता च", iast: "niyantā mānayitā ca", gloss: "governor and honourer of devotees" }
    ],
    related: ["saman", "varna", "ekakshara-ta-retro"]
  },

  // === TA-VARGA RETROFLEX (ट – ण) : Praṇava-Nāda (Ātma-pāda) ===
  {
    id: "ekakshara-ta-retro",
    deva: "ट",
    iast: "ṭa",
    aliases: ["ta", "takara", "tanki", "ट", "टकारः"],
    varga: "Ṭa-varga · Praṇava-Nāda (Ātma-pāda)",
    murtiDeva: "टङ्की",
    murtiIast: "ṭaṅkī",
    verse: "TSS_8",
    niruktiDeva: "अज्ञानपाषाणभेदनसमर्थष्टङ्कः परशुश्चक्रादिर्वा विद्यतेऽस्येति टकारवाच्यष्टङ्की ।",
    niruktiIast: "ajñānapāṣāṇabhedanasamarthaṣ ṭaṅkaḥ paraśuś cakrādir vā vidyate'syeti ṭakāravācyaṣ ṭaṅkī |",
    short: "The retroflex 'ṭa' signifies Bhagavān Ṭaṅkī — Wielder of the divine chisel/axe ('ṭaṅka') that cleaves the rock of ignorance and evil.",
    deep: "In Tantrasārasaṅgraha 1.8 & 1.21 (`ṭaṅkī daṇḍī ca dhanvī ca tattadyuktas tu vāmataḥ`), Madhvācārya explicitly describes the meditative iconography of Ṭaṅkī holding the divine ṭaṅka alongside knowledge-mudrā and abhaya.",
    pada: [
      { deva: "ट-कारः", iast: "ṭa-kāraḥ", gloss: "the first retroflex consonant 'ṭa'" },
      { deva: "टङ्की", iast: "ṭaṅkī", gloss: "wielder of the divine axe/chisel (ṭaṅka)" },
      { deva: "अज्ञान-भेत्ता", iast: "ajñāna-bhettā", gloss: "cleaver of hard bondage" }
    ],
    related: ["ekakshara-tha-retro", "ekakshara-da", "ekakshara-dha"]
  },
  {
    id: "ekakshara-tha-retro",
    deva: "ठ",
    iast: "ṭha",
    aliases: ["tha", "thakara", "thalaka", "ठ", "ठकारः"],
    varga: "Ṭa-varga · Praṇava-Nāda (Ātma-pāda)",
    murtiDeva: "ठलकः",
    murtiIast: "ṭhalakaḥ",
    verse: "TSS_8",
    niruktiDeva: "ठं चन्द्रमण्डलं व्योमपूर्णं वा आनन्दं लाति ददातीति ठकारवाच्यः ठलकः ।",
    niruktiIast: "ṭhaṃ candramaṇḍalaṃ vyomapūrṇaṃ vā ānandaṃ lāti dadātīti ṭhakāravācyaḥ ṭhalakaḥ |",
    short: "The aspirate retroflex 'ṭha' signifies Bhagavān Ṭhalaka — Bestower of nectarine lunar coolness and sky-filling spiritual joy.",
    deep: "In Sanskrit ekākṣara tradition 'ṭha' denotes the full moon disk and resonant sphere; in Tantrasārasaṅgraha 1.8 (`ṭhalako ḍalako ḍharī`), Ṭhalaka is the soothing, nectar-giving form of Hari.",
    pada: [
      { deva: "ठ-कारः", iast: "ṭha-kāraḥ", gloss: "the aspirate retroflex consonant 'ṭha'" },
      { deva: "ठ-लकः", iast: "ṭha-lakaḥ", gloss: "bestower (`√lā`) of nectarine coolness and bliss" },
      { deva: "अमृत-आनन्द-दः", iast: "amṛta-ānanda-daḥ", gloss: "giver of immortal refreshment" }
    ],
    related: ["ekakshara-ta-retro", "ekakshara-da-retro", "sukha"]
  },
  {
    id: "ekakshara-da-retro",
    deva: "ड",
    iast: "ḍa",
    aliases: ["da", "dakara", "dalaka", "daraka", "ड", "डकारः"],
    varga: "Ṭa-varga · Praṇava-Nāda (Ātma-pāda)",
    murtiDeva: "डलकः (डरकः)",
    murtiIast: "ḍalakaḥ (ḍarakaḥ)",
    verse: "TSS_8",
    niruktiDeva: "डयते सर्वत्र विहरति दलयति च भक्ताघमिति डकारवाच्यो डलकः (डरकः) ।",
    niruktiIast: "ḍayate sarvatra viharati dalayati ca bhaktāgham iti ḍakāravācyo ḍalakaḥ (ḍarakaḥ) |",
    short: "The voiced retroflex 'ḍa' signifies Bhagavān Ḍalaka (Ḍaraka) — He who soars unimpeded everywhere and tears apart the sins and terrors of devotees.",
    deep: "Connected to √ḍī ('vihāyasā gatau' — soaring aloft) and √dal ('vidāraṇe' — splitting asunder), Ḍalaka / Ḍaraka in Tantrasārasaṅgraha 1.8 reveals the Lord who strikes awe in adharma and splits karmic knots.",
    pada: [
      { deva: "ड-कारः", iast: "ḍa-kāraḥ", gloss: "the voiced retroflex consonant 'ḍa'" },
      { deva: "डलकः / डरकः", iast: "ḍalakaḥ / ḍarakaḥ", gloss: "splitter of sins; awe-inspiring sovereign" },
      { deva: "अघ-दलन-कर्ता", iast: "agha-dalana-kartā", gloss: "cleaver of bondage" }
    ],
    related: ["ekakshara-tha-retro", "ekakshara-dha-retro"]
  },
  {
    id: "ekakshara-dha-retro",
    deva: "ढ",
    iast: "ḍha",
    aliases: ["dha", "dhakara", "dhari", "ढ", "ढकारः"],
    varga: "Ṭa-varga · Praṇava-Nāda (Ātma-pāda)",
    murtiDeva: "ढरी",
    murtiIast: "ḍharī",
    verse: "TSS_8",
    niruktiDeva: "ढान् महानादान् ढक्कादिध्वनीन् महागुणांश्च राति धत्ते वेति ढकारवाच्यो ढरी ।",
    niruktiIast: "ḍhān mahānādān ḍhakkādidhvanīn mahāguṇāṃś ca rāti dhatte veti ḍhakāravācyo ḍharī |",
    short: "The voiced aspirate retroflex 'ḍha' signifies Bhagavān Ḍharī — Bearer of cosmic nāda-resonance and protective shield ('ḍhāla') of the worlds.",
    deep: "Belonging to the Nāda-kalā of Praṇava (`ṭa-varga`), 'ḍha' names Ḍharī (TSS 1.8), who holds primordial unstruck sound (anāhata-nāda) and shields devotees from calamity.",
    pada: [
      { deva: "ढ-कारः", iast: "ḍha-kāraḥ", gloss: "the voiced aspirate retroflex 'ḍha'" },
      { deva: "ढरी", iast: "ḍharī", gloss: "wielder of cosmic nāda and protective refuge" },
      { deva: "रक्षकः नाद-धर्ता च", iast: "rakṣakaḥ nāda-dhartā ca", gloss: "protector and sustainer of sacred sound" }
    ],
    related: ["om", "ekakshara-da-retro", "ekakshara-na-retro"]
  },
  {
    id: "ekakshara-na-retro",
    deva: "ण",
    iast: "ṇa",
    aliases: ["na", "nakara", "natma", "ण", "णकारः"],
    varga: "Ṭa-varga · Praṇava-Nāda (Ātma-pāda)",
    murtiDeva: "णात्मा",
    murtiIast: "ṇātmā",
    verse: "TSS_9",
    niruktiDeva: "णो निर्वृतिरानन्दो ज्ञानं च, तदात्मकः स्वरूपभूतसुखज्ञान इति णकारवाच्यो णात्मा ।",
    niruktiIast: "ṇo nirvṛtir ānando jñānaṃ ca, tadātmakaḥ svarūpabhūtasukhajñāna iti ṇakāravācyo ṇātmā |",
    secondary: {
      deva: "अर्यते ण आभ्यामित्यरणी ।",
      iast: "aryate ṇa ābhyām ity araṇī |",
      translation: "Because 'Ṇa' (the Lord of supreme bliss) is attained through Guru and Śiṣya, they are called the two Araṇī kindling-sticks.",
      source: "Kaṭhopaniṣadbhāṣyam 2.1.8"
    },
    short: "The retroflex nasal 'ṇa' signifies Bhagavān Ṇātmā — He whose very essence ('ātman') is supreme bliss and unclouded knowledge ('ṇa').",
    deep: "One of Tattvavāda's key ekākṣara roots! Both in Tantrasārasaṅgraha 1.9 (`ṇātmā tāraḥ`), Kaṭha Bhāṣya 2.1.8 (`aryate ṇa ābhyām`), and the Kṛṣṇa nirukti (`ṇaś ca nirvṛtivācakaḥ`), 'ṇa' directly means nirvṛti — supreme spiritual felicity.",
    pada: [
      { deva: "ण-कारः", iast: "ṇa-kāraḥ", gloss: "the retroflex nasal 'ṇa' denoting supreme bliss (nirvṛti)" },
      { deva: "ण-आत्मा", iast: "ṇa-ātmā", gloss: "whose essence is plenary bliss and wisdom" },
      { deva: "निर्वृति-स्वरूपः", iast: "nirvṛti-svarūpaḥ", gloss: "embodiment of pure beatitude" }
    ],
    related: ["krishna", "narayana", "sukha", "atman"]
  },

  // === TA-VARGA DENTAL (त – न) : Praṇava-Kalā (Antarātma-pāda) ===
  {
    id: "ekakshara-ta",
    deva: "त",
    iast: "ta",
    aliases: ["ta", "takara", "tara", "taara", "त", "तकारः"],
    varga: "Ta-varga · Praṇava-Kalā (Antarātma-pāda)",
    murtiDeva: "तारः",
    murtiIast: "tāraḥ",
    verse: "TSS_9",
    niruktiDeva: "तारयति संसारसागराद् भक्तान् गर्भजन्मजरामृत्युभयादिति तकारवाच्यस्तारः ।",
    niruktiIast: "tārayati saṃsārasāgarād bhaktān garbhajanmajarāmṛtyubhayād iti takāravācyas tāraḥ |",
    short: "The dental 'ta' signifies Bhagavān Tāra — the Saviour Ferryman who carries devotees across the ocean of transmigration.",
    deep: "In Tantrasārasaṅgraha 1.9 and Viṣṇusahasranāma, 'Tāra' is also a name of Praṇava itself because it ferries (`tārayati`) souls across birth and death; 'ta' invokes Hari as that saving power.",
    pada: [
      { deva: "त-कारः", iast: "ta-kāraḥ", gloss: "the first dental consonant 'ta'" },
      { deva: "तारः", iast: "tāraḥ", gloss: "the Deliverer across the ocean of saṃsāra" },
      { deva: "संसार-तारकः", iast: "saṃsāra-tārakaḥ", gloss: "who ferries devotees to liberation" }
    ],
    related: ["om", "moksha", "ekakshara-tha"]
  },
  {
    id: "ekakshara-tha",
    deva: "थ",
    iast: "tha",
    aliases: ["tha", "thakara", "thama", "thapa", "थ", "थकारः"],
    varga: "Ta-varga · Praṇava-Kalā (Antarātma-pāda)",
    murtiDeva: "थमः (थपः)",
    murtiIast: "thamaḥ (thapaḥ)",
    verse: "TSS_9",
    niruktiDeva: "थं रक्षणं मङ्गलं वा मिमीते पाति चेति थकारवाच्यः थमः (थपः) ।",
    niruktiIast: "thaṃ rakṣaṇaṃ maṅgalaṃ vā mimīte pāti ceti thakāravācyaḥ thamaḥ (thapaḥ) |",
    short: "The aspirate dental 'tha' signifies Bhagavān Thama / Thapa — Guardian of stability, shelter ('tha'), and auspiciousness.",
    deep: "In Tantrasārasaṅgraha 1.9 (`tāras thamo daṇḍī`, v.l. `thapo`), lexical 'tha' denotes shelter, mountain-firmness, and auspicious protection; Bhagavān measures out and guards the refuge of all worlds.",
    pada: [
      { deva: "थ-कारः", iast: "tha-kāraḥ", gloss: "the aspirate dental consonant 'tha' (protection/stability)" },
      { deva: "थमः / थपः", iast: "thamaḥ / thapaḥ", gloss: "dispenser and guardian of auspicious refuge" },
      { deva: "रक्षण-कर्ता", iast: "rakṣaṇa-kartā", gloss: "steadfast protector" }
    ],
    related: ["ekakshara-ta", "ekakshara-da", "sharanagati"]
  },
  {
    id: "ekakshara-da",
    deva: "द",
    iast: "da",
    aliases: ["da", "dakara", "dandi", "द", "दकारः"],
    varga: "Ta-varga · Praṇava-Kalā (Antarātma-pāda)",
    murtiDeva: "दण्डी",
    murtiIast: "daṇḍī",
    verse: "TSS_9",
    niruktiDeva: "दुष्टदमनहेतुर्दण्डो न्यायः संन्यासदण्डो वा विद्यतेऽस्येति दकारवाच्यो दण्डी ।",
    niruktiIast: "duṣṭadamanahetur daṇḍo nyāyaḥ saṃnyāsadaṇḍo vā vidyate'syeti dakāravācyo daṇḍī |",
    short: "The voiced dental 'da' signifies Bhagavān Daṇḍī — Bearer of the sceptre of cosmic justice ('daṇḍa') and the ascetic staff as Vāmana-trivikrama.",
    deep: "Echoing Bhagavadgītā 10.38 (`daṇḍo damayatām asmi`) and Tantrasārasaṅgraha 1.21 (`ṭaṅkī daṇḍī ca dhanvī ca`), Daṇḍī holds the rod of moral order in His left hand while bestowing jñāna-mudrā and abhaya.",
    pada: [
      { deva: "द-कारः", iast: "da-kāraḥ", gloss: "the voiced dental consonant 'da'" },
      { deva: "दण्डी", iast: "daṇḍī", gloss: "bearer of the staff of cosmic order and ascetic wisdom" },
      { deva: "दमयिता शासकः च", iast: "damayitā śāsakaḥ ca", gloss: "regulator of moral law" }
    ],
    related: ["vamana", "dharma", "ekakshara-dha"]
  },
  {
    id: "ekakshara-dha",
    deva: "ध",
    iast: "dha",
    aliases: ["dha", "dhakara", "dhanvi", "ध", "धकारः"],
    varga: "Ta-varga · Praṇava-Kalā (Antarātma-pāda)",
    murtiDeva: "धन्वी",
    murtiIast: "dhanvī",
    verse: "TSS_9",
    niruktiDeva: "प्रणवात्मकं शार्ङ्गं कोदण्डं वा धनुर्विद्यतेऽस्येति धकारवाच्यो धन्वी ।",
    niruktiIast: "praṇavātmakaṃ śārṅgaṃ kodaṇḍaṃ vā dhanur vidyate'syeti dhakāravācyo dhanvī |",
    short: "The voiced aspirate dental 'dha' signifies Bhagavān Dhanvī — Wielder of the invincible Śārṅga and Kodaṇḍa bow.",
    deep: "In Upaniṣadic meditation (`praṇavo dhanuḥ śaro hy ātmā brahma tallakṣyam ucyate` — Muṇḍaka 2.2.4) and Tantrasārasaṅgraha 1.9 & 1.21, Dhanvī speeds the soul-arrow unerringly to liberation while guarding righteousness.",
    pada: [
      { deva: "ध-कारः", iast: "dha-kāraḥ", gloss: "the voiced aspirate dental 'dha'" },
      { deva: "धन्वी", iast: "dhanvī", gloss: "wielder of the divine Śārṅga/Kodaṇḍa bow" },
      { deva: "शार्ङ्ग-धनुर्धरः", iast: "śārṅga-dhanurdharaḥ", gloss: "supreme archer protecting dharma" }
    ],
    related: ["rama", "ekakshara-da", "ekakshara-na"]
  },
  {
    id: "ekakshara-na",
    deva: "न",
    iast: "na",
    aliases: ["na", "nakara", "namya", "न", "नकारः"],
    varga: "Ta-varga · Praṇava-Kalā (Antarātma-pāda)",
    murtiDeva: "नम्यः",
    murtiIast: "namyaḥ",
    verse: "TSS_9",
    niruktiDeva: "लक्ष्मीब्रह्मरुद्रेन्द्रादिभिः सर्वैर्नितरां नमसनीयो वन्द्य इति नकारवाच्यो नम्यः ।",
    niruktiIast: "lakṣmībrahmarudrendrādibhiḥ sarvair nitarāṃ namasanīyo vandya iti nakāravācyo namyaḥ |",
    short: "The dental nasal 'na' signifies Bhagavān Namya — the One worthy of universal prostration by Ramā, Brahmā, Rudra, and all souls, who bows to none.",
    deep: "In Tantrasārasaṅgraha 1.1 (`jayaty abjabhaveśendravanditaḥ kamalāpatiḥ`) and 1.9, 'na' (`√nam`) reveals the asymmetric apex of Tāratamya: every being bows upward along the hierarchy, culminating in Namya Hari alone.",
    pada: [
      { deva: "न-कारः", iast: "na-kāraḥ", gloss: "the dental nasal consonant 'na'" },
      { deva: "नम्यः", iast: "namyaḥ", gloss: "supremely adorable and bowed to by all beings" },
      { deva: "सर्व-वन्दनीयः", iast: "sarva-vandanīyaḥ", gloss: "ultimate object of salutation (`namaḥ`)" }
    ],
    related: ["sharanagati", "taratamya", "bhakti"]
  },

  // === PA-VARGA (प – म) : Praṇava-Śānta (Paramātma-pāda) ===
  {
    id: "ekakshara-pa",
    deva: "प",
    iast: "pa",
    aliases: ["pa", "pakara", "para", "प", "पकारः"],
    varga: "Pa-varga · Praṇava-Śānta (Paramātma-pāda)",
    murtiDeva: "परः",
    murtiIast: "paraḥ",
    verse: "TSS_9",
    niruktiDeva: "जीवाक्षराभ्यां क्षराक्षराभ्यां च सर्वथा पर उत्कृष्ट इति पकारवाच्यः परः ।",
    niruktiIast: "jīvākṣarābhyāṃ kṣarākṣarābhyāṃ ca sarvathā para utkṛṣṭa iti pakāravācyaḥ paraḥ |",
    short: "The labial 'pa' signifies Bhagavān Para — the Transcendent Supreme beyond both mutable souls ('kṣara') and immutable Śrī-tattva ('akṣara').",
    deep: "Grounded in Bhagavadgītā 15.17 (`uttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ`) and MBTN 1.2 (`nārāyaṇaḥ paratamaḥ paramāt sa ekaḥ`), 'pa' opens the Paramātma-varga with 'Para' — absolute transcendence.",
    pada: [
      { deva: "प-कारः", iast: "pa-kāraḥ", gloss: "the first labial consonant 'pa'" },
      { deva: "परः", iast: "paraḥ", gloss: "Supremely Transcendent beyond kṣara and akṣara" },
      { deva: "सर्वोत्तमः", iast: "sarvottamaḥ", gloss: "loftiest of all realities" }
    ],
    related: ["paramatman", "akshara", "purusha", "ekakshara-pha"]
  },
  {
    id: "ekakshara-pha",
    deva: "फ",
    iast: "pha",
    aliases: ["pha", "phakara", "phali", "फ", "फकारः"],
    varga: "Pa-varga · Praṇava-Śānta (Paramātma-pāda)",
    murtiDeva: "फली",
    murtiIast: "phalī",
    verse: "TSS_9",
    niruktiDeva: "निखिलकर्मोपासनानां धर्मार्थकाममोक्षाख्यफलप्रदाता फलति पूर्णसंकल्प इति वा फली ।",
    niruktiIast: "nikhilakarmopāsanānāṃ dharmārthakāmamokṣākhyaphalapradātā phalati pūrṇasaṃkalpa iti vā phalī |",
    short: "The aspirate labial 'pha' signifies Bhagavān Phalī — the sole Independent Bestower of all fruits of action, knowledge, and liberation.",
    deep: "Echoing Brahmasūtra 3.2.38 (`phalam ata upapatteḥ` — fruits come from the Lord, not from insentient karma-apūrva by itself), 'pha' invokes Phalī Hari, who awards every righteous fruit culminating in Mokṣa.",
    pada: [
      { deva: "फ-कारः", iast: "pha-kāraḥ", gloss: "the aspirate labial consonant 'pha'" },
      { deva: "फली", iast: "phalī", gloss: "independent lord and dispenser of all spiritual and worldly fruits" },
      { deva: "मोक्षादि-फल-दाता", iast: "mokṣādi-phala-dātā", gloss: "granter of liberation and every attainment" }
    ],
    related: ["karma", "moksha", "ekakshara-pa", "ekakshara-ba"]
  },
  {
    id: "ekakshara-ba",
    deva: "ब",
    iast: "ba",
    aliases: ["ba", "bakara", "bali", "ब", "बकारः"],
    varga: "Pa-varga · Praṇava-Śānta (Paramātma-pāda)",
    murtiDeva: "बली",
    murtiIast: "balī",
    verse: "TSS_9",
    niruktiDeva: "निरवधिकस्वतन्त्रबलवान् बलिनो निगृह्णाति चेति बकारवाच्यो बली ।",
    niruktiIast: "niravadhikasvatantrabalavān balino nigṛhṇāti ceti bakāravācyo balī |",
    short: "The voiced labial 'ba' signifies Bhagavān Balī — Possessor of boundless, self-grounded omnipotence ('bala') that sustains the cosmos.",
    deep: "In Tantrasārasaṅgraha 1.9 (`balī bhago manuḥ`) and MBTN 1.13 (`pūrṇāvyayātmabalacitsukhavīryasāraḥ`), Balī celebrates the Lord's effortless omnipotence by which Mukhyaprāṇa Himself derives strength (`vāsudevabalāśrayaḥ` — BR 1.3.16).",
    pada: [
      { deva: "ब-कारः", iast: "ba-kāraḥ", gloss: "the voiced labial consonant 'ba'" },
      { deva: "बली", iast: "balī", gloss: "possessor of infinite, independent strength" },
      { deva: "पूर्ण-बल-विग्रहः", iast: "pūrṇa-bala-vigrahaḥ", gloss: "embodiment of inexhaustible power" }
    ],
    related: ["bala", "shakti", "prana", "ekakshara-bha"]
  },
  {
    id: "ekakshara-bha",
    deva: "भ",
    iast: "bha",
    aliases: ["bha", "bhakara", "bhaga", "भ", "भकारः"],
    varga: "Pa-varga · Praṇava-Śānta (Paramātma-pāda)",
    murtiDeva: "भगः",
    murtiIast: "bhagaḥ",
    verse: "TSS_9",
    niruktiDeva: "ऐश्वर्यवीर्ययशःश्रीज्ञानवैराग्यात्मकषड्गुणपूर्णस्वरूप इति भकारवाच्यो भगः ।",
    niruktiIast: "aiśvaryavīryayaśaḥśrījñānavairāgyātmakaṣaḍguṇapūrṇasvarūpa iti bhakāravācyo bhagaḥ |",
    short: "The voiced aspirate labial 'bha' signifies Bhagavān Bhaga — the radiant Plenary Perfection of sovereignty, valour, glory, splendour, wisdom, and detachment.",
    deep: "Where ordinary beings have only sparks of virtue, 'bha' names Viṣṇu as 'Bhaga' Himself (`ṣāḍguṇyavigraha` — MBTN 1.24): His essence is not merely possessing 'bhaga', but being the living ocean of the six boundless attributes.",
    pada: [
      { deva: "भ-कारः", iast: "bha-kāraḥ", gloss: "the voiced aspirate labial 'bha' (splendour/majesty)" },
      { deva: "भगः", iast: "bhagaḥ", gloss: "plenary sixfold divine majesty embodied" },
      { deva: "षड्गुण-पूर्णः", iast: "ṣaḍguṇa-pūrṇaḥ", gloss: "replete with aiśvarya, vīrya, yaśas, śrī, jñāna, vairāgya" }
    ],
    related: ["bhagavan", "ekakshara-sha-retro", "ekakshara-ma"]
  },
  {
    id: "ekakshara-ma",
    deva: "म",
    iast: "ma",
    aliases: ["ma", "makara", "manu", "म", "मकारः"],
    varga: "Pa-varga · Praṇava-Śānta (Paramātma-pāda)",
    murtiDeva: "मनुः",
    murtiIast: "manuḥ",
    verse: "TSS_9",
    niruktiDeva: "मनुते सर्वं जानाति मन्त्रात्मा चेति मकारवाच्यो मनुः ।",
    niruktiIast: "manute sarvaṃ jānāti mantrātmā ceti makāravācyo manuḥ |",
    secondary: {
      deva: "तथा मितं सर्ववेदैर्मकारेणाभिधीयते ।",
      iast: "tathā mitaṃ sarvavedair makāreṇābhidhīyate |",
      translation: "By the syllable 'ma' is signified He who is measured/known through all the Vedas ('mita').",
      source: "Chāndogyabhāṣyam 1.1.1"
    },
    short: "The labial nasal 'ma' signifies Bhagavān Manu — the Omniscient Thinker ('manute'), Embodiment of all Mantras, and the One known ('mita') through all Vedas.",
    deep: "As the third letter of Praṇava (A-U-M) and twenty-fifth consonant, 'ma' unites Tantrasārasaṅgraha 1.9 ('Manu' — Omniscient Lord and Mantra-svarūpa) with Chāndogya Bhāṣya 1.1.1 ('mitaṃ sarvavedaiḥ' — truly cognized by all Vedas).",
    pada: [
      { deva: "म-कारः", iast: "ma-kāraḥ", gloss: "the labial nasal 'ma' (third constituent of Oṃ)" },
      { deva: "मनुः", iast: "manuḥ", gloss: "the All-Knowing Seer (`√man`) and Soul of Mantra" },
      { deva: "सर्ववेदैः मितम्", iast: "sarvavedaiḥ mitam", gloss: "proclaimed by all Vedas" }
    ],
    related: ["om", "ishvarajnana", "agama", "ekakshara-ya"]
  },

  // === ANTASTHA & USHMAN (य – क्ष) : Praṇava-Atiśānta (Jñānātma-pāda) ===
  {
    id: "ekakshara-ya",
    deva: "य",
    iast: "ya",
    aliases: ["ya", "yakara", "yajna", "य", "यकारः"],
    varga: "Antastha · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "यज्ञः",
    murtiIast: "yajñaḥ",
    verse: "TSS_9",
    niruktiDeva: "इज्यते सर्वैर्यज्ञैर्यज्ञस्वरूपश्च स्वयं हरिरिति यकारवाच्यो यज्ञः ।",
    niruktiIast: "ijyate sarvair yajñair yajñasvarūpaś ca svayaṃ harir iti yakāravācyo yajñaḥ |",
    short: "The semivowel 'ya' signifies Bhagavān Yajña — the Supreme Worshipful One ('yajño vai viṣṇuḥ') who is both Sacrificer, Offering, and Ultimate Recipient of every rite.",
    deep: "Grounded in Śruti `yajño vai viṣṇuḥ` and Tantrasārasaṅgraha 1.9 (`manur yajño rāmaḥ`), 'ya' teaches that every act of study, charity, breath, and duty becomes sacred Yajña when offered unto Viṣṇu.",
    pada: [
      { deva: "य-कारः", iast: "ya-kāraḥ", gloss: "the palatal semivowel 'ya'" },
      { deva: "यज्ञः", iast: "yajñaḥ", gloss: "Bhagavān Viṣṇu as Worship and Supreme Recipient" },
      { deva: "सर्व-इष्टि-भोक्ता", iast: "sarva-iṣṭi-bhoktā", gloss: "enjoyer of all sacred offerings" }
    ],
    related: ["yajus", "karma", "sharanagati", "ekakshara-ra"]
  },
  {
    id: "ekakshara-ra",
    deva: "र",
    iast: "ra",
    aliases: ["ra", "rakara", "rama", "raama", "र", "रकारः"],
    varga: "Antastha · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "रामः",
    murtiIast: "rāmaḥ",
    verse: "TSS_9",
    niruktiDeva: "रमन्ते योगिनोऽनन्ते नित्यानन्दे चिदात्मनि, रमयति च सर्वान् भक्तानिति रकारवाच्यो रामः ।",
    niruktiIast: "ramante yogino'nante nityānande cidātmani, ramayati ca sarvān bhaktān iti rakāravācyo rāmaḥ |",
    short: "The liquid consonant 'ra' signifies Bhagavān Rāma — Supreme Spiritual Delight in whom liberated yogis rejoice eternally and who gladdens the cosmos.",
    deep: "In Tantrasārasaṅgraha 1.9 and Mahābhāratatātparyanirṇaya, 'ra' is the fire-seed that consumes sin and names Bhagavān Rāma (Mūlarāma, Paraśurāma, and Balarāma) — pure self-delighting Ānanda (`svarato'pi cāgre` — MBTN 1.2).",
    pada: [
      { deva: "र-कारः", iast: "ra-kāraḥ", gloss: "the retroflex/alveolar vibrant 'ra'" },
      { deva: "रामः", iast: "rāmaḥ", gloss: "Supreme Delight in whom sages rejoice (`√ram`)" },
      { deva: "नित्यानन्द-रमणः", iast: "nityānanda-ramaṇaḥ", gloss: "delighting devotees in eternal bliss" }
    ],
    related: ["rama", "sukha", "ekakshara-la"]
  },
  {
    id: "ekakshara-la",
    deva: "ल",
    iast: "la",
    aliases: ["la", "lakara", "lakshmipati", "ल", "लकारः"],
    varga: "Antastha · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "लक्ष्मीपतिः",
    murtiIast: "lakṣmīpatiḥ",
    verse: "TSS_9",
    niruktiDeva: "नित्यमुक्तायाः सर्वजगन्मातुर्लक्ष्म्याः पतिरीश्वर इति लकारवाच्यो लक्ष्मीपतिः ।",
    niruktiIast: "nityamuktāyāḥ sarvajaganmātur lakṣmyāḥ patir īśvara iti lakāravācyo lakṣmīpatiḥ |",
    short: "The dental lateral 'la' signifies Bhagavān Lakṣmīpati — Eternal Consort and Sovereign Lord of Mahālakṣmī, the ever-liberated Mother of the universe.",
    deep: "Tantrasārasaṅgraha opens (`jayaty... kamalāpatiḥ`) and crowns 'la' (TSS 1.9) with Lakṣmīpati: while all other gods are subject to Śrī's command, Viṣṇu alone is Her eternal Beloved and Independent Lord.",
    pada: [
      { deva: "ल-कारः", iast: "la-kāraḥ", gloss: "the dental lateral semivowel 'la'" },
      { deva: "लक्ष्मी-पतिः", iast: "lakṣmī-patiḥ", gloss: "Beloved Consort and Sovereign of Mahālakṣmī" },
      { deva: "रमा-रमणः", iast: "ramā-ramaṇaḥ", gloss: "delighter of Goddess Ramā" }
    ],
    related: ["lakshmi", "narayana", "ekakshara-va", "ekakshara-lla"]
  },
  {
    id: "ekakshara-va",
    deva: "व",
    iast: "va",
    aliases: ["va", "wa", "vakara", "vara", "व", "वकारः"],
    varga: "Antastha · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "वरः",
    murtiIast: "varaḥ",
    verse: "TSS_9",
    niruktiDeva: "वरणीयतमो मुमुक्षुभिः श्रेष्ठत्वाद् वराणां दाता चेति वकारवाच्यो वरः ।",
    niruktiIast: "varaṇīyatamo mumukṣubhiḥ śreṣṭhatvād varāṇāṃ dātā ceti vakāravācyo varaḥ |",
    short: "The labial-dental semivowel 'va' signifies Bhagavān Vara — the Most Choiceworthy Beloved sought by seekers of liberation, and Supreme Granter of boons.",
    deep: "Resonating with Kaṭha / Muṇḍaka Upaniṣad (`yam evaiṣa vṛṇute` — mutual choosing of grace and devotion) and Ṛgbhāṣya 1.1.2 (`pūrṇo bhūtivaro'nantasukhaḥ`), 'va' invokes Vara — the supreme treasure chosen above all worlds.",
    pada: [
      { deva: "व-कारः", iast: "va-kāraḥ", gloss: "the semivowel 'va'" },
      { deva: "वरः", iast: "varaḥ", gloss: "Supremely Choiceworthy (`√vṛ`) and Bestower of boons" },
      { deva: "श्रेष्ठतमः वरदः च", iast: "śreṣṭhatamaḥ varadaḥ ca", gloss: "most excellent and gracious" }
    ],
    related: ["vasudeva", "vishnu", "bhakti", "ekakshara-sha"]
  },
  {
    id: "ekakshara-sha",
    deva: "श",
    iast: "śa",
    aliases: ["sha", "sa", "shakara", "shantasamvit", "श", "शकारः"],
    varga: "Ūṣman · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "शान्तसंवित्",
    murtiIast: "śāntasaṃvit",
    verse: "TSS_10",
    niruktiDeva: "शान्ता नित्यनिर्विकारसुखरूपा संवित् प्रज्ञा स्वरूपं यस्य स शकारवाच्यः शान्तसंवित् ।",
    niruktiIast: "śāntā nityanirvikārasukharūpā saṃvit prajñā svarūpaṃ yasya sa śakāravācyaḥ śāntasaṃvit |",
    secondary: {
      deva: "आसीदुदारगुणवारिधिरप्रमेयो नारायणः परतमः परमात् स एकः । संशान्तसंविदखिलं जठरे निधाय...",
      iast: "āsīd udāraguṇavāridhir aprameyo nārāyaṇaḥ paratamaḥ paramāt sa ekaḥ | saṃśāntasaṃvid akhilaṃ jaṭhare nidhāya...",
      translation: "Before creation abode the unfathomable ocean of noble attributes, Nārāyaṇa alone — serene blissful Consciousness ('saṃśāntasaṃvit'), holding the cosmos within.",
      source: "Mahābhāratatātparyanirṇayaḥ 1.2"
    },
    short: "The palatal sibilant 'śa' signifies Bhagavān Śāntasaṃvit — Serene, Unruffled Omniscient Consciousness brimming with peace and bliss.",
    deep: "Notice how Madhvācārya uses this exact compound in both Tantrasārasaṅgraha 1.10 (`śāntasaṃvit`) and MBTN 1.2 (`saṃśāntasaṃvit`): 'śa' denotes śānti/śam (auspicious peace), revealing God's knowledge as eternally luminous and tranquil.",
    pada: [
      { deva: "श-कारः", iast: "śa-kāraḥ", gloss: "the palatal sibilant 'śa' denoting auspicious peace (śam)" },
      { deva: "शान्त-संवित्", iast: "śānta-saṃvit", gloss: "serene, immutable, blissful Omniscience" },
      { deva: "निरतिशय-सुख-ज्ञान-रूपः", iast: "niratiśaya-sukha-jñāna-rūpaḥ", gloss: "whose essence is unruffled awareness and joy" }
    ],
    related: ["shama", "ishvarajnana", "narayana", "ekakshara-sha-retro"]
  },
  {
    id: "ekakshara-sha-retro",
    deva: "ष",
    iast: "ṣa",
    aliases: ["sha", "shha", "shakara-retro", "shadguna", "ष", "षकारः"],
    varga: "Ūṣman · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "षड्गुणः",
    murtiIast: "ṣaḍguṇaḥ",
    verse: "TSS_10",
    niruktiDeva: "निरवधिकैश्वर्यादिषड्गुणैश्वर्यपरिपूर्णः षकारवाच्यः षड्गुणः ।",
    niruktiIast: "niravadhikaiśvaryādiṣaḍguṇaiśvaryaparipūrṇaḥ ṣakāravācyaḥ ṣaḍguṇaḥ |",
    short: "The retroflex sibilant 'ṣa' signifies Bhagavān Ṣaḍguṇa — the Lord replete with the six boundless attributes (sovereignty, valour, glory, splendour, omniscience, and detachment).",
    deep: "In Tantrasārasaṅgraha 1.10 (`śāntasaṃvit ṣaḍguṇaś ca`), 'ṣa' directly recalls 'ṣaṭ' — the six archetypal divine excellences (`ṣāḍguṇyavigrahaṃ devam` — Pāñcarātra / MBTN 1.24) which encapsulate infinite auspicious guṇas.",
    pada: [
      { deva: "ष-कारः", iast: "ṣa-kāraḥ", gloss: "the retroflex sibilant 'ṣa'" },
      { deva: "षड्-गुणः", iast: "ṣaḍ-guṇaḥ", gloss: "possessor of plenary sixfold divine attributes" },
      { deva: "षाड्गुण्य-विग्रहः", iast: "ṣāḍguṇya-vigrahaḥ", gloss: "whose form is infinite excellence" }
    ],
    related: ["bhagavan", "ekakshara-bha", "guna", "ekakshara-sa"]
  },
  {
    id: "ekakshara-sa",
    deva: "स",
    iast: "sa",
    aliases: ["sa", "sakara", "saratma", "saaratma", "स", "सकारः"],
    varga: "Ūṣman · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "सारात्मा",
    murtiIast: "sārātmā",
    verse: "TSS_10",
    niruktiDeva: "सर्वतत्त्वानां वेदानां च सारभूत आत्मा स्वामीति सकारवाच्यः सारात्मा ।",
    niruktiIast: "sarvatattvānāṃ vedānāṃ ca sārabhūta ātmā svāmīti sakāravācyaḥ sārātmā |",
    short: "The dental sibilant 'sa' signifies Bhagavān Sārātmā — the Quintessential Reality ('sāra') of all tattvas, scriptures, and joys.",
    deep: "In Tantrasārasaṅgraha 1.10 and Yatipraṇavakalpa, 'sa' denotes sat / sāra (pure unsublatable being and essence): Viṣṇu is Sārātmā, the supreme marrow whom Haṃsa-paramahaṃsas extract like cream from milk.",
    pada: [
      { deva: "स-कारः", iast: "sa-kāraḥ", gloss: "the dental sibilant 'sa' (sat / sāra)" },
      { deva: "सार-आत्मा", iast: "sāra-ātmā", gloss: "the Quintessential Self and Sovereign of all" },
      { deva: "सर्व-उत्तम-सारः", iast: "sarva-uttama-sāraḥ", gloss: "the highest essence of reality" }
    ],
    related: ["satya", "atman", "hamsa", "ekakshara-ha"]
  },
  {
    id: "ekakshara-ha",
    deva: "ह",
    iast: "ha",
    aliases: ["ha", "hakara", "hamsa", "ह", "हकारः"],
    varga: "Ūṣman · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "हंसः",
    murtiIast: "haṃsaḥ",
    verse: "TSS_10",
    niruktiDeva: "हन्ति समस्तान् दोषानज्ञानपापानि, सारमात्रभोक्ता परमात्मा चेति हकारवाच्यो हंसः ।",
    niruktiIast: "hanti samastān doṣān ajñānapāpāni, sāramātrabhoktā paramātmā ceti hakāravācyo haṃsaḥ |",
    short: "The aspirate 'ha' signifies Bhagavān Haṃsa — the Immaculate Swan-Lord free of all defects, Destroyer of sins, and primal Teacher of Paramahaṃsa wisdom.",
    deep: "For Madhvācārya's own Paramahaṃsa lineage (beginning directly from Śrī Haṃsa-nāmaka Paramātman → Caturmukha → Sanakādi → Dūrvāsa → Acyutaprekṣa → Ānandatīrtha), 'ha' → Haṃsa holds supreme lineage reverence.",
    pada: [
      { deva: "ह-कारः", iast: "ha-kāraḥ", gloss: "the glottal aspirate 'ha'" },
      { deva: "हंसः", iast: "haṃsaḥ", gloss: "Bhagavān Haṃsa — pure, defectless destroyer of bondage" },
      { deva: "दोष-हन्ता सार-भोक्ता", iast: "doṣa-hantā sāra-bhoktā", gloss: "dispeller of blemish and enjoyer of pure devotion" }
    ],
    related: ["hamsa", "hari", "guru", "ekakshara-lla"]
  },
  {
    id: "ekakshara-lla",
    deva: "ळ",
    iast: "ḷa",
    aliases: ["lla", "la-retro", "zh", "lakara-vedic", "laluka", "ळ", "ळकारः"],
    varga: "Ūṣman/Antastha · Praṇava-Atiśānta (Jñānātma-pāda)",
    murtiDeva: "ळाळुकः",
    murtiIast: "ḷāḷukaḥ",
    verse: "TSS_10",
    niruktiDeva: "ळालयति लालयति स्नेहेन पोषयत्याश्रितान् भक्तानिति वैदिकळकारवाच्यो ळाळुकः ।",
    niruktiIast: "ḷālayati lālayati snehena poṣayaty āśritān bhaktān iti vaidikaḷakāravācyo ḷāḷukaḥ |",
    short: "The Vedic retroflex lateral 'ḷa' signifies Bhagavān Ḷāḷuka — the Tenderly Affectionate Lord who cherishes and nurtures His devotees like a loving parent.",
    deep: "Distinctive to Vedic Sanskrit (`agniṃ īḷe`, `mīḷhuṣaḥ`) and preserved prominently in Karnataka-Udupi Vedic recitation, 'ḷa' crowns the fifty Praṇava-mūrtis of Tantrasārasaṅgraha 1.10 (`haṃsaḷāḷukau`): the Almighty Sovereign is ultimately 'Ḷāḷuka' — overflowing with vātsalya (tender maternal-paternal affection) for His children!",
    pada: [
      { deva: "ळ-कारः", iast: "ḷa-kāraḥ", gloss: "the fiftieth Vedic retroflex lateral 'ḷa'" },
      { deva: "ळाळुकः", iast: "ḷāḷukaḥ", gloss: "overflowing with tender, nurturing affection (`√lal`)" },
      { deva: "भक्त-वत्सलः लालयिता", iast: "bhakta-vatsalaḥ lālayitā", gloss: "cherisher of devoted souls" }
    ],
    related: ["bhakti", "ekakshara-la", "ekakshara-ksha"]
  },
  {
    id: "ekakshara-ksha",
    deva: "क्ष",
    iast: "kṣa",
    aliases: ["ksha", "ksa", "kshakara", "nrisimha", "narasimha", "aksha", "क्ष", "क्षकारः"],
    varga: "Meru-Varṇa · Ekapañcāśad-Mātṛkā Culmination",
    murtiDeva: "नृसिंहः (अक्षः)",
    murtiIast: "nṛsiṃhaḥ (akṣaḥ)",
    verse: null,
    niruktiDeva: "क्षपयति नाशयत्यशेषदुरितमसुराज्ञानं च, न क्षरतीति वा क्षकारवाच्यो भगवान्नृसिंहोऽक्षः ।",
    niruktiIast: "kṣapayati nāśayaty aśeṣaduritam asurājñānaṃ ca, na kṣaratīti vā kṣakāravācyo bhagavān nṛsiṃho'kṣaḥ |",
    secondary: {
      deva: "वर्णा अकारादय एकपञ्चाशत् । प्रत्येकं व्याप्ता अनादिनित्याश्च ।",
      iast: "varṇā akārādaya ekapañcāśat | pratyekaṃ vyāptā anādinityāś ca |",
      translation: "The phonemes beginning with 'a' (down to 'kṣa') are fifty-one; each is all-pervasive and beginninglessly eternal.",
      source: "Padārthasaṅgrahaḥ 2.16 & Tantrasāra Mātṛkā-nyāsa Tradition"
    },
    short: "The fifty-first crowning syllable 'kṣa' (Meru-varṇa, uniting 'ka' + 'ṣa') signifies Bhagavān Lakṣmī-Nṛsiṃha (Akṣa) — the Imperishable Destroyer of all sin, fear, and ignorance.",
    deep: "Completing the fifty-one-syllable (`ekapañcāśad-varṇa`) Mātṛkā mala from 'a' (Aja) to 'kṣa' (`akṣamālā`), 'kṣa' fuses 'ka' (Kapila — supreme bliss) and 'ṣa' (Ṣaḍguṇa — plenary sixfold majesty) into the blazing Ekākṣara bīja of Bhagavān Nṛsiṃha, who annihilates (`kṣapayati`) all bondage.",
    pada: [
      { deva: "क्ष-कारः", iast: "kṣa-kāraḥ", gloss: "the fifty-first crowning Meru-syllable ('ka' + 'ṣa')" },
      { deva: "नृसिंहः / अक्षः", iast: "nṛsiṃhaḥ / akṣaḥ", gloss: "Bhagavān Nṛsiṃha, the Imperishable Protector" },
      { deva: "अशेष-दुरित-क्षपणः", iast: "aśeṣa-durita-kṣapaṇaḥ", gloss: "annihilator of all evil and bondage" }
    ],
    related: ["narasimha", "varna", "akshara", "ekakshara-ka", "ekakshara-sha-retro"]
  }
];

export const ekaksharaMatrikaEntries = RAW_SYLLABLES.map((item, idx) => {
  const isSvara = idx < 16;
  const verseInfo = item.verse ? MATRIKA_VERSES[item.verse] : null;
  const secondaryLakshana = item.secondary
    ? item.secondary
    : verseInfo
      ? {
          deva: verseInfo.deva,
          iast: verseInfo.iast,
          translation: `Canonical Mātṛkā enumeration in Śrī Madhvācārya's Tantrasārasaṅgraha (${verseInfo.locator}), revealing '${item.deva}' → Śrī ${item.murtiIast}.`,
          source: `Tantrasārasaṅgrahaḥ ${verseInfo.locator.replace("TSS ", "")}`
        }
      : undefined;

  return {
    id: item.id,
    deva: `${item.deva} (${item.murtiDeva})`,
    iast: `${item.iast} (${item.murtiIast})`,
    stem: item.iast,
    phoneticAliases: [
      ...item.aliases,
      item.murtiIast.replace(/[ḥṃ]/g, ""),
      `ekakshara ${item.iast}`,
      "matrika",
      "ekakshara"
    ],
    pillar: "ekakshara",
    domain: isSvara ? "Svara Ekākṣara (अ–अः)" : "Vyañjana Ekākṣara (क–क्ष)",
    lakshanaDeva: item.niruktiDeva,
    lakshanaIast: item.niruktiIast,
    ...(secondaryLakshana ? { secondaryLakshana } : {}),
    meaningShort: item.short,
    meaningDeep: `[Varṇa #${idx + 1} · ${item.varga}] ${item.deep}`,
    padaccheda: item.pada,
    source: {
      grantha: verseInfo
        ? "Tantrasārasaṅgrahaḥ (Mātṛkā-Mūrti Prakaraṇam)"
        : "Padārthasaṅgrahaḥ & Tantrasāra Mātṛkā Sampradāya",
      granthaDeva: verseInfo ? "तन्त्रसारसङ्ग्रहः" : "पदार्थसङ्ग्रहः / तन्त्रसारसङ्ग्रहः",
      author: "Śrī Madhvācārya",
      locator: verseInfo ? `${verseInfo.locator}; TSS 1.5, 1.10` : "PS 2.16; TSS 1.5–10"
    },
    related: item.related
  };
});
