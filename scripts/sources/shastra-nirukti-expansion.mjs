// Pillar 1D & 3B: Expanded Śāstra, Vedāṅga, Puruṣārtha, Tāratamya Lakṣaṇas & Daśāvatāra/Vaidika Niruktis
// Grounded in Śrī Madhvācārya's Sarvamūla Granthāḥ, Śrī Jayatīrtha's Pramāṇapaddhatiḥ & Nyāyasudhā,
// Pāṇinīya Śikṣā, Yāska's Nirukta, and classical Vedāṅga / Purāṇa lakṣaṇa verses.

export const shastraNiruktiExpansionEntries = [
  {
    id: "pramata",
    deva: "प्रमाता",
    iast: "pramātā",
    stem: "pramātṛ",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["knower", "cognizing subject", "epistemic agent"],
    phoneticAliases: ["pramata", "pramatri", "knower", "subject"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "प्रमाश्रयः प्रमाता । यथार्थज्ञानाश्रयश्चेतनः ।",
    lakshanaIast: "pramāśrayaḥ pramātā | yathārthajñānāśrayaś cetanaḥ |",
    meaningShort: "The Knower (Pramātā) is the conscious locus and subject in whom valid knowledge (pramā) inheres.",
    meaningDeep: "In Tattvavāda epistemology, cognition never floats free without a real conscious subject (kartā/āśraya). Every sentient being — from the supreme omniscient Lord down to individual souls — is a real Pramātā whose Sākṣī guarantees the immediacy of self-awareness and truth-certitude.",
    padaccheda: [
      { deva: "प्रमा-आश्रयः", iast: "pramā-āśrayaḥ", gloss: "the substratum or locus of valid cognition" },
      { deva: "प्रमाता", iast: "pramātā", gloss: "the knowing subject (√mā with pra + -tṛc)" },
      { deva: "चेतनः", iast: "cetanaḥ", gloss: "sentient being" }
    ],
    source: {
      grantha: "Pramāṇapaddhatiḥ & Pramāṇalakṣaṇa-ṭīkā",
      granthaDeva: "प्रमाणपद्धतिः",
      author: "Śrī Jayatīrtha",
      locator: "PP 1.2; PLṬ"
    },
    related: ["pramana", "pramiti", "prameya", "jeeva", "sakshi"]
  },
  {
    id: "pramiti",
    deva: "प्रमितिः",
    iast: "pramitiḥ",
    stem: "pramiti",
    pos: "strīliṅga (f.)",
    englishGlosses: ["valid knowledge", "true cognition", "epistemic result"],
    phoneticAliases: ["pramiti", "prama", "valid knowledge", "true cognition"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "यथार्थज्ञानं प्रमितिः । केवला प्रमाणम् इति च ।",
    lakshanaIast: "yathārthajñānaṃ pramitiḥ | kevalā pramāṇam iti ca |",
    meaningShort: "Valid Cognition (Pramiti / Pramā) is knowledge that apprehends its object exactly as it exists in reality.",
    meaningDeep: "Śrī Madhvācārya distinguishes Kevala-pramāṇa (valid cognition itself, i.e., Pramiti) from Anu-pramāṇa (the instrumental means such as perception, inference, and scripture that produce it). Unlike doubt (saṃśaya) or error (viparyaya), Pramiti is uncontradicted correspondence with the real (yathārthatva).",
    padaccheda: [
      { deva: "यथार्थ", iast: "yathārtha", gloss: "conforming to the object as it truly is" },
      { deva: "ज्ञानम्", iast: "jñānam", gloss: "cognition, awareness" },
      { deva: "प्रमितिः", iast: "pramitiḥ", gloss: "valid knowledge, accurate apprehension" }
    ],
    source: {
      grantha: "Pramāṇalakṣaṇam & Pramāṇapaddhatiḥ",
      granthaDeva: "प्रमाणलक्षणम्",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "PL 1–2; PP 1.3"
    },
    related: ["pramana", "kevalapramana", "pramata", "prameya", "svatahpramanya"]
  },
  {
    id: "prameya",
    deva: "प्रमेयम्",
    iast: "prameyam",
    stem: "prameya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["knowable object", "object of valid knowledge", "reality"],
    phoneticAliases: ["prameya", "prameyam", "knowable", "object of knowledge"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "प्रमितिविषयः प्रमेयम् । अनारोपितं तत्त्वमिति यावत् ।",
    lakshanaIast: "pramitiviṣayaḥ prameyam | anāropitaṃ tattvam iti yāvat |",
    meaningShort: "The Knowable (Prameya) is that which serves as the object of valid knowledge — coextensive with real existence (Tattva).",
    meaningDeep: "Because valid cognition always reveals what truly is, 'being an object of valid knowledge' (pramiti-viṣayatva) and 'being real' (tattvatva) are coextensive in Tattvavāda. Supreme among all Prameyas is Bhagavān Viṣṇu, the ultimate purport of every Veda.",
    padaccheda: [
      { deva: "प्रमिति-विषयः", iast: "pramiti-viṣayaḥ", gloss: "domain or object of valid knowledge" },
      { deva: "प्रमेयम्", iast: "prameyam", gloss: "that which is rightly measurable / knowable (pra-√mā + -yat)" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā & Padārthasaṅgrahaḥ",
      granthaDeva: "तत्त्वसङ्ख्यानटीका",
      author: "Śrī Jayatīrtha",
      locator: "TSK 1; PS 1.1"
    },
    related: ["tattva", "pramana", "pramiti", "pramata", "padartha"]
  },
  {
    id: "tatparya",
    deva: "तात्पर्यम्",
    iast: "tātparyam",
    stem: "tātparya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["purport", "intended meaning", "import of a text"],
    phoneticAliases: ["tatparya", "taatparya", "tatparyam", "purport", "intent"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "तत्प्रतीतिजननयोग्यत्वं तात्पर्यम् । षड्भिर्लिङ्गैर्निर्णीतम् ।",
    lakshanaIast: "tatpratītijananayogyatvaṃ tātparyam | ṣaḍbhir liṅgair nirṇītam |",
    meaningShort: "Purport (Tātparya) is the objective fitness of a statement or text to generate coherent comprehension of a specific meaning, ascertained through the six hermeneutic canons.",
    meaningDeep: "For Apauruṣeya Veda, where no human speaker's private wish exists, Tātparya is an objective semantic power established through the six Tātparya-liṅgas: upakrama-upasaṃhāra (opening and conclusion), abhyāsa (repetition), apūrvatā (novelty), phala (fruit), arthavāda (eulogy), and upapatti (rational fitness).",
    padaccheda: [
      { deva: "तत्-प्रतीति", iast: "tat-pratīti", gloss: "comprehension of that specific meaning" },
      { deva: "जनन-योग्यत्वम्", iast: "janana-yogyatvam", gloss: "intrinsic fitness to produce" },
      { deva: "तात्पर्यम्", iast: "tātparyam", gloss: "overall purport or ultimate intent" }
    ],
    source: {
      grantha: "Nyāyasudhā & Viṣṇutattvavinirṇayaḥ",
      granthaDeva: "न्यायसुधा",
      author: "Śrī Jayatīrtha",
      locator: "NS 1.1.4; VTN 1"
    },
    related: ["tatparyalinga", "agama", "apaurusheya", "veda"]
  },
  {
    id: "anyonyabhava",
    deva: "अन्योन्याभावः",
    iast: "anyonyābhāvaḥ",
    stem: "anyonyābhāva",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["mutual non-existence", "difference", "non-identity"],
    phoneticAliases: ["anyonyabhava", "anyonya abhava", "mutual negation", "bheda"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "तादात्म्यप्रतियोगिकोऽभावोऽन्योन्याभावः । धर्मस्वरूपो भेद एव ।",
    lakshanaIast: "tādātmyapratiyogiko 'bhāvo 'nyonyābhāvaḥ | dharmasvarūpo bheda eva |",
    meaningShort: "Mutual Non-Existence (Anyonyābhāva) is negation whose counterpositive is identity ('this is not that') — identical in Tattvavāda with the very essence (dharma-svarūpa) of each real entity.",
    meaningDeep: "Unlike Nyāya, which treats Anyonyābhāva as a purely negative category separate from its locus, Śrī Madhvācārya demonstrates in Viṣṇutattvavinirṇaya that an entity's difference (bheda) from everything else is nothing other than its own positive essence (dharmi-svarūpa), differentiated without infinite regress via Viśeṣa.",
    padaccheda: [
      { deva: "तादात्म्य", iast: "tādātmya", gloss: "identity, sameness" },
      { deva: "प्रतियोगिकः", iast: "pratiyogikaḥ", gloss: "having as its counterpositive" },
      { deva: "अभावः", iast: "abhāvaḥ", gloss: "negation / non-existence" },
      { deva: "अन्योन्याभावः", iast: "anyonyābhāvaḥ", gloss: "mutual exclusion or difference" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Padārthasaṅgrahaḥ",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः",
      author: "Śrī Madhvācārya & Śrī Padmanābha Sūri",
      locator: "VTN 1; PS 62"
    },
    related: ["bheda", "abhava", "pancabheda", "vishesha", "samsargabhava"]
  },
  {
    id: "samsargabhava",
    deva: "संसर्गाभावः",
    iast: "saṃsargābhāvaḥ",
    stem: "saṃsargābhāva",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["relational non-existence", "absence of contact"],
    phoneticAliases: ["samsargabhava", "sansargabhava", "relational absence"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "अन्योन्याभावभिन्नोऽभावः संसर्गाभावः । प्राक्प्रध्वंससदाभावभेदात् त्रिविधः ।",
    lakshanaIast: "anyonyābhāvabhinno 'bhāvaḥ saṃsargābhāvaḥ | prākpradhvaṃsasadābhāvabhedāt trividhaḥ |",
    meaningShort: "Relational Non-Existence (Saṃsargābhāva) is absence of occurrence or relation ('there is no pot on the ground'), comprising prior, posterior, and eternal non-existence.",
    meaningDeep: "While Anyonyābhāva denies identity ('a pot is not a cloth'), Saṃsargābhāva denies relational presence and divides into three temporal modes: Prāgabhāva (prior absence before production), Pradhvaṃsābhāva (posterior absence after destruction), and Sadābhāva / Atyantābhāva (perpetual absence in all three times).",
    padaccheda: [
      { deva: "अन्योन्याभाव-भिन्नः", iast: "anyonyābhāva-bhinnaḥ", gloss: "distinct from mutual non-identity" },
      { deva: "संसर्ग-अभावः", iast: "saṃsarga-abhāvaḥ", gloss: "absence of relational connection" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā & Padārthasaṅgrahaḥ",
      granthaDeva: "पदार्थसङ्ग्रहः",
      author: "Śrī Jayatīrtha & Śrī Padmanābha Sūri",
      locator: "TSK 4; PS 58–61"
    },
    related: ["abhava", "pragabhava", "pradhvamsabhava", "sadabhava", "anyonyabhava"]
  },
  {
    id: "purushartha",
    deva: "पुरुषार्थः",
    iast: "puruṣārthaḥ",
    stem: "puruṣārtha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["human goal", "aim of human life", "fourfold end of life"],
    phoneticAliases: ["purushartha", "purushartham", "caturvarga", "aims of life"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "पुरुषेण अर्थ्यते इति पुरुषार्थः । धर्मार्थकाममोक्षाश्चत्वारः ।",
    lakshanaIast: "puruṣeṇa arthyate iti puruṣārthaḥ | dharmārthakāmamokṣāś catvāraḥ |",
    meaningShort: "Puruṣārtha is that which is consciously sought by a sentient person — the fourfold canon of Dharma (righteousness), Artha (prosperity), Kāma (fulfillment), and Mokṣa (liberation).",
    meaningDeep: "Classical śāstra arranges the four Puruṣārthas in an integrated hierarchy: Artha and Kāma remain wholesome only when governed by Dharma, while Dharma itself culminates in selfless devotion (Bhakti) to Viṣṇu and final liberation (Mokṣa — parama-puruṣārtha).",
    padaccheda: [
      { deva: "पुरुषेण", iast: "puruṣeṇa", gloss: "by a conscious person / soul" },
      { deva: "अर्थ्यते", iast: "arthyate", gloss: "is sought after, aimed at (√arth)" },
      { deva: "पुरुषार्थः", iast: "puruṣārthaḥ", gloss: "worthy goal of human existence" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ & Amarakośa",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya & Amarasimha",
      locator: "MBTN 1; AK 2.7.57 (trivargo dharmakāmārthaiḥ caturvargaḥ samokṣakaiḥ)"
    },
    related: ["dharma", "moksha", "kama-purushartha", "artha-purushartha", "bhakti"]
  },
  {
    id: "kama-purushartha",
    deva: "कामः",
    iast: "kāmaḥ",
    stem: "kāma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["desire", "love", "aesthetic fulfillment"],
    phoneticAliases: ["kama", "kaama", "kamah", "desire", "wish"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ ।",
    lakshanaIast: "dharmāviruddho bhūteṣu kāmo 'smi bharatarṣabha |",
    meaningShort: "Righteous Desire (Kāma) is aspiration, joy, and aesthetic fulfillment harmonized with Dharma — declared by Śrī Kṛṣṇa to be His own vibhūti.",
    meaningDeep: "Whereas unbridled craving (kāma-krodha) binds the soul, Kāma that does not contravene Dharma sustains life, family, art, and ultimately turns into intense longing for Bhagavān (bhagavat-kāma).",
    padaccheda: [
      { deva: "धर्म-अविरुद्धः", iast: "dharma-aviruddhaḥ", gloss: "unopposed to righteousness" },
      { deva: "भूतेषु", iast: "bhūteṣu", gloss: "among living beings" },
      { deva: "कामः", iast: "kāmaḥ", gloss: "desire, aspiration (√kam)" }
    ],
    source: {
      grantha: "Bhagavadgītā & Bhagavadgītābhāṣyam",
      granthaDeva: "भगवद्गीता",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "BG 7.11"
    },
    related: ["purushartha", "dharma", "iccha", "vairagya"]
  },
  {
    id: "artha-purushartha",
    deva: "अर्थपुरुषार्थः",
    iast: "arthapuruṣārthaḥ",
    stem: "arthapuruṣārtha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["material prosperity", "livelihood", "means of sustenance"],
    phoneticAliases: ["arthapurushartha", "artha purushartha", "prosperity", "livelihood"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "धर्ममूलो लोकयात्राहेतुः साधनसम्पदर्थपुरुषार्थः ।",
    lakshanaIast: "dharmamūlo lokayātrāhetuḥ sādhanasampad arthapuruṣārthaḥ |",
    meaningShort: "Artha (as a Puruṣārtha) is lawful material resource, polity, and sustenance rooted in Dharma that enables worldly life and charitable duty.",
    meaningDeep: "In the Mahābhārata and Arthaśāstra traditions harmonized by Madhvācārya, wealth and governance have no autonomous license; acquired rightly and offered through yajña and dāna, Artha becomes an instrument of Dharma.",
    padaccheda: [
      { deva: "धर्म-मूलः", iast: "dharma-mūlaḥ", gloss: "having righteousness as its root" },
      { deva: "लोकयात्रा-हेतुः", iast: "lokayātrā-hetuḥ", gloss: "means of sustaining social and bodily life" },
      { deva: "साधन-सम्पत्", iast: "sādhana-sampat", gloss: "wealth of resources" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ & Nītiśāstra",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "MBTN 2; Śāntiparva"
    },
    related: ["purushartha", "dharma", "kama-purushartha"]
  },
  {
    id: "yoga-darshana",
    deva: "योगः",
    iast: "yogaḥ",
    stem: "yoga",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["yoga", "meditative union", "spiritual discipline", "equanimity"],
    phoneticAliases: ["yoga", "yogah", "samatvam", "meditation", "discipline"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "समत्वं योग उच्यते । योगश्चित्तवृत्तिनिरोधः । उपायो भगवत्प्राप्तौ योगः ।",
    lakshanaIast: "samatvaṃ yoga ucyate | yogaś cittavṛttinirodhaḥ | upāyo bhagavatprāptau yogaḥ |",
    meaningShort: "Yoga is inner equanimity in action, the stilling of restless mental modifications, and the disciplined spiritual means (upāya) of attaining Bhagavān.",
    meaningDeep: "Derived from √yuj ('to yoke, concentrate, unite'), Yoga spans Karma-yoga (unattached performance of duty as worship), Aṣṭāṅga-dhyāna-yoga (one-pointed absorption), and Bhakti-yoga. In Gītābhāṣya, Madhvācārya glosses Yoga fundamentally as 'upāya' — the focused method leading to aparokṣa-jñāna of Viṣṇu.",
    padaccheda: [
      { deva: "समत्वम्", iast: "samatvam", gloss: "evenness of mind in success and failure" },
      { deva: "चित्त-वृत्ति-निरोधः", iast: "citta-vṛtti-nirodhaḥ", gloss: "restraint of scattered mental fluctuations" },
      { deva: "योगः", iast: "yogaḥ", gloss: "spiritual yoking / method (√yuj + -ghañ)" }
    ],
    source: {
      grantha: "Bhagavadgītābhāṣyam & Yogasūtram",
      granthaDeva: "भगवद्गीताभाष्यम् · योगसूत्रम्",
      author: "Śrī Madhvācārya & Patañjali",
      locator: "BG 2.48; YS 1.2"
    },
    related: ["dhyana", "bhakti", "shama", "dama", "aparokshajnana"]
  },
  {
    id: "veda",
    deva: "वेदः",
    iast: "vedaḥ",
    stem: "veda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Veda", "sacred scripture", "revealed knowledge", "Śruti"],
    phoneticAliases: ["veda", "vedah", "shruti", "sruti", "scripture"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वेद्यतेऽनेन धर्मब्रह्मणी इति वेदः । अपौरुषेयं वाक्यम् ।",
    lakshanaIast: "vedyate 'nena dharmabrahmaṇī iti vedaḥ | apauruṣeyaṃ vākyam |",
    meaningShort: "The Veda (Śruti) is the unauthored (apauruṣeya) eternal corpus of sacred speech through which super-sensuous Dharma and supreme Brahman are known.",
    meaningDeep: "From √vid ('to know'), the Veda comprises Ṛg, Yajur, Sāma, and Atharva saṃhitās along with their Brāhmaṇas, Āraṇyakas, and Upaniṣads. Being uncreated by any finite or infinite speaker and revealed identically in each cosmic cycle, its validity is intrinsic (svataḥ-pramāṇa).",
    padaccheda: [
      { deva: "वेद्यते", iast: "vedyate", gloss: "is made known (passive of √vid)" },
      { deva: "अनेन", iast: "anena", gloss: "by this instrument" },
      { deva: "धर्म-ब्रह्मणी", iast: "dharma-brahmaṇī", gloss: "Dharma and Supreme Brahman" },
      { deva: "वेदः", iast: "vedaḥ", gloss: "sacred revelation" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ & Ṛgbhāṣyam",
      granthaDeva: "विष्णुतत्त्वविनिर्णयः · ऋग्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "VTN 1; Ṛgbhāṣya Upodghāta"
    },
    related: ["agama", "apaurusheya", "rik", "yajus", "saman", "atharvaveda", "upanishad"]
  },
  {
    id: "atharvaveda",
    deva: "अथर्ववेदः",
    iast: "atharvavedaḥ",
    stem: "atharvaveda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Atharvaveda", "fourth Veda"],
    phoneticAliases: ["atharvaveda", "atharva veda", "atharvana"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अथर्वणाङ्गिरोभिर्द्रष्टो ब्रह्मवेदः अथर्ववेदः ।",
    lakshanaIast: "atharvaṇāṅgirobhir dṛṣṭo brahmavedaḥ atharvavedaḥ |",
    meaningShort: "The Atharvaveda — the fourth canonical Veda beheld by the sages Atharvan and Aṅgiras, enshrining cosmic hymns and Upaniṣads such as Muṇḍaka, Māṇḍūkya, and Praśna.",
    meaningDeep: "Serving as the canon of the supervising Brahmā priest in Vedic sacrifice, the Atharvaveda contains profound metaphysical sūktas (Skambha, Prāṇa, Pṛthivī) and three of the ten principal Upaniṣads commented upon directly by Śrī Madhvācārya.",
    padaccheda: [
      { deva: "अथर्वण-अङ्गिरोभिः", iast: "atharvaṇa-aṅgirobhiḥ", gloss: "by the seer-lineages of Atharvan and Aṅgiras" },
      { deva: "दृष्टः", iast: "dṛṣṭaḥ", gloss: "beheld in mantric vision" },
      { deva: "ब्रह्म-वेदः", iast: "brahma-vedaḥ", gloss: "the Veda of the supervising Brahmā priest" }
    ],
    source: {
      grantha: " Prasthānabhedaḥ & Atharvaṇopaniṣad-bhāṣyam",
      granthaDeva: "अथर्वणोपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "Muṇḍakabhāṣya 1.1"
    },
    related: ["veda", "rik", "yajus", "saman", "upanishad"]
  },
  {
    id: "upanishad",
    deva: "उपनिषत्",
    iast: "upaniṣat",
    stem: "upaniṣad",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Upanishad", "Vedanta", "esoteric wisdom"],
    phoneticAliases: ["upanishad", "upanishat", "vedanta"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "उपनीयात्मानं ब्रह्मणः सकाशं सादयत्यविद्यामिति उपनिषत् ।",
    lakshanaIast: "upanīyātmānaṃ brahmaṇaḥ sakāśaṃ sādayaty avidyām iti upaniṣat |",
    meaningShort: "Upaniṣad (Brahma-vidyā) is the sacred teaching seated near the Guru that leads the soul to Supreme Brahman and shatters spiritual ignorance.",
    meaningDeep: "Built from upa ('near') + ni ('assuredly') + √sad ('to sit, loosen, destroy, attain'), Upaniṣad denotes both the wisdom of Brahman and the culminant Vedānta texts (Īśa, Kena, Kaṭha, Praśna, Muṇḍaka, Māṇḍūkya, Taittirīya, Aitareya, Chāndogya, Bṛhadāraṇyaka).",
    padaccheda: [
      { deva: "उपनीय", iast: "upanīya", gloss: "leading near (to the Guru and to Brahman)" },
      { deva: "सादयति", iast: "sādayati", gloss: "dissolves, destroys (causative of √sad)" },
      { deva: "अविद्याम्", iast: "avidyām", gloss: "bondage-causing ignorance" }
    ],
    source: {
      grantha: "Daśopaniṣad-bhāṣyāṇi",
      granthaDeva: "दशोपनिषद्भाष्याणि",
      author: "Śrī Madhvācārya",
      locator: "Īśāvāsyopaniṣad-bhāṣya; Kaṭhopaniṣad-bhāṣya"
    },
    related: ["veda", "brahman", "guru", "avidya", "moksha"]
  },
  {
    id: "shiksha",
    deva: "शिक्षा",
    iast: "śikṣā",
    stem: "śikṣā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["phonetics", "pronunciation", "instruction", "first Vedanga"],
    phoneticAliases: ["shiksha", "siksha", "phonetics", "pronunciation"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वर्णस्वरमात्राबलसामसान्तानप्रयोगोपदेशः शिक्षा । शिक्षा घ्राणं तु वेदस्य ।",
    lakshanaIast: "varṇasvaramātrābalasāmasāntānaprayogopadeśaḥ śikṣā | śikṣā ghrāṇaṃ tu vedasya |",
    meaningShort: "Śikṣā (Phonetics) is the first Vedāṅga teaching exact articulation of phonemes, pitch accents, vowel lengths, effort, and euphonic continuity.",
    meaningDeep: "Celebrated in Taittirīya Upaniṣad 1.2 ('śīkṣāṃ vyākhyāsyāmaḥ: varṇaḥ svaraḥ mātrā balam sāma santānaḥ'), Śikṣā safeguards the sonic integrity of Vedic mantras across millennia without a single syllable's drift.",
    padaccheda: [
      { deva: "वर्ण-स्वर-मात्रा", iast: "varṇa-svara-mātrā", gloss: "phoneme, pitch accent, and prosodic duration" },
      { deva: "बल-साम-सन्तान", iast: "bala-sāma-santāna", gloss: "articulatory effort, evenness, and sandhi junction" },
      { deva: "शिक्षा", iast: "śikṣā", gloss: "science of phonetics and instruction (√śikṣ)" }
    ],
    source: {
      grantha: "Taittirīya Upaniṣad & Pāṇinīya Śikṣā",
      granthaDeva: "तैत्तिरीयोपनिषत् · पाणिनीयशिक्षा",
      author: "Śruti & Pāṇini",
      locator: "TU 1.2; PŚ 41"
    },
    related: ["varna", "veda", "vyakarana", "chandas", "nirukta-vedanga"]
  },
  {
    id: "kalpa-vedanga",
    deva: "कल्पः",
    iast: "kalpaḥ",
    stem: "kalpa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["ritual canon", "precept", "cosmic eon", "Vedanga"],
    phoneticAliases: ["kalpa", "kalpah", "kalpasutra", "ritual"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "वेदोदितकर्मणां आनुपूर्व्येण कल्पनाशास्त्रं कल्पः । हस्तौ कल्पोऽथ पठ्यते ।",
    lakshanaIast: "vedoditakarmaṇām ānupūrvyeṇa kalpanāśāstraṃ kalpaḥ | hastau kalpo 'tha paṭhyate |",
    meaningShort: "Kalpa is the Vedāṅga (likened to the two hands of the Veda) codifying the orderly performance of Vedic rites, domestic sacraments, geometry (Śulba), and Dharma.",
    meaningDeep: "Divided into Śrauta, Gṛhya, Dharma, and Śulba sūtras, Kalpa translates Vedic injunctions into precise sacred action; in cosmology, 'kalpa' also denotes a single day of Caturmukha Brahmā spanning 1,000 mahāyugas.",
    padaccheda: [
      { deva: "वेदोदित-कर्मणाम्", iast: "vedodita-karmaṇām", gloss: "of rites enjoined in the Veda" },
      { deva: "आनुपूर्व्येण", iast: "ānupūrvyeṇa", gloss: "in exact procedural sequence" },
      { deva: "कल्पना-शास्त्रम्", iast: "kalpanā-śāstram", gloss: "prescriptive manual (√kḷp)" }
    ],
    source: {
      grantha: "Pāṇinīya Śikṣā & Prasthānabhedaḥ",
      granthaDeva: "पाणिनीयशिक्षा",
      author: "Pāṇini",
      locator: "PŚ 41"
    },
    related: ["veda", "dharma", "shiksha", "vyakarana", "kala"]
  },
  {
    id: "vyakarana",
    deva: "व्याकरणम्",
    iast: "vyākaraṇam",
    stem: "vyākaraṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["grammar", "morphological analysis", "linguistics"],
    phoneticAliases: ["vyakarana", "vyakaranam", "grammar", "panini", "ashtadhyayi"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "व्याक्रियन्ते व्युत्पाद्यन्ते शब्दा अनेनेति व्याकरणम् । मुखं व्याकरणं स्मृतम् ।",
    lakshanaIast: "vyākriyante vyutpādyante śabdā aneneti vyākaraṇam | mukhaṃ vyākaraṇaṃ smṛtam |",
    meaningShort: "Vyākaraṇa (Grammar) — revered as the mouth of the Veda — is the generative science through which correct words are analyzed into roots (prakṛti) and affixes (pratyaya).",
    meaningDeep: "Crowned by Pāṇini's Aṣṭādhyāyī (~4,000 algebraic sūtras), Kātyāyana's Vārttikas, and Patañjali's Mahābhāṣya, Sanskrit Vyākaraṇa is history's earliest formal generative system and an indispensable key to scriptural exegesis.",
    padaccheda: [
      { deva: "व्याक्रियन्ते", iast: "vyākriyante", gloss: "are analyzed and derived (vi + ā + √kṛ)" },
      { deva: "शब्दाः", iast: "śabdāḥ", gloss: "correct linguistic forms" },
      { deva: "व्याकरणम्", iast: "vyākaraṇam", gloss: "generative grammar" }
    ],
    source: {
      grantha: "Mahābhāṣyam & Pāṇinīya Śikṣā",
      granthaDeva: "पातञ्जलमहाभाष्यम्",
      author: "Patañjali & Pāṇini",
      locator: "Paspaśāhnika; PŚ 42"
    },
    related: ["veda", "shiksha", "nirukta-vedanga", "sutra"]
  },
  {
    id: "nirukta-vedanga",
    deva: "निरुक्तम्",
    iast: "niruktam",
    stem: "nirukta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["etymology", "semantic derivation", "Nirukta"],
    phoneticAliases: ["nirukta", "niruktam", "yaska", "etymology"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अर्थावबोधे निरपेक्षतया पदजातं यत्रोक्तं तन्निरुक्तम् । निरुक्तं श्रोत्रमुच्यते ।",
    lakshanaIast: "arthāvabodhe nirapekṣatayā padajātaṃ yatroktaṃ tan niruktam | niruktaṃ śrotram ucyate |",
    meaningShort: "Nirukta (Etymology) — the ear of the Veda — is the science explaining why words signify their meanings by tracing every noun back to dynamic verbal roots (ākhyāta-ja).",
    meaningDeep: "Codified by Yāska on the Vedic Nighaṇṭu, Nirukta provides the foundational principle wielded at full scale by Śrī Madhvācārya: because every Vedic word signifies sovereign attributes through root-meaning (mahāyoga), every name in the Veda ultimately proclaims Viṣṇu's infinite perfections.",
    padaccheda: [
      { deva: "अर्थ-अवबोधे", iast: "artha-avabodhe", gloss: "for the comprehension of semantic meaning" },
      { deva: "निरपेक्षतया", iast: "nirapekṣatayā", gloss: "independently, completely (nir + √vac)" },
      { deva: "निरुक्तम्", iast: "niruktam", gloss: "etymological exposition" }
    ],
    source: {
      grantha: "Yāska's Nirukta & Sāyaṇa-bhāṣyabhūmikā",
      granthaDeva: "निरुक्तम्",
      author: "Yāska",
      locator: "Nirukta 1.1, 1.12; PŚ 41"
    },
    related: ["vyakarana", "veda", "vishnu", "narayana"]
  },
  {
    id: "chandas",
    deva: "छन्दः",
    iast: "chandaḥ",
    stem: "chandas",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["meter", "prosody", "poetic cadence", "Vedic hymn"],
    phoneticAliases: ["chandas", "chandah", "chhandas", "prosody", "meter"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "छन्दः पादौ तु वेदस्य । यदक्षरपरिमाणं तच्छन्दः । छादनात् छन्दः ।",
    lakshanaIast: "chandaḥ pādau tu vedasya | yad akṣaraparimāṇaṃ tac chandaḥ | chādanāt chandaḥ |",
    meaningShort: "Chandas (Prosody) — the two feet on which the Veda walks — is metered syllable-measure (such as Gāyatrī, Triṣṭubh, Jagatī, Anuṣṭubh, and Bṛhatī) that shelters sacred meaning.",
    meaningDeep: "Derived by Yāska and the Upaniṣads from √chad ('to cover, protect from mortality'), Chandas structures both Vedic sūktas via syllable count (akṣara-chandas) and classical kāvya via heavy-light cadence (guru-laghu vṛtta and mātrā).",
    padaccheda: [
      { deva: "अक्षर-परिमाणम्", iast: "akṣara-parimāṇam", gloss: "regulated measure of syllables" },
      { deva: "छादनात्", iast: "chādanāt", gloss: "because it shelters and clothes sacred truth" },
      { deva: "छन्दः", iast: "chandaḥ", gloss: "sacred meter / prosody" }
    ],
    source: {
      grantha: "Piṅgala's Chandaḥśāstram, Nirukta & Chāndogya Upaniṣad",
      granthaDeva: "छन्दःशास्त्रम् · निरुक्तम्",
      author: "Piṅgala & Yāska",
      locator: "Nirukta 7.12; CU 1.4.2; PŚ 41"
    },
    related: ["brihati", "gayatri", "veda", "shiksha"]
  },
  {
    id: "jyotisha",
    deva: "ज्योतिषम्",
    iast: "jyotiṣam",
    stem: "jyotiṣa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["astronomy", "calendrics", "celestial mathematics"],
    phoneticAliases: ["jyotisha", "jyotisham", "astronomy", "vedanga jyotisha"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "ज्योतिषामयनं चक्षुः । कालविधानशास्त्रं ज्योतिषम् ।",
    lakshanaIast: "jyotiṣām ayanaṃ cakṣuḥ | kālavidhānaśāstraṃ jyotiṣam |",
    meaningShort: "Jyotiṣa (Astronomy & Mathematical Time-Reckoning) — the eye of the Veda — tracks the courses of sun, moon, and stars to determine sacred time.",
    meaningDeep: "From jyotis ('luminary'), Vedāṅga Jyotiṣa of Lagadha and later Siddhānta treatises (Āryabhaṭa, Varāhamihira, Bhāskara) developed trigonometry, planetary motion models, and lunisolar intercalation for accurate temporal reckoning.",
    padaccheda: [
      { deva: "ज्योतिषाम्", iast: "jyotiṣām", gloss: "of the celestial luminaries" },
      { deva: "अयनम्", iast: "ayanam", gloss: "orbital course and progression" },
      { deva: "काल-विधान-शास्त्रम्", iast: "kāla-vidhāna-śāstram", gloss: "science of determining time" }
    ],
    source: {
      grantha: "Vedāṅga Jyotiṣam & Pāṇinīya Śikṣā",
      granthaDeva: "वेदाङ्गज्योतिषम्",
      author: "Lagadha & Pāṇini",
      locator: "VJ 3; PŚ 42"
    },
    related: ["kala", "veda", "shiksha", "chandas"]
  },
  {
    id: "sutra",
    deva: "सूत्रम्",
    iast: "sūtram",
    stem: "sūtra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["aphorism", "concise rule", "thread", "sutra"],
    phoneticAliases: ["sutra", "sootra", "sutram", "aphorism"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "अल्पाक्षरमसन्दिग्धं सारवद्विश्वतोमुखम् । अस्तोभमनवद्यं च सूत्रं सूत्रविदो विदुः ॥",
    lakshanaIast: "alpākṣaram asandigdhaṃ sāravad viśvatomukham | astobham anavadyaṃ ca sūtraṃ sūtravido viduḥ ||",
    meaningShort: "A Sūtra (Aphorism) is defined by six marks: minimal syllables, freedom from ambiguity, pregnant essence, universal applicability, zero filler particles, and faultlessness.",
    meaningDeep: "Śrī Madhvācārya quotes this celebrated definition in his Brahmasūtrabhāṣya and Anuvyākhyāna, honoring Vedavyāsa's Brahmasūtras as the supreme 'nirṇāyaka' (decisive) thread stringing together all Vedic flowers.",
    padaccheda: [
      { deva: "अल्पाक्षरम्", iast: "alpākṣaram", gloss: "composed of fewest possible syllables" },
      { deva: "असन्दिग्धम्", iast: "asandigdham", gloss: "unambiguous" },
      { deva: "सारवत्", iast: "sāravat", gloss: "rich in essential truth" },
      { deva: "विश्वतोमुखम्", iast: "viśvatomukham", gloss: "facing all directions / universally applicable" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam (Brahmāṇḍa Purāṇa citation)",
      granthaDeva: "ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "BSB 1.1.1"
    },
    related: ["bhashya", "tika", "vyakarana", "lakshana"]
  },
  {
    id: "bhashya",
    deva: "भाष्यम्",
    iast: "bhāṣyam",
    stem: "bhāṣya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["commentary", "authoritative exposition", "bhashya"],
    phoneticAliases: ["bhashya", "bhasya", "bhashyam", "commentary"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "सूत्रार्थो वर्ण्यते यत्र पदैः सूत्रानुसारिभिः । स्वपदानि च वर्ण्यन्ते भाष्यं भाष्यविदो विदुः ॥",
    lakshanaIast: "sūtrārtho varṇyate yatra padaiḥ sūtrānusāribhiḥ | svapadāni ca varṇyante bhāṣyaṃ bhāṣyavido viduḥ ||",
    meaningShort: "A Bhāṣya (Primary Commentary) expounds the meaning of sūtras in phrasing faithful to the sūtras while also justifying and explaining its own interpretive terms.",
    meaningDeep: "Śrī Madhvācārya authored four distinct commentaries on the Brahmasūtras alone (Brahmasūtrabhāṣya, Anuvyākhyāna, Nyāyavivaraṇa, and the terse 32-verse Aṇubhāṣya), exemplifying crystal-clear pramāṇa-grounded Bhāṣya craft.",
    padaccheda: [
      { deva: "सूत्र-अर्थः", iast: "sūtra-arthaḥ", gloss: "the purport of the aphorisms" },
      { deva: "सूत्र-अनुसारिभिः", iast: "sūtra-anusāribhiḥ", gloss: "by expressions faithful to the sūtra" },
      { deva: "स्वपदानि", iast: "svapadāni", gloss: "its own explanatory words" },
      { deva: "भाष्यम्", iast: "bhāṣyam", gloss: "authoritative commentary (√bhāṣ)" }
    ],
    source: {
      grantha: "Parāśara Upapurāṇa & Nyāyasudhā Tradition",
      granthaDeva: "न्यायसुधा",
      author: "Classical Śāstra Lakṣaṇa",
      locator: "BSB 1.1.1; NS"
    },
    related: ["sutra", "tika", "tatparya", "katha"]
  },
  {
    id: "tika",
    deva: "टीका",
    iast: "ṭīkā",
    stem: "ṭīkā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["sub-commentary", "elucidation", "gloss"],
    phoneticAliases: ["tika", "teeka", "tikakara", "jayatirtha", "gloss"],
    pillar: "lakshana",
    domain: "Pramāṇa & Logic",
    lakshanaDeva: "निरन्तरं पदव्याख्या यस्यां सा टीकेति स्मृता ।",
    lakshanaIast: "nirantaraṃ padavyākhyā yasyāṃ sā ṭīketi smṛtā |",
    meaningShort: "A Ṭīkā (Elucidative Sub-Commentary) unfolds the continuous word-by-word and logical import of a root text or Bhāṣya.",
    meaningDeep: "In the Mādhva tradition, the title 'Ṭīkākāra' belongs uniquely to Śrī Jayatīrtha (1345–1388 CE), whose Nyāyasudhā and Tattvaprakāśikā unpacked every compressed sūtra and pramāṇa citation of Śrī Madhvācārya with unmatched dialectical grace.",
    padaccheda: [
      { deva: "निरन्तरम्", iast: "nirantaram", gloss: "unbroken, continuous" },
      { deva: "पद-व्याख्या", iast: "pada-vyākhyā", gloss: "elucidation of words and arguments" },
      { deva: "टीका", iast: "ṭīkā", gloss: "commentary that makes hidden sense clear (√ṭīk)" }
    ],
    source: {
      grantha: "Classical Kośa & Mādhva Śāstra Tradition",
      granthaDeva: "टीकापरम्परा",
      author: "Śrī Jayatīrtha Tradition",
      locator: "Hemacandra / NS Upodghāta"
    },
    related: ["bhashya", "sutra", "tatparya"]
  },
  {
    id: "itihasa",
    deva: "इतिहासः",
    iast: "itihāsaḥ",
    stem: "itihāsa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["history", "epic", "thus indeed it happened"],
    phoneticAliases: ["itihasa", "itihasah", "epic", "history"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "धर्मार्थकाममोक्षाणामुपदेशसमन्वितम् । पूर्ववृत्तं कथायुक्तमितिहासं प्रचक्षते ॥",
    lakshanaIast: "dharmārthakāmamokṣāṇām upadeśasamanvitam | pūrvavṛttaṃ kathāyuktam itihāsaṃ pracakṣate ||",
    meaningShort: "Itihāsa ('thus indeed it was' — iti-ha-āsa) is sacred historical epic narrating real past events woven with instruction in Dharma, Artha, Kāma, and Mokṣa.",
    meaningDeep: "Comprising Vālmīki's Rāmāyaṇa and Vedavyāsa's Mahābhārata, Itihāsa together with Purāṇa amplifies and clarifies the Veda ('itihāsapurāṇābhyāṃ vedaṃ samupabṛṃhayet').",
    padaccheda: [
      { deva: "इति-ह-आस", iast: "iti-ha-āsa", gloss: "'thus indeed it happened'" },
      { deva: "पूर्व-वृत्तम्", iast: "pūrva-vṛttam", gloss: "authentic account of ancient events" },
      { deva: "उपदेश-समन्वितम्", iast: "upadeśa-samanvitam", gloss: "imbued with spiritual and ethical teaching" }
    ],
    source: {
      grantha: "Viṣṇudharmottara & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "MBTN 1–2"
    },
    related: ["mahabharata", "ramayana", "purana", "purushartha", "veda"]
  },
  {
    id: "purana",
    deva: "पुराणम्",
    iast: "purāṇam",
    stem: "purāṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["Purana", "ancient cosmic chronicle", "sacred lore"],
    phoneticAliases: ["purana", "puranam", "pancalakshana", "bhagavata"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "सर्गश्च प्रतिसर्गश्च वंशो मन्वन्तराणि च । वंशानुचरितं चैव पुराणं पञ्चलक्षणम् ॥",
    lakshanaIast: "sargaś ca pratisargaś ca vaṃśo manvantarāṇi ca | vaṃśānucaritaṃ caiva purāṇaṃ pañcalakṣaṇam ||",
    meaningShort: "A Purāṇa is characterized by five classical themes (pañca-lakṣaṇa): primary creation, secondary recreation, divine lineages, cycles of Manus, and deeds of royal dynasties.",
    meaningDeep: "In the Bhāgavata Purāṇa (2.10.1), this expands to ten marks (daśa-lakṣaṇa) culminating in Āśraya — Supreme Viṣṇu as the sole independent refuge of all creation and liberation. Yāska also derives 'purāṇa' as 'purā navaṃ bhavati' — ancient yet ever fresh.",
    padaccheda: [
      { deva: "सर्गः", iast: "sargaḥ", gloss: "primary cosmic evolution" },
      { deva: "प्रतिसर्गः", iast: "pratisargaḥ", gloss: "dissolution and secondary creation" },
      { deva: "मन्वन्तराणि", iast: "manvantarāṇi", gloss: "epochs of the fourteen Manus" },
      { deva: "पञ्च-लक्षणम्", iast: "pañca-lakṣaṇam", gloss: "bearing five defining topics" }
    ],
    source: {
      grantha: "Amarakośa, Viṣṇu Purāṇa & Bhāgavatatātparyanirṇayaḥ",
      granthaDeva: "भागवततात्पर्यनिर्णयः · अमरकोशः",
      author: "Vedavyāsa, Amarasimha & Śrī Madhvācārya",
      locator: "AK 1.6.5; VP 3.6.24"
    },
    related: ["itihasa", "srishti", "veda", "paramatman"]
  },
  {
    id: "mahabharata",
    deva: "महाभारतम्",
    iast: "mahābhāratam",
    stem: "mahābhārata",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["Mahabharata", "fifth Veda", "Jaya epic"],
    phoneticAliases: ["mahabharata", "mahabharatam", "bharata", "pancama veda"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "महत्त्वाद्भारवत्त्वाच्च महाभारतमुच्यते । पञ्चमो वेद इत्युक्तः ।",
    lakshanaIast: "mahattvād bhāravattvāc ca mahābhāratam ucyate | pañcamo veda ity uktaḥ |",
    meaningShort: "The Mahābhārata — revered as the Fifth Veda — is so named for its vast magnitude (mahattva) and supreme spiritual weight (bhāravattva).",
    meaningDeep: "In Mahābhāratatātparyanirṇaya, Śrī Madhvācārya reveals the three simultaneous semantic levels (trai-bhāṣā) of the Mahābhārata: āstika (historical narrative), manvādi (allegory of inner Dharma vs. Adharma led by Bhīma/Vāyu), and uparicara (every syllable proclaiming Nārāyaṇa's supremacy).",
    padaccheda: [
      { deva: "महत्त्वात्", iast: "mahattvāt", gloss: "because of its vast scope (100,000 verses)" },
      { deva: "भारवत्त्वात्", iast: "bhāravattvāt", gloss: "because of its profound philosophical weight" },
      { deva: "महाभारतम्", iast: "mahābhāratam", gloss: "the great epic of Vedavyāsa" }
    ],
    source: {
      grantha: "Mahābhārata Ādiparva & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "MBh 1.1.209; MBTN 2"
    },
    related: ["itihasa", "bhagavadgita", "krishna", "mukhyaprana"]
  },
  {
    id: "ramayana",
    deva: "रामायणम्",
    iast: "rāmāyaṇam",
    stem: "rāmāyaṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["Ramayana", "Adikavya", "epic of Sri Rama"],
    phoneticAliases: ["ramayana", "ramayanam", "adikavya", "valmiki"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "रामस्यायनं चरितं यस्मिंस्तद् रामायणम् । वेदवेद्ये परे पुंसि जाते दशरथात्मजे ।",
    lakshanaIast: "rāmasyāyanaṃ caritaṃ yasmiṃs tad rāmāyaṇam | vedavedye pare puṃsi jāte daśarathātmaje |",
    meaningShort: "The Rāmāyaṇa ('the sacred course of Rāma') is the Ādikāvya in which the Veda itself manifested as poetry when the Supreme Person incarnated as Daśaratha's son.",
    meaningDeep: "Śrī Madhvācārya opens Mahābhāratatātparyanirṇaya Chapters 3–9 with a luminous condensation of the Mūla-Rāmāyaṇa and Vālmīki Rāmāyaṇa, showing Rāma's spotless sovereignty and Hanumān's supreme bhakti and jñāna.",
    padaccheda: [
      { deva: "रामस्य", iast: "rāmasya", gloss: "of Śrī Rāma, the Supreme Blissful Lord" },
      { deva: "अयनम्", iast: "ayanam", gloss: "sacred path, journey, and deeds" },
      { deva: "रामायणम्", iast: "rāmāyaṇam", gloss: "the epic of Rāma" }
    ],
    source: {
      grantha: "Vālmīki Rāmāyaṇam & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "वाल्मीकिरामायणम् · महाभारततात्पर्यनिर्णयः",
      author: "Vālmīki & Śrī Madhvācārya",
      locator: "MBTN 3–9"
    },
    related: ["rama", "itihasa", "mahabharata", "mukhyaprana"]
  },
  {
    id: "bhagavadgita",
    deva: "भगवद्गीता",
    iast: "bhagavadgītā",
    stem: "bhagavadgītā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Bhagavad Gita", "Song of the Lord"],
    phoneticAliases: ["bhagavadgita", "bhagavad gita", "gita", "geeta", "gitopanishad"],
    pillar: "lakshana",
    domain: "Sādhana & Mukti",
    lakshanaDeva: "भगवता श्रीकृष्णेन गीता उपनिषत् भगवद्गीता । सर्वभारतार्थसङ्ग्रहः ।",
    lakshanaIast: "bhagavatā śrīkṛṣṇena gītā upaniṣat bhagavadgītā | sarvabhāratārthasaṅgrahaḥ |",
    meaningShort: "The Bhagavadgītā is the 700-verse Upaniṣad sung directly by Bhagavān Śrī Kṛṣṇa on Kurukṣetra, distilling the entire essence of the Veda and Mahābhārata.",
    meaningDeep: "Śrī Madhvācārya dedicated two masterpieces to the Gītā — the Bhagavadgītābhāṣya and the Bhagavadgītātātparyanirṇaya — showing how detached svadharma, jñāna, and supreme bhakti unite without contradiction.",
    padaccheda: [
      { deva: "भगवता", iast: "bhagavatā", gloss: "by the six-attribute-replete Lord Śrī Kṛṣṇa" },
      { deva: "गीता", iast: "gītā", gloss: "sung, proclaimed in sacred verse (√gai)" },
      { deva: "उपनिषत्", iast: "upaniṣat", gloss: "liberating wisdom-text" }
    ],
    source: {
      grantha: "Bhagavadgītābhāṣyam & Bhagavadgītātātparyanirṇayaḥ",
      granthaDeva: "भगवद्गीताभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "BGB Upodghāta; BGTN 1"
    },
    related: ["krishna", "mahabharata", "yoga-darshana", "bhakti", "dharma"]
  },
  {
    id: "mukhyaprana",
    deva: "मुख्यप्राणः (वायुः)",
    iast: "mukhyaprāṇaḥ (vāyuḥ)",
    stem: "mukhyaprāṇa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["chief vital breath", "Vayu", "Jivottama", "mediator soul"],
    phoneticAliases: ["mukhyaprana", "mukhya prana", "vayu", "hanuman", "bhima", "madhva", "jivottama"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "चेतनेषु सर्वेषुोत्तमो भगवत्प्रियतमः प्राणनेता मुख्यप्राणः ।",
    lakshanaIast: "cetaneṣu sarveṣūttamo bhagavatpriyatamaḥ prāṇanetā mukhyaprāṇaḥ |",
    meaningShort: "Mukhyaprāṇa (Vāyu) is the supreme finite soul (Jīvottama) directly beneath Viṣṇu and Lakṣmī, presiding over vital breath, knowledge, strength, and devotion in every living being.",
    meaningDeep: "Proclaimed in the Balittha Sūkta (Ṛgveda 1.141) and Chāndogya / Bṛhadāraṇyaka Upaniṣads, Mukhyaprāṇa incarnated in three epochs as Hanumān, Bhīmasena, and Ānandatīrtha (Śrī Madhvācārya) to uphold Tattvajñāna.",
    padaccheda: [
      { deva: "मुख्य", iast: "mukhya", gloss: "foremost, chief among all finite souls" },
      { deva: "प्राणः", iast: "prāṇaḥ", gloss: "leader of vital breath and spiritual vigor" }
    ],
    source: {
      grantha: "Viṣṇutattvavinirṇayaḥ, Bṛhadāraṇyakabhāṣyam & Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "बृहदारण्यकोपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "BU 1.5; RV 1.141; MBTN 2"
    },
    related: ["prana", "riju", "taratamya", "caturmukha-brahma", "bharati"]
  },
  {
    id: "bharati",
    deva: "भारती",
    iast: "bhāratī",
    stem: "bhāratī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Bharati", "goddess of plenary speech and learning"],
    phoneticAliases: ["bharati", "bharathi", "vagdevi"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "भृता विद्यावती वा वागभिमानिनी वायुपत्नी भारती ।",
    lakshanaIast: "bhṛtā vidyāvatī vā vāgabhimāninī vāyupatnī bhāratī |",
    meaningShort: "Bhāratī Devī — consort of Mukhyaprāṇa (Vāyu) — is the presiding deity of luminous speech, devotion, and plenary scriptural comprehension.",
    meaningDeep: "Invoked alongside Iḷā and Sarasvatī in the Vedic Āprī hymns (Ṛgveda 1.13.9, 1.142.9), Bhāratī derives from bharata/bhāḥ ('radiance of knowledge') and stands alongside Sarasvatī at the pinnacle of Tāratamya below Brahmā-Vāyu.",
    padaccheda: [
      { deva: "भाः-रता / विद्यावती", iast: "bhāḥ-ratā / vidyāvatī", gloss: "rejoicing in the light of wisdom" },
      { deva: "वाक्-अभिमानिनी", iast: "vāk-abhimāninī", gloss: "presiding deity of sacred speech" },
      { deva: "भारती", iast: "bhāratī", gloss: "Goddess Bhāratī" }
    ],
    source: {
      grantha: "Ṛgbhāṣyam & Tantrasārasaṅgrahaḥ",
      granthaDeva: "ऋग्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "Ṛgbhāṣya 1.13.9, 1.142.9"
    },
    related: ["mukhyaprana", "sarasvati", "taratamya"]
  },
  {
    id: "caturmukha-brahma",
    deva: "चतुर्मुखब्रह्मा (हिरण्यगर्भः)",
    iast: "caturmukhabrahmā (hiraṇyagarbhaḥ)",
    stem: "caturmukhabrahman",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["four-faced Brahma", "Hiranyagarbha", "cosmic secondary creator"],
    phoneticAliases: ["caturmukha", "chaturmukha", "brahma", "hiranyagarbha", "virinca"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "भगवदधीनेन जगत्सर्गकर्ता ऋजुगणज्येष्ठः चतुर्मुखो ब्रह्मा ।",
    lakshanaIast: "bhagavadadhīnena jagatsargakartā ṛjugaṇajyeṣṭhaḥ caturmukho brahmā |",
    meaningShort: "Caturmukha Brahmā (Hiraṇyagarbha) is the senior-most Ṛju soul appointed by Viṣṇu to fashion the manifest cosmos within the Brahmāṇḍa and impart the four Vedas.",
    meaningDeep: "Tattvavāda carefully distinguishes 'Para-Brahman' (eternally independent Viṣṇu) from 'Kārya-Brahmā' (the four-faced soul sitting at the summit of finite Tāratamya, equal in rank to Mukhyaprāṇa, who attains sāyujya-mukti at the close of his hundred cosmic years).",
    padaccheda: [
      { deva: "भगवत्-अधीनेन", iast: "bhagavat-adhīnena", gloss: "entirely under the Sovereign Lord's power" },
      { deva: "जगत्-सर्ग-कर्ता", iast: "jagat-sarga-kartā", gloss: "secondary architect of cosmic manifestation" },
      { deva: "चतुर्मुखः", iast: "caturmukhaḥ", gloss: "four-faced reciter of the four Vedas" }
    ],
    source: {
      grantha: "Tattvasaṅkhyāna-ṭīkā & Bhāgavatatātparyanirṇayaḥ",
      granthaDeva: "भागवततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "BTN 3; TSK"
    },
    related: ["brahman", "riju", "mukhyaprana", "taratamya", "srishti"]
  },
  {
    id: "garuda",
    deva: "गरुडः (सुपर्णः)",
    iast: "garuḍaḥ (suparṇaḥ)",
    stem: "garuḍa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Garuda", "Suparna", "Vedic eagle mount of Vishnu"],
    phoneticAliases: ["garuda", "suparna", "vainateya"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "वेदाल्मा विहगेश्वरो भगवद्वाहनः सुपर्णो गरुडः ।",
    lakshanaIast: "vedātmā vihageśvaro bhagavadvāhanaḥ suparṇo garuḍaḥ |",
    meaningShort: "Garuḍa (Suparṇa) is the Vedic eagle-lord whose wings embody the Sāman chants and who bears Bhagavān Viṣṇu across the cosmos.",
    meaningDeep: "In Tāratamya, Garuḍa, Śeṣa, and Rudra stand immediately beneath Sarasvatī-Bhāratī. Derived from garut ('wing' of Vedic meter) + √ḍī ('to soar'), Garuḍa presides over citta/ahaṅkāra tattva in the cosmic hierarchy.",
    padaccheda: [
      { deva: "वेद-आत्मा", iast: "veda-ātmā", gloss: "embodying the Vedic meters in his wings" },
      { deva: "भगवत्-वाहनः", iast: "bhagavat-vāhanaḥ", gloss: "sacred vehicle of Lord Viṣṇu" },
      { deva: "गरुडः", iast: "garuḍaḥ", gloss: "he who soars on mighty wings" }
    ],
    source: {
      grantha: "Tantrasārasaṅgrahaḥ & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "तन्त्रसारसङ्ग्रहः",
      author: "Śrī Madhvācārya",
      locator: "TSS 3; MBTN 1"
    },
    related: ["shesha", "rudra", "taratamya", "vishnu"]
  },
  {
    id: "shesha",
    deva: "शेषः (अनन्तः)",
    iast: "śeṣaḥ (anantaḥ)",
    stem: "śeṣa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Shesha", "Ananta", "cosmic serpent couch of Vishnu"],
    phoneticAliases: ["shesha", "sesha", "ananta", "lakshmana", "balarama"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "कल्पान्तेऽपि शिष्यते भगवच्छय्यासनच्छत्ररूपः शेषः ।",
    lakshanaIast: "kalpānte 'pi śiṣyate bhagavacchayyāsanacchatrarūpaḥ śeṣaḥ |",
    meaningShort: "Śeṣa — the thousand-hooded lord who abides even at cosmic dissolution as Bhagavān's couch, throne, and canopy, and who upholds the earth and Vyākaraṇa (as Patañjali).",
    meaningDeep: "Equal in Tāratamya rank with Garuḍa and Rudra, Śeṣa incarnates in service of the Lord as Lakṣmaṇa, Balarāma, and Patañjali (author of the Mahābhāṣya).",
    padaccheda: [
      { deva: "शिष्यते", iast: "śiṣyate", gloss: "remains, abides through dissolution (√śiṣ)" },
      { deva: "भगवत्-शय्या", iast: "bhagavat-śayyā", gloss: "serpent-couch of Nārāyaṇa on the Milk Ocean" },
      { deva: "शेषः", iast: "śeṣaḥ", gloss: "Lord Śeṣa" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ & Viṣṇu Purāṇa",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya",
      locator: "MBTN 1; VP 2.5"
    },
    related: ["garuda", "rudra", "taratamya", "narayana"]
  },
  {
    id: "rudra",
    deva: "रुद्रः (शिवः)",
    iast: "rudraḥ (śivaḥ)",
    stem: "rudra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Rudra", "Shiva", "auspicious lord of manas and cosmic dissolution"],
    phoneticAliases: ["rudra", "shiva", "siva", "maheshvara", "shankara"],
    pillar: "lakshana",
    domain: "Tattva & Ontology",
    lakshanaDeva: "रुजं द्रावयतीति रुद्रः । मनोऽभिमानी परमभागवतः शिवः ।",
    lakshanaIast: "rujaṃ drāvayatīti rudraḥ | mano'bhimānī paramabhāgavataḥ śivaḥ |",
    meaningShort: "Rudra (Śiva) — 'he who drives away sorrow and disease (rujaṃ drāvayati)' — is the presiding deity of Manas (mind), cosmic dissolution, and ascetic devotion to Viṣṇu.",
    meaningDeep: "In Tattvavāda, Śiva is venerated alongside Garuḍa and Śeṣa as a supreme Vaiṣṇava ('vaiṣṇavānāṃ yathā śambhuḥ' — Bhāgavata 12.13.16); meanwhile, in supreme mahāyoga, Vedic names like 'Śiva' and 'Rudra' also signify Nārāyaṇa Himself as pure auspiciousness.",
    padaccheda: [
      { deva: "रुजम्", iast: "rujam", gloss: "affliction, sorrow, bondage" },
      { deva: "द्रावयति", iast: "drāvayati", gloss: "drives away, melts away (causative of √dru)" },
      { deva: "मनः-अभिमानी", iast: "manaḥ-abhimānī", gloss: "presiding deity of the mind principle" }
    ],
    source: {
      grantha: "Ṛgbhāṣyam, Mahābhāratatātparyanirṇayaḥ & Nirukta",
      granthaDeva: "महाभारततात्पर्यनिर्णयः",
      author: "Śrī Madhvācārya & Yāska",
      locator: "MBTN 1; Nirukta 10.5; BhP 12.13.16"
    },
    related: ["manas", "garuda", "shesha", "taratamya"]
  },
  // --- NIRUKTI EXPANSION (Vaidika & Bhagavan-Nāma / Daśāvatāra Niruktis) ---
  {
    id: "sarasvati",
    deva: "सरस्वती",
    iast: "sarasvatī",
    stem: "sarasvatī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Sarasvati", "goddess of wisdom and sacred river", "eloquence"],
    phoneticAliases: ["sarasvati", "saraswati", "sharada", "vani"],
    pillar: "nirukti",
    domain: "Vaidika Nirukti",
    lakshanaDeva: "सरः प्रसरणं ज्ञानं तद्वती सरस्वती । चोदयित्री सूनृतानां चेतन्ती सुमतीनाम् ॥",
    lakshanaIast: "saraḥ prasaraṇaṃ jñānaṃ tadvatī sarasvatī | codayitrī sūnṛtānāṃ cetantī sumatīnām ||",
    meaningShort: "Sarasvatī — 'she who abounds in the flowing waters of wisdom (saras)' — is the Vedic inspirer of truthful, gracious speech and awakener of noble intellects.",
    meaningDeep: "From √sṛ ('to flow') + -as (saras, 'flowing stream or expanse of knowledge') + -matup, Sarasvatī denotes the consort of Caturmukha Brahmā presiding over Vedic speech, the sacred Vedic river, and ultimately Bhagavān Himself as the ocean of all knowledge.",
    padaccheda: [
      { deva: "सरः", iast: "saraḥ", gloss: "flowing stream of speech and knowledge (√sṛ)" },
      { deva: "तद्वती", iast: "tadvatī", gloss: "richly possessing that plenitude (-vatī)" },
      { deva: "सूनृतानाम्", iast: "sūnṛtānām", gloss: "of words that are both true and benevolent" }
    ],
    source: {
      grantha: "Ṛgveda & Ṛgbhāṣyam",
      granthaDeva: "ऋग्भाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "RV 1.3.11; Nirukta 11.25"
    },
    related: ["bharati", "caturmukha-brahma", "veda", "taratamya"]
  },
  {
    id: "gayatri",
    deva: "गायत्री",
    iast: "gāyatrī",
    stem: "gāyatrī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Gayatri", "Savitri mantra", "24-syllable Vedic meter"],
    phoneticAliases: ["gayatri", "gaayatri", "savitri mantra"],
    pillar: "nirukti",
    domain: "Vaidika Nirukti",
    lakshanaDeva: "गायन्तं त्रायते यस्माद् गायत्रीत्यभिधीयते । गायत्री वा इदं सर्वं भूतं यदिदं किञ्च ॥",
    lakshanaIast: "gāyantaṃ trāyate yasmād gāyatrīty abhidhīyate | gāyatrī vā idaṃ sarvaṃ bhūtaṃ yad idaṃ kiñca ||",
    meaningShort: "Gāyatrī — 'that which protects and liberates (trāyate) the one who chants and meditates upon it (gāyantam)' — both the mother of Vedic meters and a name of Savitṛ-Nārāyaṇa.",
    meaningDeep: "In Chāndogya Upaniṣad 3.12 and Bṛhadāraṇyaka 5.14, Madhvācārya explains how 'Gāyatrī' primarily denotes Supreme Brahman dwelling inside the solar orb and inside the lotus of the heart, praised through Viśvāmitra's 24-syllable Tat-Savitur mantra (RV 3.62.10).",
    padaccheda: [
      { deva: "गायन्तम्", iast: "gāyantam", gloss: "the chanter / meditator (√gai)" },
      { deva: "त्रायते", iast: "trāyate", gloss: "protects, delivers from bondage (√trai)" },
      { deva: "गायत्री", iast: "gāyatrī", gloss: "the saving Vedic meter and mantra" }
    ],
    source: {
      grantha: "Chāndogyopaniṣad-bhāṣyam & Nirukta",
      granthaDeva: "छान्दोग्योपनिषद्भाष्यम्",
      author: "Śrī Madhvācārya & Yāska",
      locator: "CU 3.12.1; BU 5.14; Nirukta 7.12"
    },
    related: ["savitri-deva", "chandas", "om", "vyahriti"]
  },
  {
    id: "savitri-deva",
    deva: "सविता",
    iast: "savitā",
    stem: "savitṛ",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Savitri", "vivifier", "impeller of all worlds", "inner Lord of the sun"],
    phoneticAliases: ["savitri", "savita", "savitar", "tatsavitur"],
    pillar: "nirukti",
    domain: "Vaidika Nirukti",
    lakshanaDeva: "सर्वस्य प्रसवितेति सविता । धियो यो नः प्रचोदयात् ।",
    lakshanaIast: "sarvasya prasaviteti savitā | dhiyo yo naḥ pracodayāt |",
    meaningShort: "Savitā (Savitṛ) — 'the Supreme Vivifier and Impeller of the entire universe' (√sū, prasava) who awakens and guides our intellects from within.",
    meaningDeep: "While Savitā secondarily designates the solar deity Sūrya, Madhvācārya demonstrates in Ṛgbhāṣya (on RV 3.62.10) that the independent 'bhargaḥ' (radiant omniscient Lord) who impels even Sūrya and all intellects ('dhiyo yo naḥ pracodayāt') is Viṣṇu Himself.",
    padaccheda: [
      { deva: "सर्वस्य", iast: "sarvasya", gloss: "of the entire cosmos and all souls" },
      { deva: "प्रसविता", iast: "prasavitā", gloss: "the bringer-forth and inner impeller (pra-√sū + -tṛc)" },
      { deva: "धियः प्रचोदयात्", iast: "dhiyaḥ pracodayāt", gloss: "may He inspire and direct our understandings" }
    ],
    source: {
      grantha: "Ṛgbhāṣyam & Nirukta",
      granthaDeva: "ऋग्भाष्यम् · निरुक्तम्",
      author: "Śrī Madhvācārya & Yāska",
      locator: "RV 3.62.10; Nirukta 10.31"
    },
    related: ["gayatri", "pusha", "vishnu", "indra"]
  },
  {
    id: "varuna",
    deva: "वरुणः",
    iast: "varuṇaḥ",
    stem: "varuṇa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Varuna", "lord of cosmic order and waters", "all-enveloping Lord"],
    phoneticAliases: ["varuna", "varunah"],
    pillar: "nirukti",
    domain: "Vaidika Nirukti",
    lakshanaDeva: "वृणोतीति वरुणः । वरणीयतमो वा परमात्मा वरुणः ।",
    lakshanaIast: "vṛṇotīti varuṇaḥ | varaṇīyatamo vā paramātman varuṇaḥ |",
    meaningShort: "Varuṇa — 'He who envelops and regulates all worlds (vṛṇoti), and who is supremely worthy of choice (varaṇīya)' — guardian of Ṛta and waters, and in mahāyoga, Supreme Viṣṇu.",
    meaningDeep: "From √vṛ ('to encompass, choose') + -unaन् (Uṇādi 3.53), Varuṇa presides over the western quarter, oceans, and moral-cosmic order (ṛta), while in Taittirīya Upaniṣad ('śaṃ no mitraḥ śaṃ varuṇaḥ') it also praises the all-enveloping Supreme Lord.",
    padaccheda: [
      { deva: "वृणोति", iast: "vṛṇoti", gloss: "encompasses, pervades, governs (√vṛ)" },
      { deva: "वरणीयतमः", iast: "varaṇīyatamaḥ", gloss: "most worthy of being chosen and sought" },
      { deva: "वरुणः", iast: "varuṇaḥ", gloss: "Varuṇa" }
    ],
    source: {
      grantha: "Taittirīyopaniṣad-bhāṣyam & Nirukta",
      granthaDeva: "तैत्तिरीयोपनिषद्भाष्यम् · निरुक्तम्",
      author: "Śrī Madhvācārya & Yāska",
      locator: "TU 1.1; Nirukta 10.3"
    },
    related: ["agni", "indra", "pusha", "vishnu"]
  },
  {
    id: "soma",
    deva: "सोमः",
    iast: "somaḥ",
    stem: "soma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Soma", "nectar of bliss", "moon", "Umapati"],
    phoneticAliases: ["soma", "somah", "indu"],
    pillar: "nirukti",
    domain: "Vaidika Nirukti",
    lakshanaDeva: "सूयते इति सोमः । उमायाः श्रियः पतिः सोमो वा परमात्मा ।",
    lakshanaIast: "sūyate iti somaḥ | umāyāḥ śriyaḥ patiḥ somo vā paramātmā |",
    meaningShort: "Soma — 'that which is pressed and distilled in Vedic sacrifice (√su)', the cooling Moon, and in mahāyoga 'Sa-Umā' — the Supreme Lord ever accompanied by Lakṣmī (Umā).",
    meaningDeep: "Book 9 of the Ṛgveda (Pavamāna Maṇḍala) is devoted entirely to Soma; Madhvācārya and Yāska trace Soma both to √su ('to press out ambrosia / bring forth') and to sa + umā (the Lord united with Śrī/Lakṣmī, luminous wisdom).",
    padaccheda: [
      { deva: "सूयते", iast: "sūyate", gloss: "is pressed forth as sacred ambrosia (√su)" },
      { deva: "स-उमः", iast: "sa-umaḥ", gloss: "ever united with Umā (Lakṣmī / Supreme Wisdom)" },
      { deva: "सोमः", iast: "somaḥ", gloss: "Soma" }
    ],
    source: {
      grantha: "Ṛgbhāṣyam & Nirukta",
      granthaDeva: "ऋग्भाष्यम् · निरुक्तम्",
      author: "Śrī Madhvācārya & Yāska",
      locator: "Nirukta 11.2; Kaivalya / TU Bhāṣya"
    },
    related: ["lakshmi", "agni", "yajus", "paramatman"]
  },
  {
    id: "shri-nirukti",
    deva: "श्रीः",
    iast: "śrīḥ",
    stem: "śrī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["Shri", "grace", "radiance", "auspiciousness", "Goddess Lakshmi"],
    phoneticAliases: ["shri", "sri", "shree", "sree", "lakshmi"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "श्रयति हरिं श्रयन्ते च तां मुक्ता इति श्रीः ।",
    lakshanaIast: "śrayati hariṃ śrayante ca tāṃ muktā iti śrīḥ |",
    meaningShort: "Śrī — 'She who eternally resorts to Hari alone, and to whom all liberated and noble beings resort for grace' (√śri, service and refuge).",
    meaningDeep: "Celebrated in the Vedic Śrī-Sūkta, 'Śrī' denotes Mahālakṣmī (nitya-mukta, co-pervasive across space and time yet eternally devoted to Viṣṇu) and derivatively all spiritual luster, wisdom, royal dignity, and auspiciousness.",
    padaccheda: [
      { deva: "श्रयति हरिम्", iast: "śrayati harim", gloss: "eternally serves and abides in Lord Hari (√śri)" },
      { deva: "श्रयन्ते ताम्", iast: "śrayante tām", gloss: "all beings seek refuge in Her" },
      { deva: "श्रीः", iast: "śrīḥ", gloss: "Goddess Śrī / divine grace" }
    ],
    source: {
      grantha: "Brahmasūtrabhāṣyam & Śrīsūkta Tradition",
      granthaDeva: "ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Madhvācārya",
      locator: "BSB 4.2; Śrīsūkta"
    },
    related: ["lakshmi", "shridhara", "madhava", "aduhkhasprishta", "hari"]
  },
  {
    id: "madhava",
    deva: "माधवः",
    iast: "mādhavaḥ",
    stem: "mādhava",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Madhava", "Lord of Lakshmi", "knower through sweet wisdom"],
    phoneticAliases: ["madhava", "maadhava", "lakshmipati"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "मायाः श्रियाः धवः पतिरिति माधवः । मौनाद्ध्यानाच्च योगाच्च विद्धि भारत माधवम् ॥",
    lakshanaIast: "māyāḥ śriyāḥ dhavaḥ patir iti mādhavaḥ | maunād dhyānāc ca yogāc ca viddhi bhārata mādhavam ||",
    meaningShort: "Mādhava — 'the eternal Consort (dhava) of Mā (Mahālakṣmī)', and He who is realized through contemplative silence (mauna), meditation (dhyāna), and yoga.",
    meaningDeep: "The second of the twenty-four Keśavādi vyūha names, Mādhava unites two luminous derivations from the Mahābhārata (Udyogaparva 70.4) and Tantrasārasaṅgraha: Mā + dhava (Lord of Lakṣmī, Knowledge-Goddess) and Madhu-vidyā (Supreme Bliss known by sages).",
    padaccheda: [
      { deva: "मायाः (श्रियाः)", iast: "māyāḥ (śriyāḥ)", gloss: "of Mā, Goddess Lakṣmī (embodiment of measureless wisdom)" },
      { deva: "धवः", iast: "dhavaḥ", gloss: "eternal Lord and consort" },
      { deva: "माधवः", iast: "mādhavaḥ", gloss: "Bhagavān Mādhava" }
    ],
    source: {
      grantha: "Mahābhārata Udyogaparva & Mahābhāratatātparyanirṇayaḥ",
      granthaDeva: "उद्योगपर्व · महाभारततात्पर्यनिर्णयः",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "MBh 5.70.4; TSS 1"
    },
    related: ["lakshmi", "shri-nirukti", "keshava", "narayana", "govinda"]
  },
  {
    id: "shridhara",
    deva: "श्रीधरः",
    iast: "śrīdharaḥ",
    stem: "śrīdhara",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Shridhara", "bearer of Goddess Shri on His chest"],
    phoneticAliases: ["shridhara", "sridhara", "shreedhara"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "श्रियं वक्षसि धरतीति श्रीधरः ।",
    lakshanaIast: "śriyaṃ vakṣasi dharatīti śrīdharaḥ |",
    meaningShort: "Śrīdhara — 'He who bears Mahālakṣmī eternally upon His chest with supreme affection' (śrī + √dhṛ).",
    meaningDeep: "One of the twelve monthly Āditya-Keśava forms, Śrīdhara signifies that all cosmic splendor, grace, and Vedic wisdom (Śrī) rest upon and are sustained solely by Viṣṇu.",
    padaccheda: [
      { deva: "श्रियम्", iast: "śriyam", gloss: "Goddess Lakṣmī / supreme radiance" },
      { deva: "धरति", iast: "dharati", gloss: "bears, sustains upon His heart (√dhṛ)" },
      { deva: "श्रीधरः", iast: "śrīdharaḥ", gloss: "Lord Śrīdhara" }
    ],
    source: {
      grantha: "Viṣṇusahasranāmam & Tantrasārasaṅgrahaḥ",
      granthaDeva: "विष्णुसहस्रनामम्",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "VSN 610; TSS 1"
    },
    related: ["shri-nirukti", "lakshmi", "madhava", "hrishikesha"]
  },
  {
    id: "adhokshaja",
    deva: "अधोक्षजः",
    iast: "adhokṣajaḥ",
    stem: "adhokṣaja",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Adhokshaja", "transcending material sense-perception"],
    phoneticAliases: ["adhokshaja", "adhoksaja"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "अधो न क्षीयते जातु यस्मात्तस्मादधोक्षजः । अक्षजं ऐन्द्रियं ज्ञानं तदधःकृतवान् वा ।",
    lakshanaIast: "adho na kṣīyate jātu yasmāt tasmād adhokṣajaḥ | akṣajaṃ aindriyaṃ jñānaṃ tad adhaḥkṛtavān vā |",
    meaningShort: "Adhokṣaja — 'He who never diminishes or falls downward (adho na kṣīyate), and before whom ordinary sense-born cognition (akṣaja) bows down without exhausting Him.'",
    meaningDeep: "Expounded in Mahābhārata Udyogaparva (70.10) and Bhāgavata, Adhokṣaja captures Viṣṇu's dual majesty: completely unexhausted in sovereign fullness, and unreachable by ungraced material senses.",
    padaccheda: [
      { deva: "अधः न क्षीयते", iast: "adhaḥ na kṣīyate", gloss: "never declines or suffers diminution" },
      { deva: "अक्षजम् अधःकृतवान्", iast: "akṣajam adhaḥkṛtavān", gloss: "transcends material sensory cognition (akṣa-ja)" }
    ],
    source: {
      grantha: "Mahābhārata Udyogaparva & Viṣṇusahasranāmam",
      granthaDeva: "उद्योगपर्व · विष्णुसहस्रनामम्",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "MBh 5.70.10; VSN 415"
    },
    related: ["acyuta", "vishnu", "hrishikesha", "aparokshajnana"]
  },
  {
    id: "upendra",
    deva: "उपेन्द्रः",
    iast: "upendraḥ",
    stem: "upendra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Upendra", "younger brother of Indra (Vamana)", "Lord above Indra"],
    phoneticAliases: ["upendra", "upendrah"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "इन्द्रस्यानुजो भूत्वा इन्द्रस्योपरि वर्तते इति उपेन्द्रः ।",
    lakshanaIast: "indrasyānujo bhūtvā indrasyopari vartate iti upendraḥ |",
    meaningShort: "Upendra — 'He who graciously appeared as Indra's younger brother (as Aditi's son Vāmana), and who simultaneously reigns supreme above (upari) Indra.'",
    meaningDeep: "The Sanskrit prefix upa carries both proximity/younger-brotherhood (sāmīpya) and superiority (ādhikya), making Upendra a jewel of compact Sanskrit nirukti.",
    padaccheda: [
      { deva: "उप", iast: "upa", gloss: "beside (as younger brother) and above (in supremacy)" },
      { deva: "इन्द्रः", iast: "indraḥ", gloss: "Indra, king of the celestials" },
      { deva: "उपेन्द्रः", iast: "upendraḥ", gloss: "Lord Upendra" }
    ],
    source: {
      grantha: "Harivaṃśa & Viṣṇusahasranāmam",
      granthaDeva: "हरिवंशः · विष्णुसहस्रनामम्",
      author: "Vedavyāsa",
      locator: "VSN 151; HV 2.76"
    },
    related: ["vamana", "trivikrama", "indra", "vishnu"]
  },
  {
    id: "hayagriva",
    deva: "हयग्रीवः",
    iast: "hayagrīvaḥ",
    stem: "hayagrīva",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Hayagriva", "horse-necked Lord of Vedic wisdom"],
    phoneticAliases: ["hayagriva", "hayagreeva", "hayashirsha", "vagishvara"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम् । आधारं सर्वविद्यानां हयग्रीवमुपास्महे ॥",
    lakshanaIast: "jñānānandamayaṃ devaṃ nirmalasphaṭikākṛtim | ādhāraṃ sarvavidyānāṃ hayagrīvam upāsmahe ||",
    meaningShort: "Hayagrīva — the crystal-radiant, horse-necked manifestation of Bhagavān Viṣṇu, constituted of pure consciousness and bliss, who rescued the Vedas and sustains all learning.",
    meaningDeep: "Revered especially by Śrī Vādirāja Tīrtha and throughout the Pāñcarātra and Mahābhārata (Śāntiparva Hayagrīva-upākhyāna), 'haya' derives from √hi ('to impel knowledge forward'): He whose very voice breathes forth the uncreated Vedas.",
    padaccheda: [
      { deva: "ज्ञान-आनन्द-मयम्", iast: "jñāna-ānanda-mayam", gloss: "whose essence is plenary knowledge and bliss" },
      { deva: "आधारम् सर्वविद्यानाम्", iast: "ādhāram sarvavidyānām", gloss: "substratum of every branch of learning" },
      { deva: "हय-ग्रीवम्", iast: "haya-grīvam", gloss: "the radiant horse-necked Lord" }
    ],
    source: {
      grantha: "Pāñcarātra Āgama & Mahābhārata Śāntiparva",
      granthaDeva: "पाञ्चरात्रागमः · महाभारतम्",
      author: "Pāñcarātra / Vedavyāsa",
      locator: "MBh 12.347"
    },
    related: ["veda", "vishnu", "ishvarajnana", "kapila"]
  },
  {
    id: "matsya-avatara",
    deva: "मत्स्यः (अवतारः)",
    iast: "matsyaḥ (avatāraḥ)",
    stem: "matsya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Matsya", "First Dashavatara", "divine fish avatar"],
    phoneticAliases: ["matsya", "matsyavatara", "fish avatar"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "माद्यति मोदते प्रलयार्णवे वेदं गोपायतीति मत्स्यः ।",
    lakshanaIast: "mādyati modate pralayārṇave vedaṃ gopāyatīti matsyaḥ |",
    meaningShort: "Matsya — the inaugural Daśāvatāra who sports blissfully (mādyati/modate) across the cosmic deluge, retrieves the Vedas from Hayagrīva-daitya, and guides Vaivasvata Manu's ark.",
    meaningDeep: "Derived from √mad ('to rejoice, delight'), Bhagavān's Matsya form demonstrates that even in universal dissolution His bliss is undiminished and His protection of Veda and satsajjanas never ceases.",
    padaccheda: [
      { deva: "माद्यति / मोदते", iast: "mādyati / modate", gloss: "rejoices in sovereign bliss (√mad)" },
      { deva: "प्रलय-अर्णवे", iast: "pralaya-arṇave", gloss: "amidst the waters of cosmic dissolution" },
      { deva: "मत्स्यः", iast: "matsyaḥ", gloss: "Lord Matsya" }
    ],
    source: {
      grantha: "Bhāgavata Purāṇa & Jayantīkalpa / Dvādaśastotram",
      granthaDeva: "भागवतपुराणम् · द्वादशस्तोत्रम्",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "BhP 8.24; DS 4.1"
    },
    related: ["kurma-avatara", "varaha", "veda", "vishnu"]
  },
  {
    id: "kurma-avatara",
    deva: "कूर्मः (अवतारः)",
    iast: "kūrmaḥ (avatāraḥ)",
    stem: "kūrma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Kurma", "tortoise avatar", "upholder of Mount Mandara"],
    phoneticAliases: ["kurma", "koorma", "kurmavatara", "kacchapa"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "कौ उदके ऊर्मिषु तिष्ठन् मन्दरं धारयतीति कूर्मः ।",
    lakshanaIast: "kau udake ūrmiṣu tiṣṭhan mandaraṃ dhārayatīti kūrmaḥ |",
    meaningShort: "Kūrma — the second Daśāvatāra who effortlessly supported Mount Mandara on His vast shell within the Milk Ocean during the churning for Amṛta.",
    meaningDeep: "Praised by Śrī Madhvācārya in Dvādaśastotra ('sukha-rūpa-tanū-manasā'calitaṃ mandaragiridhāriṇam'), Kūrma reveals Bhagavān as the unshakable foundation beneath every cosmic endeavor.",
    padaccheda: [
      { deva: "कौ (उदके)", iast: "kau (udake)", gloss: "in the primeval waters" },
      { deva: "मन्दरं धारयति", iast: "mandaraṃ dhārayati", gloss: "upholds Mount Mandara effortlessly" },
      { deva: "कूर्मः", iast: "kūrmaḥ", gloss: "Lord Kūrma" }
    ],
    source: {
      grantha: "Bhāgavata Purāṇa & Dvādaśastotram",
      granthaDeva: "द्वादशस्तोत्रम्",
      author: "Śrī Madhvācārya",
      locator: "BhP 8.7; DS 4.2"
    },
    related: ["matsya-avatara", "varaha", "lakshmi", "vishnu"]
  },
  {
    id: "varaha",
    deva: "वराहः",
    iast: "varāhaḥ",
    stem: "varāha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Varaha", "boar avatar", "uplifter of Earth"],
    phoneticAliases: ["varaha", "varaaha", "bhuvaraha", "yajnavaraha"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "वरान् अहन् दैत्यान् इति वराहः । वरम् आहरति महीं वेति वराहः ।",
    lakshanaIast: "varān ahan daityān iti varāhaḥ | varam āharati mahīṃ veti varāhaḥ |",
    meaningShort: "Varāha — 'He who struck down the arrogant demon Hiraṇyākṣa (varān ahan) and lifted up the precious Earth (varam āharati)' upon His tusk as Yajña-Varāha.",
    meaningDeep: "Both Yāska (Nirukta 5.4) and the Bhāgavata (3.13–19) celebrate Varāha as the very embodiment of Vedic sacrifice (Yajña-puruṣa) whose every limb is a hymn, meter, and oblation.",
    padaccheda: [
      { deva: "वरान् अहन्", iast: "varān ahan", gloss: "vanquished the boon-proud demons (√han)" },
      { deva: "वरम् आहरति", iast: "varam āharati", gloss: "retrieves and uplifts the choicest Earth (ā-√hṛ)" },
      { deva: "वराहः", iast: "varāhaḥ", gloss: "Lord Varāha" }
    ],
    source: {
      grantha: "Bhāgavata Purāṇa, Nirukta & Dvādaśastotram",
      granthaDeva: "भागवतपुराणम् · द्वादशस्तोत्रम्",
      author: "Vedavyāsa, Yāska & Śrī Madhvācārya",
      locator: "BhP 3.13; Nirukta 5.4; DS 4.3"
    },
    related: ["narasimha", "kurma-avatara", "vamana", "vishnu"]
  },
  {
    id: "parashurama",
    deva: "परशुरामः (भार्गवरामः)",
    iast: "paraśurāmaḥ (bhārgavarāmaḥ)",
    stem: "paraśurāma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Parashurama", "Bhargava Rama", "sixth Dashavatara"],
    phoneticAliases: ["parashurama", "parasurama", "bhargava", "jamadagnya"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "परशुना दुष्टक्षत्रं निहत्य सज्जनान् रमयतीति परशुरामः ।",
    lakshanaIast: "paraśunā duṣṭakṣatraṃ nihatya sajjanān ramayatīti paraśurāmaḥ |",
    meaningShort: "Paraśurāma — the sage-warrior avatāra in the lineage of Bhṛgu who wielded the battle-axe (paraśu) to quell tyrannical rulers and bring peace and joy (rāma) to the righteous.",
    meaningDeep: "Along the western coastal strip (Paraśurāma-kṣetra, including Udupi and Banavasi), Paraśurāma is especially revered as the establisher of sacred temples and protector of Vedic dharma.",
    padaccheda: [
      { deva: "परशुना", iast: "paraśunā", gloss: "with the gleaming axe of justice" },
      { deva: "रमयति", iast: "ramayati", gloss: "gladdens the virtuous (√ram)" },
      { deva: "परशुरामः", iast: "paraśurāmaḥ", gloss: "Lord Paraśurāma" }
    ],
    source: {
      grantha: "Mahābhāratatātparyanirṇayaḥ & Dvādaśastotram",
      granthaDeva: "महाभारततात्पर्यनिर्णयः · द्वादशस्तोत्रम्",
      author: "Śrī Madhvācārya",
      locator: "MBTN 2; DS 4.6"
    },
    related: ["rama", "vamana", "krishna", "dharma"]
  },
  {
    id: "kalki",
    deva: "कल्किः",
    iast: "kalkiḥ",
    stem: "kalkin",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Kalki", "tenth Dashavatara", "remover of Kali's impurity"],
    phoneticAliases: ["kalki", "kalkin", "kalkyavatara"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "कल्कं कलिमलम् अस्यति नाशयतीति कल्किः ।",
    lakshanaIast: "kalkaṃ kalimalam asyati nāśayatīti kalkiḥ |",
    meaningShort: "Kalki — 'He who dispels the dross and spiritual darkness (kalka) of the Kali age' and re-inaugurates Kṛta-yuga righteousness.",
    meaningDeep: "As the tenth Daśāvatāra foretold in Bhāgavata Purāṇa 12.2 and praised in Śrī Madhvācārya's Dvādaśastotra, Kalki embodies the certainty that adharma is temporally bounded and divine order always prevails.",
    padaccheda: [
      { deva: "कल्कम्", iast: "kalkam", gloss: "impurity, moral taint of Kali" },
      { deva: "नाशयति", iast: "nāśayati", gloss: "eradicates completely" },
      { deva: "कल्किः", iast: "kalkiḥ", gloss: "Lord Kalki" }
    ],
    source: {
      grantha: "Bhāgavata Purāṇa & Dvādaśastotram",
      granthaDeva: "भागवतपुराणम् · द्वादशस्तोत्रम्",
      author: "Vedavyāsa & Śrī Madhvācārya",
      locator: "BhP 12.2; DS 4.10"
    },
    related: ["krishna", "dharma", "kala", "vishnu"]
  },
  {
    id: "vitthala",
    deva: "विट्ठलः",
    iast: "viṭṭhalaḥ",
    stem: "viṭṭhala",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["Vitthala", "Panduranga", "Lord standing on the brick for devotees"],
    phoneticAliases: ["vitthala", "vithala", "panduranga", "vittala"],
    pillar: "nirukti",
    domain: "Bhagavan-Nāma Nirukti",
    lakshanaDeva: "विदा ज्ञानेन ठान् शून्यान् अज्ञानिनो लाति गृह्णाति अनुगृह्णातीति विट्ठलः ।",
    lakshanaIast: "vidā jñānena ṭhān śūnyān ajñānino lāti gṛhṇāti anugṛhṇātīti viṭṭhalaḥ |",
    meaningShort: "Viṭṭhala — 'He who through spiritual wisdom (vidā) graciously accepts and uplifts (lāti) even the destitute and ignorant (ṭhān)' — hands poised on His waist in Pandharpur.",
    meaningDeep: "Celebrated across both the Haridāsa (Purandaradāsa, Vijayadāsa) and Vārkarī traditions, this classical akṣara-nirukti (vid + ṭha + √lā) illuminates how Supreme Brahman stands accessible to humble bhaktas.",
    padaccheda: [
      { deva: "विदा", iast: "vidā", gloss: "by imparting true knowledge (√vid)" },
      { deva: "ठान्", iast: "ṭhān", gloss: "those devoid of merit or knowledge (ekākṣara 'ṭha' = śūnya)" },
      { deva: "लाति", iast: "lāti", gloss: "embraces and uplifts (√lā)" }
    ],
    source: {
      grantha: "Padma Purāṇam & Haridāsa / Mādhva Nirukti Tradition",
      granthaDeva: "पद्मपुराणम्",
      author: "Purāṇa & Haridāsa Tradition",
      locator: "Padma Purāṇa Pāṇḍuraṅga-māhātmya"
    },
    related: ["krishna", "bhakti", "sharanagati", "mukunda"]
  }
];
