// Pillar 1B: Pramana, Epistemology, Logic & Dialectics Lakshanas
// Grounded in Sri Madhvacharya's Pramaanalakshanam, Kathalakshanam, Mithyatvanumanakhandanam,
// Vishnutattvavinirnaya, and Sri Jayatirtha's Pramanapaddhatih.

export const pramanaNyayaEntries = [
  {
    id: "lakshana",
    deva: "लक्षणम्",
    iast: "lakṣaṇam",
    stem: "lakṣaṇa",
    phoneticAliases: ["lakshana", "lakshanam", "laksana", "definition"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "यो धर्मो लक्ष्ये व्याप्त्या वर्तते, न वर्तते चान्यत्र, स धर्मो लक्षणमित्युच्यते ।",
    lakshanaIast: "yo dharmo lakṣye vyāptyā vartate, na vartate cānyatra, sa dharmo lakṣaṇam ity ucyate |",
    meaningShort: "A defining characteristic (Lakṣaṇa) is that unique property which pervades every instance of the target class (lakṣya) and occurs nowhere outside it.",
    meaningDeep: "Śrī Jayatīrtha opens the Pramāṇapaddhati with this foundational meta-definition of all definitions: a valid lakṣaṇa differentiates the definiendum from everything similar and dissimilar (sajātīya-vijātīya-vyāvṛtti), remaining free from the three logical faults of impossibility (asambhava), under-extension (avyāpti), and over-extension (ativyāpti).",
    padaccheda: [
      { deva: "यः धर्मः", iast: "yaḥ dharmaḥ", gloss: "that distinguishing property which" },
      { deva: "लक्ष्ये व्याप्त्या वर्तते", iast: "lakṣye vyāptyā vartate", gloss: "pervades the entire definiendum without exception" },
      { deva: "न वर्तते च अन्यत्र", iast: "na vartate ca anyatra", gloss: "and never occurs outside it" },
      { deva: "लक्षणम् इति उच्यते", iast: "lakṣaṇam iti ucyate", gloss: "is called a valid Definition (Lakṣaṇa)" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.2"
    },
    related: ["lakshya", "alakshana", "pramana", "vyapti"]
  },
  {
    id: "lakshya",
    deva: "लक्ष्यम्",
    iast: "lakṣyam",
    stem: "lakṣya",
    phoneticAliases: ["lakshya", "lakshyam", "definiendum"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "यावदन्यतो व्यावर्तनीयं, यावति चैकः शब्दो व्युत्पादनीयः, तदुच्यते लक्ष्यमिति ।",
    lakshanaIast: "yāvad anyato vyāvartanīyaṃ, yāvati caikaḥ śabdo vyutpādanīyaḥ, tad ucyate lakṣyam iti |",
    meaningShort: "The definiendum — the exact domain of entities to be demarcated from all others and grounded under a single technical term.",
    meaningDeep: "A lakṣaṇa serves two epistemological purposes: demarcating an entity from everything else (vyāvṛtti) and establishing exact linguistic usage (vyavahāra).",
    padaccheda: [
      { deva: "यावत् अन्यतः व्यावर्तनीयम्", iast: "yāvat anyataḥ vyāvartanīyam", gloss: "all that must be differentiated from non-instances" },
      { deva: "एकः शब्दः व्युत्पादनीयः", iast: "ekaḥ śabdaḥ vyutpādanīyaḥ", gloss: "where a single term's application is to be established" },
      { deva: "लक्ष्यम्", iast: "lakṣyam", gloss: "the target of definition" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.5"
    },
    related: ["lakshana", "alakshana"]
  },
  {
    id: "alakshana",
    deva: "अलक्षणम्",
    iast: "alakṣaṇam",
    stem: "alakṣaṇa",
    phoneticAliases: ["alakshana", "asambhava", "avyapti", "ativyapti", "fallacious-definition"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अन्यथाभूतं त्वलक्षणम् । तत् त्रिविधम् — असम्भवि, अव्यापकम्, अतिव्यापकं चेति ।",
    lakshanaIast: "anyathābhūtaṃ tv alakṣaṇam | tat trividham — asambhavi, avyāpakam, ativyāpakaṃ ceti |",
    meaningShort: "A defective definition — threefold: Asambhava (absent everywhere in the target), Avyāpti (present only in part), and Ativyāpti (spilling outside the target).",
    meaningDeep: "Jayatīrtha illustrates all three on 'cow': 'single-hoofed' is Asambhava (no cow has it); 'spotted' is Avyāpti (excludes solid-colored cows); 'horned' is Ativyāpti (includes buffaloes).",
    padaccheda: [
      { deva: "असम्भवि", iast: "asambhavi", gloss: "impossible (occurring in zero instances of lakṣya)" },
      { deva: "अव्यापकम्", iast: "avyāpakam", gloss: "under-pervasive / too narrow" },
      { deva: "अतिव्यापकम्", iast: "ativyāpakam", gloss: "over-pervasive / too broad" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.3"
    },
    related: ["lakshana", "lakshya"]
  },
  {
    id: "pramana",
    deva: "प्रमाणम्",
    iast: "pramāṇam",
    stem: "pramāṇa",
    phoneticAliases: ["pramana", "pramanam", "prama", "yathartham", "epistemology", "proof"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "यथार्थं प्रमाणम् । तद् द्विविधम् । केवलमनुप्रमाणं च ।",
    lakshanaIast: "yathārthaṃ pramāṇam | tad dvividham | kevalam anupramāṇaṃ ca |",
    meaningShort: "Pramāṇa is that which corresponds faithfully to its object as it truly is — twofold: valid knowledge itself (Kevala) and its means (Anupramāṇa).",
    meaningDeep: "Śrī Madhvācārya's two-word sūtra 'yathārthaṃ pramāṇam' (PRL 1.2) is a masterstroke of Sanskrit philosophical economy. By refusing to restrict Pramāṇa to 'novel cognition' (anadhigata), it effortlessly includes God's eternal omniscience (Īśvara-jñāna), valid memory (smṛti), and both truth-grasping awareness (kevala) and truth-yielding instruments (anupramāṇa).",
    padaccheda: [
      { deva: "यथा-अर्थम्", iast: "yathā-artham", gloss: "not overstepping or misrepresenting the real object" },
      { deva: "प्रमाणम्", iast: "pramāṇam", gloss: "valid cognition or valid epistemic means" },
      { deva: "केवलम् अनुप्रमाणम् च", iast: "kevalam anupramāṇam ca", gloss: "divided into direct valid knowledge and instrumental means" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.2"
    },
    related: ["kevalapramana", "anupramana", "smriti", "svatahpramanya", "lakshana"]
  },
  {
    id: "kevalapramana",
    deva: "केवलप्रमाणम्",
    iast: "kevalapramāṇam",
    stem: "kevalapramāṇa",
    phoneticAliases: ["kevalapramana", "kevala", "yatharthajnana"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "यथार्थज्ञानं केवलम् । केवलं चतुर्विधम् — ईशलक्ष्मीयोग्ययोगिभेदेन ।",
    lakshanaIast: "yathārthajñānaṃ kevalam | kevalaṃ caturvidham — īśalakṣmīyogyayogibhedena |",
    meaningShort: "Valid knowledge itself, directly illuminating its object — fourfold in hierarchy: the knowledge of Īśvara, Lakṣmī, Yogins, and Ayogins.",
    meaningDeep: "Jayatīrtha explains 'kevala' as that which directly apprehends the knowable object without needing a further cognitive step (sākṣāj-jñeya-viṣayīkāritvāt). The four tiers reflect intrinsic clarity, scope, and independence.",
    padaccheda: [
      { deva: "यथार्थ-ज्ञानम्", iast: "yathārtha-jñānam", gloss: "cognition faithful to reality" },
      { deva: "केवलम्", iast: "kevalam", gloss: "valid knowledge in its own right" },
      { deva: "ईश-लक्ष्मी-योगि-अयोगि-भेदेन", iast: "īśa-lakṣmī-yogi-ayogi-bhedena", gloss: "graded into the Lord's, Lakṣmī's, yogins', and non-yogins' cognition" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.2–3"
    },
    related: ["pramana", "anupramana", "ishvarajnana", "yogijnana"]
  },
  {
    id: "ishvarajnana",
    deva: "ईश्वरज्ञानम्",
    iast: "īśvarajñānam",
    stem: "īśvarajñāna",
    phoneticAliases: ["ishvarajnana", "sarvajna", "omniscience"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "तत्र सर्वार्थविषयकम् ईश्वरज्ञानम् । नियमेन यथार्थम् । तत्स्वरूपमनादिनित्यं स्वतन्त्रं निरतिशयस्पष्टं च ।",
    lakshanaIast: "tatra sarvārthaviṣayakam īśvarajñānam | niyamena yathārtham | tatsvarūpam anādinityaṃ svatantraṃ niratiśayaspaṣṭaṃ ca |",
    meaningShort: "The Lord's omniscience — encompassing every aspect and viśeṣa of Himself and all things, unerringly true, beginningless, independent, and supremely luminous.",
    meaningDeep: "In PRL 1.3 Madhvācārya states 'svaparagatākhilaviśeṣaviṣayam': Viṣṇu alone knows the totality of infinite attributes within Himself as well as every dependent entity without effort or mediation.",
    padaccheda: [
      { deva: "सर्व-अर्थ-विषयकम्", iast: "sarva-artha-viṣayakam", gloss: "cognizing every entity and aspect without remainder" },
      { deva: "नियमेन यथार्थम्", iast: "niyamena yathārtham", gloss: "invariably true" },
      { deva: "निरतिशय-स्पष्टम्", iast: "niratiśaya-spaṣṭam", gloss: "of unsurpassed luminosity and clarity" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणपद्धतिः / प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.3; PP 1.22"
    },
    related: ["kevalapramana", "paramatman", "svatantra"]
  },
  {
    id: "yogijnana",
    deva: "योगिज्ञानम्",
    iast: "yogijñānam",
    stem: "yogijñāna",
    phoneticAliases: ["yogijnana", "rijujnana", "tattvikajnana"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "योगप्रभावलब्धातिशयं योगिज्ञानम् । तत् त्रिविधम् — ऋजुयोगिज्ञानं, तात्त्विकयोगिज्ञानम्, अतात्त्विकयोगिज्ञानं चेति ।",
    lakshanaIast: "yogaprabhāvalabdhātiśayaṃ yogijñānam | tat trividham — ṛjuyogijñānaṃ, tāttvikayogijñānam, atāttvikayogijñānaṃ ceti |",
    meaningShort: "Exalted valid cognition heightened through yogic power — threefold across Ṛju-yogins, Tāttvika-devas (presiders over cosmic principles), and Atāttvika-yogins.",
    meaningDeep: "In Ṛjus, intrinsic svarūpa-jñāna is eternally true and expands steadily through meditation up to Mokṣa, where it remains forever undiminished.",
    padaccheda: [
      { deva: "योग-प्रभाव-लब्ध-अतिशयम्", iast: "yoga-prabhāva-labdha-atiśayam", gloss: "attaining extraordinary scope through yogic potency" },
      { deva: "ऋजु-तात्त्विक-अतात्त्विक", iast: "ṛju-tāttvika-atāttvika", gloss: "of Ṛjus, tattva-presiding deities, and other yogins" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणपद्धतिः / प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.4; PP 1.23"
    },
    related: ["kevalapramana", "riju"]
  },
  {
    id: "anupramana",
    deva: "अनुप्रमाणम्",
    iast: "anupramāṇam",
    stem: "anupramāṇa",
    phoneticAliases: ["anupramana", "karana", "means-of-knowledge"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "तत्साधनमनुप्रमाणम् । अनुप्रमाणं त्रिविधम् — प्रत्यक्षम् अनुमानम् आगम इति ।",
    lakshanaIast: "tatsādhanam anupramāṇam | anupramāṇaṃ trividham — pratyakṣam anumānam āgama iti |",
    meaningShort: "The instrumental means that produces valid knowledge — strictly threefold: Perception (Pratyakṣa), Inference (Anumāna), and Authoritative Testimony (Āgama).",
    meaningDeep: "All other proposed means of knowledge — Arthāpatti (presumption), Upamāna (comparison), Sambhava (inclusion), Pariśeṣa (elimination), and Anupalabdhi (non-apprehension) — are rigorously shown by Madhvācārya (PRL 1.5) to reduce to Pratyakṣa or Anumāna.",
    padaccheda: [
      { deva: "तत्-साधनम्", iast: "tat-sādhanam", gloss: "the instrument producing valid knowledge (kevalapramāṇa)" },
      { deva: "प्रत्यक्षम् अनुमानम् आगमः", iast: "pratyakṣam anumānam āgamaḥ", gloss: "perception, inference, and verbal/scriptural testimony" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.2, 1.5"
    },
    related: ["pramana", "pratyaksha", "anumana", "agama"]
  },
  {
    id: "pratyaksha",
    deva: "प्रत्यक्षम्",
    iast: "pratyakṣam",
    stem: "pratyakṣa",
    phoneticAliases: ["pratyaksha", "pratyaksa", "perception"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "निर्दोषार्थेन्द्रियसन्निकर्षः प्रत्यक्षम् । प्रत्यक्षं सप्तविधम् — साक्षिषडिन्द्रियभेदेन ।",
    lakshanaIast: "nirdoṣārthendriyasannikarṣaḥ pratyakṣam | pratyakṣaṃ saptavidham — sākṣiṣaḍindriyabhedena |",
    meaningShort: "Defect-free contact between a cognitive faculty and its object — sevenfold through the Witness-consciousness (Sākṣī) and the six cognitive organs (five outer senses plus manas).",
    meaningDeep: "By adding the qualifier 'nirdoṣa' (free of defects in object, medium, or organ — such as jaundice, extreme distance, or agitation), Madhvācārya excludes illusory sense-contact at the root.",
    padaccheda: [
      { deva: "निर्दोष", iast: "nirdoṣa", gloss: "free from epistemic defects" },
      { deva: "अर्थ-इन्द्रिय-सन्निकर्षः", iast: "artha-indriya-sannikarṣaḥ", gloss: "direct contact between object and cognitive sense" },
      { deva: "साक्षि-षट्-इन्द्रिय-भेदेन", iast: "sākṣi-ṣaṭ-indriya-bhedena", gloss: "sevenfold: Sākṣī, manas, and the five external senses" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.5, 1.9"
    },
    related: ["sakshi", "anupramana", "savikalpaka", "smriti"]
  },
  {
    id: "sakshi",
    deva: "साक्षी",
    iast: "sākṣī",
    stem: "sākṣin",
    phoneticAliases: ["sakshi", "saksi", "sakshin", "svarupendriya", "witness"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "तत्र प्रमातृस्वरूपेन्द्रियं साक्षीत्युच्यते । तस्य विषया आत्मस्वरूपं तद्धर्मा अविद्या मनस्तद्वृत्तयः सुखाद्याः कालोऽव्याकृताकाशश्चेत्याद्याः ।",
    lakshanaIast: "tatra pramātṛsvarūpendriyaṃ sākṣīty ucyate | tasya viṣayā ātmasvarūpaṃ taddharmā avidyā manastadvṛttayaḥ sukhādyāḥ kālo'vyākṛtākāśaś cetyādyāḥ |",
    meaningShort: "The intrinsic cognitive faculty identical with the knower's own conscious essence (svarūpendriya), which infallibly intuits the self, pleasure/pain, ignorance, time, space, and the validity of knowledge.",
    meaningDeep: "Sākṣī is the epistemological crown jewel of Dvaita Vedānta. Material organs like the mind can err, but who perceives 'I am happy', 'I did not know anything in deep sleep' (time + ignorance), or whether a cognition is valid? The knower's own infallible Svarūpendriya — Sākṣī — whose judgments are intrinsically self-validating (svataḥ-pramāṇa) and immune to skeptical regress.",
    padaccheda: [
      { deva: "प्रमातृ-स्वरूप-इन्द्रियम्", iast: "pramātṛ-svarūpa-indriyam", gloss: "the cognitive sense identical with the knower's own conscious self" },
      { deva: "साक्षी इति उच्यते", iast: "sākṣī iti ucyate", gloss: "is called the Witness (Sākṣī)" },
      { deva: "आत्म-स्वरूपम् ... कालः अव्याकृताकाशः", iast: "ātma-svarūpam ... kālaḥ avyākṛtākāśaḥ", gloss: "directly apprehends self, mental states, bliss/pain, avidyā, time, and unmanifest space" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "प्रमाणपद्धतिः / पदार्थसङ्ग्रहः",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "PP 1.34; PS Dravya 11"
    },
    related: ["pratyaksha", "svatahpramanya", "jeeva", "kala", "avidya"]
  },
  {
    id: "savikalpaka",
    deva: "सविकल्पकम्",
    iast: "savikalpakam",
    stem: "savikalpaka",
    phoneticAliases: ["savikalpaka", "nirvikalpaka", "determinate-perception"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "विशिष्टाकारगोचरं सविकल्पकम् । प्रत्यक्षादिजन्यं ज्ञानं सविकल्पकमेव, न तु निर्विकल्पकम्, मानाभावात् ।",
    lakshanaIast: "viśiṣṭākāragocaraṃ savikalpakam | pratyakṣādijanyaṃ jñānaṃ savikalpakam eva, na tu nirvikalpakam, mānābhāvāt |",
    meaningShort: "Determinate cognition grasping a qualified object with its features; Tattvavāda holds that all real perception is determinate (savikalpaka), rejecting featureless bare sensation.",
    meaningDeep: "Because every real entity inherently possesses features via Viśeṣa, there is no evidence for a pre-conceptual 'featureless' perception (nirvikalpaka) posited by Advaitins and Naiyāyikas.",
    padaccheda: [
      { deva: "विशिष्ट-आकार-गोचरम्", iast: "viśiṣṭa-ākāra-gocaram", gloss: "apprehending an object qualified by definite attributes" },
      { deva: "मान-अभावात्", iast: "māna-abhāvāt", gloss: "because no proof exists for indeterminate bare cognition" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "प्रमाणपद्धतिः / पदार्थसङ्ग्रहः",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "PP 1.41; PS 3.29"
    },
    related: ["pratyaksha", "vishesha", "vishishta"]
  },
  {
    id: "anumana",
    deva: "अनुमानम्",
    iast: "anumānam",
    stem: "anumāna",
    phoneticAliases: ["anumana", "anumanam", "upapatti", "inference"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "निर्दोषोपपत्तिरनुमानम् । व्याप्तिरुपपत्तिमूलम् ।",
    lakshanaIast: "nirdoṣopapattir anumānam | vyāptir upapattimūlam |",
    meaningShort: "Defect-free logical ground (upapatti / probans) rooted in invariable concomitance (vyāpti) is Inference (Anumāna).",
    meaningDeep: "Unlike rigid Nyāya rules demanding a mandatory five-step syllogism even when fewer steps suffice, Madhvācārya emphasizes epistemic substance over formalist pedantry: as many members (from 1 to 5) should be stated as are needed to convey defect-free vyāpti and pakṣadharmatā to the listener.",
    padaccheda: [
      { deva: "निर्दोष-उपपत्तिः", iast: "nirdoṣa-upapattiḥ", gloss: "flawless logical reason / probans" },
      { deva: "अनुमानम्", iast: "anumānam", gloss: "inference" },
      { deva: "व्याप्तिः उपपत्ति-मूलम्", iast: "vyāptiḥ upapatti-mūlam", gloss: "invariable concomitance is the foundation of logical reason" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.5, 1.7"
    },
    related: ["vyapti", "hetu", "paksha", "tarka", "anupramana"]
  },
  {
    id: "vyapti",
    deva: "व्याप्तिः",
    iast: "vyāptiḥ",
    stem: "vyāpti",
    phoneticAliases: ["vyapti", "sahacarya", "avinabhava", "concomitance"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "साहचर्यनियमो व्याप्तिः । साधनस्य साध्येन व्याप्तिरन्वयः, साध्याभावस्य साधनाभावेन व्याप्तिर्व्यतिरेकः ।",
    lakshanaIast: "sāhacaryaniyamo vyāptiḥ | sādhanasya sādhyena vyāptir anvayaḥ, sādhyābhāvasya sādhanābhāvena vyāptir vyatirekaḥ |",
    meaningShort: "The unconditional rule of invariable co-presence (sāhacarya-niyama) between the logical sign (hetu) and what is to be proved (sādhya).",
    meaningDeep: "Unlike Nyāya, which requires spatial co-location (sāmānādhikaraṇya) in the same locus — failing when we infer rain in the upper hills from a flooded river below — Dvaita defines Vyāpti broadly as unconditional regularity of relation (upapatti), whether co-located or across distinct loci (vyadhikaraṇa-vyāpti)!",
    padaccheda: [
      { deva: "साहचर्य-नियमः", iast: "sāhacarya-niyamaḥ", gloss: "invariable law of concomitant relation" },
      { deva: "अन्वयः", iast: "anvayaḥ", gloss: "positive concomitance (where there is smoke, there is fire)" },
      { deva: "व्यतिरेकः", iast: "vyatirekaḥ", gloss: "contrapositive concomitance (where there is no fire, there is no smoke)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Pramāṇapaddhatiḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "PP 2.21; PS 3.29"
    },
    related: ["anumana", "hetu", "drishtanta", "tarka"]
  },
  {
    id: "paksha",
    deva: "पक्षः",
    iast: "pakṣaḥ",
    stem: "pakṣa",
    phoneticAliases: ["paksha", "sapaksha", "vipaksha", "subject-of-inference"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "साध्यधर्मविशिष्टः पक्षः । साध्यसमानधर्मविशिष्टः सपक्षः । साध्यविपरीतधर्मविशिष्टः विपक्षः ।",
    lakshanaIast: "sādhyadharmaviśiṣṭaḥ pakṣaḥ | sādhyasamānadharmaviśiṣṭaḥ sapakṣaḥ | sādhyaviparītadharmaviśiṣṭaḥ vipakṣaḥ |",
    meaningShort: "The locus under investigation where the target property (sādhya) is sought to be established (e.g., the mountain in 'the mountain has fire').",
    meaningDeep: "In three crisp clauses at the end of Mithyātvānumānakhaṇḍanam (MTK 2), Madhvācārya defines all three inferential loci: Pakṣa (the subject under proof, e.g. mountain), Sapakṣa (a confirmed positive homologue, e.g. kitchen hearth), and Vipakṣa (a confirmed negative heterologue, e.g. deep lake).",
    padaccheda: [
      { deva: "साध्य-धर्म-विशिष्टः पक्षः", iast: "sādhya-dharma-viśiṣṭaḥ pakṣaḥ", gloss: "subject qualified by the property to be proved" },
      { deva: "सपक्षः", iast: "sapakṣaḥ", gloss: "homologue known to possess the target property" },
      { deva: "विपक्षः", iast: "vipakṣaḥ", gloss: "heterologue known to lack the target property" }
    ],
    source: {
      grantha: "Mithyātvānumānakhaṇḍanam",
      granthaDeva: "मिथ्यात्वानुमानखण्डनम्",
      author: "Śrī Madhvācārya",
      locator: "MTK 2"
    },
    related: ["pratijna", "hetu", "drishtanta", "anumana"]
  },
  {
    id: "pratijna",
    deva: "प्रतिज्ञा",
    iast: "pratijñā",
    stem: "pratijñā",
    phoneticAliases: ["pratijna", "pratigna", "thesis", "proposition"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "पक्षवचनं प्रतिज्ञा । यथा पर्वतोऽग्निमानिति ।",
    lakshanaIast: "pakṣavacanaṃ pratijñā | yathā parvato'gnimān iti |",
    meaningShort: "The formal statement of the thesis attributing the target property to the subject — e.g., 'The mountain possesses fire.'",
    meaningDeep: "Madhvācārya states 'पक्षवचनं प्रतिज्ञा' in two words (MTK 2), noting in Pramāṇalakṣaṇam (PRL 1.7) that when the subject is already contextually clear, even stating the hetu alone suffices without redundant repetition.",
    padaccheda: [
      { deva: "पक्ष-वचनम्", iast: "pakṣa-vacanam", gloss: "verbal articulation of the inferential subject and thesis" },
      { deva: "प्रतिज्ञा", iast: "pratijñā", gloss: "the Proposition" }
    ],
    source: {
      grantha: "Mithyātvānumānakhaṇḍanam & Pramāṇapaddhatiḥ",
      granthaDeva: "मिथ्यात्वानुमानखण्डनम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "MTK 2; PP 2.26"
    },
    related: ["paksha", "hetu", "drishtanta"]
  },
  {
    id: "hetu",
    deva: "हेतुः",
    iast: "hetuḥ",
    stem: "hetu",
    phoneticAliases: ["hetu", "linga", "sadhanam", "probans", "reason"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "लिङ्गं हेतुः । साधनत्वख्यापकविभक्त्यन्तं लिङ्गवचनं हेतुः — यथा धूमवत्त्वादिति ।",
    lakshanaIast: "liṅgaṃ hetuḥ | sādhanatvakhyāpakavibhaktyantaṃ liṅgavacanaṃ hetuḥ — yathā dhūmavattvād iti |",
    meaningShort: "The inferential mark (liṅga) or probans — and in syllogistic speech, its statement in the ablative/instrumental case ('because of smoke').",
    meaningDeep: "A genuine Hetu must be present in the pakṣa and invariably concomitant with the sādhya; otherwise it degenerates into a pseudo-reason (hetvābhāsa) such as Asiddha or Viruddha.",
    padaccheda: [
      { deva: "लिङ्गम्", iast: "liṅgam", gloss: "the probative sign or logical mark" },
      { deva: "हेतुः", iast: "hetuḥ", gloss: "the logical reason" }
    ],
    source: {
      grantha: "Mithyātvānumānakhaṇḍanam & Pramāṇapaddhatiḥ",
      granthaDeva: "मिथ्यात्वानुमानखण्डनम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "MTK 2; PP 2.26"
    },
    related: ["anumana", "vyapti", "paksha", "asiddhi"]
  },
  {
    id: "drishtanta",
    deva: "दृष्टान्तः",
    iast: "dṛṣṭāntaḥ",
    stem: "dṛṣṭānta",
    phoneticAliases: ["drishtanta", "drstanta", "udaharana", "nidarshana", "example"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "निदर्शनं दृष्टान्तः । व्याप्तिग्रहणस्थलं दृष्टान्तः — यथा महानस इति ।",
    lakshanaIast: "nidarśanaṃ dṛṣṭāntaḥ | vyāptigrahaṇasthalaṃ dṛṣṭāntaḥ — yathā mahānasa iti |",
    meaningShort: "The corroborative exemplar — the observed locus where invariable concomitance (vyāpti) between reason and target is empirically verified, such as the kitchen hearth.",
    meaningDeep: "Madhvācārya rejects Advaita's stock illusionist inferences ('the world is false because it is perceived, like shell-silver') for 'sādhya-vikala dṛṣṭānta' (MTK 1): even shell-silver lacks 'indeterminable falsity' since it is simply non-existent (asat) silver misprojected on a real shell!",
    padaccheda: [
      { deva: "निदर्शनम्", iast: "nidarśanam", gloss: "illustrative instance" },
      { deva: "व्याप्ति-ग्रहण-स्थलम्", iast: "vyāpti-grahaṇa-sthalam", gloss: "empirical locus where concomitance is grasped" }
    ],
    source: {
      grantha: "Mithyātvānumānakhaṇḍanam & Pramāṇapaddhatiḥ",
      granthaDeva: "मिथ्यात्वानुमानखण्डनम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "MTK 1–2; PP 2.26"
    },
    related: ["vyapti", "paksha", "hetu"]
  },
  {
    id: "tarka",
    deva: "तर्कः",
    iast: "tarkaḥ",
    stem: "tarka",
    phoneticAliases: ["tarka", "prasanga", "reductio", "counterfactual"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "कस्यचिद्धर्मस्याङ्गीकारेऽर्थान्तरस्यापादनं तर्कः ।",
    lakshanaIast: "kasyacid dharmasyāṅgīkāre'rthāntarasyāpādanaṃ tarkaḥ |",
    meaningShort: "Counterfactual reasoning (reductio ad absurdum) — demonstrating that assuming an opponent's premise inevitably entails an unacceptable consequence (aniṣṭāpādana).",
    meaningDeep: "In Pramāṇalakṣaṇam (PRL 1.6) and Pramāṇapaddhati (PP 2.15–16), Tarka is classified directly as a species of refutational inference (dūṣaṇānumāna) with five conditions, exposing fallacies like Ātmāśraya (self-dependence), Anyonyāśraya (circularity), Cakraka (vicious circle), Anavasthā (infinite regress), and Kalpanāgaurava (ontological bloat).",
    padaccheda: [
      { deva: "कस्यचित् धर्मस्य अङ्गीकारे", iast: "kasyacit dharmasya aṅgīkāre", gloss: "upon hypothetically conceding a proposed property" },
      { deva: "अर्थ-अन्तरस्य आपादनम्", iast: "artha-antarasya āpādanam", gloss: "deducing an undesired consequence" },
      { deva: "तर्कः", iast: "tarkaḥ", gloss: "counterfactual dialectic / reductio" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणपद्धतिः / प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.6; PP 2.16"
    },
    related: ["anumana", "vyapti", "vada"]
  },
  {
    id: "agama",
    deva: "आगमः",
    iast: "āgamaḥ",
    stem: "āgama",
    phoneticAliases: ["agama", "shabda", "sabda", "shruti", "scripture", "testimony"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "निर्दोषः शब्द आगमः । आगमो द्विविधः — अपौरुषेयः पौरुषेयश्चेति ।",
    lakshanaIast: "nirdoṣaḥ śabda āgamaḥ | āgamo dvividhaḥ — apauruṣeyaḥ pauruṣeyaś ceti |",
    secondaryLakshana: {
      deva: "ऋग्यजुःसामाथर्वाश्च भारतं पञ्चरात्रकम् । मूलरामायणं चैव सम्प्रोच्यन्ते सदागमाः ॥",
      iast: "ṛgyajuḥsāmātharvāś ca bhārataṃ pañcarātrakam | mūlarāmāyaṇaṃ caiva samprocyante sadāgamāḥ ||",
      translation: "The Ṛg, Yajur, Sāma, and Atharva Vedas, the Mahābhārata, Pañcarātra, and Mūlarāmāyaṇa (along with texts accordant with them) are declared to be Sadāgamas.",
      source: "Kathālakṣaṇam 9–10"
    },
    meaningShort: "Defect-free verbal testimony — twofold: Apauruṣeya (the unauthored eternal Vedas) and Pauruṣeya (trustworthy authored statements and scriptures).",
    meaningDeep: "For transcendent truths beyond sensory reach — such as Brahman's infinite attributes and the path to liberation — Sadāgama interpreted through the six determinative canons of purport (upakramādi-ṣaḍvidha-tātparyaliṅga) is the supreme pramāṇa.",
    padaccheda: [
      { deva: "निर्दोषः शब्दः", iast: "nirdoṣaḥ śabdaḥ", gloss: "verbal testimony free from speaker or interpretive defects" },
      { deva: "आगमः", iast: "āgamaḥ", gloss: "authoritative verbal/scriptural pramāṇa" },
      { deva: "अपौरुषेयः पौरुषेयः च", iast: "apauruṣeyaḥ pauruṣeyaḥ ca", gloss: "unauthored (Veda) and authored (āpta-vākya)" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणलक्षणम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.5; PP 3.7; KL 9"
    },
    related: ["apaurusheya", "anupramana", "tatparyalinga"]
  },
  {
    id: "apaurusheya",
    deva: "अपौरुषेयः",
    iast: "apauruṣeyaḥ",
    stem: "apauruṣeya",
    phoneticAliases: ["apaurusheya", "apauruseya", "veda", "unauthored"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वाक्ये पदानामानुपूर्वीविशेषस्य स्वतन्त्रपुरुषपूर्वकत्वाभावः अपौरुषेयत्वम् । अपौरुषेयो वेदः ।",
    lakshanaIast: "vākye padānām ānupūrvīviśeṣasya svatantrapuruṣapūrvakatvābhāvaḥ apauruṣeyatvam | apauruṣeyo vedaḥ |",
    meaningShort: "Unauthoredness — having a fixed eternal sequence of words (ānupūrvī) never invented by any independent author, revealed anew without alteration at every cosmic creation.",
    meaningDeep: "In Viṣṇutattvavinirṇaya and Pramāṇapaddhati (PP 3.7), Madhvācārya and Jayatīrtha establish that even Lord Viṣṇu does not 'compose' the Vedic word-order ex nihilo; out of supreme omniscience He manifests the exact eternal phonetic sequence (ānupūrvī) unchanged across kalpas, guaranteeing absolute freedom from authorial fallacy.",
    padaccheda: [
      { deva: "पदानाम् आनुपूर्वी-विशेषस्य", iast: "padānām ānupūrvī-viśeṣasya", gloss: "of the exact sequential ordering of words and accents" },
      { deva: "स्वतन्त्र-पुरुष-पूर्वकत्व-अभावः", iast: "svatantra-puruṣa-pūrvakatva-abhāvaḥ", gloss: "absence of arbitrary composition by an author" },
      { deva: "अपौरुषेयत्वम्", iast: "apauruṣeyatvam", gloss: "eternal unauthoredness (of the Veda)" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Viṣṇutattvavinirṇayaḥ",
      granthaDeva: "प्रमाणपद्धतिः / विष्णुतत्त्वविनिर्णयः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PP 3.7; VTN 1"
    },
    related: ["agama", "nitya", "varna"]
  },
  {
    id: "tatparyalinga",
    deva: "तात्पर्यलिङ्गम्",
    iast: "tātparyaliṅgam",
    stem: "tātparyaliṅga",
    phoneticAliases: ["tatparyalinga", "upakrama", "upasamhara", "hermeneutics"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "उपक्रमोपसंहारौ अभ्यासोऽपूर्वता फलम् । अर्थवादोपपत्ती च लिङ्गं तात्पर्यनिर्णये ॥",
    lakshanaIast: "upakramopasaṃhārau abhyāso'pūrvatā phalam | arthavādopapattī ca liṅgaṃ tātparyanirṇaye ||",
    meaningShort: "The sixfold hermeneutic canons for determining scriptural purport: Opening & Conclusion (harmony, with Upasaṃhāra prevailing in case of tension), Repetition, Novelty, Fruit, Eulogy, and Logical Coherence.",
    meaningDeep: "In Pramāṇalakṣaṇam (PRL 1.6) and Brahmasūtrabhāṣya, Madhvācārya treats these six canons as probative inferential marks (liṅgas) establishing that all Vedic passages converge on Viṣṇu's supremacy.",
    padaccheda: [
      { deva: "उपक्रम-उपसंहारौ", iast: "upakrama-upasaṃhārau", gloss: "1. harmony of opening and closing statements" },
      { deva: "अभ्यासः अपूर्वता फलम्", iast: "abhyāsaḥ apūrvatā phalam", gloss: "2. repetition, 3. epistemic novelty, 4. stated fruit" },
      { deva: "अर्थवाद-उपपत्ती", iast: "arthavāda-upapattī", gloss: "5. corroborative praise/censure, 6. logical reasoning" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Brahmasūtrabhāṣyam",
      granthaDeva: "प्रमाणलक्षणम् / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.6; BSB 1.1.4"
    },
    related: ["agama", "anumana"]
  },
  {
    id: "svatahpramanya",
    deva: "स्वतःप्रामाण्यम्",
    iast: "svataḥprāmāṇyam",
    stem: "svataḥprāmāṇya",
    phoneticAliases: ["svatahpramanya", "swatahpramanya", "paratah-apramanya", "self-validity"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "प्रमाणानां प्रामाण्यस्योत्पत्तौ ज्ञप्तौ च स्वतस्त्वम् । ज्ञानग्राहकसाक्षिग्राह्यत्वनैयत्यं ज्ञप्तौ स्वतस्त्वम् । अप्रामाण्यं तु परत एव ।",
    lakshanaIast: "pramāṇānāṃ prāmāṇyasyotpattau jñaptau ca svatastvam | jñānagrāhakasākṣigrāhyatvanaiyatyaṃ jñaptau svatastvam | aprāmāṇyaṃ tu parata eva |",
    meaningShort: "Intrinsic validity of knowledge: validity arises from the very causes that produce cognition and is apprehended directly by the Witness (Sākṣī) that grasps the cognition; invalidity alone comes from external defects.",
    meaningDeep: "If every cognition required a second inferential test to certify its truth (as Nyāya claims), that test would require a third test ad infinitum, paralyzing all human action. In Tattvavāda, Sākṣī naturally grasps both a cognition and its truth-claim unless blocked by a countervailing defect or sublation (parataḥ aprāmāṇyam).",
    padaccheda: [
      { deva: "उत्पत्तौ ज्ञप्तौ च स्वतस्त्वम्", iast: "utpattau jñaptau ca svatastvam", gloss: "intrinsic nature in both generation and apprehension of validity" },
      { deva: "ज्ञान-ग्राहक-साक्षि-ग्राह्यत्व", iast: "jñāna-grāhaka-sākṣi-grāhyatva", gloss: "grasped directly by the same Sākṣī that apprehends the cognition" },
      { deva: "अप्रामाण्यम् तु परतः", iast: "aprāmāṇyam tu parataḥ", gloss: "invalidity, however, arises and is known extrinsically (through defects)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Pramāṇapaddhatiḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "PP 3.18; PS 3.30"
    },
    related: ["sakshi", "pramana", "viparyaya"]
  },
  {
    id: "smriti",
    deva: "स्मृतिः",
    iast: "smṛtiḥ",
    stem: "smṛti",
    phoneticAliases: ["smriti", "smrti", "memory", "recollection"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "मानसप्रत्यक्षजा स्मृतिः । संस्कारद्वारा मनः स्मरणसाधनम् । यथार्थस्मृतिरपि प्रमाणम् ।",
    lakshanaIast: "mānasapratyakṣajā smṛtiḥ | saṃskāradvārā manaḥ smaraṇasādhanam | yathārthasmṛtir api pramāṇam |",
    meaningShort: "Accurate memory — generated by the mind (manas) awakened by latent experiential impressions (saṃskāras) — is an authentic Pramāṇa in Tattvavāda.",
    meaningDeep: "Most classical Indian schools denied Pramāṇa status to memory because it recalls what was already experienced. Madhvācārya boldly rehabilitates Smṛti (PRL 1.9, 1.18): when I accurately remember 'I experienced this yesterday', it faithfully matches its past-qualified object ('yathārthaṃ pramāṇam'), and without trusting memory, no inference or science could ever function!",
    padaccheda: [
      { deva: "मानस-प्रत्यक्ष-जा", iast: "mānasa-pratyakṣa-jā", gloss: "born of mental perception via latent traces (saṃskāra)" },
      { deva: "यथार्थ-स्मृतिः अपि प्रमाणम्", iast: "yathārtha-smṛtiḥ api pramāṇam", gloss: "faithful recollection is genuinely valid knowledge" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Padārthasaṅgrahaḥ",
      granthaDeva: "प्रमाणलक्षणम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "PRL 1.9, 1.18; PS 3.29"
    },
    related: ["pramana", "pratyaksha", "vasana"]
  },
  {
    id: "samshaya",
    deva: "संशयः",
    iast: "saṃśayaḥ",
    stem: "saṃśaya",
    phoneticAliases: ["samshaya", "samsaya", "doubt"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "एकस्मिन्धर्मिणि विरुद्धनानाकोटिकं ज्ञानं संशयः — यथा स्थाणुर्वा पुरुषो वेति ।",
    lakshanaIast: "ekasmin dharmiṇi viruddhanānākoṭikaṃ jñānaṃ saṃśayaḥ — yathā sthāṇur vā puruṣo veti |",
    meaningShort: "Doubt — an oscillating, non-valid cognition entertaining mutually incompatible alternatives regarding a single object ('Is that a post or a person?').",
    meaningDeep: "Excluded from Pramāṇa by the word 'yathārtham' (PRL 1.2), since reality is determinate whereas doubt wavers without settling on the object's true character.",
    padaccheda: [
      { deva: "एकस्मिन् धर्मिणि", iast: "ekasmin dharmiṇi", gloss: "regarding one and the same substratum" },
      { deva: "विरुद्ध-नाना-कोटिकम् ज्ञानम्", iast: "viruddha-nānā-koṭikam jñānam", gloss: "cognition wavering between incompatible alternatives" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.17, 1.21"
    },
    related: ["viparyaya", "pramana", "prashnika"]
  },
  {
    id: "viparyaya",
    deva: "विपर्ययः",
    iast: "viparyayaḥ",
    stem: "viparyaya",
    phoneticAliases: ["viparyaya", "bhrama", "mithyajnana", "error", "illusion"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अतस्मिंस्तद्बुद्धिर्विपर्ययः । अयथार्थज्ञानं भ्रम इति यावत् — यथेदं रजतमिति शुक्तौ ।",
    lakshanaIast: "atasmiṃs tadbuddhir viparyayaḥ | ayathārthajñānaṃ bhrama iti yāvat — yathedaṃ rajatam iti śuktau |",
    meaningShort: "Erroneous cognition (Bhrama) — determinately apprehending an object as what it is not, such as mistaking gleaming mother-of-pearl for silver.",
    meaningDeep: "Unlike doubt, Viparyaya is decisive yet false (ayathārtha), generated by sense-contact tainted by external or internal defects (doṣa-sahakāri-indriya).",
    padaccheda: [
      { deva: "अतस्मिन् तत्-बुद्धिः", iast: "atasmin tat-buddhiḥ", gloss: "cognizing 'that' in what is 'not-that'" },
      { deva: "अयथार्थ-ज्ञानम्", iast: "ayathārtha-jñānam", gloss: "cognition contrary to the object as it is" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.17, 1.32"
    },
    related: ["samshaya", "mithya", "pramana"]
  },
  {
    id: "arthapatti",
    deva: "अर्थापत्तिः",
    iast: "arthāpattiḥ",
    stem: "arthāpatti",
    phoneticAliases: ["arthapatti", "upamana", "presumption"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अर्थापत्त्युपमे अनुमाविशेषः । सम्भवपरिशेषावनुमा ।",
    lakshanaIast: "arthāpattyupame anumāviśeṣaḥ | sambhavapariśeṣāv anumā |",
    meaningShort: "Postulation from otherwise-inexplicable facts (Arthāpatti) and analogical comparison (Upamāna) — both shown by Madhvācārya to be special forms of Inference (Anumāna), not separate pramāṇas.",
    meaningDeep: "Seeing plump Devadatta never eat by day and concluding he eats at night relies directly on contrapositive vyāpti ('without eating, plumpness cannot persist') — hence Arthāpatti is pure Anumāna (PRL 1.5, 1.16).",
    padaccheda: [
      { deva: "अर्थापत्ति-उपमे", iast: "arthāpatti-upame", gloss: "presumption and comparison" },
      { deva: "अनुमा-विशेषः", iast: "anumā-viśeṣaḥ", gloss: "specific varieties of inference" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.5, 1.16"
    },
    related: ["anumana", "anupramana", "vyapti"]
  },
  {
    id: "katha",
    deva: "कथा",
    iast: "kathā",
    stem: "kathā",
    phoneticAliases: ["katha", "vada", "debate", "dialectic"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वादो जल्पो वितण्डेति त्रिविधा विदुषां कथा ॥",
    lakshanaIast: "vādo jalpo vitaṇḍeti trividhā viduṣāṃ kathā ||",
    meaningShort: "Structured philosophical discourse among scholars, divided into three distinct modes by motive and method: Vāda, Jalpa, and Vitaṇḍā.",
    meaningDeep: "Madhvācārya devotes an entire Sarvamūla monograph — Kathālakṣaṇam (drawn from the Brahmatarka) — to the ethics, referees, proof-order, and defeat-conditions of philosophical disputation.",
    padaccheda: [
      { deva: "वादः जल्पः वितण्डा इति", iast: "vādaḥ jalpaḥ vitaṇḍā iti", gloss: "truth-inquiry, competitive disputation, and refutational critique" },
      { deva: "त्रिविधा विदुषाम् कथा", iast: "trividhā viduṣām kathā", gloss: "the threefold philosophical discourse of the learned" }
    ],
    source: {
      grantha: "Kathālakṣaṇam",
      granthaDeva: "कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "KL 2"
    },
    related: ["vada", "jalpa", "vitanda", "prashnika"]
  },
  {
    id: "vada",
    deva: "वादः",
    iast: "vādaḥ",
    stem: "vāda",
    phoneticAliases: ["vada", "vaada", "tattvanirnaya", "truth-dialogue"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "तत्त्वनिर्णयमुद्दिश्य केवलं गुरुशिष्ययोः । कथाऽन्येषामपि सतां वादो वा समितेः शुभा ॥",
    lakshanaIast: "tattvanirṇayam uddiśya kevalaṃ guruśiṣyayoḥ | kathā'nyeṣām api satāṃ vādo vā samiteḥ śubhā ||",
    meaningShort: "Pure truth-seeking dialogue conducted solely to ascertain reality (tattva-nirṇaya), free of ego or rivalry, between teacher and disciple or among sincere seekers.",
    meaningDeep: "In Vāda, resolving one's misconception is celebrated as an auspicious gain rather than a humiliation (KL 17).",
    padaccheda: [
      { deva: "तत्त्व-निर्णयम् उद्दिश्य केवलम्", iast: "tattva-nirṇayam uddiśya kevalam", gloss: "aimed exclusively at the ascertainment of truth" },
      { deva: "गुरु-शिष्ययोः ... सताम्", iast: "guru-śiṣyayoḥ ... satām", gloss: "between guru and disciple or among virtuous scholars" }
    ],
    source: {
      grantha: "Kathālakṣaṇam",
      granthaDeva: "कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "KL 2–3"
    },
    related: ["katha", "jalpa", "vitanda", "tattva"]
  },
  {
    id: "jalpa",
    deva: "जल्पः",
    iast: "jalpaḥ",
    stem: "jalpa",
    phoneticAliases: ["jalpa", "competitive-debate"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "ख्यात्याद्यर्थं स्पर्धया वा सतां जल्प इतीर्यते ॥",
    lakshanaIast: "khyātyādyarthaṃ spardhayā vā satāṃ jalpa itīryate ||",
    meaningShort: "Competitive debate between learned scholars establishing rival theses, motivated by renown or scholarly contest (spardhā) under formal rules.",
    meaningDeep: "In Jalpa, both disputants must defend a positive thesis (svapakṣa-sādhana) and refute the opponent's thesis before qualified arbiters (prāśnikas).",
    padaccheda: [
      { deva: "ख्याति-आदि-अर्थम्", iast: "khyāti-ādi-artham", gloss: "for scholarly renown or victory" },
      { deva: "स्पर्धया वा सताम्", iast: "spardhayā vā satām", gloss: "conducted in spirit of contest among the learned" }
    ],
    source: {
      grantha: "Kathālakṣaṇam",
      granthaDeva: "कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "KL 3"
    },
    related: ["katha", "vada", "vitanda", "nigrahasthana"]
  },
  {
    id: "vitanda",
    deva: "वितण्डा",
    iast: "vitaṇḍā",
    stem: "vitaṇḍā",
    phoneticAliases: ["vitanda", "destructive-critique"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वितण्डा तु सतामन्यैस्तत्त्वमेषु निगूहितम् ॥",
    lakshanaIast: "vitaṇḍā tu satām anyais tattvam eṣu nigūhitam ||",
    meaningShort: "Purely refutational debate employed by the wise against dishonest or hostile sophists — demolishing the opponent's false position while withholding one's own sacred truth from unworthy ears.",
    meaningDeep: "Unlike Nyāya, which often disparaged Vitaṇḍā as mere caviling without a thesis, Madhvācārya legitimizes constructive Vitaṇḍā when confronting bad-faith opponents unfit to receive esoteric Tattva, demolishing their errors on their own premises ('parasiddhair dūṣaṇam' — PRL 1.19)!",
    padaccheda: [
      { deva: "सताम् अन्यैः", iast: "satām anyaiḥ", gloss: "waged by the wise against non-virtuous opponents" },
      { deva: "तत्त्वम् एषु निगूहितम्", iast: "tattvam eṣu nigūhitam", gloss: "keeping one's own positive truth concealed from the unworthy while refuting falsehood" }
    ],
    source: {
      grantha: "Kathālakṣaṇam",
      granthaDeva: "कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "KL 4"
    },
    related: ["katha", "vada", "jalpa", "tarka"]
  },
  {
    id: "prashnika",
    deva: "प्राश्निकः",
    iast: "prāśnikaḥ",
    stem: "prāśnika",
    phoneticAliases: ["prashnika", "sabhapati", "arbiter", "judge"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "रागद्वेषविहीनास्तु सर्वविद्याविशारदाः । प्राश्निका इति सम्प्रोक्ता विषमा एक एव वा ॥ अशेषसंशयच्छेत्ता निःसंशय उदारधीः ।",
    lakshanaIast: "rāgadveṣavihīnās tu sarvavidyāviśāradāḥ | prāśnikā iti samproktā viṣamā eka eva vā || aśeṣasaṃśayacchettā niḥsaṃśaya udāradhīḥ |",
    meaningShort: "The impartial debate arbiter — free of attachment and malice, versed in all sciences, decisive in cutting through every doubt, and devoted to Lord Viṣṇu.",
    meaningDeep: "Kathālakṣaṇam (KL 5–7) stipulates an odd number of arbiters (5, 3, or 1 consummate scholar) to prevent deadlocks, declaring 'viṣṇubhaktir hi sarveṣāṃ sadguṇānāṃ svalakṣaṇam' — devotion to Viṣṇu is the hallmark guaranteeing all noble virtues.",
    padaccheda: [
      { deva: "राग-द्वेष-विहीनाः", iast: "rāga-dveṣa-vihīnāḥ", gloss: "free from partiality and hostility" },
      { deva: "सर्व-विद्या-विशारदाः", iast: "sarva-vidyā-viśāradāḥ", gloss: "accomplished in all branches of learning" },
      { deva: "विषमाः एकः एव वा", iast: "viṣamāḥ ekaḥ eva vā", gloss: "an odd panel in number, or a single supreme judge" }
    ],
    source: {
      grantha: "Kathālakṣaṇam",
      granthaDeva: "कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "KL 5–7"
    },
    related: ["katha", "vada", "bhakti"]
  },
  {
    id: "nigrahasthana",
    deva: "निग्रहस्थानम्",
    iast: "nigrahasthānam",
    stem: "nigrahasthāna",
    phoneticAliases: ["nigrahasthana", "nigraha", "defeat-point"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "विरोधासङ्गतिन्यूनतूष्णीम्भावादिकैर्जितः । संवादानुक्तियुता निग्रहाः — नैव षट्कादन्यो निग्रह इष्यते ॥",
    lakshanaIast: "virodhāsaṅgatinyūnatūṣṇīmbhāvādikair jitaḥ | saṃvādāniktiyutā nigrahāḥ — naiva ṣaṭkād anyo nigraha iṣyate ||",
    meaningShort: "Formal grounds of defeat in debate — distilled by Madhvācārya from Nyāya's 22 down to a tight canonical hexad: Virodha (contradiction), Asaṅgati (irrelevance), Nyūna (deficiency), Adhika (redundancy), Saṃvāda (conceding the opponent's point), and Anukti/Tūṣṇīmbhāva (silence).",
    meaningDeep: "Notice also KL 23: 'skhalitatvādimātreṇa na tatrāpi parājayaḥ' — a mere slip of the tongue never counts as philosophical defeat in Madhvācārya's logic; only substantive failure of reason or evidence does!",
    padaccheda: [
      { deva: "विरोध-असङ्गति-न्यून-अधिक", iast: "virodha-asaṅgati-nyūna-adhika", gloss: "1. contradiction, 2. irrelevance, 3. omission, 4. redundancy" },
      { deva: "संवाद-अनुक्ति-युताः", iast: "saṃvāda-anukti-yutāḥ", gloss: "5. unintended concession, and 6. inability to reply (silence)" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Kathālakṣaṇam",
      granthaDeva: "प्रमाणलक्षणम् / कथालक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.8; KL 18–23"
    },
    related: ["katha", "apasiddhanta", "jati", "chala"]
  },
  {
    id: "apasiddhanta",
    deva: "अपसिद्धान्तः",
    iast: "apasiddhāntaḥ",
    stem: "apasiddhānta",
    phoneticAliases: ["apasiddhanta", "self-contradiction"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "पूर्वाचार्यैर्यत्प्रामाणिकतयाऽभ्युपगतं तद्विरुद्धाङ्गीकारोऽपसिद्धान्तः ।",
    lakshanaIast: "pūrvācāryair yat prāmāṇikatayā'bhyupagataṃ tadviruddhāṅgīkāro'pasiddhāntaḥ |",
    meaningShort: "Doctrinal self-contradiction — asserting a proposition that violates the foundational tenets accepted as authoritative by one's own philosophical school.",
    meaningDeep: "Classified under Svavacana-virodha (self-contradiction) in Pramāṇapaddhati (PP 2.37), since adopting a school's banner commits the speaker to its canonical axioms.",
    padaccheda: [
      { deva: "पूर्व-आचार्यैः अभ्युपगतम्", iast: "pūrva-ācāryaiḥ abhyupagatam", gloss: "accepted as authoritative by the founding masters of one's school" },
      { deva: "तत्-विरुद्ध-अङ्गीकारः", iast: "tat-viruddha-aṅgīkāraḥ", gloss: "admitting a claim incompatible with it" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 2.37"
    },
    related: ["nigrahasthana", "jati"]
  },
  {
    id: "jati",
    deva: "जातिः (दूषणाभासः)",
    iast: "jātiḥ",
    stem: "jāti",
    phoneticAliases: ["jati", "dushanabhasa", "futile-rejoinder"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "सिद्धमपि दूषणासमर्थमुत्तरं जातिः । स्ववचन एव व्याहतिर्जातिः ।",
    lakshanaIast: "siddham api dūṣaṇāsamartham uttaraṃ jātiḥ | svavacana eva vyāhatir jātiḥ |",
    meaningShort: "A specious, self-refuting rejoinder (futile cavil) that fails to overturn the opponent's argument because it undercuts itself by the very same logic.",
    meaningDeep: "Madhvācārya gives the classic example in PRL 1.9: an opponent claims 'No object of knowledge requires a pramāṇa!' — which immediately refutes itself, since that very claim would either require a pramāṇa or else fail to establish anything.",
    padaccheda: [
      { deva: "दूषण-असमर्थम् उत्तरम्", iast: "dūṣaṇa-asamartham uttaram", gloss: "a reply incapable of refuting the target thesis" },
      { deva: "स्व-वचने एव व्याहतिः", iast: "sva-vacane eva vyāhatiḥ", gloss: "self-nullification within one's own statement" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणलक्षणम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.9; PP 2.38, 2.65"
    },
    related: ["chala", "nigrahasthana"]
  },
  {
    id: "chala",
    deva: "छलम्",
    iast: "chalam",
    stem: "chala",
    phoneticAliases: ["chala", "equivocation", "quibble"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अभिप्रायविपरीताभिधेयकल्पनया दूषणाभिधानं छलम् । छलम् असङ्गतम् ।",
    lakshanaIast: "abhiprāyaviparītābhidheyakalpanayā dūṣaṇābhidhānaṃ chalam | chalam asaṅgatam |",
    meaningShort: "Deliberate equivocation — attacking a speaker's statement by twisting an ambiguous word into a sense unintended by the speaker.",
    meaningDeep: "For example, when someone says 'This boy has a navakambala (new blanket)' and the quibbler retorts 'False! He is poor, how could he own nava-kambalas (nine blankets)?' Madhvācārya subsumes Chala under Asaṅgati (irrelevance, PRL 1.9).",
    padaccheda: [
      { deva: "अभिप्राय-विपरीत-कल्पनया", iast: "abhiprāya-viparīta-kalpanayā", gloss: "by fabricating a meaning contrary to the speaker's clear intent" },
      { deva: "दूषण-अभिधानम्", iast: "dūṣaṇa-abhidhānam", gloss: "alleging a pseudo-refutation" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणलक्षणम् / प्रमाणपद्धतिः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.9; PP 2.63"
    },
    related: ["jati", "nigrahasthana"]
  },
  {
    id: "asiddhi",
    deva: "असिद्धिः",
    iast: "asiddhiḥ",
    stem: "asiddhi",
    phoneticAliases: ["asiddhi", "asiddha", "hetvabhasa", "unproved-reason"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "समुचितस्थले लिङ्गस्याप्रमितिरसिद्धिः । साध्याविशिष्टोऽसिद्धः ।",
    lakshanaIast: "samucitasthale liṅgasyāpramitir asiddhiḥ | sādhyāviśiṣṭo'siddhaḥ |",
    meaningShort: "Failure of the probans — when the alleged logical sign (hetu) is unestablished either in its concomitance (vyāpyatvāsiddha) or in the subject (pakṣadharmatāsiddha).",
    meaningDeep: "In Pramāṇapaddhati (PP 2.39, 2.97), Jayatīrtha reduces inferential fallacies cleanly into Asiddhi (unestablished probans) and Avyāpti/Viruddha (failure or inversion of concomitance).",
    padaccheda: [
      { deva: "समुचित-स्थले", iast: "samucita-sthale", gloss: "in the required locus (pakṣa or vyāpti)" },
      { deva: "लिङ्गस्य अप्रमितिः", iast: "liṅgasya apramitiḥ", gloss: "lack of valid cognition of the logical sign" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणपद्धतिः / प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.17; PP 2.39, 2.97"
    },
    related: ["hetu", "anumana", "vyapti"]
  }
];
