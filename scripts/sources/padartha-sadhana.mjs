// Pillar 1C: Padartha (Categories, Substances & Qualities), Cosmology & Sadhana-Mukti Lakshanas
// Grounded in Sri Madhvacharya's Bhagavadgitabhashya, Mahabharatatatparyanirnaya, Tattvasankhyanam,
// Brahmasutrabhashya, and Sri Padmanabha Suri's Padarthasangraha.

export const padarthaSadhanaEntries = [
  {
    id: "padartha",
    deva: "पदार्थः",
    iast: "padārthaḥ",
    stem: "padārtha",
    phoneticAliases: ["padartha", "padaartha", "padarthah", "category", "prameya"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "द्रव्यगुणकर्मसामान्यविशेषविशिष्टांशिशक्तिसादृश्याभावा दश पदार्थाः ।",
    lakshanaIast: "dravyaguṇakarmasāmānyaviśeṣaviśiṣṭāṃśiśaktisādṛśyābhāvā daśa padārthāḥ |",
    secondaryLakshana: {
      deva: "पदेन प्रतिपाद्योऽर्थः पदार्थः प्रमितेर्विषयश्च ।",
      iast: "padena pratipādyo'rthaḥ padārthaḥ pramiter viṣayaś ca |",
      translation: "That which is signified by a word and stands as an object of valid cognition is a Padārtha.",
      source: "Tattvavāda Nyāya Tradition"
    },
    meaningShort: "The ten fundamental categories of reality: substance, quality, action, universal, Viśeṣa, qualified whole, whole-of-parts, potency, similarity, and negation.",
    meaningDeep: "Where Nyāya-Vaiśeṣika admits seven categories including Samavāya (inherence), Dvaita Vedānta rejects Samavāya and establishes ten categories (daśa-padārthāḥ): Dravya, Guṇa, Karma, Sāmānya, Viśeṣa, Viśiṣṭa, Aṃśī, Śakti, Sādṛśya, and Abhāva.",
    padaccheda: [
      { deva: "द्रव्य-गुण-कर्म-सामान्य", iast: "dravya-guṇa-karma-sāmānya", gloss: "substance, quality, action, and universal" },
      { deva: "विशेष-विशिष्ट-अंशि", iast: "viśeṣa-viśiṣṭa-aṃśi", gloss: "intrinsic differentiator, qualified entity, and whole-of-parts" },
      { deva: "शक्ति-सादृश्य-अभावाः", iast: "śakti-sādṛśya-abhāvāḥ", gloss: "potency, similarity, and negation" },
      { deva: "दश पदार्थाः", iast: "daśa padārthāḥ", gloss: "are the ten categories of reality" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 1.0"
    },
    related: ["dravya", "guna", "karma", "samanya", "vishesha", "vishishta", "amshi", "shakti", "sadrishya", "abhava"]
  },
  {
    id: "dravya",
    deva: "द्रव्यम्",
    iast: "dravyam",
    stem: "dravya",
    phoneticAliases: ["dravya", "dravyam", "upadana", "substance"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "उपादानकारणत्वं द्रव्यत्वम् । द्रवणप्राप्यत्वं वा द्रव्यसामान्यलक्षणम् ।",
    lakshanaIast: "upādānakāraṇatvaṃ dravyatvam | dravaṇaprāpyatvaṃ vā dravyasāmānyalakṣaṇam |",
    meaningShort: "Being a material or substrative cause — either through real transformation (pariṇāma) or manifestation (abhivyakti) — is the defining nature of Substance (Dravya).",
    meaningDeep: "Tattvavāda enumerates exactly twenty substances (viṃśati-dravyāṇi): Paramātman, Lakṣmī, Jīva, Avyākṛtākāśa, Prakṛti, Guṇatraya, Mahat, Ahaṅkāra, Buddhi, Manas, Indriya, Tanmātra, Bhūta, Brahmāṇḍa, Avidyā, Varṇa, Andhakāra, Vāsanā, Kāla, and Pratibimba. Unchanging substances act as substrata of manifestation (abhivyakti), while mutable matter undergoes real pariṇāma.",
    padaccheda: [
      { deva: "उपादान-कारणत्वम्", iast: "upādāna-kāraṇatvam", gloss: "being the material or substrative cause" },
      { deva: "द्रव्यत्वम्", iast: "dravyatvam", gloss: "is the defining essence of substance" },
      { deva: "द्रवण-प्राप्यत्वम्", iast: "dravaṇa-prāpyatvam", gloss: "or being reachable by motion / cognitive approach" },
      { deva: "वा", iast: "vā", gloss: "alternatively" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.0"
    },
    related: ["padartha", "guna", "prakriti", "vikara", "paramatman", "jeeva"]
  },
  {
    id: "guna",
    deva: "गुणः",
    iast: "guṇaḥ",
    stem: "guṇa",
    phoneticAliases: ["guna", "gunah", "gunatvam", "attribute", "quality"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "दोषभिन्नत्वं गुणत्वम् । धर्ममात्रं वा गुणः ।",
    lakshanaIast: "doṣabhinnatvaṃ guṇatvam | dharmamātraṃ vā guṇaḥ |",
    meaningShort: "In axiological usage, being distinct from defect is auspicious excellence (Guṇa); in categorical ontology, Guṇa denotes non-active dependent attribute.",
    meaningDeep: "Dvaita distinguishes cosmic-metaphysical Guṇas (such as rūpa, rasa, jñāna, sukha, śama, dama, bala, saundarya) into eternal (svarūpa-bhūta in Bhagavān, Lakṣmī, and innate Jīva-nature) and non-eternal (produced in mundane matter and mind). In Bhagavān, every auspicious Guṇa is identical with His Svarūpa through Viśeṣa.",
    padaccheda: [
      { deva: "दोष-भिन्नत्वम्", iast: "doṣa-bhinnatvam", gloss: "being distinct from blemish or defect" },
      { deva: "गुणत्वम्", iast: "guṇatvam", gloss: "is the nature of auspicious quality (guṇa)" },
      { deva: "धर्म-मात्रम्", iast: "dharma-mātram", gloss: "any dependent attribute" },
      { deva: "वा", iast: "vā", gloss: "or (in categorical usage)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.0"
    },
    related: ["padartha", "dravya", "vishesha", "sukha", "shama"]
  },
  {
    id: "karma",
    deva: "कर्म",
    iast: "karma",
    stem: "karma",
    phoneticAliases: ["karma", "karman", "action", "vihita", "parispanda"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "विहितनिषिद्धोदासीनभेदेन त्रिविधं कर्म । उदासीनं कर्म तु परिस्पन्दः ।",
    lakshanaIast: "vihitaniṣiddhodāsīnabhedena trividhaṃ karma | udāsīnaṃ karma tu parispandaḥ |",
    meaningShort: "Action (Karma) is threefold: scripturally enjoined (vihita), prohibited (niṣiddha), and morally neutral motion (udāsīna / parispanda).",
    meaningDeep: "Unlike Vaiśeṣika, which restricts Karma to physical motion (utkṣepaṇa etc.) and treats moral desert solely as a quality (adṛṣṭa), Dvaita unifies moral action and physical motion under Karma, dividing it into eternal intrinsic dynamism (in Bhagavān, Lakṣmī, and sentient beings) and transient activity.",
    padaccheda: [
      { deva: "विहित-निषिद्ध-उदासीन", iast: "vihita-niṣiddha-udāsīna", gloss: "enjoined, forbidden, and neutral" },
      { deva: "भेदेन", iast: "bhedena", gloss: "by division into" },
      { deva: "त्रिविधम् कर्म", iast: "trividham karma", gloss: "action is threefold" },
      { deva: "परिस्पन्दः", iast: "parispandaḥ", gloss: "physical movement or vibration" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 1.3"
    },
    related: ["padartha", "dharma", "adharma", "prarabdha", "jeeva"]
  },
  {
    id: "samanya",
    deva: "सामान्यम्",
    iast: "sāmānyam",
    stem: "sāmānya",
    phoneticAliases: ["samanya", "saamaanya", "samanyam", "universal"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "नित्यमनित्यं चेति सामान्यं द्विविधम् । प्रतिव्यक्त्यननुगतं जातिरुपाधिश्चेति ।",
    lakshanaIast: "nityam anityaṃ ceti sāmānyaṃ dvividham | prativyakty ananugataṃ jātir upādhiś ceti |",
    meaningShort: "Class-character (Sāmānya) is twofold — eternal (like jīvatva) and non-eternal (like manuṣyatva) — and is individuated in each particular rather than one monolithic entity.",
    meaningDeep: "Madhvācārya rejects the Nyāya doctrine of a single indivisible universal (eka-nitya-samaveta-jāti) residing identically across all cows or pots. Instead, each individual possesses its own distinct yet similar class-nature (prativyakti-bhinnam), while mutual resemblance (sādṛśya) grounds unified linguistic usage.",
    padaccheda: [
      { deva: "नित्यम् अनित्यम् च", iast: "nityam anityam ca", gloss: "eternal and non-eternal" },
      { deva: "सामान्यम् द्विविधम्", iast: "sāmānyam dvividham", gloss: "general property is twofold" },
      { deva: "प्रतिव्यक्ति-अननुगतम्", iast: "prativyakti-ananugatam", gloss: "distinct in each individual, not numerically one across all" },
      { deva: "जातिः उपाधिः च", iast: "jātiḥ upādhiḥ ca", gloss: "comprising co-eval essence (jāti) and adventitious property (upādhi)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 1.4"
    },
    related: ["padartha", "sadrishya", "bheda", "samavaya-nirasa"]
  },
  {
    id: "avyakritakasha",
    deva: "अव्याकृताकाशम्",
    iast: "avyākṛtākāśam",
    stem: "avyākṛtākāśa",
    phoneticAliases: ["avyakritakasha", "avyakrita", "akasha", "dik", "space"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "सृष्टिप्रलययोर्विकारशून्या दिगव्याकृताकाशम् ।",
    lakshanaIast: "sṛṣṭipralayayor vikāraśūnyā dig avyākṛtākāśam |",
    meaningShort: "Unmanifest Space (Avyākṛtākāśa) is pure spatial dimensionality (dik) wholly untouched by modification during cosmic creation and dissolution.",
    meaningDeep: "Tattvavāda distinguishes two kinds of Ākāśa: (1) Avyākṛtākāśa, eternal, uncreated room-giving space known directly by the Sākṣī (without which the universe would collapse into a dense point), and (2) Bhūtākāśa, the physical ether-element evolved from tāmasa-ahaṅkāra that bears sound.",
    padaccheda: [
      { deva: "सृष्टि-प्रलययोः", iast: "sṛṣṭi-pralayayoḥ", gloss: "throughout cosmic creation and dissolution" },
      { deva: "विकार-शून्या", iast: "vikāra-śūnyā", gloss: "devoid of transformation" },
      { deva: "दिक्", iast: "dik", gloss: "pure directional expanse / spatiality" },
      { deva: "अव्याकृत-आकाशम्", iast: "avyākṛta-ākāśam", gloss: "is Unmanifest Space" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri / Śrī Jayatīrtha",
      locator: "PS 2.4; TSK 8"
    },
    related: ["nitya", "sakshi", "pancabhuta", "kala"]
  },
  {
    id: "prakriti",
    deva: "प्रकृतिः",
    iast: "prakṛtiḥ",
    stem: "prakṛti",
    phoneticAliases: ["prakriti", "prakruti", "mulaprakriti", "pradhana", "jada"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "साक्षात्परम्परया वा विश्वोपादानं प्रकृतिः ।",
    lakshanaIast: "sākṣāt paramparayā vā viśvopādānaṃ prakṛtiḥ |",
    meaningShort: "Primordial Matter (Mūlaprakṛti) is the insentient material cause of the physical universe, either directly or through successive evolutes.",
    meaningDeep: "Prakṛti is eternal-cum-non-eternal (nityānitya), insentient (jaḍa), all-pervasive, and presided over by Goddess Ramā (Cit-prakṛti). Unlike Sāṅkhya's autonomous Prakṛti, Dvaita's Prakṛti cannot stir or evolve without the direct impulsion and indwelling presence of Bhagavān Viṣṇu.",
    padaccheda: [
      { deva: "साक्षात्", iast: "sākṣāt", gloss: "directly / immediately" },
      { deva: "परम्परया वा", iast: "paramparayā vā", gloss: "or mediately through evolutionary stages" },
      { deva: "विश्व-उपादानम्", iast: "viśva-upādānam", gloss: "the material cause of the physical cosmos" },
      { deva: "प्रकृतिः", iast: "prakṛtiḥ", gloss: "is Primordial Prakṛti" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.5"
    },
    related: ["acetana", "nityanitya", "gunatraya", "mahattattva", "lakshmi"]
  },
  {
    id: "gunatraya",
    deva: "गुणत्रयम्",
    iast: "guṇatrayam",
    stem: "guṇatraya",
    phoneticAliases: ["gunatraya", "triguna", "sattva", "rajas", "tamas"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "सत्त्वरजस्तमोनामकानां गुणानां समुदायो गुणत्रयम् । सृष्टिकाले मूलप्रकृतेः सकाशात् परमात्मना त्रेधा भिन्नम् ।",
    lakshanaIast: "sattvarajastamonāmakānāṃ guṇānāṃ samudāyo guṇatrayam | sṛṣṭikāle mūlaprakṛteḥ sakāśāt paramātmanā tredhā bhinnam |",
    meaningShort: "Guṇatraya is the triad of constituent strands — Sattva, Rajas, and Tamas — differentiated threefold from Mūlaprakṛti by Paramātman at creation.",
    meaningDeep: "In Tattvavāda cosmology, Sattva, Rajas, and Tamas are substantial strands (dravyāṇi), not mere qualities: Rajas drives creation, Sattva sustains and illuminates, and Tamas dissolves and obscures. Śrī, Bhū, and Durgā (three forms of Lakṣmī) preside over them.",
    padaccheda: [
      { deva: "सत्त्व-रजः-तमः-नामकानाम्", iast: "sattva-rajaḥ-tamaḥ-nāmakānām", gloss: "named Sattva, Rajas, and Tamas" },
      { deva: "गुणानाम् समुदायः", iast: "guṇānām samudāyaḥ", gloss: "the triad of constituent strands" },
      { deva: "मूलप्रकृतेः सकाशात्", iast: "mūlaprakṛteḥ sakāśāt", gloss: "from primordial Prakṛti" },
      { deva: "त्रेधा भिन्नम्", iast: "tredhā bhinnam", gloss: "differentiated threefold by the Supreme Lord" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.6"
    },
    related: ["prakriti", "mahattattva", "srishti", "lakshmi"]
  },
  {
    id: "mahattattva",
    deva: "महत्तत्त्वम्",
    iast: "mahattattvam",
    stem: "mahattattva",
    phoneticAliases: ["mahat", "mahattattva", "mahattatvam"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "साक्षाद्गुणत्रयोपादानकं महत्तत्त्वम् ।",
    lakshanaIast: "sākṣād guṇatrayopādānakaṃ mahattattvam |",
    meaningShort: "Mahat-tattva is the first cosmic evolute having the triad of Guṇas directly as its material cause.",
    meaningDeep: "Presided over pre-eminently by Caturmukha Brahmā and Mukhyaprāṇa Vāyu (with Sarasvatī and Bhāratī), Mahat-tattva is the cosmic principle of intelligence-matter from which Ahaṅkāra and Buddhi-tattva evolve.",
    padaccheda: [
      { deva: "साक्षात्", iast: "sākṣāt", gloss: "immediately / directly" },
      { deva: "गुणत्रय-उपादानकम्", iast: "guṇatraya-upādānakam", gloss: "having the three Guṇas as its material cause" },
      { deva: "महत्-तत्त्वम्", iast: "mahat-tattvam", gloss: "is the cosmic principle Mahat" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.7"
    },
    related: ["prakriti", "gunatraya", "ahankara", "riju"]
  },
  {
    id: "ahankara",
    deva: "अहङ्कारतत्त्वम्",
    iast: "ahaṅkāratattvam",
    stem: "ahaṅkāra",
    phoneticAliases: ["ahankara", "ahamkara", "vaikarika", "taijasa", "tamasa"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "महत्तत्त्वोपादानकमहङ्कारतत्त्वम् । वैकारिकतैजसतामसभेदेन त्रिविधम् ।",
    lakshanaIast: "mahattattvopādānakam ahaṅkāratattvam | vaikārikataijasatāmasabhedena trividham |",
    meaningShort: "Ahaṅkāra-tattva is the cosmic Principle of Individuation evolved from Mahat, divided threefold into Vaikārika, Taijasa, and Tāmasa.",
    meaningDeep: "From Vaikārika (sāttvika) Ahaṅkāra arises the cosmic Manas; from Taijasa (rājasa) arise the ten Indriyas; and from Tāmasa arise the five subtle Tanmātras and through them the five gross elements. Garuḍa, Śeṣa, and Rudra are its chief presiding deities.",
    padaccheda: [
      { deva: "महत्तत्त्व-उपादानकम्", iast: "mahattattva-upādānakam", gloss: "having Mahat-tattva as material cause" },
      { deva: "अहङ्कार-तत्त्वम्", iast: "ahaṅkāra-tattvam", gloss: "is Ahaṅkāra-tattva" },
      { deva: "वैकारिक-तैजस-तामस-भेदेन", iast: "vaikārika-taijasa-tāmasa-bhedena", gloss: "by division into luminous, dynamic, and dense" },
      { deva: "त्रिविधम्", iast: "trividham", gloss: "threefold" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.8"
    },
    related: ["mahattattva", "manas", "indriya", "tanmatra"]
  },
  {
    id: "manas",
    deva: "मनः",
    iast: "manaḥ",
    stem: "manas",
    phoneticAliases: ["manas", "manah", "antahkarana", "mind"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "वैकारिकाहङ्कारोपादानकं मनस्तत्त्वम् । तत्त्वभिन्नं मन इन्द्रियं नित्यमनित्यं चेति द्विविधम् ।",
    lakshanaIast: "vaikārikāhaṅkāropādānakaṃ manastattvam | tattvabhinnaṃ mana indriyaṃ nityam anityaṃ ceti dvividham |",
    meaningShort: "Manas (Mind) is both the cosmic principle evolved from Vaikārika Ahaṅkāra and the internal cognitive organ — eternal as Svarūpa-manas, transient as the fivefold prākṛta mind.",
    meaningDeep: "In transmigrating beings, the external prākṛta internal organ functions in five modes — manas (deliberation), buddhi (decision), ahaṅkāra (egoity), citta (recollection), and cetanā — and serves as the instrument of memory (smṛti) and meditation (dhyāna).",
    padaccheda: [
      { deva: "वैकारिक-अहङ्कार-उपादानकम्", iast: "vaikārika-ahaṅkāra-upādānakam", gloss: "having Vaikārika Ahaṅkāra as its material cause" },
      { deva: "मनः-तत्त्वम्", iast: "manaḥ-tattvam", gloss: "is the cosmic Mind-principle" },
      { deva: "इन्द्रियम्", iast: "indriyam", gloss: "the internal faculty of cognition" },
      { deva: "नित्यम् अनित्यम् च", iast: "nityam anityam ca", gloss: "both eternal (intrinsic) and non-eternal (material)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.10"
    },
    related: ["sakshi", "indriya", "smriti", "dhyana", "vasana"]
  },
  {
    id: "indriya",
    deva: "इन्द्रियम्",
    iast: "indriyam",
    stem: "indriya",
    phoneticAliases: ["indriya", "indriyam", "jnanendriya", "karmendriya", "senses"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "प्रमातृस्वरूपं प्राकृतं चेति द्विविधमिन्द्रियम् । ज्ञानेन्द्रियाणि पञ्च कर्मेन्द्रियाणि पञ्च मनश्चेति ।",
    lakshanaIast: "pramātṛsvarūpaṃ prākṛtaṃ ceti dvividham indriyam | jñānendriyāṇi pañca karmendriyāṇi pañca manaś ceti |",
    meaningShort: "Indriya (faculty) is twofold: the eternal intrinsic Sākṣī-faculty identical with the knower's essence, and the material tenfold cognitive/motor organs evolved from Taijasa Ahaṅkāra.",
    meaningDeep: "By distinguishing Svarūpendriya (Sākṣī) from Prākṛtendriya, Jayatīrtha explains how liberated souls perceive bliss and cosmos without material bodies, and how embodied souls directly intuit self, time, mind, bliss, and pain even when outer senses are shut.",
    padaccheda: [
      { deva: "प्रमातृ-स्वरूपम्", iast: "pramātṛ-svarūpam", gloss: "identical with the knower's own essence (Sākṣī)" },
      { deva: "प्राकृतम् च", iast: "prākṛtam ca", gloss: "and born of material Prakṛti" },
      { deva: "ज्ञानेन्द्रियाणि पञ्च", iast: "jñānendriyāṇi pañca", gloss: "five faculties of sense-perception" },
      { deva: "कर्मेन्द्रियाणि पञ्च", iast: "karmendriyāṇi pañca", gloss: "five faculties of motor action" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "प्रमाणपद्धतिः / पदार्थसङ्ग्रहः",
      author: "Śrī Jayatīrtha / Śrī Padmanābha Sūri",
      locator: "PP 1.34; PS 2.11"
    },
    related: ["sakshi", "pratyaksha", "manas", "ahankara"]
  },
  {
    id: "tanmatra",
    deva: "तन्मात्रा",
    iast: "tanmātrā",
    stem: "tanmātra",
    phoneticAliases: ["tanmatra", "tanmaatra", "pancatanmatra", "subtle elements"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "मीयन्त इति मात्राः शब्दस्पर्शरूपरसगन्धाः । तामसाहङ्कारजन्याः पञ्चतन्मात्रा इत्युच्यन्ते ।",
    lakshanaIast: "mīyanta iti mātrāḥ śabdasparśarūparasagandhāḥ | tāmasāhaṅkārajanyāḥ pañcatanmātrā ity ucyante |",
    meaningShort: "Because objects are measured/cognized through them, sound, touch, form, taste, and scent are 'mātrās'; their subtle substantial essences born of Tāmasa Ahaṅkāra are the five Tanmātras.",
    meaningDeep: "Dvaita carefully separates Tanmātras as cosmic subtle substances (tattva-rūpāḥ dravyāṇi) that serve as material causes of the five gross elements from ordinary sensible qualities (tattva-bhinnāḥ guṇāḥ) residing in objects.",
    padaccheda: [
      { deva: "मीयन्ते इति मात्राः", iast: "mīyante iti mātrāḥ", gloss: "called mātrās because objects are cognized through them" },
      { deva: "शब्द-स्पर्श-रूप-रस-गन्धाः", iast: "śabda-sparśa-rūpa-rasa-gandhāḥ", gloss: "sound, touch, form, taste, and odour" },
      { deva: "तामस-अहङ्कार-जन्याः", iast: "tāmasa-ahaṅkāra-janyāḥ", gloss: "born of Tāmasa Ahaṅkāra" },
      { deva: "पञ्च-तन्मात्राः", iast: "pañca-tanmātrāḥ", gloss: "the five subtle essences" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.12"
    },
    related: ["ahankara", "pancabhuta", "guna"]
  },
  {
    id: "pancabhuta",
    deva: "पञ्चभूतानि",
    iast: "pañcabhūtāni",
    stem: "pañcabhūta",
    phoneticAliases: ["pancabhuta", "panchabhuta", "bhuta", "mahabhuta", "elements"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "तन्मात्राद्वारा तामसाहङ्कारजन्यानि पञ्चभूतानि आकाशवायुतेजोऽप्पृथिव्यः ।",
    lakshanaIast: "tanmātrādvārā tāmasāhaṅkārajanyāni pañcabhūtāni ākāśavāyutejo'ppṛthivyaḥ |",
    meaningShort: "The five great elements — ether, air, fire, water, and earth — evolved from Tāmasa Ahaṅkāra through the mediation of the five Tanmātras.",
    meaningDeep: "Following the Bhāgavata principle of cumulative qualities (uttara-uttara-guṇānuvṛtti), ether bears sound; air bears sound and touch; fire adds form; water adds taste; and earth possesses all five qualities.",
    padaccheda: [
      { deva: "तन्मात्रा-द्वारा", iast: "tanmātrā-dvārā", gloss: "through the five subtle Tanmātras" },
      { deva: "तामस-अहङ्कार-जन्यानि", iast: "tāmasa-ahaṅkāra-janyāni", gloss: "originated from Tāmasa Ahaṅkāra" },
      { deva: "पञ्च-भूतानि", iast: "pañca-bhūtāni", gloss: "the five elements" },
      { deva: "आकाश-वायु-तेजः-अप्-पृथिव्यः", iast: "ākāśa-vāyu-tejaḥ-ap-pṛthivyaḥ", gloss: "ether, air, fire, water, and earth" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.13"
    },
    related: ["tanmatra", "avyakritakasha", "brahmanda"]
  },
  {
    id: "avidya",
    deva: "अविद्या",
    iast: "avidyā",
    stem: "avidyā",
    phoneticAliases: ["avidya", "avidyaa", "ajnana", "jivaacchadika", "paramaacchadika"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "जीवाच्छादिका परमाच्छादिका चेति सकारात्मकं द्रव्यमविद्या । सर्वाऽप्यविद्या जीवाश्रिता प्रातिस्विकी च ।",
    lakshanaIast: "jīvācchādikā paramācchādikā ceti sakārātmakaṃ dravyam avidyā | sarvā'py avidyā jīvāśritā prātisvikī ca |",
    meaningShort: "Avidyā (spiritual ignorance) is a real, positive subtle substance resting uniquely on each bound Jīva, veiling both the Jīva's own innate bliss (jīvācchādikā) and the Supreme Lord (paramācchādikā).",
    meaningDeep: "In radical contrast to Advaita's single cosmic anirvacanīya Avidyā resting on Brahman, Madhvācārya holds that Avidyā is genuinely real (satya), strictly individual to each Jīva (prātisvikī), never touches Brahman, is sustained by the Lord's Māyā-will, and is destroyed only by His grace upon Aparokṣa-jñāna.",
    padaccheda: [
      { deva: "जीव-आच्छादिका", iast: "jīva-ācchādikā", gloss: "veiling the Jīva's own innate light and bliss" },
      { deva: "परम-आच्छादिका", iast: "parama-ācchādikā", gloss: "veiling the vision of the Supreme Lord from the Jīva" },
      { deva: "जीव-आश्रिता", iast: "jīva-āśritā", gloss: "having the individual Jīva alone as its locus" },
      { deva: "प्रातिस्विकी", iast: "prātisvikī", gloss: "distinct and individual for each soul" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvodyotaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वोद्योतः",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 2.15"
    },
    related: ["jeeva", "bandha", "aparokshajnana", "moksha", "mithya"]
  },
  {
    id: "varna",
    deva: "वर्णः",
    iast: "varṇaḥ",
    stem: "varṇa",
    phoneticAliases: ["varna", "varnah", "akshara", "alphabet", "phoneme"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "वर्णा अकारादय एकपञ्चाशत् प्रत्येकं व्याप्ता अनादिनित्याश्च । उच्चारणध्वनिव्यङ्ग्याः ।",
    lakshanaIast: "varṇā akārādaya ekapañcāśat pratyekaṃ vyāptā anādinityāś ca | uccāraṇadhvanivyaṅgyāḥ |",
    meaningShort: "The fifty-one Sanskrit phonemes (Varṇas) beginning with 'a' are each all-pervasive, beginninglessly eternal substances, manifested — not created — by vocalized sound (dhvani).",
    meaningDeep: "Dvaita rejects both the Nyāya view that letters are transient qualities of ether (śabda-anitya-vāda) and the Vaiyākaraṇa sphoṭa entity over and above letters. Every phoneme is kūṭastha-nitya; this eternal ontology of Varṇas grounds both the unauthored eternity of the Veda and the sacred Mātṛkā-vidyā.",
    padaccheda: [
      { deva: "वर्णाः अकारादयः एकपञ्चाशत्", iast: "varṇāḥ akārādayaḥ ekapañcāśat", gloss: "the fifty-one letters beginning with 'a'" },
      { deva: "प्रत्येकम् व्याप्ताः", iast: "pratyekam vyāptāḥ", gloss: "each individually all-pervasive" },
      { deva: "अनादि-नित्याः", iast: "anādi-nityāḥ", gloss: "beginningless and immutable" },
      { deva: "उच्चारण-ध्वनि-व्यङ्ग्याः", iast: "uccāraṇa-dhvani-vyaṅgyāḥ", gloss: "manifested by audible utterance" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "प्रमाणपद्धतिः / पदार्थसङ्ग्रहः",
      author: "Śrī Jayatīrtha / Śrī Padmanābha Sūri",
      locator: "PP 3.7; PS 2.16"
    },
    related: ["nitya", "apaurusheya", "agama", "ekakshara-a", "om"]
  },
  {
    id: "andhakara",
    deva: "अन्धकारः",
    iast: "andhakāraḥ",
    stem: "andhakāra",
    phoneticAliases: ["andhakara", "tamah", "darkness"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "प्रकाशनिवार्योऽन्धकारः । न तु तेजोऽभावः स्वातन्त्र्येणोपलभ्यमानत्वात् ।",
    lakshanaIast: "prakāśanivāryo'ndhakāraḥ | na tu tejo'bhāvaḥ svātantryeṇopalabhyamānatvāt |",
    meaningShort: "Darkness (Andhakāra) is a positive substance dispelled by light — not the mere absence of light, because it is perceived positively in its own right.",
    meaningDeep: "Against Nyāya's claim that darkness is merely tejo'bhāva (absence of light), Dvaita proves Andhakāra is a distinct blue-black positive substance (dravya) because perceiving an absence requires prior remembrance of the counterpositive, whereas darkness is directly perceived as concealing things and bearing colour.",
    padaccheda: [
      { deva: "प्रकाश-निवार्यः", iast: "prakāśa-nivāryaḥ", gloss: "that which is driven away by light" },
      { deva: "अन्धकारः", iast: "andhakāraḥ", gloss: "is Darkness" },
      { deva: "न तु तेजः-अभावः", iast: "na tu tejaḥ-abhāvaḥ", gloss: "and not merely the absence of light" },
      { deva: "स्वातन्त्र्येण उपलभ्यमानत्वात्", iast: "svātantryeṇa upalabhyamānatvāt", gloss: "because it is cognized independently without counterpositive reference" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 2.17"
    },
    related: ["dravya", "abhava", "pratyaksha"]
  },
  {
    id: "vasana",
    deva: "वासना",
    iast: "vāsanā",
    stem: "vāsanā",
    phoneticAliases: ["vasana", "vaasana", "samskara", "svapna", "dream"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "स्वाप्नपदार्थोपादानानि वासनाः । पूर्वानुभवजन्या मनोगताः प्रवाहतोऽनादयः ।",
    lakshanaIast: "svāpnapadārthopādānāni vāsanāḥ | pūrvānubhavajanyā manogatāḥ pravāhato'nādayaḥ |",
    meaningShort: "Vāsanās (latent mental impressions) are subtle substances lodged in the mind, born of prior experiences, serving as the real material cause of dream objects.",
    meaningDeep: "In Madhvācārya's realist dream theory, dreams are not illusory non-entities: the indwelling Lord creates genuine, transient dream-chariots and dream-worlds out of the beginningless stream of subtle vāsanā-matter stored in the Jīva's mind (`vāsanāmātram` — BSB 3.2.3). What is false in a dream is only the dreamer's mistaking the internal vāsanā-object for an external waking object.",
    padaccheda: [
      { deva: "स्वाप्न-पदार्थ-उपादानानि", iast: "svāpna-padārtha-upādānāni", gloss: "the material causes of objects seen in dreams" },
      { deva: "वासनाः", iast: "vāsanāḥ", gloss: "are latent impressions (vāsanās)" },
      { deva: "पूर्व-अनुभव-जन्याः", iast: "pūrva-anubhava-janyāḥ", gloss: "generated by previous experiences" },
      { deva: "मनः-गताः", iast: "manaḥ-gatāḥ", gloss: "residing in the mind" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 2.18; BSB 3.2.3"
    },
    related: ["manas", "svapna", "satya", "smriti"]
  },
  {
    id: "kala",
    deva: "कालः",
    iast: "kālaḥ",
    stem: "kāla",
    phoneticAliases: ["kala", "kaala", "time", "kalah", "pravaha"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "आयुर्व्यवस्थापकः कालः । प्रकृत्योत्पत्तिविनाशवान् कालप्रवाहस्तु नित्यः ।",
    lakshanaIast: "āyurvyavasthāpakaḥ kālaḥ | prakṛtyotpattivināśavān kālapravāhas tu nityaḥ |",
    meaningShort: "Time (Kāla) is the regulator of lifespans and universal succession; its individual moments arise and perish from subtle Prakṛti, while its stream (pravāha) is eternal.",
    meaningDeep: "How do we know Time even in deep sleep ('sukham aham asvāpsam — I slept happily for so long')? Madhvācārya answers: Time is intuited directly by the Sākṣī, and its unbroken stream of moments (kṣaṇa, lava) ensures there is never a timeless void before creation or during pralaya.",
    padaccheda: [
      { deva: "आयुः-व्यवस्थापकः", iast: "āyuḥ-vyavasthāpakaḥ", gloss: "regulator of duration and lifespans" },
      { deva: "कालः", iast: "kālaḥ", gloss: "is Time" },
      { deva: "प्रकृत्या उत्पत्ति-विनाशवान्", iast: "prakṛtyā utpatti-vināśavān", gloss: "whose discrete moments arise and pass from subtle Prakṛti" },
      { deva: "काल-प्रवाहः तु नित्यः", iast: "kāla-pravāhaḥ tu nityaḥ", gloss: "while the continuum of Time is eternal" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वसङ्ख्यानटीका",
      author: "Śrī Padmanābha Sūri / Śrī Jayatīrtha",
      locator: "PS 2.19; TSK 8"
    },
    related: ["nityanitya", "sakshi", "avyakritakasha", "srishti"]
  },
  {
    id: "sukha",
    deva: "सुखम्",
    iast: "sukham",
    stem: "sukha",
    phoneticAliases: ["sukha", "sukham", "ananda", "svanukulataya", "bliss", "happiness"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "स्वानुकूलतया वेदनीयं सुखम् ।",
    lakshanaIast: "svānukūlatayā vedanīyaṃ sukham |",
    meaningShort: "Joy or Bliss (Sukha) is that which is intrinsically experienced as congenial and favourable to oneself.",
    meaningDeep: "Dvaita divides Sukha into (1) eternal Svarūpa-sukha — infinite and independent in Viṣṇu and Lakṣmī, finite and graded in Muktiyogya Jīvas, manifest in Mokṣa — and (2) transient mental sukha experienced in worldly life.",
    padaccheda: [
      { deva: "स्व-अनुकूलतया", iast: "sva-anukūlatayā", gloss: "as intrinsically agreeable / harmonious to oneself" },
      { deva: "वेदनीयम्", iast: "vedanīyam", gloss: "that which is directly felt / intuited" },
      { deva: "सुखम्", iast: "sukham", gloss: "is Happiness or Bliss" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.19"
    },
    related: ["duhkha", "sakshi", "moksha", "aduhkhasprishta"]
  },
  {
    id: "duhkha",
    deva: "दुःखम्",
    iast: "duḥkham",
    stem: "duḥkha",
    phoneticAliases: ["duhkha", "dukkha", "duhkham", "pratikulataya", "sorrow", "pain"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "प्रतिकूलतया वेदनीयं दुःखम् ।",
    lakshanaIast: "pratikūlatayā vedanīyaṃ duḥkham |",
    meaningShort: "Sorrow or Suffering (Duḥkha) is that which is directly experienced as adverse and repugnant to oneself.",
    meaningDeep: "Paramātman and Mahālakṣmī are eternally untouched by Duḥkha (aduḥkhaspṛṣṭa). For Muktiyogyas, sorrow is strictly extrinsic and ends forever at Mokṣa; only in Tamoyogyas does sorrow belong to latent dark svarūpa.",
    padaccheda: [
      { deva: "प्रतिकूलतया", iast: "pratikūlatayā", gloss: "as intrinsically disagreeable / adverse" },
      { deva: "वेदनीयम्", iast: "vedanīyam", gloss: "directly felt by awareness" },
      { deva: "दुःखम्", iast: "duḥkham", gloss: "is Sorrow or Pain" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.20"
    },
    related: ["sukha", "duhkhasprishta", "aduhkhasprishta", "moksha"]
  },
  {
    id: "iccha",
    deva: "इच्छा",
    iast: "icchā",
    stem: "icchā",
    phoneticAliases: ["iccha", "ichha", "kama", "sankalpa", "desire", "will"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "काम इच्छा । सा नित्यानित्यभेदाद् दुष्टादुष्टभेदेन च द्विविधा ।",
    lakshanaIast: "kāma icchā | sā nityānityabhedād duṣṭāduṣṭabhedena ca dvividhā |",
    meaningShort: "Volitional desire or will (Icchā) is cognitive conation toward an object, divided into eternal and transient, and into pure (aduṣṭa) and tainted (duṣṭa).",
    meaningDeep: "The Lord's eternal, unfrustrated Will (satya-saṅkalpa) is wholly pure and effortless; in bound souls, mental desire mediates between cognition (jñāna) and effort (prayatna).",
    padaccheda: [
      { deva: "कामः इच्छा", iast: "kāmaḥ icchā", gloss: "conative longing or will is Icchā" },
      { deva: "नित्य-अनित्य-भेदात्", iast: "nitya-anitya-bhedāt", gloss: "by division into eternal and transient" },
      { deva: "दुष्ट-अदुष्ट-भेदेन", iast: "duṣṭa-aduṣṭa-bhedena", gloss: "and by division into tainted and pure" },
      { deva: "द्विविधा", iast: "dvividhā", gloss: "twofold" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.21"
    },
    related: ["prayatna", "jeeva", "vairagya"]
  },
  {
    id: "prayatna",
    deva: "प्रयत्नः",
    iast: "prayatnaḥ",
    stem: "prayatna",
    phoneticAliases: ["prayatna", "prayatnah", "pravritti", "effort", "kriti"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "प्रवृत्तिः प्रयत्नः । नित्यानित्यभेदात् सोऽपि द्विविधः ।",
    lakshanaIast: "pravṛttiḥ prayatnaḥ | nityānityabhedāt so'pi dvividhaḥ |",
    meaningShort: "Volitional effort (Prayatna) is active conative exertion (pravṛtti), which is eternal in essence for sentient beings and transient in mental modifications.",
    meaningDeep: "Prayatna completes the triad `jñāna → icchā → prayatna` that constitutes `prajñāpūrvaka-vyāpāra`, the hallmark of Jīvatva. Even the Jīva's real Prayatna operates under the sustaining permission and power of Paramātman (`parāttu tacchruteḥ` — BSB 2.3.41).",
    padaccheda: [
      { deva: "प्रवृत्तिः", iast: "pravṛttiḥ", gloss: "active conative initiation" },
      { deva: "प्रयत्नः", iast: "prayatnaḥ", gloss: "is Effort (prayatna)" },
      { deva: "नित्य-अनित्य-भेदात्", iast: "nitya-anitya-bhedāt", gloss: "divided into intrinsic-eternal and mental-transient" },
      { deva: "द्विविधः", iast: "dvividhaḥ", gloss: "twofold" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 3.23; BSB 2.3.41"
    },
    related: ["jeeva", "iccha", "karma", "asvatantra"]
  },
  {
    id: "dharma",
    deva: "धर्मः (पुण्यम्)",
    iast: "dharmaḥ (puṇyam)",
    stem: "dharma",
    phoneticAliases: ["dharma", "punya", "punyam", "sukrita", "righteousness", "merit"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "विहितकर्मजन्यो भगवत्प्रीतिहेतुः पुण्याख्यो गुणो धर्मः ।",
    lakshanaIast: "vihitakarmajanyo bhagavatprītihetuḥ puṇyākhyo guṇo dharmaḥ |",
    secondaryLakshana: {
      deva: "ज्ञानात् पूर्वभाव्यकाम्यकर्मजं पुण्यमपरोक्षज्ञानहेतुरन्तःकरणशुद्धिद्वारा ।",
      iast: "jñānāt pūrvabhāvyakāmyakarmajaṃ puṇyam aparokṣajñānahetur antaḥkaraṇaśuddhidvārā |",
      translation: "Merit born of desireless enjoined action prior to direct realization becomes a cause of Aparokṣa-jñāna by purifying the inner organ.",
      source: "Padārthasaṅgrahaḥ 3.24"
    },
    meaningShort: "Dharma (Puṇya) is spiritual merit generated by scripturally enjoined acts that pleases Bhagavān; when desireless (akāmya), it purifies the mind for direct realization.",
    meaningDeep: "Remarkably, Dvaita holds that righteous worship and service performed even after Aparokṣa-jñāna is not futile: it manifests intrinsic merit (nitya-puṇya) that enhances the lustre of bliss in Mokṣa (`ānandātiśaya-hetuḥ`).",
    padaccheda: [
      { deva: "विहित-कर्म-जन्यः", iast: "vihita-karma-janyaḥ", gloss: "born of scripturally enjoined action" },
      { deva: "भगवत्-प्रीति-हेतुः", iast: "bhagavat-prīti-hetuḥ", gloss: "bringing about the pleasure/grace of Bhagavān" },
      { deva: "पुण्य-आख्यः गुणः", iast: "puṇya-ākhyaḥ guṇaḥ", gloss: "the unseen moral quality called Merit" },
      { deva: "धर्मः", iast: "dharmaḥ", gloss: "is Dharma" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Bhagavadgītābhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / भगवद्गीताभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 3.24"
    },
    related: ["karma", "prarabdha", "bhakti", "aparokshajnana"]
  },
  {
    id: "prarabdha",
    deva: "प्रारब्धम्",
    iast: "prārabdham",
    stem: "prārabdha",
    phoneticAliases: ["prarabdha", "praarabdha", "prarabdham", "sancita", "karmakshaya"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "भोक्तुमारब्धं प्रारब्धम् । सञ्चितं भोक्तव्यमप्रारब्धम् । प्रारब्धपुण्यपापयोस्तु भोगेनैव विनाशः ।",
    lakshanaIast: "bhoktum ārabdhaṃ prārabdham | sañcitaṃ bhoktavyam aprārabdham | prārabdhapuṇyapāpayos tu bhogenaiva vināśaḥ |",
    meaningShort: "Prārabdha is that portion of past karma which has already begun yielding embodied experience; unlike uncommenced (sañcita) karma burnt by realization, prārabdha is exhausted through experience (or graciously pared down by the Lord).",
    meaningDeep: "Upon Aparokṣa-jñāna, all accumulated uncommenced sin and undesired merit are destroyed, but commenced karma (prārabdha) continues across remaining ordained lifetimes until the soul bathes in the Virajā river and sheds its subtle body.",
    padaccheda: [
      { deva: "भोक्तुम् आरब्धम्", iast: "bhoktum ārabdham", gloss: "that which has already commenced yielding fructification" },
      { deva: "प्रारब्धम्", iast: "prārabdham", gloss: "is Prārabdha-karma" },
      { deva: "सञ्चितम् अप्रारब्धम्", iast: "sañcitam aprārabdham", gloss: "stored karma not yet activated is Aprārabdha" },
      { deva: "भोगेन एव विनाशः", iast: "bhogena eva vināśaḥ", gloss: "its exhaustion comes through fructified experience" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 3.24, 4.7; BSB 4.1.15"
    },
    related: ["dharma", "karma", "aparokshajnana", "lingabhanga", "moksha"]
  },
  {
    id: "hathayogyata",
    deva: "हठाख्ययोग्यता",
    iast: "haṭhākhyayogyatā",
    stem: "yogyatā",
    phoneticAliases: ["yogyata", "hatha", "svabhava", "aptitude", "anadi-yogyata"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "हठाख्ययोग्यताऽनादिरूपा । मोक्षतमसोस्तत्साधनानां तारतम्यस्य च व्यवस्थापिका सा सर्वजीवानां स्वरूपभूतैव ।",
    lakshanaIast: "haṭhākhyayogyatā'nādirūpā | mokṣatamasos tatsādhanānāṃ tāratamyasya ca vyavasthāpikā sā sarvajīvānāṃ svarūpabhūtaiva |",
    meaningShort: "Innate Aptitude (Haṭha / Svarūpa-yogyatā) is the beginningless intrinsic nature of each soul that grounds its spiritual path, capacity for devotion, and graded destiny.",
    meaningDeep: "Why do souls respond differently to identical teachings under an impartial Lord? Madhvācārya locates the ultimate differentiator in each Jīva's beginningless intrinsic disposition (anādi-svarūpa-yogyatā), freeing God of arbitrariness (vaiṣamya) and cruelty (nairghṛṇya).",
    padaccheda: [
      { deva: "हठ-आख्य-योग्यता", iast: "haṭha-ākhya-yogyatā", gloss: "intrinsic aptitude technically termed 'haṭha'" },
      { deva: "अनादि-रूपा", iast: "anādi-rūpā", gloss: "beginningless in nature" },
      { deva: "तारतम्यस्य व्यवस्थापिका", iast: "tāratamyasya vyavasthāpikā", gloss: "regulator of spiritual gradation and sadhana" },
      { deva: "स्वरूप-भूता एव", iast: "svarūpa-bhūtā eva", gloss: "identical with each Jīva's own essence" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / महाभारततात्पर्यनिर्णयः",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 3.25; MBTN 1.94–96"
    },
    related: ["muktiyogya", "nityasamsarin", "tamoyogya", "taratamya", "jeeva"]
  },
  {
    id: "shama",
    deva: "शमः",
    iast: "śamaḥ",
    stem: "śama",
    phoneticAliases: ["shama", "sama", "shamah", "bhagavannishthata", "tranquillity"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "शमो बुद्धेर्भगवन्निष्ठता ।",
    lakshanaIast: "śamo buddher bhagavanniṣṭhatā |",
    meaningShort: "Śama (inner serenity) is the unwavering, one-pointed resting of the intellect in Bhagavān.",
    meaningDeep: "One of Śrī Madhvācārya's most celebrated definitions! Whereas other schools define Śama negatively as mere mental blankness or suppression of thoughts, Madhvācārya defines it positively and theocentrically: true quietude of intellect is its steadfast absorption in Viṣṇu (`śamo manoniṣṭhatā paramātmani`).",
    padaccheda: [
      { deva: "शमः", iast: "śamaḥ", gloss: "spiritual serenity / inner poise" },
      { deva: "बुद्धेः", iast: "buddheḥ", gloss: "of the intellect / heart" },
      { deva: "भगवत्-निष्ठता", iast: "bhagavat-niṣṭhatā", gloss: "steadfastness and absorption in the Supreme Lord" }
    ],
    source: {
      grantha: "Bhagavadgītābhāṣyam & Padārthasaṅgrahaḥ",
      granthaDeva: "भगवद्गीताभाष्यम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya",
      locator: "BGB 18.42; PS 3.27"
    },
    related: ["dama", "titiksha", "bhakti", "dhyana"]
  },
  {
    id: "dama",
    deva: "दमः",
    iast: "damaḥ",
    stem: "dama",
    phoneticAliases: ["dama", "damah", "indriyanigraha", "self-control"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "इन्द्रियनिग्रहो दमः ।",
    lakshanaIast: "indriyanigraho damaḥ |",
    meaningShort: "Dama is the disciplined mastery and restraint of the external senses from wayward objects.",
    meaningDeep: "Paired with Śama (resting the inner intellect in Bhagavān), Dama withdraws the external senses from distractions and harnesses them toward sacred hearing (śravaṇa), service, and worship.",
    padaccheda: [
      { deva: "इन्द्रिय", iast: "indriya", gloss: "of the external sense-organs" },
      { deva: "निग्रहः", iast: "nigrahaḥ", gloss: "restraint, mastery, and redirection" },
      { deva: "दमः", iast: "damaḥ", gloss: "is Dama (self-restraint)" }
    ],
    source: {
      grantha: "Bhagavadgītābhāṣyam & Padārthasaṅgrahaḥ",
      granthaDeva: "भगवद्गीताभाष्यम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya",
      locator: "BGB 18.42; PS 3.27"
    },
    related: ["shama", "titiksha", "vairagya", "indriya"]
  },
  {
    id: "titiksha",
    deva: "तितिक्षा",
    iast: "titikṣā",
    stem: "titikṣā",
    phoneticAliases: ["titiksha", "titiksa", "forbearance", "equanimity"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "सुखदुःखादिद्वन्द्वसहिष्णुता तितिक्षा ।",
    lakshanaIast: "sukhaduḥkhādidvandvasahiṣṇutā titikṣā |",
    meaningShort: "Titikṣā (forbearance) is unruffled endurance of dualities such as pleasure and pain, heat and cold, honour and dishonour.",
    meaningDeep: "In Tattvavāda sādhana, Titikṣā arises from knowing that all pleasant and painful fruits arrive under the wise governance of the Supreme Lord according to one's prārabdha, freeing the seeker from lamentation and resentment.",
    padaccheda: [
      { deva: "सुख-दुःख-आदि", iast: "sukha-duḥkha-ādi", gloss: "pleasure, pain, heat, cold, and the like" },
      { deva: "द्वन्द्व-सहिष्णुता", iast: "dvandva-sahiṣṇutā", gloss: "patient endurance of pairs of opposites" },
      { deva: "तितिक्षा", iast: "titikṣā", gloss: "is Forbearance (titikṣā)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.27"
    },
    related: ["shama", "dama", "vairagya", "sukha", "duhkha"]
  },
  {
    id: "bala",
    deva: "बलम्",
    iast: "balam",
    stem: "bala",
    phoneticAliases: ["bala", "balam", "strength", "parapeksha"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "परापेक्षां विना कार्यानुकूलगुणो बलम् ।",
    lakshanaIast: "parāpekṣāṃ vinā kāryānukūlaguṇo balam |",
    meaningShort: "Strength (Bala) is the intrinsic quality conducive to accomplishing effects without exhaustion or reliance on extraneous props.",
    meaningDeep: "In its plenary, absolute sense (`parāpekṣāṃ vinā`), Bala belongs supremely to Bhagavān (`pūrṇāvyayātmabalacitsukhavīryasāraḥ` — MBTN 1.13) and secondarily, by His gift, to Mukhyaprāṇa Vāyu and all sentient souls according to tāratamya.",
    padaccheda: [
      { deva: "पर-अपेक्षाम् विना", iast: "para-apekṣām vinā", gloss: "without needing external aid" },
      { deva: "कार्य-अनुकूल-गुणः", iast: "kārya-anukūla-guṇaḥ", gloss: "quality favourable to accomplishing action" },
      { deva: "बलम्", iast: "balam", gloss: "is Strength (Bala)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 3.27"
    },
    related: ["svatantra", "shakti", "prana"]
  },
  {
    id: "srishti",
    deva: "सृष्टिः",
    iast: "sṛṣṭiḥ",
    stem: "sṛṣṭi",
    phoneticAliases: ["srishti", "srushti", "janma", "creation", "ashtakartritva"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "जन्माद्यस्य यतः । विशेषाप्तिर्विकारः स्याज्जननं नाम वस्तुनः ।",
    lakshanaIast: "janmādy asya yataḥ | viśeṣāptir vikāraḥ syāj jananaṃ nāma vastunaḥ |",
    secondaryLakshana: {
      deva: "सृष्टिरक्षाहृतिज्ञाननियत्यज्ञानबन्धनान् । मोक्षं च विष्णुतस्त्वेव ज्ञात्वा मुक्तिर्न चान्यथा ॥",
      iast: "sṛṣṭirakṣāhṛtijñānaniyatyajñānabandhanān | mokṣaṃ ca viṣṇutas tv eva jñātvā muktir na cānyathā ||",
      translation: "Knowing that creation, preservation, dissolution, knowledge, governance, obscuration, bondage, and liberation proceed from Viṣṇu alone brings liberation — never otherwise.",
      source: "Mahābhāratatātparyanirṇayaḥ 1.83"
    },
    meaningShort: "Creation (Sṛṣṭi) is the Lord's imparting of new manifest states (viśeṣāpti / parādhīna-viśeṣāpti) to eternal substrates and evolving cosmos from Prakṛti.",
    meaningDeep: "In Brahmasūtra 1.1.2 (`janmādy asya yataḥ`), Madhvācārya shows that Brahman is defined as the sole independent cause of the eightfold cosmic functions (aṣṭakartṛtva): sṛṣṭi, sthiti, saṃhāra, niyamana, jñāna, ajñāna, bandha, and mokṣa. Even eternal entities undergo 'parādhīna-viśeṣāpti' — acquisition of new relational states dependent on the Lord.",
    padaccheda: [
      { deva: "जन्म-आदि अस्य यतः", iast: "janma-ādi asya yataḥ", gloss: "He from whom origination and the rest of this universe proceed (BS 1.1.2)" },
      { deva: "विशेष-आप्तिः", iast: "viśeṣa-āptiḥ", gloss: "acquisition of a new manifest state" },
      { deva: "विकारः जननम्", iast: "vikāraḥ jananam", gloss: "is modification / origination" },
      { deva: "वस्तुनः", iast: "vastunaḥ", gloss: "of an entity" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "ब्रह्मसूत्रभाष्यम् / महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "BSB 1.1.2; MBTN 1.83"
    },
    related: ["paramatman", "vikara", "prakriti", "moksha", "bandha"]
  },
  {
    id: "jagrat",
    deva: "जाग्रत्",
    iast: "jāgrat",
    stem: "jāgrat",
    phoneticAliases: ["jagrat", "jaagrat", "visva", "vishva", "waking"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "बहिःप्रज्ञो विभुर्विश्वो बाह्येन्द्रियैर्बाह्यार्थोपलम्भो जाग्रदवस्था ।",
    lakshanaIast: "bahiḥprajño vibhur viśvo bāhyendriyair bāhyārthopalambho jāgradavasthā |",
    meaningShort: "The Waking State (Jāgrat) is outward-turned cognition perceiving external objects through outer senses, governed by Bhagavān in His Viśva form seated in the right eye.",
    meaningDeep: "In Māṇḍūkya Bhāṣya, Madhvācārya clarifies that 'Viśva', 'Taijasa', 'Prājña', and 'Turīya' are primarily four cosmic-indwelling forms of Bhagavān Viṣṇu Himself who orchestrate the Jīva's waking, dreaming, deep sleep, and liberated states.",
    padaccheda: [
      { deva: "बहिः-प्रज्ञः", iast: "bahiḥ-prajñaḥ", gloss: "whose cognitive operation turns outward" },
      { deva: "विभुः विश्वः", iast: "vibhuḥ viśvaḥ", gloss: "the all-pervasive Lord named Viśva" },
      { deva: "बाह्य-अर्थ-उपलम्भः", iast: "bāhya-artha-upalambhaḥ", gloss: "apprehension of external sense-objects" },
      { deva: "जाग्रत्-अवस्था", iast: "jāgrat-avasthā", gloss: "the waking state" }
    ],
    source: {
      grantha: "Māṇḍūkyopaniṣadbhāṣyam",
      granthaDeva: "माण्डूक्योपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "MAN 1.3, 1.7"
    },
    related: ["svapna", "sushupti", "turiya", "vishva"]
  },
  {
    id: "svapna",
    deva: "स्वप्नः",
    iast: "svapnaḥ",
    stem: "svapna",
    phoneticAliases: ["svapna", "swapna", "taijasa", "dreaming"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "जाग्रद्दर्शनसंस्काररूपत्वात् स्वप्नगं तु यत् । अन्तःप्रज्ञस्तु तैजसः ।",
    lakshanaIast: "jāgraddarśanasaṃskārarūpatvāt svapnagaṃ tu yat | antaḥprajñas tu taijasaḥ |",
    meaningShort: "Dream (Svapna) is inward perception of real subtle forms shaped by Bhagavān Taijasa (seated in the throat/mind) out of latent waking impressions (vāsanās).",
    meaningDeep: "Dream objects are real mental creations fashioned instantaneously by the Lord (`sandhye sṛṣṭir āha hi` — BS 3.2.1) from mental vāsanās to yield subtle karmic retribution or prophetic indications; only identifying them with gross external things is an error.",
    padaccheda: [
      { deva: "जाग्रत्-दर्शन-संस्कार-रूपत्वात्", iast: "jāgrat-darśana-saṃskāra-rūpatvāt", gloss: "being fashioned out of impressions of waking perceptions" },
      { deva: "स्वप्नगम्", iast: "svapnagam", gloss: "that which appears in dream" },
      { deva: "अन्तः-प्रज्ञः", iast: "antaḥ-prajñaḥ", gloss: "mediating inward-turned cognition" },
      { deva: "तैजसः", iast: "taijasaḥ", gloss: "is Bhagavān in His Taijasa form" }
    ],
    source: {
      grantha: "Māṇḍūkyopaniṣadbhāṣyam & Brahmasūtrabhāṣyam",
      granthaDeva: "माण्डूक्योपनिषद्भाष्यम् / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "MAN 1.4, 1.7; BSB 3.2.1–3"
    },
    related: ["vasana", "jagrat", "sushupti", "taijasa"]
  },
  {
    id: "sushupti",
    deva: "सुषुप्तिः",
    iast: "suṣuptiḥ",
    stem: "suṣupti",
    phoneticAliases: ["sushupti", "susupti", "prajna", "deep sleep"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "घनप्रज्ञस्तथा प्राज्ञः । उपरतेन्द्रियमनोवृत्तेर्जीवस्य हृदये प्राज्ञालिङ्गितस्य स्वरूपसुखानुभवः सुषुप्तिः ।",
    lakshanaIast: "ghanaprajñas tathā prājñaḥ | uparatendriyamanovṛtter jīvasya hṛdaye prājñāliṅgitasya svarūpasukhānubhavaḥ suṣuptiḥ |",
    meaningShort: "Deep Sleep (Suṣupti) is the state where outer senses and mind subside and the Jīva, embraced by Bhagavān Prājña in the heart-lotus, intuits its bare self, time, and a glimpse of innate ease via Sākṣī.",
    meaningDeep: "Even when all material instruments rest in Suṣupti, the Jīva does not merge into undifferentiated identity with Brahman; held closely by Prājña Hari in the hṛdaya-ākāśa, its Sākṣī continues to witness innate sukha and kāla, enabling the waking memory 'I slept peacefully.'",
    padaccheda: [
      { deva: "घन-प्रज्ञः प्राज्ञः", iast: "ghana-prajñaḥ prājñaḥ", gloss: "Bhagavān Prājña, who governs compact unmanifested consciousness" },
      { deva: "उपरत-इन्द्रिय-मनः-वृत्तेः", iast: "uparata-indriya-manaḥ-vṛtteḥ", gloss: "when sense and mental modifications have ceased" },
      { deva: "प्राज्ञ-आलिङ्गितस्य", iast: "prājña-āliṅgitasya", gloss: "embraced by Lord Prājña in the heart" },
      { deva: "स्वरूप-सुख-अनुभवः", iast: "svarūpa-sukha-anubhavaḥ", gloss: "direct Sākṣī-experience of innate ease" }
    ],
    source: {
      grantha: "Māṇḍūkyopaniṣadbhāṣyam & Chāndogyabhāṣyam",
      granthaDeva: "माण्डूक्योपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "MAN 1.5, 1.7"
    },
    related: ["sakshi", "jagrat", "svapna", "turiya", "prajna-form"]
  },
  {
    id: "turiya",
    deva: "तुरीयः",
    iast: "turīyaḥ",
    stem: "turīya",
    phoneticAliases: ["turiya", "turya", "turiyah", "fourth"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "निवृत्तेः सर्वदुःखानामीशानः प्रभुरव्ययः । सर्वदुःखानां निवृत्तेः कारणभूतस्तुरीयो देवो मोक्षदः सम्प्रकीर्तितः ।",
    lakshanaIast: "nivṛtteḥ sarvaduḥkhānām īśānaḥ prabhur avyayaḥ | sarvaduḥkhānāṃ nivṛtteḥ kāraṇabhūtas turīyo devo mokṣadaḥ samprakīrtitaḥ |",
    meaningShort: "Turīya is the fourth transcendent form of Bhagavān Hari who completely terminates all sorrow and bestows eternal liberation (Mokṣa).",
    meaningDeep: "In Māṇḍūkya Upaniṣad 1.10 (`nāntaḥprajñaṃ na bahiḥprajñam...`), Advaita reads Turīya as an attribute-less Ātman; Madhvācārya demonstrates from the verse's own epithets (`īśānaḥ prabhur avyayaḥ`) that Turīya is the supreme personal Lord Viṣṇu, sovereign remover of all bondage.",
    padaccheda: [
      { deva: "सर्व-दुःखानाम् निवृत्तेः", iast: "sarva-duḥkhānām nivṛtteḥ", gloss: "of the complete cessation of all sorrows" },
      { deva: "ईशानः प्रभुः अव्ययः", iast: "īśānaḥ prabhuḥ avyayaḥ", gloss: "the imperishable Sovereign Ruler" },
      { deva: "तुरीयः देवः", iast: "turīyaḥ devaḥ", gloss: "the Fourth resplendent form of Hari" },
      { deva: "मोक्षदः", iast: "mokṣadaḥ", gloss: "giver of liberation" }
    ],
    source: {
      grantha: "Māṇḍūkyopaniṣadbhāṣyam",
      granthaDeva: "माण्डूक्योपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "MAN 2.2"
    },
    related: ["moksha", "jagrat", "svapna", "sushupti", "om"]
  },
  {
    id: "bhakti",
    deva: "भक्तिः",
    iast: "bhaktiḥ",
    stem: "bhakti",
    phoneticAliases: ["bhakti", "bhaktih", "sneha", "mahatmyajnana", "devotion"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "माहात्म्यज्ञानपूर्वस्तु सुदृढः सर्वतोऽधिकः । स्नेहो भक्तिरिति प्रोक्तस्तया मुक्तिर्न चान्यथा ॥",
    lakshanaIast: "māhātmyajñānapūrvas tu sudṛḍhaḥ sarvato'dhikaḥ | sneho bhaktir iti proktas tayā muktir na cānyathā ||",
    secondaryLakshana: {
      deva: "भक्त्यर्थान्यखिलान्येव भक्तिर्मोक्षाय केवला । मुक्तानामपि भक्तिर्हि नित्यानन्दस्वरूपिणी ॥",
      iast: "bhaktyarthāny akhilāny eva bhaktir mokṣāya kevalā | muktānām api bhaktir hi nityānandasvarūpiṇī ||",
      translation: "All spiritual disciplines exist for the sake of Bhakti; Bhakti alone leads to liberation, and even among liberated souls Bhakti abides eternally as the very form of bliss.",
      source: "Mahābhāratatātparyanirṇayaḥ 1.104"
    },
    meaningShort: "Bhakti is unshakeable love for Bhagavān, preceded by true knowledge of His supreme majesty (māhātmya-jñāna) and surpassing love for all else — through it alone is liberation attained.",
    meaningDeep: "Perhaps the single greatest verse in Tattvavāda soteriology (MBTN 1.85). Madhvācārya fuses knowledge and love into an indivisible whole: affection without knowledge of God's supremacy is mere sentiment, and dry knowledge without supreme love cannot win grace. Bhakti is simultaneously the means (sādhana) and continues in Mokṣa as parama-bhakti, an eternal outpouring of blissful love.",
    padaccheda: [
      { deva: "माहात्म्य-ज्ञान-पूर्वः", iast: "māhātmya-jñāna-pūrvaḥ", gloss: "preceded and grounded in knowledge of the Lord's supreme majesty" },
      { deva: "सुदृढः", iast: "sudṛḍhaḥ", gloss: "unwavering across all trials and obstacles" },
      { deva: "सर्वतः अधिकः", iast: "sarvataḥ adhikaḥ", gloss: "surpassing attachment to oneself and all other beings" },
      { deva: "स्नेहः भक्तिः", iast: "snehaḥ bhaktiḥ", gloss: "such flowing love is declared to be Bhakti" },
      { deva: "तया मुक्तिः न च अन्यथा", iast: "tayā muktiḥ na ca anyathā", gloss: "by that alone comes liberation, and never otherwise" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ & Nyāyasudhā",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "MBTN 1.85, 1.104"
    },
    related: ["aparokshajnana", "moksha", "taratamya", "shama", "sharanagati"]
  },
  {
    id: "vairagya",
    deva: "वैराग्यम्",
    iast: "vairāgyam",
    stem: "vairāgya",
    phoneticAliases: ["vairagya", "vairaagya", "viraga", "detachment", "renunciation"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "त्रिविधसांसारिकदुःखदर्शनेन सज्जनसङ्गत्या च इहामुत्रफलभोगविरागो वैराग्यम् ।",
    lakshanaIast: "trividhasāṃsārikaduḥkhadarśanena sajjanasaṅgatyā ca ihāmutraphalabhogavirāgo vairāgyam |",
    meaningShort: "Vairāgya (dispassion) is detachment from craving selfish enjoyments both here and in celestial realms, awakened through discerning the threefold sorrow of saṃsāra and keeping company with the wise.",
    meaningDeep: "In Dvaita, Vairāgya is not hatred of the real world created by Viṣṇu, but relinquishment of egoistic possessiveness (mamakāra) and sensual craving so that all things are seen as belonging to Hari and engaged in His service.",
    padaccheda: [
      { deva: "त्रिविध-सांसारिक-दुःख-दर्शनेन", iast: "trividha-sāṃsārika-duḥkha-darśanena", gloss: "by seeing the threefold afflictions of worldly existence" },
      { deva: "सज्जन-सङ्गत्या च", iast: "sajjana-saṅgatyā ca", gloss: "and through fellowship with saintly devotees" },
      { deva: "इह-अमुत्र-फल-भोग-विरागः", iast: "iha-amutra-phala-bhoga-virāgaḥ", gloss: "non-attachment to enjoyment of fruits here and hereafter" },
      { deva: "वैराग्यम्", iast: "vairāgyam", gloss: "is Dispassion (Vairāgya)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS 4.5"
    },
    related: ["bhakti", "shama", "dama", "sharanagati"]
  },
  {
    id: "sharanagati",
    deva: "शरणागतिः",
    iast: "śaraṇāgatiḥ",
    stem: "śaraṇāgati",
    phoneticAliases: ["sharanagati", "prapatti", "surrender", "ananyabhakti"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "सर्वतन्त्रस्वतन्त्रे हरौ स्वपारतन्त्र्यानुसन्धानपूर्वकं सर्वसमर्पणं तदेकाश्रयणं शरणागतिः ।",
    lakshanaIast: "sarvatantrasvatantre harau svapāratantryānusandhānapūrvakaṃ sarvasamarpaṇaṃ tadekāśrayaṇaṃ śaraṇāgatiḥ |",
    meaningShort: "Śaraṇāgati (wholehearted refuge) is seeking sole shelter in the all-independent Lord Hari and dedicating all actions and fruits to Him in vivid awareness of one's utter dependence.",
    meaningDeep: "Grounded in Bhagavadgītā 18.66 (`sarvadharmān parityajya mām ekaṃ śaraṇaṃ vraja`), Madhvācārya explains 'parityajya' not as abandoning enjoined duties, but abandoning selfish claim to fruits (phala-tyāga) and false sense of independent agency (kartṛtvābhimāna-tyāga).",
    padaccheda: [
      { deva: "सर्वतन्त्र-स्वतन्त्रे हरौ", iast: "sarvatantra-svatantre harau", gloss: "in Lord Hari, the sole Independent Ruler" },
      { deva: "स्व-पारतन्त्र्य-अनुसन्धान-पूर्वकम्", iast: "sva-pāratantrya-anusandhāna-pūrvakam", gloss: "with mindfulness of one's total ontological dependence" },
      { deva: "सर्व-समर्पणम् तदेक-आश्रयणम्", iast: "sarva-samarpaṇam tadeka-āśrayaṇam", gloss: "offering everything and taking sole refuge in Him" },
      { deva: "शरणागतिः", iast: "śaraṇāgatiḥ", gloss: "is Surrender (Śaraṇāgati)" }
    ],
    source: {
      grantha: "Bhagavadgītābhāṣyam & Padārthasaṅgrahaḥ",
      granthaDeva: "भगवद्गीताभाष्यम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya / Śrī Padmanābha Sūri",
      locator: "BGB 18.66; PS 4.5"
    },
    related: ["bhakti", "svatantra", "asvatantra", "vairagya"]
  },
  {
    id: "shravana",
    deva: "श्रवणम्",
    iast: "śravaṇam",
    stem: "śravaṇa",
    phoneticAliases: ["shravana", "sravana", "shravanam", "hearing"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "सद्गुरूपदेशेन सच्छास्त्रार्थज्ञानरूपं श्रवणम् । अज्ञाननिवर्तकम् ।",
    lakshanaIast: "sadgurūpadeśena sacchāstrārthajñānarūpaṃ śravaṇam | ajñānanivartakam |",
    meaningShort: "Śravaṇa is receptive study of the true import of sacred scripture through the instruction of a qualified Guru, dispelling initial ignorance (ajñāna).",
    meaningDeep: "In the Bṛhadāraṇyaka triad `śrotavyo mantavyo nididhyāsitavyaḥ`, Śravaṇa removes simple lack of knowledge (ajñāna), Manana removes doubt and contrary error (saṃśaya-viparyaya), and Nididhyāsana culminates in direct vision (aparokṣa).",
    padaccheda: [
      { deva: "सद्गुरु-उपदेशेन", iast: "sadguru-upadeśena", gloss: "through instruction from a realized teacher" },
      { deva: "सच्छास्त्र-अर्थ-ज्ञान-रूपम्", iast: "sacchāstra-artha-jñāna-rūpam", gloss: "consisting in grasping the true meaning of authoritative śāstras" },
      { deva: "श्रवणम्", iast: "śravaṇam", gloss: "is Scriptural Hearing (Śravaṇa)" },
      { deva: "अज्ञान-निवर्तकम्", iast: "ajñāna-nivartakam", gloss: "remover of non-cognition" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Anuvyākhyānam",
      granthaDeva: "पदार्थसङ्ग्रहः / अनुव्याख्यानम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.5; AV 1.1"
    },
    related: ["manana", "dhyana", "guru", "agama"]
  },
  {
    id: "manana",
    deva: "मननम्",
    iast: "mananam",
    stem: "manana",
    phoneticAliases: ["manana", "mananam", "mimamsa", "vicara", "jijnasa", "reflection"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "श्रुतस्य तत्त्वस्य हृदीकरणाय मीमांसापरपर्यायो विचारो मननम् । संशयमिथ्याज्ञाननिरासकम् ।",
    lakshanaIast: "śrutasya tattvasya hṛdīkaraṇāya mīmāṃsāparaparyāyo vicāro mananam | saṃśayamithyājñānanirāsakam |",
    meaningShort: "Manana (rational inquiry / Mīmāṃsā) is systematic reflection with valid Nyāya canons to make heard scriptural truth one's own conviction by uprooting doubt and misconception.",
    meaningDeep: "In Anuvyākhyāna under `athāto brahmajijñāsā`, Madhvācārya elevates Jijñāsā / Manana to sacred worship: employing rigorous logic in harmony with Śruti is indispensable because unsettled doubts block one-pointed meditation (dhyāna).",
    padaccheda: [
      { deva: "श्रुतस्य तत्त्वस्य हृदीकरणाय", iast: "śrutasya tattvasya hṛdīkaraṇāya", gloss: "to internalize the reality learned through Śravaṇa" },
      { deva: "मीमांसा-परपर्यायः विचारः", iast: "mīmāṃsā-paraparyāyaḥ vicāraḥ", gloss: "critical inquiry synonymous with Mīmāṃsā" },
      { deva: "मननम्", iast: "mananam", gloss: "is Reflection (Manana)" },
      { deva: "संशय-मिथ्याज्ञान-निरासकम्", iast: "saṃśaya-mithyājñāna-nirāsakam", gloss: "eliminating doubt and false cognition" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Anuvyākhyānam",
      granthaDeva: "पदार्थसङ्ग्रहः / अनुव्याख्यानम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.5; AV 1.1"
    },
    related: ["shravana", "dhyana", "samshaya", "viparyaya", "tarka"]
  },
  {
    id: "dhyana",
    deva: "ध्यानम् (निदिध्यासनम्)",
    iast: "dhyānam (nididhyāsanam)",
    stem: "dhyāna",
    phoneticAliases: ["dhyana", "dhyaana", "nididhyasana", "upasana", "akhandasmriti", "meditation"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "इतरतिरस्कारपूर्वकभगवद्विषयकाखण्डस्मृतिर्ध्यानम् । तदेव निदिध्यासनम् ।",
    lakshanaIast: "itaratiraskārapūrvakabhagavadviṣayakākhaṇḍasmṛtir dhyānam | tad eva nididhyāsanam |",
    meaningShort: "Dhyāna (Nididhyāsana) is an unbroken, continuous stream of loving remembrance focused upon Bhagavān to the exclusion of all extraneous thoughts.",
    meaningDeep: "Once Śravaṇa and Manana establish unshakeable certainty (`idam ittham iti niścaya`), the seeker practices Upāsanā/Dhyāna upon the Bimba-rūpa of Bhagavān suited to their innate yogyatā until Dhyāna ripens by grace into direct vision (Aparokṣa-jñāna).",
    padaccheda: [
      { deva: "इतर-तिरस्कार-पूर्वक", iast: "itara-tiraskāra-pūrvaka", gloss: "setting aside all distracting non-divine thoughts" },
      { deva: "भगवत्-विषयक", iast: "bhagavat-viṣayaka", gloss: "having the form and attributes of Bhagavān as object" },
      { deva: "अखण्ड-स्मृतिः", iast: "akhaṇḍa-smṛtiḥ", gloss: "an uninterrupted oil-like flow of remembrance" },
      { deva: "ध्यानम् निदिध्यासनम्", iast: "dhyānam nididhyāsanam", gloss: "is Meditation (Dhyāna / Nididhyāsana)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.5.3; BSB 4.1.1"
    },
    related: ["shravana", "manana", "bimba", "aparokshajnana", "smriti"]
  },
  {
    id: "guru",
    deva: "गुरुः",
    iast: "guruḥ",
    stem: "guru",
    phoneticAliases: ["guru", "guruh", "niyataguru", "acharya", "teacher"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "शिष्यस्वरूपं सम्यग्ज्ञात्वा तद्योग्यविशिष्टभगवद्रूपविशेषविषयकविद्योपदेशकर्तारो नियतगुरवः ।",
    lakshanaIast: "śiṣyasvarūpaṃ samyag jñātvā tadyogyaviśiṣṭabhagavadrūpaviśeṣaviṣayakavidyopadeśakartāro niyataguravaḥ |",
    secondaryLakshana: {
      deva: "यस्य देवे परा भक्तिर्यथा देवे तथा गुरौ । तस्यैते कथिता ह्यर्थाः प्रकाशन्ते महात्मनः ॥",
      iast: "yasya deve parā bhaktir yathā deve tathā gurau | tasyaite kathitā hy arthāḥ prakāśante mahātmanaḥ ||",
      translation: "Unto that high-souled seeker who bears supreme devotion to the Lord and fitting devotion to the Guru, these sacred truths shine forth.",
      source: "Śvetāśvatara Upaniṣad 6.23 (cited in MBTN 1.103)"
    },
    meaningShort: "The ordained Guru (Niyata-guru) is one who discerns the disciple's true spiritual nature and imparts meditation on the specific form of Bhagavān fitted to that soul's yogyatā.",
    meaningDeep: "In Brahmasūtra Bhāṣya and Katha Upaniṣad Bhāṣya (`proktā'nyenaiva sujñānāya`), Madhvācārya emphasizes that Guru-prasāda is indispensable for liberation: Mukhyaprāṇa/Brahmā stands as the supreme created Guru of the cosmos, while Bhagavān Nārāyaṇa Himself is the Guru of all Gurus.",
    padaccheda: [
      { deva: "शिष्य-स्वरूपम् सम्यक् ज्ञात्वा", iast: "śiṣya-svarūpam samyak jñātvā", gloss: "discerning accurately the disciple's innate capacity" },
      { deva: "तत्-योग्य-भगवद्रूप-विशेष", iast: "tat-yogya-bhagavadrūpa-viśeṣa", gloss: "the specific indwelling Bimba-form of the Lord suited to them" },
      { deva: "विद्या-उपदेश-कर्तारः", iast: "vidyā-upadeśa-kartāraḥ", gloss: "imparters of saving spiritual instruction" },
      { deva: "नियत-गुरवः", iast: "niyata-guravaḥ", gloss: "are the ordained Niyata-gurus" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / महाभारततात्पर्यनिर्णयः",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.5.1; MBTN 1.103"
    },
    related: ["shravana", "bimba", "taratamya", "bhakti"]
  },
  {
    id: "taratamya",
    deva: "तारतम्यम्",
    iast: "tāratamyam",
    stem: "tāratamya",
    phoneticAliases: ["taratamya", "taaratamya", "taratamyam", "gradation", "hierarchy"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "तस्मादनाद्यनन्तं हि तारतम्यं चिदात्मनाम् । मुक्तानां च न हीयन्ते तारतम्यं च सर्वदा ॥",
    lakshanaIast: "tasmād anādy anantaṃ hi tāratamyaṃ cidātmanām | muktānāṃ ca na hīyante tāratamyaṃ ca sarvadā ||",
    meaningShort: "Tāratamya is the beginningless, eternal gradation of intrinsic knowledge, devotion, and bliss among sentient beings, free of all envy in Mokṣa.",
    meaningDeep: "Just as vessels of varying sizes — from a small cup to an ocean — are each filled to their own 100% brim without envy or deficiency, every liberated soul enjoys complete fullness of its own svarūpa-ānanda in harmonious reverence toward higher tattvas and supreme Viṣṇu at the apex.",
    padaccheda: [
      { deva: "अनादि-अनन्तम्", iast: "anādi-anantam", gloss: "beginningless and endless" },
      { deva: "तारतम्यम्", iast: "tāratamyam", gloss: "intrinsic gradation of excellence and capacity" },
      { deva: "चिदात्मनाम्", iast: "cidātmanām", gloss: "among conscious souls" },
      { deva: "मुक्तानाम् सर्वदा", iast: "muktānām sarvadā", gloss: "persisting harmoniously forever even among the liberated" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "MBTN 1.71, 1.80, 1.95"
    },
    related: ["pancabheda", "jeeva", "riju", "lakshmi", "moksha", "hathayogyata"]
  },
  {
    id: "aparokshajnana",
    deva: "अपरोक्षज्ञानम्",
    iast: "aparokṣajñānam",
    stem: "aparokṣajñāna",
    phoneticAliases: ["aparoksha", "aparokshajnana", "bimbadarshana", "sakshatkara", "direct vision"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "मोक्षसाधनं च ज्ञानं योग्यापरोक्षरूपम् । स्वयोग्यबिम्बरूपभगवत्साक्षात्कारो ह्यपरोक्षज्ञानम् ।",
    lakshanaIast: "mokṣasādhanaṃ ca jñānaṃ yogyāparokṣarūpam | svayogyabimbarūpabhagavatsākṣātkāro hy aparokṣajñānam |",
    meaningShort: "Aparokṣa-jñāna is direct, immediate perceptual vision of one's indwelling Bimba-form of Bhagavān according to one's spiritual capacity — the proximate doorway to liberation.",
    meaningDeep: "Mediate scriptural knowledge (parokṣa-jñāna) cannot by itself sever beginningless karmic bondage; when Dhyāna matures through supreme Bhakti and Viṣṇu's grace (`yam evaiṣa vṛṇute tena labhyaḥ`), the Lord unveils His radiant Bimba-form directly to the purified inner eye.",
    padaccheda: [
      { deva: "मोक्ष-साधनम् ज्ञानम्", iast: "mokṣa-sādhanam jñānam", gloss: "the liberating knowledge" },
      { deva: "योग्य-अपरोक्ष-रूपम्", iast: "yogya-aparokṣa-rūpam", gloss: "consisting in direct immediate vision fitted to one's capacity" },
      { deva: "स्वयोग्य-बिम्बरूप-भगवत्", iast: "svayogya-bimbarūpa-bhagavat", gloss: "of the Lord's indwelling Bimba-form" },
      { deva: "साक्षात्कारः", iast: "sākṣātkāraḥ", gloss: "face-to-face spiritual intuition" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.5, 4.5.5; BSB 3.3.53"
    },
    related: ["bimba", "dhyana", "bhakti", "moksha", "prarabdha"]
  },
  {
    id: "bandha",
    deva: "बन्धः",
    iast: "bandhaḥ",
    stem: "bandha",
    phoneticAliases: ["bandha", "bandhah", "samsara", "bondage", "lingasharira"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "जीवस्य परमात्माधीनो बन्धः । ईश्वरेच्छाऽविद्याकामकर्मलिङ्गशरीरत्रिगुणात्मकमनःस्थूलशरीरादिरूपः सत्य एव ।",
    lakshanaIast: "jīvasya paramātmādhīno bandhaḥ | īśvarecchā'vidyākāmakarmaliṅgaśarīratriguṇātmakamanaḥsthūlaśarīrādirūpaḥ satya eva |",
    meaningShort: "Bondage (Bandha) is the Jīva's real — not illusory — entanglement in positive Avidyā, subtle sixteen-part Liṅga-śarīra, karma, and gross embodiment under the governance of Paramātman.",
    meaningDeep: "Madhvācārya argues in Viṣṇutattvavinirṇaya and Tattvodyota that if bondage were merely imaginary (mithyā), mere verbal instruction would end it without needing divine grace (`bandhamithyātvaṃ na yuktimat`); because Bandha is real and forged by the Lord's Māyā-śakti (`parābhidhyānāt tu tirohitaṃ tato hy asya bandhaviparyayau` — BS 3.2.5), only the Lord's grace can unbind it.",
    padaccheda: [
      { deva: "परमात्म-अधीनः बन्धः", iast: "paramātma-adhīnaḥ bandhaḥ", gloss: "bondage governed by the Supreme Lord" },
      { deva: "अविद्या-काम-कर्म", iast: "avidyā-kāma-karma", gloss: "positive ignorance, desire, and karmic desert" },
      { deva: "लिङ्गशरीर-स्थूलशरीर-आदि-रूपः", iast: "liṅgaśarīra-sthūlaśarīra-ādi-rūpaḥ", gloss: "consisting of the subtle and gross bodies" },
      { deva: "सत्यः एव", iast: "satyaḥ eva", gloss: "genuinely real, not illusory" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam & Padārthasaṅgrahaḥ",
      granthaDeva: "ब्रह्मसूत्रभाष्यम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya / Śrī Padmanābha Sūri",
      locator: "BSB 3.2.5; TSK 11; PS 4.6"
    },
    related: ["avidya", "lingabhanga", "moksha", "srishti", "jeeva"]
  },
  {
    id: "lingabhanga",
    deva: "लिङ्गभङ्गः",
    iast: "liṅgabhaṅgaḥ",
    stem: "liṅgabhaṅga",
    phoneticAliases: ["lingabhanga", "lingasharira", "viraja", "subtle body"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "षोडशकलोपेतस्य लिङ्गशरीरस्य विरजानदीस्नानेन जीवसम्बन्धनाशो लिङ्गभङ्गः ।",
    lakshanaIast: "ṣoḍaśakalopetasya liṅgaśarīrasya virajānādīsnānena jīvasambandhanāśo liṅgabhaṅgaḥ |",
    meaningShort: "Liṅgabhaṅga is the final sundering of the beginningless sixteen-part subtle body (liṅga-śarīra) through sacred immersion in the cosmic Virajā river on the threshold of Mokṣa.",
    meaningDeep: "Every bound Jīva is encased from beginningless time in a subtle cocoon of ten subtle senses, five prāṇas, and subtle mind (ṣoḍaśa-kalā). When all prārabdha is exhausted and the soul ascends with Caturmukha Brahmā, bathing in the Lakṣmī-embodied Virajā river dissolves this last material veil forever.",
    padaccheda: [
      { deva: "षोडश-कला-उपेतस्य", iast: "ṣoḍaśa-kalā-upetasya", gloss: "composed of sixteen subtle factors" },
      { deva: "लिङ्ग-शरीरस्य", iast: "liṅga-śarīrasya", gloss: "of the subtle transmigrating body" },
      { deva: "विरजा-नदी-स्नानेन", iast: "virajā-nadī-snānena", gloss: "by immersion in the transcendent Virajā river" },
      { deva: "जीव-सम्बन्ध-नाशः", iast: "jīva-sambandha-nāśaḥ", gloss: "permanent severance from the soul" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Padmanābha Sūri / Śrī Madhvācārya",
      locator: "PS 4.7; BSB 4.2–4.4"
    },
    related: ["bandha", "moksha", "aparokshajnana", "prarabdha"]
  },
  {
    id: "moksha",
    deva: "मोक्षः (मुक्तिः)",
    iast: "mokṣaḥ (muktiḥ)",
    stem: "mokṣa",
    phoneticAliases: ["moksha", "mukti", "mokshah", "muktih", "sayujya", "salokya", "liberation"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "परमात्मप्रसादजः प्रकृत्यविद्यादिबन्धमोक्षः स्वरूपसुखानुभूतिश्च मुक्तिः ।",
    lakshanaIast: "paramātmaprasādajaḥ prakṛtyavidyādibandhamokṣaḥ svarūpasukhānubhūtiś ca muktiḥ |",
    secondaryLakshana: {
      deva: "देहादेः सर्वतो मुक्ताः सर्वगं पुरुषोत्तमम् । प्राप्य तस्मिन् प्रविश्याथ मोदन्तेऽन्तर्बहिस्तथा ॥",
      iast: "dehādeḥ sarvato muktāḥ sarvagaṃ puruṣottamam | prāpya tasmin praviśyātha modante'ntar bahis tathā ||",
      translation: "Freed wholly from material bodies and veils, attaining the all-pervasive Puruṣottama, liberated souls rejoice inwardly and outwardly in eternal bliss.",
      source: "Muṇḍakopaniṣadbhāṣyam 6.5"
    },
    meaningShort: "Mokṣa is permanent release from Avidyā and Prakṛtic bondage through Paramātman's supreme grace, together with the unclouded manifestation and enjoyment of the soul's innate bliss.",
    meaningDeep: "In Tattvavāda, Mokṣa is neither featureless dissolution of individuality nor mere negative absence of pain: retaining eternal personal distinctness (pañcabheda) and envy-free gradation (tāratamya), liberated souls enjoy Sālokya, Sāmīpya, Sārūpya, and Sāyujya in Vaikuṇṭha, Śvetadvīpa, and Anantāsana, overflowing with Parama-bhakti.",
    padaccheda: [
      { deva: "परमात्म-प्रसादजः", iast: "paramātma-prasādajaḥ", gloss: "born of the supreme grace of Paramātman" },
      { deva: "प्रकृति-अविद्या-आदि-बन्ध-मोक्षः", iast: "prakṛti-avidyā-ādi-bandha-mokṣaḥ", gloss: "total liberation from Prakṛti, Avidyā, and subtle bondage" },
      { deva: "स्वरूप-सुख-अनुभूतिः च", iast: "svarūpa-sukha-anubhūtiḥ ca", gloss: "and unimpeded experience of innate spiritual bliss" },
      { deva: "मुक्तिः", iast: "muktiḥ", gloss: "is Liberation (Mokṣa)" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam, Muṇḍakabhāṣyam & Padārthasaṅgrahaḥ",
      granthaDeva: "ब्रह्मसूत्रभाष्यम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya / Śrī Padmanābha Sūri",
      locator: "BSB 4.4; MUN 6.5; PS 4.7"
    },
    related: ["bhakti", "aparokshajnana", "lingabhanga", "vimukta", "taratamya", "sukha"]
  }
];
