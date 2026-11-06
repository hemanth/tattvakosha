// Foundational Sanskrit Kosha — Part 1: Prakṛti & Loka (Nature & Cosmos) and Śarīra & Jīva-Jāti (Body & Beings)
// Grounded in Amarasimha's Amarakośa (Nāmaliṅgānuśāsanam), Yāska's Nirukta,
// Vedic Saṃhitās & Upaniṣads, Bhagavadgītā, Nyāya-Padārtha Lakṣaṇas, and Śrī Madhvācārya's Sarvamūla Granthāḥ.

export const koshaPrakritiShariraEntries = [
  // ============================================================================
  // DOMAIN 1: Prakṛti & Loka (Nature & Cosmos) — 60 Entries
  // ============================================================================
  {
    id: "surya",
    deva: "सूर्यः",
    iast: "sūryaḥ",
    stem: "sūrya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["sun", "solar orb", "sun-god", "daystar"],
    phoneticAliases: ["surya", "soorya", "aditya", "ravi", "bhanu", "savitri", "sun"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "सरति आकाशे इति सूर्यः । सूर्य आत्मा जगतस्तस्थुषश्च ॥",
    lakshanaIast: "sarati ākāśe iti sūryaḥ | sūrya ātmā jagatas tasthuṣaś ca ||",
    meaningShort: "The Sun — the self-luminous celestial orb that courses across the firmament and animates all moving and stationary beings.",
    meaningDeep: "Yāska derives `sūrya` in Nirukta 12.14 from √sṛ ('to move across space', `sarti ākāśe`), √sū ('to impel beings into action', `suvīrya` / `prasavitā`), or √svṛ ('to shine luminously'). Amarakośa (Digvarga) groups `sūrya` with `āditya`, `savitṛ`, `arka`, `bhānu`, `ravi`, `pūṣan`, and `divākara`. In Vedic and Tattvavāda exegesis (Ṛgbhāṣya & Chāndogyabhāṣya), Vivasvān Sūrya is the presiding deity of vision (`cakṣur-abhimānī`), while the supreme indwelling Ātman within the solar mandala is Bhagavān Nārāyaṇa (`ya eṣo'ntar āditye hiraṇmayaḥ puruṣaḥ`).",
    padaccheda: [
      { deva: "सरति", iast: "sarati", gloss: "courses or moves across (√sṛ)" },
      { deva: "आकाशे", iast: "ākāśe", gloss: "in the luminous sky" },
      { deva: "सूर्यः", iast: "sūryaḥ", gloss: "the Sun, impeller of light and life" },
      { deva: "जगतः तस्थुषः च आत्मा", iast: "jagataḥ tasthuṣaḥ ca ātmā", gloss: "vital principle of all that moves and stands" }
    ],
    source: {
      grantha: "Nirukta, Ṛgveda & Amarakośa",
      granthaDeva: "निरुक्तम् · ऋग्वेदः · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 12.14; RV 1.115.1; AK 1.3 (Kālavarga)"
    },
    related: ["candra", "jyotis", "dina", "ushas", "agni"]
  },
  {
    id: "candra",
    deva: "चन्द्रः",
    iast: "candraḥ",
    stem: "candra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["moon", "lunar orb", "gladdener"],
    phoneticAliases: ["candra", "chandra", "soma", "indu", "shashi", "nishakara", "moon"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "चन्दति आह्लादयति लोकमिति चन्द्रः । हिमांशुश्चन्द्रमाश्चन्द्र इन्दुः कुमुदबान्धवः ॥",
    lakshanaIast: "candati āhlādayati lokam iti candraḥ | himāṃśuś candramāś candra induḥ kumudabāndhavaḥ ||",
    meaningShort: "The Moon — the cool-rayed celestial luminaire that gladdens living beings and nourishes night-blooming plants.",
    meaningDeep: "Derived from √cadi ('āhlādane dīptau ca' — to gladden and shine softly; Nirukta 11.5), `candra` signifies cool, nectarous radiance in contrast to solar heat. Amarakośa lists `himāṃśu`, `candramas`, `indu`, `vidhu`, `soma`, `śaśadhara`, `niśāpati`, and `oṣadhīśa` (lord of medicinal herbs). In Puruṣasūkta (`candramā manaso jātaḥ`) and Madhvācārya's ontology, Soma-Candra presides over the human mind (`mano-'bhimānī`) and nourishes the plant kingdom with lunar `amṛta`.",
    padaccheda: [
      { deva: "चन्दति", iast: "candati", gloss: "gladdens and shines softly (√cadi)" },
      { deva: "आह्लादयति लोकम्", iast: "āhlādayati lokam", gloss: "delights the world with cool nectarous rays" },
      { deva: "हिमांशुः चन्द्रः", iast: "himāṃśuḥ candraḥ", gloss: "the cool-rayed Moon (`induḥ`)" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 11.5; AK 1.3 (Kālavarga)"
    },
    related: ["surya", "nakshatra", "ratri", "amrita", "manas"]
  },
  {
    id: "nakshatra",
    deva: "नक्षत्रम्",
    iast: "nakṣatram",
    stem: "nakṣatra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["star", "constellation", "lunar mansion", "asterism"],
    phoneticAliases: ["nakshatra", "naksatra", "tara", "taraka", "riksha", "udu", "star"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "न क्षीयन्ते इति नक्षत्राणि । नक्षत्रमृक्षं भं तारा तारकाप्युडु वा स्त्रियाम् ॥",
    lakshanaIast: "na kṣīyante iti nakṣatrāṇi | nakṣatram ṛkṣaṃ bhaṃ tārā tārakāpy uḍu vā striyām ||",
    meaningShort: "A star or lunar mansion — an imperishable luminary fixed along the celestial ecliptic that marks cosmic time.",
    meaningDeep: "In Nirukta 3.20 and Śatapatha Brāhmaṇa, `nakṣatra` is traced either to √nakṣ ('gatikarman' — to traverse the vault) or `na kṣīyate` ('that which does not wane or perish from its station'). Amarakośa equates `nakṣatra` with `ṛkṣa`, `bha`, `tārā`, `tārakā`, and `uḍu`, designating both stars in general and the twenty-seven lunar asterisms (`aśvinī` to `revatī`) through which Candra measures months and seasons.",
    padaccheda: [
      { deva: "न क्षीयन्ते", iast: "na kṣīyante", gloss: "do not wane or slip from station (√kṣi)" },
      { deva: "नक्षत्रम्", iast: "nakṣatram", gloss: "star or lunar mansion" },
      { deva: "ऋक्षम् भम् तारा", iast: "ṛkṣam bham tārā", gloss: "classical synonyms: asterism, luminary, star" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.3 (Kālavarga); Nirukta 3.20"
    },
    related: ["candra", "surya", "akasha", "ratri", "jyotis"]
  },
  {
    id: "akasha",
    deva: "आकाशः",
    iast: "ākāśaḥ",
    stem: "ākāśa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["sky", "ether", "space", "firmament"],
    phoneticAliases: ["akasha", "akash", "gagana", "vyoma", "ambara", "kha", "sky", "space"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "आसमन्तात् काशन्तेऽस्मिन् पदार्था इति आकाशः । शब्दगुणकमाकाशम् ॥",
    lakshanaIast: "āsamantāt kāśante 'smin padārthā iti ākāśaḥ | śabdaguṇakam ākāśam ||",
    meaningShort: "Space or ether — the all-encompassing expanse wherein all beings shine forth and whose distinctive attribute is sound.",
    meaningDeep: "Derived from `ā` + √kāśṛ ('dīptau' — to shine all around), `ākāśa` is that open medium in which luminaries appear and bodies find room (`avakāśa-dātṛ`). Amarakośa (Vyomavarga) gives `vyoman`, `puṣkara`, `ambara`, `nabhas`, `antarikṣa`, `gagana`, `ananta`, and `kha`. Critically, Madhvācārya (Viṣṇutattvavinirṇaya & Tattvodyota) distinguishes eternal uncreated space (`avyākṛtākāśa`, locus of room) from the subtle created element `bhūtākāśa`, whose special quality (`viśeṣa-guṇa`) is `śabda` (Tarkasaṅgraha 14).",
    padaccheda: [
      { deva: "आसमन्तात् काशन्ते", iast: "āsamantāt kāśante", gloss: "shine forth on all sides (ā + √kāś)" },
      { deva: "आकाशः", iast: "ākāśaḥ", gloss: "space, firmament, or ether" },
      { deva: "शब्द-गुणकम्", iast: "śabda-guṇakam", gloss: "having sound (`śabda`) as its distinctive quality" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 1.2 (Vyomavarga); TS 14"
    },
    related: ["nabhas", "antariksha", "avyakritakasha", "pancabhuta", "shabda"]
  },
  {
    id: "prithivi",
    deva: "पृथिवी",
    iast: "pṛthivī",
    stem: "pṛthivī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["earth", "land", "ground", "terrestrial globe"],
    phoneticAliases: ["prithivi", "prithvi", "bhumi", "dhara", "vasudha", "vasundhara", "earth"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "प्रथनात् पृथिवीत्याहुः । भूर्भूमिरचलानन्ता रसा विश्वम्भरा स्थिरा ॥",
    lakshanaIast: "prathanāt pṛthivīty āhuḥ | bhūr bhūmir acalānantā rasā viśvambharā sthirā ||",
    meaningShort: "The Earth — the broad, firm, all-sustaining terrestrial element characterized by stability and natural fragrance.",
    meaningDeep: "Yāska (Nirukta 1.14) derives `pṛthivī` from √prath ('vistāre' — to spread wide and firm: `prathanāt pṛthivī`). Amarakośa (Bhūmivarga) opens Kāṇḍa 2 with twenty-seven names including `bhū`, `bhūmi`, `acalā`, `viśvambharā`, `sthirā`, `dharā`, `dharitrī`, `dharaṇi`, `kṣiti`, and `vasundharā`. In Nyāya and Padārthasaṅgraha (`tatrādau gandhavatī pṛthivī`), earth is the dense mahābhūta distinguished by intrinsic `gandha` (fragrance) and presided over by Bhūdevī.",
    padaccheda: [
      { deva: "प्रथनात् पृथिवी", iast: "prathanāt pṛthivī", gloss: "called `pṛthivī` from its broad extension (√prath)" },
      { deva: "भूः भूमिः अचला", iast: "bhūḥ bhūmiḥ acalā", gloss: "ground, earth, the unshakable support" },
      { deva: "विश्वम्भरा स्थिरा", iast: "viśvambharā sthirā", gloss: "all-nourishing and steadfast" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.14; AK 2.1.2–3 (Bhūmivarga)"
    },
    related: ["jala", "parvata", "kshetra", "gandha", "pancabhuta"]
  },
  {
    id: "jala",
    deva: "जलम्",
    iast: "jalam",
    stem: "jala",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["water", "fluid", "aqua"],
    phoneticAliases: ["jala", "apah", "vari", "salila", "udaka", "ambu", "toya", "water"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "शीतस्पर्शवत्यः आपः । आपः स्त्री भूम्नि वार्वारि सलिलं कमलं जलम् ॥",
    lakshanaIast: "śītasparśavatyaḥ āpaḥ | āpaḥ strī bhūmni vār vāri salilaṃ kamalaṃ jalam ||",
    meaningShort: "Water — the cool-touching, life-sustaining liquid element that flows, cleanses, and binds forms together.",
    meaningDeep: "Lexically derived from √jal ('ghāte / āvaraṇe' — to cool heat or envelop thirst) alongside Vedic `ap` (always feminine plural `āpaḥ`, from √āp 'to pervade'), `jala` is catalogued in Amarakośa (Vārivarga) with `vāri`, `salila`, `payaḥ`, `kīlāla`, `amṛta`, `jīvana` ('life itself'), `bhuvana`, `udaka`, and `toya`. In Nyāya and Tattvavāda (`śītasparśavatyo āpaḥ`, TS 11), water possesses natural fluidity (`sāṃsiddhika-dravatva`), cool touch, and viscous cohesion (`sneha`), presided over by Varuṇa.",
    padaccheda: [
      { deva: "शीत-स्पर्शवत्यः आपः", iast: "śīta-sparśavatyaḥ āpaḥ", gloss: "waters endowed with naturally cool touch" },
      { deva: "वाः वारि सलिलम्", iast: "vāḥ vāri salilam", gloss: "synonyms: fluid, water, surging stream" },
      { deva: "जलम्", iast: "jalam", gloss: "cooling, life-giving water" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Amarakośa",
      granthaDeva: "तर्कसङ्ग्रहः · अमरकोशः",
      author: "Annambhaṭṭa & Amarasimha",
      locator: "TS 11; AK 1.10.3 (Vārivarga)"
    },
    related: ["samudra", "nadi", "vrishti", "prithivi", "tejas"]
  },
  {
    id: "tejas",
    deva: "तेजः",
    iast: "tejaḥ",
    stem: "tejas",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["fire", "radiance", "luster", "vital energy", "heat"],
    phoneticAliases: ["tejas", "teja", "anala", "vahni", "pavana-sakha", "radiance", "fire"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "उष्णस्पर्शवत् तेजः । तच्च चतुर्विधं भौमं दिव्यमौदर्यमाकरजं चेति ॥",
    lakshanaIast: "uṣṇasparśavat tejaḥ | tac ca caturvidhaṃ bhaumaṃ divyam audaryam ākarajaṃ ceti ||",
    meaningShort: "Luminous fire or radiance — the element of hot touch and brilliant color, manifesting as earthly flame, solar light, digestive heat, and mineral gold.",
    meaningDeep: "From √tij ('niśāne' — to sharpen, kindle, blaze keenly), `tejas` denotes both the cosmic element of fire-light and spiritual splendor (`varcas`). Padārthasaṅgraha and Tarkasaṅgraha (12) define `tejas` as `uṣṇasparśavat` with dazzling white-bright color (`bhāsvara-śukla-rūpa`), dividing it into four domains: `bhauma` (terrestrial fire), `divya` (solar and lightning brilliance), `audarya` (digestive `vaiśvānara` fire), and `ākaraja` (lustrous metals like `suvarṇa`). In Bhagavadgītā 7.9, Kṛṣṇa declares `tejaś cāsmi vibhāvasau`.",
    padaccheda: [
      { deva: "उष्ण-स्पर्शवत् तेजः", iast: "uṣṇa-sparśavat tejaḥ", gloss: "the radiant element characterized by hot touch" },
      { deva: "भौमम् दिव्यम्", iast: "bhaumam divyam", gloss: "terrestrial flame and celestial lightning/sunlight" },
      { deva: "औदर्यम् आकरजम्", iast: "audaryam ākarajam", gloss: "digestive warmth and mine-born metallic gold" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Padārthasaṅgraha",
      granthaDeva: "तर्कसङ्ग्रहः · पदार्थसङ्ग्रहः",
      author: "Annambhaṭṭa & Padmanābha Sūri",
      locator: "TS 12; BG 7.9"
    },
    related: ["agni", "agni-jwala", "surya", "vidyut", "suvarna"]
  },
  {
    id: "vayu-kosha",
    deva: "वायुः",
    iast: "vāyuḥ",
    stem: "vāyu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["wind", "air", "breeze", "vital breath"],
    phoneticAliases: ["vayu", "pavana", "marut", "anila", "samirana", "vata", "wind", "air"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वाति गच्छति इति वायुः । रूपरहितस्पर्शवान् वायुः ॥",
    lakshanaIast: "vāti gacchati iti vāyuḥ | rūparahitasparśavān vāyuḥ ||",
    meaningShort: "Wind or air — the invisible, ceaselessly moving atmospheric element known through touch and motion.",
    meaningDeep: "Derived by Yāska (Nirukta 10.1) from √vā ('gatigandhanayoḥ' — to blow, move, and carry scent), `vāyu` is catalogued in Amarakośa (Svargavarga) alongside `śvasana`, `sparśana`, `mātariśvan`, `sadāgati`, `pṛṣadaśva`, `gandhavaha`, `anila`, `pavana`, and `marut`. Philosophically (`rūparahitaḥ sparśavān vāyuḥ`, TS 13), air lacks visible color yet bears temperate touch (`anuṣṇāśīta-sparśa`); in Śrī Madhvācārya's Tattvavāda, Mukhyaprāṇa Vāyu stands at the apex of finite souls (`jīvottama`), sustaining both cosmic motion (`pravaha`) and inward breath (`prāṇa`).",
    padaccheda: [
      { deva: "वाति इति वायुः", iast: "vāti iti vāyuḥ", gloss: "called `vāyu` because it blows and courses ceaselessly (√vā)" },
      { deva: "रूप-रहितः", iast: "rūpa-rahitaḥ", gloss: "devoid of visible color or form" },
      { deva: "स्पर्शवान्", iast: "sparśavān", gloss: "directly apprehended through tactile sensation" }
    ],
    source: {
      grantha: "Nirukta, Tarkasaṅgraha & Amarakośa",
      granthaDeva: "निरुक्तम् · तर्कसङ्ग्रहः · अमरकोशः",
      author: "Yāska, Annambhaṭṭa & Amarasimha",
      locator: "Nirukta 10.1; TS 13; AK 1.1.62–64"
    },
    related: ["prana", "akasha", "sparsha", "megha", "pancabhuta"]
  },
  {
    id: "megha",
    deva: "मेघः",
    iast: "meghaḥ",
    stem: "megha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["cloud", "raincloud", "thundercloud"],
    phoneticAliases: ["megha", "jalada", "ambuda", "payoda", "jimuta", "balahaka", "cloud"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "मेहति सिञ्चति भूमिं जलेन इति मेघः । अभ्रं मेघो वारिवाहः स्तनयित्नुर्बलाहकः ॥",
    lakshanaIast: "mehati siñcati bhūmiṃ jalena iti meghaḥ | abhraṃ megho vārivāhaḥ stanayitnur balāhakaḥ ||",
    meaningShort: "A cloud — the sky-borne water-bearer that sprinkles the earth with life-giving rain.",
    meaningDeep: "Yāska (Nirukta 2.21: `meghaḥ kasmāt? mehatīti sataḥ`) derives `megha` from √mih ('secane' — to sprinkle or pour down moisture). Amarakośa (Vyomavarga) records `abhra`, `megha`, `vārivāha`, `stanayitnu`, `balāhaka`, `dhārādhara`, `jaladhara`, `taḍitvān`, `vārida`, `ambubhṛt`, and `jīmūta` — famously illustrating how adding `-da` ('giver') or `-dhara` ('bearer') to words for water yields cloud-synonyms. In Sanskrit *kāvya* (as in Kālidāsa's *Meghadūta*), the dark monsoon cloud is the archetypal herald of renewal and longing.",
    padaccheda: [
      { deva: "मेहति सिञ्चति", iast: "mehati siñcati", gloss: "sprinkles and showers water upon the earth (√mih)" },
      { deva: "अभ्रम् मेघः वारिवाहः", iast: "abhram meghaḥ vārivāhaḥ", gloss: "sky-wanderer, sprinkler, water-carrier" },
      { deva: "स्तनयित्नुः बलाहकः", iast: "stanayitnuḥ balāhakaḥ", gloss: "thunderer and raincloud" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.21; AK 1.2.8–9 (Vyomavarga)"
    },
    related: ["vrishti", "vidyut", "jala", "nabhas", "mayura"]
  },
  {
    id: "vrishti",
    deva: "वृष्टिः",
    iast: "vṛṣṭiḥ",
    stem: "vṛṣṭi",
    pos: "strīliṅga (f.)",
    englishGlosses: ["rain", "rainfall", "shower", "precipitation"],
    phoneticAliases: ["vrishti", "vrsti", "varsha-rain", "parjanya", "rain", "shower"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वृष्यते सिच्यतेऽनया भूमिरिति वृष्टिः । अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः ॥",
    lakshanaIast: "vṛṣyate sicyate 'nayā bhūmir iti vṛṣṭiḥ | annād bhavanti bhūtāni parjanyād annasambhavaḥ ||",
    meaningShort: "Rain or shower — the sky-born downpour that moistens the soil and brings forth grain for all living creatures.",
    meaningDeep: "Formed from √vṛṣ ('secane' — to rain, pour forth, engender fertility) with the feminine action suffix `-ktin` (Pāṇini 3.3.94), `vṛṣṭi` is paired in Amarakośa (Vyomavarga: `vṛṣṭir varṣaṃ`) with `āsāra` (driving torrent) and `śīkara` (fine spray). Bhagavadgītā 3.14 (`parjanyād annasambhavaḥ; yajñād bhavati parjanyaḥ`) situates `vṛṣṭi` at the heart of the cosmic wheel of reciprocity uniting human `yajña`, celestial gods, rainfall, harvests, and embodied life.",
    padaccheda: [
      { deva: "वृष्यते अनया भूमिः", iast: "vṛṣyate anayā bhūmiḥ", gloss: "that whereby the earth is watered and fertilized (√vṛṣ)" },
      { deva: "वृष्टिः", iast: "vṛṣṭiḥ", gloss: "rainfall, shower" },
      { deva: "पर्जन्यात् अन्न-सम्भवः", iast: "parjanyāt anna-sambhavaḥ", gloss: "from rain-clouds arises the sustenance of grain" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 3.14; AK 1.2.12 (Vyomavarga)"
    },
    related: ["megha", "jala", "anna", "yajna", "varsha"]
  },
  {
    id: "vidyut",
    deva: "विद्युत्",
    iast: "vidyut",
    stem: "vidyut",
    pos: "strīliṅga (f.)",
    englishGlosses: ["lightning", "flash", "thunderbolt-glare"],
    phoneticAliases: ["vidyut", "tadit", "saudamini", "capala", "cancala", "lightning"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "विद्योतते निमेषार्धमिति विद्युत् । तडित्सौदामिनी विद्युच्चञ्चला चपला अपि ॥",
    lakshanaIast: "vidyotate nimeṣārdham iti vidyut | taḍit saudāminī vidyuc cañcalā capalā api ||",
    meaningShort: "Lightning — the instantaneous celestial flash that blazes across storm-clouds in half the blink of an eye.",
    meaningDeep: "Derived from `vi` + √dyut ('dīptau' — to flash vividly; Nirukta 7.21), `vidyut` is celebrated in Amarakośa (Vyomavarga) under evocative feminine epithets: `śampā`, `śatahradā`, `hrādinī`, `airāvatī`, `kṣaṇaprabhā` ('instant-gleam'), `taḍit`, `saudāminī`, `cañcalā`, and `capalā`. In Kena Upaniṣad 4.4 (`yad etad vidyuto vyadyutad ā itīn nyamīmiṣat`) and Nārāyaṇa Sūkta (`nīlatoyadamadhyasthā vidyullekheva bhāsvarā`), lightning serves as the supreme Upaniṣadic simile (`upamā`) for sudden, self-luminous spiritual illumination.",
    padaccheda: [
      { deva: "विद्योतते", iast: "vidyotate", gloss: "flashes forth brilliantly (vi + √dyut)" },
      { deva: "तडित् सौदामिनी विद्युत्", iast: "taḍit saudāminī vidyut", gloss: "cloud-striker, mountain-gleam, lightning" },
      { deva: "चञ्चला चपला", iast: "cañcalā capalā", gloss: "tremulous and fleetingly swift" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Kenopaniṣad",
      granthaDeva: "अमरकोशः · निरुक्तम् · केनोपनिषत्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.2.10–11; Nirukta 7.21; Kena Up. 4.4"
    },
    related: ["megha", "tejas", "jyotis", "vrishti", "indra"]
  },
  {
    id: "samudra",
    deva: "समुद्रः",
    iast: "samudraḥ",
    stem: "samudra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["ocean", "sea", "deep"],
    phoneticAliases: ["samudra", "sagara", "abdhi", "jalanidhi", "ratnakara", "sindhu", "ocean", "sea"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "समुद्रवन्त्यस्मादापः अभिद्रवन्त्येनं नद्य इति वा समुद्रः । समुद्रोऽब्धिरकूपारः पारावारः सरित्पतिः ॥",
    lakshanaIast: "samudravanty asmād āpaḥ abhidravanty enaṃ nadya iti vā samudraḥ | samudro 'bdhir akūpāraḥ pārāvāraḥ saritpatiḥ ||",
    meaningShort: "The ocean — the boundless, unfathomable treasury of waters into which all rivers flow without disturbing its fullness.",
    meaningDeep: "Yāska (Nirukta 2.10) derives `samudra` from `sam` + `ud` + √dru ('to surge upward with vapor') or `sam` + √und ('to moisten thoroughly'). Amarakośa (Vārivarga) supplies `abdhi`, `akūpāra`, `pārāvāra`, `saritpati` ('lord of rivers'), `udadhi`, `sindhu`, `sāgara`, `arṇava`, and `ratnākara` ('mine of jewels'). In Bhagavadgītā 2.70 (`āpūryamāṇam acalapratiṣṭhaṃ samudram āpaḥ praviśanti yadvat`) and Madhvācārya's `Samudra-stuti`, the ocean exemplifies bottomless serenity (`gāmbhīrya`) and plenitude.",
    padaccheda: [
      { deva: "सम्-उद्रवन्ति आपः", iast: "sam-udravanti āpaḥ", gloss: "waters surge up and gather completely (sam + ud + √dru / √und)" },
      { deva: "समुद्रः अब्धिः अकूपारः", iast: "samudraḥ abdhiḥ akūpāraḥ", gloss: "ocean, water-reservoir, shoreless deep" },
      { deva: "पारावारः सरित्-पतिः", iast: "pārāvāraḥ sarit-patiḥ", gloss: "spanning near and far shores, lord of all rivers" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.10; AK 1.10.1–2 (Vārivarga)"
    },
    related: ["jala", "nadi", "taranga", "ratna", "dvipa"]
  },
  {
    id: "nadi",
    deva: "नदी",
    iast: "nadī",
    stem: "nadī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["river", "stream", "watercourse"],
    phoneticAliases: ["nadi", "sarit", "tarangini", "apaga", "nimnaga", "river", "stream"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "नदति शब्दायते इति नदी । तरङ्गिणी शैवलिनी तटिनी ह्रदिनी धुनी ॥",
    lakshanaIast: "nadati śabdāyate iti nadī | taraṅgiṇī śaivalinī taṭinī hradinī dhunī ||",
    meaningShort: "A river — a resonant, ever-flowing stream descending from mountain heights toward its union with the ocean.",
    meaningDeep: "Yāska (Nirukta 2.24: `nadyāḥ kasmāt? nadanā imā bhavanti śabdavatyaḥ`) derives `nadī` from √nad ('avyakte śabde' — to murmur and resound while coursing). Amarakośa (Vārivarga) lists `sarit` (from √sṛ, 'the flowing one'), `taraṅgiṇī`, `śaivalinī`, `taṭinī`, `hradinī`, `dhunī`, `srotasvinī`, `āpagā`, and `nimnagā` ('descending toward low ground'). Upaniṣadic philosophy (Muṇḍaka 3.2.8; Praśna 6.5) invokes rivers entering the sea — where Madhvācārya's bhāṣya carefully shows that the rivers remain ontologically real even when indistinguishable by ordinary gaze.",
    padaccheda: [
      { deva: "नदति शब्दायते", iast: "nadati śabdāyate", gloss: "murmurs and resounds as it flows (√nad)" },
      { deva: "तरङ्गिणी तटिनी", iast: "taraṅgiṇī taṭinī", gloss: "wavy stream, bank-lined watercourse" },
      { deva: "ह्रदिनी धुनी", iast: "hradinī dhunī", gloss: "deep-pooled and rushing river" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.24; AK 1.10.30–31 (Vārivarga)"
    },
    related: ["samudra", "jala", "taranga", "tirtha", "parvata"]
  },
  {
    id: "saras",
    deva: "सरः",
    iast: "saraḥ",
    stem: "saras",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["lake", "pond", "lotus-pool", "reservoir"],
    phoneticAliases: ["saras", "sarah", "tadaga", "kasara", "pushkarini", "hrada", "lake", "pond"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "सरति प्रसरति जलमत्रेति सरः । पद्माकरस्तडागोऽस्त्री कासारः सरसी सरः ॥",
    lakshanaIast: "sarati prasarati jalam atreti saraḥ | padmākaras taḍāgo 'strī kāsāraḥ sarasī saraḥ ||",
    meaningShort: "A lake or lotus-pool — a tranquil expanse of fresh water bordered by banks and teeming with aquatic blossoms.",
    meaningDeep: "Formed from √sṛ ('gatau' — where ripples gently spread) with the neuter Uṇādi suffix `-asun`, `saras` denotes a natural or excavated body of clear water. Amarakośa (Vārivarga) groups `padmākara` ('mine of lotuses'), `taḍāga` (so called because waves strike its shore, `taṭam āhanti`), `kāsāra`, `sarasī`, `saras`, and `puṣkariṇī`. In Bhagavadgītā 10.24 (`sarasām asmi sāgaraḥ`) and classical poetry, a limpid autumn lake (`śaratsaras`) mirrors a mind stilled of turbidity (`prasāda`).",
    padaccheda: [
      { deva: "प्रसरति जलम् अत्र", iast: "prasarati jalam atra", gloss: "where calm waters spread smoothly (√sṛ)" },
      { deva: "पद्माकरः तडागः", iast: "padmākaraḥ taḍāgaḥ", gloss: "lotus-treasury, embanked reservoir" },
      { deva: "कासारः सरसी सरः", iast: "kāsāraḥ sarasī saraḥ", gloss: "pond, broad pool, pellucid lake" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.10.27 (Vārivarga); Nirukta 9.26"
    },
    related: ["jala", "padma", "nadi", "taranga", "hamsa"]
  },
  {
    id: "taranga",
    deva: "तरङ्गः",
    iast: "taraṅgaḥ",
    stem: "taraṅga",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["wave", "billow", "ripple", "surge"],
    phoneticAliases: ["taranga", "urmi", "kallola", "vici", "bhanga", "wave", "ripple"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "तरति गच्छति अम्बुनि इति तरङ्गः । भङ्गस्तरङ्ग ऊर्मिर्वा स्त्रियां वीचिरथोत्कलिका ॥",
    lakshanaIast: "tarati gacchati ambuni iti taraṅgaḥ | bhaṅgas taraṅga ūrmir vā striyāṃ vīcir athotkalikā ||",
    meaningShort: "A wave or ripple — the rhythmic undulation coursing across the surface of rivers, lakes, and seas.",
    meaningDeep: "Derived from √tṝ ('plavanataraṇayoḥ' — to cross or skim across water) with the Uṇādi suffix `-aṅgac`, `taraṅga` is paired in Amarakośa (Vārivarga) with `bhaṅga`, `ūrmi`, `vīci` (gentle wavelet), and `kallola` / `ullola` (towering ocean billow). In Nyāya epistemology (`vīcitaraṅga-nyāya`), concentric ripples expanding from a stone dropped in water explain how sound (`śabda`) propagates serially across `ākāśa` from source to ear.",
    padaccheda: [
      { deva: "तरति अम्बुनि", iast: "tarati ambuni", gloss: "skims and courses across the water (√tṝ)" },
      { deva: "भङ्गः तरङ्गः ऊर्मिः", iast: "bhaṅgaḥ taraṅgaḥ ūrmiḥ", gloss: "cresting breaker, wave, rolling swell" },
      { deva: "वीचिः", iast: "vīciḥ", gloss: "delicate ripple" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.10.5 (Vārivarga)"
    },
    related: ["samudra", "nadi", "saras", "jala", "shabda"]
  },
  {
    id: "parvata",
    deva: "पर्वतः",
    iast: "parvataḥ",
    stem: "parvata",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["mountain", "hill", "crag", "range"],
    phoneticAliases: ["parvata", "giri", "shaila", "adri", "acala", "naga", "mahidhara", "mountain"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "पर्ववान् इति पर्वतः । अद्रिर्गोत्रो गिरिर्ग्रावा शैलः शिलोच्चयः ॥",
    lakshanaIast: "parvavān iti parvataḥ | adrir gotro girir grāvā śailaḥ śiloccayaḥ ||",
    meaningShort: "A mountain — a majestic, immovable mass of tiered rock and ridges that anchors the earth and gathers rainclouds.",
    meaningDeep: "Yāska (Nirukta 1.20: `parvavān parvataḥ; parva punaḥ pṛṇāteḥ prīṇāter vā`) explains `parvata` as possessing `parvans` — massive joints, tiers, or ridges of stone. Amarakośa (Śailavarga) compiles `adri`, `gotra`, `giri`, `grāvan`, `śaila`, `śiloccaya`, `mahīdhra`, `bhūbhṛt` ('earth-supporter'), `ahārya`, `dhara`, and `acala` ('immovable'). In Nyāya logic (`parvato vahnimān dhūmāt`), the mountain is the canonical `pakṣa` of syllogistic inference, while in Bhagavadgītā 10.25 (`sthāvarāṇāṃ himālayaḥ`) it embodies unshakable steadiness.",
    padaccheda: [
      { deva: "पर्ववान् इति पर्वतः", iast: "parvavān iti parvataḥ", gloss: "possessing massive tiers and rocky joints (`parvan`)" },
      { deva: "अद्रिः गोत्रः गिरिः", iast: "adriḥ gotraḥ giriḥ", gloss: "crag, earth-stabilizer, lofty hill" },
      { deva: "शैलः शिलोच्चयः", iast: "śailaḥ śiloccayaḥ", gloss: "rocky peak, towering mass of stone" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.20; AK 2.3.1–2 (Śailavarga)"
    },
    related: ["shila", "guha", "prithivi", "nadi", "dhuma"]
  },
  {
    id: "shila",
    deva: "शिला",
    iast: "śilā",
    stem: "śilā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["stone", "rock", "boulder", "slab"],
    phoneticAliases: ["shila", "sila", "pashana", "ashman", "upala", "prastara", "stone", "rock"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "शिलति संहता भवति इति शिला । पाषाणप्रस्तरग्रावोपलाश्मानः शिला दृषत् ॥",
    lakshanaIast: "śilati saṃhatā bhavati iti śilā | pāṣāṇaprastaragrāvopalāśmānaḥ śilā dṛṣat ||",
    meaningShort: "A stone or rock — a dense, enduring mineral mass forming mountain crags, riverbeds, and sacred sculpted icons.",
    meaningDeep: "Derived from √śil ('samādhau / saṅghāte' — to cohere firmly into a compact mass), `śilā` is grouped in Amarakośa (Śailavarga) with `pāṣāṇa`, `prastara`, `grāvan` (Vedic pressing-stone), `upala`, `aśman`, and `dṛṣad`. In Sanskrit epigraphy and education, `śilā-lekhā` ('inscription on stone') is the emblem of indelible permanence (`pāṣāṇa-rekhā`), while sacred river-worn `śālagrāma-śilā` stones are revered in Vaiṣṇava worship as self-manifest (`svayam-vyakta`) loci of Bhagavān Viṣṇu's presence.",
    padaccheda: [
      { deva: "संहता भवति इति शिला", iast: "saṃhatā bhavati iti śilā", gloss: "coheres into a hard, compact mass" },
      { deva: "पाषाण-प्रस्तर-ग्राव-उपलाः", iast: "pāṣāṇa-prastara-grāva-upalāḥ", gloss: "boulder, rock-slab, crag-stone, pebble" },
      { deva: "अश्मानः शिला दृषत्", iast: "aśmānaḥ śilā dṛṣat", gloss: "flint-rocks, stone, flat bedrock" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.3.4 (Śailavarga)"
    },
    related: ["parvata", "guha", "prithivi", "shilpa", "ratna"]
  },
  {
    id: "guha",
    deva: "गुहा",
    iast: "guhā",
    stem: "guhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["cave", "cavern", "grotto", "inner recess"],
    phoneticAliases: ["guha", "kandara", "dari", "gahvara", "cave", "cavern"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "गूहति संवृणोति इति गुहा । दरी तु कन्दरो वा स्त्री गुहा गेहं देवखातबिले ॥",
    lakshanaIast: "gūhati saṃvṛṇoti iti guhā | darī tu kandaro vā strī guhā gehaṃ devakhātabile ||",
    meaningShort: "A cave or cavern — a natural hollow in a mountain crag, and metaphorically the secret chamber of the spiritual heart.",
    meaningDeep: "Derived from √guhū ('saṃvaraṇe' — to conceal, shelter, enclose) with suffix `-aṅ` + `-ṭāp` (Pāṇini 3.3.104), `guhā` signifies a sheltered natural recess (`devakhāta-bila`, 'hollow carved by nature, not human chisels'). Amarakośa (Śailavarga) pairs `guhā` with `darī`, `kandara`, and `gahvara`. Across Kaṭha Upaniṣad (`guhāṃ praviṣṭau paramē parārdhe`, 1.3.1) and Taittirīya Upaniṣad (`yo veda nihitaṃ guhāyām`, 2.1.1), `hṛdaya-guhā` designates the innermost sanctuary of consciousness where both `jīva` and `Paramātman` abide.",
    padaccheda: [
      { deva: "गूहति संवृणोति इति गुहा", iast: "gūhati saṃvṛṇoti iti guhā", gloss: "shelters and conceals within (√guh)" },
      { deva: "दरी कन्दरः गुहा", iast: "darī kandaraḥ guhā", gloss: "cleft, mountain ravine, cavern" },
      { deva: "देवखात-बिले", iast: "devakhāta-bile", gloss: "in a naturally hollowed mountain grotto" }
    ],
    source: {
      grantha: "Amarakośa & Taittirīyopaniṣad",
      granthaDeva: "अमरकोशः · तैत्तिरीयोपनिषत्",
      author: "Amarasimha",
      locator: "AK 2.3.6 (Śailavarga); TU 2.1.1"
    },
    related: ["parvata", "shila", "hridaya", "vana", "simha"]
  },
  {
    id: "vana",
    deva: "वनम्",
    iast: "vanam",
    stem: "vana",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["forest", "woods", "grove", "wilderness"],
    phoneticAliases: ["vana", "aranya", "kanana", "vipina", "atavi", "gahana", "forest", "woods"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वन्यते सेव्यते तापसैर्मृगैश्चेति वनम् । अटव्यरण्यं विपिनं गहनं काननं वनम् ॥",
    lakshanaIast: "vanyate sevyate tāpasair mṛgaiś ceti vanam | aṭavy araṇyaṃ vipinaṃ gahanaṃ kānanaṃ vanam ||",
    meaningShort: "A forest or grove — an untamed woodland sanctuary of trees, wildlife, and contemplative hermitages.",
    meaningDeep: "Derived from √van ('sambhaktau' — to be cherished, resorted to, or abundantly fruitful; Nirukta 8.3), `vana` also carries the secondary sense of water and radiance in Vedic diction. Amarakośa (Vanauṣadhivarga) opens its botanical lexicon with `aṭavī`, `araṇya`, `vipina`, `gahana`, `kānana`, and `vana`, distinguishing wild forests from planted gardens (`udyāna`, `upavana`). In Indian civilization, the `vana` / `āraṇya` is the cradle of the Āraṇyakas, Upaniṣadic contemplation, and Vānaprastha serenity.",
    padaccheda: [
      { deva: "वन्यते सेव्यते इति वनम्", iast: "vanyate sevyate iti vanam", gloss: "resorted to and cherished by sages and creatures (√van)" },
      { deva: "अटवी अरण्यम् विपिनम्", iast: "aṭavī araṇyam vipinam", gloss: "wildwood, deep forest, thicket" },
      { deva: "गहनम् काननम् वनम्", iast: "gahanam kānanam vanam", gloss: "dense woodland, leafy glade, forest" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.4.1 (Vanauṣadhivarga); Nirukta 8.3"
    },
    related: ["vriksha", "lata", "mriga", "pakshin", "rishi"]
  },
  {
    id: "vriksha",
    deva: "वृक्षः",
    iast: "vṛkṣaḥ",
    stem: "vṛkṣa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["tree", "arbor"],
    phoneticAliases: ["vriksha", "vrksa", "taru", "padapa", "druma", "mahiruha", "vitapi", "tree"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वृश्च्यते छिद्यते इति वृक्षः । वृक्षो महीरुहः शाखी विटपी पादपस्तरुः ॥",
    lakshanaIast: "vṛścyate chidyate iti vṛkṣaḥ | vṛkṣo mahīruhaḥ śākhī viṭapī pādapas taruḥ ||",
    meaningShort: "A tree — a rooted, branching plant organism that drinks water through its roots and offers shade, blossoms, and fruit.",
    meaningDeep: "Yāska (Nirukta 2.6: `vṛkṣo vraścanāt`) derives `vṛkṣa` from √ovraścū ('chedane' — that which is felled or pruned for timber and sacred fuel) or √vṛ ('to cover the ground with shade'). Amarakośa (Vanauṣadhivarga) reveals a botanical anatomy through its synonyms: `mahīruha` ('sprouting from earth'), `śākhin` ('branch-bearer'), `viṭapin` ('bough-crowned'), `pādapa` ('drinking sap with its root-feet'), `taru` ('carrying creatures through heat'), `anokaha`, `kuṭa`, `śāla`, `palāśin`, and `druma`. Subhāṣitas revere trees as `satpuruṣā iva` — standing in scorching sun while shielding others in shade.",
    padaccheda: [
      { deva: "वृश्च्यते इति वृक्षः", iast: "vṛścyate iti vṛkṣaḥ", gloss: "derived from √vraśc (to hew) or √vṛ (to shade)" },
      { deva: "महीरुहः शाखी विटपी", iast: "mahīruhaḥ śākhī viṭapī", gloss: "earth-sprouter, branched one, bough-crowned" },
      { deva: "पादपः तरुः", iast: "pādapaḥ taruḥ", gloss: "root-drinker, heat-relieving tree" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.6; AK 2.4.5 (Vanauṣadhivarga)"
    },
    related: ["vana", "mula", "shakha", "parna", "phala"]
  },
  {
    id: "mula",
    deva: "मूलम्",
    iast: "mūlam",
    stem: "mūla",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["root", "foundation", "origin", "primary source"],
    phoneticAliases: ["mula", "moola", "budhna", "anghri-root", "root", "origin"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "मूलति प्रतिष्ठति अनेन तरुरिति मूलम् । मूलं बुध्नोऽङ्घ्रिनामकः आद्ये च कारणे मूलम् ॥",
    lakshanaIast: "mūlati pratiṣṭhati anena tarur iti mūlam | mūlaṃ budhno 'ṅghrināmakaḥ ādye ca kāraṇe mūlam ||",
    meaningShort: "A root or foundation — the subterranean anchor through which a plant draws nourishment, and by extension the primal cause or original text.",
    meaningDeep: "Derived from √mūl ('pratiṣṭhāyām' — to stand firmly grounded), `mūla` denotes both the botanical root (`budhna`, `śiphā`, `pāda`) in Amarakośa 2.4.11 and, in Nānārthavarga (3.3), first origin (`ādya`), primary capital, and foundational scripture (`mūla-grantha`, as in Śrī Madhvācārya's thirty-seven *Sarvamūla Granthāḥ*). Kaṭha Upaniṣad 2.3.1 and Bhagavadgītā 15.1 (`ūrdhvamūlam adhaḥśākham`) invert the tree metaphor to portray Brahman as the transcendent Root (`ūrdhva-mūla`) sustaining the cosmic `aśvattha`.",
    padaccheda: [
      { deva: "मूलति प्रतिष्ठति", iast: "mūlati pratiṣṭhati", gloss: "stands firmly anchored and grounded (√mūl)" },
      { deva: "मूलम् बुध्नः", iast: "mūlam budhnaḥ", gloss: "plant root, basal support" },
      { deva: "आद्ये च कारणे", iast: "ādye ca kāraṇe", gloss: "also signifying primal origin and root cause" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.4.11, 3.3.198; BG 15.1"
    },
    related: ["vriksha", "shakha", "bija", "grantha", "tattva"]
  },
  {
    id: "shakha",
    deva: "शाखा",
    iast: "śākhā",
    stem: "śākhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["branch", "bough", "limb", "vedic recension"],
    phoneticAliases: ["shakha", "sakha-branch", "vitapa", "bough", "branch"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "शाखति व्याप्नोति आकाशमिति शाखा । खशया रौहिणेयादिः शाखा वेदविभागयोः ॥",
    lakshanaIast: "śākhati vyāpnoti ākāśam iti śākhā | khaśayā rauhiṇeyādiḥ śākhā vedavibhāgayoḥ ||",
    meaningShort: "A branch or bough — a tree limb spreading into open space, and secondarily a traditional recensional school of the Vedas.",
    meaningDeep: "Yāska (Nirukta 6.32: `śākhā khaśayā bhavati, śaknoter vā`) ingeniously explains `śākhā` as `kha-śayā` ('resting in the sky') or from √śak / √śākh ('vyāptau' — to spread abroad). Amarakośa records `śākhā` both in Vanauṣadhivarga (2.4.11, alongside `latā` and `viṭapa`) and in Nānārthavarga (3.3.19) for tree-limbs, arms, and the living oral recensions (`śākhāḥ`, such as Śākala, Taittirīya, Kāṇva) through which the one eternal Veda branches out among sage lineages.",
    padaccheda: [
      { deva: "शाखति व्याप्नोति आकाशम्", iast: "śākhati vyāpnoti ākāśam", gloss: "spreads outward across open space (√śākh)" },
      { deva: "ख-शया", iast: "kha-śayā", gloss: "Nirukta etymon: reposing in the sky (`kha`)" },
      { deva: "वेद-विभागयोः", iast: "veda-vibhāgayoḥ", gloss: "signifying both tree-bough and Vedic recension" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 6.32; AK 2.4.11, 3.3.19"
    },
    related: ["vriksha", "mula", "parna", "pushpa", "agama"]
  },
  {
    id: "parna",
    deva: "पर्णम्",
    iast: "parṇam",
    stem: "parṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["leaf", "foliage", "petal", "wing-feather"],
    phoneticAliases: ["parna", "patra", "dala", "palasha", "chadana", "leaf"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "पृणाति पूरयति तरुशोभामिति पर्णम् । पत्रं पलाशं छदनं दलं पर्णं छदः पुमान् ॥",
    lakshanaIast: "pṛṇāti pūrayati taruśobhām iti parṇam | patraṃ palāśaṃ chadanaṃ dalaṃ parṇaṃ chadaḥ pumān ||",
    meaningShort: "A leaf — the green, sun-catching blade of foliage that clothes and nourishes a plant.",
    meaningDeep: "Yāska (Nirukta 4.3: `parṇaṃ patanāt`) connects `parṇa` to √pat ('to flutter and fall seasonally') or √pṝ ('pālanapūraṇayoḥ' — to fill out and sustain the tree). Amarakośa (Vanauṣadhivarga) unites `patra` (also meaning manuscript leaf and bird-wing), `palāśa` (verdant blade), `chadana` / `chada` ('protective canopy'), `dala` ('unfolding petal/leaf'), and `parṇa`. In Bhagavadgītā 9.26 (`patraṃ puṣpaṃ phalaṃ toyaṃ`) and 15.1 (`chandāṃsi yasya parṇāni`), the humble leaf represents both pure devotional offering and Vedic meter.",
    padaccheda: [
      { deva: "पृणाति तरु-शोभाम्", iast: "pṛṇāti taru-śobhām", gloss: "fills out and sustains the tree's vitality (√pṝ)" },
      { deva: "पत्रम् पलाशम् छदनम्", iast: "patram palāśam chadanam", gloss: "blade, green leaf, shady covering" },
      { deva: "दलम् पर्णम्", iast: "dalam parṇam", gloss: "unfolding shoot, foliage leaf" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.4.14 (Vanauṣadhivarga); Nirukta 4.3"
    },
    related: ["vriksha", "shakha", "pushpa", "phala", "pustaka"]
  },
  {
    id: "pushpa",
    deva: "पुष्पम्",
    iast: "puṣpam",
    stem: "puṣpa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["flower", "blossom", "bloom"],
    phoneticAliases: ["pushpa", "puspa", "kusuma", "prasuna", "sumana", "suma", "flower", "blossom"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "पुष्यति विकसति इति पुष्पम् । स्त्रियाम् बहुत्वे सुमनसः पुष्पं प्रसूनं कुसुमं सुमम् ॥",
    lakshanaIast: "puṣyati vikasati iti puṣpam | striyām bahutve sumanasaḥ puṣpaṃ prasūnaṃ kusumaṃ sumam ||",
    meaningShort: "A flower or blossom — the fragrant, unfolding bloom of a plant that heralds fruitfulness and graces worship.",
    meaningDeep: "Derived from √puṣp ('vikasane' — to unfold, bloom, expand in beauty) with suffix `-pa`, `puṣpa` is listed in Amarakośa (Vanauṣadhivarga) alongside `sumanasaḥ` (feminine plural, 'gladdening the heart'), `prasūna` ('newly brought forth'), `kusuma`, and `suma`. Beyond natural botany and spring aesthetics (`puṣpasamaya` = `vasanta`), Sanskrit ethics celebrates the eight inward flowers (`aṣṭa-puṣpikā`) dearest to Viṣṇu — headed by `ahiṃsā`, `indriya-nigraha`, `dayā`, `kṣamā`, and `jñāna`.",
    padaccheda: [
      { deva: "पुष्यति विकसति इति पुष्पम्", iast: "puṣyati vikasati iti puṣpam", gloss: "blooms and unfolds its petals (√puṣp)" },
      { deva: "सुमनसः प्रसूनम्", iast: "sumanasaḥ prasūnam", gloss: "heart-delighting blossoms, fresh-born bloom" },
      { deva: "कुसुमम् सुमम्", iast: "kusumam sumam", gloss: "fragrant flower, gentle blossom" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.4.17 (Vanauṣadhivarga)"
    },
    related: ["padma", "phala", "gandha", "bhramara", "vasanta"]
  },
  {
    id: "padma",
    deva: "पद्मम्",
    iast: "padmam",
    stem: "padma",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["lotus", "day-lotus", "sacred water-lily"],
    phoneticAliases: ["padma", "kamala", "nalina", "aravinda", "pankaja", "rajiva", "ambuja", "lotus"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "पद्यते जले शेते विकसति वा सूर्यकरैरिति पद्मम् । वा पुंसि पद्मं नलिनमरविन्दं महोत्पलम् ॥",
    lakshanaIast: "padyate jale śete vikasati vā sūryakarair iti padmam | vā puṃsi padmaṃ nalinam aravindaṃ mahotpalam ||",
    meaningShort: "The sacred day-lotus — rooted in mud yet rising unstained above the water to blossom at the touch of sunlight.",
    meaningDeep: "Derived from √pad ('gatau' — rising cleanly from muddy depths) with Uṇādi `-man`, `padma` receives one of the richest synonym clusters in Amarakośa (Vārivarga 1.10.40–43): `nalina`, `aravinda`, `mahotpala`, `sahasrapatra`, `kamala`, `śatapatra`, `kuśeśaya`, `paṅkeruha` / `paṅkaja` ('mud-born'), `tāmarasa`, `sārasa`, `ambhoja`, and `rājīva`. In Bhagavadgītā 5.10 (`padmapatram ivāmbhasā`) its water-repellent leaf models detached action, while in Tattvavāda iconography it is the abode of Mahālakṣmī (`Padmā`) and emblem of Padmanābha.",
    padaccheda: [
      { deva: "पद्यते विकसति सूर्यकरैः", iast: "padyate vikasati sūryakaraiḥ", gloss: "rises in water and unfolds at solar rays (√pad)" },
      { deva: "पद्मम् नलिनम् अरविन्दम्", iast: "padmam nalinam aravindam", gloss: "lotus, slender-stemmed bloom, wheel-petalled lotus" },
      { deva: "महोत्पलम् कमलम्", iast: "mahotpalam kamalam", gloss: "noble water-blossom, radiant kamala" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.10.40–42 (Vārivarga); BG 5.10"
    },
    related: ["pushpa", "saras", "jala", "surya", "lakshmi"]
  },
  {
    id: "phala",
    deva: "फलम्",
    iast: "phalam",
    stem: "phala",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["fruit", "result", "consequence", "reward"],
    phoneticAliases: ["phala", "phalam", "sasya", "parinama", "fruit", "result"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "फलति निष्पद्यते इति फलम् । फलं सस्ये कृतार्थत्वे हेतुजाते च तद्वति ॥",
    lakshanaIast: "phalati niṣpadyate iti phalam | phalaṃ sasye kṛtārthatve hetujāte ca tadvati ||",
    meaningShort: "Fruit or result — the ripened seed-bearing produce of a tree, and universally the matured outcome of an action or cause.",
    meaningDeep: "Derived from √phal ('niṣpattau' — to ripen, burst into fruition, succeed) with suffix `-ac` (Pāṇini 3.1.134), `phala` bridges nature and moral philosophy. Amarakośa treats botanical ripe fruit (`āma` = unripe, `pakva` = ripe `phala`) in Vanauṣadhivarga (2.4.18) and its semantic range — grain/crop (`sasya`), fulfillment (`kṛtārthatva`), and causal outcome (`hetujāta`) — in Nānārthavarga. Bhagavadgītā 2.47 (`karmaṇy evādhikāras te mā phaleṣu kadācana`) immortalizes `phala-tyāga` — performing duty as worship of Hari without selfish attachment to reward.",
    padaccheda: [
      { deva: "फलति निष्पद्यते इति फलम्", iast: "phalati niṣpadyate iti phalam", gloss: "ripens and comes to mature completion (√phal)" },
      { deva: "सस्ये कृतार्थत्वे", iast: "sasye kṛtārthatve", gloss: "in the sense of ripened produce and fulfilled purpose" },
      { deva: "हेतु-जाते", iast: "hetu-jāte", gloss: "and any effect born of a prior cause" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.4.18, 3.3.195; BG 2.47"
    },
    related: ["vriksha", "pushpa", "bija", "karya", "karma"]
  },
  {
    id: "bija",
    deva: "बीजम्",
    iast: "bījam",
    stem: "bīja",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["seed", "germ", "kernel", "root-cause"],
    phoneticAliases: ["bija", "beeja", "ankura-hetu", "karana", "seed", "germ"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "जायतेऽस्मादङ्कुर इति बीजम् । बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् ॥",
    lakshanaIast: "jāyate 'smād aṅkura iti bījam | bījaṃ māṃ sarvabhūtānāṃ viddhi pārtha sanātanam ||",
    meaningShort: "A seed or germ — the concentrated kernel inside a fruit that holds latent life and sprouts into a new organism.",
    meaningDeep: "Traced by classical commentators (`vi` + √jan 'to generate anew' with loss of `-n` and vowel lengthening, `vijāyate 'smāt`) to the generative potency within every plant and lineage, `bīja` is defined in Amarakośa (Nānārthavarga) as `kāraṇa` (seminal cause), agricultural grain-seed, and germinal essence. In philosophical argument (`bījāṅkura-nyāya`), seed and sprout illustrate beginningless cyclical succession, while in Bhagavadgītā 7.10 and 10.39 (`yac cāpi sarvabhūtānāṃ bījaṃ tad aham arjuna`), Bhagavān declares Himself the eternal efficient-animating Ground without whom nothing can germinate.",
    padaccheda: [
      { deva: "जायते अस्मात् अङ्कुरः", iast: "jāyate asmāt aṅkuraḥ", gloss: "that from which the new sprout springs forth (vi + √jan)" },
      { deva: "बीजम् सर्वभूतानाम्", iast: "bījam sarvabhūtānām", gloss: "the seminal germ of all beings" },
      { deva: "सनातनम्", iast: "sanātanam", gloss: "primordial and imperishable" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 7.10, 10.39; AK 3.3.32"
    },
    related: ["phala", "mula", "vriksha", "kshetra", "srishti"]
  },
  {
    id: "lata",
    deva: "लता",
    iast: "latā",
    stem: "latā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["creeper", "vine", "climbing plant", "tendril"],
    phoneticAliases: ["lata", "valli", "vallari", "vratati", "virudh", "creeper", "vine"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "लतति वेष्टते तरुमिति लता । वल्ली तु व्रततिर्लता प्रतानिनी वीरुध् च सा ॥",
    lakshanaIast: "latati veṣṭate tarum iti latā | vallī tu vratatir latā pratāninī vīrudh ca sā ||",
    meaningShort: "A creeper or climbing vine — a slender, supple plant that twines gracefully around a supporting tree.",
    meaningDeep: "Derived from √lat ('veṣṭane / bālye' — to twine gracefully, sway tenderly), `latā` is grouped in Amarakośa (Vanauṣadhivarga) with `vallī`, `vallarī`, `vratati` (from √vṛt, 'winding upward'), `pratāninī` (tendril-spreading), and `vīrudh`. In Sanskrit poetics and devotional philosophy, `latā-vṛkṣa-nyāya` symbolizes delicate grace (`saukumārya`) and steadfast reliance — just as a flowering vine climbs skyward only by clasping an unshakable `kalpavṛkṣa`, the dependent `jīva` ascends through `bhakti-latā` clinging to the Supreme Lord.",
    padaccheda: [
      { deva: "लतति वेष्टते तरुम्", iast: "latati veṣṭate tarum", gloss: "twines and climbs around a supporting tree" },
      { deva: "वल्ली व्रततिः लता", iast: "vallī vratatiḥ latā", gloss: "twining vine, winding climber, supple creeper" },
      { deva: "प्रतानिनी वीरुध्", iast: "pratāninī vīrudh", gloss: "tendril-extending plant" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.4.9 (Vanauṣadhivarga)"
    },
    related: ["vriksha", "vana", "pushpa", "parna", "trina"]
  },
  {
    id: "trina",
    deva: "तृणम्",
    iast: "tṛṇam",
    stem: "tṛṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["grass", "blade of grass", "herb", "straw"],
    phoneticAliases: ["trina", "trna", "shashpa", "darbha", "kusha", "durva", "grass"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "तृह्यते भक्ष्यते पशुभिरिति तृणम् । शष्पं बालतृणं घासो यवसं तृणमर्जुनम् ॥",
    lakshanaIast: "tṛhyate bhakṣyate paśubhir iti tṛṇam | śaṣpaṃ bālatṛṇaṃ ghāso yavasaṃ tṛṇam arjunam ||",
    meaningShort: "Grass or herbage — a humble blade of meadow turf that carpets the earth and sustains grazing creatures.",
    meaningDeep: "Yāska (Nirukta 1.12: `tṛṇaṃ tardanāt`) derives `tṛṇa` from √tṛd / √tṛh ('to prick upward through soil or be grazed by cattle'). Amarakośa (Vanauṣadhivarga, `tṛṇavarga` section) distinguishes tender young shoots (`śaṣpa`), meadow fodder (`ghāsa`, `yavasa`), sacred `darbha` / `kuśa`, and resilient `dūrvā` grass. In Kena Upaniṣad 3.4–10, Agni cannot burn nor Vāyu lift a single `tṛṇa` placed before them by Brahman — a famous parable quoted across Madhvācārya's works to prove that every finite agent's power depends wholly upon Paramātman.",
    padaccheda: [
      { deva: "तृह्यते पशुभिः इति तृणम्", iast: "tṛhyate paśubhiḥ iti tṛṇam", gloss: "grazed by animals or piercing upward from soil (√tṛh / √tṛd)" },
      { deva: "शष्पम् बाल-तृणम्", iast: "śaṣpam bāla-tṛṇam", gloss: "tender sprouting grass-blade" },
      { deva: "घासः यवसम् तृणम्", iast: "ghāsaḥ yavasam tṛṇam", gloss: "pasture grass, meadow herbage, straw" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Kenopaniṣad",
      granthaDeva: "निरुक्तम् · अमरकोशः · केनोपनिषत्",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.12; AK 2.4.165–166; Kena Up. 3.6"
    },
    related: ["prithivi", "go-cow", "pashu", "mriga", "vana"]
  },
  {
    id: "ushas",
    deva: "उषाः",
    iast: "uṣāḥ",
    stem: "uṣas",
    pos: "strīliṅga (f.)",
    englishGlosses: ["dawn", "daybreak", "aurora", "morning light"],
    phoneticAliases: ["ushas", "usas", "usha", "prabhata", "pratyusha", "aruna", "dawn"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "उच्छति विवास्यति तम इति उषाः । प्रत्यूषोऽहर्मुखं कल्पमुषःप्रत्युषसी अपि ॥",
    lakshanaIast: "ucchati vivāsyati tama iti uṣāḥ | pratyūṣo 'harmukhaṃ kalpam uṣaḥpratyuṣasī api ||",
    meaningShort: "Dawn — the radiant flush of daybreak that dispels nocturnal darkness and awakens all living beings to action.",
    meaningDeep: "Yāska (Nirukta 2.18: `uṣāḥ kasmāt? ucchatīti satyāḥ`) derives `uṣas` from √vas ('vibhāte' — `ucchati`, to shine forth and banish gloom). Amarakośa (Kālavarga) pairs `uṣas` with `pratyūṣa`, `aharmukha` ('face of the day'), `kalpa`, and `prabhāta`. Celebrated in twenty exquisite hymns of the Ṛgveda (e.g. RV 1.113), Uṣā-devī is honored in Śrī Madhvācārya's Ṛgbhāṣya and Tantrasārasaṅgraha not merely as physical twilight, but as the presiding deity of spiritual awakening (`prabodha`) who prepares the mind for morning meditation (`brāhma-muhūrta`).",
    padaccheda: [
      { deva: "उच्छति विवास्यति तमः", iast: "ucchati vivāsyati tamaḥ", gloss: "shines forth and drives away darkness (√vas → ucchati)" },
      { deva: "प्रत्यूषः अहर्मुखम्", iast: "pratyūṣaḥ aharmukham", gloss: "early daybreak, threshold of the day" },
      { deva: "उषाः", iast: "uṣāḥ", gloss: "luminous Dawn" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.18; AK 1.4.2 (Kālavarga); RV 1.113.1"
    },
    related: ["surya", "dina", "sandhya", "ratri", "jyotis"]
  },
  {
    id: "dina",
    deva: "दिनम्",
    iast: "dinam",
    stem: "dina",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["day", "daytime", "solar day"],
    phoneticAliases: ["dina", "divasa", "vasara", "ahan", "ghasra", "day"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "द्यति तमः खण्डयति इति दिनम् । घस्रो दिनाहनी वा तु क्लीबे दिवसवासरौ ॥",
    lakshanaIast: "dyati tamaḥ khaṇḍayati iti dinam | ghasro dināhanī vā tu klībe divasavāsarau ||",
    meaningShort: "Day or daytime — the sunlit span from sunrise to sunset that cleaves darkness and illumines worldly activity.",
    meaningDeep: "Classical commentators (Kṣīrasvāmin & Bhānuji Dīkṣita) derive `dina` from √do ('avakhāṇḍane' — `dyati tamaḥ`, that which cuts through nocturnal gloom) or √dī ('dīptau' — to shine brightly). Amarakośa (Kālavarga) groups `ghasra`, `dina`, `ahan` ('that which is never abandoned by time', `na jahāti`), `divasa` (from √div, 'luminous expanse'), and `vāsara`. In astronomical and dharmaśāstric reckoning, a civil `sāvana-dina` spans from one sunrise to the next, comprising thirty `muhūrtas`.",
    padaccheda: [
      { deva: "द्यति तमः इति दिनम्", iast: "dyati tamaḥ iti dinam", gloss: "cleaves and dispels darkness (√do)" },
      { deva: "घस्रः दिन-अहनी", iast: "ghasraḥ dina-ahanī", gloss: "sunlit day, `dina` and `ahan`" },
      { deva: "दिवस-वासरौ", iast: "divasa-vāsarau", gloss: "radiant daytime and civil day" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.4.2 (Kālavarga)"
    },
    related: ["surya", "ushas", "sandhya", "ratri", "kala"]
  },
  {
    id: "sandhya",
    deva: "सन्ध्या",
    iast: "sandhyā",
    stem: "sandhyā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["twilight", "dusk", "juncture of day and night", "sacred meditation"],
    phoneticAliases: ["sandhya", "samdhya", "sayam", "pradosha", "twilight", "dusk"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "सम्यक् ध्यायन्त्यस्यां ब्रह्म इति सन्ध्या । सन्ध्या पित्र्या प्रदोषश्च रजन्याः प्रथमे मुखे ॥",
    lakshanaIast: "samyak dhyāyanty asyāṃ brahma iti sandhyā | sandhyā pitryā pradoṣaś ca rajanyāḥ prathame mukhe ||",
    meaningShort: "Twilight — the liminal juncture uniting day and night, revered as the sacred hour for meditative worship.",
    meaningDeep: "Formed either from `sam` + √dhā ('sandhīyate aho-rātram atra' — where day and night are joined together) or `sam` + √dhyai ('samyak dhyāyanti' — the hour when sages meditate intently upon the Supreme), `sandhyā` denotes dawn, noon, and evening transitions (`tri-sandhyā`). Amarakośa (Kālavarga) pairs evening twilight with `pitryā` and `pradoṣa`. In Vaidika and Tattvavāda daily discipline (`sandhyāvandana`), the worshiper contemplates Bhagavān Nārāyaṇa dwelling within the solar orb via the Savitṛ-Gāyatrī mantra.",
    padaccheda: [
      { deva: "सम्यक् ध्यायन्ति अस्याम्", iast: "samyak dhyāyanti asyām", gloss: "wherein one meditates one-pointedly (sam + √dhyai / √dhā)" },
      { deva: "सन्ध्या प्रदोषः", iast: "sandhyā pradoṣaḥ", gloss: "twilight juncture, onset of dusk" },
      { deva: "रजन्याः प्रथमे मुखे", iast: "rajanyāḥ prathame mukhe", gloss: "at the opening threshold of night" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.4.3–4 (Kālavarga)"
    },
    related: ["ushas", "dina", "ratri", "dhyana", "surya"]
  },
  {
    id: "ratri",
    deva: "रात्रिः",
    iast: "rātriḥ",
    stem: "rātri",
    pos: "strīliṅga (f.)",
    englishGlosses: ["night", "nighttime", "nocturnal repose"],
    phoneticAliases: ["ratri", "nisha", "rajani", "kshapa", "sharvari", "yamini", "triyama", "night"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "राति सुखं विश्रामं च भूतेभ्य इति रात्रिः । निशा निशीथिनी रात्रिस्त्रियामा क्षणदा क्षपा ॥",
    lakshanaIast: "rāti sukhaṃ viśrāmaṃ ca bhūtebhya iti rātriḥ | niśā niśīthinī rātris triyāmā kṣaṇadā kṣapā ||",
    meaningShort: "Night — the tranquil starlit interval from dusk to dawn that bestows rest and restoration upon all living beings.",
    meaningDeep: "Yāska (Nirukta 2.18) and Uṇādi-sūtra (4.67: `rāter ṭriḥ`) derive `rātri` from √rā ('dāne' — she who bestows peaceful repose upon weary creatures) or √ram ('to bring activity to rest'). Amarakośa (Kālavarga) offers poetic synonyms: `niśā`, `niśīthinī`, `triyāmā` ('spanning three central watches'), `kṣaṇadā` ('giver of restful leisure'), `kṣapā`, `vibhāvarī` ('star-bright'), `tamisrā`, `rajanī`, and `śarvarī`. Bhagavadgītā 2.69 (`yā niśā sarvabhūtānāṃ tasyāṃ jāgarti saṃyamī`) contrasts worldly slumber with the sage's inward wakefulness.",
    padaccheda: [
      { deva: "राति विश्रामम् इति रात्रिः", iast: "rāti viśrāmam iti rātriḥ", gloss: "bestows rest upon living beings (√rā)" },
      { deva: "निशा निशीथिनी रात्रिः", iast: "niśā niśīthinī rātriḥ", gloss: "stiller of motion, deep midnight-bearer, night" },
      { deva: "त्रियामा क्षणदा क्षपा", iast: "triyāmā kṣaṇadā kṣapā", gloss: "three-watched, leisure-bestowing nocturnal span" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Bhagavadgītā",
      granthaDeva: "अमरकोशः · निरुक्तम् · भगवद्गीता",
      author: "Amarasimha & Yāska",
      locator: "AK 1.4.4–5 (Kālavarga); Nirukta 2.18; BG 2.69"
    },
    related: ["dina", "sandhya", "ushas", "candra", "nidra"]
  },
  {
    id: "ritu",
    deva: "ऋतुः",
    iast: "ṛtuḥ",
    stem: "ṛtu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["season", "cosmic cycle", "appointed time"],
    phoneticAliases: ["ritu", "rtu", "kala-bheda", "season"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "इयर्ति क्रमेण गच्छति इति ऋतुः । मासौ द्वौ द्वौ स्मृतावृतू षड्भिः संवत्सरो मतः ॥",
    lakshanaIast: "iyarti krameṇa gacchati iti ṛtuḥ | māsau dvau dvau smṛtāv ṛtū ṣaḍbhiḥ saṃvatsaro mataḥ ||",
    meaningShort: "A season — an orderly two-month division of the solar-lunar year moving in harmonious cosmic rhythm.",
    meaningDeep: "Derived from √ṛ ('gatau' — `iyarti`, to move in unerring sequence; Uṇādi 1.71), `ṛtu` shares its root with Vedic `ṛta` (cosmic order). Amarakośa (Kālavarga 1.4.13–20) defines each `ṛtu` as a pair of lunar months (`dvau dvau māsau rtuḥ`), enumerating the classical six-season (`ṣaḍ-ṛtu`) wheel of India: `vasanta` (spring), `grīṣma` (summer), `varṣāḥ` (monsoon), `śarad` (autumn), `hemanta` (early winter), and `śiśira` (late frost). In Taittirīya Brāhmaṇa and Āyurveda (`ṛtucaryā`), living in attunement with the seasons sustains health and dharma.",
    padaccheda: [
      { deva: "इयर्ति क्रमेण इति ऋतुः", iast: "iyarti krameṇa iti ṛtuḥ", gloss: "moves in regular, unfailing order (√ṛ)" },
      { deva: "मासौ द्वौ द्वौ ऋतू", iast: "māsau dvau dvau ṛtū", gloss: "each pair of months constitutes one season" },
      { deva: "षड्भिः संवत्सरः", iast: "ṣaḍbhiḥ saṃvatsaraḥ", gloss: "six seasons complete the full year" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.4.13–20 (Kālavarga); Nirukta 2.25"
    },
    related: ["vasanta", "sharad", "hemanta", "varsha", "masa"]
  },
  {
    id: "vasanta",
    deva: "वसन्तः",
    iast: "vasantaḥ",
    stem: "vasanta",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["spring", "vernal season", "season of blossoms"],
    phoneticAliases: ["vasanta", "madhu-ritu", "pushpasamaya", "surabhi", "kusumakara", "spring"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वसन्त्यस्मिन् सुखं प्राणिनः कामानदयश्चेति वसन्तः । वसन्ते पुष्पसमयः सुरभिः कुसुमाकरः ॥",
    lakshanaIast: "vasanty asmin sukhaṃ prāṇinaḥ kāmādayaś ceti vasantaḥ | vasante puṣpasamayaḥ surabhiḥ kusumākaraḥ ||",
    meaningShort: "Spring — the fragrant vernal season of Caitra and Vaiśākha when groves burst into blossom and cuckoos sing.",
    meaningDeep: "Formed from √vas ('nivāse / kāntau' — wherein beauty, joy, and mild breezes dwell) with the Uṇādi suffix `-jhac` (`-anta`, Uṇādi 3.128), `vasanta` spans the lunar months `caitra` (`madhu`) and `vaiśākha` (`mādhava`). Amarakośa (Kālavarga 1.4.18) names it `puṣpasamaya` ('flower-tide') and `surabhi` ('fragrant one'), while Bhagavadgītā 10.35 crowns it first among seasons: `ṛtūnāṃ kusumākaraḥ` ('among seasons I am flower-bearing Spring') — interpreted in Madhvācārya's Gītābhāṣya as manifesting Bhagavān's joyous creative abundance.",
    padaccheda: [
      { deva: "वसन्ति अस्मिन् सुखम्", iast: "vasanti asmin sukham", gloss: "wherein creatures dwell in mild delight (√vas)" },
      { deva: "पुष्प-समयः सुरभिः", iast: "puṣpa-samayaḥ surabhiḥ", gloss: "season of blossoms, the fragrant one" },
      { deva: "कुसुमाकरः", iast: "kusumākaraḥ", gloss: "bountiful treasury of flowers (BG 10.35)" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.4.18 (Kālavarga); BG 10.35"
    },
    related: ["ritu", "pushpa", "kokila", "bhramara", "sharad"]
  },
  {
    id: "sharad",
    deva: "शरत्",
    iast: "śarat",
    stem: "śarad",
    pos: "strīliṅga (f.)",
    englishGlosses: ["autumn", "clear post-monsoon season", "year (poetic)"],
    phoneticAliases: ["sharad", "sarat", "sharada-ritu", "autumn"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "शृणाति पङ्कं मेघं च इति शरत् । स्यादृतुः प्रावृषोर्ध्वं स्त्री शरत् ॥",
    lakshanaIast: "śṛṇāti paṅkaṃ meghaṃ ca iti śarat | syād ṛtuḥ prāvṛṣordhvaṃ strī śarat ||",
    meaningShort: "Autumn — the crystalline post-monsoon season of Āśvina and Kārttika famed for cloudless skies, silver moonlight, and clear waters.",
    meaningDeep: "Yāska (Nirukta 4.25: `śarat śṛtā asyām oṣadhayo bhavanti`) and Uṇādi-sūtra (1.127) derive `śarad` from √śṝ ('hiṃsāyām' — dispersing dark storm-clouds and mud) or √śrā ('pāke' — ripening crops and herbs). Following the rains (`prāvṛṣordhvam`, AK 1.4.19), `śarad` unveils spotless skies, blooming lotuses, and radiant full moons (`śaraccandra`). Because Vedic prayers measure human longevity by clear autumns (`jīvema śaradaḥ śatam`, RV 7.66.16), `śarad` also serves in Amarakośa as a classical synonym for an entire year.",
    padaccheda: [
      { deva: "शृणाति पङ्कम् मेघम् च", iast: "śṛṇāti paṅkam megham ca", gloss: "clears away mire and dark storm-clouds (√śṝ)" },
      { deva: "प्रावृष-ऊर्ध्वम् ऋतुः", iast: "prāvṛṣa-ūrdhvam ṛtuḥ", gloss: "the luminous season following the monsoon rains" },
      { deva: "शरत्", iast: "śarat", gloss: "autumn; by metonymy, a year of life" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Ṛgveda",
      granthaDeva: "निरुक्तम् · अमरकोशः · ऋग्वेदः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 4.25; AK 1.4.19; RV 7.66.16"
    },
    related: ["ritu", "candra", "saras", "varsha", "hemanta"]
  },
  {
    id: "hemanta",
    deva: "हेमन्तः",
    iast: "hemantaḥ",
    stem: "hemanta",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["winter", "dewy season", "frosty early winter"],
    phoneticAliases: ["hemanta", "shishira", "tushara-kala", "winter"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "हिममस्यास्तीति हेमन्तः । मार्गशीर्षसहाः पौषस्तैषश्च द्वौ तु हेमन्तः ॥",
    lakshanaIast: "himam asyāstīti hemantaḥ | mārgaśīrṣasahāḥ pauṣas taiṣaś ca dvau tu hemantaḥ ||",
    meaningShort: "Winter — the cool, mist-veiled harvest season spanning the lunar months of Mārgaśīrṣa and Pauṣa.",
    meaningDeep: "Derived from √hi / `hima` (frost, cool dew; Nirukta 4.27) via Uṇādi 3.128 (`heman` + `-ta`), `hemanta` marks the onset of crisp cold across Mārgaśīrṣa (`sahas`) and Pauṣa (`sahasyā`), followed by deep frost (`śiśira`). Amarakośa (Kālavarga 1.4.16–17) pairs these two cold months as `hemanta`. Notably, its opening month `mārgaśīrṣa` is celebrated in Bhagavadgītā 10.35 (`māsānāṃ mārgaśīrṣo'ham`) as a season of ripened golden grain, clear morning mist, and heightened digestive and contemplative vigor.",
    padaccheda: [
      { deva: "हिमम् अस्य अस्ति", iast: "himam asya asti", gloss: "characterized by cool dew and frost (`hima`)" },
      { deva: "मार्गशीर्षः पौषः च", iast: "mārgaśīrṣaḥ pauṣaḥ ca", gloss: "spanning the months Mārgaśīrṣa and Pauṣa" },
      { deva: "हेमन्तः", iast: "hemantaḥ", gloss: "early winter" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.4.16–17 (Kālavarga); Nirukta 4.27"
    },
    related: ["ritu", "hima", "sharad", "vasanta", "masa"]
  },
  {
    id: "varsha",
    deva: "वर्षः",
    iast: "varṣaḥ",
    stem: "varṣa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["year", "rain", "rainy season", "continental division"],
    phoneticAliases: ["varsha", "varsa", "samvatsara", "abda", "vatsara", "pravrish", "year", "monsoon"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "वर्षति कामं कालं वा इति वर्षः । संवत्सरो वत्सरोऽब्दो हायनोऽस्त्री शरत्समाः ॥",
    lakshanaIast: "varṣati kāmaṃ kālaṃ vā iti varṣaḥ | saṃvatsaro vatsaro 'bdo hāyano 'strī śaratsamāḥ ||",
    meaningShort: "A year (and in feminine plural `varṣāḥ`, the monsoon season) — a complete annual cycle measured by the return of the rains.",
    meaningDeep: "From √vṛṣ ('secane' — to rain down), `varṣa` reflects the agrarian insight of classical India: a full year (`saṃvatsara`) is counted from one monsoon cycle to the next, just as `abda` literally means 'cloud/water-giver'. Amarakośa (Kālavarga 1.4.20–21) distinguishes feminine plural `varṣāḥ` / `prāvṛṣ` (the monsoon season of Śrāvaṇa and Bhādrapada) from masculine/neuter `varṣa` = `saṃvatsara`, `vatsara`, `abda`, `hāyana`, and `samāḥ` (year), as well as geographical subcontinents (`bhārata-varṣa`).",
    padaccheda: [
      { deva: "वर्षति इति वर्षः", iast: "varṣati iti varṣaḥ", gloss: "pours forth rain and marks the annual cycle (√vṛṣ)" },
      { deva: "संवत्सरः वत्सरः अब्दः", iast: "saṃvatsaraḥ vatsaraḥ abdaḥ", gloss: "complete solar-lunar year, annual cycle" },
      { deva: "हायनः शरत् समाः", iast: "hāyanaḥ śarat samāḥ", gloss: "classical synonyms for a year" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.4.20–21 (Kālavarga)"
    },
    related: ["vrishti", "ritu", "masa", "megha", "kala"]
  },
  {
    id: "masa",
    deva: "मासः",
    iast: "māsaḥ",
    stem: "māsa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["month", "lunar month", "thirty-day period"],
    phoneticAliases: ["masa", "mas", "masah", "paksha-dvaya", "month"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "मीयते परिच्छिद्यते कालोऽनेन इति मासः । पक्षौ पूर्वापरौ शुक्लकृष्णौ मासस्तु तावुभौ ॥",
    lakshanaIast: "mīyate paricchidyate kālo 'nena iti māsaḥ | pakṣau pūrvāparau śuklakṛṣṇau māsas tu tāv ubhau ||",
    meaningShort: "A month — the fundamental measure of time uniting the bright waxing fortnight and dark waning fortnight of the Moon.",
    meaningDeep: "Yāska (Nirukta 1.5, 4.27: `māsaḥ mānāt`) derives `māsa` (and its consonant-stem doublet `mās`, directly cognate with Latin *mēnsis* and English *month*) from √mā ('māne' — to measure out time across the Moon's phases). Amarakośa (Kālavarga 1.4.12–13) defines `māsa` cleanly as the union of the two fifteen-tithi `pakṣas` — `śukla` (waxing) and `kṛṣṇa` (waning) — twelve of which (`caitra` through `phālguna`) weave the six seasons of the sacred calendar.",
    padaccheda: [
      { deva: "मीयते कालः अनेन", iast: "mīyate kālaḥ anena", gloss: "time is measured out by this lunar span (√mā)" },
      { deva: "पक्षौ शुक्ल-कृष्णौ", iast: "pakṣau śukla-kṛṣṇau", gloss: "the bright (waxing) and dark (waning) fortnights" },
      { deva: "मासः तु तौ उभौ", iast: "māsaḥ tu tau ubhau", gloss: "the two together constitute one month" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.4.12–13 (Kālavarga); Nirukta 4.27"
    },
    related: ["candra", "ritu", "varsha", "dina", "kala"]
  },
  {
    id: "jyotis",
    deva: "ज्योतिः",
    iast: "jyotiḥ",
    stem: "jyotis",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["light", "luminary", "splendor", "inner illumination"],
    phoneticAliases: ["jyotis", "jyoti", "prakasha", "prabha", "ruci", "rocis", "light"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "द्योतते प्रकाशते इति ज्योतिः । तज्जास्तिमिरनाशिन्यः प्रभा रुग्रुचिदीधितयः ॥",
    lakshanaIast: "dyotate prakāśate iti jyotiḥ | tajjās timiranāśinyaḥ prabhā rug rucidīdhitayaḥ ||",
    meaningShort: "Light or radiance — that which shines of itself, dispels darkness, and reveals all visible forms.",
    meaningDeep: "Formed from √dyut / √jyut ('dīptau' — to shine forth, illuminate) with neuter suffix `-isun` (Uṇādi 2.110), `jyotis` encompasses physical radiance (`prabhā`, `ruci`, `kānti`, `rocis`, `prakāśa` in Amarakośa 1.3.34), celestial bodies (whence `jyotiṣa`, astronomy), digestive/ritual fire, and pure consciousness. Muṇḍaka Upaniṣad 2.2.10 and Bhagavadgītā 13.17 (`jyotiṣām api taj jyotis tamasaḥ param ucyate`) exalt Paramātman as the Light of all lights, expounded in Madhvācārya's Brahmasūtrabhāṣya (1.1.24, *Jyotir-adhikaraṇa*) as supreme Viṣṇu who empowers sun, moon, and intellect to shine.",
    padaccheda: [
      { deva: "द्योतते प्रकाशते इति ज्योतिः", iast: "dyotate prakāśate iti jyotiḥ", gloss: "shines forth and makes objects manifest (√jyut / √dyut)" },
      { deva: "तिमिर-नाशिन्यः", iast: "timira-nāśinyaḥ", gloss: "dispelling obscuring darkness" },
      { deva: "प्रभा रुचि-दीधितयः", iast: "prabhā ruci-dīdhitayaḥ", gloss: "effulgence, luster, and luminous rays" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.3.34; BG 13.17; BSB 1.1.24"
    },
    related: ["surya", "tejas", "dipa", "chaya", "andhakara"]
  },
  {
    id: "chaya",
    deva: "छाया",
    iast: "chāyā",
    stem: "chāyā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["shade", "shadow", "reflection", "luster"],
    phoneticAliases: ["chaya", "chaayaa", "anatapa", "pratibimba-chaya", "shade", "shadow"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "छ्यति आतपं छिनत्ति इति छाया । छाया त्वनातपः कान्तिः प्रतिबिम्बमनातपे ॥",
    lakshanaIast: "chyati ātapaṃ chinatti iti chāyā | chāyā tv anātapaḥ kāntiḥ pratibimbam anātape ||",
    meaningShort: "Shade or shadow — cool shelter intercepting scorching sunlight, as well as a reflected image or graceful complexion.",
    meaningDeep: "Derived from √cho ('chedane' — cutting off fierce solar glare) with vowel change and `-aṅ` (`chāyā`), Amarakośa (1.3.35 & Nānārthavarga 3.3.149) deftly captures its threefold semantic beauty: (1) `anātapa` — cool shade beneath a tree or roof, (2) `pratibimba` — a reflected likeness or cast shadow, and (3) `kānti` / `śobhā` — inner glow of complexion or poetic translation. In Kaṭha Upaniṣad 1.3.1 (`chāyātapau brahmavido vadanti`) and Tattvavāda, `chāyā` and `ātapa` illustrate the ontological contrast and dependence between the finite `jīva` and self-luminous `Bimba`.",
    padaccheda: [
      { deva: "आतपम् छिनत्ति इति छाया", iast: "ātapam chinatti iti chāyā", gloss: "intercepts scorching heat to create cool shelter (√cho)" },
      { deva: "अनातपः कान्तिः", iast: "anātapaḥ kāntiḥ", gloss: "cool shade; also loveliness or luster" },
      { deva: "प्रतिबिम्बम्", iast: "pratibimbam", gloss: "reflected image or cast shadow" }
    ],
    source: {
      grantha: "Amarakośa & Kaṭhopaniṣad",
      granthaDeva: "अमरकोशः · कठोपनिषत्",
      author: "Amarasimha",
      locator: "AK 1.3.35, 3.3.149; Kaṭha Up. 1.3.1"
    },
    related: ["jyotis", "surya", "vriksha", "pratibimba", "andhakara"]
  },
  {
    id: "dipa",
    deva: "दीपः",
    iast: "dīpaḥ",
    stem: "dīpa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["lamp", "oil-lamp", "light", "illuminator"],
    phoneticAliases: ["dipa", "deepa", "pradipa", "dipaka", "lamp"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "दीप्यते स्वयमन्यांश्च दीपयति इति दीपः । यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता ॥",
    lakshanaIast: "dīpyate svayam anyāṃś ca dīpayati iti dīpaḥ | yathā dīpo nivātastho neṅgate sopamā smṛtā ||",
    meaningShort: "A lamp — a kindled wick fueled by oil or ghee that shines of itself while illuminating every surrounding object.",
    meaningDeep: "Derived from √dīpī ('dīptau' — to shine brightly, kindle), `dīpa` (`pradīpa`, AK 2.6.139) holds central philosophical and ritual significance across Sanskrit thought. In Nyāya and Vedānta epistemology (`pradīpa-vat`), the lamp demonstrates `svaparaprakāśakatva` — needing no second lamp to be seen while revealing pots and walls around it, analogous to self-luminous `jñāna` and `sākṣī`. In Bhagavadgītā 6.19, a steady flame in a windless chamber (`dīpo nivātasthaḥ`) personifies the yogin's unwavering mind absorbed in Viṣṇu.",
    padaccheda: [
      { deva: "दीप्यते स्वयम् दीपयति च", iast: "dīpyate svayam dīpayati ca", gloss: "shines of itself and illuminates other objects (√dīp)" },
      { deva: "दीपः निवात-स्थः", iast: "dīpaḥ nivāta-sthaḥ", gloss: "a lamp sheltered in a windless place" },
      { deva: "न इङ्गते", iast: "na iṅgate", gloss: "does not flicker — emblem of steady meditation" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 6.19; AK 2.6.139"
    },
    related: ["jyotis", "agni-jwala", "tejas", "ghrita", "jnana"]
  },
  {
    id: "suvarna",
    deva: "सुवर्णम्",
    iast: "suvarṇam",
    stem: "suvarṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["gold", "noble metal", "lustrous bullion"],
    phoneticAliases: ["suvarna", "hiranya", "kanaka", "hema", "kancana", "svarna", "gold"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "शोभनो वर्णोऽस्य इति सुवर्णम् । हिरण्यं हेम हाटकं तपनीयं सुवर्णकम् ॥",
    lakshanaIast: "śobhano varṇo 'sya iti suvarṇam | hiraṇyaṃ hema hāṭakaṃ tapanīyaṃ suvarṇakam ||",
    meaningShort: "Gold — the incorruptible, radiant precious metal celebrated for its auspicious hue and enduring purity under fire.",
    meaningDeep: "Transparently formed as a bahuvrīhi compound (`śobhanaḥ varṇaḥ asya`, 'possessing a resplendent hue and noble weight'), `suvarṇa` commands twenty synonyms in Amarakośa (Vaiśyavarga 2.9.94–96), including `hiraṇya`, `heman`, `hāṭaka`, `tapanīya` ('refined in fire'), `kanaka`, `kāñcana`, `cāmīkara`, and `jātarūpa`. In Nyāya-Vaiśeṣika and Tattvavāda (`ākarajaṃ tejaḥ suvarṇādi`, TS 12), gold is classified not as mere earth (`pṛthivī`) but as mineral `tejas` because extreme fire melts it without ever consuming its fluid luster.",
    padaccheda: [
      { deva: "शोभनः वर्णः अस्य", iast: "śobhanaḥ varṇaḥ asya", gloss: "possessing a radiant, unblemished hue (`su-varṇa`)" },
      { deva: "हिरण्यम् हेम हाटकम्", iast: "hiraṇyam hema hāṭakam", gloss: "imperishable bullion, gold, shining ore" },
      { deva: "तपनीयम् सुवर्णम्", iast: "tapanīyam suvarṇam", gloss: "fire-refined noble gold" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 2.9.94–95 (Vaiśyavarga); TS 12"
    },
    related: ["rajata", "ratna", "ayas", "tejas", "dhana"]
  },
  {
    id: "rajata",
    deva: "रजतम्",
    iast: "rajatam",
    stem: "rajata",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["silver", "white precious metal"],
    phoneticAliases: ["rajata", "rupya", "tara-silver", "shveta-dhatu", "silver"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "रज्यते शुभ्रतया दीप्यते इति रजतम् । दुर्वर्णं रजतं रूप्यं खर्जूरं श्वेतमित्यपि ॥",
    lakshanaIast: "rajyate śubhratayā dīpyate iti rajatam | durvarṇaṃ rajataṃ rūpyaṃ kharjūraṃ śvetam ity api ||",
    meaningShort: "Silver — the gleaming white precious metal prized for coinage, sacred vessels, and cool lunar sheen.",
    meaningDeep: "Derived via Uṇādi 3.110 from √ranj ('rāge / dīptau' — gleaming brightly white, cognate with Greek *argyros* and Latin *argentum*), `rajata` is listed in Amarakośa (Vaiśyavarga 2.9.96) with `rūpya` ('stamped with royal form', origin of *rupee*), `kharjūra`, `śveta`, and `tāra`. In classical Vedāntic epistemology, mother-of-pearl mistaken for silver (`śukti-rajata`) is the famous test case where Śrī Madhvācārya's Viṣṇutattvavinirṇaya refutes illusory world-denial (`mithyātva`) through rigorous `anyathākhyāti` realism.",
    padaccheda: [
      { deva: "रज्यते दीप्यते इति रजतम्", iast: "rajyate dīpyate iti rajatam", gloss: "gleams with bright lunar whiteness (√rañj + -ata)" },
      { deva: "रजतम् रूप्यम्", iast: "rajatam rūpyam", gloss: "silver, coin-bearing precious metal" },
      { deva: "श्वेतम्", iast: "śvetam", gloss: "lustrous white metal" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.9.96 (Vaiśyavarga); Nirukta 6.15"
    },
    related: ["suvarna", "ratna", "ayas", "dhana", "viparyaya"]
  },
  {
    id: "ratna",
    deva: "रत्नम्",
    iast: "ratnam",
    stem: "ratna",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["jewel", "gem", "precious stone", "peerless excellence"],
    phoneticAliases: ["ratna", "mani", "vasu-gem", "vajra-mani", "jewel", "gem"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "रमन्तेऽस्मिन् जना इति रत्नम् । रत्नं स्वजातिश्रेष्ठेऽपि मणौ च वसुनि स्मृतम् ॥",
    lakshanaIast: "ramante 'smin janā iti ratnam | ratnaṃ svajātiśreṣṭhe 'pi maṇau ca vasuni smṛtam ||",
    meaningShort: "A jewel or gem — a crystalline treasure of sea or mountain, and universally the crowning excellence of any class.",
    meaningDeep: "Yāska (Nirukta 7.15: `ratnaṃ ramaṇīyaṃ dhanam`) derives `ratna` from √ram ('krīḍāyām' — that in which the eye and heart delight, beginning with the very first verse of the Ṛgveda: `ratnadhātamam`, RV 1.1.1). Amarakośa (Vaiśyavarga 2.9.92 & Nānārthavarga 3.3.115) defines `ratna` both specifically as a precious gem (`maṇi` — diamond, ruby, pearl, sapphire, emerald) and broadly as `svajāti-śreṣṭha`, whatever is finest in its kind (`strī-ratna`, `śāstra-ratna`). In Śrī Madhvācārya's Ṛgbhāṣya (1.1.1), `ratna` ultimately signifies supreme spiritual bliss (`ānanda`).",
    padaccheda: [
      { deva: "रमन्ते अस्मिन् इति रत्नम्", iast: "ramante asmin iti ratnam", gloss: "wherein hearts delight (√ram + -kna)" },
      { deva: "स्व-जाति-श्रेष्ठे", iast: "sva-jāti-śreṣṭhe", gloss: "the foremost excellence within its own class" },
      { deva: "मणौ वसुनि च", iast: "maṇau vasuni ca", gloss: "signifying a precious gem and radiant treasure" }
    ],
    source: {
      grantha: "Nirukta, Ṛgveda & Amarakośa",
      granthaDeva: "निरुक्तम् · ऋग्वेदः · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 7.15; RV 1.1.1; AK 3.3.115"
    },
    related: ["suvarna", "rajata", "samudra", "shila", "dhana"]
  },
  {
    id: "ayas",
    deva: "अयः",
    iast: "ayaḥ",
    stem: "ayas",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["iron", "metal", "steel", "tempered ore"],
    phoneticAliases: ["ayas", "ayah", "loha", "kalayasa", "iron", "metal", "steel"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "एति गच्छति कार्येषु इति अयः । लोहोऽस्त्री शस्त्रकं तीक्ष्णं पिण्डं कालायसायसी ॥",
    lakshanaIast: "eti gacchati kāryeṣu iti ayaḥ | loho 'strī śastrakaṃ tīkṣṇaṃ piṇḍaṃ kālāyasāyasī ||",
    meaningShort: "Iron or metal — strong smelted ore forged into tools, plowshares, and keen instruments.",
    meaningDeep: "Derived from √i ('gatau' — `eti`, passing fluidly through furnace and forge into implements; Uṇādi 4.189, cognate with Latin *aes* and English *ore*/*iron*), Vedic `ayas` originally denoted workable metal broadly before specializing into iron (`kṛṣṇāyasa` / `kālāyasa`, Chāndogya Upaniṣad 6.1.6). Amarakośa (Vaiśyavarga 2.9.98) pairs `ayas` with `loha`, `śastraka`, `tīkṣṇa` ('keen-edged steel'), and `kālāyasa`. In Vedānta, red-hot iron (`ayo-dagdha-nyāya`) illustrates how fire pervades solid matter without erasing the ontological distinction between fire and iron.",
    padaccheda: [
      { deva: "एति कार्येषु इति अयः", iast: "eti kāryeṣu iti ayaḥ", gloss: "enters into forged crafts and implements (√i + -asun)" },
      { deva: "लोहः शस्त्रकम् तीक्ष्णम्", iast: "lohaḥ śastrakam tīkṣṇam", gloss: "metal, weapon-grade steel, keen iron" },
      { deva: "कालासय-अयसी", iast: "kālāyasa-ayasī", gloss: "dark iron and wrought metal" }
    ],
    source: {
      grantha: "Amarakośa & Chāndogyopaniṣad",
      granthaDeva: "अमरकोशः · छान्दोग्योपनिषत्",
      author: "Amarasimha",
      locator: "AK 2.9.98 (Vaiśyavarga); ChU 6.1.6"
    },
    related: ["suvarna", "rajata", "shila", "agni", "shilpa"]
  },
  {
    id: "amrita",
    deva: "अमृतम्",
    iast: "amṛtam",
    stem: "amṛta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["nectar", "ambrosia", "immortality", "liberation"],
    phoneticAliases: ["amrita", "amrta", "sudha", "piyusha", "nectar", "immortality"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "न विद्यते मरणं यस्मात् तत् अमृतम् । अमृतं यज्ञशेषे स्यात्पीयूषे सलिले मृतौ मोक्षे च ॥",
    lakshanaIast: "na vidyate maraṇaṃ yasmāt tat amṛtam | amṛtaṃ yajñaśeṣe syāt pīyūṣe salile mṛtau mokṣe ca ||",
    meaningShort: "Nectar or immortality — deathless celestial ambrosia, pure life-giving water, and the liberated state beyond mortality.",
    meaningDeep: "Formed with privative `a-` + `mṛta` (from √mṛ, 'free from death and decay'), `amṛta` spans a luminous semantic arc in Amarakośa (Svargavarga 1.1.49 `pīyūṣam amṛtaṃ sudhā` & Nānārthavarga 3.3.63): celestial ambrosia churned from the Milk Ocean by Lord Dhanvantari, sanctified remnant of `yajña` (`yajñaśeṣa`), pure water (`jala`), clarified butter (`ghṛta`), and final liberation (`mokṣa`). Upaniṣadic prayer (`mṛtyor mā amṛtaṃ gamaya`, Bṛhadāraṇyaka 1.3.28) seeks `amṛtatva` — eternal, sorrow-free communion with Paramātman.",
    padaccheda: [
      { deva: "न मरणम् यस्मात्", iast: "na maraṇam yasmāt", gloss: "that whereby mortality is transcended (`a-mṛta`)" },
      { deva: "यज्ञ-शेषे पीयूषे", iast: "yajña-śeṣe pīyūṣe", gloss: "sacred offering remnant and celestial ambrosia" },
      { deva: "सलिले मोक्षे च", iast: "salile mokṣe ca", gloss: "pure water and supreme liberation" }
    ],
    source: {
      grantha: "Amarakośa & Bṛhadāraṇyakopaniṣad",
      granthaDeva: "अमरकोशः · बृहदारण्यकोपनिषत्",
      author: "Amarasimha",
      locator: "AK 1.1.49, 3.3.63; BAU 1.3.28"
    },
    related: ["mrityu", "moksha", "candra", "kshira", "deva"]
  },
  {
    id: "loka",
    deva: "लोकः",
    iast: "lokaḥ",
    stem: "loka",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["world", "realm", "cosmos", "mankind"],
    phoneticAliases: ["loka", "jagat", "bhuvana", "vishva-loka", "world", "realm"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "लोक्यते दृश्यतेऽसौ अत्र वा कर्मफलमिति लोकः । जगती जगच्च लोको विष्टपं भुवनं जगत् ॥",
    lakshanaIast: "lokyate dṛśyate 'sau atra vā karmaphalam iti lokaḥ | jagatī jagac ca loko viṣṭapaṃ bhuvanaṃ jagat ||",
    meaningShort: "A world or cosmic realm — an ordered sphere of experience wherein conscious beings behold reality and reap the fruits of action.",
    meaningDeep: "Derived from √lokṛ ('darśane' — `lokyate`, to be perceived or to serve as a luminous field of experience; cognate with Latin *lūcus* 'clearing/light'), `loka` is paired in Amarakośa (Bhūmivarga 2.1.6) with `jagat` ('that which ever moves'), `viṣṭapa`, and `bhuvana`, and also denotes the community of living beings (`jana`). In Vedic cosmology and Śrī Madhvācārya's ontology (`satyaṃ jagat`), the fourteen `lokas` (`bhūḥ`, `bhuvaḥ`, `suvaḥ`, etc.) are entirely real, divinely governed habitations structured for moral evolution (`sādhanā`).",
    padaccheda: [
      { deva: "लोक्यते दृश्यते इति लोकः", iast: "lokyate dṛśyate iti lokaḥ", gloss: "perceived and experienced by conscious beings (√lok)" },
      { deva: "जगती लोकः विष्टपम्", iast: "jagatī lokaḥ viṣṭapam", gloss: "moving world, realm, cosmic plane" },
      { deva: "भुवनम् जगत्", iast: "bhuvanam jagat", gloss: "sphere of becoming, living universe" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.1.6 (Bhūmivarga); Nirukta 10.44"
    },
    related: ["prithivi", "akasha", "dish", "srishti", "satya"]
  },
  {
    id: "dish",
    deva: "दिक्",
    iast: "dik",
    stem: "diś",
    pos: "strīliṅga (f.)",
    englishGlosses: ["direction", "cardinal point", "quarter of space", "compass"],
    phoneticAliases: ["dish", "dik", "disha", "kakubh", "kashtha", "asha", "direction"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "दिश्यतेऽवगम्यते प्राच्यादिव्यवहारो अनया इति दिक् । दिशस्तु ककुभः काष्ठा आशाश्च हरितश्च ताः ॥",
    lakshanaIast: "diśyate 'vagamyate prācyādivyavahāro anayā iti dik | diśas tu kakubhaḥ kāṣṭhā āśāś ca haritaś ca tāḥ ||",
    meaningShort: "Direction or quarter of space — the real spatial orientation grounding distinctions of east, west, north, south, zenith, and nadir.",
    meaningDeep: "Derived from √diś ('atisarjanapradarśanayoḥ' — to point out, orient), `diś` (alongside feminine `diśā`) is listed in Amarakośa (Digvarga 1.3.1) with `kakubh`, `kāṣṭhā`, `āśā`, and `harit`, enumerating the four cardinal (`prācī`, `dakṣiṇā`, `pratīcī`, `udīcī`) and ten total cosmic quarters (`daśa-diśaḥ`). In Tarkasaṅgraha (16: `prācyādivyavahārahetur dik`) and Tattvavāda's Padārthasaṅgraha, spatial orientation is upheld as an objective ontological feature of `avyākṛtākāśa` presided over by Mitra and the Digdevatās.",
    padaccheda: [
      { deva: "प्राच्यादि-व्यवहारः अनया", iast: "prācyādi-vyavahāraḥ anayā", gloss: "that whereby east, west, and spatial bearings are known (√diś)" },
      { deva: "दिशः ककुभः काष्ठाः", iast: "diśaḥ kakubhaḥ kāṣṭhāḥ", gloss: "directions, regions of the horizon, cardinal bounds" },
      { deva: "आशाः हरितः", iast: "āśāḥ haritaḥ", gloss: "quarters of the firmament" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 1.3.1 (Digvarga); TS 16"
    },
    related: ["akasha", "loka", "surya", "uttara", "shrotra"]
  },
  {
    id: "kshetra",
    deva: "क्षेत्रम्",
    iast: "kṣetram",
    stem: "kṣetra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["field", "sacred precinct", "embodied locus", "geometrical plane"],
    phoneticAliases: ["kshetra", "ksetra", "kedara", "vapra", "punya-bhumi", "field"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "क्षियन्ति निवसन्त्यस्मिन् सस्यानि भूतानि वेति क्षेत्रम् । इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ॥",
    lakshanaIast: "kṣiyanti nivasanty asmin sasyāni bhūtāni veti kṣetram | idaṃ śarīraṃ kaunteya kṣetram ity abhidhīyate ||",
    meaningShort: "A field or sacred ground — tilled soil where seeds ripen into harvest, a holy pilgrimage sanctuary, and philosophically the living body.",
    meaningDeep: "Formed from √kṣi ('nivāsagatyoh' — to dwell, abide securely; Uṇādi 4.165), `kṣetra` unites four classical senses in Amarakośa (Bhūmivarga 2.1.8 & Nānārthavarga 3.3.177): (1) cultivated farmland (`kedāra`) where seeds bear fruit, (2) a geometric figure in Śulbasūtra mathematics, (3) a sacred temple precinct (`puṇya-kṣetra`), and (4) the physical body (`śarīra`), wherein karmic seeds fructify. In Bhagavadgītā 13.1–2, Madhvācārya's bhāṣya highlights Bhagavān Vāsudeva as the supreme `Kṣetrajña` ('Knower and Sovereign of every field').",
    padaccheda: [
      { deva: "निवसन्ति अस्मिन् इति क्षेत्रम्", iast: "nivasanti asmin iti kṣetram", gloss: "dwelling-ground where crops or experiences mature (√kṣi + -tra)" },
      { deva: "इदम् शरीरम्", iast: "idam śarīram", gloss: "this embodied psychophysical organism" },
      { deva: "क्षेत्रम् इति अभिधीयते", iast: "kṣetram iti abhidhīyate", gloss: "is philosophically designated the Field" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 13.1; AK 2.1.8, 3.3.177"
    },
    related: ["prithivi", "bija", "sharira", "tirtha", "desha"]
  },
  {
    id: "renu",
    deva: "रेणुः",
    iast: "reṇuḥ",
    stem: "reṇu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["dust", "pollen", "mote", "fine particle"],
    phoneticAliases: ["renu", "dhuli", "pamsu", "rajas-dust", "paraga", "dust", "pollen"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "रीयते गच्छति वायुना इति रेणुः । पांसुर्ना न द्वयो रजः धूलिः स्त्री रेणुरस्त्रियाम् ॥",
    lakshanaIast: "rīyate gacchati vāyunā iti reṇuḥ | pāṃsur nā na dvayo rajaḥ dhūliḥ strī reṇur astriyām ||",
    meaningShort: "Dust or flower-pollen — a minute, wind-borne particle of earth or blossom.",
    meaningDeep: "Derived from √rī ('gatireṣaṇayoḥ' — wafted lightly on the breeze) with Uṇādi `-nu` (Uṇādi 3.38), `reṇu` is grouped in Amarakośa (Kṣatriyavarga 2.8.100 & Vanauṣadhivarga 2.4.17) with `pāṃsu`, `rajas`, and `dhūli` for earth-dust, and with `parāga` / `puṣpareṇu` for golden floral pollen. In Vaiśeṣika-Nyāya atomism (`trasareṇu` / `jālasūryamarīcisthaṃ sūkṣmaṃ rajaḥ`), the tiny dust-mote dancing in a sunbeam through a lattice window defines the smallest perceptible magnitude (`mahat-parimāṇa`).",
    padaccheda: [
      { deva: "रीयते वायुना इति रेणुः", iast: "rīyate vāyunā iti reṇuḥ", gloss: "wafted aloft by the wind (√rī + -nu)" },
      { deva: "पांसुः रजः धूलिः", iast: "pāṃsuḥ rajaḥ dhūliḥ", gloss: "fine earth-mote, floating dust, powder" },
      { deva: "रेणुः", iast: "reṇuḥ", gloss: "dust-speck or floral pollen" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.8.100; Nirukta 6.33"
    },
    related: ["prithivi", "pushpa", "vayu-kosha", "surya", "pada-foot"]
  },
  {
    id: "hima",
    deva: "हिमम्",
    iast: "himam",
    stem: "hima",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["snow", "frost", "ice", "coolness"],
    phoneticAliases: ["hima", "tushara", "nihara", "prushva", "avashyaya", "snow", "frost"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "हिनस्ति तापं पद्मानि वा इति हिमम् । अवश्यायस्तु नीहारस्तुषारस्तुहिनं हिमम् ॥",
    lakshanaIast: "hinasti tāpaṃ padmāni vā iti himam | avaśyāyas tu nīhāras tuṣāras tuhinaṃ himam ||",
    meaningShort: "Snow, frost, or morning dew — crystalline frozen water that cools heat and crowns lofty mountain peaks.",
    meaningDeep: "Derived via Uṇādi 1.146 from √hi ('gatau / vṛddhau') or √han ('dispelling scorching heat or wilting tender lotuses'), `hima` (cognate with Latin *hiems* 'winter') is listed in Amarakośa (Vyomavarga 1.2.14) alongside `avaśyāya` (hoarfrost), `nīhāra` (winter mist), `tuṣāra` (cold spray/snow), `tuhina`, and `prāleya`. From `hima` + `ālaya` ('abode of eternal snows') comes `Himālaya` — revered across Sanskrit poetry and scripture (`devatātmā himālayaḥ`) as the sacred northern crown of Bhārata.",
    padaccheda: [
      { deva: "हिनस्ति तापम् इति हिमम्", iast: "hinasti tāpam iti himam", gloss: "quells heat with icy coolness" },
      { deva: "अवश्यायः नीहारः", iast: "avaśyāyaḥ nīhāraḥ", gloss: "hoarfrost and wintry mist" },
      { deva: "तुषारः तुहिनम् हिमम्", iast: "tuṣāraḥ tuhinam himam", gloss: "snow-crystal, rime, and snow" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.2.14 (Vyomavarga)"
    },
    related: ["hemanta", "parvata", "jala", "candra", "nadi"]
  },
  {
    id: "agni-jwala",
    deva: "ज्वाला",
    iast: "jvālā",
    stem: "jvālā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["flame", "blaze", "tongue of fire"],
    phoneticAliases: ["jwala", "jvala", "arcis", "shikha", "kila", "flame", "blaze"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "ज्वलति ऊर्ध्वं दीप्यते इति ज्वाला । कीला ज्वालाऽर्चिर्हेतिः शिखा च सा ॥",
    lakshanaIast: "jvalati ūrdhvaṃ dīpyate iti jvālā | kīlā jvālā 'rcir hetiḥ śikhā ca sā ||",
    meaningShort: "A flame — a leaping, upward-pointing tongue of blazing fire.",
    meaningDeep: "Derived directly from √jval ('dīptau' — to blaze, leap luminously upward), `jvālā` is paired in Amarakośa (Svargavarga 1.1.59) with `kīlā`, `arcis` ('worshipful ray'), `heti`, and `śikhā` ('cresting tip of fire'). Muṇḍaka Upaniṣad 1.2.4 celebrates the seven radiant tongues (`sapta-jihvāḥ`, beginning with `kālī`, `manojavā`, `sulohitā`, `viśvarūcī`) of sacrificial fire, while natural philosophy notes `ūrdhvajvalana` — flame's innate upward ascent — as an emblem of `sattva` and aspiring `jñāna`.",
    padaccheda: [
      { deva: "ज्वलति ऊर्ध्वम् इति ज्वाला", iast: "jvalati ūrdhvam iti jvālā", gloss: "blazes and leaps skyward (√jval)" },
      { deva: "कीला ज्वाला अर्चिः", iast: "kīlā jvālā arciḥ", gloss: "fiery dart, flame, radiant beam" },
      { deva: "हेतिः शिखा", iast: "hetiḥ śikhā", gloss: "blazing flash and tapering crest of fire" }
    ],
    source: {
      grantha: "Amarakośa & Muṇḍakopaniṣad",
      granthaDeva: "अमरकोशः · मुण्डकोपनिषत्",
      author: "Amarasimha",
      locator: "AK 1.1.59 (Svargavarga); Muṇḍaka Up. 1.2.4"
    },
    related: ["agni", "tejas", "dhuma", "dipa", "jyotis"]
  },
  {
    id: "dhuma",
    deva: "धूमः",
    iast: "dhūmaḥ",
    stem: "dhūma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["smoke", "vapor", "fume", "incense-cloud"],
    phoneticAliases: ["dhuma", "dhooma", "agniketu", "smoke", "vapor"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "धुनोति कम्पयति वायुना इन्धनाद्वा इति धूमः । यत्र यत्र धूमस्तत्र तत्राग्निः ॥",
    lakshanaIast: "dhunoti kampayati vāyunā indhanād vā iti dhūmaḥ | yatra yatra dhūmas tatra tatrāgniḥ ||",
    meaningShort: "Smoke — the billowing vapor rising from kindled fuel, celebrated in Sanskrit logic as the unfailing inferential sign of fire.",
    meaningDeep: "Derived via Uṇādi 1.140 (`sphāyitañci... dhūñbhyaḥ mak`) from √dhūñ ('kampane' — swirling and curling upward, cognate with Latin *fūmus*), `dhūma` gives Agni his classical Amarakośa epithets `dhūmaketu` ('smoke-bannered') and `dhūmayoni` (for rainclouds born of sacrificial vapor, *Meghadūta* 1.5). Across Pramāṇalakṣaṇam, Pramāṇapaddhati, and Tarkasaṅgraha, `dhūma` stands as the archetypal `hetu` (logical probans) bound by invariable concomitance (`vyāpti`) to `agni`: wherever there is smoke, there is fire.",
    padaccheda: [
      { deva: "धुनोति इति धूमः", iast: "dhunoti iti dhūmaḥ", gloss: "curls and billows upward from burning fuel (√dhū + -mak)" },
      { deva: "यत्र यत्र धूमः", iast: "yatra yatra dhūmaḥ", gloss: "wherever smoke is perceived (`hetu`)" },
      { deva: "तत्र तत्र अग्निः", iast: "tatra tatra agniḥ", gloss: "there invariably abides fire (`sādhya`)" }
    ],
    source: {
      grantha: "Tarkasaṅgraha, Pramāṇapaddhati & Amarakośa",
      granthaDeva: "तर्कसङ्ग्रहः · प्रमाणपद्धतिः · अमरकोशः",
      author: "Annambhaṭṭa, Śrī Jayatīrtha & Amarasimha",
      locator: "TS 45; AK 1.1.55 (Svargavarga)"
    },
    related: ["agni", "agni-jwala", "parvata", "hetu", "vyapti"]
  },
  {
    id: "nabhas",
    deva: "नभः",
    iast: "nabhaḥ",
    stem: "nabhas",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["sky", "vault of heaven", "cloud-realm", "monsoon sky"],
    phoneticAliases: ["nabhas", "nabhah", "vyoman", "dyaus", "pushkara-sky", "sky"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "नह्यते मेघैर्नक्षत्रैश्चेति नभः । नभोऽन्तरिक्षं गगनमनन्तं सुरवर्त्म खम् ॥",
    lakshanaIast: "nahyate meghair nakṣatraiś ceti nabhaḥ | nabho 'ntarikṣaṃ gaganam anantaṃ suravartma kham ||",
    meaningShort: "The sky or atmospheric vault — the overarching canopy of heaven spanned by clouds, winds, and stars.",
    meaningDeep: "Yāska (Nirukta 2.14: `ādityo'pi nabha ucyate, nabhaso bhāsanāt... api vā nahanād eva syāt`) connects `nabhas` (cognate with Greek *nephos* and Latin *nebula*) to moisture-laden canopying (`√nah`) and radiance (`√bhās`). Amarakośa (Vyomavarga 1.2.1 & Nānārthavarga 3.3.232) records `nabhas` primarily for the visible sky (`gagana`, `suravartman` 'pathway of the gods', `kha`), and secondarily for raincloud and the monsoon month Śrāvaṇa. In Chāndogya Upaniṣad (`daharaṃ puṇḍarīkaṃ veśma daharo 'sminn antarākāśaḥ`), outer `nabhas` mirrors the boundless `cidākāśa` within the heart.",
    padaccheda: [
      { deva: "नह्यते मेघैः इति नभः", iast: "nahyate meghaiḥ iti nabhaḥ", gloss: "canopied with clouds and stars" },
      { deva: "नभः अन्तरिक्षम् गगनम्", iast: "nabhaḥ antarikṣam gaganam", gloss: "sky-vault, mid-air, vast firmament" },
      { deva: "अनन्तम् सुर-वर्त्म खम्", iast: "anantam sura-vartma kham", gloss: "boundless expanse, celestial pathway, open space" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.2.1 (Vyomavarga); Nirukta 2.14"
    },
    related: ["akasha", "antariksha", "megha", "nakshatra", "vayu-kosha"]
  },
  {
    id: "antariksha",
    deva: "अन्तरिक्षम्",
    iast: "antarikṣam",
    stem: "antarikṣa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["mid-space", "atmosphere", "intermediate firmament"],
    phoneticAliases: ["antariksha", "antariksa", "bhuvarloka", "vihayas", "atmosphere", "mid-space"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "अन्तरा द्यावापृथिव्योरिक्ष्यते इति अन्तरिक्षम् । द्यावापृथिव्योर्मध्यस्थानमन्तरिक्षम् ॥",
    lakshanaIast: "antarā dyāvāpṛthivyor īkṣyate iti antarikṣam | dyāvāpṛthivyor madhyasthānam antarikṣam ||",
    meaningShort: "The atmosphere or mid-space — the luminous aerial region suspended between terrestrial earth (`bhūḥ`) and celestial heaven (`dyauḥ`).",
    meaningDeep: "Masterfully analyzed by Yāska in Nirukta 2.10 (`antarikṣaṃ kasmāt? antarā kṣāntam bhavati dyāvāpṛthivyoḥ, antaḥ-īkṣaṇīyaṃ vā`), `antarikṣa` signifies the transparent domain seen (`√īkṣ`) between (`antarā`) earth and sky. In Vedic tripartite cosmology (`bhūr bhuvaḥ suvaḥ`), `antarikṣa` corresponds to `bhuvar-loka` — the realm of Vāyu, Maruts, Parjanya, birds (`vihāyas`), and vital currents, celebrated in the Śānti-mantra `antarikṣaṃ śāntiḥ` as a bridge of cosmic harmony.",
    padaccheda: [
      { deva: "अन्तरा ईक्ष्यते इति अन्तरिक्षम्", iast: "antarā īkṣyate iti antarikṣam", gloss: "beheld clear between heaven and earth (`antarā` + `√īkṣ`)" },
      { deva: "द्यावा-पृथिव्योः", iast: "dyāvā-pṛthivyoḥ", gloss: "of celestial heaven and terrestrial earth" },
      { deva: "मध्य-स्थानम्", iast: "madhya-sthānam", gloss: "the intermediate atmospheric realm (`bhuvaḥ`)" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.10; AK 1.2.1 (Vyomavarga)"
    },
    related: ["akasha", "nabhas", "prithivi", "vayu-kosha", "vyahriti"]
  },
  {
    id: "tirtha",
    deva: "तीर्थम्",
    iast: "tīrtham",
    stem: "tīrtha",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["sacred ford", "pilgrimage crossing", "sanctified water", "worthy preceptor"],
    phoneticAliases: ["tirtha", "teertha", "punyatirtha", "avatara-ghatta", "sacred ford", "pilgrimage"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "तरन्ति पापं संसारं वा अनेनेति तीर्थम् । निपानागमयोस्तीर्थं दृष्टिमन्त्रोपपाद्ययोः पात्रामात्यगुरौ च ॥",
    lakshanaIast: "taranti pāpaṃ saṃsāraṃ vā aneneti tīrtham | nipānāgamayos tīrthaṃ dṛṣṭimantropapādyayoḥ pātrāmātyagurau ca ||",
    meaningShort: "A sacred ford or crossing — a stair or shallow confluence on a river, sanctified water, scripture, or saintly teacher whereby one crosses over sorrow.",
    meaningDeep: "Derived from √tṝ ('plavanataraṇayoḥ' — to cross over safely) with the Uṇādi suffix `-thak` (Uṇādi 2.7), `tīrtha` originally meant a stepped river-crossing (`avatāra` / `nipāna`), before blossoming in Amarakośa (Nānārthavarga 3.3.86) to encompass sacred pilgrimage waters, `āgama` (scriptural path of inquiry), sanctified `caraṇāmṛta`, and a realized `guru`. In Tattvavāda tradition, sannyāsin pontiffs bear `-tīrtha` titles (`Ānanda-tīrtha`, `Jaya-tīrtha`) because their śāstra-teaching ferries seekers across `saṃsāra` (`tīrthīkurvanti jagatīṃ`, Bhāgavata 1.13.10).",
    padaccheda: [
      { deva: "तरन्ति अनेन इति तीर्थम्", iast: "taranti anena iti tīrtham", gloss: "that whereby one crosses safely over water or bondage (√tṝ + -tha)" },
      { deva: "निपान-आगमयोः", iast: "nipāna-āgamayoḥ", gloss: "sacred bathing-ford and scriptural means of knowledge" },
      { deva: "पात्र-गुरौ च", iast: "pātra-gurau ca", gloss: "also a worthy recipient and liberating preceptor" }
    ],
    source: {
      grantha: "Amarakośa & Bhāgavata Purāṇa",
      granthaDeva: "अमरकोशः · भागवतपुराणम्",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.10.15, 3.3.86; BhP 1.13.10"
    },
    related: ["nadi", "jala", "setu", "kshetra", "guru"]
  },
  {
    id: "setu",
    deva: "सेतुः",
    iast: "setuḥ",
    stem: "setu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["bridge", "causeway", "embankment", "stabilizing boundary"],
    phoneticAliases: ["setu", "pali", "ali-bridge", "samkrama", "bridge", "causeway"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "सिनोति बध्नाति जलं मर्यादां वा इति सेतुः । अथ सेतुरालिः स्त्री पुमान् ॥",
    lakshanaIast: "sinoti badhnāti jalaṃ maryādāṃ vā iti setuḥ | atha setur āliḥ strī pumān ||",
    meaningShort: "A bridge, causeway, or embankment — a binding structure built across waters to unite distant shores and uphold order.",
    meaningDeep: "Derived via Uṇādi 1.70 (`si-tan-gamibhyaḥ tuḥ`) from √ṣiñ ('bandhane' — `sinoti`, to bind firmly together, hold back floodwaters), `setu` denotes both an earthen dike (`āli`, AK 2.1.14) and a stone causeway spanning sea or river (famously Śrī Rāma's `Nala-setu`). In Chāndogya Upaniṣad 8.4.1 (`atha ya ātmā sa setur vidhṛtir eṣāṃ lokānām asaṃbhedāya`) and Muṇḍaka 2.2.5 (`amṛtasya paraṃ setum`), Madhvācārya's bhāṣya explains that Paramātman is the supreme `Setu` — both the stabilizing boundary keeping cosmic realms from chaos and the sole Bridge to immortality.",
    padaccheda: [
      { deva: "सिनोति बध्नाति इति सेतुः", iast: "sinoti badhnāti iti setuḥ", gloss: "binds shores together and restrains floods (√si + -tu)" },
      { deva: "जलं मर्यादाम् वा", iast: "jalaṃ maryādām vā", gloss: "holding waters and moral-cosmic boundaries intact" },
      { deva: "आलिः सेतुः", iast: "āliḥ setuḥ", gloss: "embankment, causeway, bridge" }
    ],
    source: {
      grantha: "Chāndogyopaniṣad & Amarakośa",
      granthaDeva: "छान्दोग्योपनिषत् · अमरकोशः",
      author: "Amarasimha",
      locator: "ChU 8.4.1; AK 2.1.14 (Bhūmivarga)"
    },
    related: ["samudra", "nadi", "tirtha", "marga", "rama"]
  },
  {
    id: "marga",
    deva: "मार्गः",
    iast: "mārgaḥ",
    stem: "mārga",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["path", "road", "way", "method of inquiry"],
    phoneticAliases: ["marga", "pantha", "pathin", "adhvan", "vartman", "ayana", "sriti", "path", "road"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "मृग्यते अन्विष्यते गन्तव्यमनेनेति मार्गः । अयनं वर्त्म मार्गाध्वपन्थानः पदवी सृतिः ॥",
    lakshanaIast: "mṛgyate anviṣyate gantavyam aneneti mārgaḥ | ayanaṃ vartma mārgādhvapanthānaḥ padavī sṛtiḥ ||",
    meaningShort: "A path, road, or way — a traced thoroughfare leading a traveler toward a sought destination, whether earthly or spiritual.",
    meaningDeep: "Derived from √mṛg ('anveṣaṇe' — to seek out, track a trail originally blazed through forests), `mārga` is joined in Amarakośa (Bhūmivarga 2.1.15) with `ayana`, `vartman`, `adhvan`, `pathin` (`panthāḥ`), `padavī`, `sṛti`, and `saraṇi`. Beyond physical highways (`rājamārga`), classical Sanskrit uses `mārga` for celestial orbits (`uttarāyaṇa`), literary style (Daṇḍin's `vaidarbhī-mārga`), and spiritual paths (`bhakti-mārga`, `arcirādi-mārga`), echoed in Mahābhārata's maxim `mahājano yena gataḥ sa panthāḥ`.",
    padaccheda: [
      { deva: "मृग्यते गन्तव्यम् अनेन", iast: "mṛgyate gantavyam anena", gloss: "that whereby the destination is sought and reached (√mṛg)" },
      { deva: "अयनम् वर्त्म मार्गः", iast: "ayanam vartma mārgaḥ", gloss: "course, track, highway" },
      { deva: "अध्व-पन्थानः पदवी सृतिः", iast: "adhva-panthānaḥ padavī sṛtiḥ", gloss: "journey-road, path, footway, passage" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.1.15 (Bhūmivarga)"
    },
    related: ["setu", "tirtha", "desha", "mriga", "dharma"]
  },
  {
    id: "dvipa",
    deva: "द्वीपः",
    iast: "dvīpaḥ",
    stem: "dvīpa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["island", "continent", "water-girt land", "sanctuary"],
    phoneticAliases: ["dvipa", "dwipa", "antaripa", "jambudvipa", "island", "continent"],
    pillar: "kosha",
    domain: "Prakṛti & Loka (Nature & Cosmos)",
    lakshanaDeva: "द्विर्गता आपोऽत्र इति द्वीपः । द्वीपोऽस्त्रियामन्तरीपं यदन्तर्वारिणस्तटम् ॥",
    lakshanaIast: "dvir gatā āpo 'tra iti dvīpaḥ | dvīpo 'striyām antarīpaṃ yad antarvāriṇas taṭam ||",
    meaningShort: "An island or water-girt continent — firm land embraced on both sides by surrounding waters.",
    meaningDeep: "Masterfully derived by Pāṇini himself in Aṣṭādhyāyī 6.3.97 (`dvyantarupasargebhyo 'pa īt`: `dvi` + `ap` → `dvīpa`, parallel to `antar` + `ap` → `antarīpa`), `dvīpa` literally signifies land around which waters (`āpaḥ`) flow on two (`dvi`) or all sides. Amarakośa (Vārivarga 1.10.9) pairs `dvīpa` and `antarīpa` in masculine and neuter genders. On a macrocosmic scale, Purāṇic geography maps the earthly plane into seven concentric oceanic continents (`sapta-dvīpā vasumatī`), centered upon `Jambūdvīpa`.",
    padaccheda: [
      { deva: "द्विः गताः आपः अत्र", iast: "dviḥ gatāḥ āpaḥ atra", gloss: "where waters flow on both sides (`dvi` + `ap` → `dvīpa`, Pāṇini 6.3.97)" },
      { deva: "द्वीपः अन्तरीपम्", iast: "dvīpaḥ antarīpam", gloss: "island or water-encircled continent" },
      { deva: "अन्तर्वारिणः तटम्", iast: "antarvāriṇaḥ taṭam", gloss: "firm land rising amidst surrounding waters" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 6.3.97; AK 1.10.9 (Vārivarga)"
    },
    related: ["samudra", "nadi", "jala", "prithivi", "desha"]
  },

  // ============================================================================
  // DOMAIN 2: Śarīra & Jīva-Jāti (Body & Beings) — 48 Entries
  // ============================================================================
  {
    id: "sharira",
    deva: "शरीरम्",
    iast: "śarīram",
    stem: "śarīra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["body", "physical frame", "embodied organism"],
    phoneticAliases: ["sharira", "sarira", "deha", "kaya", "vapuh", "vigraha", "tanu", "body"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "शीर्यते प्रतिक्षणमिति शरीरम् । कलेवरं गात्रं वपुः संहननं शरीरं वर्ष्म विग्रहः कायो देहः ॥",
    lakshanaIast: "śīryate pratikṣaṇam iti śarīram | kalevaraṃ gātraṃ vapuḥ saṃhananaṃ śarīraṃ varṣma vigrahaḥ kāyo dehaḥ ||",
    meaningShort: "The body — the organized psychophysical frame inhabited by a conscious soul as the locus of experience and action.",
    meaningDeep: "Yāska (Nirukta 3.5) and Uṇādi-sūtra (4.30) derive `śarīra` from √śṝ ('hiṃsāyām' — `śīryate`, that which undergoes continual metabolic wear and dissolution), whereas its synonym `deha` (from √dih, 'upacaye') highlights nourishment and growth. Amarakośa (Manuṣyavarga 2.6.70–71) adds `kalevara`, `gātra`, `vapus`, `saṃhanana`, `varṣman`, `vigraha`, `kāya`, and `tanu`. Nyāya defines `śarīra` functionally as `ceṣṭendriyārthāśrayaḥ` ('locus of volitional effort, sense-faculties, and experienced pleasure/pain', TS 11), honored in Kālidāsa's maxim `śarīram ādyaṃ khalu dharmasādhanam`.",
    padaccheda: [
      { deva: "शीर्यते प्रतिक्षणम् इति शरीरम्", iast: "śīryate pratikṣaṇam iti śarīram", gloss: "undergoes continual change and wear (√śṝ)" },
      { deva: "कलेवरम् गात्रम् वपुः", iast: "kalevaram gātram vapuḥ", gloss: "frame, limb-system, comely form" },
      { deva: "विग्रहः कायः देहः", iast: "vigrahaḥ kāyaḥ dehaḥ", gloss: "distinct figure, organism, nourished body" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Tarkasaṅgraha",
      granthaDeva: "निरुक्तम् · अमरकोशः · तर्कसङ्ग्रहः",
      author: "Yāska, Amarasimha & Annambhaṭṭa",
      locator: "Nirukta 3.5; AK 2.6.70–71; TS 11"
    },
    related: ["kshetra", "shiras", "hridaya", "jeeva", "indriya"]
  },
  {
    id: "shiras",
    deva: "शिरः",
    iast: "śiraḥ",
    stem: "śiras",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["head", "crown", "summit", "foremost part"],
    phoneticAliases: ["shiras", "sirah", "murdha", "mastaka", "uttamanga", "shirsha", "head"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "श्रयन्तेऽस्मिन्नीन्द्रियाणीति शिरः । उत्तमाङ्गं शिरः शीर्षं मूर्धा ना मस्तकोऽस्त्रियाम् ॥",
    lakshanaIast: "śrayante 'sminn indriyāṇīti śiraḥ | uttamāṅgaṃ śiraḥ śīrṣaṃ mūrdhā nā mastako 'striyām ||",
    meaningShort: "The head — the crowning uppermost member of the body wherein the principal sense-organs abide.",
    meaningDeep: "Yāska (Nirukta 2.13: `śiraḥ śrayaṇāt — śritāni asminn indriyāṇi`) derives `śiras` from √śri ('sevāyām' — because sight, hearing, smell, taste, and speech all rest within it). Amarakośa (Manuṣyavarga 2.6.95) pairs `śiras` with `uttamāṅga` ('foremost limb'), `śīrṣa`, `mūrdhan`, and `mastaka`. Beyond anatomy, `śiras` denotes mountain summits, the top stroke of Devanāgarī script (`śirorekhā`), and the Upaniṣads themselves as the crowning culmination of the Vedas (`veda-śiras`).",
    padaccheda: [
      { deva: "श्रयन्ते अस्मिन् इन्द्रियाणि", iast: "śrayante asmin indriyāṇi", gloss: "wherein the chief cognitive senses rest (√śri)" },
      { deva: "उत्तमाङ्गम् शिरः शीर्षम्", iast: "uttamāṅgam śiraḥ śīrṣam", gloss: "uppermost limb, head, cranial crown" },
      { deva: "मूर्धा मस्तकः", iast: "mūrdhā mastakaḥ", gloss: "summit of the brow, head" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.13; AK 2.6.95 (Manuṣyavarga)"
    },
    related: ["sharira", "mukha", "netra", "shrotra", "pada-foot"]
  },
  {
    id: "mukha",
    deva: "मुखम्",
    iast: "mukham",
    stem: "mukha",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["face", "mouth", "countenance", "entrance", "chief means"],
    phoneticAliases: ["mukha", "vadana", "anana", "vaktra", "asya", "face", "mouth"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "मुच्यते निःसरति वागस्मादिति मुखम् । वक्त्रास्ये वदनं तुण्डमाननं लपनं मुखम् ॥",
    lakshanaIast: "mucyate niḥsarati vāg asmād iti mukham | vaktrāsye vadanaṃ tuṇḍam ānanaṃ lapanaṃ mukham ||",
    meaningShort: "The face or mouth — the expressive countenance of a person and the portal of speech, breath, and nourishment.",
    meaningDeep: "Commentators derive `mukha` via Uṇādi 5.20 from √khan ('digging/opening') or √muc (whence articulate speech issues forth). Amarakośa (Manuṣyavarga 2.6.89) lists `vaktra` (organ of utterance), `āsya`, `vadana` (from √vad, 'speaking face'), `ānana` (from √an, 'breathing countenance'), `lapana`, and `mukha`, while Nānārthavarga (3.3.18) records its extended senses: gateway (`niḥsaraṇa`), opening scene of a Sanskrit `nāṭaka`, beginning (`ārambha`), and foremost instrument (`upāya`).",
    padaccheda: [
      { deva: "निःसरति वाक् अस्मात्", iast: "niḥsarati vāk asmāt", gloss: "whence articulate speech emerges" },
      { deva: "वक्त्र-आस्ये वदनम्", iast: "vaktra-āsye vadanam", gloss: "organ of speech, mouth, expressive countenance" },
      { deva: "आननम् लपनम् मुखम्", iast: "ānanam lapanam mukham", gloss: "breath-animated visage, speaking mouth, face" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.6.89, 3.3.18"
    },
    related: ["shiras", "netra", "jihva", "danta", "smita"]
  },
  {
    id: "netra",
    deva: "नेत्रम्",
    iast: "netram",
    stem: "netra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["eye", "organ of vision", "guiding gaze"],
    phoneticAliases: ["netra", "cakshus", "chakshu", "nayana", "locana", "akshi", "drik", "eye"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "नयति मार्गं प्रदर्शयति इति नेत्रम् । रूपग्राहकं चक्षुः लोचनं नयनं नेत्रमीक्षणं चक्षुरक्षिणी ॥",
    lakshanaIast: "nayati mārgaṃ pradarśayati iti netram | rūpagrāhakaṃ cakṣuḥ locanaṃ nayanaṃ netram īkṣaṇaṃ cakṣur akṣiṇī ||",
    meaningShort: "The eye — the luminous sense-organ of sight that apprehends color and form and guides living beings along their path.",
    meaningDeep: "Derived from √nīñ ('prāpaṇe' — `nayati`, that which leads and guides one safely, parallel to `nayana`; Pāṇini 3.2.182), `netra` is grouped in Amarakośa (Manuṣyavarga 2.6.92) with `locana` ('illuminator'), `nayana`, `īkṣaṇa`, `cakṣus` (from √cakṣ, 'to behold clearly'), `akṣi`, and `dṛś`. In Nyāya and Padārthasaṅgraha (`rūpagrāhakaṃ cakṣuḥ`, TS 20), the visual faculty is constituted of subtle `tejas` centered at the tip of the pupil (`kṛṣṇatārāgravarti`) and presided over by Sūrya (`cakṣoḥ sūryo 'jāyata`).",
    padaccheda: [
      { deva: "नयति प्रदर्शयति इति नेत्रम्", iast: "nayati pradarśayati iti netram", gloss: "guides one forward by revealing the path (√nī + -tra)" },
      { deva: "रूप-ग्राहकम् चक्षुः", iast: "rūpa-grāhakam cakṣuḥ", gloss: "the visual faculty that apprehends color and form" },
      { deva: "लोचनम् नयनम् अक्षिणी", iast: "locanam nayanam akṣiṇī", gloss: "beholding orb, guiding eye, pair of eyes" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 2.6.92 (Manuṣyavarga); TS 20"
    },
    related: ["rupa", "jyotis", "surya", "ashru", "darshana"]
  },
  {
    id: "shrotra",
    deva: "श्रोत्रम्",
    iast: "śrotram",
    stem: "śrotra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["ear", "faculty of hearing", "auditory sense"],
    phoneticAliases: ["shrotra", "srotra", "karna", "shravana-organ", "shruti-ear", "ear"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "श्रूयते अनेन इति श्रोत्रम् । कर्णशब्दग्रहौ श्रोत्रं श्रुतिः स्त्री श्रवणं च तत् ॥",
    lakshanaIast: "śrūyate anena iti śrotram | karṇaśabdagrahau śrotraṃ śrutiḥ strī śravaṇaṃ ca tat ||",
    meaningShort: "The ear or auditory sense — the subtle organ within the ear-cavity whereby articulate words and sounds are heard.",
    meaningDeep: "Formed instrumentally from √śru ('śravaṇe' — `śrūyate 'nena`, that whereby one hears; Pāṇini 3.2.182), `śrotra` is paired in Amarakośa (Manuṣyavarga 2.6.94) with `karṇa`, `śabdagraha` ('sound-grasper'), `śruti`, and `śravaṇa`. Nyāya and Vedānta (`śabdagrāhakaṃ karṇaśaṣkulyavacchinnaṃ nabhaḥ śrotram`, TS 22) identify the auditory sense as pure ether (`ākāśa`) enclosed within the ear-tympanum, presided over by the Dig-devatās and consecrated to `śravaṇa` of sacred `śāstra`.",
    padaccheda: [
      { deva: "श्रूयते अनेन इति श्रोत्रम्", iast: "śrūyate anena iti śrotram", gloss: "the instrument through which sound is heard (√śru + -tra)" },
      { deva: "कर्ण-शब्दग्रहौ", iast: "karṇa-śabdagrahau", gloss: "the outer ear and sound-apprehending faculty" },
      { deva: "श्रुतिः श्रवणम्", iast: "śrutiḥ śravaṇam", gloss: "organ of listening and receptive hearing" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 2.6.94 (Manuṣyavarga); TS 22"
    },
    related: ["shabda", "akasha", "shravana", "dish", "indriya"]
  },
  {
    id: "nasika",
    deva: "नासिका",
    iast: "nāsikā",
    stem: "nāsikā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["nose", "nostril", "olfactory organ"],
    phoneticAliases: ["nasika", "nasa", "ghrana", "ghona", "gandhavaha-organ", "nose"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "नसति श्वासं गन्धं च वहति इति नासिका । घ्राणं गन्धवहा घोणा नासा च नासिकापि सा ॥",
    lakshanaIast: "nasati śvāsaṃ gandhaṃ ca vahati iti nāsikā | ghrāṇaṃ gandhavahā ghoṇā nāsā ca nāsikāpi sā ||",
    meaningShort: "The nose — the twin-channeled organ of respiration and olfactory perception (`ghrāṇa`) that apprehends fragrance.",
    meaningDeep: "Yāska (Nirukta 6.17) relates `nāsikā` / `nāsā` (cognate with Latin *nāsus* and English *nose*) to √nas ('to join in twin nostrils or channel breath'). Amarakośa (Manuṣyavarga 2.6.89) lists `ghrāṇa` (from √ghrā, 'olfactory sense'), `gandhavahā` ('scent-carrier'), `ghoṇā`, `nāsā`, and `nāsikā`. In Nyāya-Padārtha physiology (`gandhagrāhakaṃ ghrāṇam, tac ca nāsāgravarti pārthivam`, TS 18), the olfactory faculty is composed of subtle `pṛthivī` (earth) so as to detect earth's distinctive quality (`gandha`), presided over by the twin Aśvinī-kumāras.",
    padaccheda: [
      { deva: "श्वासम् गन्धम् च वहति", iast: "śvāsam gandham ca vahati", gloss: "channels vital breath and subtle scent" },
      { deva: "घ्राणम् गन्धवहा", iast: "ghrāṇam gandhavahā", gloss: "olfactory sense and scent-bearing organ" },
      { deva: "नासा नासिका", iast: "nāsā nāsikā", gloss: "nostril-pair, nose" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 2.6.89 (Manuṣyavarga); TS 18"
    },
    related: ["gandha", "prana", "prithivi", "mukha", "indriya"]
  },
  {
    id: "jihva",
    deva: "जिह्वा",
    iast: "jihvā",
    stem: "jihvā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["tongue", "organ of taste", "faculty of speech"],
    phoneticAliases: ["jihva", "rasana", "rasajna", "tongue"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "जुहोति अन्नमादत्ते वाचं च उच्चारयति इति जिह्वा । रसज्ञा रसना जिह्वा रसग्राहकं रसनम् ॥",
    lakshanaIast: "juhoti annam ādatte vācaṃ ca uccārayati iti jihvā | rasajñā rasanā jihvā rasagrāhakaṃ rasanam ||",
    meaningShort: "The tongue — the supple organ uniting two vital functions: tasting the six flavors (`rasana`) and articulating speech (`vāk`).",
    meaningDeep: "Yāska (Nirukta 5.26: `jihvā johuvā`) links `jihvā` to √hu / √hve — calling forth words and offering food into the inward digestive fire. Amarakośa (Manuṣyavarga 2.6.90) gives `rasajñā` ('knower of flavor'), `rasanā`, and `jihvā`. In Nyāya and Sāṅkhya-Vedānta taxonomy, the physical tongue houses both a `jñānendriya` (`rasana`, composed of subtle water `ap` at the tongue-tip to taste `rasa`, presided over by Varuṇa; TS 19) and a `karmendriya` (`vāk`, presided over by Agni).",
    padaccheda: [
      { deva: "अन्नम् आदत्ते वाचम् उच्चारयति", iast: "annam ādatte vācam uccārayati", gloss: "receives nourishment and articulates speech" },
      { deva: "रसज्ञा रसना जिह्वा", iast: "rasajñā rasanā jihvā", gloss: "knower of taste, savoring organ, tongue" },
      { deva: "रस-ग्राहकम् रसनम्", iast: "rasa-grāhakam rasanam", gloss: "the gustatory faculty apprehending flavor" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · निरुक्तम् · तर्कसङ्ग्रहः",
      author: "Amarasimha, Yāska & Annambhaṭṭa",
      locator: "AK 2.6.90; Nirukta 5.26; TS 19"
    },
    related: ["rasa", "vak", "mukha", "danta", "jala"]
  },
  {
    id: "danta",
    deva: "दन्तः",
    iast: "dantaḥ",
    stem: "danta",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["tooth", "tusk", "ivory", "dental point of articulation"],
    phoneticAliases: ["danta", "radana", "dashana", "rada", "dvija-tooth", "tooth", "tusk"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "दम्यते खाद्यमनेन इति दन्तः । रदना दशना दन्ता रदाः ॥",
    lakshanaIast: "damyate khādyam anena iti dantaḥ | radanā daśanā dantā radāḥ ||",
    meaningShort: "A tooth or tusk — the hard enamel organ set in the jaw for masticating food and articulating dental consonants.",
    meaningDeep: "Yāska (Nirukta 3.10: `danto yad adatāṃ... damanād vā`) derives `danta` (cognate with Latin *dēns* / *dentis* and English *tooth*) from √ad ('bhakṣaṇe' — eating) or √dam ('subduing hard grain'). Amarakośa (Manuṣyavarga 2.6.90) lists `radana`, `daśana`, `danta`, `rada`, and `dvija` ('twice-born', because milk-teeth are replaced by permanent teeth). In Pāṇinian phonetics (`ṛtulasanāṃ dantāḥ`), the teeth form the fourth primary `uccāraṇa-sthāna` producing `ḷ`, `ta-varga`, `la`, and `sa`.",
    padaccheda: [
      { deva: "दम्यते खाद्यम् अनेन", iast: "damyate khādyam anena", gloss: "that whereby food is crushed and chewed (√dam / √ad)" },
      { deva: "रदनाः दशनाः", iast: "radanāḥ daśanāḥ", gloss: "gnawers, biters" },
      { deva: "दन्ताः रदाः", iast: "dantāḥ radāḥ", gloss: "teeth, tusks" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 3.10; AK 2.6.90 (Manuṣyavarga)"
    },
    related: ["mukha", "jihva", "asthi", "gaja", "varna"]
  },
  {
    id: "kantha",
    deva: "कण्ठः",
    iast: "kaṇṭhaḥ",
    stem: "kaṇṭha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["throat", "neck", "voice", "velar-glottal resonance"],
    phoneticAliases: ["kantha", "gala", "griva", "kandhara", "throat", "neck", "voice"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "कणति शब्दं करोति इति कण्ठः । कण्ठो गलोऽथ धमनिः कण्ठः शब्दगतौ गले सामीप्ये च ॥",
    lakshanaIast: "kaṇati śabdaṃ karoti iti kaṇṭhaḥ | kaṇṭho galo 'tha dhamaniḥ kaṇṭhaḥ śabdagatau gale sāmīpye ca ||",
    meaningShort: "The throat or resonant voice — the vocal passage uniting head and chest whence melodious tone and primary vowels arise.",
    meaningDeep: "Derived via Uṇādi 1.105 from √kaṇ ('śabde' — to sound, resonate), `kaṇṭha` denotes the front throat (`gala`, as distinct from the nape `grīvā` / `kandharā`) as well as vocal timbre (`kokila-kaṇṭha`) and immediate mastery (`kaṇṭhastha`, 'held effortlessly on the tip of the voice' through memorization; AK 2.6.88, 3.3.43). In Śikṣā and Pāṇinian phonology (`akuhavisarjanīyānāṃ kaṇṭhaḥ`), `kaṇṭha` is the foundational first point of articulation generating `a`, `ka-varga`, `ha`, and `visarga`.",
    padaccheda: [
      { deva: "कणति शब्दम् करोति", iast: "kaṇati śabdam karoti", gloss: "resonates with vocal sound (√kaṇ + -ṭha)" },
      { deva: "कण्ठः गलः", iast: "kaṇṭhaḥ galaḥ", gloss: "throat, vocal passage" },
      { deva: "शब्द-गतौ सामीप्ये च", iast: "śabda-gatau sāmīpye ca", gloss: "also vocal tone and immediate proximity (`kaṇṭhastha`)" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.6.88, 3.3.43"
    },
    related: ["svara", "vak", "mukha", "kokila", "gita"]
  },
  {
    id: "hasta",
    deva: "हस्तः",
    iast: "hastaḥ",
    stem: "hasta",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["hand", "palm", "forearm cubit", "elephant trunk"],
    phoneticAliases: ["hasta", "pani", "kara", "shaya", "panca-shakha", "hand"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "हसति कर्मकौशल्येन प्रकाशते इति हस्तः । पञ्चशाखः शयः पाणिर्हस्तः करः ॥",
    lakshanaIast: "hasati karmakauśalyena prakāśate iti hastaḥ | pañcaśākhaḥ śayaḥ pāṇir hastaḥ karaḥ ||",
    meaningShort: "The hand — the five-fingered organ of skilled action, giving, craftsmanship, and expressive gesture (`mudrā`).",
    meaningDeep: "Derived via Uṇādi 3.86 (`haser taḥ`) and Nirukta 1.7 (`hasto hanter āśuḥ` — swift in grasping and executing work), `hasta` is paired in Amarakośa (Manuṣyavarga 2.6.81) with `pañcaśākha` ('five-branched'), `śaya`, `pāṇi` (from √paṇ, transacting and holding), and `kara` ('the maker', from √kṛ). As the foremost `karmendriya` presided over by Indra, the hand embodies righteous generosity (`hastasya bhūṣaṇaṃ dānam` — 'the true ornament of the hand is giving', Bhartṛhari) and codifies dramatic `abhinaya` in Bharata's *Nāṭyaśāstra*.",
    padaccheda: [
      { deva: "कर्म-कौशल्येन प्रकाशते", iast: "karma-kauśalyena prakāśate", gloss: "excels in dexterous action and craft" },
      { deva: "पञ्च-शाखः शयः पाणिः", iast: "pañca-śākhaḥ śayaḥ pāṇiḥ", gloss: "five-fingered limb, clasping palm" },
      { deva: "हस्तः करः", iast: "hastaḥ karaḥ", gloss: "hand, organ of making and giving" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.6.81 (Manuṣyavarga); Nirukta 1.7"
    },
    related: ["pada-foot", "sharira", "shilpa", "dana", "nritya"]
  },
  {
    id: "pada-foot",
    deva: "पादः",
    iast: "pādaḥ",
    stem: "pāda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["foot", "step", "ray of light", "quarter of a verse"],
    phoneticAliases: ["pada", "carana", "charana", "anghri", "pad", "foot", "step"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "पद्यते गम्यते अनेन इति पादः । पादोऽङ्घ्रिश्चरणोऽस्त्रियां पादो रश्म्यंघ्रितुर्यांशेषु ॥",
    lakshanaIast: "padyate gamyate anena iti pādaḥ | pādo 'ṅghriś caraṇo 'striyāṃ pādo raśmyaṅghrituryāṃśeṣu ||",
    meaningShort: "A foot — the foundational limb of locomotion, and by classical polysemy a ray of light, mountain foothill, or quarter of a poetic stanza.",
    meaningDeep: "Derived instrumentally from √pad ('gatau' — `padyate 'nena`, that whereby one walks; Nirukta 2.7, cognate with Latin *pēs* / *pedis* and English *foot*), `pāda` is grouped in Amarakośa (2.6.72 & Nānārthavarga 3.3.89) with `aṅghri`, `caraṇa`, and `pad`. Its four classical meanings — anatomical foot, beam of sun/moonlight (`bālapāda`), tree-root or hill-base (`pratyantaparvata`), and one-fourth quadrant (`turyāṃśa`, whether of a four-line `śloka` or anadhyāya chapter of the *Brahmasūtras*) — pervade all of Sanskrit literature, crowned by Puruṣasūkta's `pādo 'sya viśvā bhūtāni`.",
    padaccheda: [
      { deva: "पद्यते गम्यते अनेन", iast: "padyate gamyate anena", gloss: "the limb by which one steps and journeys (√pad)" },
      { deva: "पादः अङ्घ्रिः चरणः", iast: "pādaḥ aṅghriḥ caraṇaḥ", gloss: "foot, striding limb, revered step" },
      { deva: "रश्मि-अङ्घ्रि-तुर्यांशेषु", iast: "raśmi-aṅghri-turyāṃśeṣu", gloss: "signifying light-ray, foot, and metrical quarter" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.6.72, 3.3.89; Nirukta 2.7"
    },
    related: ["hasta", "sharira", "marga", "shloka", "trivikrama"]
  },
  {
    id: "hridaya",
    deva: "हृदयम्",
    iast: "hṛdayam",
    stem: "hṛdaya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["heart", "bosom", "core essence", "seat of consciousness"],
    phoneticAliases: ["hridaya", "hrdaya", "hrid", "hrit", "svanta", "antaranga", "heart"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "हृदि अयम् आस्तेऽस्मिन् परमात्मा इति हृदयम् । चित्तं तु चेतो हृदयं स्वान्तं हृन्मानसं मनः ॥",
    lakshanaIast: "hṛdi ayam āste 'smin paramātmā iti hṛdayam | cittaṃ tu ceto hṛdayaṃ svāntaṃ hṛn mānasaṃ manaḥ ||",
    meaningShort: "The heart — the vital center of the chest, emotional empathy, innermost essence, and Upaniṣadic sanctuary of the Indwelling Lord.",
    meaningDeep: "In a celebrated Upaniṣadic *nirukti* (Bṛhadāraṇyaka 5.3.1 & Chāndogya 8.3.3: `hṛdi ayam iti tasmād hṛdayam`), the three syllables `hṛ-da-yam` signify both vital circulation (√hṛ 'to draw in', √dā 'to give forth', √i 'to course ceaselessly') and the sacred truth: 'Here (`hṛdi`) abides This One (`ayam`)' — the Supreme Ātman within the lotus of the heart (`hṛt-puṇḍarīka`). Amarakośa (1.5.3 & 2.6.77) distinguishes the physical chest/heart (`uras` / `hṛdaya`) from the affective mind (`hṛt`, `svānta`), while Bhagavadgītā 18.61 affirms `īśvaraḥ sarvabhūtānāṃ hṛddeśe 'rjuna tiṣṭhati`.",
    padaccheda: [
      { deva: "हृदि अयम् इति हृदयम्", iast: "hṛdi ayam iti hṛdayam", gloss: "ChU 8.3.3 nirukti: 'within the heart (`hṛdi`) This Supreme One (`ayam`) dwells'" },
      { deva: "चित्तम् चेतः हृदयम्", iast: "cittam cetaḥ hṛdayam", gloss: "awareness, feeling mind, inner heart" },
      { deva: "स्वान्तम् हृत्", iast: "svāntam hṛt", gloss: "inward sanctuary, bosom" }
    ],
    source: {
      grantha: "Chāndogyopaniṣad, Bhagavadgītā & Amarakośa",
      granthaDeva: "छान्दोग्योपनिषत् · भगवद्गीता · अमरकोशः",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "ChU 8.3.3; BG 18.61; AK 1.5.3"
    },
    related: ["sharira", "rudhira", "citta", "guha", "paramatman"]
  },
  {
    id: "rudhira",
    deva: "रुधिरम्",
    iast: "rudhiram",
    stem: "rudhira",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["blood", "vital crimson fluid"],
    phoneticAliases: ["rudhira", "rakta", "asrik", "lohita", "shonita", "blood"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "रुणद्धि प्राणान् धारयति इति रुधिरम् । रुधिरमसृग्लोहितमस्रं रक्तं क्षतजं शोणितम् ॥",
    lakshanaIast: "ruṇaddhi prāṇān dhārayati iti rudhiram | rudhiram asṛg lohitam asraṃ raktaṃ kṣatajaṃ śoṇitam ||",
    meaningShort: "Blood — the crimson life-sustaining tissue fluid (`rakta-dhātu`) coursing through vessels to nourish the living body.",
    meaningDeep: "Derived via Uṇādi 1.52 (`rudher irac`) from √rudh ('āvaraṇe' — retaining vital warmth and life within the organism, cognate with Greek *erythros* and English *red*), `rudhira` is grouped in Amarakośa (Manuṣyavarga 2.6.64) with `asṛj`, `lohita`, `asra`, `rakta` ('deep-dyed crimson'), `kṣataja`, and `śoṇita`. In Āyurvedic physiology (`sapta-dhātavaḥ`: `rasa, rakta, māṃsa, medas, asthi, majjā, śukra`), `rakta` / `rudhira` is the second foundational bodily tissue, whose direct function is `jīvana` — sustaining vitality and complexion.",
    padaccheda: [
      { deva: "रुणद्धि प्राणान् इति रुधिरम्", iast: "ruṇaddhi prāṇān iti rudhiram", gloss: "retains and sustains vital breaths within the body (√rudh + -ira)" },
      { deva: "असृक् लोहितम् रक्तम्", iast: "asṛk lohitam raktam", gloss: "flowing fluid, red tissue, crimson blood" },
      { deva: "क्षतजम् शोणितम्", iast: "kṣatajam śoṇitam", gloss: "wound-flowing, bright-hued blood" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.6.64 (Manuṣyavarga)"
    },
    related: ["hridaya", "sharira", "asthi", "tvach", "prana"]
  },
  {
    id: "asthi",
    deva: "अस्थि",
    iast: "asthi",
    stem: "asthi",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["bone", "skeletal frame", "hard kernel"],
    phoneticAliases: ["asthi", "kikasa", "kulya", "had", "bone"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "अस्यते मांसैराच्छाद्यते तिष्ठति देहोऽनेन वा इति अस्थि । अस्थि कीकसं कुल्यं च ॥",
    lakshanaIast: "asyate māṃsair ācchādyate tiṣṭhati deho 'nena vā iti asthi | asthi kīkasaṃ kulyaṃ ca ||",
    meaningShort: "Bone — the rigid mineral-structural tissue (`asthi-dhātu`) supporting the upright posture of the vertebrate body.",
    meaningDeep: "Derived via Uṇādi 3.154 from √as ('kṣepaṇe / sattāyām' — remaining long after softer tissues perish, cognate with Greek *osteon* and Latin *os*), `asthi` exhibits a famous heteroclitic declension in Pāṇini 7.1.75 (`asthidadhisakthyakṣṇām anaṅ udāttaḥ`, taking stem `asthan-` in instrumental `asthnā`, etc.). Amarakośa (Manuṣyavarga 2.6.66) pairs `asthi` with `kīkasa` and `kulya`. In Āyurveda (`dhāraṇam asthnām`) it is the fifth `dhātu` providing structural support, and in Purāṇic lore Sage Dadhīci's selfless gift of his bones forged the `vajra` that protected dharma.",
    padaccheda: [
      { deva: "तिष्ठति देहः अनेन", iast: "tiṣṭhati dehaḥ anena", gloss: "that structural support whereby the body stands upright" },
      { deva: "अस्थि कीकसम्", iast: "asthi kīkasam", gloss: "bone, skeletal segment" },
      { deva: "कुल्यम्", iast: "kulyam", gloss: "enduring bone-relic" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha & Pāṇini",
      locator: "AK 2.6.66 (Manuṣyavarga); Pāṇini 7.1.75"
    },
    related: ["sharira", "rudhira", "tvach", "danta", "bala"]
  },
  {
    id: "tvach",
    deva: "त्वक्",
    iast: "tvak",
    stem: "tvac",
    pos: "strīliṅga (f.)",
    englishGlosses: ["skin", "tactile sense", "epidermis", "bark"],
    phoneticAliases: ["tvach", "tvak", "twak", "carma", "charma", "sparshana", "skin"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "त्वचति संवृणोति देहमिति त्वक् । स्पर्शग्राहकं सर्वशरीरवर्ति वायवीयं त्वगिन्द्रियम् ॥",
    lakshanaIast: "tvacati saṃvṛṇoti deham iti tvak | sparśagrāhakaṃ sarvaśarīravarti vāyavīyaṃ tvagindriyam ||",
    meaningShort: "The skin and tactile faculty — the protective envelope covering the body (or tree-bark) and housing the pervasive sense of touch.",
    meaningDeep: "Derived from √tvac ('saṃvaraṇe' — to envelop and shield the organism), `tvac` (nominative `tvak`) denotes anatomical skin (`asṛgdharā`, `carman` in Amarakośa 2.6.62), aromatic tree-bark (`valkala` / cinnamon bark in 2.4.12), and the tactile `jñānendriya`. Unlike sight or hearing localized in a single orifice, Tarkasaṅgraha (21: `sparśagrāhakaṃ tvagindriyam sarvaśarīravarti vāyavīyam`) notes that the `tvak` sense pervades the entire body, is composed of subtle `vāyu`, and apprehends coolness, warmth, softness, and texture.",
    padaccheda: [
      { deva: "त्वचति संवृणोति देहम्", iast: "tvacati saṃvṛṇoti deham", gloss: "envelops and protects the living body (√tvac)" },
      { deva: "स्पर्श-ग्राहकम्", iast: "sparśa-grāhakam", gloss: "apprehending tactile sensation (`sparśa`)" },
      { deva: "सर्व-शरीर-वर्ति वायवीयम्", iast: "sarva-śarīra-varti vāyavīyam", gloss: "pervading the whole body and aerial in subtle constitution" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha & Annambhaṭṭa",
      locator: "AK 2.6.62 (Manuṣyavarga); TS 21"
    },
    related: ["sparsha", "vayu-kosha", "sharira", "rudhira", "indriya"]
  },
  {
    id: "ayus",
    deva: "आयुः",
    iast: "āyuḥ",
    stem: "āyus",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["lifespan", "vitality", "living duration", "longevity"],
    phoneticAliases: ["ayus", "ayuh", "ayu", "jivita", "jivitakala", "lifespan", "longevity"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "एति गच्छति अविच्छेदेन इति आयुः । शरीरेन्द्रियसत्त्वात्मसंयोगो धारि जीवितम् ॥",
    lakshanaIast: "eti gacchati avicchedena iti āyuḥ | śarīrendriyasattvātmasaṃyogo dhāri jīvitam ||",
    meaningShort: "Lifespan or vital duration — the continuous union of body, senses, mind, and conscious soul from birth to death.",
    meaningDeep: "Derived via Uṇādi 2.118 (`eter uṇ`) from √iṇ ('gatau' — `eti`, coursing forward without interruption), `āyus` (cognate with Greek *aiōn* and Latin *aevum*) is equated in Amarakośa (2.8.119) with `jīvitakāla`. Caraka Saṃhitā (Sūtrasthāna 1.42) gives the classic definition of `āyus` — whence `Āyurveda`, the science of life — as `śarīrendriyasattvātmasaṃyogaḥ` ('the living conjunction of physical body, senses, mind, and self'), sustained in Tattvavāda by Mukhyaprāṇa under Paramātman's ordinance.",
    padaccheda: [
      { deva: "एति अविच्छेदेन इति आयुः", iast: "eti avicchedena iti āyuḥ", gloss: "courses continuously across time (√i + -us)" },
      { deva: "शरीर-इन्द्रिय-सत्त्व-आत्म-संयोगः", iast: "śarīra-indriya-sattva-ātma-saṃyogaḥ", gloss: "vital union of body, senses, mind, and conscious self" },
      { deva: "धारि जीवितम्", iast: "dhāri jīvitam", gloss: "that which sustains embodied life" }
    ],
    source: {
      grantha: "Caraka Saṃhitā & Amarakośa",
      granthaDeva: "चरकसंहिता · अमरकोशः",
      author: "Caraka & Amarasimha",
      locator: "Caraka Sūtra 1.42; AK 2.8.119"
    },
    related: ["arogya", "prana", "janman", "mrityu", "sharira"]
  },
  {
    id: "arogya",
    deva: "आरोग्यम्",
    iast: "ārogyam",
    stem: "ārogya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["health", "wellness", "freedom from disease", "vital balance"],
    phoneticAliases: ["arogya", "svasthya", "swasthya", "anamaya", "niramaya", "health", "wellness"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "अरोगस्य भावः आरोग्यम् । समदोषः समाग्निश्च समधातुमलक्रियः प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥",
    lakshanaIast: "arogasya bhāvaḥ ārogyam | samadoṣaḥ samāgniś ca samadhātumalākriyaḥ prasannātmendriyamanāḥ svastha ity abhidhīyate ||",
    meaningShort: "Health or holistic wellness (`svāsthya`) — freedom from disease coupled with radiant equilibrium of body, senses, mind, and spirit.",
    meaningDeep: "Formed with suffix `-ṣyañ` (Pāṇini 5.1.124) from `a-roga` ('free from `roga`, that which afflicts or breaks ease, √ruj'), `ārogya` is paired in Amarakośa (Manuṣyavarga 2.6.50) with `anāmaya` and `svāsthya` ('abiding serenely in one's true constitution', `svasmin tiṣṭhatīti svasthaḥ`). Suśruta Saṃhitā (Sūtrasthāna 15.41) famously elevates health beyond mere absence of illness to `prasannātmendriyamanāḥ` — luminous clarity of soul, senses, and mind — while Caraka declares `dharmārthakāmamokṣāṇām ārogyaṃ mūlam uttamam`.",
    padaccheda: [
      { deva: "अरोगस्य भावः आरोग्यम्", iast: "arogasya bhāvaḥ ārogyam", gloss: "the state of freedom from affliction (`a-roga`)" },
      { deva: "सम-दोषः सम-अग्निः", iast: "sama-doṣaḥ sama-agniḥ", gloss: "balanced humors and harmonious digestive fire" },
      { deva: "प्रसन्न-आत्म-इन्द्रिय-मनाः स्वस्थः", iast: "prasanna-ātma-indriya-manāḥ svasthaḥ", gloss: "serene in soul, senses, and mind — truly `svastha`" }
    ],
    source: {
      grantha: "Suśruta Saṃhitā & Amarakośa",
      granthaDeva: "सुश्रुतसंहिता · अमरकोशः",
      author: "Suśruta & Amarasimha",
      locator: "Suśruta Sūtra 15.41; AK 2.6.50"
    },
    related: ["ayus", "sharira", "prana", "sukha", "shanti"]
  },
  {
    id: "nidra",
    deva: "निद्रा",
    iast: "nidrā",
    stem: "nidrā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["sleep", "slumber", "repose"],
    phoneticAliases: ["nidra", "shayana", "svapa", "prasvapa", "supti", "sleep", "slumber"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "निद्राति संहरतीन्द्रियव्यापारानिति निद्रा । शयनं स्वापः स्वप्नः संवेशो निद्रा ॥",
    lakshanaIast: "nidrāti saṃharatīndriyavyāpārān iti nidrā | śayanaṃ svāpaḥ svapnaḥ saṃveśo nidrā ||",
    meaningShort: "Sleep or slumber — the periodic natural withdrawal of outward sensory and motor activity that restores bodily and mental vigor.",
    meaningDeep: "Derived from `ni` + √drā ('kutsāyāṃ gatau / svāpe' — sinking inward from external engagement; Pāṇini 3.3.100), `nidrā` is grouped in Amarakośa (Nāṭyavarga 1.7.36) with `śayana`, `svāpa`, `saṃveśa`, and `supti`. While Yoga-sūtra 1.10 (`abhāvapratyayālambanā vṛttir nidrā`) analyzes ordinary sleep as a `tamas`-veiled modification of `citta`, Vedānta distinguishes dream-filled sleep (`svapna`) from deep dreamless repose (`suṣupti`), wherein Śrī Madhvācārya's Brahmasūtrabhāṣya (1.3.42) shows the weary `jīva` rests directly in the embrace of Prājña-Paramātman.",
    padaccheda: [
      { deva: "संहति इन्द्रिय-व्यापारान्", iast: "saṃharati indriya-vyāpārān", gloss: "withdraws outward sensory operations (ni + √drā)" },
      { deva: "शयनम् स्वापः संवेशः", iast: "śayanam svāpaḥ saṃveśaḥ", gloss: "lying at rest, slumber, restorative repose" },
      { deva: "निद्रा", iast: "nidrā", gloss: "sleep" }
    ],
    source: {
      grantha: "Amarakośa & Yogasūtra",
      granthaDeva: "अमरकोशः · योगसूत्रम्",
      author: "Amarasimha & Patañjali",
      locator: "AK 1.7.36 (Nāṭyavarga); YS 1.10"
    },
    related: ["ratri", "svapna", "sushupti", "jagrat", "ayus"]
  },
  {
    id: "kshudha",
    deva: "क्षुधा",
    iast: "kṣudhā",
    stem: "kṣudhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["hunger", "appetite"],
    phoneticAliases: ["kshudha", "ksudha", "kshut", "bubhuksha", "jighatsa", "ashanaya", "hunger"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "क्षुध्यति बुभुक्षतेऽनयेति क्षुधा । जिघत्साशनया क्षुच्च बुभुक्षा क्षुधा च सा ॥",
    lakshanaIast: "kṣudhyati bubhukṣate 'nayeti kṣudhā | jighatsāśanayā kṣuc ca bubhukṣā kṣudhā ca sā ||",
    meaningShort: "Hunger — the vital bodily urge for food kindled by the inward digestive fire (`jāṭharāgni`).",
    meaningDeep: "Derived from √kṣudh ('bubhukṣāyām' — to feel hunger; Pāṇini 3.3.104 yielding `kṣudhā` alongside root-stem `kṣudh`, nominative `kṣut`), Amarakośa (Vaiśyavarga 2.9.54) pairs it with desiderative nouns `jighatsā` ('desire to eat', √ghas), Vedic `aśanāyā`, and `bubhukṣā` (√bhuj). Upaniṣadic texts (`aśanāyā-pipāse`) identify hunger and thirst as hallmarks of `prāṇa` and mortal embodiment, prompting the great ethic of `anna-dāna` (sharing food with the hungry), while Paramātman and Mahālakṣmī eternally transcend `aśanāyā`.",
    padaccheda: [
      { deva: "क्षुध्यति बुभुक्षते अनया", iast: "kṣudhyati bubhukṣate anayā", gloss: "that impulse whereby a creature hungers for food (√kṣudh)" },
      { deva: "जिघत्सा अशनया", iast: "jighatsā aśanāyā", gloss: "appetite to eat, Vedic `aśanāyā`" },
      { deva: "क्षुत् बुभुक्षा क्षुधा", iast: "kṣut bubhukṣā kṣudhā", gloss: "pangs of hunger, desire for nourishment" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.9.54 (Vaiśyavarga)"
    },
    related: ["trishna", "anna", "tejas", "sharira", "dana"]
  },
  {
    id: "trishna",
    deva: "तृष्णा",
    iast: "tṛṣṇā",
    stem: "tṛṣṇā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["thirst", "parchedness", "craving", "hankering"],
    phoneticAliases: ["trishna", "trsna", "pipasa", "tarsha", "udanya", "thirst", "craving"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "तृष्यति पिपासति स्पृहयति वा अनयेति तृष्णा । उदन्या तु पिपासा तृट् तर्षः तृष्णा च सा ॥",
    lakshanaIast: "tṛṣyati pipāsati spṛhayati vā anayeti tṛṣṇā | udanyā tu pipāsā tṛṭ tarṣaḥ tṛṣṇā ca sā ||",
    meaningShort: "Thirst — physically the bodily need for cooling water (`pipāsā`), and psychologically insatiable worldly craving.",
    meaningDeep: "Formed with suffix `-naṅ` (Pāṇini 3.3.90: `yajayācayatavicchapraccha-rakṣo naṅ` and Uṇādi extensions on √tṛṣ 'pipāsāyām', cognate with English *thirst*), `tṛṣṇā` spans two dimensions in Amarakośa (2.9.55 & 1.7.27): physical thirst (`udanyā`, `pipāsā`, `tṛṣ` / `tṛṭ`, `tarṣa`) quenched by pure `jala`, and restless psychological hankering (`spṛhā`, `lobha`). Mahābhārata's famous Subhāṣita (`tṛṣṇā na jīrṇā vayam eva jīrṇāḥ`) warns that bodily faculties age while unbridled craving never ages save through `vairāgya` and `santoṣa`.",
    padaccheda: [
      { deva: "तृष्यति पिपासति अनया", iast: "tṛṣyati pipāsati anayā", gloss: "experiences parchedness or restless craving (√tṛṣ + -nā)" },
      { deva: "उदन्या पिपासा तृट्", iast: "udanyā pipāsā tṛṭ", gloss: "longing for water, desire to drink, thirst" },
      { deva: "तर्षः तृष्णा", iast: "tarṣaḥ tṛṣṇā", gloss: "parching thirst and psychological craving" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.9.55, 1.7.27"
    },
    related: ["kshudha", "jala", "iccha", "vairagya", "sharira"]
  },
  {
    id: "janman",
    deva: "जन्म",
    iast: "janma",
    stem: "janman",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["birth", "origin", "embodiment", "nativity"],
    phoneticAliases: ["janman", "janma", "jani", "utpatti", "udbhava", "bhava-birth", "birth"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "जायतेऽनेन शरीरसम्बन्धी भवतीति जन्म । जनिर्जन्मोद्भवोद्भूतिर्भवः सत्त्वादिषूद्गमः ॥",
    lakshanaIast: "jāyate 'nena śarīrasambandhī bhavatīti janma | janir janmodbhavodbhūtir bhavaḥ sattvādiṣūdgame ||",
    meaningShort: "Birth — the coming into embodied manifestation of a living being, or the origination of any produced entity.",
    meaningDeep: "Derived from √janī ('prādurbhāve' — to become manifest, be born; Uṇādi 4.144 `-manin`), `janman` (nominative `janma`) is grouped in Amarakośa (Svargavarga/Kālavarga & Manuṣyavarga) with `jani`, `udbhava`, `utpatti`, and `prasūti`. Critically in Vedānta ontology (Brahmasūtra 2.3.16–17 & Bhagavadgītā 2.20, `na jāyate mriyate vā kadācit`), Madhvācārya clarifies that `janma` and `mṛtyu` belong strictly to the `jīva`'s association with and separation from a gross physical `deha` (`dehādi-saṃyoga`), never to the eternal conscious `ātman` itself — and that Bhagavān's `avatāra` (`janma karma ca me divyam`, BG 4.9) is purely spiritual manifestation (`prādurbhāva`), untouched by material karma.",
    padaccheda: [
      { deva: "जायते शरीर-सम्बन्धी भवति", iast: "jāyate śarīra-sambandhī bhavati", gloss: "enters into manifestation or bodily union (√jan + -man)" },
      { deva: "जनिः जन्म उद्भवः", iast: "janiḥ janma udbhavaḥ", gloss: "nativity, birth, arising" },
      { deva: "उद्भूतिः भवः", iast: "udbhūtiḥ bhavaḥ", gloss: "origination, coming into embodied existence" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.4.29; BG 2.20, 4.9"
    },
    related: ["mrityu", "ayus", "sharira", "jeeva", "matri"]
  },
  {
    id: "mrityu",
    deva: "मृत्युः",
    iast: "mṛtyuḥ",
    stem: "mṛtyu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["death", "mortality", "dissolution of the body"],
    phoneticAliases: ["mrityu", "mrtyu", "marana", "nidhana", "pancata", "antaka", "death"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "म्रियन्ते भूतान्यनेन इति मृत्युः । पञ्चता कालधर्मो दिष्टान्तः प्रलयोऽत्ययः मृत्युर्मरणं निधनम् ॥",
    lakshanaIast: "mriyante bhūtāny anena iti mṛtyuḥ | pañcatā kāladharmo diṣṭāntaḥ pralayo 'tyayaḥ mṛtyur maraṇaṃ nidhanam ||",
    meaningShort: "Death — the departure of vital breath and conscious soul from a worn-out physical body.",
    meaningDeep: "Derived via Uṇādi 3.21 from √mṛṅ ('prāṇatyāge' — relinquishing vital breath, cognate with Latin *mors* / *mortis* and English *mortal*), `mṛtyu` is catalogued in Amarakośa (Kṣatriyavarga 2.8.116) with philosophically pregnant synonyms: `pañcatā` ('return of the body's elements to the five mahābhūtas'), `kāladharma` ('law of time'), `maraṇa`, and `nidhana`. In Kaṭha Upaniṣad, young Naciketas learns from Yama (`Mṛtyu`) the secret beyond death, while Bhagavadgītā 2.22 compares bodily death for the eternal `jīva` to laying aside worn garments (`vāsāṃsi jīrṇāni`).",
    padaccheda: [
      { deva: "म्रियन्ते भूतानि अनेन", iast: "mriyante bhūtāni anena", gloss: "whereby mortal frames relinquish vital breath (√mṛ + -tyuk)" },
      { deva: "पञ्चता काल-धर्मः", iast: "pañcatā kāla-dharmaḥ", gloss: "dissolution into the five elements, law of time" },
      { deva: "मृत्युः मरणम् निधनम्", iast: "mṛtyuḥ maraṇam nidhanam", gloss: "death, passing, bodily cessation" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.8.116; BG 2.22, 2.27"
    },
    related: ["janman", "amrita", "ayus", "sharira", "moksha"]
  },
  {
    id: "manushya",
    deva: "मनुष्यः",
    iast: "manuṣyaḥ",
    stem: "manuṣya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["human being", "mortal", "mankind", "person"],
    phoneticAliases: ["manushya", "manusya", "manava", "manuja", "martya", "manusha", "human"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "मनोरपत्यं मननाच्छीलो वा इति मनुष्यः । मनुष्या मानुषा मर्त्या मनुजा मानवा नराः ॥",
    lakshanaIast: "manor apatyaṃ mananācchīlo vā iti manuṣyaḥ | manuṣyā mānuṣā martyā manujā mānavā narāḥ ||",
    meaningShort: "A human being — an offspring of progenitor Manu, uniquely endowed with reflective reason (`manana`) and moral responsibility.",
    meaningDeep: "Yāska (Nirukta 3.7: `manuṣyāḥ kasmāt? matvā karmāṇi sīvyanti, manasyamānena sṛṣṭāḥ, manor apatyam`) and Pāṇini (4.1.161: `manoḥ jātāv aṇyatou ṣuk ca`) derive `manuṣya` and `mānava` both patronymically from Manu and functionally from √man ('jñāne' — the creature capable of deliberate reflection before acting). Amarakośa opens Manuṣyavarga (2.6.1) with `manuṣya`, `mānuṣa`, `martya` ('mortal'), `manuja`, `mānava`, and `nara`. Classical śāstra prizes human birth (`mānuṣyaṃ durlabham`) as the prime `karma-bhūmi` wherein a soul can pursue `dharma`, `jñāna`, and `mokṣa`.",
    padaccheda: [
      { deva: "मनोः अपत्यम् मननात् वा", iast: "manoḥ apatyam mananāt vā", gloss: "progeny of Manu, endowed with reflective thought (√man)" },
      { deva: "मनुष्याः मानुषाः मर्त्याः", iast: "manuṣyāḥ mānuṣāḥ martyāḥ", gloss: "humans, reflective beings, mortals" },
      { deva: "मनुजाः मानवाः नराः", iast: "manujāḥ mānavāḥ narāḥ", gloss: "Manu-born, humankind, persons" }
    ],
    source: {
      grantha: "Nirukta, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "निरुक्तम् · अष्टाध्यायी · अमरकोशः",
      author: "Yāska, Pāṇini & Amarasimha",
      locator: "Nirukta 3.7; Pāṇini 4.1.161; AK 2.6.1"
    },
    related: ["nara", "nari", "manana", "manas", "pranin"]
  },
  {
    id: "nara",
    deva: "नरः",
    iast: "naraḥ",
    stem: "nara",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["man", "person", "hero", "unperishing spirit"],
    phoneticAliases: ["nara", "puman", "purusha-man", "martya-nara", "man", "person"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "नयति धर्मकर्मणीति नरः । स्युरेते पौरुषेयाश्च नरा मर्त्याश्च पुमांसश्च ॥",
    lakshanaIast: "nayati dharmakarmaṇīti naraḥ | syur ete pauruṣeyāś ca narā martyāś ca pumāṃsaś ca ||",
    meaningShort: "A man or person — one who leads forward righteous enterprise and purposeful action in the world.",
    meaningDeep: "Derived from √nīñ ('prāpaṇe' — `nayati`, one who guides and carries undertakings forward, alongside Vedic stem `nṛ`, nominative `nā`, cognate with Greek *anēr*), `nara` denotes both a human person broadly and an adult male (`pumāṃs`, AK 2.6.1–2). In the Mahābhārata's foundational `Nara-Nārāyaṇa` pairing — central to Śrī Madhvācārya's *Mahābhāratatātparyanirṇaya* — `Nara` (manifesting as Arjuna) is the ideal finite devotee-hero guided at every step by `Nārāyaṇa` (Śrī Kṛṣṇa), the Imperishable (`na rīyate`) Supreme Lord.",
    padaccheda: [
      { deva: "नयति धर्म-कर्मणी इति नरः", iast: "nayati dharma-karmaṇī iti naraḥ", gloss: "carries forward duty and purposeful action (√nī)" },
      { deva: "नराः मर्त्याः", iast: "narāḥ martyāḥ", gloss: "human persons, mortals" },
      { deva: "पुमांसः", iast: "pumāṃsaḥ", gloss: "men, resolute agents" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.6.1–2 (Manuṣyavarga); Nirukta 5.1"
    },
    related: ["manushya", "nari", "bala-child", "purusha", "narayana"]
  },
  {
    id: "nari",
    deva: "नारी",
    iast: "nārī",
    stem: "nārī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["woman", "lady", "noblewoman"],
    phoneticAliases: ["nari", "stri", "yoshit", "vanita", "mahila", "angana", "woman"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "नृजातिः धर्मचारिणी वा नारी । स्त्री योषिदबला योषा नारी सीमन्तिनी वधूः ॥",
    lakshanaIast: "nṛjātiḥ dharmacāriṇī vā nārī | strī yoṣid abalā yoṣā nārī sīmantinī vadhūḥ ||",
    meaningShort: "A woman — a noble feminine person, pillar of household dharma, culture, and nurturing grace.",
    meaningDeep: "Formed by Pāṇini 4.1.73 (`śārṅgaravādyāñ ṅīn`: `nṛ` + `-aṇ` + `-ṅīn` → `nārī`), `nārī` is grouped in Amarakośa (Manuṣyavarga 2.6.2–3) with `strī` (Yāska, Nirukta 3.21: from √styai 'to gather together in modest grace'), `yoṣit`, `yoṣā`, `sīmantinī`, `vadhū`, `vanitā`, and `mahilā`. Manusmṛti 3.56 (`yatra nāryas tu pūjyante ramante tatra devatāḥ`) enshrines reverence for women as the touchstone of an auspicious society, while Bhagavadgītā 10.34 celebrates seven feminine excellences — `kīrtiḥ śrīr vāk ca nārīṇāṃ smṛtir medhā dhṛtiḥ kṣamā`.",
    padaccheda: [
      { deva: "नृ-जातिः नारी", iast: "nṛ-jātiḥ nārī", gloss: "feminine member of humankind (`nṛ` + `-aṇ` + `-ṅīn`)" },
      { deva: "स्त्री योषित् योषा", iast: "strī yoṣit yoṣā", gloss: "woman, graceful companion" },
      { deva: "सीमन्तिनी वधूः", iast: "sīmantinī vadhūḥ", gloss: "noble lady, cherished bride" }
    ],
    source: {
      grantha: "Amarakośa, Aṣṭādhyāyī & Manusmṛti",
      granthaDeva: "अमरकोशः · अष्टाध्यायी · मनुस्मृतिः",
      author: "Amarasimha & Pāṇini",
      locator: "AK 2.6.2; Pāṇini 4.1.73; Manu 3.56"
    },
    related: ["nara", "manushya", "matri", "patni", "duhitri"]
  },
  {
    id: "bala-child",
    deva: "बालः",
    iast: "bālaḥ",
    stem: "bāla",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["child", "infant", "boy", "young sprout"],
    phoneticAliases: ["bala-child", "shishu", "sisu", "arbhaka", "dimbha", "kumara", "child", "infant"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "बलति प्राणादिना वर्धते इति बालः । पाकोऽर्भको डिम्भः पृथुकः शावकः शिशुः ॥",
    lakshanaIast: "balati prāṇādinā vardhate iti bālaḥ | pāko 'rbhako ḍimbhaḥ pṛthukaḥ śāvakaḥ śiśuḥ ||",
    meaningShort: "A child or youth — a tender, growing young person under sixteen years, or figuratively anything newly risen.",
    meaningDeep: "Derived from √bal ('prāṇane / saṃvaraṇe' — thriving in fresh vital breath and requiring loving nurture), `bāla` (`bālā` in feminine) is paired in Amarakośa (Manuṣyavarga 2.6.27 & Nānārthavarga) with `arbhaka`, `ḍimbha`, `pṛthuka`, `śāvaka`, `kumāra`, and `śiśu` (from √śvi, 'rapidly growing'). Dharmaśāstra defines `bālya` as the formative stage up to sixteen (`ā ṣoḍaśād bhaved bālaḥ`), while poets apply `bāla` tenderly to the rising sun (`bālārka`), crescent moon (`bālendu`), and young shoots (`bāla-pallava`).",
    padaccheda: [
      { deva: "बलति वर्धते इति बालः", iast: "balati vardhate iti bālaḥ", gloss: "thrives and grows in fresh vitality (√bal)" },
      { deva: "अर्भकः डिम्भः पृथुकः", iast: "arbhakaḥ ḍimbhaḥ pṛthukaḥ", gloss: "little one, toddler, young child" },
      { deva: "शावकः शिशुः", iast: "śāvakaḥ śiśuḥ", gloss: "youngling, growing infant" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.6.27 (Manuṣyavarga)"
    },
    related: ["matri", "pitri", "putra", "duhitri", "vriddha"]
  },
  {
    id: "deva",
    deva: "देवः",
    iast: "devaḥ",
    stem: "deva",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["deity", "celestial god", "shining one", "divine lord"],
    phoneticAliases: ["deva", "sura", "amara", "vibudha", "tridasha", "divaukas", "deity", "god"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "देवो दानाद्वा दीपनाद्वा द्योतनाद्वा द्युस्थानो भवतीति वा । अमरा निर्जरा देवास्त्रिदशा विबुधाः सुराः ॥",
    lakshanaIast: "devo dānād vā dīpanād vā dyotanād vā dyusthāno bhavatīti vā | amarā nirjarā devās tridaśā vibudhāḥ surāḥ ||",
    meaningShort: "A shining deity — a luminous celestial intelligence who bestows blessings, illumines cosmic order, and dwells in heaven.",
    meaningDeep: "Yāska's famous fourfold etymology in Nirukta 7.15 derives `deva` (from √divu 'krīḍāvijigīṣāvyavahāradyutistuti...') from `dāna` (generous giving), `dīpana` (radiance), `dyotana` (illuminating consciousness), and `dyusthāna` (abiding in celestial `dyauḥ`). Amarakośa opens its very first verse (Svargavarga 1.1.7) with `amara`, `nirjara`, `deva`, `tridaśa`, `vibudha` ('wise'), and `sura`. In Śrī Madhvācārya's *Tāratamya* ontology, the `devas` are exalted sentient beings presiding over cosmic principles (`tattvābhimāni-devatāḥ`), while Viṣṇu alone is `Devadeva` — independent Sovereign of all gods.",
    padaccheda: [
      { deva: "दानात् दीपनात् द्योतनात्", iast: "dānāt dīpanāt dyotanāt", gloss: "Yāska's nirukti: from giving, shining, and illuminating (√div)" },
      { deva: "अमराः निर्जराः देवाः", iast: "amarāḥ nirjarāḥ devāḥ", gloss: "immortals, unaging celestials, shining gods" },
      { deva: "त्रिदशाः विबुधाः सुराः", iast: "tridaśāḥ vibudhāḥ surāḥ", gloss: "ever-youthful celestials, wise ones, benevolent deities" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 7.15; AK 1.1.7 (Svargavarga)"
    },
    related: ["amrita", "agni", "indra", "taratamya", "vishnu"]
  },
  {
    id: "pranin",
    deva: "प्राणी",
    iast: "prāṇī",
    stem: "prāṇin",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["living being", "sentient creature", "animate organism"],
    phoneticAliases: ["pranin", "prani", "jantu", "dehin", "sharirin", "bhuta-living", "creature"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "प्राणाः सन्त्यस्य इति प्राणी । चेतनो जन्मी जन्तुर्जनी शरीरी प्राणी च ॥",
    lakshanaIast: "prāṇāḥ santy asya iti prāṇī | cetano janmī jantur janī śarīrī prāṇī ca ||",
    meaningShort: "A living creature — any embodied sentient being animated by vital breath (`prāṇa`) and conscious awareness (`cetana`).",
    meaningDeep: "Formed with the possessive suffix `-ini` (Pāṇini 5.2.115: `ata iniṭhanau` — `prāṇa` + `-in` → `prāṇin`, nominative `prāṇī`), `prāṇin` is grouped in Amarakośa (Narakavarga/Sāmānya 1.9.6) with `cetana`, `janmin`, `jantu`, `śarīrin`, and `ātmavat`. Classical biology classifies `prāṇinaḥ` into four modes of bodily origin (`caturvidha-bhūtagrāma`, Chāndogya 6.3.1): `jarāyuja` (womb-born), `aṇḍaja` (egg-born), `svedaja` (moisture-born), and `udbhijja` (seed-sprouting), inspiring the universal ethical vow of `sarva-bhūta-dayā` (compassion toward every breathing creature).",
    padaccheda: [
      { deva: "प्राणाः सन्ति अस्य", iast: "prāṇāḥ santi asya", gloss: "endowed with vital breaths (`prāṇa` + `-in`)" },
      { deva: "चेतनः जन्मी जन्तुः", iast: "cetanaḥ janmī jantuḥ", gloss: "sentient being, birth-taking organism, creature" },
      { deva: "शरीरी प्राणी", iast: "śarīrī prāṇī", gloss: "embodied soul, breathing being" }
    ],
    source: {
      grantha: "Amarakośa & Chāndogyopaniṣad",
      granthaDeva: "अमरकोशः · छान्दोग्योपनिषत्",
      author: "Amarasimha",
      locator: "AK 1.9.6; ChU 6.3.1"
    },
    related: ["prana", "cetana", "jeeva", "pashu", "ahimsa"]
  },
  {
    id: "pashu",
    deva: "पशुः",
    iast: "paśuḥ",
    stem: "paśu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["animal", "cattle", "quadruped", "domestic beast"],
    phoneticAliases: ["pashu", "pasu", "catushpada", "animal", "cattle"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "पश्यति सर्वमविवेकेन इति पशुः । चतुष्पदो मृगः पशुश्च ॥",
    lakshanaIast: "paśyati sarvam avivekena iti paśuḥ | catuṣpado mṛgaḥ paśuś ca ||",
    meaningShort: "An animal or quadruped — a domestic or wild creature that perceives through the senses without śāstric deliberation.",
    meaningDeep: "Yāska (Nirukta 3.16: `paśuḥ paśyanāt`) and Uṇādi-sūtra (1.1: `kṛvāpājimi... dṛśibhyaḥ uṇ` with `paś` substitution) derive `paśu` (cognate with Latin *pecus*) from √dṛś (`paśyati`) — creatures guided by immediate sensory sight rather than scriptural discrimination (`jñānena hīnāḥ paśubhiḥ samānāḥ`, Hitopadeśa). Amarakośa (Siṃhādivarga 2.5.34 & Vaiśyavarga) applies `paśu` both to domestic livestock (`grāmya-paśu` like cows and horses) and to quadrupeds at large.",
    padaccheda: [
      { deva: "पश्यति इति पशुः", iast: "paśyati iti paśuḥ", gloss: "perceives through immediate sensory sight (`√dṛś → paś` + `-uṇ`)" },
      { deva: "चतुष्पदः", iast: "catuṣpadaḥ", gloss: "four-footed creature" },
      { deva: "मृगः पशुः", iast: "mṛgaḥ paśuḥ", gloss: "wild game and domestic animal" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 3.16; Uṇādi 1.1; AK 2.5.34"
    },
    related: ["pranin", "mriga", "go-cow", "ashva", "trina"]
  },
  {
    id: "mriga",
    deva: "मृगः",
    iast: "mṛgaḥ",
    stem: "mṛga",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["deer", "antelope", "forest animal", "gazelle"],
    phoneticAliases: ["mriga", "mrga", "harina", "kuranga", "ena", "saranga", "deer"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "मृग्यति तृणादिकमन्विष्यति वने इति मृगः । मृगे कुरङ्गवातायुहरिणाजिनयोनयः ॥",
    lakshanaIast: "mṛgyati tṛṇādikam anviṣyati vane iti mṛgaḥ | mṛge kuraṅgavātāyuhariṇājinayonayaḥ ||",
    meaningShort: "A deer or antelope — and more broadly any wild forest animal that roams the woods in search of forage.",
    meaningDeep: "Yāska (Nirukta 1.14: `mṛgo mārgaṇāt`) derives `mṛga` from √mṛg ('anveṣaṇe' — foraging freely through woodland glades, or tracked by hunters; whence `mārga`, a path). Amarakośa (Siṃhādivarga 2.5.9–10 & Nānārthavarga 3.3.23) notes that `mṛga` denotes both wild forest fauna generally (hence the lion is `mṛgendra`, 'king of beasts') and specifically the gentle deer (`kuraṅga`, `vātāyu` 'swift as wind', `hariṇa`, `eṇa`). In Kālidāsa's *Abhijñānaśākuntalam*, trustful hermitage fawns (`āśrama-mṛgāḥ`) embody unspoiled woodland innocence.",
    padaccheda: [
      { deva: "मृग्यति अन्विष्यति वने", iast: "mṛgyati anviṣyati vane", gloss: "forages and roams through the forest (√mṛg)" },
      { deva: "कुरङ्ग-वातायु-हरिणाः", iast: "kuraṅga-vātāyu-hariṇāḥ", gloss: "fleet gazelle, wind-swift antelope, tawny deer" },
      { deva: "अजिन-योनयः", iast: "ajina-yonayaḥ", gloss: "spotted woodland deer" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.14; AK 2.5.9 (Siṃhādivarga)"
    },
    related: ["vana", "pashu", "simha", "trina", "marga"]
  },
  {
    id: "simha",
    deva: "सिंहः",
    iast: "siṃhaḥ",
    stem: "siṃha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["lion", "king of beasts", "preeminent hero"],
    phoneticAliases: ["simha", "sinha", "mrigendra", "kesarin", "pancanana", "haryaksha", "lion"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "हिनस्ति मत्तगजादीनिति सिंहः । सिंहो मृगेन्द्रः पञ्चास्यो हर्यक्षः केसरी हरिः ॥",
    lakshanaIast: "hinasti mattagajādin iti siṃhaḥ | siṃho mṛgendraḥ pañcāsyo haryakṣaḥ kesarī hariḥ ||",
    meaningShort: "The lion — the maned monarch of forest beasts, emblem of fearless sovereignty and self-reliant valor.",
    meaningDeep: "Derived by Pāṇinian *varṇa-vyatyaya* (metathesis of `h` and `s`, Siddhāntakaumudī / Nirukta 3.18: `siṃhaḥ sahanād vā hiṃser vā`) from √hiṃs ('subduing even rutting elephants') or √sah ('overpowering might'), `siṃha` heads Amarakośa's animal chapter (Siṃhādivarga 2.5.1) with `mṛgendra` ('lord of beasts'), `pañcāsya`, `haryakṣa`, `kesarin` ('maned one'), `kaṇṭhīrava` ('deep-throated roarer'), and `hari`. Compounded at the end of a noun (`puruṣa-siṃha`, Pāṇini 2.1.56), it denotes peerless excellence, culminating in Bhagavān `Narasiṃha` (`mṛgāṇāṃ ca mṛgendro 'ham`, BG 10.30).",
    padaccheda: [
      { deva: "हिनस्ति सहते वा इति सिंहः", iast: "hinasti sahate vā iti siṃhaḥ", gloss: "overpowers with fearless might (√hiṃs / √sah)" },
      { deva: "मृग-इन्द्रः पञ्च-आस्यः", iast: "mṛga-indraḥ pañca-āsyaḥ", gloss: "king of forest beasts, broad-visaged lion" },
      { deva: "हर्यक्षः केसरी हरिः", iast: "haryakṣaḥ kesarī hariḥ", gloss: "tawny-eyed, maned monarch, tawny lion" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Bhagavadgītā",
      granthaDeva: "निरुक्तम् · अमरकोशः · भगवद्गीता",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 3.18; AK 2.5.1 (Siṃhādivarga); BG 10.30"
    },
    related: ["mriga", "vana", "guha", "gaja", "narasimha"]
  },
  {
    id: "gaja",
    deva: "गजः",
    iast: "gajaḥ",
    stem: "gaja",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["elephant", "tusker"],
    phoneticAliases: ["gaja", "hastin", "hasti", "karin", "dvipa-elephant", "kunjar", "matanga", "varana", "elephant"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "गर्जति मदयति वा इति गजः । मतङ्गजो गजो नागः कुञ्जरो वारणः करी ॥",
    lakshanaIast: "garjati madayati vā iti gajaḥ | mataṅgajo gajo nāgaḥ kuñjaro vāraṇaḥ karī ||",
    meaningShort: "The elephant — the noble, tusked forest giant celebrated for stately gait, memory, and royal majesty.",
    meaningDeep: "Derived from √gaj ('śabde madane ca' — to trumpet sonorously and exult in majestic strength), `gaja` commands a celebrated cluster in Amarakośa (Kṣatriyavarga 2.8.34–35): `dantin` / `dvirada` ('two-tusked'), `hastin` / `karin` ('endowed with a dexterous hand-like trunk'), `dvipa` ('drinking twice — first drawing water into its trunk, then pouring into its mouth'), `mataṅgaja`, `nāga`, `kuñjara`, and `vāraṇa`. In Vedānta logic (`andha-gaja-nyāya`) and devotional lore (`Gajendra-mokṣa`), the elephant illustrates both vast reality beyond partial grasp and wholehearted surrender to Viṣṇu.",
    padaccheda: [
      { deva: "गर्जति इति गजः", iast: "garjati iti gajaḥ", gloss: "trumpets sonorously in strength (√gaj)" },
      { deva: "मतङ्गजः नागः कुञ्जरः", iast: "mataṅgajaḥ nāgaḥ kuñjaraḥ", gloss: "stately elephant, mountain-roamer, forest tusker" },
      { deva: "वारणः करी", iast: "vāraṇaḥ karī", gloss: "irresistible charger, trunk-bearing `hastin`" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.8.34–35 (Kṣatriyavarga)"
    },
    related: ["simha", "ashva", "danta", "hasta", "vana"]
  },
  {
    id: "ashva",
    deva: "अश्वः",
    iast: "aśvaḥ",
    stem: "aśva",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["horse", "steed", "courser"],
    phoneticAliases: ["ashva", "asva", "turaga", "turanga", "haya", "vajin", "ghotaka", "horse", "steed"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "अश्नुते अध्वानं व्याप्नोति वेगवानिति अश्वः । तुरगस्तुरङ्गस्तुरङ्गमो वाजी वाहोऽर्वा गन्धर्वो हयः ॥",
    lakshanaIast: "aśnute adhvānaṃ vyāpnoti vegavān iti aśvaḥ | turagas turaṅgas turaṅgamo vājī vāho 'rvā gandharvo hayaḥ ||",
    meaningShort: "A horse or steed — the swift, spirited courser that traverses long distances with grace and vigor.",
    meaningDeep: "Yāska (Nirukta 1.12: `aśvaḥ kasmāt? aśnute 'dhvānaṃ mahāśano bhavatīti vā`) derives `aśva` (cognate with Latin *equus* and Greek *hippos*) from √aśū ('vyāptau' — swiftly covering the road). Amarakośa (Kṣatriyavarga 2.8.43–44) lists `turaga` / `turaṅga` ('swift-moving', √tur), `vājin` ('spirited'), `vāha`, `arvan`, `haya` (from √hi, 'darting forward'), `sapti`, and `ghoṭaka`. In Kaṭha Upaniṣad's famous chariot parable (`indriyāṇi hayān āhuḥ`, 1.3.4), the five horses yoked to the bodily chariot represent the dynamic senses guided by the reins of `manas` and charioteer `buddhi`.",
    padaccheda: [
      { deva: "अश्नुते अध्वानम् इति अश्वः", iast: "aśnute adhvānam iti aśvaḥ", gloss: "swiftly traverses and spans the road (√aś + -kva)" },
      { deva: "तुरगः तुरङ्गः वाजी", iast: "turagaḥ turaṅgaḥ vājī", gloss: "fleet courser, swift mover, spirited steed" },
      { deva: "वाहः अर्वा हयः", iast: "vāhaḥ arvā hayaḥ", gloss: "chariot-bearer, charger, steed" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Kaṭhopaniṣad",
      granthaDeva: "निरुक्तम् · अमरकोशः · कठोपनिषत्",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.12; AK 2.8.43–44; Kaṭha Up. 1.3.4"
    },
    related: ["gaja", "pashu", "marga", "indriya", "rajan"]
  },
  {
    id: "go-cow",
    deva: "गौः",
    iast: "gauḥ",
    stem: "go",
    pos: "strīliṅga (f.)",
    englishGlosses: ["cow", "sacred speech", "earth", "ray of light", "sense-organ"],
    phoneticAliases: ["go", "gau", "gauh", "dhenu", "surabhi", "aghnya", "cow"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "गच्छति चरति इति गौः । स्वर्गे बाणे गवि वाचि वज्रे दिशि भूमौ जलेऽक्ष्णि च रश्मौ च गौः ॥",
    lakshanaIast: "gacchati carati iti gauḥ | svarge bāṇe gavi vāci vajre diśi bhūmau jale 'kṣṇi ca raśmau ca gauḥ ||",
    meaningShort: "The cow (`dhenu`) — revered giver of nourishing milk, and one of Sanskrit's richest polysemes signifying sacred Veda-speech, earth, light-ray, and sense-faculty.",
    meaningDeep: "Yāska opens the *Nighaṇṭu* and *Nirukta* (2.5: `gaur iti pṛthivyā nāmadheyam, yad dūraṃ gatā bhavati... paśur apy ucyate`) with `go` (from √gam 'gatau' + `-ḍo`, Uṇādi 2.67). Amarakośa treats the gentle milk-giving cow (`mātā`, `śṛṅgiṇī`, `dhenu`, `surabhi`, `aghnyā` — 'never to be harmed') in Vaiśyavarga (2.9.65–71), and in Nānārthavarga (3.3.25) unfolds its ten classical meanings: `svarga`, arrow, cow, sacred speech (`vāk` / Veda), thunderbolt, direction, earth (`bhūmi`), water, eye/sense (`akṣi` — whence `Govinda` and `Hṛṣīkeśa`), and solar ray (`raśmi`).",
    padaccheda: [
      { deva: "गच्छति चरति इति गौः", iast: "gacchati carati iti gauḥ", gloss: "moves across pastures, heavens, and minds (√gam + -ḍo)" },
      { deva: "गवि वाचि भूमौ", iast: "gavi vāci bhūmau", gloss: "signifying the cow, sacred Vedic speech, and Mother Earth" },
      { deva: "अक्ष्णि रश्मौ च", iast: "akṣṇi raśmau ca", gloss: "and also cognitive sense-faculty and ray of light" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.5; AK 2.9.65, 3.3.25"
    },
    related: ["kshira", "ghrita", "vak", "prithivi", "govinda"]
  },
  {
    id: "pakshin",
    deva: "पक्षी",
    iast: "pakṣī",
    stem: "pakṣin",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["bird", "winged creature", "sky-farer"],
    phoneticAliases: ["pakshin", "paksi", "pakshi", "khaga", "vihaga", "vihanga", "dvija-bird", "shakunta", "bird"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "पक्षौ स्तोऽस्य इति पक्षी । खगे विहङ्गविहगविहङ्गमविहायसः शकुन्तिपक्षिशकुनिद्विजाः ॥",
    lakshanaIast: "pakṣau sto 'sya iti pakṣī | khage vihaṅgavihagavihaṅgamavihāyasaḥ śakuntipakṣiśakunidvijāḥ ||",
    meaningShort: "A bird — a feathered, egg-born creature endowed with twin wings that courses freely through the open sky.",
    meaningDeep: "Formed with `-ini` from `pakṣa` ('wing', `pakṣau sto 'sya`), `pakṣin` (nominative `pakṣī`) receives a lyrical string of synonyms in Amarakośa (Siṃhādivarga 2.5.32–34): `khaga` ('sky-goer', `khe gacchati`), `vihaṅga` / `vihaga` / `vihaṅgama` ('coursing through aerial `vihāyas`'), `patatrin` / `pataga` ('wing-flying'), `śakunta`, `aṇḍaja`, and `dvija` ('twice-born' — first as egg, then hatching into flight). Muṇḍaka Upaniṣad 3.1.1 (`dvā suparṇā sayujā sakhāyā`) immortalizes two winged birds perched on one body-tree — the finite `jīva` tasting karmic fruit and the self-luminous `Paramātman` witnessing in radiant fullness.",
    padaccheda: [
      { deva: "पक्षौ स्तः अस्य", iast: "pakṣau staḥ asya", gloss: "possessing a pair of feathered wings (`pakṣa` + `-in`)" },
      { deva: "खगे विहङ्ग-विहगाः", iast: "khage vihaṅga-vihagāḥ", gloss: "sky-farer, aerial soarer" },
      { deva: "शकुन्ति-पक्षि-द्विजाः", iast: "śakunti-pakṣi-dvijāḥ", gloss: "songbird, winged creature, twice-born (`aṇḍaja`)" }
    ],
    source: {
      grantha: "Amarakośa & Muṇḍakopaniṣad",
      granthaDeva: "अमरकोशः · मुण्डकोपनिषत्",
      author: "Amarasimha",
      locator: "AK 2.5.32–33 (Siṃhādivarga); Muṇḍaka Up. 3.1.1"
    },
    related: ["akasha", "mayura", "kokila", "garuda-bird", "hamsa"]
  },
  {
    id: "mayura",
    deva: "मयूरः",
    iast: "mayūraḥ",
    stem: "mayūra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["peacock", "crested peafowl"],
    phoneticAliases: ["mayura", "barhin", "shikhin", "nilakantha-bird", "kekin", "kalapin", "peacock"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "मीनाति हिनस्ति सर्पान्महीते नृत्यति वा मेघोदये इति मयूरः । मयूरो बर्हिणो बर्ही नीलकण्ठः शिखी केकी ॥",
    lakshanaIast: "mīnāti hinasti sarpān mahīyate nṛtyati vā meghodaye iti mayūraḥ | mayūro barhiṇo barhī nīlakaṇṭhaḥ śikhī kekī ||",
    meaningShort: "The peacock — the sapphire-necked, crested bird famed for unfurling its iridescent plume in joyous dance when monsoon clouds gather.",
    meaningDeep: "Derived via Uṇādi 1.70 / Nirukta 3.20 from √mī ('subduing serpents') or √mah ('exulting on hilltops'), `mayūra` is vividly portrayed through its descriptive synonyms in Amarakośa (Siṃhādivarga 2.5.30): `barhiṇa` / `barhin` / `kalāpin` ('bearing an eyed fan-tail'), `nīlakaṇṭha` ('sapphire-throated'), `bhujaṅgabhuk` ('serpent-foe'), `śikhāvala` / `śikhin` ('crowned with a crest'), and `kekin` ('uttering the `kekā` call corresponding to musical `ṣaḍja`'). A single `mayūra-piccha` crowns the brow of Gopāla Kṛṣṇa.",
    padaccheda: [
      { deva: "नृत्यति मेघ-उदये इति मयूरः", iast: "nṛtyati megha-udaye iti mayūraḥ", gloss: "dances exultantly at the rising of rainclouds" },
      { deva: "बर्हिणः नीलकण्ठः", iast: "barhiṇaḥ nīlakaṇṭhaḥ", gloss: "plume-tailed peafowl, sapphire-throated bird" },
      { deva: "शिखी केकी", iast: "śikhī kekī", gloss: "crested dancer, singer of the `kekā` note" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.5.30 (Siṃhādivarga); Nirukta 3.20"
    },
    related: ["pakshin", "megha", "nritya", "sarpa", "krishna"]
  },
  {
    id: "kokila",
    deva: "कोकिलः",
    iast: "kokilaḥ",
    stem: "kokila",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["cuckoo", "koel songbird", "harbinger of spring"],
    phoneticAliases: ["kokila", "pika", "parabhrita", "vanapriya", "anyapushta", "cuckoo", "koel"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "कुकति आदत्ते चित्तं मधुरस्वरेणेति कोकिलः । वनप्रियः परभृतः कोकिलः पिक इत्यपि ॥",
    lakshanaIast: "kukati ādatte cittaṃ madhurasvareṇeti kokilaḥ | vanapriyaḥ parabhṛtaḥ kokilaḥ pika ity api ||",
    meaningShort: "The Indian cuckoo (`pika`) — the sweet-voiced songbird of mango groves whose `pañcama` melody heralds spring.",
    meaningDeep: "Formed from √kuk ('ādāne' — captivating every listener's heart with liquid song, Uṇādi 1.56 `-ilac`), `kokila` is paired in Amarakośa (Siṃhādivarga 2.5.19) with `vanapriya` ('lover of woodland mango-groves'), `parabhṛta` / `anyapuṣṭa` ('nurtured in the crow's nest until spring reveals its voice'), and `pika`. A beloved Sanskrit *subhāṣita* (`kākaḥ kṛṣṇaḥ pikaḥ kṛṣṇaḥ ko bhedaḥ pikakākayoḥ / vasantasamaye prāpte kākaḥ kākaḥ pikaḥ pikaḥ`) observes that outward appearance may seem alike until testing season reveals true inward voice.",
    padaccheda: [
      { deva: "आदत्ते चित्तम् मधुर-स्वरेण", iast: "ādatte cittam madhura-svareṇa", gloss: "captivates the heart with melodious song (√kuk + -ila)" },
      { deva: "वन-प्रियः परभृतः", iast: "vana-priyaḥ parabhṛtaḥ", gloss: "grove-loving bird, fostered by another" },
      { deva: "कोकिलः पिकः", iast: "kokilaḥ pikaḥ", gloss: "Indian koel, sweet-voiced cuckoo" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.5.19 (Siṃhādivarga)"
    },
    related: ["pakshin", "vasanta", "svara", "kantha", "vana"]
  },
  {
    id: "garuda-bird",
    deva: "सुपर्णः",
    iast: "suparṇaḥ",
    stem: "suparṇa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["eagle", "falcon", "fair-winged celestial bird", "king of birds"],
    phoneticAliases: ["suparna", "garuda", "vainateya", "shyena", "tarkshya", "khageshvara", "eagle", "falcon"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "शोभने पर्णे पक्षौ यस्य स सुपर्णः । गरुत्मान् गरुडस्तार्क्ष्यो वैनतेयः खगेश्वरः श्येनः पत्री च ॥",
    lakshanaIast: "śobhane parṇe pakṣau yasya sa suparṇaḥ | garutmān garuḍas tārkṣyo vainateyaḥ khageśvaraḥ śyenaḥ patrī ca ||",
    meaningShort: "The fair-winged eagle or falcon (`suparṇa` / `śyena`) — soaring sovereign of the skies and, in supreme personification, Bhagavān Viṣṇu's mount Garuḍa.",
    meaningDeep: "Yāska (Nirukta 4.3: `suparṇāḥ supatanāḥ`) explains `suparṇa` as possessing mighty, graceful pinions (`śobhana-parṇa`) that glide effortlessly through high heaven, alongside `śyena` (the swift falcon, AK 2.5.15 `śyenaḥ śaśādanaḥ patrī`). In Svargavarga (1.1.29) and Bhagavadgītā 10.30 (`vainateyaś ca pakṣiṇām`), `Suparṇa` / `Garuḍa` (`garudbhyāṃ uḍḍīyate`, 'soaring on Vedic wings') is revered as the lord of all winged beings (`khageśvara`), whose wings are the `Bṛhad` and `Rathantara` Sāmans bearing Lord Nārāyaṇa.",
    padaccheda: [
      { deva: "शोभने पर्णे यस्य सः सुपर्णः", iast: "śobhane parṇe yasya saḥ suparṇaḥ", gloss: "endowed with resplendent, mighty wings (`su-parṇa`)" },
      { deva: "गरुत्मान् गरुडः वैनतेयः", iast: "garutmān garuḍaḥ vainateyaḥ", gloss: "wing-mighty Garuḍa, son of Vinatā" },
      { deva: "खग-ईश्वरः श्येनः", iast: "khaga-īśvaraḥ śyenaḥ", gloss: "sovereign of birds, swift eagle/falcon" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Bhagavadgītā",
      granthaDeva: "निरुक्तम् · अमरकोशः · भगवद्गीता",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 4.3; AK 1.1.29, 2.5.15; BG 10.30"
    },
    related: ["pakshin", "parna", "akasha", "sarpa", "vishnu"]
  },
  {
    id: "bhramara",
    deva: "भ्रमरः",
    iast: "bhramaraḥ",
    stem: "bhramara",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["bee", "bumblebee", "honey-maker"],
    phoneticAliases: ["bhramara", "ali", "madhukara", "madhupa", "bhringa", "shatpada", "dvirepha", "bee"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "भ्रमति पुष्पेषु रसग्रहणाय इति भ्रमरः । द्विरेफपुष्पलिड्भृङ्गषट्पदभ्रमरालयः ॥",
    lakshanaIast: "bhramati puṣpeṣu rasagrahaṇāya iti bhramaraḥ | dvirephapuṣpaliḍbhṛṅgaṣaṭpadabhramarālayaḥ ||",
    meaningShort: "The bee — the humming six-footed pollinator that hovers from blossom to blossom gathering pure floral essence.",
    meaningDeep: "Derived from √bhramu ('anavasthāne' — hovering in circles around fragrant lotuses and blossoms; Uṇādi 3.131 `-arac`), `bhramara` inspires one of Amarakośa's most ingenious lines (Siṃhādivarga 2.5.29): `dvirepha` ('having two `r`-sounds in its name `bh-r-ama-r-a`'), `puṣpalih` ('flower-sipper'), `bhṛṅga`, `ṣaṭpada` ('six-footed'), `madhukara` ('honey-maker'), `madhupa`, and `ali`. In Bhāgavata Purāṇa (*Bhramara-gītā*) and Madhvācārya's *ekaniṣṭhā* ideal, the `ṣaṭpada` models the wise seeker (`sāragrāhī`) who extracts pure spiritual nectar from vast śāstra without bruising the blossom.",
    padaccheda: [
      { deva: "भ्रमति पुष्पेषु इति भ्रमरः", iast: "bhramati puṣpeṣu iti bhramaraḥ", gloss: "circles and hovers among blossoms for nectar (√bhram + -ara)" },
      { deva: "द्विरेफ-पुष्पलिट्-भृङ्गाः", iast: "dvirepha-puṣpaliṭ-bhṛṅgāḥ", gloss: "two-`ra`-named, blossom-sipper, humming bee" },
      { deva: "षट्पद-भ्रमर-अलयः", iast: "ṣaṭpada-bhramara-alayaḥ", gloss: "six-footed insect, `bhramara`, and `ali`" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.5.29 (Siṃhādivarga)"
    },
    related: ["pushpa", "padma", "madhu", "renu", "vasanta"]
  },
  {
    id: "sarpa",
    deva: "सर्पः",
    iast: "sarpaḥ",
    stem: "sarpa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["serpent", "snake", "cobra"],
    phoneticAliases: ["sarpa", "ahi", "bhujaga", "bhujanga", "uraga", "pannaga", "phanin", "naga-snake", "serpent", "snake"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "सर्पति वक्रगतिना गच्छति इति सर्पः । सर्पः पृदाकुर्भुजगो भुजङ्गोऽहिर्भुजङ्गमः ॥",
    lakshanaIast: "sarpati vakragatinā gacchati iti sarpaḥ | sarpaḥ pṛdākur bhujago bhujaṅgo 'hir bhujaṅgamaḥ ||",
    meaningShort: "A serpent or snake — a limbless reptile that glides sinuously upon its chest and perceives vibrations through its eyes.",
    meaningDeep: "Derived directly from √sṛpḷ ('gatau' — `sarpati`, to glide sinuously, cognate with Latin *serpēns* and English *serpent*), `sarpa` fills Amarakośa's Bhogivarga (1.8.4–7) with anatomically vivid names: `ahi`, `bhujaṅga` / `bhujaga` ('moving in curves'), `uraga` ('gliding on its breast', `urasā gacchati`), `pannaga` ('not walking on feet', `padbhyāṃ na gacchati`), `phaṇin` ('hooded'), `pavanasana` ('feeding on air'), and `cakṣuḥśravas` ('hearing vibrations through its unblinking eyes'). In Vedāntic epistemology, mistaking a coiled rope in dim light for a snake (`rajju-sarpa`) is the classic textbook case of perceptual error (`viparyaya`).",
    padaccheda: [
      { deva: "सर्पति इति सर्पः", iast: "sarpati iti sarpaḥ", gloss: "glides sinuously across the ground (√sṛp + -a)" },
      { deva: "भुजगः भुजङ्गः अहिः", iast: "bhujagaḥ bhujaṅgaḥ ahiḥ", gloss: "curve-moving reptile, serpent, `ahi`" },
      { deva: "उरगः पन्नगः", iast: "uragaḥ pannagaḥ", gloss: "breast-glider, footless crawler" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.8.4–6 (Bhogivarga); Nirukta 2.17"
    },
    related: ["garuda-bird", "mayura", "viparyaya", "sankarshana", "pranin"]
  },
  {
    id: "matsya",
    deva: "मत्स्यः",
    iast: "matsyaḥ",
    stem: "matsya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["fish", "aquatic swimmer"],
    phoneticAliases: ["matsya", "mina", "meena", "jhasha", "animisha", "fish"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "मदति मोदते जले इति मत्स्यः । पृथुरोमा झषो मत्स्यो मीनो वैसारिणोऽण्डजः ॥",
    lakshanaIast: "madati modate jale iti matsyaḥ | pṛthuromā jhaṣo matsyo mīno vaisāriṇo 'ṇḍajaḥ ||",
    meaningShort: "A fish — a scaled, unblinking aquatic creature that thrives exclusively within living waters.",
    meaningDeep: "Yāska (Nirukta 6.27) and Uṇādi-sūtra (4.2: `madeḥ syaḥ`) derive `matsya` from √madī ('harṣe' — sporting joyfully in deep waters, `madanti apsu`). Amarakośa (Vārivarga 1.10.17–18) pairs `matsya` with `pṛthuroman` ('broad-scaled'), `jhaṣa` (celebrated in BG 10.31: `jhaṣāṇāṃ makaraś cāsmi`), `mīna`, `vaisāriṇa` ('gliding swiftly'), and `animiṣa` ('unblinking'). Devotional poets invoke `jala-matsya-nyāya` — just as a fish cannot live an instant parted from water, supreme `bhakti` cannot bear forgetfulness of Bhagavān, who Himself assumed the primordial `Matsya-avatāra` to rescue the Vedas.",
    padaccheda: [
      { deva: "मोदते जले इति मत्स्यः", iast: "modate jale iti matsyaḥ", gloss: "sports joyfully within the waters (√mad + -sya)" },
      { deva: "पृथुरोमा झषः", iast: "pṛthuromā jhaṣaḥ", gloss: "scaled swimmer, great fish" },
      { deva: "मत्स्यः मीनः वैसारिणः", iast: "matsyaḥ mīnaḥ vaisāriṇaḥ", gloss: "fish, `mīna`, swift water-glider" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 1.10.17 (Vārivarga); Uṇādi 4.2"
    },
    related: ["jala", "samudra", "nadi", "kurma-animal", "pranin"]
  },
  {
    id: "kurma-animal",
    deva: "कूर्मः",
    iast: "kūrmaḥ",
    stem: "kūrma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["tortoise", "turtle"],
    phoneticAliases: ["kurma", "kacchapa", "kamatha", "tortoise", "turtle"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "सङ्कोचयत्यङ्गानि रक्षणाय इति कूर्मः । कमठः कच्छपः कूर्मः यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः ॥",
    lakshanaIast: "saṅkocayaty aṅgāni rakṣaṇāya iti kūrmaḥ | kamaṭhaḥ kacchapaḥ kūrmaḥ yadā saṃharate cāyaṃ kūrmo 'ṅgānīva sarvaśaḥ ||",
    meaningShort: "A tortoise or turtle — the armored amphibian capable of withdrawing all its limbs cleanly beneath its protective shell.",
    meaningDeep: "Derived via Uṇādi 1.143 (`kṝ-gṝ-śṝ... mak`) from √kṝ ('drawing in or scattering water'), `kūrma` is grouped in Amarakośa (Vārivarga 1.10.23) with `kamaṭha` and `kacchapa` ('dwelling along marshy riverbanks', `kacchaṃ pāti`). Bhagavadgītā 2.58 (`yadā saṃharate cāyaṃ kūrmo 'ṅgānīva sarvaśaḥ, indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā`) immortalizes the tortoise retracting its limbs as the supreme emblem of `pratyāhāra` and steady wisdom, while Bhagavān's `Kūrma-avatāra` bore Mount Mandara unshaken on His shell.",
    padaccheda: [
      { deva: "कमठः कच्छपः कूर्मः", iast: "kamaṭhaḥ kacchapaḥ kūrmaḥ", gloss: "hard-shelled turtle, bank-dweller, tortoise" },
      { deva: "यदा संहरते अङ्गानि", iast: "yadā saṃharate aṅgāni", gloss: "just as a tortoise draws in all its limbs" },
      { deva: "सर्वशः", iast: "sarvaśaḥ", gloss: "completely on every side — model of sense-mastery" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.10.23 (Vārivarga); BG 2.58"
    },
    related: ["matsya", "jala", "samudra", "indriya", "prajna"]
  },
  {
    id: "vanara",
    deva: "वानरः",
    iast: "vānaraḥ",
    stem: "vānara",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["monkey", "ape", "forest-dweller"],
    phoneticAliases: ["vanara", "kapi", "plavanga", "markata", "shakhamriga", "monkey"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "वनं वनफलादिकमस्यास्तीति वानरः वा नर इव इति वा । कपिप्लवङ्गप्लवगशाखामृगवलीमुखाः मर्कटो वानरः कीशः ॥",
    lakshanaIast: "vanaṃ vanaphalādikam asyāstīti vānaraḥ vā nara iva iti vā | kapiplavaṅgaplavagaśākhāmṛgavalīmukhāḥ markaṭo vānaraḥ kīśaḥ ||",
    meaningShort: "A monkey or forest primate — the agile, branch-leaping woodland creature almost human in form and dexterity.",
    meaningDeep: "Classical Sanskrit commentators offer two complementary derivations for `vānara`: (1) from `vana` ('belonging to the forest and thriving on woodland fruits', `vane bhavaḥ`) and (2) `vā naraḥ` ('almost like a man!', reflecting keen observation of primate intelligence and hands). Amarakośa (Siṃhādivarga 2.5.4) lists `kapi` ('ever-tremulous in motion', √kamp), `plavaṅga` / `plavaga` ('bounding from bough to bough'), `śākhāmṛga` ('branch-deer'), `valīmukha`, `markaṭa`, and `vānara` — hallowed in the *Rāmāyaṇa* through Hanumān (`Kapivara`), supreme exemplar of strength, scholarship, and devotion.",
    padaccheda: [
      { deva: "वने भवः वा नरः इव", iast: "vane bhavaḥ vā naraḥ iva", gloss: "forest-dwelling, or strikingly human-like (`vā-nara`)" },
      { deva: "कपि-प्लवङ्ग-शाखामृगाः", iast: "kapi-plavaṅga-śākhāmṛgāḥ", gloss: "nimble ape, bounding leaper, bough-roamer" },
      { deva: "मर्कटः वानरः कीशः", iast: "markaṭaḥ vānaraḥ kīśaḥ", gloss: "monkey, woodland primate" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.5.4 (Siṃhādivarga)"
    },
    related: ["vana", "shakha", "phala", "rama", "prana"]
  },
  {
    id: "shvan",
    deva: "श्वा",
    iast: "śvā",
    stem: "śvan",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["dog", "hound", "faithful guardian"],
    phoneticAliases: ["shvan", "svan", "shva", "kukkura", "sarameya", "shunaka", "dog", "hound"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "श्वयति उत्साहेन गच्छति आशु जिघ्रति वेति श्वा । सारमेयः श्वा कुक्कुरो मृगदंशकः शुनकश्च ॥",
    lakshanaIast: "śvayati utsāhena gacchati āśu jighrati veti śvā | sārameyaḥ śvā kukkuro mṛgadaṃśakaḥ śunakaś ca ||",
    meaningShort: "A dog or hound — the keen-scented, vigilant domestic companion famed for unwavering loyalty.",
    meaningDeep: "Yāska (Nirukta 3.18: `śvā āśuyāyī, śavater vā gatikarmaṇaḥ`) derives `śvan` (nominative `śvā`, weak stem `śun-` by Pāṇini 6.4.133 *śvayuvamaghonām ataddhite*, directly cognate with Greek *kyōn*, Latin *canis*, and English *hound*) from √śvi / √śu ('swift motion and keen scent'). Amarakośa (Vaiśyavarga 2.9.22) records `sārameya` (descendant of the Vedic celestial hound Saramā, RV 10.108), `kukkura`, and `śunaka`. In the climax of the *Mahābhārata* (*Mahāprasthānika Parva*), Dharma himself walks beside Yudhiṣṭhira in the form of a loyal `śvā`, testing steadfast compassion (`ānṛśaṃsya`).",
    padaccheda: [
      { deva: "श्वयति आशु गच्छति इति श्वा", iast: "śvayati āśu gacchati iti śvā", gloss: "bounds swiftly with keen alertness (`śvan`, nom. `śvā`)" },
      { deva: "सारमेयः कुक्कुरः", iast: "sārameyaḥ kukkuraḥ", gloss: "offspring of Vedic Saramā, hound" },
      { deva: "शुनकः", iast: "śunakaḥ", gloss: "faithful dog" }
    ],
    source: {
      grantha: "Nirukta, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "निरुक्तम् · अष्टाध्यायी · अमरकोशः",
      author: "Yāska, Pāṇini & Amarasimha",
      locator: "Nirukta 3.18; Pāṇini 6.4.133; AK 2.9.22"
    },
    related: ["pashu", "nasika", "grama", "dharma", "daya"]
  },
  {
    id: "pipilika",
    deva: "पिपीलिका",
    iast: "pipīlikā",
    stem: "pipīlikā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["ant", "industrious insect"],
    phoneticAliases: ["pipilika", "pipila", "upajihvika", "ant"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "पीलति संहता गच्छति कणशः सञ्चिनोति चेति पिपीलिका । योजनानां सहस्रं तु शनैर्याति पिपीलिका ॥",
    lakshanaIast: "pīlati saṃhatā gacchati kaṇaśaḥ sañcinoti ceti pipīlikā | yojanānāṃ sahasraṃ tu śanair yāti pipīlikā ||",
    meaningShort: "An ant — the minute, tireless social insect celebrated in Sanskrit proverbs for disciplined perseverance.",
    meaningDeep: "Formed by reduplication from √pīl ('moving in orderly files and gathering grain by grain'), `pipīlikā` (`pipīla` m.) represents the humblest scale of embodied consciousness (`ā-brahma-pipīlikā-paryantam` — 'from four-faced Brahmā down to the tiniest ant', a standard Vedāntic phrase affirming that Paramātman indwells every sentient soul without exception). A classic Subhāṣita contrasts the ant with mighty Garuḍa: `gacchan pipīliko yāti yojanānāṃ śatāny api, agacchan vainateyo 'pi padam ekaṃ na gacchati` — steady effort carries even an ant hundreds of leagues, whereas without effort even an eagle moves not a step.",
    padaccheda: [
      { deva: "संहता गच्छति इति पिपीलिका", iast: "saṃhatā gacchati iti pipīlikā", gloss: "marches in disciplined file gathering grain by grain" },
      { deva: "योजनानाम् सहस्रम्", iast: "yojanānām sahasram", gloss: "even a thousand leagues" },
      { deva: "शनैः याति पिपीलिका", iast: "śanaiḥ yāti pipīlikā", gloss: "the persevering ant traverses step by steady step" }
    ],
    source: {
      grantha: "Subhāṣitaratnabhāṇḍāgāra & Amarakośa",
      granthaDeva: "सुभाषितरत्नभाण्डागारम् · अमरकोशः",
      author: "Amarasimha & Classical Subhāṣita",
      locator: "AK 2.5.13; SRB Udyama-prakaraṇa"
    },
    related: ["pranin", "garuda-bird", "udyama", "abhyasa", "bhramara"]
  },
  {
    id: "ashru",
    deva: "अश्रु",
    iast: "aśru",
    stem: "aśru",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["tear", "teardrop", "weeping"],
    phoneticAliases: ["ashru", "asru", "bashpa", "netrambu", "nayana-jala", "tear"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "अश्नुते नयनं स्यन्दते हर्षशोकाभ्यामिति अश्रु । अश्रु नेत्राम्बु रोदनं चास्त्रमश्रु च बाष्पः ॥",
    lakshanaIast: "aśnute nayanaṃ syandate harṣaśokābhyām iti aśru | aśru netrāmbu rodanaṃ cāsram aśru ca bāṣpaḥ ||",
    meaningShort: "A tear — the clear droplet welling up in the eye from deep sorrow, compassion, or ecstatic joy (`ānandāśru`).",
    meaningDeep: "Derived via Uṇādi 4.102 (`aśnoter uḥ` / √śru 'to flow') from √aś ('filling the eye-brim'), `aśru` is grouped in Amarakośa (Nāṭyavarga 1.7.37 & Manuṣyavarga 2.6.93) with `netrāmbu` ('eye-water'), `asra`, and `bāṣpa` ('warm vaporous tear'). Bharata's *Nāṭyaśāstra* classifies `aśru` among the eight involuntary psychophysical expressions (`aṣṭa-sāttvika-bhāvāḥ`), carefully distinguishing hot tears of grief (`śokaja`) from cool tears of bliss and devotion (`ānandāśru` / `bhakti-bāṣpa`, Bhāgavata 11.14.23).",
    padaccheda: [
      { deva: "अश्नुते नयनम् इति अश्रु", iast: "aśnute nayanam iti aśru", gloss: "wells up across the eye from deep emotion (√aś + -ru)" },
      { deva: "अश्रु नेत्र-अम्बु", iast: "aśru netra-ambu", gloss: "teardrop, water of the eye" },
      { deva: "अस्रम् बाष्पः", iast: "asram bāṣpaḥ", gloss: "flowing tear, warm misting teardrop" }
    ],
    source: {
      grantha: "Amarakośa & Nāṭyaśāstra",
      granthaDeva: "अमरकोशः · नाट्यशास्त्रम्",
      author: "Amarasimha & Bharata Muni",
      locator: "AK 1.7.37, 2.6.93; NŚ 7.93"
    },
    related: ["netra", "smita", "duhkha", "ananda", "bhakti"]
  },
  {
    id: "smita",
    deva: "स्मितम्",
    iast: "smitam",
    stem: "smita",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["smile", "gentle radiance", "serene grin"],
    phoneticAliases: ["smita", "mandahasa", "hasa", "hasita", "mandasmitha", "smile"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "स्मयते ईषद्विकसति वदनमनेनेति स्मितम् । स्मितमीषद्विकासः स्याददन्तप्रकाशनम् मन्दं हसितम् ॥",
    lakshanaIast: "smayate īṣad vikasati vadanam aneneti smitam | smitam īṣadvikāsaḥ syād adantaprakāśanam mandaṃ hasitam ||",
    meaningShort: "A gentle smile — the serene, silent blossoming of the cheeks and eyes without baring the teeth or breaking into loud laughter.",
    meaningDeep: "Derived from √ṣmiṅ ('īṣaddhasane' — to smile softly, cognate with English *smile*) with `-kta` expressing action (`bhāve ktaḥ`, Pāṇini 3.3.114), `smita` stands as the most refined of the six gradations of laughter in Bharata's *Nāṭyaśāstra* (6.52–55) and Amarakośa (Nāṭyavarga 1.7.35: `smita`, `hasita`, `vihasita`, `upahasita`, `apahasita`, `atihasita`). Defined precisely as `īṣad-vikāsa` ('subtle blossoming of the countenance without showing teeth'), `manda-smita` graces Bhagavadgītā 2.10 (`prahasann iva bhārata`), signifying compassionate, unruffled wisdom.",
    padaccheda: [
      { deva: "स्मयते इति स्मितम्", iast: "smayate iti smitam", gloss: "smiles softly and serenely (√smi + -kta)" },
      { deva: "ईषत्-विकासः", iast: "īṣat-vikāsaḥ", gloss: "gentle blossoming of the cheeks and eyes" },
      { deva: "अदन्त-प्रकाशनम् मन्दम् हसितम्", iast: "adanta-prakāśanam mandam hasitam", gloss: "quiet, graceful smile without baring the teeth" }
    ],
    source: {
      grantha: "Nāṭyaśāstra & Amarakośa",
      granthaDeva: "नाट्यशास्त्रम् · अमरकोशः",
      author: "Bharata Muni & Amarasimha",
      locator: "NŚ 6.53; AK 1.7.35 (Nāṭyavarga)"
    },
    related: ["mukha", "ashru", "ananda", "rasa", "saundarya"]
  },
  {
    id: "svara",
    deva: "स्वरः",
    iast: "svaraḥ",
    stem: "svara",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["voice", "musical note", "vowel", "vedic pitch accent"],
    phoneticAliases: ["svara", "swara", "nada-svara", "ac-vowel", "udatta", "shadja", "voice", "note", "vowel"],
    pillar: "kosha",
    domain: "Śarīra & Jīva-Jāti (Body & Beings)",
    lakshanaDeva: "स्वयम् राजते इति स्वरः । अचः स्वराः निषादर्षभगान्धारषड्जमध्यमधैवताः पञ्चमश्चेति सप्त स्वराः ॥",
    lakshanaIast: "svayam rājate iti svaraḥ | acaḥ svarāḥ niṣādarṣabhagāndhāraṣaḍjamadhyamadhaivatāḥ pañcamaśceti sapta svarāḥ ||",
    meaningShort: "A voice, vowel, Vedic pitch accent, or musical note — pure self-resonant tone that shines forth of its own accord and delights the ear.",
    meaningDeep: "Derived from √svṛ ('śabdopatāpayoḥ' — to sound, resonate), Patañjali's *Mahābhāṣya* (on Pāṇini 1.2.29) gives the classic grammatical nirukti: `svayaṃ rājante iti svarāḥ` — vowels (`ac`) shine independently without needing consonant crutches, just as `svara` in Vedic recitation denotes the three sacred pitch accents (`udātta`, `anudātta`, `svarita`). Simultaneously in Amarakośa (Nāṭyavarga 1.7.1) and Śārṅgadeva's *Saṅgītaratnākara* (`svato rañjayati śrotṛcittaṃ sa svara ucyate`), `svara` names the seven musical scale-tones (`sa-ri-ga-ma-pa-dha-ni`) that spontaneously charm the listener's heart.",
    padaccheda: [
      { deva: "स्वयम् राजते इति स्वरः", iast: "svayam rājate iti svaraḥ", gloss: "shines and sounds independently of its own accord (√svṛ)" },
      { deva: "अचः स्वराः", iast: "acaḥ svarāḥ", gloss: "self-sounding vowels (`a, i, u, ṛ...`) and Vedic accents" },
      { deva: "षड्ज-आदयः सप्त स्वराः", iast: "ṣaḍja-ādayaḥ sapta svarāḥ", gloss: "the seven musical notes headed by `ṣaḍja`" }
    ],
    source: {
      grantha: "Mahābhāṣya, Amarakośa & Saṅgītaratnākara",
      granthaDeva: "महाभाष्यम् · अमरकोशः · सङ्गीतरत्नाकरः",
      author: "Patañjali, Amarasimha & Śārṅgadeva",
      locator: "MBh 1.2.29; AK 1.7.1; SR 1.3.24"
    },
    related: ["kantha", "shabda", "sangita", "gita", "varna"]
  }
];
