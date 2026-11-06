// Pillar 1A: Core Tattva, Ontology & Metaphysics Lakshanas
// Grounded in Sri Madhvacharya's Tattvasankhyanam, Tattvaviveka, Vishnutattvavinirnaya,
// Anuvyakhyana, Upadhikhandanam, and Sri Jayatirtha's Tattvasankhyana-tika.

export const tattvaOntologyEntries = [
  {
    id: "jeeva",
    deva: "जीवः",
    iast: "jīvaḥ",
    stem: "jīva",
    phoneticAliases: ["jeeva", "jiva", "jeevatvam", "jivatvam", "pranja", "prajna", "vyapara", "vyapaaravatvam", "soul", "atman"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "प्रज्ञापूर्वकव्यापारवत्त्वं जीवत्वम् ।",
    lakshanaIast: "prajñāpūrvakavyāpāravattvaṃ jīvatvam |",
    secondaryLakshana: {
      deva: "अहमित्येव यो वेद्यः स जीव इति कीर्तितः । स दुःखी स सुखी चैव स पात्रं बन्धमोक्षयोः ॥",
      iast: "aham ity eva yo vedyaḥ sa jīva iti kīrtitaḥ | sa duḥkhī sa sukhī caiva sa pātraṃ bandhamokṣayoḥ ||",
      translation: "He who is inwardly known directly as 'I' is declared to be the Jīva; he experiences sorrow and joy, and is the subject of bondage and liberation.",
      source: "Viṣṇutattvavinirṇayaḥ 1.104 (Paramaśruti cited by Śrī Madhvācārya)"
    },
    meaningShort: "Possessing purposeful activity preceded by conscious intelligence is the defining essence of the sentient soul (Jīva).",
    meaningDeep: "Unlike insentient matter (jaḍa), whose motion is mechanical, a sentient being acts through cognition, desire, and volitional effort (jñāna-icchā-prayatna). In Tattvavāda, every Jīva is eternally distinct from Paramātman and from all other Jīvas, atomic in measure, self-luminous as 'I' to its own Sākṣī, and exercises real yet God-dependent agency (parādhīna-kartṛtva). In supreme mahāyoga, Madhvācārya also derives 'Jīva' for Viṣṇu Himself ('viṣṇur jīva iti proktaḥ satataṃ prāṇadhāraṇāt' — VTN 1.81) as the constant sustainer of vital breath.",
    padaccheda: [
      { deva: "प्रज्ञा", iast: "prajñā", gloss: "conscious intelligence, cognitive awareness" },
      { deva: "पूर्वक", iast: "pūrvaka", gloss: "preceded and guided by" },
      { deva: "व्यापारवत्त्वम्", iast: "vyāpāravattvam", gloss: "possession of volitional activity or operation" },
      { deva: "जीवत्वम्", iast: "jīvatvam", gloss: "the defining nature of a living sentient soul" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Tattvavāda Lakṣaṇa Tradition",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "VTN 1.81, 1.104; PS 1.3"
    },
    related: ["paramatman", "sakshi", "cetana", "asvatantra", "pratibimba", "muktiyogya"]
  },
  {
    id: "tattva",
    deva: "तत्त्वम्",
    iast: "tattvam",
    stem: "tattva",
    phoneticAliases: ["tattva", "tatva", "tattvam", "tatvam", "reality", "anarompitam"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "तत्त्वम् अनारोपितम् । प्रमितिविषय इति यावत् ।",
    lakshanaIast: "tattvam anāropitam | pramitiviṣaya iti yāvat |",
    secondaryLakshana: {
      deva: "स्वतन्त्रमस्वतन्त्रं च द्विविधं तत्त्वमिष्यते ।",
      iast: "svatantram asvatantraṃ ca dvividhaṃ tattvam iṣyate |",
      translation: "Reality is accepted as twofold: the Independent (Svatantra) and the Dependent (Asvatantra).",
      source: "Tattvasaṅkhyānam 1"
    },
    meaningShort: "Reality (Tattva) is that which is unsuperimposed — equivalently, the object of valid knowledge.",
    meaningDeep: "Śrī Jayatīrtha opens the Tattvasaṅkhyāna-ṭīkā with this razor-sharp realist criterion: anything that is genuinely existent without being an illusory projection (like silver imagined on mother-of-pearl) is a Tattva, and therefore a true object of valid cognition (pramiti-viṣaya). Tattvavāda takes its very name from upholding the unsublatable reality of both the Independent Lord and the dependent cosmos.",
    padaccheda: [
      { deva: "तत्त्वम्", iast: "tattvam", gloss: "reality, true existent principle" },
      { deva: "अनारोपितम्", iast: "anāropitam", gloss: "unsuperimposed, not fabricated by illusion" },
      { deva: "प्रमिति-विषयः", iast: "pramiti-viṣayaḥ", gloss: "object of valid cognition" },
      { deva: "इति यावत्", iast: "iti yāvat", gloss: "that is to say, equivalently" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha (on Śrī Madhvācārya)",
      locator: "TSK 1"
    },
    related: ["svatantra", "asvatantra", "pramana", "satya", "prameya"]
  },
  {
    id: "svatantra",
    deva: "स्वतन्त्रम्",
    iast: "svatantram",
    stem: "svatantra",
    phoneticAliases: ["svatantra", "swatantra", "svatantram", "independent"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "स्वरूपप्रमितिप्रवृत्तिलक्षणसत्तात्रैविध्ये परानपेक्षं स्वतन्त्रम् ।",
    lakshanaIast: "svarūpapramitipravṛttilakṣaṇasattātraividhye parānapekṣaṃ svatantram |",
    secondaryLakshana: {
      deva: "स्वतन्त्रो भगवान् विष्णुः निर्दोषाखिलसद्गुणः ॥",
      iast: "svatantro bhagavān viṣṇuḥ nirdoṣākhilasadguṇaḥ ||",
      translation: "The Independent Reality is Lord Viṣṇu alone, free of all defects and replete with all auspicious attributes.",
      source: "Tattvavivekaḥ 1"
    },
    meaningShort: "That which requires no other being across the threefold order of existence — essence, cognition, and activity — is Svatantra (Independent).",
    meaningDeep: "The supreme ontological axis of Madhvācārya's philosophy is not spirit versus matter, nor real versus unreal, but Svatantra versus Paratantra. Only Bhagavān Viṣṇu possesses self-grounded essence (svarūpa), self-grounded knowledge (pramiti), and self-grounded dynamic power (pravṛtti) without reference to any other entity.",
    padaccheda: [
      { deva: "स्वरूप", iast: "svarūpa", gloss: "intrinsic essence or being" },
      { deva: "प्रमिति", iast: "pramiti", gloss: "valid cognition or awareness" },
      { deva: "प्रवृत्ति", iast: "pravṛtti", gloss: "activity or causal operation" },
      { deva: "लक्षण-सत्ता-त्रैविध्ये", iast: "lakṣaṇa-sattā-traividhye", gloss: "in the threefold mode of existence characterized thus" },
      { deva: "पर-अनपेक्षम्", iast: "para-anapekṣam", gloss: "not depending on any other" },
      { deva: "स्वतन्त्रम्", iast: "svatantram", gloss: "the Independent Reality" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha (on Śrī Madhvācārya)",
      locator: "TSK 1"
    },
    related: ["asvatantra", "paramatman", "tattva", "vishnu"]
  },
  {
    id: "asvatantra",
    deva: "अस्वतन्त्रम्",
    iast: "asvatantram",
    stem: "asvatantra",
    phoneticAliases: ["asvatantra", "aswatantra", "paratantra", "dependent"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "स्वरूपप्रमितिप्रवृत्तिलक्षणसत्तात्रैविध्ये परापेक्षम् अस्वतन्त्रम् ।",
    lakshanaIast: "svarūpapramitipravṛttilakṣaṇasattātraividhye parāpekṣam asvatantram |",
    secondaryLakshana: {
      deva: "द्रव्यं कर्म च कालश्च स्वभावो जीव एव च । यदनुग्रहतः सन्ति न सन्ति यदुपेक्षया ॥",
      iast: "dravyaṃ karma ca kālaś ca svabhāvo jīva eva ca | yadanugrahataḥ santi na santi yadupekṣayā ||",
      translation: "Substance, karma, time, innate nature, and the soul itself exist solely by His grace, and would cease to exist were He indifferent.",
      source: "Bhāgavata Purāṇa 2.10.12 (cited across Sarvamūla)"
    },
    meaningShort: "That which depends upon Another (Viṣṇu) for its essence, cognition, and activity is Asvatantra (Dependent Reality).",
    meaningDeep: "Dependence (paratantratva) in Madhvācārya's system never implies unreality. Even eternal entities — Lakṣmī, Jīvas, Vedas, Avyākṛtākāśa, Kāla, and Mūlaprakṛti — are 100% real yet ontologically sustained at every instant by the sovereign will of Viṣṇu.",
    padaccheda: [
      { deva: "सत्ता-त्रैविध्ये", iast: "sattā-traividhye", gloss: "in the threefold existence (essence, cognition, action)" },
      { deva: "पर-अपेक्षम्", iast: "para-apekṣam", gloss: "requiring the Supreme Other" },
      { deva: "अस्वतन्त्रम्", iast: "asvatantram", gloss: "the Dependent Reality (Paratantra)" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 1"
    },
    related: ["svatantra", "bhava", "abhava", "jeeva", "prakriti"]
  },
  {
    id: "paramatman",
    deva: "परमात्मा",
    iast: "paramātmā",
    stem: "paramātman",
    phoneticAliases: ["paramatma", "paramatman", "ishvara", "isvara", "hari", "brahman", "god"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "तत्र परमात्माऽनन्तगुणपरिपूर्णः । सृष्ट्याद्यष्टकर्ता । सर्वज्ञः । सर्वस्वतन्त्रः ।",
    lakshanaIast: "tatra paramātmā'nantaguṇaparipūrṇaḥ | sṛṣṭyādyaṣṭakartā | sarvajñaḥ | sarvasvatantraḥ |",
    secondaryLakshana: {
      deva: "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः । यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ॥",
      iast: "uttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ | yo lokatrayam āviśya bibharty avyaya īśvaraḥ ||",
      translation: "Supreme is the Other Person, declared as Paramātman — the imperishable Lord who pervades and sustains the three worlds.",
      source: "Bhagavadgītā 15.17 (cited in Māyāvādakhaṇḍanam)"
    },
    meaningShort: "Paramātman is the One Supreme Being replete with infinite auspicious attributes, author of the eight cosmic functions, omniscient, and wholly independent.",
    meaningDeep: "In Dvaita ontology, Paramātman (Nārāyaṇa) is utterly transcendent over both perishable matter (kṣara) and imperishable Lakṣmī/muktas (akṣara). His body is pure consciousness and bliss (cidānandaika-deha), free of any gap between substance and attribute through intrinsic Viśeṣas.",
    padaccheda: [
      { deva: "परमात्मा", iast: "paramātmā", gloss: "the Supreme Self, Lord Viṣṇu" },
      { deva: "अनन्त-गुण-परिपूर्णः", iast: "ananta-guṇa-paripūrṇaḥ", gloss: "completely full of infinite auspicious qualities" },
      { deva: "सृष्टि-आदि-अष्ट-कर्ता", iast: "sṛṣṭi-ādi-aṣṭa-kartā", gloss: "sole independent agent of creation and the eight cosmic acts" },
      { deva: "सर्व-स्वतन्त्रः", iast: "sarva-svatantraḥ", gloss: "absolutely independent in all respects" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS Dravya 1 (Paramātma-prakaraṇam)"
    },
    related: ["svatantra", "lakshmi", "jeeva", "vishesha", "narayana"]
  },
  {
    id: "lakshmi",
    deva: "लक्ष्मीः",
    iast: "lakṣmīḥ",
    stem: "lakṣmī",
    phoneticAliases: ["lakshmi", "rama", "shri", "sri", "indira", "nityamukta"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "परमात्मभिन्ना तन्मात्राधीना लक्ष्मीः । परमात्मवन्नित्यमुक्ता । देशकालाभ्यामेव परमात्मना समव्याप्ता ।",
    lakshanaIast: "paramātmabhinnā tanmātrādhīnā lakṣmīḥ | paramātmavan nityamuktā | deśakālābhyām eva paramātmanā samavyāptā |",
    secondaryLakshana: {
      deva: "दुःखस्पृष्टं तदस्पृष्टमिति द्वेधैव चेतनम् । नित्यादुःखा रमाऽन्ये तु स्पृष्टदुःखास्समस्तशः ॥",
      iast: "duḥkhaspṛṣṭaṃ tadaspṛṣṭam iti dvedhaiva cetanam | nityāduḥkhā ramā'nye tu spṛṣṭaduḥkhās samastaśaḥ ||",
      translation: "Sentient reality is twofold: untouched by sorrow and touched by sorrow. Ramā (Lakṣmī) is eternally untouched by sorrow; all others have been touched by sorrow.",
      source: "Tattvasaṅkhyānam 3"
    },
    meaningShort: "Lakṣmī (Ramā) is the eternally liberated consort of Viṣṇu — distinct from Him, dependent solely on Him, and co-pervasive with Him across all space and time.",
    meaningDeep: "In Madhvācārya's hierarchy (tāratamya), Śrī Lakṣmī occupies the unique ontological rank of 'Aduḥkhaspṛṣṭā' and 'Nityamuktā' among dependent sentient beings: never bound by prakṛti, devoid of any material body, presiding over unmanifest space and Mūlaprakṛti, yet dependent solely on Nārāyaṇa.",
    padaccheda: [
      { deva: "परमात्म-भिन्ना", iast: "paramātma-bhinnā", gloss: "eternally distinct from Paramātman" },
      { deva: "तत्-मात्र-अधीना", iast: "tat-mātra-adhīnā", gloss: "dependent exclusively upon Him alone" },
      { deva: "नित्य-मुक्ता", iast: "nitya-muktā", gloss: "eternally liberated, never subject to bondage" },
      { deva: "सम-व्याप्ता", iast: "sama-vyāptā", gloss: "co-pervasive across space and time (though surpassed in infinite guṇas)" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvasaṅkhyānam",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "TSK 3; PS Dravya 2"
    },
    related: ["paramatman", "aduhkhasprishta", "cetana", "prakriti", "akshara"]
  },
  {
    id: "bhava",
    deva: "भावः",
    iast: "bhāvaḥ",
    stem: "bhāva",
    phoneticAliases: ["bhava", "bhaava", "positive-entity", "existent"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "प्रथमप्रतीतौ ‘अस्ति’ इत्युपलभ्यते यः स भावः ।",
    lakshanaIast: "prathamapratītau 'asti' ity upalabhyate yaḥ sa bhāvaḥ |",
    meaningShort: "That which is apprehended in primary, immediate cognition as 'it is' (asti) is a Bhāva (positive entity).",
    meaningDeep: "Rather than circularly defining positive being as the negation of non-being, Jayatīrtha grounds Bhāva phenomenologically in first-order cognition: when awareness encounters an entity and directly registers 'it exists' without prior reference to a counterpositive (pratiyogin), that entity is Bhāva — comprising both Cetana (sentient) and Acetana (insentient) reals.",
    padaccheda: [
      { deva: "प्रथम-प्रतीतौ", iast: "prathama-pratītau", gloss: "in the initial, unmediated cognition" },
      { deva: "अस्ति इति", iast: "asti iti", gloss: "in the affirmative form 'it exists'" },
      { deva: "उपलभ्यते यः", iast: "upalabhyate yaḥ", gloss: "that which is cognized" },
      { deva: "सः भावः", iast: "saḥ bhāvaḥ", gloss: "that is a positive reality (Bhāva)" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 1–2"
    },
    related: ["abhava", "cetana", "acetana", "tattva"]
  },
  {
    id: "abhava",
    deva: "अभावः",
    iast: "abhāvaḥ",
    stem: "abhāva",
    phoneticAliases: ["abhava", "abhaava", "negation", "absence", "non-existence"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "यश्च प्रथमोपलब्धौ ‘नास्ति’ इति प्रतीयते स अभावः । प्राक्प्रध्वंससदात्वेन त्रिविधोऽभाव इष्यते ।",
    lakshanaIast: "yaś ca prathamopalabdhau 'nāsti' iti pratīyate sa abhāvaḥ | prākpradhvaṃsasadātvena trividho'bhāva iṣyate |",
    meaningShort: "That which is cognized in initial apprehension as 'it is not' (nāsti) is Abhāva (real absence), which is threefold: prior, posterior, and eternal.",
    meaningDeep: "Against schools that dismiss absence as a mere figure of speech for the bare floor, Madhvācārya and Jayatīrtha defend Abhāva as an objective dependent category apprehended as 'there is no pot here'. Dvaita accepts Prāgabhāva, Pradhvaṃsābhāva, and Sadābhāva, while identifying mutual difference (anyonyābhāva / bheda) with the very essence (svarūpa) of the entity itself.",
    padaccheda: [
      { deva: "प्रथम-उपलब्धौ", iast: "prathama-upalabdhau", gloss: "in primary apprehension" },
      { deva: "नास्ति इति", iast: "nāsti iti", gloss: "as 'it is not'" },
      { deva: "प्राक्-प्रध्वंस-सदात्वेन", iast: "prāk-pradhvaṃsa-sadātvena", gloss: "as prior, destructional, and perpetual absence" },
      { deva: "त्रिविधः अभावः", iast: "trividhaḥ abhāvaḥ", gloss: "threefold negation" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam & Ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "TSK 2"
    },
    related: ["bhava", "pragabhava", "pradhvamsabhava", "sadabhava", "bheda"]
  },
  {
    id: "pragabhava",
    deva: "प्रागभावः",
    iast: "prāgabhāvaḥ",
    stem: "prāgabhāva",
    phoneticAliases: ["pragabhava", "prior-absence"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "उत्तरैकावधिरभावः प्रागभावः । प्रतियोग्युत्पत्तेः प्रागेवास्ति, उत्पन्ने तु नास्ति ।",
    lakshanaIast: "uttaraikāvadhir abhāvaḥ prāgabhāvaḥ | pratiyogyutpatteḥ prāg evāsti, utpanne tu nāsti |",
    meaningShort: "Absence bounded solely at its later limit — beginningless, existing prior to the production of its counterpositive and ceasing once it arises.",
    meaningDeep: "Before a clay pot is fashioned on the wheel, its prior non-existence (prāgabhāva) truly characterizes the clay; the moment the pot comes into being, that prāgabhāva terminates.",
    padaccheda: [
      { deva: "उत्तर-एक-अवधिः", iast: "uttara-eka-avadhiḥ", gloss: "having a limit only at the subsequent end" },
      { deva: "अभावः", iast: "abhāvaḥ", gloss: "absence" },
      { deva: "प्रतियोगि-उत्पत्तेः प्राक्", iast: "pratiyogi-utpatteḥ prāk", gloss: "prior to the origination of the counterpositive object" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 2"
    },
    related: ["abhava", "pradhvamsabhava", "sadabhava"]
  },
  {
    id: "pradhvamsabhava",
    deva: "प्रध्वंसाभावः",
    iast: "pradhvaṃsābhāvaḥ",
    stem: "pradhvaṃsābhāva",
    phoneticAliases: ["pradhvamsabhava", "dhvamsa", "posterior-absence", "destruction"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "पूर्वैकावधिरभावः प्रध्वंसाभावः । प्रतियोगिप्रध्वंसानन्तरमेवाभावः, न तु प्रागस्ति ।",
    lakshanaIast: "pūrvaikāvadhir abhāvaḥ pradhvaṃsābhāvaḥ | pratiyogipradhvaṃsānantaram evābhāvaḥ, na tu prāg asti |",
    meaningShort: "Absence bounded solely at its earlier limit — originating upon the destruction of its counterpositive and enduring without end.",
    meaningDeep: "When a pot is shattered by a mallet, its posterior absence (pradhvaṃsābhāva) begins at that exact instant (pūrva-avadhi) and never reverts, distinguishing destruction from mere concealment.",
    padaccheda: [
      { deva: "पूर्व-एक-अवधिः", iast: "pūrva-eka-avadhiḥ", gloss: "having a boundary only at its beginning" },
      { deva: "प्रतियोगि-प्रध्वंस-अनन्तरम्", iast: "pratiyogi-pradhvaṃsa-anantaram", gloss: "immediately following the destruction of the object" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 2"
    },
    related: ["abhava", "pragabhava", "sadabhava"]
  },
  {
    id: "sadabhava",
    deva: "सदाभावः",
    iast: "sadābhāvaḥ",
    stem: "sadābhāva",
    phoneticAliases: ["sadabhava", "atyantabhava", "eternal-absence"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "अवधिशून्योऽभावः सदाभावः । त्रैकालिकसंसर्गाभावोऽत्यन्ताभाव इति यावत् ।",
    lakshanaIast: "avadhiśūnyo'bhāvaḥ sadābhāvaḥ | traikālikasaṃsargābhāvo'tyantābhāva iti yāvat |",
    meaningShort: "Limitless, perpetual absence across past, present, and future — such as the absolute absence of a hare's horn or color in the wind.",
    meaningDeep: "Madhvācārya terms eternal relational absence 'Sadābhāva' (TSK 2). Crucially, Tattvavāda holds that even utter non-entities like a hare's horn (śaśaviṣāṇa) can serve as the counterpositive of valid negative judgment ('a hare's horn does not exist'), refuting Advaita's claim that illusion is 'neither real nor unreal'.",
    padaccheda: [
      { deva: "अवधि-शून्यः", iast: "avadhi-śūnyaḥ", gloss: "devoid of beginning or end limits" },
      { deva: "सदा-अभावः", iast: "sadā-abhāvaḥ", gloss: "perpetual absence across all three times" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam & Ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "TSK 2"
    },
    related: ["abhava", "asat", "mithya"]
  },
  {
    id: "cetana",
    deva: "चेतनम्",
    iast: "cetanam",
    stem: "cetana",
    phoneticAliases: ["cetana", "chetana", "cetanatvam", "chetanatvam", "sentient", "conscious"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "चितिविशिष्टं चेतनम् । ज्ञानाश्रयत्वं चेतनत्वम् ।",
    lakshanaIast: "citiviśiṣṭaṃ cetanam | jñānāśrayatvaṃ cetanatvam |",
    secondaryLakshana: {
      deva: "दुःखस्पृष्टं तदस्पृष्टमिति द्वेधैव चेतनम् ।",
      iast: "duḥkhaspṛṣṭaṃ tadaspṛṣṭam iti dvedhaiva cetanam |",
      translation: "Dependent sentient reality is strictly twofold: that which has been touched by sorrow and that which is untouched by sorrow.",
      source: "Tattvasaṅkhyānam 3"
    },
    meaningShort: "That which is endowed with consciousness — being a true locus of awareness (jñāna-āśraya) — is Cetana (sentient reality).",
    meaningDeep: "Unlike material instruments such as the mind (manas) or senses, which undergo modifications without themselves knowing anything, a Cetana possesses intrinsic self-aware consciousness (svarūpa-jñāna) and volition.",
    padaccheda: [
      { deva: "चिति-विशिष्टम्", iast: "citi-viśiṣṭam", gloss: "endowed with intrinsic consciousness" },
      { deva: "ज्ञान-आश्रयत्वम्", iast: "jñāna-āśrayatvam", gloss: "being the substratum/subject of knowledge" },
      { deva: "चेतनत्वम्", iast: "cetanatvam", gloss: "sentience" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam & Ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "TSK 2–3"
    },
    related: ["acetana", "jeeva", "lakshmi", "paramatman"]
  },
  {
    id: "acetana",
    deva: "अचेतनम्",
    iast: "acetanam",
    stem: "acetana",
    phoneticAliases: ["acetana", "achetana", "jada", "insentient", "matter"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "चितिशून्यम् अचेतनम् । नित्यानित्यविभागेन त्रिधैवाचेतनं मतम् ॥",
    lakshanaIast: "citiśūnyam acetanam | nityānityavibhāgena tridhaivācetanaṃ matam ||",
    meaningShort: "That which is devoid of consciousness is Acetana (insentient reality), classified into three: eternal, non-eternal, and eternal-cum-non-eternal.",
    meaningDeep: "Madhvācārya classifies insentient reality with remarkable precision: (1) Nitya (eternally unalterable — the Vedas, 51 varṇas, and unmanifest space), (2) Nityānitya (eternal in subtle root yet changing in phases — Purāṇas, Kāla, and Prakṛti), and (3) Anitya (produced cosmic evolutes from Mahat down to the Brahmāṇḍa).",
    padaccheda: [
      { deva: "चिति-शून्यम्", iast: "citi-śūnyam", gloss: "devoid of self-awareness" },
      { deva: "नित्य-अनित्य-विभागेन", iast: "nitya-anitya-vibhāgena", gloss: "by division into eternal, non-eternal, and mixed" },
      { deva: "त्रिधा एव", iast: "tridhā eva", gloss: "strictly threefold" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "TSK 7–8"
    },
    related: ["cetana", "nitya", "nityanitya", "prakriti", "kala"]
  },
  {
    id: "aduhkhasprishta",
    deva: "अदुःखस्पृष्टम्",
    iast: "aduḥkhaspṛṣṭam",
    stem: "aduḥkhaspṛṣṭa",
    phoneticAliases: ["aduhkhasprishta", "adukhasprushta", "untouched-by-sorrow"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "कदापि दुःखासम्बद्धं तदस्पृष्टम् । नित्यादुःखा रमा ।",
    lakshanaIast: "kadāpi duḥkhāsambaddhaṃ tadaspṛṣṭam | nityāduḥkhā ramā |",
    meaningShort: "The dependent sentient principle that is never, at any point in time, touched by sorrow — exclusively Goddess Ramā (Lakṣmī).",
    meaningDeep: "While liberated souls become free of sorrow after mokṣa, they experienced saṃsāra in the past (duḥkhaspṛṣṭa). Ramā alone among dependent beings has never known bondage, ignorance, or suffering across beginningless time.",
    padaccheda: [
      { deva: "कदापि", iast: "kadāpi", gloss: "at any time whatsoever" },
      { deva: "दुःख-असम्बद्धम्", iast: "duḥkha-asambaddham", gloss: "unconnected with sorrow" },
      { deva: "नित्य-अदुःखा रमा", iast: "nitya-aduḥkhā ramā", gloss: "Ramā is eternally free from sorrow" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam & Ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "TSK 3"
    },
    related: ["lakshmi", "duhkhasprishta", "vimukta"]
  },
  {
    id: "duhkhasprishta",
    deva: "दुःखस्पृष्टम्",
    iast: "duḥkhaspṛṣṭam",
    stem: "duḥkhaspṛṣṭa",
    phoneticAliases: ["duhkhasprishta", "dukhasprushta", "spৃষ্টduhkha"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "कदाचिद्दुःखसम्बद्धम् एव दुःखस्पृष्टम् । स्पृष्टदुःखा विमुक्ताश्च दुःखसंस्था इति द्विधा ॥",
    lakshanaIast: "kadācid duḥkhasambaddham eva duḥkhaspṛṣṭam | spṛṣṭaduḥkhā vimuktāś ca duḥkhasaṃsthā iti dvidhā ||",
    meaningShort: "Sentient souls that have experienced sorrow at some time — comprising both those already liberated (Vimukta) and those still in saṃsāra (Duḥkhasaṃstha).",
    meaningDeep: "Jayatīrtha clarifies 'kadācit' (at some point): liberated souls have no sorrow now, yet belong to this class because they once traversed saṃsāra prior to liberation, distinguishing all Jīvas from Nityamuktā Lakṣmī and Svatantra Viṣṇu.",
    padaccheda: [
      { deva: "कदाचित्", iast: "kadācit", gloss: "at some time (past or present)" },
      { deva: "दुःख-सम्बद्धम्", iast: "duḥkha-sambaddham", gloss: "associated with sorrow" },
      { deva: "विमुक्ताः च दुःखसंस्थाः", iast: "vimuktāḥ ca duḥkhasaṃsthāḥ", gloss: "divided into the liberated and those still abiding in sorrow" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam & Ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "TSK 3–4"
    },
    related: ["aduhkhasprishta", "vimukta", "muktiyogya", "jeeva"]
  },
  {
    id: "muktiyogya",
    deva: "मुक्तियोग्यः",
    iast: "muktiyogyaḥ",
    stem: "muktiyogya",
    phoneticAliases: ["muktiyogya", "sattvika-jiva", "liberatable"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "देवर्षिपितृपनरा इति मुक्तास्तु पञ्चधा । एवं विमुक्तियोग्याश्च ॥",
    lakshanaIast: "devarṣipitṛpanarā iti muktās tu pañcadhā | evaṃ vimuktiyogyāś ca ||",
    meaningShort: "Souls intrinsically fit by their eternal svarūpa-yogyatā to attain Aparokṣajñāna and liberation — fivefold: Devas, Ṛṣis, Pitṛs, Cakravartins, and Uttama-manuṣyas.",
    meaningDeep: "Madhvācārya's doctrine of Svarūpa-traividhya holds that souls possess distinct, uncreated constitutional natures (sāttvika, rājasa, tāmasa). Muktiyogyas have pure knowledge and bliss as their deepest core, unveiled when ignorance is dissolved through bhakti and divine grace.",
    padaccheda: [
      { deva: "देव-ऋषि-पितृ-प-नराः", iast: "deva-ṛṣi-pitṛ-pa-narāḥ", gloss: "gods, sages, ancestral lords, emperors ('pa'), and noble humans" },
      { deva: "पञ्चधा", iast: "pañcadhā", gloss: "of five gradations" },
      { deva: "विमुक्ति-योग्याः", iast: "vimukti-yogyāḥ", gloss: "souls constitutionally worthy of liberation" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "TSK 4–5"
    },
    related: ["jeeva", "nityasamsarin", "tamoyogya", "riju", "moksha"]
  },
  {
    id: "nityasamsarin",
    deva: "नित्यसंसारी",
    iast: "nityasaṃsārī",
    stem: "nityasaṃsārin",
    phoneticAliases: ["nityasamsari", "nityasamsarin", "rajasa-jiva", "nityavarta"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "नित्यं सुखदुःखमिश्रा नित्यसंसारिणः । सर्वदा स्वर्गभूनिरयचारिणः ।",
    lakshanaIast: "nityaṃ sukhaduḥkhamiśrā nityasaṃsāriṇaḥ | sarvadā svargabhūnirayacāriṇaḥ |",
    meaningShort: "Souls of mixed rājasa nature whose intrinsic constitution blends pleasure and pain, perpetually revolving through heaven, earth, and purgatory.",
    meaningDeep: "In Tattvaviveka (TV 7) Madhvācārya calls them 'Nityāvartāḥ' (ever-revolving middle souls). Because their deepest svarūpa is neither purely blissful nor purely dark, their moral trajectory perpetually oscillates across cosmic cycles.",
    padaccheda: [
      { deva: "नित्यम्", iast: "nityam", gloss: "perpetually" },
      { deva: "सुख-दुःख-मिश्राः", iast: "sukha-duḥkha-miśrāḥ", gloss: "having mixed joy and sorrow in their very nature" },
      { deva: "स्वर्ग-भू-निरय-चारिणः", iast: "svarga-bhū-niraya-cāriṇaḥ", gloss: "transmigrating through celestial, terrestrial, and subterranean realms" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvavivekaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वविवेकः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "TV 7; PS Dravya 3"
    },
    related: ["muktiyogya", "tamoyogya", "jeeva"]
  },
  {
    id: "tamoyogya",
    deva: "तमोयोग्यः",
    iast: "tamoyogyaḥ",
    stem: "tamoyogya",
    phoneticAliases: ["tamoyogya", "muktyayogya", "andhatamas", "tamasa-jiva"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "दैत्यरक्षःपिशाचकाः मर्त्याधमाश्चतुर्धैव तमोयोग्याः प्रकीर्तिताः ॥",
    lakshanaIast: "daityarakṣaḥpiśācakāḥ martyādhamāś caturdhaiva tamoyogyāḥ prakīrtitāḥ ||",
    meaningShort: "Souls constitutionally inclined toward implacable hatred of the Divine (dveṣa), classified into four: Daityas, Rākṣasas, Piśācas, and the lowest of mortals.",
    meaningDeep: "Grounded in Bhagavadgītā 16.19–20 ('tān ahaṃ dviṣataḥ krūrān... māम् aprāpyaiva kaunteya tato yānty adhamāṃ gatim'), Tattvavāda divides Tamoyogyas into those still roaming saṃsāra (sṛtisaṃsthāḥ) and those who have reached Andhatamas after full maturation of their innate malice.",
    padaccheda: [
      { deva: "दैत्य-रक्षः-पिशाचकाः", iast: "daitya-rakṣaḥ-piśācakāḥ", gloss: "demons, fiends, and malevolent spirits" },
      { deva: "मर्त्य-अधमाः", iast: "martya-adhamāḥ", gloss: "the vilest among mortals" },
      { deva: "चतुर्धा एव", iast: "caturdhā eva", gloss: "fourfold" },
      { deva: "तमो-योग्याः", iast: "tamo-yogyāḥ", gloss: "fit for blinding darkness (Andhatamas)" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "TSK 6–7"
    },
    related: ["muktiyogya", "nityasamsarin", "jeeva"]
  },
  {
    id: "riju",
    deva: "ऋजुः",
    iast: "ṛjuḥ",
    stem: "ṛju",
    phoneticAliases: ["riju", "ruju", "rijuyogi", "brahmatvayogya"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "ऋजवो नाम ब्रह्मत्वयोग्या जीवाः । योगिज्ञानम् ऋजूनामनादिनित्यम् ।",
    lakshanaIast: "ṛjavo nāma brahmatvayogyā jīvāḥ | yogijñānam ṛjūnām anādinityam |",
    meaningShort: "The supreme class of exalted souls eligible to attain the cosmic office of Caturmukha Brahmā and Mukhyaprāṇa (Vāyu).",
    meaningDeep: "Called 'Ṛju' (the Straight/Upright Ones) because they never deviate into false understanding even for an instant, their intrinsic svarūpa-jñāna is beginningless, unerring, and progressively unfolds across a hundred Brahmā-kalpas of spotless sādhana until liberation.",
    padaccheda: [
      { deva: "ऋजवः नाम", iast: "ṛjavaḥ nāma", gloss: "those designated as the 'Ṛjus' (perfectly upright)" },
      { deva: "ब्रह्मत्व-योग्याः जीवाः", iast: "brahmatva-yogyāḥ jīvāḥ", gloss: "souls qualified for the post of Caturmukha Brahmā" },
      { deva: "अनादि-नित्यम्", iast: "anādi-nityam", gloss: "having beginningless, eternal intrinsic knowledge" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇam",
      granthaDeva: "प्रमाणपद्धतिः / प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PRL 1.4; PP 1.23"
    },
    related: ["yogijnana", "muktiyogya", "taratamya", "prana"]
  },
  {
    id: "vishesha",
    deva: "विशेषः",
    iast: "viśeṣaḥ",
    stem: "viśeṣa",
    phoneticAliases: ["vishesha", "visesha", "visesa", "differentiator"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "भेदाभावेऽपि भेदव्यवहारनिर्वाहका अनन्ता एव विशेषाः । स्वनिर्वाहकाश्च ।",
    lakshanaIast: "bhedābhāve'pi bhedavyavahāranirvāhakā anantā eva viśeṣāḥ | svanirvāhakāś ca |",
    secondaryLakshana: {
      deva: "भेदहीने त्वपर्यायशब्दान्तरनियामकः । विशेषो नाम कथितः सोऽस्ति वस्तुष्वशेषतः ॥",
      iast: "bhedahīne tv aparyāyaśabdāntaraniyāmakaḥ | viśeṣo nāma kathitaḥ so'sti vastuṣv aśeṣataḥ ||",
      translation: "That potency which regulates non-synonymous distinct expressions in an undivided entity free of internal parts is called Viśeṣa; it abides in all entities whatsoever.",
      source: "Anuvyākhyānam (Śrī Madhvācārya)"
    },
    meaningShort: "The intrinsic self-linking potency in every entity that enables valid distinction-usage (such as 'Brahman's bliss' or 'the pot's existence') even where there is zero ontological separation.",
    meaningDeep: "Viśeṣa is one of Madhvācārya's most celebrated contributions to world metaphysics. Vaiśeṣika posited an external glue called Samavāya (inherence), inviting an infinite regress of glues. Madhvācārya replaces Samavāya with Viśeṣa, which is self-mediating (svanirvāhaka): it explains how Viṣṇu has infinite distinct attributes without being composite, and stops infinite regress at the first step.",
    padaccheda: [
      { deva: "भेद-अभावे अपि", iast: "bheda-abhāve api", gloss: "even where real ontological separation is absent" },
      { deva: "भेद-व्यवहार-निर्वाहकाः", iast: "bheda-vyavahāra-nirvāhakāḥ", gloss: "enablers of valid conceptual and linguistic distinction" },
      { deva: "स्व-निर्वाहकाः", iast: "sva-nirvāhakāḥ", gloss: "self-explanatory / self-mediating (preventing infinite regress)" }
    ],
    source: {
      grantha: "Anuvyākhyānam & Padārthasaṅgrahaḥ",
      granthaDeva: "अनुव्याख्यानम् / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "PS Sāmānya-Viśeṣa 5"
    },
    related: ["bheda", "samavaya-nirasa", "paramatman", "padartha"]
  },
  {
    id: "bheda",
    deva: "भेदः",
    iast: "bhedaḥ",
    stem: "bheda",
    phoneticAliases: ["bheda", "bhedah", "svarupabheda", "difference", "duality"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "धर्मिणः स्वरूपमेव भेदः । भावाभावस्वरूपत्वान्नान्योन्याभावता पृथक् ।",
    lakshanaIast: "dharmiṇaḥ svarūpam eva bhedaḥ | bhāvābhāvasvarūpatvān nānyonyābhāvatā pṛthak |",
    meaningShort: "Difference (Bheda) is not an external relation tacked onto things — it is the very intrinsic essence (svarūpa) of the entity itself.",
    meaningDeep: "Advaita dialecticians (like Śrīharṣa and Citsukha) attacked 'difference' by arguing: if difference is separate from A and B, what differentiates A from its difference? Madhvācārya cuts the Gordian knot with 'dharmi-svarūpa-bheda': to cognize an entity A is already to cognize A as distinct from the universe, mediated by A's intrinsic Viśeṣa.",
    padaccheda: [
      { deva: "धर्मिणः", iast: "dharmiṇaḥ", gloss: "of the substratum / entity itself" },
      { deva: "स्वरूपम् एव", iast: "svarūpam eva", gloss: "its very own nature alone" },
      { deva: "भेदः", iast: "bhedaḥ", gloss: "constitutes difference (mutual non-identity)" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Tattvavivekaḥ",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः / तत्त्वविवेकः",
      author: "Śrī Madhvācārya",
      locator: "TV 3; VTN 1"
    },
    related: ["pancabheda", "vishesha", "tattva"]
  },
  {
    id: "pancabheda",
    deva: "पञ्चभेदः",
    iast: "pañcabhedaḥ",
    stem: "pañcabheda",
    phoneticAliases: ["pancabheda", "panchabheda", "fivefold-difference", "prapancha"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "जीवेशयोर्भेदः, जीवानां परस्परं भेदः, जडेशयोर्भेदः, जडानां परस्परं भेदः, जडजीवयोर्भेदः — एते पञ्चभेदा अनादिनित्या मुक्तावप्यनुस्यूताः ॥",
    lakshanaIast: "jīveśayor bhedaḥ, jīvānāṃ parasparaṃ bhedaḥ, jaḍeśayor bhedaḥ, jaḍānāṃ parasparaṃ bhedaḥ, jaḍajīvayor bhedaḥ — ete pañcabhedā anādinityā muktāv apy anusyūtāḥ ||",
    secondaryLakshana: {
      deva: "प्रकृष्टः पञ्चविधो भेदो प्रपञ्चः ।",
      iast: "prakṛṣṭaḥ pañcavidho bhedo prapañcaḥ |",
      translation: "The cosmos is called 'Prapañca' because it embodies the eminent fivefold difference.",
      source: "Viṣṇutattvavinirṇayaḥ (Nirukti of Prapañca)"
    },
    meaningShort: "The five eternal, beginningless ontological distinctions that structure all reality — persisting unbroken even in final liberation (Mokṣa).",
    meaningDeep: "The five differences are: (1) Jīva and Īśvara, (2) Jīva and Jīva, (3) Jaḍa (matter) and Īśvara, (4) Jaḍa and Jaḍa, and (5) Jaḍa and Jīva. Madhvācārya derives the very word 'Prapañca' (universe) as 'prakṛṣṭaḥ pañcavidho bhedaḥ' — the grand fivefold differentiation.",
    padaccheda: [
      { deva: "जीव-ईशयोः भेदः", iast: "jīva-īśayoḥ bhedaḥ", gloss: "1. difference between soul and God" },
      { deva: "जीवानाम् परस्परम्", iast: "jīvānām parasparam", gloss: "2. mutual difference among souls" },
      { deva: "जड-ईशयोः", iast: "jaḍa-īśayoḥ", gloss: "3. difference between matter and God" },
      { deva: "जडानाम् परस्परम्", iast: "jaḍānām parasparam", gloss: "4. mutual difference among material entities" },
      { deva: "जड-जीवयोः", iast: "jaḍa-jīvayoḥ", gloss: "5. difference between matter and soul" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "VTN 1; PS 4.5.4"
    },
    related: ["bheda", "jeeva", "paramatman", "acetana", "moksha"]
  },
  {
    id: "pratibimba",
    deva: "प्रतिबिम्बः",
    iast: "pratibimbaḥ",
    stem: "pratibimba",
    phoneticAliases: ["pratibimba", "bimba", "bimbapratibimba", "reflection"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "प्रतिबिम्बस्तु बिम्बाविनाभूतस्तत्सदृशः । परमात्मव्यतिरिक्ताः सर्वेऽपि चेतनाः परमात्मप्रतिबिम्बा नित्याः ॥",
    lakshanaIast: "pratibimbas tu bimbāvinābhūtas tatsadṛśaḥ | paramātmavyatiriktāḥ sarve'pi cetanāḥ paramātmapratibimbā nityāḥ ||",
    meaningShort: "A Pratibimba (reflection-entity) is that which cannot exist apart from its Archetype (Bimba) and bears Dependent Similarity to It.",
    meaningDeep: "Unlike a mirror reflection that vanishes when the mirror breaks, the Jīva is a 'nirupādhika' or 'svarūpopādhika' eternal Pratibimba of Viṣṇu (Bimba). In Tattvavāda, Bimba-Pratibimba-bhāva signifies two truths simultaneously: ontological dependence (tad-adhīnatva) and finite similarity in consciousness and bliss (tat-sādṛśya), never illusion or identity.",
    padaccheda: [
      { deva: "प्रतिबिम्बः", iast: "pratibimbaḥ", gloss: "ontological reflection, dependent counterpart" },
      { deva: "बिम्ब-अविनाभूतः", iast: "bimba-avinābhūtaḥ", gloss: "inseparably dependent upon the Original (Bimba)" },
      { deva: "तत्-सदृशः", iast: "tat-sadṛśaḥ", gloss: "bearing real, proportionate similarity to Him" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Brahmasūtrabhāṣyam",
      granthaDeva: "पदार्थसङ्ग्रहः / ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "BSB 2.3.50 ('ābhāsa eva ca'); PS Dravya 20"
    },
    related: ["bimba", "jeeva", "sadrishya", "upadhi", "paramatman"]
  },
  {
    id: "bimba",
    deva: "बिम्बम्",
    iast: "bimbam",
    stem: "bimba",
    phoneticAliases: ["bimba", "bimbam", "bimbamurti", "archetype"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "आत्मानं प्रतिबिम्बत्वे ध्यायन् बिम्बं जनार्दनम् । बिम्बरूपं च प्राज्ञरूपमिति सम्प्रदायविदः ॥",
    lakshanaIast: "ātmānaṃ pratibimbatve dhyāyan bimbaṃ janārdanam | bimbarūpaṃ ca prājñarūpam iti sampradāyavidaḥ ||",
    meaningShort: "The Original Sovereign Archetype — the indwelling form of Lord Viṣṇu within each soul's heart upon whom the Jīva's existence, awareness, and bliss depend.",
    meaningDeep: "Direct realization of one's own Bimba-mūrti (the specific indwelling form of Nārāyaṇa proportioned to the soul's innate capacity) is the culmination of meditation (upāsanā) and the immediate gateway to liberation (aparokṣajñāna).",
    padaccheda: [
      { deva: "आत्मानम् प्रतिबिम्बत्वे", iast: "ātmānam pratibimbatve", gloss: "contemplating oneself as the dependent reflection" },
      { deva: "बिम्बम् जनार्दनम्", iast: "bimbam janārdanam", gloss: "and Janārdana (Viṣṇu) as the sovereign Original" }
    ],
    source: {
      grantha: "Yatipraṇavakalpaḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "यतिप्रणवकल्पः / पदार्थसङ्ग्रहः",
      author: "Śrī Madhvācārya",
      locator: "YPK 25; PS 4.5.3"
    },
    related: ["pratibimba", "aparokshajnana", "paramatman", "upasana"]
  },
  {
    id: "upadhi",
    deva: "उपाधिः",
    iast: "upādhiḥ",
    stem: "upādhi",
    phoneticAliases: ["upadhi", "upaadhi", "svarupopadhi", "bahyopadhi"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "विद्यमानस्य भेदस्य ज्ञापको नैव कारकः । उपाधिर्दृष्टपूर्वो हि खेऽपि देशान्तरस्य सः ॥",
    lakshanaIast: "vidyamānasya bhedasya jñāpako naiva kārakaḥ | upādhir dṛṣṭapūrvo hi khe'pi deśāntarasya saḥ ||",
    meaningShort: "An Upādhi (conditioning medium) is strictly a revealer (jñāpaka) of pre-existing difference — never its creator (kāraka).",
    meaningDeep: "In Upādhikhaṇḍanam, Madhvācārya refutes the claim that one undivided Brahman becomes bound souls through limiting adjuncts (like pot-walls dividing space). Even a pot only demarcates already-distinct regions of space; likewise, every Jīva's own constitution serves as an eternal Svarūpopādhi manifesting its intrinsic distinctness as Viṣṇu's Pratibimba.",
    padaccheda: [
      { deva: "विद्यमानस्य भेदस्य", iast: "vidyamānasya bhedasya", gloss: "of an already-existing ontological difference" },
      { deva: "ज्ञापकः", iast: "jñāpakaḥ", gloss: "manifestor / indicator" },
      { deva: "न एव कारकः", iast: "na eva kārakaḥ", gloss: "never the producer or fabricator" }
    ],
    source: {
      grantha: "Upādhikhaṇḍanam",
      granthaDeva: "उपाधिखण्डनम्",
      author: "Śrī Madhvācārya",
      locator: "UK 4–5"
    },
    related: ["pratibimba", "bheda", "jeeva"]
  },
  {
    id: "shakti",
    deva: "शक्तिः",
    iast: "śaktiḥ",
    stem: "śakti",
    phoneticAliases: ["shakti", "sakti", "acintyashakti", "sahajashakti", "potency"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "पदार्थगतमतीन्द्रियं कार्यानुमेयं सामर्थ्यं शक्तिः । अचिन्त्यशक्तिर्लक्ष्मीश आधेया शक्तिरन्यगता ।",
    lakshanaIast: "padārthagatam atīndriyaṃ kāryānumeyaṃ sāmarthyaṃ śaktiḥ | acintyaśaktir lakṣmīśa ādheyā śaktir anyagata |",
    meaningShort: "Latent causal potency inherent in a substance — supersensible in itself and inferred from its effects — recognized as an independent Padārtha.",
    meaningDeep: "Dvaita recognizes four grades of Śakti: (1) Acintya-śakti (wondrous, inscrutable sovereign power in Viṣṇu that reconciles seeming paradoxes), (2) Ādheya-śakti (imparted sacral potency, as when consecration instills divine presence in an icon), (3) Sahaja-śakti (natural causal capacity, as fire's power to burn, which can be suspended by mantras), and (4) Pada-śakti (significative power of words).",
    padaccheda: [
      { deva: "पदार्थ-गतम्", iast: "padārtha-gatam", gloss: "residing within a substance/entity" },
      { deva: "अतीन्द्रियम्", iast: "atīndriyam", gloss: "beyond ordinary sense-contact" },
      { deva: "कार्य-अनुमेयम् सामर्थ्यम्", iast: "kārya-anumeyam sāmarthyam", gloss: "efficacy inferred from the production of effects" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Madhvasiddhāntasāraḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / मध्वसिद्धान्तसारः",
      author: "Śrī Padmanābha Sūri",
      locator: "PS Padārtha 8"
    },
    related: ["padartha", "paramatman", "vishesha"]
  },
  {
    id: "sadrishya",
    deva: "सादृश्यम्",
    iast: "sādṛśyam",
    stem: "sādṛśya",
    phoneticAliases: ["sadrishya", "sadrsya", "similarity", "resemblance"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "तद्भिन्नत्वे सति तद्गतभूयोधर्मवत्त्वप्रयोजकोऽतिरिक्तः पदार्थः सादृश्यम् । प्रतिव्यक्ति भिन्नम् ।",
    lakshanaIast: "tadbhinnatve sati tadgatabhūyodharmavattvaprayojako'tiriktaḥ padārthaḥ sādṛśyam | prativyakti bhinnam |",
    meaningShort: "Objective similarity — an irreducible ontological category distinct from universals (jāti), unique in each correlate.",
    meaningDeep: "Because Tattvavāda rejects Nyāya's single shared universal (sāmānya/jāti) inhering identically across many individuals, it elevates Sādṛśya (resemblance) to a distinct Padārtha. My cow resembles your cow without sharing one numerical 'cowness', and the Jīva bears finite Sādṛśya to Brahman without sharing identity.",
    padaccheda: [
      { deva: "तत्-भिन्नत्वे सति", iast: "tat-bhinnatve sati", gloss: "while being distinct from that correlate" },
      { deva: "अतिरिक्तः पदार्थः", iast: "atiriktaḥ padārthaḥ", gloss: "a distinct irreducible ontological category" },
      { deva: "प्रतिव्यक्ति भिन्नम्", iast: "prativyakti bhinnam", gloss: "individuated in each particular substratum" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Nyāyasudhā",
      granthaDeva: "पदार्थसङ्ग्रहः / न्यायसुधा",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "PS Padārtha 9"
    },
    related: ["padartha", "pratibimba", "samanya"]
  },
  {
    id: "vishishta",
    deva: "विशिष्टम्",
    iast: "viśiṣṭam",
    stem: "viśiṣṭa",
    phoneticAliases: ["vishishta", "visista", "qualified-whole"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "विशेषणसम्बन्धाद्वातादवस्थ्यापन्नो धर्मी विशिष्टम् । शुद्धांशतः सभेदाभेदम् ।",
    lakshanaIast: "viśeṣaṇasambandhād avātādavasthyāpanno dharmī viśiṣṭam | śuddhāṃśataḥ sabhedābhedam |",
    meaningShort: "The qualified whole (e.g., 'man-with-staff' or 'clay-shaped-as-pot') as a fresh state of the substratum arising from contact with a qualifier.",
    meaningDeep: "When a person picks up a staff (daṇḍin), 'the staff-bearer' is recognized as a real qualified state (Viśiṣṭa) having identity-cum-difference (saviseṣābheda / bhedābheda) with the bare person when the qualifier is transient.",
    padaccheda: [
      { deva: "विशेषण-सम्बन्धात्", iast: "viśeṣaṇa-sambandhāt", gloss: "through relation with a qualifying attribute" },
      { deva: "धर्मी विशिष्टम्", iast: "dharmī viśiṣṭam", gloss: "the substratum in its qualified state" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvavivekaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वविवेकः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "TV 12; PS Padārtha 6"
    },
    related: ["vishesha", "amshi", "padartha"]
  },
  {
    id: "amshi",
    deva: "अंशी",
    iast: "aṃśī",
    stem: "aṃśin",
    phoneticAliases: ["amshi", "amsi", "amsha", "whole-and-part"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "अंशविशिष्टः अंशी । सवेंऽशिनोऽवयवैरत्यन्ताभिन्नाः सभेदाभेदा वा ।",
    lakshanaIast: "aṃśaviśiṣṭaḥ aṃśī | sarve'ṃśino'vayavair atyantābhinnāḥ sabhedābhedā vā |",
    meaningShort: "The integral Whole possessing parts or aspects (aṃśas), recognized as one of the ten fundamental Padārthas.",
    meaningDeep: "In Paramātman, every avatāra and limb is 'svarūpāṃśa' — completely identical in plenitude (pūrṇa) with the Mūlarūpa via Viśeṣa. In relation to Jīvas, they are called 'vibhinnāṃśa' — distinct finite reflections dependent on the Whole.",
    padaccheda: [
      { deva: "अंश-विशिष्टः", iast: "aṃśa-viśiṣṭaḥ", gloss: "constituted with integral aspects or parts" },
      { deva: "अंशी", iast: "aṃśī", gloss: "the Whole" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvavivekaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वविवेकः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "TV 12; PS Padārtha 7"
    },
    related: ["vishishta", "vishesha", "pratibimba"]
  },
  {
    id: "samavaya-nirasa",
    deva: "समवायनिरासः",
    iast: "samavāyanirāsaḥ",
    stem: "samavāya",
    phoneticAliases: ["samavaya", "inherence", "anavastha"],
    pillar: "lakshana",
    domain: "Padārtha & Metaphysics",
    lakshanaDeva: "यावद्द्रव्यभाविनां गुणक्रियाजातीनां गुण्यादिभिरत्यन्ताभेद एव । समवायस्तु अनवस्थाग्रस्तत्वान्निरस्तः ।",
    lakshanaIast: "yāvaddravyabhāvināṃ guṇakriyājātīnāṃ guṇyādibhir atyantābheda eva | samavāyas tu anavasthāgrastatvān nirastaḥ |",
    meaningShort: "Rejection of external inherence (Samavāya): co-lasting qualities and essences are ontologically identical with their substance, differentiated conceptually by Viśeṣa.",
    meaningDeep: "If an external relation R (samavāya) is needed to link quality Q to substance S, what links R to S and Q? Without self-linking Viśeṣa, Samavāya collapses into vicious infinite regress (anavasthā). Co-extensive attributes (yāvad-dravya-bhāvin) are identical with the substance; transient attributes stand in bhedābheda.",
    padaccheda: [
      { deva: "यावत्-द्रव्य-भाविनाम्", iast: "yāvat-dravya-bhāvinām", gloss: "of qualities lasting as long as the substance endures" },
      { deva: "अत्यन्त-अभेदः एव", iast: "atyanta-abhedaḥ eva", gloss: "complete ontological non-separation" },
      { deva: "अनवस्था-ग्रस्तत्वात्", iast: "anavasthā-grastatvāt", gloss: "because external inherence suffers from infinite regress" }
    ],
    source: {
      grantha: "Padārthasaṅgrahaḥ & Tattvavivekaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः / तत्त्वविवेकः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "TV 10; PS 2.28"
    },
    related: ["vishesha", "guna", "dravya"]
  },
  {
    id: "satya",
    deva: "सत्यम्",
    iast: "satyam",
    stem: "satya",
    phoneticAliases: ["satya", "satyam", "real", "truth"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "कालादिनाऽबाध्यं प्रमितिविषयभूतं सत्यम् । नासतो विद्यते भावो नाभावो विद्यते सतः ॥",
    lakshanaIast: "kālādinā'bādhyaṃ pramitiviṣayabhūtaṃ satyam | nāsato vidyate bhāvo nābhāvo vidyate sataḥ ||",
    meaningShort: "That which exists objectively at some time and place as the unsublated object of valid knowledge — never reducible to illusion.",
    meaningDeep: "In Dvaita realism (Vādāvalī & Viṣṇutattvavinirṇaya), impermanence (anityatva) must never be conflated with falsity (mithyātva). A pot that exists today and breaks tomorrow was genuinely real at that time and place; even waking consciousness cannot sublate the fact that it existed.",
    padaccheda: [
      { deva: "काल-आदिना अबाध्यम्", iast: "kāla-ādinā abādhyam", gloss: "uncontradicted with respect to its actual locus in time and space" },
      { deva: "प्रमिति-विषय-भूतम्", iast: "pramiti-viṣaya-bhūtam", gloss: "verified by valid cognition" },
      { deva: "सत्यम्", iast: "satyam", gloss: "the Real" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Vādāvalī",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः / वादावली",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "VTN 1; BG 2.16"
    },
    related: ["tattva", "mithya", "asat", "pramana"]
  },
  {
    id: "mithya",
    deva: "मिथ्या",
    iast: "mithyā",
    stem: "mithyā",
    phoneticAliases: ["mithya", "anirvacaniya", "illusion", "anyathakhyati"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "असदेव रजतं प्रत्यक्षाभासतामियात् । सदसद्वैलक्षण्यरूपम् अनिर्वचनीयं न प्रमाणागोचरः ॥",
    lakshanaIast: "asad eva rajataṃ pratyakṣābhāsatām iyāt | sadasadvailakṣaṇyarūpam anirvacanīyaṃ na pramāṇāgocaraḥ ||",
    meaningShort: "In perceptual error (Abhinava-anyathākhyāti), what appears on the shell is utterly non-existent silver cognized as if real — there is no 'indeterminable third category' between real and unreal.",
    meaningDeep: "Madhvācārya's theory of error ('Abhinava-anyathākhyāti') upholds the strict law of excluded middle: every conceivable content is either Sat (existent) or Asat (non-existent). In shell-silver illusion, a defective sense-organ projects utterly non-existent (asat) silver onto a real (sat) shell.",
    padaccheda: [
      { deva: "असत् एव रजतम्", iast: "asat eva rajatam", gloss: "utterly non-existent silver itself" },
      { deva: "प्रत्यक्ष-आभासताम् इयात्", iast: "pratyakṣa-ābhāsatām iyāt", gloss: "appears as a pseudo-percept in error" },
      { deva: "सत्-असत्-वैलक्षण्य-रूपम्", iast: "sat-asat-vailakṣaṇya-rūpam", gloss: "an alleged entity 'neither existent nor non-existent'" }
    ],
    source: {
      grantha: "Anuvyākhyānam & Tattvodyotaḥ",
      granthaDeva: "अनुव्याख्यानम् / तत्त्वोद्योतः",
      author: "Śrī Madhvācārya",
      locator: "TVD 6; MTK 1"
    },
    related: ["satya", "asat", "viparyaya"]
  },
  {
    id: "asat",
    deva: "असत्",
    iast: "asat",
    stem: "asat",
    phoneticAliases: ["asat", "tuccha", "alikam", "shashavishana", "non-existent"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "सर्वदेशकालसम्बन्धाभाववद् असत् । यथा शशविषाणम् ।",
    lakshanaIast: "sarvadeśakālasambandhābhāvavad asat | yathā śaśaviṣāṇam |",
    meaningShort: "That which lacks existence at every place and every time — the utterly non-existent (e.g., a hare's horn), yet intelligible enough to be negated.",
    meaningDeep: "Against opponents who argue that what never exists cannot even be spoken of, Madhvācārya demonstrates in Pramāṇalakṣaṇam (PRL 1.15) that cognition of utter non-existence is essential to negate impossibilities ('there is no hare's horn').",
    padaccheda: [
      { deva: "सर्व-देश-काल-सम्बन्ध-अभाववत्", iast: "sarva-deśa-kāla-sambandha-abhāvavat", gloss: "devoid of existence in all places and times" },
      { deva: "असत्", iast: "asat", gloss: "the utterly non-existent" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya",
      locator: "PRL 1.15; PP 2.99"
    },
    related: ["satya", "sadabhava", "mithya"]
  },
  {
    id: "nitya",
    deva: "नित्यम्",
    iast: "nityam",
    stem: "nitya",
    phoneticAliases: ["nitya", "nityam", "kutastha", "eternal"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "नित्यत्वं नाम कूटस्थतया आद्यन्तशून्यत्वम् । नित्या वेदास्समस्ताश्च ॥",
    lakshanaIast: "nityatvaṃ nāma kūṭasthatayā ādyantaśūnyatvam | nityā vedās samastāś ca ||",
    meaningShort: "Unchanging eternity — complete freedom from beginning and end without undergoing internal transformation (kūṭastha).",
    meaningDeep: "Jayatīrtha defines strict Nityatva as immutable permanence without beginning or end. Among insentient reals, the unauthored Vedas, the 51 Sanskrit phonemes (varṇas), and unmanifest space (avyākṛtākāśa) possess kūṭastha-nityatva.",
    padaccheda: [
      { deva: "कूटस्थतया", iast: "kūṭasthatayā", gloss: "by immutable, changeless stability" },
      { deva: "आदि-अन्त-शून्यत्वम्", iast: "ādi-anta-śūnyatvam", gloss: "absence of beginning and end" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 8"
    },
    related: ["nityanitya", "anitya", "apaurusheya", "avyakritakasha"]
  },
  {
    id: "nityanitya",
    deva: "नित्यानित्यम्",
    iast: "nityānityam",
    stem: "nityānitya",
    phoneticAliases: ["nityanitya", "pravahanitya", "parinaminitya"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "पुराणाद्याः कालः प्रकृतिरेव च । नित्यानित्यं त्रिधा प्रोक्तम् ॥",
    lakshanaIast: "purāṇādyāḥ kālaḥ prakṛtir eva ca | nityānityaṃ tridhā proktam ||",
    meaningShort: "Eternal-cum-non-eternal reality — enduring eternally in root substance or stream, yet arising and subsiding in specific phases: Purāṇas, Time (Kāla), and Prakṛti.",
    meaningDeep: "A hallmark of Madhvācārya's ontological nuance: Time is eternal as an unbroken stream (pravāhato nityaḥ) while transient in individual moments (kṣaṇa); Prakṛti is eternal in its subtle root yet transient in its evolved modifications; Purāṇas are eternal in import yet composed afresh in verbal sequence each age.",
    padaccheda: [
      { deva: "पुराण-आद्याः", iast: "purāṇa-ādyāḥ", gloss: "Purāṇas and pauruṣeya śāstras" },
      { deva: "कालः प्रकृतिः एव च", iast: "kālaḥ prakṛtiḥ eva ca", gloss: "Time and Primordial Matter" },
      { deva: "नित्य-अनित्यम्", iast: "nitya-anityam", gloss: "eternal in root/stream yet non-eternal in states" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "TSK 8"
    },
    related: ["nitya", "anitya", "kala", "prakriti"]
  },
  {
    id: "anitya",
    deva: "अनित्यम्",
    iast: "anityam",
    stem: "anitya",
    phoneticAliases: ["anitya", "anityam", "asamsrishta", "samsrishta", "transient"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "उत्पत्तिविनाशवद् अनित्यम् । असंसृष्टं च संसृष्टमिति द्विविधं स्मृतम् ॥",
    lakshanaIast: "utpattivināśavad anityam | asaṃsṛṣṭaṃ ca saṃsṛṣṭam iti dvividhaṃ स्मृतम् ||",
    meaningShort: "That which undergoes origination and dissolution — twofold: Asaṃsṛṣṭa (uncompounded cosmic principles from Mahat to the five elements) and Saṃsṛṣṭa (the compounded Brahmāṇḍa and all objects within it).",
    meaningDeep: "In TSK 9–10, Madhvācārya distinguishes pre-cosmic evolutes (Mahat, Ahaṅkāra, Buddhi, Manas, 10 Indriyas, 5 Tanmātras, 5 Mahābhūtas prior to pañcīkaraṇa) from the compounded cosmic egg (Brahmāṇḍa) formed after elemental fusion.",
    padaccheda: [
      { deva: "उत्पत्ति-विनाशवत्", iast: "utpatti-vināśavat", gloss: "subject to production and dissolution" },
      { deva: "असंसृष्टम् च संसृष्टम्", iast: "asaṃsṛṣṭam ca saṃsṛṣṭam", gloss: "unmixed cosmic evolutes and compounded worldly objects" }
    ],
    source: {
      grantha: "Tattvasaṅkhyānam",
      granthaDeva: "तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "TSK 8–10"
    },
    related: ["nitya", "nityanitya", "mahattattva", "brahmanda"]
  },
  {
    id: "vikara",
    deva: "विकारः",
    iast: "vikāraḥ",
    stem: "vikāra",
    phoneticAliases: ["vikara", "parinama", "modification"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "परतन्त्रविशेषो हि विकार इति कीर्तितः । प्रत्यक्षत्वं हरेर्जन्म न विकारः कथञ्चन ॥",
    lakshanaIast: "paratantraviśeṣo hi vikāra iti kīrtitaḥ | pratyakṣatvaṃ harer janma na vikāraḥ kathañcana ||",
    meaningShort: "Modification (Vikāra) is a dependent alteration of state belonging strictly to dependent entities; the Lord's manifestation (avatāra) is pure self-revelation, never Vikāra.",
    meaningDeep: "Citing the Padma Purāṇa in Brahmasūtrabhāṣya (2.3.9), Madhvācārya defines Vikāra as another-governed modal transformation ('paratantra-viśeṣa'), proving why Viṣṇu's incarnations involve zero material change.",
    padaccheda: [
      { deva: "परतन्त्र-विशेषः", iast: "paratantra-viśeṣaḥ", gloss: "a modal change governed by another" },
      { deva: "विकारः इति कीर्तितः", iast: "vikāraḥ iti kīrtitaḥ", gloss: "is declared to be Vikāra (modification)" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam",
      granthaDeva: "ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "BSB 2.3.9"
    },
    related: ["asvatantra", "prakriti", "paramatman"]
  },
  {
    id: "vimukta",
    deva: "विमुक्तः",
    iast: "vimuktaḥ",
    stem: "vimukta",
    phoneticAliases: ["vimukta", "mukta", "liberated-soul"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "सर्वदुःखादिभिर्मुक्तो नित्यानन्दैकरूपकः । सम्प्राप्य विष्णुसामीप्यं तत्रापि हरिभक्तिमान् ॥",
    lakshanaIast: "sarvaduḥkhādibhir mukto nityānandaikarūpakaḥ | samprāpya viṣṇusāmīpyaṃ tatrāpi haribhaktimān ||",
    meaningShort: "A soul permanently freed from all sorrow and material bondage, shining in its intrinsic form of unmixed bliss and spontaneous devotion in Viṣṇu's presence.",
    meaningDeep: "Even in Mokṣa, the liberated soul retains its individuality, mutual distinction, proportionate bliss (tāratamya), and effortless loving devotion (bhakti) toward Śrī Hari — never lapsing back into saṃsāra.",
    padaccheda: [
      { deva: "सर्व-दुःख-आदिभिः मुक्तः", iast: "sarva-duḥkha-ādibhiḥ muktaḥ", gloss: "freed from all sorrow and ignorance" },
      { deva: "नित्य-आनन्द-एक-रूपकः", iast: "nitya-ānanda-eka-rūpakaḥ", gloss: "whose manifest form is pure eternal bliss" },
      { deva: "तत्र अपि हरि-भक्तिमान्", iast: "tatra api hari-bhaktimān", gloss: "brimming with devotion to Hari even in liberation" }
    ],
    source: {
      grantha: "Yatipraṇavakalpaḥ & Tattvasaṅkhyānam",
      granthaDeva: "यतिप्रणवकल्पः / तत्त्वसङ्ख्यानम्",
      author: "Śrī Madhvācārya",
      locator: "YPK 20; TSK 4–5"
    },
    related: ["moksha", "bhakti", "duhkhasprishta", "taratamya"]
  }
];
