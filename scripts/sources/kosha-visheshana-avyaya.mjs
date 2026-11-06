// Pillar 4 (Kosha): Pronouns (Sarvanāma), Numerals (Saṅkhyā), Adjectives (Viśeṣaṇa) & Indeclinables (Avyaya)
// Grounded in Pāṇini's Aṣṭādhyāyī & Gaṇapāṭha, Amarasimha's Amarakośa, Yāska's Nirukta, and Upaniṣadic canons.

export const koshaVisheshanaAvyayaEntries = [
  // ============================================================================
  // Domain 1: Sarvanāma & Saṅkhyā (Pronouns & Numerals) — 32 entries
  // ============================================================================
  {
    id: "aham",
    deva: "अहम् (अस्मद्)",
    iast: "aham (asmad)",
    stem: "asmad",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["I", "myself", "we (pl. vayam)"],
    phoneticAliases: ["aham", "asmad", "mam", "mama", "mayi", "maya", "vayam", "me", "i"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "अस्मद उत्तमः । अहमावांवयमित्युत्तमपुरुषवाच्यलिङ्गं सर्वनाम ।",
    lakshanaIast: "asmada uttamaḥ | aham āvāṃ vayam ity uttamapuruṣavācy aliṅgaṃ sarvanāma |",
    meaningShort: "I — the genderless first-person pronoun (stem asmad) designating the speaking subject (uttamapuruṣa).",
    meaningDeep: "Listed in Pāṇini's sarvādi-gaṇa (Aṣṭādhyāyī 1.1.27) and linked to first-person verbal endings by 1.4.107 (asmady uttamaḥ), the stem asmad is identical across all three genders (aliṅga) and replaces asma- with aham in nominative singular (7.2.94 tvāhau sau: aham, āvām, vayam; enclitic mā, nau, naḥ; me, nau, naḥ). Philosophically, genuine self-awareness ('aham', pratyagātman) is distinguished from false egoistic identification with the body (prākṛta-ahaṅkāra).",
    padaccheda: [
      { deva: "अस्मदः उत्तमः", iast: "asmadaḥ uttamaḥ", gloss: "with stem asmad is paired the uttama (1st person) verbal person" },
      { deva: "अहम् आवाम् वयम्", iast: "aham āvām vayam", gloss: "I, we two, we all (nominative sg., du., pl.)" },
      { deva: "अलिङ्गम् सर्वनाम", iast: "aliṅgam sarvanāma", gloss: "gender-invariant pronoun" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.4.107, 1.1.27 & 7.2.94"
    },
    related: ["tvam", "tad-pron", "atman", "ahankara"]
  },
  {
    id: "tvam",
    deva: "त्वम् (युष्मद्)",
    iast: "tvam (yuṣmad)",
    stem: "yuṣmad",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["you", "thou", "you all (pl. yūyam)"],
    phoneticAliases: ["tvam", "twam", "yushmad", "tvaya", "tava", "tvayi", "yuyam", "te", "you"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "युष्मद्युपपदे समानाधिकरणे स्थानिन्यपि मध्यमः । त्वं युवां यूयमित्यलिङ्गं सर्वनाम ।",
    lakshanaIast: "yuṣmady upapade samānādhikaraṇe sthāniny api madhyamaḥ | tvaṃ yuvāṃ yūyam ity aliṅgaṃ sarvanāma |",
    meaningShort: "You (singular) — the genderless second-person pronoun (stem yuṣmad) governing madhyamapuruṣa verbs.",
    meaningDeep: "Paired symmetrically with asmad in Pāṇini's grammar, yuṣmad triggers second-person (madhyamapuruṣa) verbal inflection by Aṣṭādhyāyī 1.4.105 even when unexpressed, and substitutes tva- in nominative singular via 7.2.94 (tvam, yuvām, yūyam; enclitic tvā, vām, vaḥ; te, vām, vaḥ by 8.1.20–23). In polite Sanskrit courtly and scholastic address, third-person bhavān / bhavatī often replaces tvam to convey deference.",
    padaccheda: [
      { deva: "युष्मदि उपपदे", iast: "yuṣmadi upapade", gloss: "when yuṣmad ('you') is the co-referential subject" },
      { deva: "मध्यमः", iast: "madhyamaḥ", gloss: "the 2nd-person verbal ending applies" },
      { deva: "त्वम् युवाम् यूयम्", iast: "tvam yuvām yūyam", gloss: "you, you two, you all (nominative sg., du., pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.4.105, 7.2.94 & 8.1.20"
    },
    related: ["aham", "tad-pron", "idam"]
  },
  {
    id: "tad-pron",
    deva: "सः / सा / तत् (तद्)",
    iast: "saḥ / sā / tat (tad)",
    stem: "tad",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["that", "he", "she", "it", "the aforementioned"],
    phoneticAliases: ["tad", "tat", "sah", "sa", "saa", "te", "tasya", "tasmin", "tena", "that", "he", "she"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "सर्वादीनि सर्वनामानि । तदोः सः सावनन्त्ययोः — सः सा तदिति परोक्षप्रक्रान्तवाचि सर्वनाम ।",
    lakshanaIast: "sarvādīni sarvanāmāni | tadoḥ saḥ sāv anantyayoḥ — saḥ sā tad iti parokṣaprakrāntavāci sarvanāma |",
    meaningShort: "That, he, she, it — the canonical third-person and distal/anaphoric pronoun (stem tad).",
    meaningDeep: "Included in the sarvādi-gaṇa (Aṣṭādhyāyī 1.1.27), tad replaces its initial dental t with s in the masculine and feminine nominative singular by 7.2.106 (tadoḥ saḥ sāv anantyayoḥ → saḥ, sā, tat; saḥ drops visarga before any consonant by 6.1.132 etattadoḥ sulopo'kor anañsamāse hali, e.g., sa gacchati). Semantically tad points to what is distal (parokṣa), previously mentioned (prakrānta), or universally celebrated (prasiddha), and yields the abstract ontological noun tattva ('thatness / reality').",
    padaccheda: [
      { deva: "सर्वादीनि सर्वनामानि", iast: "sarvādīni sarvanāmāni", gloss: "words beginning with sarva are termed sarvanāman" },
      { deva: "सः सा तत्", iast: "saḥ sā tat", gloss: "he, she, that/it (nom. sg. m., f., n.)" },
      { deva: "परोक्ष-प्रक्रान्त-वाचि", iast: "parokṣa-prakrānta-vāci", gloss: "denoting the distal or discourse-established referent" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.27, 7.2.106 & 6.1.132"
    },
    related: ["tattva", "yad", "idam", "etad"]
  },
  {
    id: "idam",
    deva: "अयम् / इयम् / इदम्",
    iast: "ayam / iyam / idam",
    stem: "idam",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["this", "this here", "the perceptible world before one's eyes"],
    phoneticAliases: ["idam", "ayam", "iyam", "ime", "asya", "anena", "asmin", "this"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "इदमोऽन्वादेशेऽशनुदात्तस्तृतीयादौ — अयमियमिदं प्रत्यक्षसन्निहितवस्तुवाचि सर्वनाम ।",
    lakshanaIast: "idamo'nvādeśe'ś anudāttas tṛtīyādau — ayam iyam idaṃ pratyakṣasannihitavastuvāci sarvanāma |",
    meaningShort: "This — the proximal demonstrative pronoun denoting what is directly present before perception (pratyakṣa).",
    meaningDeep: "Governed by an intricate suite of Pāṇinian substitutions in Aṣṭādhyāyī 7.2.108–113 (idamo maḥ, daś ca, hali lopaḥ → m. ayam, imau, ime; f. iyam, ime, imāḥ; n. idam, ime, imāni; inst. anena/anayā, gen. asya/asyāḥ), idam contrasts with distal adas/tad by indicating what is palpably present here and now (idam viśvam, 'this manifest universe', as in pūrṇam adaḥ pūrṇam idam).",
    padaccheda: [
      { deva: "अयम् इयम् इदम्", iast: "ayam iyam idam", gloss: "this (nom. sg. m., f., n.)" },
      { deva: "प्रत्यक्ष-सन्निहित-वस्तु-वाचि", iast: "pratyakṣa-sannihita-vastu-vāci", gloss: "signifying an object directly proximate to the senses" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.2.108–113 & 2.4.32"
    },
    related: ["etad", "tad-pron", "atra", "purna"]
  },
  {
    id: "etad",
    deva: "एषः / एषा / एतत् (एतद्)",
    iast: "eṣaḥ / eṣā / etat (etad)",
    stem: "etad",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["this very", "this right here", "this close at hand"],
    phoneticAliases: ["etad", "etat", "eshah", "esha", "eshaa", "ete", "etasya", "etena", "this near"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "एतदः समीपतरवर्तिनि निर्देशः — एष एषा एतदिति अत्यन्तसन्निहितवाचि सर्वनाम ।",
    lakshanaIast: "etadaḥ samīpataravartini nirdeśaḥ — eṣa eṣā etad iti atyantasannihitavāci sarvanāma |",
    meaningShort: "This right here — the most immediate proximal demonstrative pronoun (atyanta-sannihita).",
    meaningDeep: "Classical Sanskrit calibrates four degrees of demonstrative distance in a celebrated traditional kārikā: idam astu sannikṛṣṭe samīpataravarti caitado rūpam | adasas tu viprakṛṣṭe tad iti parokṣe vijānīyāt || ('idam is for the near, etad for what is closer still, adas for the remote, and tad for the unseen/anaphoric'). Like saḥ, masculine eṣaḥ converts s to retroflex ṣ (8.3.59 ādeśapratyayayoḥ) and drops its visarga before consonants (6.1.132: eṣa dharmaḥ).",
    padaccheda: [
      { deva: "एषः एषा एतत्", iast: "eṣaḥ eṣā etat", gloss: "this right here (nom. sg. m., f., n.)" },
      { deva: "समीपतर-वर्तिनि", iast: "samīpatara-vartini", gloss: "referring to what stands most immediately at hand" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Siddhāntakaumudī",
      granthaDeva: "अष्टाध्यायी · सिद्धान्तकौमुदी",
      author: "Pāṇini / Bhaṭṭoji Dīkṣita",
      locator: "Aṣṭādhyāyī 1.1.27, 6.1.132 & 2.4.33"
    },
    related: ["idam", "tad-pron", "atra"]
  },
  {
    id: "yad",
    deva: "यः / या / यत् (यद्)",
    iast: "yaḥ / yā / yat (yad)",
    stem: "yad",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["who", "which", "that which (relative pronoun)"],
    phoneticAliases: ["yad", "yat", "yah", "ya", "yaa", "ye", "yasya", "yena", "yasmin", "who", "which"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "यत्तदोर्नित्यसम्बन्धः — यो या यदिति सापेक्षसम्बन्धवाचि सर्वनाम ।",
    lakshanaIast: "yattador nityasambandhaḥ — yo yā yad iti sāpekṣasambandhavāci sarvanāma |",
    meaningShort: "Who, which, whatever — the relative pronoun (stem yad) standing in invariable correlation with tad.",
    meaningDeep: "Sanskrit syntax builds its characteristic philosophical definitions (lakṣaṇa-vākyas) and poetic maxims on the symmetrical yad–tad correlative pair (yattador nityasambandhaḥ: e.g., yato vā imāni bhūtāni jāyante... tad brahma, Taittirīya 3.1). Declined strictly on the sarvanāma paradigm (yaḥ, yā, yat; inst. yena, dat. yasmai, loc. yasmin), its neuter yat also functions as a clause-introducing conjunction ('that / inasmuch as').",
    padaccheda: [
      { deva: "यत्-तदोः नित्य-सम्बन्धः", iast: "yat-tadoḥ nitya-sambandhaḥ", gloss: "invariable syntactic correlation between relative yad and demonstrative tad" },
      { deva: "यः या यत्", iast: "yaḥ yā yat", gloss: "who, which, that which (nom. sg. m., f., n.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Mahābhāṣya",
      granthaDeva: "अष्टाध्यायी · महाभाष्यम्",
      author: "Pāṇini / Patañjali",
      locator: "Aṣṭādhyāyī 1.1.27 & 8.1.66 (yadāgamās tadguṇībhūtāḥ)"
    },
    related: ["tad-pron", "yatha", "yada", "yatah"]
  },
  {
    id: "kim",
    deva: "कः / का / किम्",
    iast: "kaḥ / kā / kim",
    stem: "kim",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["who?", "what?", "which?"],
    phoneticAliases: ["kim", "kah", "ka", "kaa", "ke", "kasya", "kena", "kasmin", "kasmai", "who", "what"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "किमः कः — कः का किमिति प्रश्नार्थकं सर्वनाम ।",
    lakshanaIast: "kimaḥ kaḥ — kaḥ kā kim iti praśnārthakaṃ sarvanāma |",
    meaningShort: "Who? What? Which? — the interrogative pronoun (stem kim) opening philosophical inquiry.",
    meaningDeep: "By Aṣṭādhyāyī 7.2.103 (kimaḥ kaḥ), stem kim replaces itself with ka- before all case endings except neuter nom./acc. sg. kim (7.2.105 kvāti → m. kaḥ, f. kā, n. kim; inst. kena — giving its name to the Kenopaniṣad: Kena iṣitaṃ patati preṣitaṃ manaḥ). Followed by enclitic particles cit, cana, or api, interrogative kim transforms into an indefinite pronoun (kaścit, kiñcana, ko'pi — 'someone, something, ineffable').",
    padaccheda: [
      { deva: "किमः कः", iast: "kimaḥ kaḥ", gloss: "ka- substitutes for stem kim before case affixes (Aṣṭ. 7.2.103)" },
      { deva: "कः का किम्", iast: "kaḥ kā kim", gloss: "who? which? what? (nom. sg. m., f., n.)" },
      { deva: "प्रश्न-अर्थकम्", iast: "praśna-arthakam", gloss: "expressing interrogation / inquiry" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.2.103 & 1.1.27"
    },
    related: ["kada", "kutra", "katham", "kimartham", "dhatu-prach"]
  },
  {
    id: "sva-pron",
    deva: "स्वः / स्वा / स्वम्",
    iast: "svaḥ / svā / svam",
    stem: "sva",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["one's own", "self", "kinsman", "property (n.)"],
    phoneticAliases: ["sva", "swa", "svam", "svah", "sviya", "svakIya", "own", "self"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "स्वमज्ञातिधनाख्यायाम् । ज्ञातावात्मनि स्वं त्रिषु आत्मीये स्वोऽस्त्रियां धने ॥",
    lakshanaIast: "svam ajñātidhanākhyāyām | jñātāv ātmani svaṃ triṣu ātmīye svo'striyāṃ dhane ||",
    meaningShort: "One's own, oneself — a reflexive sarvanāma when denoting 'one's own / self' (outside kinsmen or wealth).",
    meaningDeep: "Pāṇini's Aṣṭādhyāyī 1.1.35 (svam ajñātidhanākhyāyām) and Amarakośa 3.3.211 jointly clarify sva's polysemy: when meaning 'one's own / self' (ātmīya / ātman), sva is a true sarvanāman (nom. pl. sve, though optionally svāḥ in ablative/locative/nom. pl. per 1.1.36); when meaning 'kinsman' (jñāti, masc.) or 'wealth/property' (dhana, m./n.), it declines like an ordinary noun (svāḥ). It anchors philosophical compounds such as svatantra ('independent'), svabhāva ('intrinsic nature'), and svatahprāmāṇya.",
    padaccheda: [
      { deva: "स्वम्", iast: "svam", gloss: "the word sva ('own / self')" },
      { deva: "अज्ञाति-धन-आख्यायाम्", iast: "ajñāti-dhana-ākhyāyām", gloss: "is a sarvanāman except when denoting kinsmen or wealth" },
      { deva: "आत्मनि आत्मीये त्रिषु", iast: "ātmani ātmīye triṣu", gloss: "in all three genders for 'self' and 'one's own'" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.35; Amarakośa 3.3.211"
    },
    related: ["svatantra", "svatahpramanya", "atman", "anya"]
  },
  {
    id: "sarva",
    deva: "सर्वः / सर्वा / सर्वम्",
    iast: "sarvaḥ / sarvā / sarvam",
    stem: "sarva",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["all", "every", "whole", "entire", "complete"],
    phoneticAliases: ["sarva", "sarvam", "sarvah", "sarve", "sarvesham", "all", "every", "whole"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "सर्वादीनि सर्वनामानि । विश्वमशेषं कृत्स्नं समस्तं निखिलमखिलं सर्वम् ॥",
    lakshanaIast: "sarvādīni sarvanāmāni | viśvam aśeṣaṃ kṛtsnaṃ samastaṃ nikhilam akhilaṃ sarvam ||",
    meaningShort: "All, every, entire — the headword of Pāṇini's sarvādi-gaṇa that gives all pronouns the name sarvanāman.",
    meaningDeep: "Standing first in the Gaṇapāṭha list under Aṣṭādhyāyī 1.1.27 (sarvādīni sarvanāmāni: sarva, viśva, ubha, ubhaya...), sarva lends its very name to the grammatical class sarvanāman ('name applicable to all') and models pronominal inflection (nom. pl. sarve, dat. sg. sarvasmai, abl. sarvasmāt, gen. pl. sarveṣām, loc. sarvasmin). In Viṣṇusahasranāma (verse 4, sarvaḥ śarvaḥ śivaḥ sthāṇuḥ) and Sarvamūla literature, Sarva is also a supreme name of Viṣṇu as the plenary source and knower of all (sarvajña).",
    padaccheda: [
      { deva: "सर्वादीनि", iast: "sarvādīni", gloss: "the lexical group headed by sarva" },
      { deva: "सर्व-नामानि", iast: "sarva-nāmāni", gloss: "bear the technical designation sarvanāman ('pronoun')" },
      { deva: "अशेषम् निखिलम् सर्वम्", iast: "aśeṣam nikhilam sarvam", gloss: "without remainder, entire, all (Amarakośa synonyms)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.27; Amarakośa 3.1.65"
    },
    related: ["sarvatra", "sada", "purna", "vishva"]
  },
  {
    id: "anya",
    deva: "अन्यः / अन्या / अन्यत्",
    iast: "anyaḥ / anyā / anyat",
    stem: "anya",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["other", "another", "different from (+ ablative)"],
    phoneticAliases: ["anya", "anyat", "anyah", "anye", "itara", "apara", "other", "another"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "अन्यतरस्यामितरदपराम्योन्यत् — अन्य आरादितरर्तेदिक्शब्दाञ्चूत्तरपदाजाहियुक्ते पञ्चमी ।",
    lakshanaIast: "anyatarasyām itarad aparāmyo'nyat — anyārāditarartedikśabdāñcūttarapadājāhiyukte pañcamī |",
    meaningShort: "Other, another, distinct — a pronominal stem taking neuter -at (anyat) and governing the ablative of difference.",
    meaningDeep: "As a core member of the sarvādi-gaṇa (taking neuter nom./acc. sg. -add / -at → anyat by Aṣṭādhyāyī 7.1.25 adḍ datarādibhyaḥ pañcabhyaḥ), anya requires the ablative case for that from which something differs by 2.3.29 (anyārāditararte...: kṛṣṇād anyaḥ, 'other than Kṛṣṇa'). Reduplicated as anyonya (mutual, 'one another') and negated as ananya ('undivided / devoted to none other', ananyāś cintayanto mām, Gītā 9.22), it is vital to Nyāya-Vedānta analyses of bheda (anyonyābhāva).",
    padaccheda: [
      { deva: "अन्यः अन्या अन्यत्", iast: "anyaḥ anyā anyat", gloss: "other, distinct (nom. sg. m., f., n. with -at)" },
      { deva: "अन्य-युक्ते पञ्चमी", iast: "anya-yukte pañcamī", gloss: "takes the fifth (ablative) case of the point of difference" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.27, 7.1.25 & 2.3.29; Amarakośa 3.1.82"
    },
    related: ["bheda", "sva-pron", "samana"]
  },
  {
    id: "ubha",
    deva: "उभौ / उभे (उभ)",
    iast: "ubhau / ubhe (ubha)",
    stem: "ubha",
    pos: "sarvanāma (pron.)",
    englishGlosses: ["both", "the two together"],
    phoneticAliases: ["ubha", "ubhau", "ubhe", "ubhaya", "both"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "उभशब्दो नित्यं द्विवचनान्तः — उभौ उभे उभाभ्यामुभयोरिति द्वित्वनियतं सर्वनाम ।",
    lakshanaIast: "ubhaśabdo nityaṃ dvivacanāntaḥ — ubhau ubhe ubhābhyām ubhayor iti dvitvaniyataṃ sarvanāma |",
    meaningShort: "Both — a sarvanāma inflected exclusively in the dual number (nitya-dvivacanānta).",
    meaningDeep: "Grammarians highlight a crisp morphological contrast between ubha and its derivative ubhaya (via tayap → ayac, Aṣṭādhyāyī 5.2.44 ubhād udātto nityaṃ): ubha occurs solely in the dual across all cases (m. ubhau, f./n. ubhe, inst./dat./abl. ubhābhyām, gen./loc. ubhayoḥ) and never in compounds, whereas ubhaya ('twofold / possessing two sides', as in ubhayapadī verb) occurs in singular and plural and freely enters samāsa.",
    padaccheda: [
      { deva: "उभ-शब्दः", iast: "ubha-śabdaḥ", gloss: "the pronominal stem ubha ('both')" },
      { deva: "नित्यम् द्विवचन-अन्तः", iast: "nityam dvivacana-antaḥ", gloss: "invariably inflected in the dual number" },
      { deva: "उभौ / उभे", iast: "ubhau / ubhe", gloss: "both (nom./acc. dual m. / f.&n.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Siddhāntakaumudī",
      granthaDeva: "अष्टाध्यायी · सिद्धान्तकौमुदी",
      author: "Pāṇini / Bhaṭṭoji Dīkṣita",
      locator: "Aṣṭādhyāyī 1.1.27 & 5.2.44"
    },
    related: ["dvi", "sarva", "eka"]
  },
  {
    id: "shunya",
    deva: "शून्यम्",
    iast: "śūnyam",
    stem: "śūnya",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["zero", "cypher", "empty", "void", "vacant"],
    phoneticAliases: ["shunya", "shoonya", "sunya", "bindu", "kha", "zero", "void"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "शून्यं तु वशिताभावस्तुच्छरिक्तकखानि च । अङ्कानां स्थानमानार्थो बिन्दुः शून्यमिति स्मृतः ॥",
    lakshanaIast: "śūnyaṃ tu vaśitābhāvas tucchariktakakhāni ca | aṅkānāṃ sthānamānārtho binduḥ śūnyam iti smṛtaḥ ||",
    meaningShort: "Zero, empty, or void — India's revolutionary place-value numeral (kha / bindu / śūnya) and philosophical term for vacuity.",
    meaningDeep: "From Piṅgala's Chandaḥśāstra (8.29 rūpe śūnyam, using zero in binary prosodic combinatorics) through Āryabhaṭa and Brahmagupta's Brāhmasphuṭasiddhānta (which first codified arithmetic rules for śūnya alongside positive dhanam and negative ṛṇam), Sanskrit śūnya transformed world mathematics. In philosophy, Mādhyamika Buddhism elevated śūnyatā to ultimate emptiness, which realist schools like Nyāya and Madhvācārya's Tattvavāda rigorously critique (na ca śūnyam api pramāṇābhāvāt).",
    padaccheda: [
      { deva: "शून्यम्", iast: "śūnyam", gloss: "zero, void, empty" },
      { deva: "तुच्छ-रिक्तक-खानि", iast: "tuccha-riktaka-khāni", gloss: "vacant, empty, space/zero (Amarakośa synonyms)" },
      { deva: "स्थान-मान-अर्थः बिन्दुः", iast: "sthāna-māna-arthaḥ binduḥ", gloss: "the dot/circle marking decimal place-value" }
    ],
    source: {
      grantha: "Amarakośa, Chandaḥśāstra & Brāhmasphuṭasiddhānta",
      granthaDeva: "अमरकोशः · छन्दःशास्त्रम् · ब्राह्मस्फुटसिद्धान्तः",
      author: "Amarasimha / Piṅgala / Brahmagupta",
      locator: "Amarakośa 3.1.56; Chandaḥśāstra 8.29; BSS 18.30–35"
    },
    related: ["eka", "purna", "abhava", "asat"]
  },
  {
    id: "eka",
    deva: "एकः / एका / एकम्",
    iast: "ekaḥ / ekā / ekam",
    stem: "eka",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["one", "single", "unique", "peerless", "some (in pl. eke)"],
    phoneticAliases: ["eka", "ekam", "ekah", "ekaika", "advitiya", "one", "single", "unique"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "एकोऽन्यार्थे प्रधानार्थे प्रथमे केवले तथा । साधारणेऽसहाये च संख्यायां च प्रयुज्यते ॥",
    lakshanaIast: "eko'nyārthe pradhānārthe prathame kevale tathā | sādhāraṇe'sahāye ca saṅkhyāyāṃ ca prayujyate ||",
    meaningShort: "One, single, supreme, or peerless — simultaneously a sarvanāma and the foundational cardinal numeral.",
    meaningDeep: "Uniquely straddling both sarvanāman (included in sarvādi-gaṇa, hence plural eke = 'some authorities hold') and saṅkhyā ('numeral'), eka is celebrated in classical lexicography (cf. Amarakośa 3.3.1 & Mallinātha) for its rich polysemy: cardinal 'one' (saṅkhyā), 'peerless / preeminent' (pradhāna — eko nārāyaṇa āsīt, ekam sad viprā bahudhā vadanti ṚV 1.164.46), 'alone / solitary' (kevala / asahāya), and 'another / one of two' (anyārtha).",
    padaccheda: [
      { deva: "एकः", iast: "ekaḥ", gloss: "the word eka (sarvanāman & saṅkhyā)" },
      { deva: "प्रधान-अर्थे", iast: "pradhāna-arthe", gloss: "in the sense of preeminent / peerless" },
      { deva: "केवले संख्यायाम् च", iast: "kevale saṅkhyāyām ca", gloss: "solitary, and the numeral one" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.27; Amarakośa 3.3.1"
    },
    related: ["prathama", "dvi", "ekada", "shunya"]
  },
  {
    id: "dvi",
    deva: "द्वौ / द्वे (द्वि)",
    iast: "dvau / dve (dvi)",
    stem: "dvi",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["two", "a pair", "couple"],
    phoneticAliases: ["dvi", "dwi", "dvau", "dve", "dvaya", "yugma", "two"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "त्यदादीनामः — द्वौ द्वे द्वाभ्यां द्वयोरिति नित्यद्विवचनान्ता संख्या ।",
    lakshanaIast: "tyadādīnām aḥ — dvau dve dvābhyāṃ dvayor iti nityadvivacanāntā saṅkhyā |",
    meaningShort: "Two — a numeral stem inflected solely in the dual across the three genders (m. dvau, f./n. dve).",
    meaningDeep: "Included in Pāṇini's tyadādi subgroup so that its final -i becomes -a before case endings by Aṣṭādhyāyī 7.2.102 (tyadādīnām aḥ → dva + au = dvau in masc.; dva + ī = dve in fem. and neut.; inst./dat./abl. dvābhyām, gen./loc. dvayoḥ), stem dvi retains its bare form in compounds (dvija 'twice-born', dvivacana 'dual number', dvaita, dvandva). Its derivative dvaya denotes a dyad or pair (e.g., tattvadvaya: svatantra and paratantra).",
    padaccheda: [
      { deva: "द्वौ / द्वे", iast: "dvau / dve", gloss: "two (nom./acc. dual masc. / fem. & neut.)" },
      { deva: "नित्य-द्विवचन-अन्ता संख्या", iast: "nitya-dvivacana-antā saṅkhyā", gloss: "numeral inherently restricted to the dual number" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.2.102 (tyadādīnām aḥ)"
    },
    related: ["dvitiya", "ubha", "eka", "tri"]
  },
  {
    id: "tri",
    deva: "त्रयः / तिस्रः / त्रीणि (त्रि)",
    iast: "trayaḥ / tisraḥ / trīṇi (tri)",
    stem: "tri",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["three", "triad"],
    phoneticAliases: ["tri", "trayah", "tisrah", "trini", "traya", "tritaya", "three"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "त्रिचतुरोः स्त्रियां तिसृचतसृ — त्रयस्तिस्रस्त्रीणीति त्रिलिङ्गा बहुवचनान्ता संख्या ।",
    lakshanaIast: "tricaturaḥ striyāṃ tisṛcatasṛ — trayas tisras trīṇīti triliṅgā bahuvacanāntā saṅkhyā |",
    meaningShort: "Three — inflected solely in the plural with distinct masculine (trayaḥ), feminine (tisraḥ), and neuter (trīṇi) stems.",
    meaningDeep: "From one through four, Sanskrit numerals distinguish all three genders; for tri, Pāṇini's Aṣṭādhyāyī 7.2.99 (tricaturaḥ striyāṃ tisṛcatasṛ) substitutes the archaic Indo-European feminine stem tisṛ- (nom./acc. tisraḥ, gen. tisṛṇām), while masculine forms trayaḥ (gen. trayāṇām by 7.1.53 trer trayaḥ) and neuter forms trīṇi. Triads pervade Sanskrit thought: the three Vedas (trayī), three guṇas (guṇatraya), three prasthānas, and Trivikrama's three cosmic strides.",
    padaccheda: [
      { deva: "त्रयः", iast: "trayaḥ", gloss: "three (masculine nom. pl.; gen. trayāṇām)" },
      { deva: "तिस्रः", iast: "tisraḥ", gloss: "three (feminine nom./acc. pl. via tisṛ- substitution)" },
      { deva: "त्रीणि", iast: "trīṇi", gloss: "three (neuter nom./acc. pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.2.99 & 7.1.53"
    },
    related: ["tritiya", "gunatraya", "trivikrama", "catur"]
  },
  {
    id: "catur",
    deva: "चत्वारः / चतस्रः / चत्वारि (चतुर्)",
    iast: "catvāraḥ / catasraḥ / catvāri (catur)",
    stem: "catur",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["four", "quartet", "tetrad"],
    phoneticAliases: ["catur", "chatur", "catvarah", "chatvarah", "catasrah", "catvari", "chatvari", "four"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "चतुरनडुहोरामुदात्तः — चत्वारश्चतस्रश्चत्वारीति त्रिलिङ्गा बहुवचनान्ता संख्या ।",
    lakshanaIast: "caturanaḍuhor ām udāttaḥ — catvāraś catasraś catvārīti triliṅgā bahuvacanāntā saṅkhyā |",
    meaningShort: "Four — the highest gender-distinguishing plural numeral (m. catvāraḥ, f. catasraḥ, n. catvāri).",
    meaningDeep: "By Aṣṭādhyāyī 7.1.98 (caturanaḍuhor ām udāttaḥ) and 7.2.99 (tricaturaḥ striyāṃ tisṛcatasṛ), stem catur inserts ā before strong endings in masculine catvāraḥ (acc. caturaḥ, gen. caturṇām) and neuter catvāri, while substituting catasṛ- in feminine catasraḥ (gen. catasṛṇām). Canonical tetrads include the four Vedas (caturveda), four puruṣārthas (dharma, artha, kāma, mokṣa), four āśramas, and four states of consciousness ending in turīya.",
    padaccheda: [
      { deva: "चत्वारः", iast: "catvāraḥ", gloss: "four (masculine nom. pl. via ām-augment)" },
      { deva: "चतस्रः", iast: "catasraḥ", gloss: "four (feminine nom./acc. pl. via catasṛ-)" },
      { deva: "चत्वारि", iast: "catvāri", gloss: "four (neuter nom./acc. pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.1.98 & 7.2.99"
    },
    related: ["tri", "panca", "turiya"]
  },
  {
    id: "panca",
    deva: "पञ्च (पञ्चन्)",
    iast: "pañca (pañcan)",
    stem: "pañcan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["five", "pentad"],
    phoneticAliases: ["panca", "pancha", "pancan", "panchan", "five"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "ष्णान्ता षट् · षड्भ्यो लुक् — पञ्चेति त्रिषु लिङ्गेषु समानरूपा बहुवचनान्ता संख्या ।",
    lakshanaIast: "ṣṇāntā ṣaṭ · ṣaḍbhyo luk — pañceti triṣu liṅgeṣu samānarūpā bahuvacanāntā saṅkhyā |",
    meaningShort: "Five — heading the gender-invariant numerals from five onward that take Pāṇini's technical name ṣaṭ.",
    meaningDeep: "By Aṣṭādhyāyī 1.1.24 (ṣṇāntā ṣaṭ), numerals ending in ṣ or n (pañcan, ṣaṣ, saptan, aṣṭan, navan, daśan) receive the technical designation ṣaṭ, causing total elision (luk) of nom./acc. plural endings by 7.1.22 (ṣaḍbhyo luk) and deletion of final n by 8.2.7 (nalopaḥ prātipadikāntasya) — so pañca is identical across masculine, feminine, and neuter (inst. pañcabhiḥ, gen. pañcānām, loc. pañcasu). Pentads structure Indian cosmology and ontology: pañcabhūta, pañcaprāṇa, and Madhvācārya's pañcabheda.",
    padaccheda: [
      { deva: "ष्णान्ता षट्", iast: "ṣṇāntā ṣaṭ", gloss: "numerals ending in ṣ or n are termed ṣaṭ (Aṣṭ. 1.1.24)" },
      { deva: "षड्भ्यः लुक्", iast: "ṣaḍbhyaḥ luk", gloss: "nom./acc. endings are elided after ṣaṭ stems (Aṣṭ. 7.1.22)" },
      { deva: "पञ्च", iast: "pañca", gloss: "five (invariant across all three genders)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.24, 7.1.22 & 8.2.7"
    },
    related: ["pancabheda", "pancabhuta", "catur", "shash"]
  },
  {
    id: "shash",
    deva: "षट् (षष्)",
    iast: "ṣaṭ (ṣaṣ)",
    stem: "ṣaṣ",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["six", "hexad"],
    phoneticAliases: ["shash", "shat", "sat", "shad", "shanmukha", "six"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "ष्णान्ता षट् — षट् षड्भिः षण्णां षट्सु इति त्रिलिङ्गसमा बहुवचनान्ता संख्या ।",
    lakshanaIast: "ṣṇāntā ṣaṭ — ṣaṭ ṣaḍbhiḥ ṣaṇṇāṃ ṣaṭsu iti triliṅgasamā bahuvacanāntā saṅkhyā |",
    meaningShort: "Six — the ṣ-final numeral stem (ṣaṣ) giving its name to Pāṇini's ṣaṭ class.",
    meaningDeep: "With underlying stem ṣaṣ, its nom./acc. plural drops case endings by 7.1.22 (ṣaḍbhyo luk) and converts final ṣ to retroflex stop ṭ/ḍ by 8.2.39 (jhalāṃ jaśo'nte → ṣaṭ / ṣaḍ), while assimilating the genitive plural augment nuṭ to retroflex ṇṇ in ṣaṇṇām (via 7.1.55 ṣaṭcaturbhyaś ca + 8.4.42). Sixfold sets pervade Sanskrit tradition: the six Vedāṅgas (ṣaḍaṅga), six orthodox darśanas, six seasons (ṣaḍṛtu), and six bhagavat-guṇas.",
    padaccheda: [
      { deva: "षट्", iast: "ṣaṭ", gloss: "six (nom./acc. pl. in all genders)" },
      { deva: "षड्भिः / षण्णाम् / षट्सु", iast: "ṣaḍbhiḥ / ṣaṇṇām / ṣaṭsu", gloss: "by six, of six, among six (inst., gen., loc. pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.24, 7.1.22 & 7.1.55"
    },
    related: ["panca", "sapta", "dvadasha"]
  },
  {
    id: "sapta",
    deva: "सप्त (सप्तन्)",
    iast: "sapta (saptan)",
    stem: "saptan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["seven", "heptad"],
    phoneticAliases: ["sapta", "saptan", "saptami", "saptarshi", "seven"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "सप्त सप्तभिः सप्तानां सप्तसु — ष्णान्तषट्संज्ञका त्रिलिङ्गसमा संख्या ।",
    lakshanaIast: "sapta saptabhiḥ saptānāṃ saptasu — ṣṇāntaṣaṭsaṃjñakā triliṅgasamā saṅkhyā |",
    meaningShort: "Seven — the sacred Vedic numeral of the seven seers (saptarṣi), seven meters, and seven musical notes (saptasvara).",
    meaningDeep: "Inflected identically across all three genders as a n-final ṣaṭ numeral (nom./acc. sapta, inst. saptabhiḥ, gen. saptānām, loc. saptasu; ordinal saptama, 'seventh', whence saptamī vibhakti for the locative case), sapta holds special auspiciousness in Vedic and classical literature: the seven ṛṣis (saptarṣayaḥ), seven sacred rivers, seven tongues of Agni, seven svaras of saṅgīta, and seven steps of sacred friendship (saptapadī).",
    padaccheda: [
      { deva: "सप्त", iast: "sapta", gloss: "seven (nom./acc. pl. of stem saptan)" },
      { deva: "सप्तानाम् / सप्तसु", iast: "saptānām / saptasu", gloss: "of seven, in seven (gen., loc. pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.24, 7.1.22 & 6.4.7 (nopadhāyāḥ)"
    },
    related: ["shash", "ashta", "rishi", "agni"]
  },
  {
    id: "ashta",
    deva: "अष्ट / अष्टौ (अष्टन्)",
    iast: "aṣṭa / aṣṭau (aṣṭan)",
    stem: "aṣṭan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["eight", "octad"],
    phoneticAliases: ["ashta", "ashtau", "ashtan", "ashtadhyayi", "ashtanga", "eight"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "अष्टन आ विभक्तौ · अष्टाभ्य औश् — अष्ट अष्टौ वा अष्टाभिरष्टभिरिति द्विविधरूपा संख्या ।",
    lakshanaIast: "aṣṭana ā vibhaktau · aṣṭābhya auś — aṣṭa aṣṭau vā aṣṭābhir aṣṭabhir iti dvividharūpā saṅkhyā |",
    meaningShort: "Eight — uniquely permitting dual stem-alternants (aṣṭa / aṣṭau) and naming Pāṇini's Aṣṭādhyāyī.",
    meaningDeep: "Among ṣaṭ numerals, aṣṭan alone optionally replaces its final n with long ā before case endings by Aṣṭādhyāyī 7.2.84 (aṣṭana ā vibhaktau), which then takes auś in nom./acc. plural by 7.1.21 (aṣṭābhya auś) — yielding parallel classical paradigms across all three genders: aṣṭau / aṣṭa, aṣṭābhiḥ / aṣṭabhiḥ, aṣṭāsu / aṣṭasu (gen. always aṣṭānām). Eightfold architectures include Pāṇini's Aṣṭādhyāyī ('Eight Chapters'), Patañjali's aṣṭāṅga-yoga, and the eight guardians of the directions (aṣṭadikpālāḥ).",
    padaccheda: [
      { deva: "अष्ट / अष्टौ", iast: "aṣṭa / aṣṭau", gloss: "eight (both valid nom./acc. pl. forms in all genders)" },
      { deva: "अष्टाभिः / अष्टभिः", iast: "aṣṭābhiḥ / aṣṭabhiḥ", gloss: "with eight (optional ā-stem in oblique cases)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 7.2.84 & 7.1.21"
    },
    related: ["sapta", "nava-nine", "om"]
  },
  {
    id: "nava-nine",
    deva: "नव (नवन्)",
    iast: "nava (navan)",
    stem: "navan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["nine", "ennead"],
    phoneticAliases: ["nava", "navan", "navaratna", "navabhakti", "navagraha", "nine"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "नव नवभिर्नवानां नवसु — ष्णान्तषट्संज्ञका त्रिलिङ्गसमा बहुवचनान्ता संख्या ।",
    lakshanaIast: "nava navabhir navānāṃ navasu — ṣṇāntaṣaṭsaṃjñakā triliṅgasamā bahuvacanāntā saṅkhyā |",
    meaningShort: "Nine — the highest single-digit decimal numeral (stem navan), distinct from the adjective nava ('new').",
    meaningDeep: "Declined as a regular n-final ṣaṭ numeral across all three genders (nava, navabhiḥ, navabhyaḥ, navānām, navasu; ordinal navama, 'ninth'), navan marks completion of the single-digit decimal cycle (1–9 plus śūnya) and underpins classical ninefold classifications: navagraha (nine celestial bodies), navarasa (nine aesthetic moods including śānta), navaratna (nine gems), and navavidhā bhakti (Bhāgavata 7.5.23: śravaṇaṃ kīrtanaṃ viṣṇoḥ smaraṇaṃ pāda-sevanam...).",
    padaccheda: [
      { deva: "नव", iast: "nava", gloss: "nine (nom./acc. pl. of stem navan)" },
      { deva: "नवानाम् / नवसु", iast: "navānām / navasu", gloss: "of nine, among nine (gen., loc. pl.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.24 & 7.1.22"
    },
    related: ["ashta", "dasha", "nava-new", "bhakti"]
  },
  {
    id: "dasha",
    deva: "दश (दशन्)",
    iast: "daśa (daśan)",
    stem: "daśan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["ten", "decade"],
    phoneticAliases: ["dasha", "dasa", "dashan", "dashavatara", "dashopanishad", "ten"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "दश दशभिर्दशानां दशसु — ष्णान्तषट्संज्ञका दशमानमूला संख्या ।",
    lakshanaIast: "daśa daśabhir daśānāṃ daśasu — ṣṇāntaṣaṭsaṃjñakā daśamānamūlā saṅkhyā |",
    meaningShort: "Ten — the base of the Sanskrit decimal system (daśaguṇottara-saṅkhyā) and closing member of the ṣaṭ class.",
    meaningDeep: "Inflected identically across genders in the plural (daśa, daśabhiḥ, daśabhyaḥ, daśānām, daśasu; ordinal daśama), daśan serves as the structural radix of Vedic and classical Indian decimal numeration (eka, daśa, śata, sahasra..., Yajurveda Taittirīya Saṃhitā 7.2.20). Canonical decads include the ten principal Upaniṣads (daśopaniṣadaḥ), ten avatāras (daśāvatāra), ten directions (daśadiśaḥ), and ten verbal classes (daśagaṇī) of Pāṇini's Dhātupāṭha.",
    padaccheda: [
      { deva: "दश", iast: "daśa", gloss: "ten (nom./acc. pl. of stem daśan)" },
      { deva: "दश-मान-मूला", iast: "daśa-māna-mūlā", gloss: "radix of the base-ten place-value system" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Taittirīya Saṃhitā",
      granthaDeva: "अष्टाध्यायी · तैत्तिरीयसंहिता",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.1.24 & 7.1.22; TS 7.2.20"
    },
    related: ["nava-nine", "dvadasha", "shata", "indriya"]
  },
  {
    id: "dvadasha",
    deva: "द्वादश (द्वादशन्)",
    iast: "dvādaśa (dvādaśan)",
    stem: "dvādaśan",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["twelve", "a dozen"],
    phoneticAliases: ["dvadasha", "dwadasha", "dvadasa", "dvadashi", "twelve"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "त्रयस्त्रिंशतादिषु द्व्यष्टनः संख्यायामबहुव्रीह्यशीत्योः — द्वा च दश च द्वादशेति संख्या ।",
    lakshanaIast: "trayastriṃśatādiṣu dvyaṣṭanaḥ saṅkhyāyām abahuvrīhyaśītyoḥ — dvā ca daśa ca dvādaśeti saṅkhyā |",
    meaningShort: "Twelve — additive compound of dvi + daśan (with dvā- substitution), the measure of solar months and Ādityas.",
    meaningDeep: "By Aṣṭādhyāyī 6.3.47 (dvyaṣṭanaḥ saṅkhyāyām abahuvrīhyaśītyoḥ), dvi replaces its final vowel with long ā before daśan, viṃśati, and triṃśat, forming dvādaśan (nom./acc. pl. dvādaśa across all three genders, ordinal dvādaśa / fem. dvādaśī). Twelve structures Vedic time and devotion: the twelve lunar/solar months, twelve Ādityas, twelve-syllable jagatī meter and Bhagavata mantra (oṃ namo bhagavate vāsudevāya — dvādaśākṣara), and Madhvācārya's Dvādaśastotra.",
    padaccheda: [
      { deva: "द्वा + दश", iast: "dvā + daśa", gloss: "two plus ten (additive dvandva numeral with ā-substitution)" },
      { deva: "द्वादश", iast: "dvādaśa", gloss: "twelve (nom./acc. pl. in all three genders)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 6.3.47 & 1.1.24"
    },
    related: ["dvi", "dasha", "vimshati", "kala"]
  },
  {
    id: "vimshati",
    deva: "विंशतिः",
    iast: "viṃśatiḥ",
    stem: "viṃśati",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["twenty", "a score"],
    phoneticAliases: ["vimshati", "vimsati", "vinshati", "vimshatih", "twenty"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "विंशत्यादयः सदैकवचनाः स्त्रियाम् — विंशतिर्नाम्ना समानाधिकरणा स्त्रीलिङ्गा संख्या ।",
    lakshanaIast: "viṃśatyādayaḥ sadaikavacanāḥ striyām — viṃśatir nāmnā samānādhikaraṇā strīliṅgā saṅkhyā |",
    meaningShort: "Twenty — a feminine singular noun-numeral inaugurating the decades from twenty through ninety (viṃśatyādayaḥ).",
    meaningDeep: "From twenty (viṃśatiḥ) through ninety-nine (navanavatiḥ), Sanskrit shifts its numeral syntax: unlike plural adjectives 3–19, viṃśatiḥ is a feminine i-stem substantive inflected in the singular when counting a single group of twenty (e.g., viṃśatiḥ phalāni or phalānāṃ viṃśatiḥ, 'twenty fruits', though dual dve viṃśatī = 40). Its ordinal is viṃśatitamaḥ or viṃśaḥ (Aṣṭādhyāyī 5.2.56).",
    padaccheda: [
      { deva: "विंशत्यादयः", iast: "viṃśatyādayaḥ", gloss: "the numerals from twenty (viṃśati) through ninety-nine" },
      { deva: "सदा एकवचनाः स्त्रियाम्", iast: "sadā ekavacanāḥ striyām", gloss: "are feminine singular substantives (for one set)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Siddhāntakaumudī",
      granthaDeva: "अष्टाध्यायी · सिद्धान्तकौमुदी",
      author: "Pāṇini / Bhaṭṭoji Dīkṣita",
      locator: "Aṣṭādhyāyī 5.1.59 & 5.2.56"
    },
    related: ["dasha", "dvadasha", "shata"]
  },
  {
    id: "shata",
    deva: "शतम्",
    iast: "śatam",
    stem: "śata",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["hundred", "a century", "countless / many (poetic)"],
    phoneticAliases: ["shata", "shatam", "satam", "shataka", "hundred"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "शतसहस्रे नपुंसके एकवचनान्ते — शतं वर्षाणां वर्षाणि वेति दशदशकसंख्या ।",
    lakshanaIast: "śatasahasre napuṃsake ekavacanānte — śataṃ varṣāṇāṃ varṣāṇi veti daśadaśakasaṅkhyā |",
    meaningShort: "One hundred — a neuter singular numeral noun, emblem of a full human lifespan (śatāyuḥ) and poetic śataka.",
    meaningDeep: "Declined as a neuter singular a-stem substantive (śatam, dual dve śate = 200, plural śatāni = 'hundreds'), śata construes either in apposition with a plural noun (śataṃ brāhmaṇāḥ / śataṃ phalāni) or with a partitive genitive (varṣāṇāṃ śatam). Across the Vedas (jīvema śaradaḥ śatam, ṚV 10.18.4; śatamānaṃ bhavati śatāyuḥ puruṣaḥ), a hundred autumns is the canonical measure of complete human flourishing, and a hundred-verse anthology forms the beloved kāvya genre śataka (e.g., Nītiśataka).",
    padaccheda: [
      { deva: "शतम्", iast: "śatam", gloss: "one hundred (neuter nom./acc. sg.)" },
      { deva: "दश-दशक-संख्या", iast: "daśa-daśaka-saṅkhyā", gloss: "the number equal to ten tens (10²)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.1.59 & 5.2.45; Amarakośa 2.9.84"
    },
    related: ["dasha", "sahasra", "laksha"]
  },
  {
    id: "sahasra",
    deva: "सहस्रम्",
    iast: "sahasram",
    stem: "sahasra",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["thousand", "myriad / infinite plenitude (in Vedic usage)"],
    phoneticAliases: ["sahasra", "sahasram", "sahasranama", "thousand"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "दशशती सहस्रं स्यादनन्तार्थे च वैदिके — सहस्रशीर्षा पुरुष इति परिपूर्णत्ववाचिका संख्या ।",
    lakshanaIast: "daśaśatī sahasraṃ syād anantārthe ca vaidike — sahasraśīrṣā puruṣa iti paripūrṇatvavācikā saṅkhyā |",
    meaningShort: "One thousand (10³), and in Vedic exegesis a symbol of infinite, inexhaustible plenitude (ānantya).",
    meaningDeep: "Like śatam, sahasram is a neuter singular noun construing in apposition or with a genitive (gavāṃ sahasram). Note the exact Sanskrit spelling sa-ha-sra (never *sahastra): s-ra ('thousand'), yielding sahasranāma ('Thousand Names of Viṣṇu') and sahasrāra. Commenting on Puruṣasūkta's sahasraśīrṣā puruṣaḥ (ṚV 10.90.1), Nirukta and Madhvācārya's Ṛgbhāṣya explain that Vedic sahasra signifies boundless infinity (ananta), not merely 1,000.",
    padaccheda: [
      { deva: "दश-शती सहस्रम्", iast: "daśa-śatī sahasram", gloss: "ten hundreds make a thousand (10³)" },
      { deva: "अनन्त-अर्थे वैदिके", iast: "ananta-arthe vaidike", gloss: "and in Vedic usage, signifies infinite plenitude" }
    ],
    source: {
      grantha: "Amarakośa & Ṛgbhāṣyam",
      granthaDeva: "अमरकोशः · ऋग्भाष्यम्",
      author: "Amarasimha / Śrī Madhvācārya",
      locator: "Amarakośa 2.9.84; Puruṣasūkta 10.90.1"
    },
    related: ["shata", "laksha", "purusha", "purna"]
  },
  {
    id: "laksha",
    deva: "लक्षम्",
    iast: "lakṣam",
    stem: "lakṣa",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["one hundred thousand", "lakh (10⁵)", "mark / target"],
    phoneticAliases: ["laksha", "laksham", "lakh", "niyuta", "hundred thousand"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "दशायुतं तु लक्षं स्यान्नियुतं च तदुच्यते — शतसहस्रसंख्या ।",
    lakshanaIast: "daśāyutaṃ tu lakṣaṃ syān niyutaṃ ca tad ucyate — śatasahasrasaṅkhyā |",
    meaningShort: "One hundred thousand (10⁵, a 'lakh') — ten ayutas or a hundred thousand in the Indian decimal scale.",
    meaningDeep: "In Āryabhaṭa's Āryabhaṭīya (Gaṇitapāda 2: ekaṃ daśa ca śataṃ ca sahasram ayutaniyute tathā prayutam | koṭyarbudaṃ ca vṛndaṃ sthānāt sthānaṃ daśaguṇaṃ syāt ||) and Līlāvatī (eka-daśa-śata-sahasrāyuta-lakṣa-prayuta-koṭayaḥ kramaśaḥ), lakṣam (older Vedic niyutam) occupies the sixth decimal place (10⁵ = 100,000), whence South Asian English 'lakh'. Derived from √lakṣ ('to mark/aim at'), lakṣa also means an archer's target or distinguishing token (cf. lakṣya, lakṣaṇa).",
    padaccheda: [
      { deva: "दश-अयुतम् लक्षम्", iast: "daśa-ayutam lakṣam", gloss: "ten ten-thousands (10 × 10⁴ = 10⁵) equal a lakṣa" },
      { deva: "शत-सहस्र-संख्या", iast: "śata-sahasra-saṅkhyā", gloss: "the number one hundred thousand" }
    ],
    source: {
      grantha: "Līlāvatī & Amarakośa",
      granthaDeva: "लीलावती · अमरकोशः",
      author: "Bhāskarācārya / Amarasimha",
      locator: "Līlāvatī Paribhāṣā 2; Amarakośa 3.3.214"
    },
    related: ["sahasra", "koti", "lakshya", "lakshana"]
  },
  {
    id: "koti",
    deva: "कोटिः",
    iast: "koṭiḥ",
    stem: "koṭi",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["ten million", "crore (10⁷)", "summit / extreme point", "alternative horn of a dilemma"],
    phoneticAliases: ["koti", "kotih", "crore", "ten million"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "लक्षशतं तु कोटिः स्यादुत्कर्षे धनुषोऽग्रके । पक्षे च संख्यया भेदे कोटिशब्दः प्रयुज्यते ॥",
    lakshanaIast: "lakṣaśataṃ tu koṭiḥ syād utkarṣe dhanuṣo'grake | pakṣe ca saṅkhyayā bhede koṭiśabdaḥ prayujyate ||",
    meaningShort: "Ten million (10⁷, a 'crore'), as well as pinnacle, bow-tip, and logical alternative (pakṣa-koṭi).",
    meaningDeep: "Declined as a feminine i-stem singular noun (koṭiḥ), koṭi represents one hundred lakṣas (10⁷ = 10,000,000, origin of 'crore'). Amarakośa 3.3.40 records its four classical senses: (1) the notched tip of a bow (dhanuṣo'gra), (2) the highest summit of excellence (utkarṣa — parā koṭiḥ, koti-koti praṇāma), (3) ten million (saṅkhyā-bheda), and (4) in Nyāya dialectics, either horn of an analytical dilemma (koṭidvaya: kiṃ nityaḥ uta anityaḥ).",
    padaccheda: [
      { deva: "लक्ष-शतम् कोटिः", iast: "lakṣa-śatam koṭiḥ", gloss: "a hundred lakṣas equal one koṭi (10⁷)" },
      { deva: "उत्कर्षे धनुषः अग्रके पक्षे", iast: "utkarṣe dhanuṣaḥ agrake pakṣe", gloss: "also pinnacle, bow-tip, and logical horn" }
    ],
    source: {
      grantha: "Amarakośa & Līlāvatī",
      granthaDeva: "अमरकोशः · लीलावती",
      author: "Amarasimha / Bhāskarācārya",
      locator: "Amarakośa 3.3.40; Līlāvatī Paribhāṣā 2"
    },
    related: ["laksha", "sahasra", "paksha", "uttama"]
  },
  {
    id: "prathama",
    deva: "प्रथमः / प्रथमा / प्रथमम्",
    iast: "prathamaḥ / prathamā / prathamam",
    stem: "prathama",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["first", "foremost", "earliest", "chief", "nominative (f. prathamā)"],
    phoneticAliases: ["prathama", "prathamam", "prathamah", "adya", "aadya", "adi", "first", "foremost"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "प्रथमश्चरमतयाल्पाकतिपयनेमाश्च — आद्यः पूर्वः पौरस्त्यः प्रथमोऽग्रिमः ॥",
    lakshanaIast: "prathamaścaramatayālpākatipayanemāś ca — ādyaḥ pūrvaḥ paurastyaḥ prathamo'grimaḥ ||",
    meaningShort: "First, foremost, or inaugural — the ordinal of eka and technical name of the nominative case (prathamā vibhakti).",
    meaningDeep: "Derived via Uṇādi suffix -thama from √prath ('to spread / become celebrated'), prathama takes optional sarvanāma nominative plural prathame / prathamāḥ by Aṣṭādhyāyī 1.1.33 (prathamaścaramatayālpārdhakatipayanemāś ca). In Pāṇinian grammar, prathamā designates the first (nominative) nominal case (2.3.46 prātipadikārthaliṅgaparimāṇavacanamātre prathamā), while prathama-puruṣa names the grammatical third ('foremost') person.",
    padaccheda: [
      { deva: "आद्यः पूर्वः प्रथमः अग्रिमः", iast: "ādyaḥ pūrvaḥ prathamaḥ agrimaḥ", gloss: "first, prior, foremost, leading (Amarakośa 3.1.80)" },
      { deva: "प्रथमा विभक्तिः", iast: "prathamā vibhaktiḥ", gloss: "the first (nominative) case" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.33 & 2.3.46; Amarakośa 3.1.80"
    },
    related: ["eka", "dvitiya", "tritiya", "uttama"]
  },
  {
    id: "dvitiya",
    deva: "द्वितीयः / द्वितीया / द्वितीयम्",
    iast: "dvitīyaḥ / dvitīyā / dvitīyam",
    stem: "dvitīya",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["second", "companion", "accusative case (f. dvitīyā)"],
    phoneticAliases: ["dvitiya", "dwitiya", "dvitiyam", "dvitiyah", "second"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "द्वेस्तीयः — द्वयोः पूरणो द्वितीयः कर्मणि च द्वितीया विभक्तिः ।",
    lakshanaIast: "dves tīyaḥ — dvayoḥ pūraṇo dvitīyaḥ karmaṇi ca dvitīyā vibhaktiḥ |",
    meaningShort: "Second — the ordinal numeral of dvi (via tīya-pratyaya) and name of the accusative case (dvitīyā).",
    meaningDeep: "Formed by Aṣṭādhyāyī 5.2.54 (dves tīyaḥ) in the sense of pūraṇa ('that which completes two'), dvitīya takes optional sarvanāma endings in oblique singular cases (e.g., dat. dvitīyasmai / dvitīyāya by 1.1.36 vibhāṣā dvitīyātṛtīyābhyām). Its negation advitīya (Chāndogya Upaniṣad 6.2.1 ekam evādvitīyam) proclaims that the Supreme Reality has no peer or independent rival.",
    padaccheda: [
      { deva: "द्वेः तीयः", iast: "dveḥ tīyaḥ", gloss: "ordinal suffix -tīya attaches to dvi (Aṣṭ. 5.2.54)" },
      { deva: "द्वयोः पूरणः द्वितीयः", iast: "dvayoḥ pūraṇaḥ dvitīyaḥ", gloss: "completer of two: 'second'" },
      { deva: "कर्मणि द्वितीया", iast: "karmaṇi dvitīyā", gloss: "the second (accusative) case marks karman (Aṣṭ. 2.3.2)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.2.54, 1.1.36 & 2.3.2"
    },
    related: ["dvi", "prathama", "tritiya", "eka"]
  },
  {
    id: "tritiya",
    deva: "तृतीयः / तृतीया / तृतीयम्",
    iast: "tṛtīyaḥ / tṛtīyā / tṛtīyam",
    stem: "tṛtīya",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["third", "instrumental case (f. tṛtīyā)"],
    phoneticAliases: ["tritiya", "trtiya", "tritiyam", "tritiyah", "third"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "त्रेः सम्प्रसारणं च — त्रयाणां पूरणस्तृतीयः कर्तृकरणयोस्तृतीया ।",
    lakshanaIast: "treḥ samprasāraṇaṃ ca — trayāṇāṃ pūraṇas tṛtīyaḥ kartṛkaraṇayos tṛtīyā |",
    meaningShort: "Third — the ordinal numeral of tri (with samprasāraṇa r → ṛ) and name of the instrumental case (tṛtīyā).",
    meaningDeep: "Derived by Aṣṭādhyāyī 5.2.55 (treḥ samprasāraṇaṃ ca), tri undergoes samprasāraṇa (ri → ṛ) before the ordinal suffix -tīya, forming tṛtīya (optionally inflected as a sarvanāma in singular dative/ablative/locative per 1.1.36: tṛtīyasmai / tṛtīyāya). In grammar, feminine tṛtīyā names the third (instrumental) case expressing the unexpressed agent (anukta-kartṛ) and primary instrument (karaṇa, 2.3.18 kartṛkaraṇayos tṛtīyā).",
    padaccheda: [
      { deva: "त्रेः सम्प्रसारणम् च", iast: "treḥ samprasāraṇam ca", gloss: "tri takes -tīya with vocalization ri → ṛ (Aṣṭ. 5.2.55)" },
      { deva: "त्रयाणाम् पूरणः तृतीयः", iast: "trayāṇām pūraṇaḥ tṛtīyaḥ", gloss: "completer of three: 'third'" },
      { deva: "कर्तृ-करणयोः तृतीया", iast: "kartṛ-karaṇayoḥ tṛtīyā", gloss: "the third (instrumental) case marks agent and instrument" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.2.55, 1.1.36 & 2.3.18"
    },
    related: ["tri", "prathama", "dvitiya"]
  },
  {
    id: "purna",
    deva: "पूर्णम्",
    iast: "pūrṇam",
    stem: "pūrṇa",
    pos: "saṅkhyā (num.)",
    englishGlosses: ["full", "complete", "whole", "plenary", "fulfilled"],
    phoneticAliases: ["purna", "poorna", "purnam", "paripurna", "sampurna", "full", "whole", "complete"],
    pillar: "kosha",
    domain: "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
    lakshanaDeva: "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
    lakshanaIast: "oṃ pūrṇam adaḥ pūrṇam idaṃ pūrṇāt pūrṇam udacyate | pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate ||",
    meaningShort: "Full, whole, infinitely complete — both mathematical completeness and the Upaniṣadic plenitude of Brahman.",
    meaningDeep: "Formed as the niṣṭhā (kta) participle of √pṝ ('pṝ pālanapūraṇayoḥ', 3P/9P, with ṝ → ūr and t → ṇa by 7.1.102 ud oṣṭhyapūrvasya & 8.2.42 → pūrṇa), pūrṇa crowns the White Yajurveda / Bṛhadāraṇyaka śāntipāṭha: 'That transcendent Supreme (adaḥ, Mūlarūpa) is infinitely full; this manifest form/avataric presence (idam) is infinitely full; from the Full comes forth the Full, and even when the Full is drawn forth, the Full alone remains undiminished.' In calendrical astronomy, pūrṇimā names the full-moon tithi (15/15).",
    padaccheda: [
      { deva: "पूर्णम् अदः पूर्णम् इदम्", iast: "pūrṇam adaḥ pūrṇam idam", gloss: "infinite fullness is That, infinite fullness is This" },
      { deva: "पूर्णात् पूर्णम् उदच्यते", iast: "pūrṇāt pūrṇam udacyate", gloss: "from the Full, the Full wells forth" },
      { deva: "पूर्णम् एव अवशिष्यते", iast: "pūrṇam eva avaśiṣyate", gloss: "fullness alone remains undiminished" }
    ],
    source: {
      grantha: "Īśāvāsyopaniṣad & Bṛhadāraṇyakopaniṣad Śāntipāṭha",
      granthaDeva: "ईशावास्योपनिषद् · बृहदारण्यकोपनिषद्",
      author: "Śukla Yajurveda Śruti",
      locator: "Bṛhadāraṇyaka Upaniṣad 5.1.1; Aṣṭādhyāyī 7.1.102 & 8.2.42"
    },
    related: ["shunya", "sarva", "idam", "brahman", "narayana"]
  },

  // ============================================================================
  // Domain 2: Viśeṣaṇa (Qualities & Adjectives) — 40 entries
  // ============================================================================
  {
    id: "mahat",
    deva: "महत् / महान्",
    iast: "mahat / mahān",
    stem: "mahat",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["great", "mighty", "vast", "eminent", "noble"],
    phoneticAliases: ["mahat", "mahan", "mahati", "maha", "mahima", "great", "mighty"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "आन्महतः समानाधिकरणजातीययोः — बृहद्विशालं विपुलं पृथु महदुुरु स्मृतम् ।",
    lakshanaIast: "ān mahataḥ samānādhikaraṇajātīyayoḥ — bṛhad viśālaṃ vipulaṃ pṛthu mahad uru smṛtam |",
    meaningShort: "Great, vast, or exalted — transforming into mahā- at the head of karmadhāraya and bahuvrīhi compounds.",
    meaningDeep: "Derived from √mah ('maha pūjāyām', 'to revere / magnify') via Uṇādi -ati (m. mahān, mahāntau, mahāntaḥ by sāntamahataḥ saṃyogasya 6.4.10; f. mahatī; n. mahat), mahat replaces its final t with long ā in co-referential compounds by Aṣṭādhyāyī 6.3.46 (ān mahataḥ samānādhikaraṇajātīyayoḥ → mahātmā, mahārājaḥ, mahākāvya, mahābhāṣya). Its abstract noun mahiman denotes majestic greatness.",
    padaccheda: [
      { deva: "आत् महतः", iast: "āt mahataḥ", gloss: "mahat substitutes final ā (mahā-) in co-referential compounds (Aṣṭ. 6.3.46)" },
      { deva: "महान् महती महत्", iast: "mahān mahatī mahat", gloss: "great (nom. sg. m., f., n.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 6.3.46 & 6.4.10; Amarakośa 3.1.59"
    },
    related: ["brihat", "mahattattva", "alpa", "uttama"]
  },
  {
    id: "brihat",
    deva: "बृहत् / बृहन्",
    iast: "bṛhat / bṛhan",
    stem: "bṛhat",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["vast", "mighty", "lofty", "expansive", "abounding in"],
    phoneticAliases: ["brihat", "brhat", "brihan", "brihati", "vast", "lofty"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "बृहद्वृद्धौ — बृंहति वर्धते इति बृहद् गुणवयोरूपैर्विपुलम् ।",
    lakshanaIast: "bṛhad vṛddhau — bṛṃhati vardhate iti bṛhad guṇavayorūpair vipulam |",
    meaningShort: "Vast, lofty, and infinitely expansive — sharing √bṛh ('to grow/expand') with Brahman itself.",
    meaningDeep: "Formed as the archaic śatṛ-type adjective from √bṛh ('bṛhi vṛddhau', 1P: m. bṛhan, f. bṛhatī, n. bṛhat), bṛhat is the etymological twin of Brahman ('Infinite Plenum of attributes', bṛhattvād bṛṃhaṇatvāc ca). It names the famous Sāmavedic Bṛhat-sāman, the 36-syllable Vedic meter bṛhatī, and the Bṛhadāraṇyaka Upaniṣad ('Great Forest-Book').",
    padaccheda: [
      { deva: "बृहत्", iast: "bṛhat", gloss: "vast, mighty, expansive (from √bṛh)" },
      { deva: "बृंहति वर्धते इति", iast: "bṛṃhati vardhate iti", gloss: "that which expands and surpasses all measure" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha / Yāska",
      locator: "Amarakośa 3.1.59; Nirukta 1.8"
    },
    related: ["brahman", "brihati", "mahat", "dhatu-vridh"]
  },
  {
    id: "laghu",
    deva: "लघु",
    iast: "laghu",
    stem: "laghu",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["light (in weight)", "swift", "short (prosodic syllable)", "concise", "easy"],
    phoneticAliases: ["laghu", "laghuh", "laghvi", "laghava", "laghishtha", "light", "concise"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "ह्रस्वं लघु · क्षिप्रं लघु स्तोकमल्पमसाराचारयोरपि ।",
    lakshanaIast: "hrasvaṃ laghu · kṣipraṃ laghu stokam alpam asārācārayor api |",
    meaningShort: "Light in weight, swift in motion, concise in form, and prosodically light (1-mātrā syllable).",
    meaningDeep: "Opposed systematically to guru across physics, Āyurveda, grammar, and prosody, laghu is defined in Aṣṭādhyāyī 1.4.10 (hrasvaṃ laghu) as a short vowel not followed by a consonant cluster. Grammatical paribhāṣās prize lāghava ('derivational economy / conciseness' — ardhamātrālāghavena putrotsavaṃ manyante vaiyākaraṇāḥ), while comparatives laghīyas and superlative laghiṣṭha derive via 6.4.161.",
    padaccheda: [
      { deva: "ह्रस्वम् लघु", iast: "hrasvam laghu", gloss: "a short unclustered vowel is metrically laghu (Aṣṭ. 1.4.10)" },
      { deva: "क्षिप्रम् अल्पम् लघु", iast: "kṣipram alpam laghu", gloss: "swift, light in weight, small/concise (Amarakośa)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.4.10; Amarakośa 1.1.66 & 3.1.55"
    },
    related: ["guru-adj", "hrasva", "alpa", "shighram"]
  },
  {
    id: "guru-adj",
    deva: "गुरुः / गुर्वी / गुरु",
    iast: "guruḥ / gurvī / guru",
    stem: "guru",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["heavy", "weighty", "venerable", "important", "prosodically heavy (2-mātrā)"],
    phoneticAliases: ["guru", "guruh", "gurvi", "gaurava", "gariyas", "garishta", "heavy", "weighty"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "संयोगे गुरु · दीर्घं च — महद्भारि गरिष्ठं च पूज्ये दुर्जरयोर्गुरु ।",
    lakshanaIast: "saṃyoge guru · dīrghaṃ ca — mahad bhāri gariṣṭhaṃ ca pūjye durjarayor guru |",
    meaningShort: "Heavy, weighty, momentous, prosodically heavy, and worthy of deep reverence.",
    meaningDeep: "As a primary quality-adjective (f. gurvī by 4.1.44 voto guṇavacanāt; comp. garīyas, sup. gariṣṭha via priyasthirasphira... 6.4.157; abstract noun gaurava, 'weight / dignity / logical prolixity'), guru unites physical mass (gurutva in Vaiśeṣika physics), prosodic weight (Aṣṭādhyāyī 1.4.11–12: a short vowel before a conjunct or any long vowel is guru), and moral-spiritual eminence (from which the substantive guru, 'preceptor', arises).",
    padaccheda: [
      { deva: "संयोगे गुरु दीर्घम् च", iast: "saṃyoge guru dīrgham ca", gloss: "before a conjunct or when long, a vowel is metrically heavy (Aṣṭ. 1.4.11–12)" },
      { deva: "भारि पूज्ये च गुरु", iast: "bhāri pūjye ca guru", gloss: "weighty, important, and venerable" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.4.11–12 & 6.4.157; Amarakośa 3.3.162"
    },
    related: ["guru", "laghu", "dirgha", "mahat"]
  },
  {
    id: "alpa",
    deva: "अल्पः / अल्पा / अल्पम्",
    iast: "alpaḥ / alpā / alpam",
    stem: "alpa",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["little", "small", "few", "scanty", "limited"],
    phoneticAliases: ["alpa", "alpam", "alpah", "stoka", "kaniyas", "kanishtha", "little", "few"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "स्तोकमल्पं क्षुल्लकं च सूक्ष्मं श्लक्ष्णं दभ्रं कृशं तनु । नाल्पे सुखमस्ति भूमैव सुखम् ॥",
    lakshanaIast: "stokam alpaṃ kṣullakaṃ ca sūkṣmaṃ ślakṣṇaṃ dabhraṃ kṛśaṃ tanu | nālpe sukham asti bhūmaiva sukham ||",
    meaningShort: "Little, few, or finite — contrasted in the Upaniṣads with bhūman (the Infinite) and in grammar with bahu.",
    meaningDeep: "Permitting optional sarvanāma nominative plural alpe / alpāḥ by Aṣṭādhyāyī 1.1.33 and substituting kan- alongside alp- in comparative/superlative (kanīyas / alpīyas, kaniṣṭha / alpiṣṭha by 5.3.64 yuvālpayoḥ kan anyatarasyām), alpa marks finitude: Sanatkumāra teaches Nārada in Chāndogya Upaniṣad 7.23.1, yo vai bhūmā tat sukhaṃ, nālpe sukham asti ('The Infinite alone is bliss; there is no lasting joy in the finite/small'). In phonetics, alpaprāṇa designates unaspirated stops.",
    padaccheda: [
      { deva: "स्तोकम् अल्पम् दभ्रम्", iast: "stokam alpam dabhram", gloss: "scanty, little, few (Amarakośa 3.1.72)" },
      { deva: "न अल्पे सुखम् अस्ति", iast: "na alpe sukham asti", gloss: "in the finite/small there is no abiding bliss (Chāndogya 7.23)" }
    ],
    source: {
      grantha: "Amarakośa, Aṣṭādhyāyī & Chāndogyopaniṣad",
      granthaDeva: "अमरकोशः · अष्टाध्यायी · छान्दोग्योपनिषद्",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.1.72; Aṣṭādhyāyī 1.1.33 & 5.3.64; ChU 7.23.1"
    },
    related: ["bahu", "laghu", "sukshma", "sukha"]
  },
  {
    id: "bahu",
    deva: "बहुः / बह्वी / बहु",
    iast: "bahuḥ / bahvī / bahu",
    stem: "bahu",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["many", "much", "abundant", "numerous", "plural"],
    phoneticAliases: ["bahu", "bahuh", "bahvi", "bahava", "bahavah", "prabhu", "pracura", "bhuyas", "bhuyishtha", "many", "abundant"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "बहुगणवतुडति संख्या — प्रभूतं प्रचुरं प्राज्यमदभ्रं बहुलं बहु ।",
    lakshanaIast: "bahugaṇavatuḍati saṅkhyā — prabhūtaṃ pracuraṃ prājyam adabhraṃ bahulaṃ bahu |",
    meaningShort: "Many, abundant, manifold — heading Pāṇini's definition of saṅkhyā and naming the plural number (bahuvacana).",
    meaningDeep: "Aṣṭādhyāyī 1.1.23 (bahugaṇavatuḍati saṅkhyā) confers the technical status of saṅkhyā ('numeral') upon bahu, while 6.4.158–159 replaces bahu with bhū- in comparative bhūyas ('more / greater') and superlative bhūyiṣṭha ('most / abundant'), as well as abstract bhūman ('plenitude'). In grammar it names bahuvacana ('plural number', 1.4.21 bahuṣu bahuvacanam) and bahuvrīhi ('possessing much rice' — the exocentric compound class).",
    padaccheda: [
      { deva: "बहु-गण-वतु-डति संख्या", iast: "bahu-gaṇa-vatu-ḍati saṅkhyā", gloss: "bahu, gaṇa, -vat, and kati bear the technical name saṅkhyā (Aṣṭ. 1.1.23)" },
      { deva: "प्रभूतम् प्रचुरम् बहु", iast: "prabhūtam pracuram bahu", gloss: "abundant, plentiful, many (Amarakośa 3.1.63)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.23 & 6.4.158; Amarakośa 3.1.63"
    },
    related: ["alpa", "sarva", "purna"]
  },
  {
    id: "dirgha",
    deva: "दीर्घः / दीर्घा / दीर्घम्",
    iast: "dīrghaḥ / dīrghā / dīrgham",
    stem: "dīrgha",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["long (in space or time)", "tall", "long vowel (2-mātrā)", "sustained"],
    phoneticAliases: ["dirgha", "deergha", "dirgham", "dirghah", "dradhiyas", "dradhishtha", "long"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "ऊकालोऽज्झ्रस्वदीर्घप्लुतः — द्विमात्रो दीर्घ उच्यते आयामकालयोश्चायतः ।",
    lakshanaIast: "ūkālo'j jhrasvadīrghaplutaḥ — dvimātro dīrgha ucyate āyāmakālayoś cāyataḥ |",
    meaningShort: "Long in spatial extent or temporal duration, and in phonetics a two-mora (dvimātra) long vowel.",
    meaningDeep: "Derived from √drāgh ('to stretch/lengthen', substituting drāgh- in comparative drāghīyas and superlative drāghiṣṭha by Aṣṭādhyāyī 6.4.157), dīrgha designates both spatial length (āyata), sustained perseverance (dīrghasūtrin vs. dīrghadarśin, 'far-sighted'), longevity (dīrghāyuḥ), and the phonetic class of two-mātrā vowels (ā, ī, ū, ṝ, e, ai, o, au) defined in Aṣṭādhyāyī 1.2.27.",
    padaccheda: [
      { deva: "द्वि-मात्रः दीर्घः", iast: "dvi-mātraḥ dīrghaḥ", gloss: "a vowel of two prosodic instants is dīrgha (Aṣṭ. 1.2.27)" },
      { deva: "आयाम-कालयोः आयतः", iast: "āyāma-kālayoḥ āyataḥ", gloss: "extended in length or duration" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.2.27 & 6.4.157; Amarakośa 3.1.70"
    },
    related: ["hrasva", "guru-adj", "kala"]
  },
  {
    id: "hrasva",
    deva: "ह्रस्वः / ह्रस्वा / ह्रस्वम्",
    iast: "hrasvaḥ / hrasvā / hrasvam",
    stem: "hrasva",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["short", "brief", "small in stature", "short vowel (1-mātrā)"],
    phoneticAliases: ["hrasva", "hrasvam", "hrasvah", "vamana-adj", "hrasiyas", "short"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "एकमात्रो भवेद्ध्रस्वो द्विमात्रो दीर्घ उच्यते । अवामने ह्रस्वो नीचखर्वौ च स्मृतौ ॥",
    lakshanaIast: "ekamātro bhaved dhrasvo dvimātro dīrgha ucyate | avāmane hrasvo nīcakharvau ca smṛtau ||",
    meaningShort: "Short in length or stature, and in phonetics a single-mora (ekamātra) simple vowel.",
    meaningDeep: "From √hras ('hrasa śabde hrāse ca', 'to diminish/shorten'; comp. hrasīyas, sup. hrasiṣṭha), hrasva pairs with dīrgha and pluta in Pāṇini's foundational vowel-duration sūtra Aṣṭādhyāyī 1.2.27 (ūkālo'j jhrasvadīrghaplutaḥ, measured by the crowing of a rooster's u-ū-ū3): a, i, u, ṛ, ḷ are hrasva (1 mātrā). Amarakośa 2.6.46 also pairs hrasva with vāmana and kharva for short physical stature.",
    padaccheda: [
      { deva: "एक-मात्रः ह्रस्वः", iast: "eka-mātraḥ hrasvaḥ", gloss: "a vowel lasting one mora (a, i, u, ṛ, ḷ) is hrasva" },
      { deva: "नीच-खर्वौ ह्रस्वः", iast: "nīca-kharvau hrasvaḥ", gloss: "short in height or extent (Amarakośa)" }
    ],
    source: {
      grantha: "Pāṇinīya Śikṣā, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "पाणिनीयशिक्षा · अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.2.27; Pāṇinīya Śikṣā 20; Amarakośa 2.6.46"
    },
    related: ["dirgha", "laghu", "vamana", "varna"]
  },
  {
    id: "ucca",
    deva: "उच्चः / उच्चा / उच्चम् (उन्नतः)",
    iast: "uccaḥ / uccā / uccam (unnataḥ)",
    stem: "ucca",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["high", "tall", "lofty", "elevated", "deep/resonant (of voice)"],
    phoneticAliases: ["ucca", "uchcha", "uccam", "unnata", "tunga", "ucchrita", "high", "tall", "elevated"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "उच्चप्रांशुन्नतोदग्रोच्छ्रिततुङ्गाः समौचिताः — ऊर्ध्वमञ्चतीत्युच्चः ।",
    lakshanaIast: "uccaprāṃśūnnatodagrocchritatuṅgāḥ samaucitāḥ — ūrdhvam añcatīty uccaḥ |",
    meaningShort: "High, lofty, elevated (unnata / tuṅga) — etymologically 'directed upward' (ud + √añc).",
    meaningDeep: "Derived from ud + √añc ('moving/rising upward') and grouped in Amarakośa 3.1.62 with prāṃśu, unnata, udagra, ucchrita, and tuṅga, ucca describes mountain peaks, noble aspiration (unnata-cetāḥ), planetary exaltation in Jyotiṣa (ucca-sthāna vs. nīca), and resonant loudness (particularly through its instrumental adverb uccaiḥ, 'aloud / on high', echoed in Pāṇini's accent rule 1.2.29 uccair udāttaḥ).",
    padaccheda: [
      { deva: "उच्च-प्रांशु-उन्नत-तुङ्गाः", iast: "ucca-prāṃśu-unnata-tuṅgāḥ", gloss: "high, tall, elevated, lofty (Amarakośa 3.1.62)" },
      { deva: "ऊर्ध्वम् अञ्चति इति उच्चः", iast: "ūrdhvam añcati iti uccaḥ", gloss: "that which rises upward (ud + √añc + ka)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.1.62; Aṣṭādhyāyī 1.2.29"
    },
    related: ["nica", "upari", "om", "uttama"]
  },
  {
    id: "nica",
    deva: "नीचः / नीचा / नीचम्",
    iast: "nīcaḥ / nīcā / nīcam",
    stem: "nīca",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["low", "downward-flowing", "base", "humble", "low-pitched"],
    phoneticAliases: ["nica", "neecha", "nicam", "nicah", "adhama", "low"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "न्यगञ्चतीति नीचः — नीचैर्गच्छत्युपरि च दशा चक्रनेमिक्रमेण ।",
    lakshanaIast: "nyag añcatīti nīcaḥ — nīcair gacchaty upari ca daśā cakranemikrameṇa |",
    meaningShort: "Low, downward-inclined, or base — the polar counterpart of ucca (from ni + √añc).",
    meaningDeep: "Formed symmetrically to ucca from ni + √añc ('tending downward', lengthening i to ī by Aṣṭādhyāyī 6.3.138 cau → nīca; instrumental avyaya nīcaiḥ, used in Pāṇini 1.2.30 nīcair anudāttaḥ for low vocal pitch), nīca denotes topographical lowness (whence rivers naturally flow toward low ground: nimnagā), astronomical planetary debilitation, and in nītiśāstra ignoble character (contrasted with mahātman / uttama; cf. Kālidāsa's Meghadūta 109).",
    padaccheda: [
      { deva: "न्यक् अञ्चति इति नीचः", iast: "nyak añcati iti nīcaḥ", gloss: "tending downward, low-lying (ni + √añc)" },
      { deva: "नीचैः उपरि च", iast: "nīcaiḥ upari ca", gloss: "downward and upward in turn (Meghadūta 109)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Meghadūta",
      granthaDeva: "अष्टाध्यायी · मेघदूतम्",
      author: "Pāṇini / Kālidāsa",
      locator: "Aṣṭādhyāyī 1.2.30 & 6.3.138; Meghadūta 109"
    },
    related: ["ucca", "adhah", "hrasva"]
  },
  {
    id: "sukshma",
    deva: "सूक्ष्मः / सूक्ष्मा / सूक्ष्मम्",
    iast: "sūkṣmaḥ / sūkṣmā / sūkṣmam",
    stem: "sūkṣma",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["subtle", "minute", "fine", "penetrating (of intellect)", "atomic/imperceptible"],
    phoneticAliases: ["sukshma", "sookshma", "sukshmam", "anu", "tanu", "subtle", "minute"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "सूक्ष्ममध्यात्मं दुरवबोधं च — दृश्यते त्वग्र्यया बुद्ध्या सूक्ष्मया सूक्ष्मदर्शिभिः ॥",
    lakshanaIast: "sūkṣmam adhyātmaṃ duravabodhaṃ ca — dṛśyate tv agryayā buddhyā sūkṣmayā sūkṣmadarśibhiḥ ||",
    meaningShort: "Subtle, minute, supersensible, or keenly discerning — opposed to sthūla (gross).",
    meaningDeep: "Grouped in Amarakośa 3.1.72 with ślakṣṇa, dabhra, and aṇu, sūkṣma bridges physical fineness and metaphysical depth: Sāṅkhya and Vedānta distinguish the subtle body (sūkṣma-śarīra / liṅga-deha) and subtle tanmātras from gross elements (sthūla-bhūtas), while Kaṭha Upaniṣad 1.3.12 declares that the supreme Ātman is beheld only by subtle-sighted seers through a one-pointed, subtle intellect (buddhyā sūkṣmayā sūkṣmadarśibhiḥ).",
    padaccheda: [
      { deva: "अग्र्यया बुद्ध्या सूक्ष्मया", iast: "agryayā buddhyā sūkṣmayā", gloss: "by a focused, subtle, penetrating intellect" },
      { deva: "सूक्ष्म-दर्शिभिः", iast: "sūkṣma-darśibhiḥ", gloss: "by seers of subtle truth (Kaṭha Upaniṣad 1.3.12)" }
    ],
    source: {
      grantha: "Kaṭhopaniṣad & Amarakośa",
      granthaDeva: "कठोपनिषद् · अमरकोशः",
      author: "Kṛṣṇa Yajurveda Śruti / Amarasimha",
      locator: "Kaṭha Upaniṣad 1.3.12; Amarakośa 3.1.72"
    },
    related: ["sthula", "tanmatra", "atman", "alpa"]
  },
  {
    id: "sthula",
    deva: "स्थूलः / स्थूला / स्थूलम्",
    iast: "sthūlaḥ / sthūlā / sthūlam",
    stem: "sthūla",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["gross", "large", "bulky", "tangible", "macroscopic"],
    phoneticAliases: ["sthula", "sthoola", "sthulam", "pivara", "sthaviyas", "sthavishtha", "gross", "large"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "स्थूलपीवरपीनानि — स्थूलेन्द्रियग्राह्यं बृहत्परिमाणं वस्तु स्थूलम् ।",
    lakshanaIast: "sthūlapīvarapīnāni — sthūlendriyagrāhyaṃ bṛhatparimāṇaṃ vastu sthūlam |",
    meaningShort: "Gross, tangible, or bulky — perceptible to the outer senses and contrasted with sūkṣma (subtle).",
    meaningDeep: "Derived from √sthūl ('sthūla paribṛṃhaṇe', 10Ā, substituting sthav- in comparative sthavīyas and superlative sthaviṣṭha by Aṣṭādhyāyī 6.4.156 sthūladūrayuvahrasvakṣiprakṣudrāṇāṃ yaṇādiparaṃ pūrvasya ca guṇaḥ), sthūla denotes both tangible macroscopic matter (sthūla-śarīra, sthūla-pañcabhūta) and pedagogic progression via the Arundhatī-darśana-nyāya / sthūlārundhatī-nyāya — guiding a student first via a bright, conspicuous star before pointing out faint, subtle Arundhatī.",
    padaccheda: [
      { deva: "स्थूल-पीवर-पीनानि", iast: "sthūla-pīvara-pīnāni", gloss: "gross, stout, full-bodied (Amarakośa)" },
      { deva: "इन्द्रिय-ग्राह्यम् स्थूलम्", iast: "indriya-grāhyam sthūlam", gloss: "macroscopic, directly graspable by outer senses" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 2.6.45; Aṣṭādhyāyī 6.4.156"
    },
    related: ["sukshma", "pancabhuta", "dravya", "mahat"]
  },
  {
    id: "nava-new",
    deva: "नवः / नवा / नवम् (नूतनम्)",
    iast: "navaḥ / navā / navam (nūtanam)",
    stem: "nava",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["new", "fresh", "young", "recent", "ever-renewing"],
    phoneticAliases: ["nava", "navam", "navina", "nutana", "nootana", "pratyagra", "abhinava", "new", "fresh"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "प्रत्यग्रोऽभिनवो नव्यो नवीनो नूतनो नवः — क्षणे क्षणे यन्नवतामुपैति तदेव रूपं रमणीयतायाः ॥",
    lakshanaIast: "pratyagro'bhinavo navyo navīno nūtano navaḥ — kṣaṇe kṣaṇe yan navatām upaiti tad eva rūpaṃ ramaṇīyatāyāḥ ||",
    meaningShort: "New, fresh, or ever-young (nūtana / navīna) — Māgha's touchstone of true aesthetic beauty.",
    meaningDeep: "Catalogued in Amarakośa 3.1.78 alongside pratyagra, abhinava, navya, navīna (via kha-pratyaya, Aṣṭādhyāyī 5.4.7 avākṣaḍādibhyaḥ khaḥ / pratnapūrvaviśvemāt thāl...), and nūtana, the adjective nava (inflected in all numbers and genders, unlike plural numeral navan 'nine') inspires Māgha's immortal definition of beauty in Śiśupālavadha 4.17: 'That alone is the true form of loveliness which attains fresh newness (navatā) moment after moment.'",
    padaccheda: [
      { deva: "अभिनवः नव्यः नवीनः नूतनः नवः", iast: "abhinavaḥ navyaḥ navīnaḥ nūtanaḥ navaḥ", gloss: "fresh, brand-new, modern, recent (Amarakośa 3.1.78)" },
      { deva: "क्षणे क्षणे नवताम् उपैति", iast: "kṣaṇe kṣaṇe navatām upaiti", gloss: "renews its freshness every moment (Śiśupālavadha 4.17)" }
    ],
    source: {
      grantha: "Amarakośa & Śiśupālavadha",
      granthaDeva: "अमरकोशः · शिशुपालवधम्",
      author: "Amarasimha / Māgha",
      locator: "Amarakośa 3.1.78; Śiśupālavadha 4.17"
    },
    related: ["purana-adj", "nava-nine", "sundara"]
  },
  {
    id: "purana-adj",
    deva: "पुराणः / पुराणी / पुराणम् (प्राचीनम्)",
    iast: "purāṇaḥ / purāṇī / purāṇam (prācīnam)",
    stem: "purāṇa",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["ancient", "primeval", "old", "timeless yet ever-new"],
    phoneticAliases: ["purana", "puranam", "pracina", "prachina", "pratna", "puratana", "cirantana", "ancient", "old"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "पुराणप्रत्नप्रल्यग्रचिरन्तनपुरातनाः — पुरापि नवं पुराणमिति निरुक्तम् ।",
    lakshanaIast: "purāṇapratnapralyagracirantanapurātanāḥ — purāpi navaṃ purāṇam iti niruktam |",
    meaningShort: "Ancient, primeval, or timeless (purātana / prācīna) — analyzed by Yāska as 'though ancient, ever new' (purā nava).",
    meaningDeep: "Derived by Pāṇini's Aṣṭādhyāyī 4.3.23 (sāyamciramprāhneprage'vyayebhyaṣ ṭyuṭyulau tuṭ ca — with purā taking special nipātana purāṇa in 4.3.105 purāṇaprokteṣu brāhmaṇakalpeṣu, f. purāṇī), purāṇa is given a luminous nirukti by Yāska in Nirukta 3.19: purā navaṃ bhavati ('though from of old, it remains ever fresh'). Kālidāsa echoes both poles in Mālavikāgnimitra 1.2: purāṇam ity eva na sādhu sarvam ('not all is good merely because it is old').",
    padaccheda: [
      { deva: "पुराण-प्रत्न-चिरन्तन-पुरातनाः", iast: "purāṇa-pratna-cirantana-purātanāḥ", gloss: "ancient, primeval, immemorial (Amarakośa 3.1.79)" },
      { deva: "पुरा अपि नवम् पुराणम्", iast: "purā api navam purāṇam", gloss: "ancient yet ever-fresh (Nirukta 3.19)" }
    ],
    source: {
      grantha: "Nirukta, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "निरुक्तम् · अष्टाध्यायी · अमरकोशः",
      author: "Yāska / Pāṇini / Amarasimha",
      locator: "Nirukta 3.19; Aṣṭādhyāyī 4.3.105; Amarakośa 3.1.79"
    },
    related: ["nava-new", "nitya", "kala", "smriti"]
  },
  {
    id: "priya",
    deva: "प्रियः / प्रिया / प्रियम्",
    iast: "priyaḥ / priyā / priyam",
    stem: "priya",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["dear", "beloved", "pleasing", "fond of", "kindly"],
    phoneticAliases: ["priya", "priyam", "priyah", "preyas", "preshtha", "dayita", "vallabha", "dear", "beloved"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "प्रीणातीति प्रियः — प्रियो दयितो वल्लभः प्रेयान् प्रेष्ठश्चेति स्नेहपात्रम् ।",
    lakshanaIast: "prīṇātīti priyaḥ — priyo dayito vallabhaḥ preyān preṣṭhaś ceti snehapātram |",
    meaningShort: "Dear, beloved, or gladdening (prīṇātīti priyaḥ) — yielding comparative preyas and superlative preṣṭha.",
    meaningDeep: "Derived from √prī ('prīñ tarpaṇakāntyoḥ', 9U, 'to gladden / love') via ka-pratyaya (igupadhajñāprīkiraḥ kaḥ, Aṣṭādhyāyī 3.1.135) and replacing priya- with pra- in comparative preyas ('dearer / immediate pleasure', contrasted with śreyas, 'ultimate good', in Kaṭha Upaniṣad 1.2.2) and superlative preṣṭha ('most beloved', 6.4.157), priya anchors Sanskrit ethics of speech: satyaṃ brūyāt priyaṃ brūyāt ('speak what is true, speak what is kindly').",
    padaccheda: [
      { deva: "प्रीणाति इति प्रियः", iast: "prīṇāti iti priyaḥ", gloss: "that which gladdens and delights the heart (√prī + ka)" },
      { deva: "प्रेयान् / प्रेष्ठः", iast: "preyān / preṣṭhaḥ", gloss: "dearer / dearest (īyasun & iṣṭhan via pra- substitution)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Kaṭhopaniṣad",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · कठोपनिषद्",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 3.1.135 & 6.4.157; Amarakośa 3.1.48; Kaṭha 1.2.2"
    },
    related: ["dhatu-snih", "dhatu-ish", "bhakti", "madhura"]
  },
  {
    id: "sadhu",
    deva: "साधुः / साध्वी / साधु",
    iast: "sādhuḥ / sādhvī / sādhu",
    stem: "sādhu",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["good", "virtuous", "noble", "grammatically correct", "well done! (adv.)"],
    phoneticAliases: ["sadhu", "saadhu", "sadhuh", "sadhvi", "sajjana", "arya", "good", "noble", "virtuous"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "साध्नोति परकार्यमिति साधुः — सज्जनः सभ्यः सुजनः साधुः शब्दानुशासने च साधुशब्दः ।",
    lakshanaIast: "sādhnoti parakāryam iti sādhuḥ — sajjanaḥ sabhyaḥ sujanaḥ sādhuḥ śabdānuśāsane ca sādhuśabdaḥ |",
    meaningShort: "Good, righteous, saintly, and in Vyākaraṇa 'grammatically well-formed and Dharmically meritorious' (sādhu-śabda).",
    meaningDeep: "Formed from √sādh ('sādha saṃsiddhau', 5P, 'to accomplish') via Uṇādi -u (f. sādhvī), sādhu governs the locative of the person toward whom one is kind by Aṣṭādhyāyī 2.3.43 (sādhunipuṇābhyām arcāyāṃ saptamy aprateḥ: mātari sādhuḥ, 'devoted/good to his mother'). In Patañjali's Mahābhāṣya (Paspaśāhnika), vyākaraṇa itself is the science of distinguishing sādhu words from apaśabdas, while sādhu! sādhu! is Sanskrit's classic exclamation of applause ('Bravo! Well said!').",
    padaccheda: [
      { deva: "साध्नोति पर-कार्यम् इति साधुः", iast: "sādhnoti para-kāryam iti sādhuḥ", gloss: "one who accomplishes the welfare of others (traditional nirukti)" },
      { deva: "मातरि साधुः", iast: "mātari sādhuḥ", gloss: "good/devoted toward one's mother (+ locative, Aṣṭ. 2.3.43)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Mahābhāṣya & Amarakośa",
      granthaDeva: "अष्टाध्यायी · महाभाष्यम् · अमरकोशः",
      author: "Pāṇini / Patañjali / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.43; Amarakośa 2.7.3 & 3.1.49"
    },
    related: ["shubha", "dhira", "dharma", "satya"]
  },
  {
    id: "dhira",
    deva: "धीरः / धीरा / धीरम्",
    iast: "dhīraḥ / dhīrā / dhīram",
    stem: "dhīra",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["wise", "steadfast", "self-possessed", "courageous", "deep-toned"],
    phoneticAliases: ["dhira", "dheera", "dhirah", "dhiram", "dhairya", "manishi", "wise", "steadfast"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "विकारहेतौ सति विक्रियन्ते येषां न चेतांसि त एव धीराः । धियं ईरयति धरति वेति धीरः ॥",
    lakshanaIast: "vikārahetau sati vikriyante yeṣāṃ na cetāṃsi ta eva dhīrāḥ | dhiyaṃ īrayati dharati veti dhīraḥ ||",
    meaningShort: "Wise, unshakably steadfast, and serene — 'those whose minds remain unperturbed even amidst causes of agitation'.",
    meaningDeep: "Uniting two classical derivations — dhī + ra ('possessed of luminous wisdom', Amarakośa 1.5.5 dhīmanīṣā & prājño dhīraḥ) and √dhṛ ('steadfast, courageous', abstract noun dhairya) — dhīra is memorably defined by Kālidāsa in Kumārasambhava 1.59: 'They alone are dhīras whose minds do not waver even when causes of perturbation are present' (cf. Gītā 2.13 dhīras tatra na muhyati). Sanskrit dramaturgy classifies noble protagonists into four types headed by dhīrodātta.",
    padaccheda: [
      { deva: "विकार-हेतौ सति", iast: "vikāra-hetau sati", gloss: "even when a cause of emotional disturbance is present" },
      { deva: "न विक्रियन्ते येषाम् चेतांसि", iast: "na vikriyante yeṣām cetāṃsi", gloss: "those whose minds do not waver" },
      { deva: "ते एव धीराः", iast: "te eva dhīrāḥ", gloss: "they alone are truly steadfast sages (Kumārasambhava 1.59)" }
    ],
    source: {
      grantha: "Kumārasambhava, Bhagavadgītā & Amarakośa",
      granthaDeva: "कुमारसम्भवम् · भगवद्गीता · अमरकोशः",
      author: "Kālidāsa / Vyāsa / Amarasimha",
      locator: "Kumārasambhava 1.59; Bhagavadgītā 2.13; Amarakośa 1.5.5"
    },
    related: ["vira", "prajna-adj", "shama", "titiksha", "dhatu-dhri"]
  },
  {
    id: "vira",
    deva: "वीरः (शूरः)",
    iast: "vīraḥ (śūraḥ)",
    stem: "vīra",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["heroic", "valiant", "brave", "champion"],
    phoneticAliases: ["vira", "veera", "virah", "shura", "shoora", "vikranta", "virya", "heroic", "brave"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "शूरो वीरश्च विक्रान्तो — विविधमीरयति शत्रून् क्लेशान् वेति वीर उत्साहस्थायिभावः ।",
    lakshanaIast: "śūro vīraś ca vikrānto — vividham īrayati śatrūn kleśān veti vīra utsāhasthāyibhāvaḥ |",
    meaningShort: "Heroic, valiant, and spirited — animated by tireless energy (utsāha) in battle, charity, compassion, or dharma.",
    meaningDeep: "Traced by Yāska (Nirukta 1.7: vīrayati amitrān, or √aj/√īr 'who drives back foes and inner afflictions'; abstract noun vīrya, 'valor/potency') and paired with śūra and vikrānta in Amarakośa 2.8.98, vīra gives its name to vīra-rasa in Sanskrit aesthetics, whose abiding emotion is utsāha ('resolute enthusiasm') manifested across four classic domains: dānavīra (hero in generosity), dayāvīra (hero in compassion), dharmavīra (hero in righteousness), and yuddhavīra.",
    padaccheda: [
      { deva: "शूरः वीरः विक्रान्तः", iast: "śūraḥ vīraḥ vikrāntaḥ", gloss: "valiant, heroic, courageous (Amarakośa 2.8.98)" },
      { deva: "उत्साह-स्थायिभावः", iast: "utsāha-sthāyibhāvaḥ", gloss: "grounded in resolute energy (utsāha)" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Sāhityadarpaṇa",
      granthaDeva: "अमरकोशः · निरुक्तम् · साहित्यदर्पणः",
      author: "Amarasimha / Yāska / Viśvanātha",
      locator: "Amarakośa 2.8.98; Nirukta 1.7; Sāhityadarpaṇa 3.232"
    },
    related: ["dhira", "bala", "dhatu-ji", "dhatu-bhi"]
  },
  {
    id: "prajna-adj",
    deva: "प्राज्ञः / प्राज्ञा / प्राज्ञम् (विद्वान्)",
    iast: "prājñaḥ / prājñā / prājñam (vidvān)",
    stem: "prājña",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["wise", "learned", "discerning", "intelligent", "sagacious"],
    phoneticAliases: ["prajna", "praajna", "prajnah", "vidvan", "pandita", "budha", "kovida", "sudhi", "learned", "wise"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "विद्वान् विपश्चिद्दोषज्ञः सन्सुधीः कोविदो बुधः । धीरो मनीषी ज्ञः प्राज्ञः संख्यावान् पण्डितः कविः ॥",
    lakshanaIast: "vidvān vipaścid doṣajñaḥ san sudhīḥ kovido budhaḥ | dhīro manīṣī jñaḥ prājñaḥ saṅkhyāvān paṇḍitaḥ kaviḥ ||",
    meaningShort: "Learned, discerning, and wise — endowed with mature prajñā ('penetrating wisdom').",
    meaningDeep: "Derived from prajñā ('discriminative wisdom', pra + √jñā + aṅ) via secondary taddhita affix ṇa / aṇ by Aṣṭādhyāyī 5.4.38 (prajñādibhyaś ca: prajñā asyāstīti prājñaḥ; f. prājñā or prājñī), prājña stands at the heart of Amarakośa's celebrated string of eighteen synonyms for the wise scholar (Brahmavarga 2.7.5–6: vidvān, vipaścit, sudhīḥ, kovidaḥ, budhaḥ, manīṣī, prājñaḥ, paṇḍitaḥ, kaviḥ). Note its distinction from the Upaniṣadic noun Prājña (the Lord / self in deep sleep, prajna-form).",
    padaccheda: [
      { deva: "प्रज्ञा अस्य अस्ति इति प्राज्ञः", iast: "prajñā asya asti iti prājñaḥ", gloss: "one endowed with discerning wisdom (prajñā + ṇa, Aṣṭ. 5.4.38)" },
      { deva: "विद्वान् सुधीः पण्डितः बुधः", iast: "vidvān sudhīḥ paṇḍitaḥ budhaḥ", gloss: "learned, clear-minded, scholarly, awakened (Amarakośa 2.7.5)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 2.7.5; Aṣṭādhyāyī 5.4.38"
    },
    related: ["dhatu-jna", "dhatu-vid", "dhira", "prajna-form"]
  },
  {
    id: "shubha",
    deva: "शुभः / शुभा / शुभम् (भद्रम्)",
    iast: "śubhaḥ / śubhā / śubham (bhadram)",
    stem: "śubha",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["auspicious", "radiant", "good", "wholesome", "blessed"],
    phoneticAliases: ["shubha", "subha", "shubham", "bhadra", "bhadram", "kalyana", "mangala", "shiva-auspicious", "auspicious"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "श्वःश्रेयसं शिवं भद्रं कल्याणं मङ्गलं शुभम् — शोभते लोकहितं जनयतीति शुभम् ।",
    lakshanaIast: "śvaḥśreyasaṃ śivaṃ bhadraṃ kalyāṇaṃ maṅgalaṃ śubham — śobhate lokahitaṃ janayatīti śubham |",
    meaningShort: "Auspicious, radiant, and conducive to spiritual and worldly welfare (kalyāṇa / maṅgala / bhadra).",
    meaningDeep: "Derived from √śubh ('śubha dīptau', 1Ā: śobhate, 'shines brightly / lookssplendid') via ka-pratyaya, śubha links aesthetic radiance with moral and spiritual auspiciousness. Amarakośa 1.4.25 groups śubham with śivam, bhadram, kalyāṇam, maṅgalam, and bhāvukam; in Vedāntic meditation theory, śubhāśraya ('the Pure, Auspicious Form of Viṣṇu') is the sole faultless object capable of purifying the mind.",
    padaccheda: [
      { deva: "शिवम् भद्रम् कल्याणम् मङ्गलम् शुभम्", iast: "śivam bhadram kalyāṇam maṅgalam śubham", gloss: "auspiciousness, blessing, true welfare (Amarakośa 1.4.25)" },
      { deva: "शोभते इति शुभम्", iast: "śobhate iti śubham", gloss: "that which shines with purity and goodness (√śubh + ka)" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "Amarakośa 1.4.25 (Svargavarga)"
    },
    related: ["sadhu", "sundara", "svasti", "pavitra"]
  },
  {
    id: "sundara",
    deva: "सुन्दरम् / चारु / रमणीयम्",
    iast: "sundaram / cāru / ramaṇīyam",
    stem: "sundara",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["beautiful", "lovely", "charming", "graceful", "delightful"],
    phoneticAliases: ["sundara", "sundaram", "sundari", "caru", "charu", "ramaniya", "manohara", "kanta", "beautiful", "lovely"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "सुन्दरं रुचिरं चारु सुषमं साधु शोभनम् । कान्तं मनोरमं रुच्यं मनोज्ञं मञ्जु मञ्जुलम् ॥",
    lakshanaIast: "sundaraṃ ruciraṃ cāru suṣamaṃ sādhu śobhanam | kāntaṃ manoramaṃ rucyaṃ manojñaṃ mañju mañjulam ||",
    meaningShort: "Beautiful, lovely, and heart-delighting (cāru / ramaṇīya / manohara).",
    meaningDeep: "Immortalized in Amarakośa 3.1.52's melodious twelve-synonym śloka (sundaraṃ ruciraṃ cāru...; f. sundarī via ṅīp), sundara is paired in Sanskrit aesthetics with Jagannātha Paṇḍitarāja's philosophical definition of ramaṇīyatā in Rasagaṅgādhara 1.1: ramaṇīyatā ca lokottarāhlādajanakajñānagocaratā ('beauty is that quality whose contemplation awakens transcendent, disinterested delight'). In the Rāmāyaṇa, the Sundarakāṇḍa takes its name from moral and spiritual beauty.",
    padaccheda: [
      { deva: "सुन्दरम् रुचिरम् चारु", iast: "sundaram ruciram cāru", gloss: "beautiful, radiant, graceful (Amarakośa 3.1.52)" },
      { deva: "मनोरमम् मनोज्ञम् मञ्जुलम्", iast: "manoramam manojñam mañjulam", gloss: "delighting the mind, charming, sweet" }
    ],
    source: {
      grantha: "Amarakośa & Rasagaṅgādhara",
      granthaDeva: "अमरकोशः · रसगङ्गाधरः",
      author: "Amarasimha / Jagannātha Paṇḍitarāja",
      locator: "Amarakośa 3.1.52; Rasagaṅgādhara Ānana 1"
    },
    related: ["shubha", "madhura", "nava-new", "priya"]
  },
  {
    id: "madhura",
    deva: "मधुरम् / स्वादु",
    iast: "madhuraḥ / madhurā / madhuram (svādu)",
    stem: "madhura",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["sweet", "melodious", "mellifluous", "gentle", "charming"],
    phoneticAliases: ["madhura", "madhuram", "svadu", "swadu", "madhurya", "sweet", "melodious"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "मधुरो रसो गुडादिगतः — स्वादुप्रियं च मधुरं श्रव्येऽपि मधुरा गिरः ।",
    lakshanaIast: "madhuro raso guḍādigataḥ — svādupriyaṃ ca madhuraṃ śravye'pi madhurā giraḥ |",
    meaningShort: "Sweet in taste (the first of the six rasas) and melodious/tender in speech and poetry (mādhurya-guṇa).",
    meaningDeep: "Derived from madhu ('honey/nectar') via possessory suffix ra by Aṣṭādhyāyī 5.2.107 (ūṣasuṣimuṣkamadho raḥ: madhu asyāstīti madhuraḥ), madhura heads the six gustatory tastes (ṣaḍrasa) of Vaiśeṣika and Āyurveda (madhura, amla, lavaṇa, kaṭu, tikta, kaṣāya; Amarakośa 1.5.18) and names mādhurya, the supreme poetic style-quality (kāvya-guṇa) that melts the heart with sweetness (āhlādakatvaṃ mādhuryam, Kāvyaprakāśa 8) and inspires Vallabhācārya's Madhuraṣṭakam (madhurādhipater akhilaṃ madhuram).",
    padaccheda: [
      { deva: "मधु अस्य अस्ति इति मधुरः", iast: "madhu asya asti iti madhuraḥ", gloss: "honey-sweet, possessing sweetness (madhu + ra, Aṣṭ. 5.2.107)" },
      { deva: "स्वादु श्रव्ये च मधुरम्", iast: "svādu śravye ca madhuram", gloss: "sweet to taste and melodious to the ear" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Kāvyaprakāśa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · काव्यप्रकाशः",
      author: "Pāṇini / Amarasimha / Mammaṭa",
      locator: "Aṣṭādhyāyī 5.2.107; Amarakośa 1.5.18; Kāvyaprakāśa 8.68"
    },
    related: ["tikta", "komala", "priya", "sundara"]
  },
  {
    id: "tikta",
    deva: "तिक्तम् / कटु",
    iast: "tiktam / kaṭu",
    stem: "tikta",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["bitter (tikta)", "pungent / sharp (kaṭu)", "harsh (of words)"],
    phoneticAliases: ["tikta", "tiktam", "katu", "katuka", "bitter", "pungent"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "मधुरोऽम्लो लवणस्तिक्तः कटुकः कषाय इति षड्रसाः — निम्बादिरसस्तिक्तो मरिचादिरसः कटुः ।",
    lakshanaIast: "madhuro'mlo lavaṇas tiktaḥ kaṭukaḥ kaṣāya iti ṣaḍrasāḥ — nimbādirasas tikto maricādirasaḥ kaṭuḥ |",
    meaningShort: "Bitter (tikta, as neem) and pungent/acrid (kaṭu, as pepper or harsh speech) among the six classical tastes.",
    meaningDeep: "Classical Sanskrit carefully distinguishes tikta (from √tij 'to be sharp', literally 'bitter' like neem/nimba, prized in Āyurveda for purifying fevers and restoring appetite) from kaṭu / kaṭuka ('pungent, hot, spicy' like black pepper or ginger, and figuratively 'harsh, biting speech': kaṭuvākya — unlike modern Hindi where tīkhā shifted to spicy!). Amarakośa 1.5.18 lists both side by side within the canonical ṣaḍrasa.",
    padaccheda: [
      { deva: "निम्ब-आदि-रसः तिक्तः", iast: "nimba-ādi-rasaḥ tiktaḥ", gloss: "the bitter taste exemplified by neem" },
      { deva: "मरिच-आदि-रसः कटुः", iast: "marica-ādi-rasaḥ kaṭuḥ", gloss: "the pungent/spicy taste exemplified by black pepper" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭāṅgahṛdaya",
      granthaDeva: "अमरकोशः · अष्टाङ्गहृदयम्",
      author: "Amarasimha / Vāgbhaṭa",
      locator: "Amarakośa 1.5.18; Aṣṭāṅgahṛdaya Sūtrasthāna 10.1"
    },
    related: ["madhura", "ushna", "kathina"]
  },
  {
    id: "shita",
    deva: "शीतम् / शीतलम्",
    iast: "śītam / śītalam",
    stem: "śīta",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["cool", "cold", "soothing", "refreshing", "serene"],
    phoneticAliases: ["shita", "sheeta", "shitam", "shitala", "sheetala", "hima", "shishira", "cool", "cold"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "तुषारः शिशिरः शीतो हिमः — शीतस्पर्शगुणविशिष्टं शीतलं सुखदं च ।",
    lakshanaIast: "tuṣāraḥ śiśiraḥ śīto himaḥ — śītasparśaguṇaviśiṣṭaṃ śītalaṃ sukhadaṃ ca |",
    meaningShort: "Cool, cold, or soothingly refreshing (śītala / śiśira) — the natural tactile quality of water and moonlight.",
    meaningDeep: "Derived from √śyai ('śyaiṅ gatau', 1Ā: śyāyate 'congeals/cools', kta participle śīta alongside śīna and śyāna with distinct shades per Aṣṭādhyāyī 6.1.24–26: śīta = cool/cold, śīna = congealed), and extended with -la by 5.2.122 (śītala, 'pleasantly cool'), śīta is identified in Vaiśeṣika physics as the intrinsic tactile attribute of elemental water (śītasparśavatyo āpaḥ, Tarkasaṅgraha 11) and in kāvya with sandalwood, moonlight (śītāṃśu), and saintly compassion.",
    padaccheda: [
      { deva: "शिशिरः शीतः हिमः", iast: "śiśiraḥ śītaḥ himaḥ", gloss: "cool, cold, frosty (Amarakośa 1.3.21)" },
      { deva: "शीत-स्पर्श-गुण-विशिष्टम्", iast: "śīta-sparśa-guṇa-viśiṣṭam", gloss: "endowed with cool touch (defining ap / water)" }
    ],
    source: {
      grantha: "Amarakośa, Aṣṭādhyāyī & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · अष्टाध्यायी · तर्कसङ्ग्रहः",
      author: "Amarasimha / Pāṇini / Annambhaṭṭa",
      locator: "Amarakośa 1.3.21; Aṣṭādhyāyī 6.1.24; Tarkasaṅgraha 11"
    },
    related: ["ushna", "titiksha", "pancabhuta"]
  },
  {
    id: "ushna",
    deva: "उष्णम्",
    iast: "uṣṇam",
    stem: "uṣṇa",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["warm", "hot", "ardent", "fervid", "summer heat (n.)"],
    phoneticAliases: ["ushna", "ushnam", "tigma", "tapta", "gharma", "warm", "hot"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "तिग्मं तीक्ष्णं खरं चोष्णम् — उष्णस्पर्शवत्तेजः ।",
    lakshanaIast: "tigmaṃ tīkṣṇaṃ kharaṃ coṣṇam — uṣṇasparśavat tejaḥ |",
    meaningShort: "Warm, hot, or radiant with heat — the defining tactile attribute of tejas / agni (fire & light).",
    meaningDeep: "Derived from √uṣ ('uṣa dāhe', 1P: oṣati, 'burns/warms') via Uṇādi -na (retroflexed to -ṇa after ṣ), uṣṇa forms the classic dual pair śītoṣṇa ('cold and heat', the primary dvandva endured through titikṣā in Bhagavadgītā 2.14: mātrāsparśās tu kaunteya śītoṣṇasukhaduḥkhadāḥ). In Nyāya-Vaiśeṣika ontology, hot touch is the unique lakṣaṇa of elemental fire/light (uṣṇasparśavat tejaḥ, Tarkasaṅgraha 12), while in phonetics ūṣman names the sibilants and aspirate (ś, ṣ, s, h).",
    padaccheda: [
      { deva: "तिग्मम् तीक्ष्णम् उष्णम्", iast: "tigmam tīkṣṇam uṣṇam", gloss: "ardent, intense, hot (Amarakośa 1.3.22)" },
      { deva: "उष्ण-स्पर्श-वत् तेजः", iast: "uṣṇa-sparśa-vat tejaḥ", gloss: "that which possesses warm/hot touch is tejas (Tarkasaṅgraha 12)" }
    ],
    source: {
      grantha: "Amarakośa & Tarkasaṅgraha",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः",
      author: "Amarasimha / Annambhaṭṭa",
      locator: "Amarakośa 1.3.22; Tarkasaṅgraha 12"
    },
    related: ["shita", "agni", "titiksha", "pancabhuta"]
  },
  {
    id: "komala",
    deva: "कोमलम् / मृदु",
    iast: "komalam / mṛdu",
    stem: "komala",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["soft", "tender", "delicate", "gentle", "mild"],
    phoneticAliases: ["komala", "komalam", "mridu", "mrdu", "sukumara", "pelava", "soft", "tender", "gentle"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "कोमलं मृदुलं मृदु सुकुमारं च पेलवम् — वज्रादपि कठोराणि मृदूनि कुसुमादपि ॥",
    lakshanaIast: "komalaṃ mṛdulaṃ mṛdu sukumāraṃ ca pelavam — vajrād api kaṭhorāṇi mṛdūni kusumād api ||",
    meaningShort: "Soft, tender, delicate, and gentle in touch, voice, or heart (mṛdu / sukumāra).",
    meaningDeep: "Paired in Amarakośa 3.1.68 with mṛdu (f. mṛdvī; comp. mradīyas, sup. mradiṣṭha by 6.4.161), mṛdula, sukumāra, and pelava, komala and mṛdu span physical suppleness (mārdava), flat/lowered musical notes (komala-svara in classical rāga theory), voiced consonants (mṛdu-vyañjana), and Bhavabhūti's celebrated portrait of magnanimous hearts in Uttararāmacarita 2.7: vajrād api kaṭhorāṇi mṛdūni kusumād api ('firmer than a thunderbolt in duty, yet tenderer than a flower in compassion').",
    padaccheda: [
      { deva: "कोमलम् मृदुलम् मृदु सुकुमारम्", iast: "komalam mṛdulam mṛdu sukumāram", gloss: "soft, tender, delicate, gentle (Amarakośa 3.1.68)" },
      { deva: "मृदूनि कुसुमात् अपि", iast: "mṛdūni kusumāt api", gloss: "softer even than a blossom (Uttararāmacarita 2.7)" }
    ],
    source: {
      grantha: "Amarakośa & Uttararāmacarita",
      granthaDeva: "अमरकोशः · उत्तररामचरितम्",
      author: "Amarasimha / Bhavabhūti",
      locator: "Amarakośa 3.1.68; Uttararāmacarita 2.7"
    },
    related: ["kathina", "madhura", "dhatu-snih"]
  },
  {
    id: "kathina",
    deva: "कठिनम् / दृढम्",
    iast: "kaṭhinam / dṛḍham",
    stem: "kaṭhina",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["hard", "firm", "solid", "difficult", "resolute (dṛḍha)"],
    phoneticAliases: ["kathina", "kathinam", "kathora", "dridha", "drdha", "karkasha", "hard", "firm", "difficult"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "कठोरं निष्ठुरं दृढं कर्कशं कठिनं घनम् — कठिनं दुर्भेद्यं दृढं च सुनिश्चलम् ।",
    lakshanaIast: "kaṭhoraṃ niṣṭhuraṃ dṛḍhaṃ karkaśaṃ kaṭhinaṃ ghanam — kaṭhinaṃ durbhedyaṃ dṛḍhaṃ ca suniścalam |",
    meaningShort: "Hard, solid, difficult (kaṭhina), and unshakably firm or resolute (dṛḍha).",
    meaningDeep: "Grouped in Amarakośa 3.1.67 with kaṭhora, karkaśa, ghana, and dṛḍha (kta of √dṛṃh 'to make firm', taking irregular comparative draḍhīyas and superlative draḍhiṣṭha by Aṣṭādhyāyī 6.4.157), kaṭhina describes physical hardness (kāṭhinya) or intellectual difficulty, while dṛḍha carries high philosophical honor: dṛḍha-vrata ('firm in vow'), dṛḍha-bhūmi ('firmly grounded yogic practice', Yogasūtra 1.14), and dṛḍha-niścaya ('unwavering conviction').",
    padaccheda: [
      { deva: "कठोरम् दृढम् कर्कशम् कठिनम्", iast: "kaṭhoram dṛḍham karkaśam kaṭhinam", gloss: "hard, firm, rugged, solid (Amarakośa 3.1.67)" },
      { deva: "दृढम् सुनिश्चलम्", iast: "dṛḍham suniścalam", gloss: "steadfast, unshakably resolved" }
    ],
    source: {
      grantha: "Amarakośa & Yogasūtra",
      granthaDeva: "अमरकोशः · योगसूत्रम्",
      author: "Amarasimha / Patañjali",
      locator: "Amarakośa 3.1.67; Yogasūtra 1.14"
    },
    related: ["komala", "dhira", "durlabha"]
  },
  {
    id: "shukla",
    deva: "शुक्लः / शुक्ला / शुक्लम् (श्वेतः)",
    iast: "śuklaḥ / śuklā / śuklam (śvetaḥ)",
    stem: "śukla",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["white", "bright", "resplendent", "pure", "waxing (lunar fortnight)"],
    phoneticAliases: ["shukla", "shuklam", "shveta", "sweta", "sitA-white", "dhavala", "gaura", "white", "bright"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "शुक्लशुभ्रशुचिश्वेतविशदश्येतपाण्डराः । अवदातः सितो गौरो धवलोऽर्जुनः — प्रकाशकं निर्मलं सत्त्वरूपम् ॥",
    lakshanaIast: "śuklaśubhraśuciśvetaviśadaśyetapāṇḍarāḥ | avadātaḥ sito gauro dhavalo'rjunaḥ — prakāśakaṃ nirmalaṃ sattvarūpam ||",
    meaningShort: "White, luminous, and spotless (śveta / dhavala / śubhra) — the symbolic color of sattva, fame, and purity.",
    meaningDeep: "Opening Amarakośa's color-lexicon (Śabdādivarga 1.5.12–13: śukla, śubhra, śuci, śveta, viśada, sita, gaura, dhavala, arjuna — note Aṣṭādhyāyī 4.1.39 varṇād anudāttāt topadhāt to naḥ forming archaic feminine śvetā / śyenī), śukla derives from √śuc ('to shine brightly'). It names the bright waxing lunar fortnight (śuklapakṣa), the Śukla Yajurveda revealed by Aditya, and in Sāṅkhya-Vedānta iconography (Śvetāśvatara 4.5) the luminous white strand of pure sattva-guṇa.",
    padaccheda: [
      { deva: "शुक्ल-शुभ्र-शुचि-श्वेत-धवलाः", iast: "śukla-śubhra-śuci-śveta-dhavalāḥ", gloss: "white, radiant, spotless, gleaming (Amarakośa 1.5.12)" },
      { deva: "प्रकाशकम् सत्त्व-रूपम्", iast: "prakāśakam sattva-rūpam", gloss: "luminous emblem of sattva and clarity" }
    ],
    source: {
      grantha: "Amarakośa & Śvetāśvataropaniṣad",
      granthaDeva: "अमरकोशः · श्वेताश्वतरोपनिषद्",
      author: "Amarasimha",
      locator: "Amarakośa 1.5.12–13; Śvetāśvatara Upaniṣad 4.5"
    },
    related: ["krishna-color", "rakta-color", "shuddha", "gunatraya", "hamsa"]
  },
  {
    id: "krishna-color",
    deva: "कृष्णः / कृष्णा / कृष्णम् (श्यामः)",
    iast: "kṛṣṇaḥ / kṛṣṇā / kṛṣṇam (śyāmaḥ)",
    stem: "kṛṣṇa",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["dark", "black", "deep sapphire-blue (śyāma)", "waning (lunar fortnight)"],
    phoneticAliases: ["krishna-adj", "krishnam", "shyama", "shyamala", "asita", "kalA-dark", "dark", "black"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "कृष्णनीलासितश्यामकालश्यामलमेचकाः — सजलजलदश्यामो वर्णविशेषः ।",
    lakshanaIast: "kṛṣṇanīlāsitaśyāmakālaśyāmalamecakāḥ — sajalajaladaśyāmo varṇaviśeṣaḥ |",
    meaningShort: "Dark, black, or raincloud-deep blue (śyāma / asita) — opposed to śukla in color and lunar calendars.",
    meaningDeep: "Catalogued in Amarakośa 1.5.14 with nīla, asita ('non-white'), śyāma (specifically the lustrous dark-blue hue of rain-laden clouds or tamāla leaves), kāla, śyāmala, and mecaka, the color-adjective kṛṣṇa names the waning lunar fortnight (kṛṣṇapakṣa), the Kṛṣṇa Yajurveda, the black antelope (kṛṣṇasāra), and — alongside its deeper mahāyoga etymology kṛṣir bhūvācakaḥ śabdo ṇaś ca nirvṛtivācakaḥ — the cloud-dark radiance of Śrī Kṛṣṇa and Rāma (nīlāmbudaśyāmalakomalaṅgam).",
    padaccheda: [
      { deva: "कृष्ण-नील-असित-श्याम-श्यामलाः", iast: "kṛṣṇa-nīla-asita-śyāma-śyāmalāḥ", gloss: "black, dark-blue, non-white, raincloud-dark (Amarakośa 1.5.14)" },
      { deva: "सजल-जलद-श्यामः", iast: "sajala-jalada-śyāmaḥ", gloss: "deep lustrous hue of a rain-filled cloud" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "Amarakośa 1.5.14 (Śabdādivarga)"
    },
    related: ["krishna", "shukla", "nila", "andhakara"]
  },
  {
    id: "rakta-color",
    deva: "रक्तः / रक्ता / रक्तम् (अरुणः)",
    iast: "raktaḥ / raktā / raktam (aruṇaḥ)",
    stem: "rakta",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["red", "crimson", "ruddy (aruṇa)", "impassioned / devoted", "dyed"],
    phoneticAliases: ["rakta", "raktam", "aruna", "lohita", "shona", "patala", "red", "crimson"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "रक्तो रोहित आरक्तो लोहितः शोण इत्यपि — अरुणो भास्करप्रभः पद्मरागसमप्रभः ।",
    lakshanaIast: "rakto rohita ārakto lohitaḥ śoṇa ity api — aruṇo bhāskaraprabhaḥ padmarāgasamaprabhaḥ |",
    meaningShort: "Red, crimson, or dawn-ruddy (lohita / śoṇa / aruṇa) — also 'colored / impassioned' from √rañj.",
    meaningDeep: "Formed as the kta participle of √rañj ('rañja rāge', 1U/4U: rajyati, dropping its nasal by 6.4.24 → rakta, 'dyed / colored / enamored'; negated in virakta, 'dispassionate / renunciant'), rakta is grouped in Amarakośa 1.5.15 with lohita, rohita, śoṇa, and dawn-tinted aruṇa (Sūrya's charioteer, Dawn). In Śvetāśvatara Upaniṣad 4.5 (lohita-śukla-kṛṣṇām), red symbolizes energetic rajo-guṇa.",
    padaccheda: [
      { deva: "रक्तः रोहितः लोहितः शोणः अरुणः", iast: "raktaḥ rohitaḥ lohitaḥ śoṇaḥ aruṇaḥ", gloss: "crimson, ruby-red, ruddy, dawn-hued (Amarakośa 1.5.15)" },
      { deva: "रञ्ज् + क्त = रक्तः", iast: "rañj + kta = raktaḥ", gloss: "colored, red, or emotionally attached (neg. virakta)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 1.5.15; Aṣṭādhyāyī 6.4.24"
    },
    related: ["shukla", "krishna-color", "pita-color", "vairagya", "gunatraya"]
  },
  {
    id: "pita-color",
    deva: "पीतः / पीता / पीतम्",
    iast: "pītaḥ / pītā / pītam",
    stem: "pīta",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["yellow", "golden", "saffron-hued"],
    phoneticAliases: ["pita", "peeta", "pitam", "gaura-yellow", "haridra", "pitambara", "yellow", "golden"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "पीतो गौरो हरिद्राभः — सुवर्णचम्पकनिभो वर्णः पीताम्बरादिषु ।",
    lakshanaIast: "pīto gauro haridrābhaḥ — suvarṇacampakanibho varṇaḥ pītāmbarādiṣu |",
    meaningShort: "Yellow, golden, or turmeric-bright (haridrābha) — celebrated in Viṣṇu's epithet Pītāmbara.",
    meaningDeep: "Listed in Amarakośa 1.5.14 (pīto gauro haridrābhaḥ — distinct from homophonous pīta 'drunk', kta of √pā), the color-word pīta evokes burnished gold, campaka blossoms, lightning against dark monsoon clouds, and turmeric auspiciousness. Its most famous bahuvrīhi compound is Pītāmbara ('He whose garment is golden silk' — pītam ambaram yasya saḥ, standard textbook exemplar of bahuvrīhi samāsa under Aṣṭādhyāyī 2.2.24 anekam anyapadārthe).",
    padaccheda: [
      { deva: "पीतः गौरः हरिद्रा-आभः", iast: "pītaḥ gauraḥ haridrā-ābhaḥ", gloss: "yellow, golden-fair, turmeric-hued (Amarakośa 1.5.14)" },
      { deva: "पीत-अम्बरः", iast: "pīta-ambaraḥ", gloss: "clad in golden raiment (bahuvrīhi epithet of Viṣṇu)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 1.5.14; Aṣṭādhyāyī 2.2.24"
    },
    related: ["rakta-color", "harita", "vishnu", "krishna"]
  },
  {
    id: "harita",
    deva: "हरितः / हरिता / हरितम्",
    iast: "haritaḥ / haritā / haritam",
    stem: "harita",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["green", "verdant", "emerald-hued", "freshly sprouting"],
    phoneticAliases: ["harita", "haritam", "harit", "palasha-green", "marakata", "green", "verdant"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "पलाशो हरितो हरित् — शष्पमरकतशुकपक्षनिभो वर्णः ।",
    lakshanaIast: "palāśo harito harit — śaṣpamarakataśukapakṣanibho varṇaḥ |",
    meaningShort: "Green, verdant, or emerald-bright (palāśa / harit) — the color of young grass, foliage, and Sūrya's steeds.",
    meaningDeep: "Grouped concisely in Amarakośa 1.5.15 (palāśo harito harit; archaic fem. hariṇī alongside haritā by Aṣṭādhyāyī 4.1.39–40), harita derives from √hṛ ('captivating the eye / carrying away fatigue') and describes young sprouting kusa/dūrvā grass (śaṣpa), emeralds (marakata / harinmaṇi), parrot plumage, and in Vedic mythology the radiant bay/green steeds (haritaḥ) yoked to Sūrya's chariot.",
    padaccheda: [
      { deva: "पलाशः हरितः हरित्", iast: "palāśaḥ haritaḥ harit", gloss: "foliage-green, verdant, emerald (Amarakośa 1.5.15)" },
      { deva: "शष्प-मरकत-निभः", iast: "śaṣpa-marakata-nibhaḥ", gloss: "resembling young grass and emerald" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "Amarakośa 1.5.15 (Śabdādivarga)"
    },
    related: ["pita-color", "nila", "nava-new"]
  },
  {
    id: "nila",
    deva: "नीलः / नीला / नीलम्",
    iast: "nīlaḥ / nīlā / nīlam",
    stem: "nīla",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["blue", "sapphire-blue", "indigo", "deep azure"],
    phoneticAliases: ["nila", "neela", "nilam", "indranila", "nilotpala", "blue", "sapphire"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "नीलमिन्द्रनीलनिभं खपुष्पनीलोत्पलादिवर्णः — नीलं चोलादिष्वनुषज्यते ।",
    lakshanaIast: "nīlam indranīlanibhaṃ khapuṣpanīlotpalādivarṇaḥ — nīlaṃ colādiṣv anuṣajyate |",
    meaningShort: "Deep blue, indigo, or sapphire-hued — standard exemplar of karmadhāraya qualification (nīlotpalam).",
    meaningDeep: "Derived from √nīl ('nīla varṇe', 1P: nīlati, 'is dyed deep blue'; f. nīlā for color/cloth and nīlī for the indigo plant by Aṣṭādhyāyī 4.1.42 jānapadakuṇḍagoṇasthalabhājanāgakālanīlakuśakāmukakabarāt...), nīla gives Sanskrit logic and poetics their favorite example of substance-attribute qualification (viśeṣaṇa-viśeṣya-bhāva): nīlam utpalam → nīlotpalam ('blue lotus'), alongside indranīla (sapphire) and Nīlakaṇṭha.",
    padaccheda: [
      { deva: "इन्द्रनील-निभम् नीलम्", iast: "indranīla-nibham nīlam", gloss: "sapphire-blue, deep azure" },
      { deva: "नील-उत्पलम्", iast: "nīla-utpalam", gloss: "blue lotus (canonical karmadhāraya compound)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 1.5.14; Aṣṭādhyāyī 4.1.42 & 2.1.57 (viśeṣaṇaṃ viśeṣyeṇa bahulam)"
    },
    related: ["krishna-color", "harita", "shukla", "vishishta"]
  },
  {
    id: "shuddha",
    deva: "शुद्धम् / निर्मलम्",
    iast: "śuddham / nirmalam",
    stem: "śuddha",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["pure", "clean", "untainted", "clear", "unmixed / faultless"],
    phoneticAliases: ["shuddha", "suddha", "shuddham", "nirmala", "vimala", "amala", "shuci", "pure", "clean"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "शुद्धोऽमलो निर्मलश्च विमलो वीतकल्मषः — मलरहितमसंकीर्णं च शुद्धम् ।",
    lakshanaIast: "śuddho'malo nirmalaś ca vimalo vītakalmaṣaḥ — malarahitam asaṃkīrṇaṃ ca śuddham |",
    meaningShort: "Pure, spotless, unmixed, and free from dross or blemish (nirmala / vimala / śuci).",
    meaningDeep: "Formed as the kta participle of √śudh ('śundha śuddhau', 4P: śudhyati, 'becomes pure', with Bartholomae's voiced aspiration dh + ta → ddha by Aṣṭādhyāyī 8.2.40), śuddha signifies physical cleanliness, textual accuracy (śuddha-pāṭha), moral-mental clarity (citta-śuddhi — prerequisite for Vedāntic realization), and metaphysical freedom from prakṛtic taint (śuddha-sattva / nirdoṣa).",
    padaccheda: [
      { deva: "शुद्धः अमलः निर्मलः विमलः", iast: "śuddhaḥ amalaḥ nirmalaḥ vimalaḥ", gloss: "pure, spotless, stainless, untainted (Amarakośa)" },
      { deva: "मल-रहितम् असंकीर्णम्", iast: "mala-rahitam asaṃkīrṇam", gloss: "devoid of impurity and unadulterated" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.1.55–56; Aṣṭādhyāyī 8.2.40"
    },
    related: ["pavitra", "shukla", "dhatu-dhav", "narayana"]
  },
  {
    id: "pavitra",
    deva: "पवित्रम् / पूतम्",
    iast: "pavitram / pūtam",
    stem: "pavitra",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["sacred", "sanctifying", "purifying", "holy"],
    phoneticAliases: ["pavitra", "pavitram", "puta", "poota", "medhya", "pavana", "sacred", "holy"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "पूञ् पवने · पुवः संज्ञायाम् — पुनातीति पवित्रं मेध्यं पूतं पावनं च (न हि ज्ञानेन सदृशं पवित्रमिह विद्यते) ॥",
    lakshanaIast: "pūñ pavane · puvaḥ saṃjñāyām — punātīti pavitraṃ medhyaṃ pūtaṃ pāvanaṃ ca (na hi jñānena sadṛśaṃ pavitram iha vidyate) ||",
    meaningShort: "Sacred and actively sanctifying (punātīti pavitram) — that which purifies whatever contacts it.",
    meaningDeep: "Derived explicitly by Pāṇini's Aṣṭādhyāyī 3.2.185 (puvaḥ saṃjñāyām) from √pū ('pūñ pavane', 9U: punāti / punīte, 'purifies') with instrumental affix itra (karaṇe itraḥ: 'that by means of which purification is wrought'; passive participle pūta, active agent pāvana), pavitra goes beyond passive śuddha ('clean in itself') to signify active sanctifying power — crowned by Bhagavadgītā 4.38: na hi jñānena sadṛśaṃ pavitram iha vidyate ('Truly, nothing in this world purifies like spiritual knowledge') and Gītā 10.12 (pavitram paramaṃ bhavān).",
    padaccheda: [
      { deva: "पुनाति इति पवित्रम्", iast: "punāti iti pavitram", gloss: "that which sanctifies and purifies (√pū + itra, Aṣṭ. 3.2.185)" },
      { deva: "ज्ञानेन सदृशम् पवित्रम्", iast: "jñānena sadṛśam pavitram", gloss: "a purifier comparable to true knowledge (Gītā 4.38)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · भगवद्गीता",
      author: "Pāṇini / Amarasimha / Vyāsa",
      locator: "Aṣṭādhyāyī 3.2.185; Amarakośa 2.7.45 & 3.1.56; Bhagavadgītā 4.38"
    },
    related: ["shuddha", "shubha", "dhatu-jna", "brahman"]
  },
  {
    id: "sulabha",
    deva: "सुलभः / सुलभा / सुलभम्",
    iast: "sulabhaḥ / sulabhā / sulabham",
    stem: "sulabha",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["easy to attain", "accessible", "readily found", "effortless"],
    phoneticAliases: ["sulabha", "sulabham", "sukara", "sugama", "easy", "accessible"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "ईषद्दुःसुषु कृच्छ्राकृच्छ्रार्थेषु खल् — सुखेन लभ्यते इति सुलभः (अनन्यचेताः सततं तस्याहं सुलभः पार्थ) ॥",
    lakshanaIast: "īṣadduḥsuṣu kṛcchrākṛcchrārtheṣu khal — sukhena labhyate iti sulabhaḥ (ananyacetāḥ satataṃ tasyāhaṃ sulabhaḥ pārtha) ||",
    meaningShort: "Easily attained or readily accessible (sukhena labhyaḥ) — formed with su + √labh + khal.",
    meaningDeep: "Formed by Pāṇini's Aṣṭādhyāyī 3.3.126 (īṣadduḥsuṣu kṛcchrākṛcchrārtheṣu khal), which attaches kṛdanta suffix khal (-a) in passive/karmārtha sense after su-, dur-, and īṣad- to express ease or difficulty: sukhena labhyate = sulabhaḥ ('easily won', parallel to sukara 'easy to do' and sugama 'easy to understand'). In Bhagavadgītā 8.14, Kṛṣṇa assures Arjuna that to the one-pointed, ever-remembering yogin, He is sulabhaḥ ('readily attainable').",
    padaccheda: [
      { deva: "सुखेन लभ्यते इति सुलभः", iast: "sukhena labhyate iti sulabhaḥ", gloss: "attained with ease (su + √labh + khal, Aṣṭ. 3.3.126)" },
      { deva: "तस्य अहम् सुलभः", iast: "tasya aham sulabhaḥ", gloss: "to that devoted yogin I am easily attainable (Gītā 8.14)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 3.3.126; Bhagavadgītā 8.14"
    },
    related: ["durlabha", "dhatu-labh", "bhakti", "satata"]
  },
  {
    id: "durlabha",
    deva: "दुर्लभः / दुर्लभा / दुर्लभम्",
    iast: "durlabhaḥ / durlabhā / durlabham",
    stem: "durlabha",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["hard to attain", "rare", "precious", "scarce"],
    phoneticAliases: ["durlabha", "durlabham", "dushkara", "durgama", "apurva", "rare", "precious"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "दुःखेन कृच्छ्रेण लभ्यते इति दुर्लभः — बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते स महात्मा सुदुर्लभः ॥",
    lakshanaIast: "duḥkhena kṛcchreṇa labhyate iti durlabhaḥ — bahūnāṃ janmanām ante jñānavān māṃ prapadyate sa mahātmā sudurlabhaḥ ||",
    meaningShort: "Rare, precious, and hard to win (kṛcchreṇa labhyaḥ) — the exact grammatical counterpart of sulabha.",
    meaningDeep: "Derived by the same Pāṇinian rule Aṣṭādhyāyī 3.3.126 (dur + √labh + khal → durlabhaḥ, 'attained only with great effort or rare grace', parallel to duṣkara and durgama), durlabha highlights spiritual preciousness across subhāṣitas and Vedānta: human birth, longing for liberation, and fellowship with the wise are praised as durlabha (mānuṣyaṃ mumukṣutvaṃ mahāpuruṣasaṃśrayaḥ), while Gītā 7.19 calls the fully illumined mahātman sudurlabhaḥ ('exceedingly rare').",
    padaccheda: [
      { deva: "कृच्छ्रेण लभ्यते इति दुर्लभः", iast: "kṛcchreṇa labhyate iti durlabhaḥ", gloss: "attained with difficulty, rare (dur + √labh + khal)" },
      { deva: "सः महात्मा सुदुर्लभः", iast: "saḥ mahātmā sudurlabhaḥ", gloss: "such a great soul is exceedingly rare (Gītā 7.19)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 3.3.126; Bhagavadgītā 7.19"
    },
    related: ["sulabha", "dhatu-labh", "kathina", "mahat"]
  },
  {
    id: "samana",
    deva: "समानः / समाना / समानम् (तुल्यः)",
    iast: "samānaḥ / samānā / samānam (tulyaḥ)",
    stem: "samāna",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["equal", "similar", "alike", "same", "even-minded (sama)"],
    phoneticAliases: ["samana", "samanam", "sama", "tulya", "sadisha", "sadrisha", "equal", "similar", "same"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "समं तुल्यं सदृक्षं च समानं सदृशं समम् — तुल्यार्थैरतुलोपमाभ्यां तृतीयान्यतरस्याम् ॥",
    lakshanaIast: "samaṃ tulyaṃ sadṛkṣaṃ ca samānaṃ sadṛśaṃ samam — tulyārthair atulopamābhyāṃ tṛtīyānyatarasyām ||",
    meaningShort: "Equal, alike, or sharing a common locus/measure (tulya / sadṛśa / sama).",
    meaningDeep: "Grouped in Amarakośa 2.10.37 with sama, tulya, and sadṛśa, samāna governs either the instrumental or the genitive of that with which equality is asserted by Aṣṭādhyāyī 2.3.72 (tulyārthair atulopamābhyāṃ tṛtīyānyatarasyām: kṛṣṇasya na ko'pi samānaḥ / pitrā pitur vā samānaḥ). In compounds samāna routinely contracts to sa- by 6.3.84 (samānasya cchandasy amūrdhaprabhṛtyudarkeṣu & 6.3.85 jyotirjanapada... / samānādhikaraṇa, sajātīya, savarṇa), and inspires the Ṛgveda's closing hymn of harmony (ṚV 10.191.4: samānī va ākūtiḥ samānā hṛdayāni vaḥ).",
    padaccheda: [
      { deva: "समम् तुल्यम् समानम् सदृशम्", iast: "samam tulyam samānam sadṛśam", gloss: "equal, equivalent, alike, similar (Amarakośa 2.10.37)" },
      { deva: "तुल्यार्थैः तृतीया षष्ठी वा", iast: "tulyārthaiḥ tṛtīyā ṣaṣṭhī vā", gloss: "construes with instrumental or genitive (Aṣṭ. 2.3.72)" }
    ],
    source: {
      grantha: "Amarakośa, Aṣṭādhyāyī & Ṛgveda",
      granthaDeva: "अमरकोशः · अष्टाध्यायी · ऋग्वेदः",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 2.10.37; Aṣṭādhyāyī 2.3.72 & 6.3.84; ṚV 10.191.4"
    },
    related: ["sadrishya", "anya", "bheda"]
  },
  {
    id: "uttama",
    deva: "उत्तमः / उत्तमा / उत्तमम् (श्रेष्ठः)",
    iast: "uttamaḥ / uttamā / uttamam (śreṣṭhaḥ)",
    stem: "uttama",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["highest", "best", "supreme", "most excellent", "first person (in grammar)"],
    phoneticAliases: ["uttama", "uttamam", "shreshtha", "srestha", "pravara", "parama", "agra", "best", "highest", "supreme"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "प्रवरो मुख्यः प्रवेकः श्रेष्ठ उत्तमः परमोऽग्र्यः — यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ॥",
    lakshanaIast: "pravaro mukhyaḥ pravekaḥ śreṣṭha uttamaḥ paramo'gryaḥ — yasmāt kṣaram atīto'ham akṣarād api cottamaḥ ato'smi loke vede ca prathitaḥ puruṣottamaḥ ||",
    meaningShort: "Highest, supreme, most excellent (śreṣṭha / parama) — crowning Puruṣottama ('Supreme Person').",
    meaningDeep: "Formed with superlative suffix tamap from ud- ('upward/above' → uttama, parallel to comparative uttara, 'higher/subsequent'), and paired in Amarakośa 3.1.57 with śreṣṭha (superlative of praśasya via śra- substitution, Aṣṭādhyāyī 5.3.60 praśasyasya śraḥ), pravara, and parama, uttama reaches its philosophical zenith in Bhagavadgītā 15.18: transcending both perishable kṣara beings and imperishable akṣara (Śrī/cit), Viṣṇu is celebrated across world and Veda as Puruṣottama.",
    padaccheda: [
      { deva: "प्रवरः श्रेष्ठः उत्तमः परमः", iast: "pravaraḥ śreṣṭhaḥ uttamaḥ paramaḥ", gloss: "foremost, best, highest, supreme (Amarakośa 3.1.57)" },
      { deva: "अक्षरात् अपि च उत्तमः", iast: "akṣarāt api ca uttamaḥ", gloss: "transcending even the Imperishable: Puruṣottama (Gītā 15.18)" }
    ],
    source: {
      grantha: "Amarakośa, Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अमरकोशः · अष्टाध्यायी · भगवद्गीता",
      author: "Amarasimha / Pāṇini / Vyāsa",
      locator: "Amarakośa 3.1.57; Aṣṭādhyāyī 5.3.60; Bhagavadgītā 15.18"
    },
    related: ["purusha", "vishnu", "ucca", "prathama", "taratamya"]
  },
  {
    id: "satata",
    deva: "सततम् / निरन्तरम्",
    iast: "satatam / nirantaram",
    stem: "satata",
    pos: "viśeṣaṇa (adj.)",
    englishGlosses: ["continuous", "constant", "uninterrupted", "perpetual", "ceaselessly (adv.)"],
    phoneticAliases: ["satata", "satatam", "nirantara", "nirantaram", "avirata", "santata", "ajasra", "continuous", "constant"],
    pillar: "kosha",
    domain: "Viśeṣaṇa (Qualities & Adjectives)",
    lakshanaDeva: "स्यादेकतानं सततमविरतसन्तताविरलान्यनारताजस्राणि निरन्तरम् — समं ततमविच्छिन्नं सततम् ।",
    lakshanaIast: "syād ekatānaṃ satatam aviratasantatāviralāny anāratājasrāṇi nirantaram — samaṃ tatam avicchinnaṃ satatam |",
    meaningShort: "Continuous, uninterrupted, and constant (nirantara / santata / avirata) — both adjective and adverbial accusative.",
    meaningDeep: "Derived from sam + √tan + kta (contracted to sa-tata alongside san-tata, 'stretched evenly without break'), and grouped in Amarakośa 1.1.66 with avirata, anārata, ajasra, and nirantara ('having no gap/interval within'), satata is used preeminently in its neuter accusative adverbial form satatam ('constantly / unceasingly' — kriyāviśeṣaṇa): satataṃ kīrtayanto māṃ yatantaś ca dṛḍhavratāḥ (Bhagavadgītā 9.14) and dīrghakāla-nairantarya-satkārāsevita in Yogasūtra 1.14.",
    padaccheda: [
      { deva: "सततम् अविरतम् सन्ततम् निरन्तरम्", iast: "satatam aviratam santatam nirantaram", gloss: "continuous, unceasing, unbroken, gapless (Amarakośa 1.1.66)" },
      { deva: "अविच्छिन्नम् सततम्", iast: "avicchinnam satatam", gloss: "uninterrupted across time" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha / Vyāsa",
      locator: "Amarakośa 1.1.66; Bhagavadgītā 9.14"
    },
    related: ["sada", "nitya", "sulabha"]
  },

  // ============================================================================
  // Domain 3: Avyaya & Nipāta (Indeclinables & Particles) — 46 entries
  // ============================================================================
  {
    id: "ca-avyaya",
    deva: "च",
    iast: "ca",
    stem: "ca",
    pos: "avyaya (ind.)",
    englishGlosses: ["and", "also", "both...and", "moreover"],
    phoneticAliases: ["ca", "cha", "and", "also"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "चादयोऽसत्त्वे · चान्वयचयसमाहारेतरेतरयोगसमुच्चयेषु — सदृशं त्रिषु लिङ्गेषु सर्वासु च विभक्तिषु वचनेषु च सर्वेषु यन्न व्येति तदव्ययम् ॥",
    lakshanaIast: "cādayo'sattve · cānvayacayasamāhāretaretarayogasamuccayeṣu — sadṛśaṃ triṣu liṅgeṣu sarvāsu ca vibhaktiṣu vacaneṣu ca sarveṣu yan na vyeti tad avyayam ||",
    meaningShort: "And, also, moreover — the enclitic conjunctive nipāta heading Pāṇini's cādi-gaṇa and defining dvandva compounds.",
    meaningDeep: "Placed first in Pāṇini's cādi-gaṇa of non-substantive particles (Aṣṭādhyāyī 1.4.57 cādayo'sattve, therefore an avyaya by 1.1.37 svarādinipātam avyayam whose case endings undergo luk-elision by 2.4.82), enclitic ca never stands at the start of a sentence or metrical pāda. Classical grammar and Amarakośa 3.4.1 distinguish four semantic functions of ca (cārthe dvandvaḥ, 2.2.29): samuccaya (simple addition), anvācaya (collateral instruction), itaretarayoga (mutual conjunction), and samāhāra (collective unity); in sūtra literature it also draws anuvṛtti forward from prior rules.",
    padaccheda: [
      { deva: "चादयः असत्त्वे", iast: "cādayaḥ asattve", gloss: "ca and its class are nipātas when not denoting a substance (Aṣṭ. 1.4.57)" },
      { deva: "यत् न व्येति तत् अव्ययम्", iast: "yat na vyeti tat avyayam", gloss: "that which never alters across gender, case, or number is an avyaya" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Mahābhāṣya & Amarakośa",
      granthaDeva: "अष्टाध्यायी · महाभाष्यम् · अमरकोशः",
      author: "Pāṇini / Patañjali / Amarasimha",
      locator: "Aṣṭādhyāyī 1.4.57, 1.1.37 & 2.2.29; Amarakośa 3.4.1"
    },
    related: ["va-avyaya", "api", "eva"]
  },
  {
    id: "va-avyaya",
    deva: "वा",
    iast: "vā",
    stem: "vā",
    pos: "avyaya (ind.)",
    englishGlosses: ["or", "optionally (in grammar)", "either...or", "like / as (poetic)"],
    phoneticAliases: ["va", "vaa", "athava", "or", "optionally"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "उपमायां विकल्पे वा · न वेति विभाषा — पक्षान्तरसमुच्चयोपमावाचि निपाताव्ययम् ।",
    lakshanaIast: "upamāyāṃ vikalpe vā · na veti vibhāṣā — pakṣāntarasamuccayopamāvāci nipātāvyayam |",
    meaningShort: "Or, alternatively, optionally — the enclitic disjunctive particle and Pāṇini's marker of grammatical option (vikalpa).",
    meaningDeep: "Enclitic like ca (always placed after the word it modifies: rāmo lakṣmaṇo vā), vā expresses disjunction/option (vikalpa), poetic simile (= iva, Amarakośa 3.4.3 upamāyāṃ vikalpe vā), and in Pāṇini's Aṣṭādhyāyī 1.1.44 (na veti vibhāṣā) combines with na to define the technical term vibhāṣā ('prohibition plus option'). Combined with atha it forms sentence-initial athavā ('or rather / on second thought').",
    padaccheda: [
      { deva: "उपमायाम् विकल्पे वा", iast: "upamāyām vikalpe vā", gloss: "vā expresses comparison ('like') and disjunction ('or', Amarakośa 3.4.3)" },
      { deva: "न वा इति विभाषा", iast: "na vā iti vibhāṣā", gloss: "'not or optionally' defines Pāṇinian vibhāṣā (Aṣṭ. 1.1.44)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.4.3; Aṣṭādhyāyī 1.1.44 & 1.4.57"
    },
    related: ["ca-avyaya", "iva", "yadi"]
  },
  {
    id: "na-avyaya",
    deva: "न",
    iast: "na",
    stem: "na",
    pos: "avyaya (ind.)",
    englishGlosses: ["not", "no", "nor", "like (in Vedic Mantra only)"],
    phoneticAliases: ["na", "naiva", "nahi", "not", "no"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "प्रतिषेधे नञ् निपातश्च — तत्सादृश्यमभावश्च तदन्यत्वं तदल्पता अप्राशस्त्यं विरोधश्च नञर्थाः षट् प्रकीर्तिताः ॥",
    lakshanaIast: "pratiṣedhe nañ nipātaś ca — tatsādṛśyam abhāvaś ca tadanyatvaṃ tadalpatā aprāśastyaṃ virodhaś ca nañarthāḥ ṣaṭ prakīrtitāḥ ||",
    meaningShort: "Not, no — the universal particle of propositional negation (pratiṣedha) and source of nañ-tatpuruṣa compounds.",
    meaningDeep: "In syntax na negates a finite predicate (prasajya-pratiṣedha: na gacchati, 'does not go'; doubled in Nyāya as double negation returning positive reality, or in Upaniṣadic neti neti denying finite limitations of Brahman). When compounded as nañ (Aṣṭādhyāyī 2.2.6 nañ, reducing to a- before consonants and an- before vowels by 6.3.73–74), scholastics analyze six classic shades of nañ (nañarthāḥ ṣaṭ): similarity (abrāhmaṇa), absence (ajñāna), difference (anaśva), smallness (anudara), impropriety (akāla), and contrariety (adharma). Yāska (Nirukta 1.4) notes that in Vedic mantras na can also mean 'like' (iva).",
    padaccheda: [
      { deva: "प्रतिषेधे न", iast: "pratiṣedhe na", gloss: "na in the sense of negation / denial" },
      { deva: "नञर्थाः षट्", iast: "nañarthāḥ ṣaṭ", gloss: "the six canonical semantic functions of negative prefix nañ" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Nirukta & Nyāyakośa",
      granthaDeva: "अष्टाध्यायी · निरुक्तम्",
      author: "Pāṇini / Yāska",
      locator: "Aṣṭādhyāyī 2.2.6 & 6.3.73; Nirukta 1.4"
    },
    related: ["ma-avyaya", "abhava", "asat", "badham"]
  },
  {
    id: "ma-avyaya",
    deva: "मा",
    iast: "mā",
    stem: "mā",
    pos: "avyaya (ind.)",
    englishGlosses: ["do not! (prohibitive)", "lest", "may one never"],
    phoneticAliases: ["ma", "maa", "masma", "maivam", "do not"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "माङि लुङ् · न माङ्योगे — मा गमः मा शुच इति निषेधप्रार्थनयोर्मङ्गलवाचि च निपाताव्ययम् ।",
    lakshanaIast: "māṅi luṅ · na māṅyoge — mā gamaḥ mā śuca iti niṣedhaprārthanayor maṅgalavāci ca nipātāvyayam |",
    meaningShort: "Do not! — the prohibitive particle (māṅ) construing with augmentless aorist (luṅ) or imperative (loṭ).",
    meaningDeep: "Unlike declarative na, prohibitive mā (Pāṇini's māṅ) forbids or deprecates an action. By two famous sūtras — Aṣṭādhyāyī 3.3.175 (māṅi luṅ) and 6.4.74 (na māṅyoge) — mā triggers the aorist (luṅ) stripped of its past augment aṭ, producing timeless Sanskrit injunctions: mā śucaḥ ('Grieve not!', Bhagavadgītā 16.5 & 18.66), mā gamaḥ ('Do not go!'), klaibyaṃ mā sma gamaḥ pārtha (Gītā 2.3, with sma via 3.3.176), and Upaniṣadic mā vidviṣāvahai ('May we never harbor enmity!').",
    padaccheda: [
      { deva: "माङि लुङ्", iast: "māṅi luṅ", gloss: "with prohibitive māṅ, the aorist (luṅ) applies in all times (Aṣṭ. 3.3.175)" },
      { deva: "न माङ्-योगे", iast: "na māṅ-yoge", gloss: "augment aṭ/āṭ is suppressed in construction with māṅ (Aṣṭ. 6.4.74)" },
      { deva: "मा शुचः", iast: "mā śucaḥ", gloss: "'Do not grieve!' (augmentless luṅ 2nd sg.)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 3.3.175 & 6.4.74; Bhagavadgītā 18.66"
    },
    related: ["na-avyaya", "alam", "svasti"]
  },
  {
    id: "eva",
    deva: "एव",
    iast: "eva",
    stem: "eva",
    pos: "avyaya (ind.)",
    englishGlosses: ["indeed", "alone", "only", "the very same", "verily"],
    phoneticAliases: ["eva", "evam", "indeed", "only", "verily"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "एवकारोऽवधारणे — अयोगान्ययोगअत्यन्तायोगव्यवच्छेदास्त्रय एवकारार्थाः ।",
    lakshanaIast: "evakāro'vadhāraṇe — ayogānyayogātyantāyogavyavacchedās traya evakārārthāḥ |",
    meaningShort: "Alone, only, indeed, verily — Sanskrit's precision-instrument of logical restriction and emphasis (avadhāraṇa).",
    meaningDeep: "Postposed immediately after the word it restricts, eva is analyzed in Nyāya, Mīmāṃsā, and Vyākaraṇa through a celebrated triad of exclusions (vyavaccheda): (1) ayoga-vyavaccheda (with predicate: śaṅkhaḥ pāṇḍura eva, 'a conch is decidedly white' — excluding non-connection), (2) anyayoga-vyavaccheda (with subject: pārtha eva dhanurdharaḥ, 'Arjuna alone is the archer' — excluding connection with others), and (3) atyantāyoga-vyavaccheda (with verb: nīlaṃ sarojaṃ bhavaty eva, 'blue lotuses do indeed exist'). Compare satyam eva jayate ('Truth alone triumphs').",
    padaccheda: [
      { deva: "एव-कारः अवधारणे", iast: "eva-kāraḥ avadhāraṇe", gloss: "particle eva expresses exact restriction / emphasis" },
      { deva: "अयोग-अन्ययोग-अत्यन्तायोग-व्यवच्छेदाः", iast: "ayoga-anyayoga-atyantāyoga-vyavacchedāḥ", gloss: "the three logical exclusions governed by placement of eva" }
    ],
    source: {
      grantha: "Amarakośa & Kāvyaprakāśa / Siddhāntakaumudī",
      granthaDeva: "अमरकोशः · सिद्धान्तकौमुदी",
      author: "Amarasimha / Bhaṭṭoji Dīkṣita",
      locator: "Amarakośa 3.4.8; Siddhāntakaumudī on Vipratipatti"
    },
    related: ["khalu", "api", "satya"]
  },
  {
    id: "api",
    deva: "अपि",
    iast: "api",
    stem: "api",
    pos: "avyaya (ind.)",
    englishGlosses: ["also", "even", "though (yady api)", "sentence-initial yes/no question marker"],
    phoneticAliases: ["api", "yadyapi", "kopi", "also", "even"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "गर्हासमुच्चयप्रश्नशङ्कासंभावनास्वपि — पदार्थसमुच्चयप्रश्नादिवाचि निपातोपसर्गाव्ययम् ।",
    lakshanaIast: "garhāsamuccayapraśnaśaṅkāsaṃbhāvanāsv api — padārthasamuccayapraśnādivāci nipātopasargāvyayam |",
    meaningShort: "Also, even, although — and when placed at the very start of a sentence, a courteous yes/no question particle.",
    meaningDeep: "Governed by Aṣṭādhyāyī 1.4.96 (apiḥ padārthasaṃbhāvanānvavasargagarhāsamuccayeṣu) and summarized in Amarakośa 3.4.12, api displays remarkable syntactic versatility: postposed after a noun it means 'also / even' (rāmo'pi, 'Rāma too'; vajrād api kaṭhorāṇi, 'harder even than adamant'); after interrogatives it forms indefinites (ko'pi, 'someone'); paired with yadi (yady api... tathāpi) it means 'even though... nevertheless'; and placed first in a sentence (api kuśalaṃ bhavataḥ? / api tapo vardhate? Raghuvaṃśa 5.6) it marks a gentle polar question.",
    padaccheda: [
      { deva: "गर्हा-समुच्चय-प्रश्न-शङ्का-संभावनासु अपि", iast: "garhā-samuccaya-praśna-śaṅkā-saṃbhāvanāsu api", gloss: "api expresses censure, addition ('also/even'), question, doubt, and possibility (Amarakośa 3.4.12)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.4.96; Amarakośa 3.4.12"
    },
    related: ["ca-avyaya", "eva", "yadi", "kim"]
  },
  {
    id: "iti",
    deva: "इति",
    iast: "iti",
    stem: "iti",
    pos: "avyaya (ind.)",
    englishGlosses: ["thus", "end-quote marker", "because / thinking that", "so ends (chapter colophon)"],
    phoneticAliases: ["iti", "itihasa", "ityadi", "thus", "quote"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "हेतुप्रकरणप्रत्यक्षनिदर्शनसमाप्तिष्विति — शब्दस्वरूपानुकरणवाक्यपरिसमाप्तिवाचि निपाताव्ययम् ।",
    lakshanaIast: "hetuprakaraṇapratyakṣanidarśanasamāptiṣv iti — śabdasvarūpānukaraṇavākyaparisamāptivāci nipātāvyayam |",
    meaningShort: "Thus — Sanskrit's indispensable quotative complementizer, metalinguistic mention-marker, causal linker, and chapter closer.",
    meaningDeep: "Because Sanskrit manuscripts use no quotation marks, postposed iti performs the work of closing quotes for speech and inner thought alike, while preserving direct discourse syntax. Beyond quotation, Amarakośa 3.4.14 and Pāṇini 1.1.68 (svaṃ rūpaṃ śabdasyāśabdasaṃjñā — negated by iti when citing meanings vs. forms) highlight five functions of iti: hetu ('because'), prakāra ('in this manner'), nidarśana ('for instance', ityādi = 'et cetera'), svarūpabodha (citing a word), and samāpti ('Here concludes...', in śāstra colophons; cf. itihāsa = iti + ha + āsa, 'thus indeed it was').",
    padaccheda: [
      { deva: "हेतु-प्रकरण-निदर्शन-समाप्तिषु इति", iast: "hetu-prakaraṇa-nidarśana-samāptiṣu iti", gloss: "iti marks cause, manner/context, quotation/illustration, and conclusion (Amarakośa 3.4.14)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.4.14; Aṣṭādhyāyī 1.4.57 & 1.4.62"
    },
    related: ["evam", "tatha", "yatah", "hetu"]
  },
  {
    id: "iva",
    deva: "इव",
    iast: "iva",
    stem: "iva",
    pos: "avyaya (ind.)",
    englishGlosses: ["like", "as", "as it were", "as if"],
    phoneticAliases: ["iva", "upama", "like", "as if"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "इवेन सह नित्यसमासो विभक्त्यलोपश्च — सादृश्योत्प्रेक्षयोः परप्रयुक्तमुपमावाचकमव्ययम् ।",
    lakshanaIast: "ivena saha nityasamāso vibhaktyalopaś ca — sādṛśyotprekṣayoḥ paraprayuktam upamāvācakam avyayam |",
    meaningShort: "Like, as, as if — the enclitic particle of poetic simile (upamā) and imaginative fancy (utprekṣā).",
    meaningDeep: "Always placed immediately after the standard of comparison (upamāna) in its exact case (candra iva mukham, 'a face like the moon') or after a verb to signal poetic fancy (utprekṣā: limpatīva tamo'ṅgāni, 'darkness anoints the limbs, as it were'), iva enters an intimate phonological bond taught by Kātyāyana's vārttika (ivena saha samāso vibhaktyalopaś ca — compounding closely with its host without dropping the host's case ending, as in Kālidāsa's Raghuvaṃśa 1.1: vāgarthāv iva sampṛktau, 'fused together like word and meaning').",
    padaccheda: [
      { deva: "इवेन सह समासः विभक्ति-अलोपः च", iast: "ivena saha samāsaḥ vibhakti-alopaḥ ca", gloss: "iva compounds with its host while preserving the host's case ending (Vārttika on Aṣṭ. 2.1.4)" },
      { deva: "सादृश्य-उत्प्रेक्षयोः इव", iast: "sādṛśya-utprekṣayoḥ iva", gloss: "signifying simile ('like') and poetic fancy ('as if')" }
    ],
    source: {
      grantha: "Mahābhāṣya Vārttika & Amarakośa",
      granthaDeva: "महाभाष्यवार्त्तिकम् · अमरकोशः",
      author: "Kātyāyana / Amarasimha",
      locator: "Vārttika on Aṣṭādhyāyī 2.1.4; Amarakośa 3.4.9"
    },
    related: ["yatha", "sadrishya", "samana", "va-avyaya"]
  },
  {
    id: "yatha",
    deva: "यथा",
    iast: "yathā",
    stem: "yathā",
    pos: "avyaya (ind.)",
    englishGlosses: ["just as", "according to", "in whichever manner", "for instance (tad yathā)"],
    phoneticAliases: ["yatha", "yathaa", "yathashakti", "yathartham", "just as", "according to"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "प्रकारवचने थाल् · यथाऽसादृश्ये — योग्यतावीप्सापदार्थानतिवृत्तिसादृश्यानि यथार्थाः ।",
    lakshanaIast: "prakāravacane thāl · yathā'sādṛśye — yogyatāvīpsāpadārthānativṛttisādṛśyāni yathārthāḥ |",
    meaningShort: "Just as, in accordance with — relative adverb of manner formed from yad + thāl and governing avyayībhāva compounds.",
    meaningDeep: "Derived from relative yad via taddhita suffix thāl by Aṣṭādhyāyī 5.3.23 (prakāravacane thāl, an avyaya by 1.1.38 taddhitaś cāsarvavibhaktiḥ), yathā correlates with tathā ('just as... so too'). Pāṇini's Aṣṭādhyāyī 2.1.7 (yathā'sādṛśye) distinguishes four classical meanings of yathā, of which the first three form avyayībhāva compounds: yogyatā ('fitness': anurūpam), vīpsā ('distributiveness'), padārthānativṛtti ('not exceeding bounds': yathāśakti 'according to capacity', yathārtha 'true to reality'), and sādṛśya ('similarity').",
    padaccheda: [
      { deva: "प्रकार-वचने थाल्", iast: "prakāra-vacane thāl", gloss: "suffix -thā expresses manner (yad + thāl = yathā, Aṣṭ. 5.3.23)" },
      { deva: "योग्यता-वीप्सा-पदार्थानतिवृत्ति-सादृश्यानि", iast: "yogyatā-vīpsā-padārthānativṛtti-sādṛśyāni", gloss: "the four canonical senses of yathā" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.23 & 2.1.7; Amarakośa 3.4.4"
    },
    related: ["tatha", "yad", "iva", "katham"]
  },
  {
    id: "tatha",
    deva: "तथा",
    iast: "tathā",
    stem: "tathā",
    pos: "avyaya (ind.)",
    englishGlosses: ["so", "thus", "likewise", "in that manner", "so be it (tathāstu)"],
    phoneticAliases: ["tatha", "tathaa", "tathapi", "tathastu", "so", "likewise", "thus"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "तेन प्रकारेण तद्वदिति तथा — साम्यसमुच्चयनिश्चयाङ्गीकारेषु थालन्तमव्ययम् ।",
    lakshanaIast: "tena prakāreṇa tadvad iti tathā — sāmyasamuccayaniścayāṅgīkāreṣu thālantam avyayam |",
    meaningShort: "So, thus, likewise — the correlative adverb of manner (tad + thāl) answering yathā.",
    meaningDeep: "Formed symmetrically to yathā from demonstrative tad + thāl (Aṣṭādhyāyī 5.3.23), tathā completes comparative and proportional clauses (yathā bījaṃ tathāṅkuraḥ, 'as the seed, so the sprout'), links parallel statements ('and likewise': tathā ca śrutiḥ), forms concessive tathāpi ('nevertheless') with yady api, and seals blessings in tathāstu ('So may it be!').",
    padaccheda: [
      { deva: "तद् + थाल् = तथा", iast: "tad + thāl = tathā", gloss: "in that manner, likewise (taddhita avyaya)" },
      { deva: "साम्य-समुच्चय-अङ्गीकारेषु", iast: "sāmya-samuccaya-aṅgīkāreṣu", gloss: "expressing correspondence, addition ('likewise'), and assent ('so be it')" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.23; Amarakośa 3.4.5"
    },
    related: ["yatha", "tad-pron", "iti", "badham"]
  },
  {
    id: "yada",
    deva: "यदा",
    iast: "yadā",
    stem: "yadā",
    pos: "avyaya (ind.)",
    englishGlosses: ["when (relative)", "at whichever time", "whenever (yadā yadā)"],
    phoneticAliases: ["yada", "yadaa", "when", "whenever"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सर्वैकान्यकिंयत्तदः काले दा — यस्मिन् काले इति यदा (यदा यदा हि धर्मस्य ग्लानिर्भवति भारत) ।",
    lakshanaIast: "sarvaikānyakiṃyattadaḥ kāle dā — yasmin kāle iti yadā (yadā yadā hi dharmasya glānir bhavati bhārata) |",
    meaningShort: "When (relative) — temporal taddhita avyaya formed from yad + dā and paired with tadā.",
    meaningDeep: "Derived by Pāṇini's unified temporal rule Aṣṭādhyāyī 5.3.15 (sarvaikānyakiṃyattadaḥ kāle dā, attaching locative-temporal suffix -dā to sarva, eka, anya, kim, yad, and tad), yadā means yasmin kāle ('at which time'). Iterated in distributive vīpsā (8.1.4 nityavīpsayoḥ), it opens one of the world's best-known Sanskrit verses, Bhagavadgītā 4.7: yadā yadā hi dharmasya glānir bhavati bhārata... tadātmānaṃ sṛjāmy aham ('Whenever dharma declines... then do I manifest Myself').",
    padaccheda: [
      { deva: "यद् + दा = यदा", iast: "yad + dā = yadā", gloss: "at which time, when (locative-sense kāla-taddhita, Aṣṭ. 5.3.15)" },
      { deva: "यदा यदा", iast: "yadā yadā", gloss: "whenever (iterative vīpsā)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 5.3.15; Bhagavadgītā 4.7"
    },
    related: ["tada", "kada", "sada", "yad", "kala"]
  },
  {
    id: "tada",
    deva: "तदा",
    iast: "tadā",
    stem: "tadā",
    pos: "avyaya (ind.)",
    englishGlosses: ["then", "at that time", "in that case"],
    phoneticAliases: ["tada", "tadaa", "tadanim", "then"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "तदः काले दा (तदानीं च) — तस्मिन् काले इति तदा यदाशब्देन नित्यसम्बद्धमव्ययम् ।",
    lakshanaIast: "tadaḥ kāle dā (tadānīṃ ca) — tasmin kāle iti tadā yadāśabdena nityasambaddham avyayam |",
    meaningShort: "Then, at that time — the correlative temporal avyaya (tad + dā) answering yadā.",
    meaningDeep: "Formed from demonstrative tad + dā by Aṣṭādhyāyī 5.3.15 (alongside extended tadānīm by 5.3.19 tado dānīṃ ca), tadā anchors the main clause of temporal correlation: yadā... tadā ('when... then'), as in Patañjali's Yogasūtra 1.3: yogaś cittavṛttinirodhaḥ | tadā draṣṭuḥ svarūpe'vasthānam ('Then [upon the stilling of mental fluctuations], the Seer abides in his own true form').",
    padaccheda: [
      { deva: "तद् + दा = तदा", iast: "tad + dā = tadā", gloss: "at that time, then (Aṣṭ. 5.3.15)" },
      { deva: "तस्मिन् काले", iast: "tasmin kāle", gloss: "in that moment / juncture" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Yogasūtra",
      granthaDeva: "अष्टाध्यायी · योगसूत्रम्",
      author: "Pāṇini / Patañjali",
      locator: "Aṣṭādhyāyī 5.3.15 & 5.3.19; Yogasūtra 1.3"
    },
    related: ["yada", "kada", "tarhi", "adhuna"]
  },
  {
    id: "kada",
    deva: "कदा",
    iast: "kadā",
    stem: "kadā",
    pos: "avyaya (ind.)",
    englishGlosses: ["when?", "at what time?"],
    phoneticAliases: ["kada", "kadaa", "kadacit", "kadapi", "when?"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "किमः काले दा — कस्मिन् काले इति प्रश्नार्थकं कालाव्ययम् (कदाचिदपि चेति) ।",
    lakshanaIast: "kimaḥ kāle dā — kasmin kāle iti praśnārthakaṃ kālāvyayam (kadācid api ceti) |",
    meaningShort: "When? At what time? — the interrogative temporal avyaya (kim → ka + dā).",
    meaningDeep: "Derived from interrogative kim (substituted by ka- via 7.2.103 kimaḥ kaḥ) + temporal suffix dā (Aṣṭādhyāyī 5.3.15), kadā asks kasmin kāle ('at what time?'). Combined with enclitic cit, cana, or api, it produces indispensable classical expressions: kadācit ('sometimes / perhaps / once'), na kadācit / na kadāpi ('never at any time').",
    padaccheda: [
      { deva: "किम् (क) + दा = कदा", iast: "kim (ka) + dā = kadā", gloss: "at what time? when? (Aṣṭ. 5.3.15 & 7.2.103)" },
      { deva: "न कदापि", iast: "na kadāpi", gloss: "never at any time" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.3.15 & 7.2.103"
    },
    related: ["kim", "yada", "tada", "sada"]
  },
  {
    id: "sada",
    deva: "सदा / सर्वदा",
    iast: "sadā / sarvadā",
    stem: "sadā",
    pos: "avyaya (ind.)",
    englishGlosses: ["always", "ever", "at all times", "perpetually"],
    phoneticAliases: ["sada", "sadaa", "sarvada", "sarvadaa", "nityam", "always", "forever"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सधमादस्थयोश्छन्दसि · सर्वस्य सोऽन्यतरस्यां दीर्घाच्छि च (नित्यं सदा सर्वदेति) — सर्वस्मिन् काले सदा सर्वदा च ।",
    lakshanaIast: "sadhamādasthayoś chandasi · sarvasya so'nyatarasyāṃ dīrghāc chi ca (nityaṃ sadā sarvadeti) — sarvasmin kāle sadā sarvadā ca |",
    meaningShort: "Always, at all times — both sadā (with sa- replacement of sarva) and sarvadā.",
    meaningDeep: "Pāṇini's Aṣṭādhyāyī 5.3.6 (sarvasya so'nyatarasyāṃ dīrghāc chi ca — specifically before dā-group affixes per 5.3.15) explains why Sanskrit has two twin words for 'always': sarva + dā optionally contracts sarva- to sa-, yielding both terse poetic sadā and transparent sarvadā (paired in Amarakośa 3.4.18 with nityam, anāratam, and śaśvat). In compounds sadā shines in sadācāra ('perennial righteous conduct') and sadānanda ('ever-blissful').",
    padaccheda: [
      { deva: "सर्वस्य सः अन्यतरस्याम्", iast: "sarvasya saḥ anyatarasyām", gloss: "sarva optionally becomes sa- before temporal -dā (Aṣṭ. 5.3.6)" },
      { deva: "सदा / सर्वदा", iast: "sadā / sarvadā", gloss: "always, at every time" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.6 & 5.3.15; Amarakośa 3.4.18"
    },
    related: ["sarva", "satata", "nitya", "ekada"]
  },
  {
    id: "ekada",
    deva: "एकदा",
    iast: "ekadā",
    stem: "ekadā",
    pos: "avyaya (ind.)",
    englishGlosses: ["once", "one day", "at one and the same time / simultaneously"],
    phoneticAliases: ["ekada", "ekadaa", "yugapat", "sakrit", "once", "simultaneously"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "एकदा युगपत्सकृदस्मिन् काले चेति — एकस्मिन् काले सहैकवारं चेत्युभयार्थमव्ययम् ।",
    lakshanaIast: "ekadā yugapat sakṛd ekasmin kāle ceti — ekasmin kāle sahaikavāraṃ cety ubhayārtham avyayam |",
    meaningShort: "Once upon a time ('one day') AND simultaneously ('at one and the same time', yugapat).",
    meaningDeep: "Derived from eka + dā by Aṣṭādhyāyī 5.3.15, ekadā preserves both nuances of eka ('a certain one' and 'single/unified'): in narrative prose (Pañcatantra, Hitopadeśa, Itihāsa-Purāṇa) it opens stories with 'Once / One day' (ekadā kaścid vānaraḥ...), whereas Amarakośa 3.4.17 (yugapad ekadā) highlights its philosophical sense 'at one single moment / simultaneously'.",
    padaccheda: [
      { deva: "एक + दा = एकदा", iast: "eka + dā = ekadā", gloss: "at one time (Aṣṭ. 5.3.15)" },
      { deva: "युगपत् / एकस्मिन् काले", iast: "yugapat / ekasmin kāle", gloss: "simultaneously, or once upon a day (Amarakośa 3.4.17)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.15; Amarakośa 3.4.17"
    },
    related: ["eka", "sada", "yada", "adya"]
  },
  {
    id: "adya",
    deva: "अद्य",
    iast: "adya",
    stem: "adya",
    pos: "avyaya (ind.)",
    englishGlosses: ["today", "this day", "nowadays", "even now"],
    phoneticAliases: ["adya", "adyatanI", "today"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सद्यः परुत्परार्यैषमःपरेद्यव्यद्यपूर्व्येद्युरन्यतरस्याम् — अस्मिन्नहनि अद्येति निपातनादव्ययम् ।",
    lakshanaIast: "sadyaḥ parut parāry aiṣamaḥ paredyavy adyapūrvyedyur anyatarasyām — asminn ahani adyeti nipātanād avyayam |",
    meaningShort: "Today, on this very day (asminn ahani) — Pāṇini's temporal anchor for distinguishing past tenses.",
    meaningDeep: "Formed by irregular nipātana in Aṣṭādhyāyī 5.3.22 (replacing idam + ahan with a + dya, 'on this day'), adya provides the exact chronological pivot of Pāṇini's tense system: adyatana ('pertaining to the current day', via 4.3.23 → adyatanaḥ kālaḥ) governs the aorist luṅ (3.2.110 luṅ), whereas anadyatana ('prior to today', i.e., yesterday or earlier) governs the imperfect laṅ (3.2.111 anadyatane laṅ) and future luṭ (3.3.15 anadyatane luṭ: śvo bhavitā).",
    padaccheda: [
      { deva: "अस्मिन् अहनि = अद्य", iast: "asmin ahani = adya", gloss: "on this day, today (nipātana avyaya, Aṣṭ. 5.3.22)" },
      { deva: "अद्यतनः कालः", iast: "adyatanaḥ kālaḥ", gloss: "time belonging to the current day" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.22 & 3.2.111; Amarakośa 3.4.22"
    },
    related: ["shvah", "hyah", "adhuna", "idam"]
  },
  {
    id: "shvah",
    deva: "श्वः (श्वस्)",
    iast: "śvaḥ (śvas)",
    stem: "śvas",
    pos: "avyaya (ind.)",
    englishGlosses: ["tomorrow", "on the morrow", "in the future / hereafter"],
    phoneticAliases: ["shvah", "svah", "shvas", "parashvah", "tomorrow"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "अनागामिन्यहनि श्वः — अनद्यतने लुट् (श्वः कर्ता श्वो भविष्यति) ।",
    lakshanaIast: "anāgāminy ahani śvaḥ — anadyatane luṭ (śvaḥ kartā śvo bhaviṣyati) |",
    meaningShort: "Tomorrow, on the coming day — member of Pāṇini's svarādi-gaṇa and paradigm trigger of periphrastic future luṭ.",
    meaningDeep: "Listed near the top of the svarādi-gaṇa (Aṣṭādhyāyī 1.1.37 svarādinipātam avyayam: svar, antar, prātar, punar, sanutar, uccais, nīcais, śanais, ṛdhak... śvas, hyas), śvas ('tomorrow'; paraśvaḥ = 'day after tomorrow') exemplifies Pāṇini's future-tense rule 3.3.15 (anadyatane luṭ: śvo draṣṭā, 'he will see tomorrow', alongside general lṛṭ śvo drakṣyati). Extended into śvaḥśreyasa ('that which brings welfare in the hereafter', Amarakośa 1.4.25), it also signifies auspiciousness.",
    padaccheda: [
      { deva: "आगामिनि अहनि श्वः", iast: "āgāmini ahani śvaḥ", gloss: "on the coming day: tomorrow (Amarakośa 3.4.22)" },
      { deva: "परश्वः", iast: "paraśvaḥ", gloss: "the day after tomorrow" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.37 & 3.3.15; Amarakośa 3.4.22"
    },
    related: ["adya", "hyah", "kala", "shubha"]
  },
  {
    id: "hyah",
    deva: "ह्यः (ह्यस्)",
    iast: "hyaḥ (hyas)",
    stem: "hyas",
    pos: "avyaya (ind.)",
    englishGlosses: ["yesterday", "on the preceding day"],
    phoneticAliases: ["hyah", "hyas", "parahyah", "yesterday"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "गतेऽहनि ह्यः पूर्वेद्युश्च — अनद्यतने लङ् (ह्योऽगच्छत्) ।",
    lakshanaIast: "gate'hani hyaḥ pūrvedyuś ca — anadyatane laṅ (hyo'gacchat) |",
    meaningShort: "Yesterday, on the bygone day — the svarādi avyaya naturally construed with imperfect past laṅ.",
    meaningDeep: "Paired with śvas in Pāṇini's svarādi-gaṇa (1.1.37) and Amarakośa 3.4.22 (gate'hani hyaḥ; parahyaḥ = 'day before yesterday'; adjective hyastana = 'yesterday's'), hyas (cognate with Greek chthes and Latin heri) is the textbook temporal trigger for the imperfect past tense laṅ under Aṣṭādhyāyī 3.2.111 (anadyatane laṅ: hyo grāmam agacchat, 'yesterday he went to the village').",
    padaccheda: [
      { deva: "गते अहनि ह्यः", iast: "gate ahani hyaḥ", gloss: "on the day just past: yesterday (Amarakośa 3.4.22)" },
      { deva: "ह्यः अगच्छत्", iast: "hyaḥ agacchat", gloss: "yesterday he went (imperfect laṅ, Aṣṭ. 3.2.111)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.37 & 3.2.111; Amarakośa 3.4.22"
    },
    related: ["adya", "shvah", "kala"]
  },
  {
    id: "adhuna",
    deva: "अधुना / इदानीम्",
    iast: "adhunā / idānīm",
    stem: "adhunā",
    pos: "avyaya (ind.)",
    englishGlosses: ["now", "at this present moment", "presently"],
    phoneticAliases: ["adhuna", "adhunaa", "idanim", "idaanim", "samprati", "sampratam", "now"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "इदमोऽधुनोदात्तश्च · इदम इश् (इदानीम्) — साम्प्रतं सम्प्रत्यधुनेदानीमस्मिन् काले ।",
    lakshanaIast: "idamo'dhunodāttaś ca · idama iś (idānīm) — sāmprataṃ sampraty adhunedānīm asmin kāle |",
    meaningShort: "Now, at this very time — derived by Pāṇini from proximal idam (adhunā / idānīm / samprati).",
    meaningDeep: "Pāṇini's Aṣṭādhyāyī 5.3.17–18 (adhunā and idamo dānīm with iś substitution → adhunā and idānīm) derives both principal words for 'now' directly from proximal stem idam ('in this present time'), grouped in Amarakośa 3.4.23 with samprati and sāmpratam. In śāstric commentary prose, idānīm and adhunā briskly transition to the next step of argument ('Now, let us examine...').",
    padaccheda: [
      { deva: "अधुना / इदानीम्", iast: "adhunā / idānīm", gloss: "now, at this present juncture (from idam, Aṣṭ. 5.3.17–18)" },
      { deva: "सम्प्रति साम्प्रतम्", iast: "samprati sāmpratam", gloss: "presently, right now (Amarakośa 3.4.23)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.17–18; Amarakośa 3.4.23"
    },
    related: ["idam", "adya", "tada"]
  },
  {
    id: "punah",
    deva: "पुनः (पुनर्)",
    iast: "punaḥ (punar)",
    stem: "punar",
    pos: "avyaya (ind.)",
    englishGlosses: ["again", "anew", "once more", "on the other hand / however (tu)"],
    phoneticAliases: ["punah", "punar", "bhuyah", "punarapi", "punahpunah", "again"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "पुनरप्रथमभावे विशेषे च — रो रि · ढ्रलोपे पूर्वस्य दीर्घोऽणः (पुनारमते पुनरपि) ।",
    lakshanaIast: "punar aprathamabhāve viśeṣe ca — ro ri · ḍhralope pūrvasya dīrgho'ṇaḥ (punā ramate punar api) |",
    meaningShort: "Again, anew (aprathamabhāva), or contrastively 'whereas / on the other hand' (viśeṣa).",
    meaningDeep: "Because its true underlying stem in the svarādi-gaṇa (1.1.37) ends in r (punar, not *punas!), its sandhi differs crucially from s-final words: before vowels and voiced consonants r remains even after a (punar api, punar gacchati), and before r-initial words the first r drops with compensatory lengthening by Aṣṭādhyāyī 8.3.14 & 6.3.111 (punar + ramate → punā ramate; punar + racayati → punā racayati). Iterated punaḥ punaḥ expresses continual repetition, while kiṃ punaḥ means 'how much more so!'.",
    padaccheda: [
      { deva: "पुनर् अप्रथम-भावे", iast: "punar aprathama-bhāve", gloss: "punar in the sense of repetition ('again', Amarakośa 3.4.16)" },
      { deva: "विशेषे च", iast: "viśeṣe ca", gloss: "and in contrastive distinction ('on the other hand')" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.4.16; Aṣṭādhyāyī 1.1.37 & 8.3.14"
    },
    related: ["antah", "bahih", "satata"]
  },
  {
    id: "shanaih",
    deva: "शनैः",
    iast: "śanaiḥ",
    stem: "śanais",
    pos: "avyaya (ind.)",
    englishGlosses: ["slowly", "gradually", "gently", "step by step"],
    phoneticAliases: ["shanaih", "sanaih", "shanais", "mandam", "shanaihshanaih", "slowly", "gradually"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "शनैर्मन्दं क्रमेणाव्ययम् — शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया (शनैः पन्थाः शनैः कन्था शनैः पर्वतलंघनम्) ॥",
    lakshanaIast: "śanair mandaṃ krameṇāvyayam — śanaiḥ śanair uparamed buddhyā dhṛtigṛhītayā (śanaiḥ panthāḥ śanaiḥ kanthā śanaiḥ parvatalaṅghanam) ||",
    meaningShort: "Slowly, gently, gradually — the svarādi adverb of patient, step-by-step mastery.",
    meaningDeep: "Preserved as a fossilized archaic instrumental plural in the svarādi-gaṇa (Aṣṭādhyāyī 1.1.37: uccais, nīcais, śanais), śanaiḥ embodies measured, unhurried steadiness both in yogic meditation — Bhagavadgītā 6.25: śanaiḥ śanair uparamed buddhyā dhṛtigṛhītayā ('step by step let one attain stillness through an intellect held firm by fortitude') — and in the famous subhāṣita teaching that learning, mountain-climbing, and dharma are mastered gradually (śanair vidyā śanair arthaḥ).",
    padaccheda: [
      { deva: "शनैः मन्दम् क्रमेण", iast: "śanaiḥ mandam krameṇa", gloss: "slowly, gently, gradually (svarādi avyaya)" },
      { deva: "शनैः शनैः उपरमेत्", iast: "śanaiḥ śanaiḥ uparamet", gloss: "step by step let one grow tranquil (Bhagavadgītā 6.25)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · भगवद्गीता",
      author: "Pāṇini / Amarasimha / Vyāsa",
      locator: "Aṣṭādhyāyī 1.1.37; Amarakośa 1.1.67; Bhagavadgītā 6.25"
    },
    related: ["shighram", "shama", "dhira"]
  },
  {
    id: "shighram",
    deva: "शीघ्रम् / आशु",
    iast: "śīghram / āśu",
    stem: "śīghram",
    pos: "avyaya (ind.)",
    englishGlosses: ["quickly", "swiftly", "promptly", "at once"],
    phoneticAliases: ["shighram", "sheeghram", "shighra", "ashu", "aashu", "kshipram", "sattvaram", "drutam", "quickly", "swiftly"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "शीघ्रं त्वरितमाशु क्षिप्रमरं द्रुतं सत्वरं चपलं तूर्णमविलम्बितम् — क्रियाविशेषणमव्ययम् ।",
    lakshanaIast: "śīghraṃ tvaritam āśu kṣipram araṃ drutaṃ satvaraṃ capalaṃ tūrṇam avilambitam — kriyāviśeṣaṇam avyayam |",
    meaningShort: "Quickly, swiftly, without delay (āśu / kṣipram / drutam / satvaram).",
    meaningDeep: "Grouped in Amarakośa 1.1.65's celebrated ten-word cluster for swiftness (śīghram, tvaritam, āśu, kṣipram, aram, drutam, satvaram, tūrṇam, avilambitam; cf. Gītā 4.12 kṣipraṃ hi mānuṣe loke siddhir bhavati karmajā), adverbial accusative śīghram (kriyāviśeṣaṇānāṃ karmatvaṃ napuṃsakatvaṃ ca) and svarādi/neuter āśu (cognate with Greek ōkys, whence āśukavi 'extempore poet') are polar opposites of śanaiḥ / ciram.",
    padaccheda: [
      { deva: "शीघ्रम् त्वरितम् आशु क्षिप्रम् द्रुतम्", iast: "śīghram tvaritam āśu kṣipram drutam", gloss: "quickly, swiftly, rapidly, promptly (Amarakośa 1.1.65)" },
      { deva: "अविलम्बितम्", iast: "avilambitam", gloss: "without delay" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "Amarakośa 1.1.65 (Kālavarga)"
    },
    related: ["shanaih", "laghu", "dhatu-dhav"]
  },
  {
    id: "atra",
    deva: "अत्र",
    iast: "atra",
    stem: "atra",
    pos: "avyaya (ind.)",
    englishGlosses: ["here", "in this place", "in this matter / topic", "in this world"],
    phoneticAliases: ["atra", "iha", "asmin", "here"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सप्तम्यास्त्रल् · इदमोऽन्वादेशेऽशनुदात्तस्तृतीयादौ (अत्रेह च) — अस्मिन् देशे विषये वात्रेति त्रलन्तमव्ययम् ।",
    lakshanaIast: "saptamyās tral · idamo'nvādeśe'ś anudāttas tṛtīyādau (atreha ca) — asmin deśe viṣaye vātreti tralantam avyayam |",
    meaningShort: "Here, in this place, or regarding this topic — locative-sense taddhita avyaya (idam → a + tral).",
    meaningDeep: "Derived by Pāṇini's Aṣṭādhyāyī 5.3.10 (saptamyās tral, attaching -tra in the sense of the seventh/locative case to pronominal stems, with idam replaced by a- via 2.4.32 / 5.3.11 idamo haḥ → iha alongside atra), atra functions both spatially ('here in this spot / earthly realm', contrasted with amutra 'in the yonder world') and discursively throughout Sanskrit commentaries (atra ucyate = 'On this point it is replied...'; atrabhavān = 'this venerable gentleman here').",
    padaccheda: [
      { deva: "सप्तम्याः त्रल्", iast: "saptamyāḥ tral", gloss: "suffix -tra attaches in locative sense (idam + tral = atra, Aṣṭ. 5.3.10)" },
      { deva: "अस्मिन् देशे विषये वा", iast: "asmin deśe viṣaye vā", gloss: "in this place or in this matter" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.10–11; Amarakośa 3.4.20"
    },
    related: ["idam", "tatra", "kutra", "sarvatra"]
  },
  {
    id: "tatra",
    deva: "तत्र",
    iast: "tatra",
    stem: "tatra",
    pos: "avyaya (ind.)",
    englishGlosses: ["there", "in that place", "therein / among them", "in that case"],
    phoneticAliases: ["tatra", "tasmin", "there", "therein"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "तदः सप्तम्यास्त्रल् — तस्मिन् देशे विषये समुदाये वा तत्रेत्यव्ययम् ।",
    lakshanaIast: "tadaḥ saptamyās tral — tasmin deśe viṣaye samudāye vā tatrety avyayam |",
    meaningShort: "There, in that place, or 'among those' — locative taddhita avyaya (tad + tral) paired with yatra.",
    meaningDeep: "Formed from demonstrative tad + tral by Aṣṭādhyāyī 5.3.10 (answering relative yatra, 'where... there', as in the closing verse of the Bhagavadgītā 18.78: yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanurdharaḥ | tatra śrīr vijayo bhūtir dhruvā nītir matir mama), tatra is equally ubiquitous in śāstric division-prose as a partitive nirdhāraṇa-saptamī ('among those just listed': pramāṇāni pratyakṣānumānāgamāḥ; tatra pratyakṣam...).",
    padaccheda: [
      { deva: "तद् + त्रल् = तत्र", iast: "tad + tral = tatra", gloss: "in that place / among them (locative taddhita, Aṣṭ. 5.3.10)" },
      { deva: "यत्र... तत्र", iast: "yatra... tatra", gloss: "where... there (correlative pair)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 5.3.10; Bhagavadgītā 18.78"
    },
    related: ["tad-pron", "atra", "kutra", "sarvatra"]
  },
  {
    id: "kutra",
    deva: "कुत्र / क्व",
    iast: "kutra / kva",
    stem: "kutra",
    pos: "avyaya (ind.)",
    englishGlosses: ["where?", "in what place?", "how vast the disparity! (kva... kva)"],
    phoneticAliases: ["kutra", "kva", "kwa", "kvacit", "kutracit", "where?"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "कु तिहोः · क्वाति — किमः सप्तम्यां त्रलतिभ्यां कुत्र क्व चेति प्रश्नवाचकमव्ययम् ।",
    lakshanaIast: "ku tihoḥ · kvāti — kimaḥ saptamyāṃ tralatibhyāṃ kutra kva ceti praśnavācakam avyayam |",
    meaningShort: "Where? Whither? — interrogative locative avyayas (kutra and kva) derived from kim.",
    meaningDeep: "Pāṇini derives both synonyms from interrogative kim: before t/h-initial taddhitas like -tral, kim becomes ku- by Aṣṭādhyāyī 7.2.104 (ku tihoḥ → kutra, 'where?'), whereas before suffix -at (5.3.12 kimo't) kim becomes kva- by 7.2.105 (kvāti → kva, 'where?'). Repeated in consecutive clauses, kva... kva expresses breathtaking incongruity, immortalized in Kālidāsa's Raghuvaṃśa 1.2: kva sūryaprabhavo vaṃśaḥ kva cālpaviṣayā matiḥ ('How vast the gulf between the dynasty born of the Sun and my slender-compassed mind!').",
    padaccheda: [
      { deva: "किम् (कु) + त्रल् = कुत्र", iast: "kim (ku) + tral = kutra", gloss: "where? in what place? (Aṣṭ. 5.3.10 & 7.2.104)" },
      { deva: "किम् (क्व) + अत् = क्व", iast: "kim (kva) + at = kva", gloss: "where? (poetic/classical twin, Aṣṭ. 5.3.12 & 7.2.105)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Raghuvaṃśa",
      granthaDeva: "अष्टाध्यायी · रघुवंशम्",
      author: "Pāṇini / Kālidāsa",
      locator: "Aṣṭādhyāyī 5.3.10–12 & 7.2.104–105; Raghuvaṃśa 1.2"
    },
    related: ["kim", "atra", "tatra", "sarvatra"]
  },
  {
    id: "sarvatra",
    deva: "सर्वत्र",
    iast: "sarvatra",
    stem: "sarvatra",
    pos: "avyaya (ind.)",
    englishGlosses: ["everywhere", "in all places", "in every case / universally"],
    phoneticAliases: ["sarvatra", "vishvatah", "samantatah", "everywhere"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सर्वस्मिन् देशे विषये च सर्वत्र — समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरं सर्वत्र समदर्शनः ॥",
    lakshanaIast: "sarvasmin deśe viṣaye ca sarvatra — samaṃ sarveṣu bhūteṣu tiṣṭhantaṃ parameśvaraṃ sarvatra samadarśanaḥ ||",
    meaningShort: "Everywhere, in every place or case — universal locative avyaya (sarva + tral).",
    meaningDeep: "Derived from sarva + tral by Aṣṭādhyāyī 5.3.10 (sarvasmin deśe kāle viṣaye vā), sarvatra expresses both spatial omnipresence (Īśvara's vyāpti throughout creation; Bhagavadgītā 6.29 sarvatra samadarśanaḥ & 13.13 sarvataḥpāṇipādaṃ tat) and universal rule-application in Pāṇinian grammar (e.g., Aṣṭādhyāyī 6.1.122 sarvatra vibhāṣā goḥ — 'everywhere, both in Veda and spoken Sanskrit').",
    padaccheda: [
      { deva: "सर्व + त्रल् = सर्वत्र", iast: "sarva + tral = sarvatra", gloss: "in every place, universally (Aṣṭ. 5.3.10)" },
      { deva: "सर्वत्र सम-दर्शनः", iast: "sarvatra sama-darśanaḥ", gloss: "beholding the supreme Lord equally everywhere (Gītā 6.29)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · भगवद्गीता",
      author: "Pāṇini / Vyāsa",
      locator: "Aṣṭādhyāyī 5.3.10 & 6.1.122; Bhagavadgītā 6.29"
    },
    related: ["sarva", "atra", "tatra", "vishnu"]
  },
  {
    id: "antah",
    deva: "अन्तः (अन्तर्)",
    iast: "antaḥ (antar)",
    stem: "antar",
    pos: "avyaya (ind.)",
    englishGlosses: ["inside", "within", "inwardly", "in the heart / between"],
    phoneticAliases: ["antah", "antar", "antargata", "antaryamin", "antahkarana", "inside", "within"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "स्वरन्तरिति स्वरादिष्वव्ययम् — मध्येऽभ्यन्तरे चान्तर्बहिश्च तत्सर्वं व्याप्य नारायणः स्थितः ॥",
    lakshanaIast: "svar antar iti svarādiṣv avyayam — madhye'bhyantare cāntar bahiś ca tat sarvaṃ vyāpya nārāyaṇaḥ sthitaḥ ||",
    meaningShort: "Within, inside, in the core — the r-final svarādi avyaya forming antaryāmin ('Inner Controller') and antaḥkaraṇa.",
    meaningDeep: "Second word of Pāṇini's svarādi-gaṇa (Aṣṭādhyāyī 1.1.37; cognate with Latin inter) with underlying r-stem antar (hence antar-ātman, antaryāmin, antargata, and before r: antā-rāṣṭrīya by 8.3.14 & 6.3.111; distinct from masculine noun antaḥ = 'end/border'!), antar governs the genitive or locative for 'within / between' and shines in Nārāyaṇasūkta 5: antar bahiś ca tat sarvaṃ vyāpya nārāyaṇaḥ sthitaḥ ('Pervading all this both inwardly and outwardly, Nārāyaṇa abides').",
    padaccheda: [
      { deva: "अन्तर् अभ्यन्तरे मध्ये च", iast: "antar abhyantare madhye ca", gloss: "within, inside, in the midst (svarādi r-final avyaya)" },
      { deva: "अन्तर् बहिः च", iast: "antar bahiḥ ca", gloss: "both inwardly and outwardly (Nārāyaṇasūkta)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Nārāyaṇasūkta",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · नारायणसूक्तम्",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.1.37 & 1.4.65; Amarakośa 3.4.16; TA 10.13"
    },
    related: ["bahih", "narayana", "manas", "atman"]
  },
  {
    id: "bahih",
    deva: "बहिः (बहिस्)",
    iast: "bahiḥ (bahis)",
    stem: "bahis",
    pos: "avyaya (ind.)",
    englishGlosses: ["outside", "outwardly", "externally", "outside of (+ ablative)"],
    phoneticAliases: ["bahih", "bahis", "bahir", "bahiranga", "bahya", "outside", "external"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "अपादाने पञ्चमी बहिर्योगे — बाह्ये बहिः स्वरादिपठितमव्ययं ग्रामाद् बहिः ।",
    lakshanaIast: "apādāne pañcamī bahiryoge — bāhye bahiḥ svarādipathitam avyayaṃ grāmād bahiḥ |",
    meaningShort: "Outside, externally — governing the ablative case (grāmād bahiḥ) and opposed to antaḥ.",
    meaningDeep: "Listed in the svarādi-gaṇa (1.1.37; taddhita adjective bāhya, 'external', via 4.1.85 dityadityādityapatyuttarapadāṇ ṇyaḥ + vārttika bahiṣaṣ ṭilopo yañ ca), bahis regularly governs the fifth (ablative) case by Kātyāyana's vārttika on Aṣṭādhyāyī 2.3.29 (jugupsāvirāmapramādārthānām upasaṅkhyānam / bahiryoge pañcamī: grāmād bahiḥ, 'outside the village'). In Yoga and Vedānta, bahiraṅga-sādhana ('external disciplines' like yama-niyama) prepares for antaraṅga-sādhana (dhāraṇā, dhyāna, samādhi).",
    padaccheda: [
      { deva: "बहिः बाह्ये", iast: "bahiḥ bāhye", gloss: "outside, externally (Amarakośa 3.4.16)" },
      { deva: "बहिर्-योगे पञ्चमी", iast: "bahir-yoge pañcamī", gloss: "construes with the ablative case (grāmād bahiḥ)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī Vārttika & Amarakośa",
      granthaDeva: "महाभाष्यवार्त्तिकम् · अमरकोशः",
      author: "Kātyāyana / Amarasimha",
      locator: "Vārttika on Aṣṭādhyāyī 2.3.29; Amarakośa 3.4.16"
    },
    related: ["antah", "pratyaksha", "indriya"]
  },
  {
    id: "upari",
    deva: "उपरि",
    iast: "upari",
    stem: "upari",
    pos: "avyaya (ind.)",
    englishGlosses: ["above", "upon", "over", "beyond", "subsequently"],
    phoneticAliases: ["upari", "urdhvam", "uparishtat", "above", "upon", "over"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "उपर्युपरिष्टादूर्ध्वार्थे — उभसर्वतसोः कार्या धिगुपर्यादिषु त्रिषु द्वितीयाऽम्रेडितान्तेषु (उपर्युपरि लोकं हरेरुपरि वा) ।",
    lakshanaIast: "upary upariṣṭād ūrdhvārthe — ubhasarvatasoḥ kāryā dhiguparyādiṣu triṣu dvitīyā'mreḍitānteṣu (upary upari lokaṃ harer upari vā) |",
    meaningShort: "Above, over, upon — governing the genitive singly (vṛkṣasya upari) and the accusative when doubled (upary upari).",
    meaningDeep: "Formed with spatial taddhita -ril (cognate with Greek hyper and Latin super; alongside upariṣṭāt by Aṣṭādhyāyī 5.3.31 upary upariṣṭāt), upari ordinarily construes with the sixth/genitive case (gṛhasya upari, 'above the house') or at the end of compounds (sarvopari), whereas when reduplicated in intensive proximity (āmreḍita: upary upari) Kātyāyana's famous vārttika on 2.3.2 prescribes the accusative case (upary upari lokaṃ hariḥ, 'immediately/supremely above the cosmos abides Hari').",
    padaccheda: [
      { deva: "उपरि ऊर्ध्व-अर्थे", iast: "upari ūrdhva-arthe", gloss: "above, upon, higher than (Aṣṭ. 5.3.31)" },
      { deva: "उपरि उपरि लोकम्", iast: "upari upari lokam", gloss: "doubled (āmreḍita), governs the accusative case" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Mahābhāṣya Vārttika",
      granthaDeva: "अष्टाध्यायी · महाभाष्यवार्त्तिकम्",
      author: "Pāṇini / Kātyāyana",
      locator: "Aṣṭādhyāyī 5.3.31; Vārttika on 2.3.2"
    },
    related: ["adhah", "ucca", "nica"]
  },
  {
    id: "adhah",
    deva: "अधः (अधस्)",
    iast: "adhaḥ (adhas)",
    stem: "adhas",
    pos: "avyaya (ind.)",
    englishGlosses: ["below", "beneath", "under", "downward"],
    phoneticAliases: ["adhah", "adhas", "adhastat", "nicaih", "below", "beneath", "under"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "अधोऽधस्तादधोभागे — वृक्षस्याधोऽधो भूमिं चेति षष्ठीद्वितीयायोगि दिगव्ययम् ।",
    lakshanaIast: "adho'dhastād adhobhāge — vṛkṣasyādho'dho bhūmiṃ ceti ṣaṣṭhīdvitīyāyogi digavyayam |",
    meaningShort: "Below, beneath, downward — the directional counterpart of upari.",
    meaningDeep: "Listed among directional avyayas (alongside adhastāt by Aṣṭādhyāyī 5.3.27 dikśabdebhyaḥ saptamīpañcamīprathamābhyo digdeśakāleṣv astātiḥ / 5.3.39 pūrvādharāvaraṇāsi puradhavaṃś caiṣām), adhas governs the genitive when single (vṛkṣasya adhaḥ, 'beneath the tree') and the accusative when doubled as āmreḍita (adho'dho bhūmim, 'deep beneath the earth'). In Bhagavadgītā 15.1–2, the cosmic aśvattha tree extends its branches adhaś cordhvam ('both downward and upward').",
    padaccheda: [
      { deva: "अधः अधस्तात् अधः-भागे", iast: "adhaḥ adhastāt adhaḥ-bhāge", gloss: "below, underneath, in the lower region" },
      { deva: "अधः अधः भूमिम्", iast: "adhaḥ adhaḥ bhūmim", gloss: "deep below the ground (+ accusative when doubled)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.39–40; Amarakośa 3.4.15; Vārttika on 2.3.2"
    },
    related: ["upari", "nica", "dhatu-pat"]
  },
  {
    id: "puratah",
    deva: "पुरतः / अग्रे",
    iast: "purataḥ / agre",
    stem: "puratas",
    pos: "avyaya (ind.)",
    englishGlosses: ["in front of", "before", "ahead", "in the presence of"],
    phoneticAliases: ["puratah", "puratas", "agre", "purastat", "agratah", "samaksham", "in front", "ahead"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "पूर्वाधरावरणासि पुरधवंश्चैषाम् (पुरस्तात्पुरतश्च) — अग्रेऽग्रतः पुरतोऽभिमुखे च षष्ठीयोगि ।",
    lakshanaIast: "pūrvādharāvaraṇāsi puradhavaṃś caiṣām (purastāt purataś ca) — agre'grataḥ purato'bhimukhe ca ṣaṣṭhīyogi |",
    meaningShort: "In front of, ahead, or before one's presence (agre / agrataḥ / purastāt).",
    meaningDeep: "Formed from pūrva (substituted by pura- per Aṣṭādhyāyī 5.3.39) with directional suffix -tas (5.3.7 pañcamyās tasil / 5.3.40 astāti ca → purataḥ and purastāt), and paired with fossilized locative agre / agrataḥ ('at the forefront / in the beginning', cf. sadāgre vasate lakṣmīḥ and Chāndogya 6.2.1 sad eva somyedam agra āsīt), purataḥ construes with the genitive case (guroḥ purataḥ, 'in front of the preceptor').",
    padaccheda: [
      { deva: "पुरतः / अग्रे / अग्रतः", iast: "purataḥ / agre / agrataḥ", gloss: "in front of, ahead, before (Amarakośa 3.4.15)" },
      { deva: "षष्ठी-योगि", iast: "ṣaṣṭhī-yogi", gloss: "construes with the sixth (genitive) case" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.39–40 & 2.3.30; Amarakośa 3.4.15"
    },
    related: ["prishthatah", "prathama", "prati"]
  },
  {
    id: "prishthatah",
    deva: "पृष्ठतः / पश्चात्",
    iast: "pṛṣṭhataḥ / paścāt",
    stem: "pṛṣṭhatas",
    pos: "avyaya (ind.)",
    englishGlosses: ["behind", "at the back of", "afterwards (paścāt)", "westward"],
    phoneticAliases: ["prishthatah", "prshthatah", "pashcat", "paschat", "anantaram", "behind", "afterwards"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "अपरस्यार्धपश्चभावो वक्तव्यः (पश्चात्) — पृष्ठतः पश्चाच्च पृष्ठभागे कालानन्तर्ये च ।",
    lakshanaIast: "aparasyārdhapaścabhāvo vaktavyaḥ (paścāt) — pṛṣṭhataḥ paścāc ca pṛṣṭhabhāge kālānantarye ca |",
    meaningShort: "Behind, at the rear (pṛṣṭhataḥ), and subsequently / behind / westward (paścāt).",
    meaningDeep: "Combining pṛṣṭha ('back') + tasil (pṛṣṭhataḥ, 'behind / behind one's back', e.g., pratyakṣe gurustutiḥ pṛṣṭhato nindā; pṛṣṭhataḥ kuru = 'leave behind / disregard') with nipātana-derived paścāt (from apara → paśca + āti by Aṣṭādhyāyī 5.3.32 paśca paścā ca cchandasi), these two avyayas cover spatial rear (gṛhasya pṛṣṭhataḥ / grāmāt paścāt, governing genitive or ablative) as well as temporal sequence ('afterwards, later').",
    padaccheda: [
      { deva: "पृष्ठतः", iast: "pṛṣṭhataḥ", gloss: "behind, at the back of (pṛṣṭha + tasil)" },
      { deva: "पश्चात्", iast: "paścāt", gloss: "behind, westward, afterwards (Aṣṭ. 5.3.32)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.32 & 5.3.7; Amarakośa 3.4.21"
    },
    related: ["puratah", "tatah", "kala"]
  },
  {
    id: "katham",
    deva: "कथम्",
    iast: "katham",
    stem: "katham",
    pos: "avyaya (ind.)",
    englishGlosses: ["how?", "in what manner?", "by what means?", "how could it be that...?"],
    phoneticAliases: ["katham", "kenaprakarena", "kathamapi", "how", "how?"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "किमः प्रकारवचने थमुः — केन प्रकारेण इति कथमव्ययं प्रश्नसंभ्रमाक्षेपे ।",
    lakshanaIast: "kimaḥ prakāravacane thamuḥ — kena prakāreṇa iti katham avyayaṃ praśnasaṃbhramākṣepe |",
    meaningShort: "How? In what manner? — the interrogative adverb of manner formed from kim + thamu.",
    meaningDeep: "While yad and tad take -thāl (yathā, tathā), Pāṇini's Aṣṭādhyāyī 5.3.25 (kimaś ca — kimaḥ thamuḥ) attaches suffix thamu (-tham) specifically to interrogative kim (substituted by ka- via 7.2.103), yielding katham ('in what manner? how?'; parallel to idam + thamu → ittham, 'thus'). With api or cit it forms katham api / kathaṃcit ('somehow, with great difficulty'), and in rhetorical questions expresses astonishment or impossibility (kathaṃ bhīṣmam ahaṃ saṅkhye... pratiyotsyāmi, Bhagavadgītā 2.4).",
    padaccheda: [
      { deva: "किम् (क) + थमुः = कथम्", iast: "kim (ka) + thamuḥ = katham", gloss: "in what manner? how? (Aṣṭ. 5.3.25)" },
      { deva: "कथम् अपि / कथञ्चित्", iast: "katham api / kathaṃcit", gloss: "somehow, barely, with effort" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 5.3.25; Amarakośa 3.4.19"
    },
    related: ["kim", "yatha", "tatha", "kimartham"]
  },
  {
    id: "kimartham",
    deva: "किमर्थम् / कुतः",
    iast: "kimartham / kutaḥ",
    stem: "kimartham",
    pos: "avyaya (ind.)",
    englishGlosses: ["why?", "for what purpose? (kimartham)", "from where? / on what ground? (kutaḥ)"],
    phoneticAliases: ["kimartham", "kutah", "kutas", "kasmad", "kimnimittam", "why", "whence"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "कस्मै प्रयोजनायेति किमर्थम् · किमः पञ्चम्यास्तसिल् कुत इति हेतौ प्रभवे च प्रश्नः ।",
    lakshanaIast: "kasmai prayojanāyeti kimartham · kimaḥ pañcamyās tasil kuta iti hetau prabhave ca praśnaḥ |",
    meaningShort: "Why / for what purpose? (kimartham) and Whence / on what logical ground? (kutaḥ).",
    meaningDeep: "Sanskrit distinguishes final-purpose 'why?' — kimartham (adverbial compound: kaḥ arthaḥ prayojanaṃ yasya tat, 'for what aim/prayojana?') — from causal/ablative 'whence / why?' — kutaḥ (derived from kim → ku + ablative tasil by Aṣṭādhyāyī 5.3.7 pañcamyās tasil & 7.2.104 ku tihoḥ). Throughout Nyāya, Mīmāṃsā, and Vedānta bhāṣyas, a terse single-word kutaḥ? ('Why? What is your hetu?') challenges an opponent to state their logical reason, answered immediately by yataḥ... or an ablative hetu.",
    padaccheda: [
      { deva: "किम्-अर्थम्", iast: "kim-artham", gloss: "for what purpose? why? (adverbial compound)" },
      { deva: "किम् (कु) + तसिल् = कुतः", iast: "kim (ku) + tasil = kutaḥ", gloss: "from where? on what logical ground? (Aṣṭ. 5.3.7 & 7.2.104)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.3.7, 7.2.104 & 2.1.36"
    },
    related: ["kim", "yatah", "tatah", "hetu"]
  },
  {
    id: "yatah",
    deva: "यतः (यतस्)",
    iast: "yataḥ (yatas)",
    stem: "yatas",
    pos: "avyaya (ind.)",
    englishGlosses: ["from which", "whence", "because", "since", "wherefore"],
    phoneticAliases: ["yatah", "yatas", "yasmat", "because", "whence", "since"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "यदः पञ्चम्यास्तसिल् — यस्माद् देशाद्धेतोर्वेति यतः (यतो वा इमानि भूतानि जायन्ते) ।",
    lakshanaIast: "yadaḥ pañcamyās tasil — yasmād deśād dhetor veti yataḥ (yato vā imāni bhūtāni jāyante) |",
    meaningShort: "From whom/which, whence, or because — ablative taddhita avyaya (yad + tasil) opening Brahman's cosmic lakṣaṇa.",
    meaningDeep: "Formed from relative yad + tasil by Aṣṭādhyāyī 5.3.7 (pañcamyās tasil, functioning interchangeably with ablative yasmāt across all genders and numbers!), yataḥ expresses both origin/source — most famously in Taittirīya Upaniṣad 3.1 (cited under Brahmasūtra 1.1.2 janmādy asya yataḥ): yato vā imāni bhūtāni jāyante ('That from Whom indeed these beings are born') — and logical reason ('because / since', paired with tataḥ / ataḥ, 'therefore').",
    padaccheda: [
      { deva: "यद् + तसिल् = यतः", iast: "yad + tasil = yataḥ", gloss: "from whom/which, whence, because (ablative taddhita, Aṣṭ. 5.3.7)" },
      { deva: "जन्मादि अस्य यतः", iast: "janmādi asya yataḥ", gloss: "He from Whom come the birth, sustenance, and dissolution of this cosmos (BS 1.1.2)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Taittirīyopaniṣad & Brahmasūtra",
      granthaDeva: "अष्टाध्यायी · तैत्तिरीयोपनिषद् · ब्रह्मसूत्रम्",
      author: "Pāṇini / Bādarāyaṇa",
      locator: "Aṣṭādhyāyī 5.3.7; Taittirīya Upaniṣad 3.1; Brahmasūtra 1.1.2"
    },
    related: ["tatah", "yad", "kimartham", "brahman", "hetu"]
  },
  {
    id: "tatah",
    deva: "ततः (ततस्)",
    iast: "tataḥ (tatas)",
    stem: "tatas",
    pos: "avyaya (ind.)",
    englishGlosses: ["from there", "thereafter / next", "therefore", "than that"],
    phoneticAliases: ["tatah", "tatas", "atah", "tasmat", "therefore", "thence", "thereafter"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "तदः पञ्चम्यास्तसिल् — तस्माद् देशात् कालाद्धेतोर्वा तत इत्यव्ययम् (अतश्चेदंमिमोः) ।",
    lakshanaIast: "tadaḥ pañcamyās tasil — tasmād deśāt kālād dhetor vā tata ity avyayam (ataś cedam-imoḥ) |",
    meaningShort: "From there, thereafter, therefore — the ablative correlative avyaya (tad + tasil; proximal twin ataḥ).",
    meaningDeep: "Derived from tad + tasil by Aṣṭādhyāyī 5.3.7 (parallel to idam + tasil → ataḥ, 'hence / therefore', opening Brahmasūtra 1.1.1 athāto brahmajijñāsā), tataḥ spans every function of the Sanskrit fifth case: spatial departure ('from that place'), temporal succession in narrative ('thereupon / next': tataḥ kim?), comparative ablative ('greater than that': tato'py adhikam), and inferential conclusion ('therefore', answering yataḥ).",
    padaccheda: [
      { deva: "तद् + तसिल् = ततः", iast: "tad + tasil = tataḥ", gloss: "from that, thereafter, therefore (Aṣṭ. 5.3.7)" },
      { deva: "अतः (इदम् + तसिल्)", iast: "ataḥ (idam + tasil)", gloss: "hence, for this reason (proximal counterpart)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.3.7"
    },
    related: ["yatah", "tad-pron", "kimartham", "tada"]
  },
  {
    id: "saha",
    deva: "सह / साकम्",
    iast: "saha / sākam",
    stem: "saha",
    pos: "avyaya (ind.)",
    englishGlosses: ["with", "together with", "accompanied by", "along with"],
    phoneticAliases: ["saha", "sakam", "saakam", "sardham", "samam", "sahita", "with", "together"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "सहयुक्तेऽप्रधाने — सार्धं साकं समं सह तृतीयाविभक्तियोगि सहार्थवाचकमव्ययम् ।",
    lakshanaIast: "sahayukte'pradhāne — sārdhaṃ sākaṃ samaṃ saha tṛtīyāvibhaktiyogi sahārthavācakam avyayam |",
    meaningShort: "With, together with (sākam / sārdham / samam) — governing the instrumental case of the accompanying party.",
    meaningDeep: "Pāṇini's quintessential upapada-vibhakti rule Aṣṭādhyāyī 2.3.19 (sahayukte'pradhāne) ordains that when saha or any of its synonyms (Amarakośa 3.4.9: sārdham, sākam, samam) expresses accompaniment, the secondary/accompanying person takes the third (instrumental) case while the verb agrees solely with the primary subject (putreṇa saha āgataḥ pitā). In compounds saha contracts optionally to sa- by 6.3.78 (sahasya saḥ saṃjñāyām / 6.3.82 vopasarjanasya → saputraḥ), and shines in the Upaniṣadic peace-invocation saha nāv avatu, saha nau bhunaktu, saha vīryaṃ karavāvahai.",
    padaccheda: [
      { deva: "सह-युक्ते अप्रधाने तृतीया", iast: "saha-yukte apradhāne tṛtīyā", gloss: "the accompanying party with saha takes the instrumental case (Aṣṭ. 2.3.19)" },
      { deva: "सार्धम् साकम् समम् सह", iast: "sārdham sākam samam saha", gloss: "together with, along with (Amarakośa 3.4.9)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Taittirīyopaniṣad",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · तैत्तिरीयोपनिषद्",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.19 & 6.3.82; Amarakośa 3.4.9"
    },
    related: ["vina", "ekada", "ca-avyaya"]
  },
  {
    id: "vina",
    deva: "विना / ऋते",
    iast: "vinā / ṛte",
    stem: "vinā",
    pos: "avyaya (ind.)",
    englishGlosses: ["without", "except for", "apart from", "devoid of"],
    phoneticAliases: ["vina", "vinaa", "rite", "rte", "antarena", "without", "except"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "पृथग्विनानानाभिस्तृतीयान्यतरस्याम् · अन्यारादितरर्ते... पञ्चमी — विना द्वितीयातृतीयापञ्चमीयोगि ऋते च द्वितीयापञ्चमीयोगि ।",
    lakshanaIast: "pṛthagvinānānābhis tṛtīyānyatarasyām · anyārāditararte... pañcamī — vinā dvitīyātṛtīyāpañcamīyogi ṛte ca dvitīyāpañcamīyogi |",
    meaningShort: "Without, apart from — vinā construing freely with accusative, instrumental, or ablative, and ṛte with ablative or accusative.",
    meaningDeep: "By Pāṇini's Aṣṭādhyāyī 2.3.32 (pṛthagvinānānābhis tṛtīyānyatarasyām, drawing both pañcamī from 2.3.28 and dvitīyā from 2.3.31), vinā ('without') gracefully accepts three cases interchangeably: jñānaṃ vinā / jñānena vinā / jñānād vinā na muktiḥ ('without knowledge there is no liberation'; similarly vātaṃ/vātena/vātād vinā). Its Vedic-classical twin ṛte ('except for / without', Amarakośa 3.4.9) governs the ablative by 2.3.29 (jñānād ṛte na muktiḥ) or accusative.",
    padaccheda: [
      { deva: "पृथक्-विना-नानाभिः तृतीया अन्यतरस्याम्", iast: "pṛthak-vinā-nānābhiḥ tṛtīyā anyatarasyām", gloss: "vinā governs 2nd, 3rd, or 5th case (Aṣṭ. 2.3.32)" },
      { deva: "ऋते पञ्चमी", iast: "ṛte pañcamī", gloss: "ṛte ('without / save for') governs 5th (or 2nd) case (Aṣṭ. 2.3.29)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.32 & 2.3.29; Amarakośa 3.4.9"
    },
    related: ["saha", "anya", "abhava"]
  },
  {
    id: "prati",
    deva: "प्रति",
    iast: "prati",
    stem: "prati",
    pos: "avyaya (ind.)",
    englishGlosses: ["towards", "to / facing", "each / every (prati-dinam)", "in return for"],
    phoneticAliases: ["prati", "pratidinam", "pratyekam", "towards", "each"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "प्रतिः प्रतिनिधिप्रतिदानयोर्यस्मात् · लक्षणेत्थम्भूताख्यानभागवीप्सासु प्रतिपर्यनवः — द्वितीयापञ्चमीयोगी कर्मप्रवचनीयः ।",
    lakshanaIast: "pratiḥ pratinidhipratidānayor yasmāt · lakṣaṇetthambhūtākhyānabhāgavīpsāsu pratiparyanavaḥ — dvitīyāpañcamīyogī karmapravacanīyaḥ |",
    meaningShort: "Towards, regarding, each, or in return — Pāṇini's karmapravacanīya particle governing the accusative.",
    meaningDeep: "Functioning both as a verbal prefix (upasarga: prativadati 'replies', pratibimba 'reflection') and as an adpositional karmapravacanīya (Aṣṭādhyāyī 1.4.90 lakṣaṇetthambhūtākhyānabhāgavīpsāsu pratiparyanavaḥ), prati governs the accusative case by 2.3.8 (karmapravacanīyayukte dvitīyā) in the senses of direction ('toward the tree': vṛkṣaṃ prati vidyotate vidyut), kindness toward (dīnān prati dayāluḥ), and distributiveness ('tree by tree': vṛkṣaṃ vṛkṣaṃ prati, compounding into avyayībhāva pratidinam 'daily', pratyekam 'each one'), while taking ablative for substitution/exchange (1.4.92, 2.3.11).",
    padaccheda: [
      { deva: "लक्षण-वीप्सासु प्रतिः", iast: "lakṣaṇa-vīpsāsu pratiḥ", gloss: "prati is a karmapravacanīya in direction, sign, share, and 'each' (Aṣṭ. 1.4.90)" },
      { deva: "कर्मप्रवचनीय-युक्ते द्वितीया", iast: "karmapravacanīya-yukte dvitīyā", gloss: "governs the second (accusative) case (Aṣṭ. 2.3.8)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 1.4.90, 1.4.92 & 2.3.8"
    },
    related: ["pratibimba", "pratyaksha", "puratah"]
  },
  {
    id: "alam",
    deva: "अलम्",
    iast: "alam",
    stem: "alam",
    pos: "avyaya (ind.)",
    englishGlosses: ["enough of! (+ instrumental)", "sufficient / able / match for (+ dative)", "adornment"],
    phoneticAliases: ["alam", "alamkara", "paryaptam", "enough", "sufficient", "capable"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "नमःस्वस्तिस्वाहास्वधालंवषड्योगाच्च · अलंखल्वोः प्रतिषेधयोः प्राचां क्त्वा — वारणे तृतीयाक्त्वायोगि सामर्थ्ये चतुर्थीयोग्यव्ययम् ।",
    lakshanaIast: "namaḥsvastisvāhāsvadhālaṃvaṣaḍyogāc ca · alaṃkhalvoḥ pratiṣedhayoḥ prācāṃ ktvā — vāraṇe tṛtīyāktvāyogi sāmarthye caturthīyogy avyayam |",
    meaningShort: "Enough! Cease! (+ instrumental or ktvā) AND capable / a match for (+ dative) — a dual-case masterpiece of Sanskrit syntax.",
    meaningDeep: "Amarakośa 3.4.10 (alaṃ bhūṣaṇaparyāptiśaktivāraṇavācakam) identifies four senses of alam that split cleanly by grammatical case: (1) vāraṇa / pratiṣedha ('Enough of! Stop!'): governs the instrumental (alaṃ vivādena, 'Enough of dispute!') or gerund ktvā by Aṣṭādhyāyī 3.4.18 (alaṃ hasitvā, 'Stop laughing!'); (2) paryāpti / śakti ('sufficient / capable of'): governs the dative by 2.3.16 (daityebhyo harir alam, 'Hari alone suffices to vanquish the demons'); and (3) bhūṣaṇa ('adornment'), compounded with √kṛ as gati by 1.4.64 (bhūṣaṇe'lam → alaṅkaroti, alaṅkāra).",
    padaccheda: [
      { deva: "भूषण-पर्याप्ति-शक्ति-वारण-वाचकम्", iast: "bhūṣaṇa-paryāpti-śakti-vāraṇa-vācakam", gloss: "signifying ornament, sufficiency, capability, and prohibition (Amarakośa 3.4.10)" },
      { deva: "अलम् विवादेन / दैत्येभ्यः हरिः अलम्", iast: "alam vivādena / daityebhyaḥ hariḥ alam", gloss: "+ 3rd case for 'enough of!'; + 4th case for 'a match for'" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.16, 3.4.18 & 1.4.64; Amarakośa 3.4.10"
    },
    related: ["khalu", "ma-avyaya", "namah", "svasti", "dhatu-shak"]
  },
  {
    id: "khalu",
    deva: "खलु / नूनम्",
    iast: "khalu / nūnam",
    stem: "khalu",
    pos: "avyaya (ind.)",
    englishGlosses: ["indeed", "surely", "verily", "as is well known", "pray (conciliatory)"],
    phoneticAliases: ["khalu", "nunam", "noonam", "hi", "vai", "dhruvam", "indeed", "surely", "verily"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "निषेधवाक्यालङ्कारजिज्ञासानुनये खलु · नूनं तर्केऽर्थनिश्चये — प्रसिद्धौ निश्चये च निपाताव्ययम् ।",
    lakshanaIast: "niṣedhavākyālaṅkārajijñāsānunaye khalu · nūnaṃ tarke'rthaniścaye — prasiddhau niścaye ca nipātāvyayam |",
    meaningShort: "Indeed, surely, as everyone knows (khalu), and certainly / methinks (nūnam).",
    meaningDeep: "Catalogued in Amarakośa 3.4.13 & 3.4.6, khalu is one of classical Sanskrit drama and śāstra's subtlest discourse particles: appealing to shared recognition ('indeed / after all': sarvaṃ khalv idaṃ brahma, Chāndogya 3.14.1; ratna-śabda-vācyāni khalu...), softening an entreaty (anunaya), or prohibiting with ktvā by Aṣṭādhyāyī 3.4.18 (khalu kṛtvā, 'pray do not do so'). Its companion nūnam expresses either firm certainty (niścaya) or poetic conjecture (utprekṣā / tarka: nūnaṃ...).",
    padaccheda: [
      { deva: "निषेध-वाक्यालङ्कार-जिज्ञासा-अनुनये खलु", iast: "niṣedha-vākyālaṅkāra-jijñāsā-anunaye khalu", gloss: "khalu marks prohibition, grace, inquiry, conciliation, and well-known truth (Amarakośa 3.4.13)" },
      { deva: "नूनम् तर्के अर्थ-निश्चये", iast: "nūnam tarke artha-niścaye", gloss: "nūnam marks poetic surmise and certainty (Amarakośa 3.4.6)" }
    ],
    source: {
      grantha: "Amarakośa & Aṣṭādhyāyī",
      granthaDeva: "अमरकोशः · अष्टाध्यायी",
      author: "Amarasimha / Pāṇini",
      locator: "Amarakośa 3.4.6 & 3.4.13; Aṣṭādhyāyī 3.4.18"
    },
    related: ["eva", "alam", "badham", "tarka"]
  },
  {
    id: "yadi",
    deva: "यदि / चेत्",
    iast: "yadi / cet",
    stem: "yadi",
    pos: "avyaya (ind.)",
    englishGlosses: ["if", "supposing that", "in case", "whether"],
    phoneticAliases: ["yadi", "cet", "chet", "yadyapi", "if"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "चायदिहन्तचेदिति पक्षान्तरे — संभावनार्थे यदीति सवाक्यादिके चेदिति पदात्परं निपाताव्ययम् ।",
    lakshanaIast: "cāyadihantaced iti pakṣāntare — saṃbhāvanārthe yadīti savākyādike ced iti padāt paraṃ nipātāvyayam |",
    meaningShort: "If, in case — clause-openable yadi and enclitic cet introducing conditional protases and śāstric objections.",
    meaningDeep: "Included in Pāṇini's cādi-gaṇa (1.4.57; triggering accent retention on the protasis finite verb by 8.1.30 nipātair yadyadihantakuvinneccaccaṇkaccidyatrayuktam), yadi may stand freely at the head of a conditional clause (yadi... tarhi / tadā, often with optative vidhiliṅ or conditional lṛṅ), whereas enclitic cet never begins a clause and in Sanskrit philosophical prose crystallizes into the ultra-concise dialectical formula: iti cet — na ('If an opponent objects thus [iti cet] — we reply: No [na], because...').",
    padaccheda: [
      { deva: "संभावना-अर्थे यदि / चेत्", iast: "saṃbhāvana-arthe yadi / cet", gloss: "'if / supposing' in conditional protasis" },
      { deva: "इति चेत् — न", iast: "iti cet — na", gloss: "'if it be argued thus — not so!' (canonical śāstra formula)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 1.4.57 & 8.1.30; Amarakośa 3.4.8"
    },
    related: ["tarhi", "api", "va-avyaya", "vada"]
  },
  {
    id: "tarhi",
    deva: "तर्हि",
    iast: "tarhi",
    stem: "tarhi",
    pos: "avyaya (ind.)",
    englishGlosses: ["then (in that case)", "if so", "at that time"],
    phoneticAliases: ["tarhi", "tada-correlative", "then"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "एतदोऽन् — तदो र्हिलौ च (तर्हि कर्हि यर्हि) यदीत्यस्य प्रतिसम्बन्धि निपाताव्ययम् ।",
    lakshanaIast: "etado'n — tado rhilau ca (tarhi karhi yarhi) yadīty asya pratisambandhi nipātāvyayam |",
    meaningShort: "Then, in that case — the conditional apodosis correlative (tad + rhil) paired naturally with yadi.",
    meaningDeep: "Derived from demonstrative tad via taddhita suffix rhil by Aṣṭādhyāyī 5.3.16 & 5.3.20–21 (forming the classic rhil-triad yarhi 'when', karhi 'when?', tarhi 'then', alongside etarhi 'nowadays'), tarhi originally denoted time ('at that time') and specialized in classical śāstra and spoken Sanskrit as the crisp logical correlative of yadi: yadi megho varṣati, tarhi mayūro nṛtyati ('If the cloud rains, then the peacock dances').",
    padaccheda: [
      { deva: "तद् + र्हिल् = तर्हि", iast: "tad + rhil = tarhi", gloss: "then, in that case (taddhita avyaya, Aṣṭ. 5.3.20–21)" },
      { deva: "यदि... तर्हि", iast: "yadi... tarhi", gloss: "if... then (canonical conditional pair)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī",
      granthaDeva: "अष्टाध्यायी",
      author: "Pāṇini",
      locator: "Aṣṭādhyāyī 5.3.16 & 5.3.20–21"
    },
    related: ["yadi", "tada", "tad-pron", "tatah"]
  },
  {
    id: "badham",
    deva: "आम् / बाढम्",
    iast: "ām / bāḍham",
    stem: "bāḍham",
    pos: "avyaya (ind.)",
    englishGlosses: ["yes!", "certainly", "assuredly", "by all means", "agreed"],
    phoneticAliases: ["badham", "baadham", "am", "aam", "om-yes", "atha-kim", "evam-eva", "yes", "certainly"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "एवमाम्बाढमित्यभ्युपगमे — ओमेवं परं बाढमिति स्वीकारनिश्चयवाचकमव्ययम् ।",
    lakshanaIast: "evam āmbāḍham ity abhyupagame — om evaṃ paraṃ bāḍham iti svīkāraniścayavācakam avyayam |",
    meaningShort: "Yes! Assuredly! Agreed! — classical Sanskrit's particles of wholehearted assent (abhyupagama / svīkāra).",
    meaningDeep: "Amarakośa 3.4.2 & 3.4.15 group Sanskrit's affirmative particles of assent: ām ('Yes! Indeed', also marking sudden recollection), bāḍham (historically kta of √bādh/√vah → 'firmly, assuredly, by all means!', ubiquitous in Sanskrit drama and Śaṅkara/Jayatīrtha dialogues when granting a premise: bāḍham, satyam evaitat), and Vedic-Upaniṣadic om (Chāndogya 1.1.8: oṃ ity etad akṣaram anujñā, 'This syllable Oṃ is solemn assent').",
    padaccheda: [
      { deva: "आम् / बाढम् अभ्युपगमे", iast: "ām / bāḍham abhyupagame", gloss: "'Yes! Certainly!' in the sense of assent and agreement (Amarakośa 3.4.15)" },
      { deva: "ओम् अनुज्ञायाम्", iast: "om anujñāyām", gloss: "solemn Vedic affirmation" }
    ],
    source: {
      grantha: "Amarakośa & Chāndogyopaniṣad",
      granthaDeva: "अमरकोशः · छान्दोग्योपनिषद्",
      author: "Amarasimha",
      locator: "Amarakośa 3.4.2 & 3.4.15; Chāndogya Upaniṣad 1.1.8"
    },
    related: ["na-avyaya", "om", "khalu", "tatha"]
  },
  {
    id: "namah",
    deva: "नमः (नमस्)",
    iast: "namaḥ (namas)",
    stem: "namas",
    pos: "avyaya (ind.)",
    englishGlosses: ["salutation", "reverent bow", "homage to (+ dative)", "not mine (spiritual nirukti)"],
    phoneticAliases: ["namah", "namas", "namo", "namaste", "namaskara", "salutation", "homage"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "नमःस्वस्तिस्वाहास्वधालंवषड्योगाच्च — हरये नमो गुरवे नम इति चतुर्थीविभक्तियोगि प्रह्वत्ववाचि स्वराद्यव्ययम् ।",
    lakshanaIast: "namaḥsvastisvāhāsvadhālaṃvaṣaḍyogāc ca — haraye namo gurave nama iti caturthīvibhaktiyogi prahvatvavāci svarādyavyayam |",
    meaningShort: "Reverent salutation, homage unto — governing the dative case by Aṣṭādhyāyī 2.3.16 (namaḥ + caturthī).",
    meaningDeep: "Listed in Pāṇini's svarādi-gaṇa (1.1.37, derived from √nam 'to bow') and heading Aṣṭādhyāyī 2.3.16 (namaḥsvastisvāhāsvadhālaṃvaṣaḍyogāc ca), namaḥ requires the fourth (dative) case of the one saluted when used alone (śrīgurave namaḥ, nārāyaṇāya namaḥ, namas te = tubhyaṃ namaḥ; though with finite verb karoti it may govern the accusative: devaṃ namaskaroti, 1.4.70 ādarānādarayoḥ sadasatī + gati-kāraka). Spiritual nirukti also reads na mama ('not mine — all belongs to the Lord'), dissolving ahaṅkāra.",
    padaccheda: [
      { deva: "नमः-योगात् चतुर्थी", iast: "namaḥ-yogāt caturthī", gloss: "in construction with namaḥ, the fourth (dative) case applies (Aṣṭ. 2.3.16)" },
      { deva: "न मम इति नमः", iast: "na mama iti namaḥ", gloss: "'nothing is selfishly mine' — devotional nirukti of surrender" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.16 & 1.1.37; Amarakośa 3.4.7"
    },
    related: ["dhatu-nam", "svasti", "sharanagati", "ahankara"]
  },
  {
    id: "svasti",
    deva: "स्वस्ति",
    iast: "svasti",
    stem: "svasti",
    pos: "avyaya (ind.)",
    englishGlosses: ["may it be well!", "auspiciousness", "blessing / welfare unto (+ dative)", "peace"],
    phoneticAliases: ["svasti", "swasti", "svastika", "kushalam", "bhadram-blessing", "well-being", "blessing"],
    pillar: "kosha",
    domain: "Avyaya & Nipāta (Indeclinables & Particles)",
    lakshanaDeva: "स्वस्त्याशीःक्षेमपुण्यादौ · नमःस्वस्तिस्वाहास्वधालंवषड्योगाच्च — प्रजाभ्यः स्वस्तीति चतुर्थीयोगि मङ्गलाव्ययम् ।",
    lakshanaIast: "svasty āśīḥkṣemapuṇyādau · namaḥsvastisvāhāsvadhālaṃvaṣaḍyogāc ca — prajābhyaḥ svastīti caturthīyogi maṅgalāvyayam |",
    meaningShort: "Well-being, auspicious blessing unto (+ dative) — transparent fusion of su + asti ('well-being').",
    meaningDeep: "Etymologically transparent to Yāska and Pāṇini as su + asti ('well-being / auspicious existence', listed in svarādi-gaṇa 1.1.37; whence svastika, 'emblem of auspicious well-being', via su + asti + ka), svasti is paired immediately with namaḥ in Aṣṭādhyāyī 2.3.16 to govern the dative case of the recipient of benediction: svasti prajābhyaḥ paripālayantāṃ nyāyena mārgeṇa mahīṃ mahīśāḥ ('May auspicious well-being rest upon all beings!'), and Vedic svasti na indro vṛddhaśravāḥ.",
    padaccheda: [
      { deva: "सु + अस्ति = स्वस्ति", iast: "su + asti = svasti", gloss: "good being, auspiciousness, welfare" },
      { deva: "आशीः-क्षेम-पुण्य-आदौ", iast: "āśīḥ-kṣema-puṇya-ādau", gloss: "in benediction, safety, and merit (+ dative, Amarakośa 3.4.11 & Aṣṭ. 2.3.16)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Ṛgveda",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · ऋग्वेदः",
      author: "Pāṇini / Amarasimha",
      locator: "Aṣṭādhyāyī 2.3.16 & 1.1.37; Amarakośa 3.4.11; ṚV 1.89.6"
    },
    related: ["namah", "shubha", "dhatu-as", "alam"]
  }
];




