// Foundational Sanskrit Kosha — Part 2: Vidyā, Vāk & Kalā (Knowledge & Speech) and Kuṭumba, Samāja & Nīti (Life, Society & Ethics)
// Grounded in Amarasimha's Amarakośa (Nāmaliṅgānuśāsanam), Yāska's Nirukta,
// Vedic Saṃhitās & Upaniṣads, Bhagavadgītā, Nyāya-Alaṅkāra Lakṣaṇas, and Śrī Madhvācārya's Sarvamūla Granthāḥ.

export const koshaVidyaSamajaEntries = [
  // ============================================================================
  // DOMAIN 1: Vidyā, Vāk & Kalā (Knowledge & Speech) — 48 Entries
  // ============================================================================
  {
    id: "jnana",
    deva: "ज्ञानम्",
    iast: "jñānam",
    stem: "jñāna",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["knowledge", "cognition", "awareness", "spiritual realization"],
    phoneticAliases: ["jnana", "gyana", "bodha", "samvid", "avabodha", "vijnana", "knowledge"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "ज्ञायतेऽवगम्यतेऽर्थोऽनेन इति ज्ञानम् । सर्वव्यवहारहेतुर्गुणो बुद्धिर्ज्ञानम् ॥",
    lakshanaIast: "jñāyate 'vagamyate 'rtho 'nena iti jñānam | sarvavyavahārahetur guṇo buddhir jñānam ||",
    meaningShort: "Knowledge or awareness — the illuminating cognition whereby objects and reality become manifest to a knower.",
    meaningDeep: "Formed from √jñā ('avabodhane' — to know, cognize; Pāṇini 3.3.115 `-lyuṭ`), `jñāna` is defined in Tarkasaṅgraha (34) as the cognitive quality underlying all linguistic and practical engagement (`sarvavyavahārahetuḥ`), while Amarakośa (1.5.6) distinguishes liberating spiritual knowledge (`mokṣe dhīr jñānam`) from specialized arts and sciences (`anyatra vijñānaṃ śilpaśāstrayoḥ`). In Śrī Madhvācārya's Pramāṇalakṣaṇam (`yathārthaṃ pramāṇam`), valid knowledge (`yathārtha-jñāna`) apprehends an object exactly as it exists (`yathāvasthita-jñeya`), culminating in direct realization (`aparokṣa-jñāna`) of Viṣṇu (`nahi jñānena sadṛśaṃ pavitram iha vidyate`, BG 4.38).",
    padaccheda: [
      { deva: "ज्ञायते अर्थः अनेन", iast: "jñāyate arthaḥ anena", gloss: "that whereby an object is known and illumined (√jñā + -ana)" },
      { deva: "सर्व-व्यवहार-हेतुः", iast: "sarva-vyavahāra-hetuḥ", gloss: "the cognitive ground of all speech and purposeful action" },
      { deva: "बुद्धिः ज्ञानम्", iast: "buddhiḥ jñānam", gloss: "apprehending awareness, knowledge" }
    ],
    source: {
      grantha: "Tarkasaṅgraha, Amarakośa & Pramāṇalakṣaṇam",
      granthaDeva: "तर्कसङ्ग्रहः · अमरकोशः · प्रमाणलक्षणम्",
      author: "Annambhaṭṭa, Amarasimha & Śrī Madhvācārya",
      locator: "TS 34; AK 1.5.6; BG 4.38"
    },
    related: ["vidya", "buddhi", "pramana", "aparokshajnana", "dipa"]
  },
  {
    id: "vidya",
    deva: "विद्या",
    iast: "vidyā",
    stem: "vidyā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["learning", "science", "systematic discipline", "liberating wisdom"],
    phoneticAliases: ["vidya", "shiksha-vidya", "adhyatma-vidya", "learning", "science"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "विद्यते ज्ञायते तत्त्वमनया इति विद्या । सा विद्या या विमुक्तये ॥",
    lakshanaIast: "vidyate jñāyate tattvam anayā iti vidyā | sā vidyā yā vimuktaye ||",
    meaningShort: "Systematic learning or sacred wisdom — a disciplined body of true knowledge, culminating in that supreme science which liberates from bondage.",
    meaningDeep: "Derived from √vid ('jñāne' — to know thoroughly) with suffix `-kyap` + `-ṭāp` (Pāṇini 3.3.99: `saṃjñāyāṃ samajaniṣad... vidāṃ kyap`), `vidyā` encompasses the fourteen classical seats of learning (`caturdaśa-vidyāsthānāni`: the four Vedas, six Vedāṅgas, Mīmāṃsā, Nyāya, Purāṇa, and Dharmaśāstra). Muṇḍaka Upaniṣad 1.1.4–5 distinguishes `aparā vidyā` (ancillary sciences) from `parā vidyā` (direct comprehension of the Imperishable Lord), echoed in Viṣṇu Purāṇa 1.19.41 (`sā vidyā yā vimuktaye`) and Bhagavadgītā 10.32 (`adhyātmavidyā vidyānām`).",
    padaccheda: [
      { deva: "ज्ञायते तत्त्वम् अनया", iast: "jñāyate tattvam anayā", gloss: "that discipline whereby reality is truly known (√vid + -kyap)" },
      { deva: "सा विद्या", iast: "sā vidyā", gloss: "that indeed is supreme learning" },
      { deva: "या विमुक्तये", iast: "yā vimuktaye", gloss: "which leads unto complete liberation (`mokṣa`)" }
    ],
    source: {
      grantha: "Viṣṇu Purāṇa, Muṇḍakopaniṣad & Amarakośa",
      granthaDeva: "विष्णुपुराणम् · मुण्डकोपनिषत् · अमरकोशः",
      author: "Śrī Parāśara & Amarasimha",
      locator: "VP 1.19.41; Muṇḍaka Up. 1.1.4; AK 1.5.6"
    },
    related: ["jnana", "shastra", "acarya", "shishya", "avidya"]
  },
  {
    id: "buddhi",
    deva: "बुद्धिः",
    iast: "buddhiḥ",
    stem: "buddhi",
    pos: "strīliṅga (f.)",
    englishGlosses: ["intellect", "discernment", "understanding", "determinative reason"],
    phoneticAliases: ["buddhi", "dhi", "mati", "dhishana", "manisha", "shemushi", "intellect"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "बुध्यते निश्चिनोति तत्त्वमनया इति बुद्धिः । बुद्धिर्मनीषा धिषणा धीः प्रज्ञा शेमुषी मतिः ॥",
    lakshanaIast: "budhyate niścinoti tattvam anayā iti buddhiḥ | buddhir manīṣā dhiṣaṇā dhīḥ prajñā śemuṣī matiḥ ||",
    meaningShort: "The intellect — the decisive faculty of discernment and judgment (`adhyavasāya`) that ascertains truth amidst doubt.",
    meaningDeep: "Formed from √budh ('avagamane' — to awaken, discern) with `-ktin` (Pāṇini 3.3.94), `buddhi` opens Amarakośa's Dhīvarga (1.5.1) alongside `manīṣā` ('sovereign over mental impulse'), `dhiṣaṇā`, `dhī` (invoked in the Gāyatrī mantra `dhiyo yo naḥ pracodayāt`), `prajñā`, `śemuṣī`, and `mati`. While Nyāya equates `buddhi` with episodic cognition (`jñāna`), Sāṅkhya and Vedānta identify `buddhi` (`mahat-tattva`) as the determinative inner faculty (`niścayātmikā antaḥkaraṇa-vṛttiḥ`) and discerning charioteer in Kaṭha Upaniṣad 1.3.3 (`buddhiṃ tu sārathiṃ viddhi`).",
    padaccheda: [
      { deva: "बुध्यते निश्चिनोति अनया", iast: "budhyate niścinoti anayā", gloss: "the faculty whereby one awakens to and determines truth (√budh + -ti)" },
      { deva: "मनीषा धिषणा धीः", iast: "manīṣā dhiṣaṇā dhīḥ", gloss: "wise intelligence, acute judgment, luminous `dhī`" },
      { deva: "प्रज्ञा शेमुषी मतिः", iast: "prajñā śemuṣī matiḥ", gloss: "insight, discerning intellect, reasoned thought" }
    ],
    source: {
      grantha: "Amarakośa & Kaṭhopaniṣad",
      granthaDeva: "अमरकोशः · कठोपनिषत्",
      author: "Amarasimha",
      locator: "AK 1.5.1 (Dhīvarga); Kaṭha Up. 1.3.3"
    },
    related: ["jnana", "medha", "prajna", "manas", "mahattattva"]
  },
  {
    id: "citta",
    deva: "चित्तम्",
    iast: "cittam",
    stem: "citta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["mind-stuff", "attentive awareness", "recollective heart", "consciousness"],
    phoneticAliases: ["citta", "chitta", "cetas", "chetas", "manasa", "mind"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "चेतयते संजानाति स्मृतिसंस्काराश्चात्र चीयन्ते इति चित्तम् । चित्तं तु चेतो हृदयं स्वान्तं हृन्मानसं मनः ॥",
    lakshanaIast: "cetayate saṃjānāti smṛtisaṃskārāś cātra cīyante iti cittam | cittaṃ tu ceto hṛdayaṃ svāntaṃ hṛn mānasaṃ manaḥ ||",
    meaningShort: "Attentive mind-stuff (`citta`) — the inward field of awareness, contemplation, and stored memory-impressions (`saṃskāra`).",
    meaningDeep: "Derived from √citī ('saṃjñāne' — to be conscious, reflect intently; Pāṇini 3.3.114 `-kta`), and secondarily linked by commentators to √ci ('accumulating latent impressions'), `citta` is grouped in Amarakośa (Dhīvarga 1.5.3) with `cetas`, `hṛdaya`, `svānta`, `mānasa`, and `manas`. In fourfold Vedāntic `antaḥkaraṇa` analysis (`manas, buddhi, ahaṅkāra, citta`), `citta` is the recollective, contemplative aspect (`anusandhānātmakaṃ cittam`, presided over by Vāsudeva/Cetanā), whose serene one-pointedness (`citta-prasāda` / `mad-citta`, BG 10.9) reflects spiritual truth without distortion.",
    padaccheda: [
      { deva: "चेतयते संजानाति इति चित्तम्", iast: "cetayate saṃjānāti iti cittam", gloss: "reflects consciously and retains impressions (√cit + -ta)" },
      { deva: "चेतः हृदयम् स्वान्तम्", iast: "cetaḥ hṛdayam svāntam", gloss: "conscious heart, inner bosom, inward mind" },
      { deva: "मानसम् मनः", iast: "mānasam manaḥ", gloss: "reflective mind" }
    ],
    source: {
      grantha: "Amarakośa & Yogasūtra",
      granthaDeva: "अमरकोशः · योगसूत्रम्",
      author: "Amarasimha & Patañjali",
      locator: "AK 1.5.3 (Dhīvarga); YS 1.2"
    },
    related: ["manas", "buddhi", "hridaya", "smriti", "chintana"]
  },
  {
    id: "medha",
    deva: "मेधा",
    iast: "medhā",
    stem: "medhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["retentive intelligence", "intellectual grasp", "acumen", "memory-power"],
    phoneticAliases: ["medha", "dharana-shakti", "medhavin", "acumen", "intelligence"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "मेधते सङ्गतं करोति श्रुतार्थान् इति मेधा । धीर्धारणावती मेधा ॥",
    lakshanaIast: "medhate saṅgataṃ karoti śrutārthān iti medhā | dhīr dhāraṇāvatī medhā ||",
    meaningShort: "Retentive intelligence — the luminous power of intellect (`dhī`) to grasp complex teachings swiftly and hold them unforgotten.",
    meaningDeep: "Amarasimha gives one of Sanskrit lexicography's crispest two-word lakṣaṇas in Amarakośa 1.5.2: `dhīr dhāraṇāvatī medhā` — 'intellect endowed with unfailing retention (`dhāraṇā`) is `medhā`'. Derived from √medhṛ ('saṅgame medhāhiṃsayoś ca' — integrating and harmonizing heard meanings), one possessing `medhā` is termed `medhāvin` (Pāṇini 5.2.121 `asmāyāmedhāsrajo viniḥ`). Celebrated in the Taittirīya *Medhā-sūkta* (`medhāṃ ma indro dadātu`) and Bhagavadgītā 10.34, `medhā` bridges initial listening (`śravaṇa`) and lifelong philosophical mastery.",
    padaccheda: [
      { deva: "धीः", iast: "dhīḥ", gloss: "discerning intellect" },
      { deva: "धारणावती", iast: "dhāraṇāvatī", gloss: "endowed with steadfast, unfailing retention (`dhāraṇā`)" },
      { deva: "मेधा", iast: "medhā", gloss: "retentive acumen and integrative intelligence" }
    ],
    source: {
      grantha: "Amarakośa & Taittirīya Āraṇyaka",
      granthaDeva: "अमरकोशः · तैत्तिरीयारण्यकम्",
      author: "Amarasimha",
      locator: "AK 1.5.2 (Dhīvarga); TA 10.41 (Medhāsūkta)"
    },
    related: ["buddhi", "prajna", "smriti", "vidya", "shravana"]
  },
  {
    id: "prajna",
    deva: "प्रज्ञा",
    iast: "prajñā",
    stem: "prajñā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["wisdom", "penetrating insight", "creative intuition", "sage discernment"],
    phoneticAliases: ["prajna", "pragya", "pratibha", "sthitaprajna", "wisdom", "insight"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "प्रकर्षेण जानाति तत्त्वमनया इति प्रज्ञा । प्रज्ञा नवनवोन्मेषशालिनी प्रतिभा मता ॥",
    lakshanaIast: "prakarṣeṇa jānāti tattvam anayā iti prajñā | prajñā navanavonmeṣaśālinī pratibhā matā ||",
    meaningShort: "Wisdom or penetrating insight — exalted, clear-eyed discernment of reality and ever-fresh creative intuition.",
    meaningDeep: "Formed from `pra` + √jñā + `-aṅ` (Pāṇini 3.3.103), `prajñā` denotes supreme, unclouded discernment beyond rote learning (`śrutavipratipannā te yadā sthāsyati niścalā... prajñā`, BG 2.53–58, defining the `sthitaprajña` sage). While Amarakośa (1.5.1) groups `prajñā` among core names of higher intellect, Bhaṭṭa Tauta and Abhinavagupta in Sanskrit poetics define `prajñā` turning toward ever-new creative vision (`navanavonmeṣaśālinī`) as `pratibhā` (poetic genius), and Yoga-sūtra 1.48 terms truth-bearing contemplative insight `ṛtambharā prajñā`.",
    padaccheda: [
      { deva: "प्रकर्षेण जानाति अनया", iast: "prakarṣeṇa jānāti anayā", gloss: "discerns reality with exalted clarity (`pra` + √jñā)" },
      { deva: "नव-नव-उन्मेष-शालिनी", iast: "nava-nava-unmeṣa-śālinī", gloss: "blooming with ever-fresh flashes of insight" },
      { deva: "प्रज्ञा प्रतिभा", iast: "prajñā pratibhā", gloss: "penetrating wisdom and intuitive genius" }
    ],
    source: {
      grantha: "Amarakośa, Bhagavadgītā & Dhvanyāloka-locana",
      granthaDeva: "अमरकोशः · भगवद्गीता · ध्वन्यालोकलोचनम्",
      author: "Amarasimha, Śrī Vedavyāsa & Bhaṭṭa Tauta",
      locator: "AK 1.5.1; BG 2.54–58"
    },
    related: ["buddhi", "medha", "jnana", "kavya", "dhyana"]
  },
  {
    id: "chintana",
    deva: "चिन्तनम्",
    iast: "cintanam",
    stem: "cintana",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["reflection", "contemplation", "pondering", "sustained thought"],
    phoneticAliases: ["chintana", "cintana", "bhavana", "vimarsha", "vicara", "reflection", "contemplation"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "चिन्त्यते विमृश्यते तत्त्वमनेन इति चिन्तनम् । विजातीयप्रत्ययान्तरितं चिन्तनं मननम् अविच्छिन्नं तु ध्यानम् ॥",
    lakshanaIast: "cintyate vimṛśyate tattvam anena iti cintanam | vijātīyapratyayāntaritaṃ cintanaṃ mananam avicchinnaṃ tu dhyānam ||",
    meaningShort: "Reflection or contemplation — deliberate, sustained pondering (`bhāvanā` / `vimarśa`) that deepens understanding into conviction.",
    meaningDeep: "Derived from tenth-gaṇa √citi ('smṛtau' — `cintayati`, to ponder, reflect systematically) with `-lyuṭ` (`cintanam`, alongside feminine `cintā` and `bhāvanā`), `cintana` is the active life of philosophical inquiry. In Śrī Jayatīrtha's *Nyāyasudhā* and Madhvācārya's *Anuvyākhyāna*, reasoned reflection examining arguments (`manana`) and unbroken loving meditation (`nirantara-cintana` = `dhyāna` / `nididhyāsana`) form the indispensable bridge between hearing scripture (`śravaṇa`) and direct spiritual vision.",
    padaccheda: [
      { deva: "चिन्त्यते विमृश्यते इति चिन्तनम्", iast: "cintyate vimṛśyate iti cintanam", gloss: "deliberate pondering and critical reflection (√cint + -ana)" },
      { deva: "चिन्तनम् मननम्", iast: "cintanam mananam", gloss: "investigative reflection (`manana`)" },
      { deva: "अविच्छिन्नम् ध्यानम्", iast: "avicchinnam dhyānam", gloss: "when unbroken like flowing oil, becomes `dhyāna`" }
    ],
    source: {
      grantha: "Amarakośa & Nyāyasudhā",
      granthaDeva: "अमरकोशः · न्यायसुधा",
      author: "Amarasimha & Śrī Jayatīrtha",
      locator: "AK 1.5.2; NS 1.1.1"
    },
    related: ["manana", "dhyana", "citta", "buddhi", "prashna"]
  },
  {
    id: "prashna",
    deva: "प्रश्नः",
    iast: "praśnaḥ",
    stem: "praśna",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["question", "inquiry", "philosophical query"],
    phoneticAliases: ["prashna", "prasna", "anuyoga", "priccha", "jijnasa", "question", "inquiry"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "पृच्छ्यते जिज्ञास्यतेऽनेन इति प्रश्नः । प्रश्नोऽनुयोगः पृच्छा च ॥",
    lakshanaIast: "pṛcchyate jijñāsyate 'nena iti praśnaḥ | praśno 'nuyogaḥ pṛcchā ca ||",
    meaningShort: "A question or earnest inquiry — the spoken expression of a seeker's desire to know, opening the gateway to wisdom.",
    meaningDeep: "Formed with suffix `-naṅ` by Pāṇini 3.3.90 (`yajayācayatavicchapraccharakṣo naṅ` — √pracch 'jñīpsāyām' + `-na` → `praśna`, with palatalization of `cch` to `ś`), `praśna` is grouped in Amarakośa (Śabdādivarga 1.6.10) with `anuyoga` and `pṛcchā`. Entire Upaniṣads (*Praśnopaniṣad*, *Kenopaniṣad*) and the *Bhagavadgītā* (`paripraśnena sevayā`, BG 4.34) unfold from sincere, humble `praśna`: in Sanskrit pedagogy, a well-framed question (`sat-praśna`) is honored as half of knowledge itself.",
    padaccheda: [
      { deva: "पृच्छ्यते जिज्ञास्यते अनेन", iast: "pṛcchyate jijñāsyate anena", gloss: "that whereby truth is earnestly asked and sought (√pracch + -na)" },
      { deva: "प्रश्नः अनुयोगः", iast: "praśnaḥ anuyogaḥ", gloss: "question, scholarly query" },
      { deva: "पृच्छा", iast: "pṛcchā", gloss: "seeking inquiry" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · भगवद्गीता",
      author: "Pāṇini, Amarasimha & Śrī Vedavyāsa",
      locator: "Pāṇini 3.3.90; AK 1.6.10; BG 4.34"
    },
    related: ["uttara", "samvada", "samshaya", "shishya", "acarya"]
  },
  {
    id: "uttara",
    deva: "उत्तरम्",
    iast: "uttaram",
    stem: "uttara",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["answer", "reply", "subsequent", "northern", "superior"],
    phoneticAliases: ["uttara", "prativakya", "udici-north", "shreshtha-uttara", "answer", "reply", "north"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "उत्तरति संशयं तरत्यनेन इति उत्तरम् । उदीच्यां प्रतवाक्ये च श्रेष्ठे च परस्मिन्नुत्तरः ॥",
    lakshanaIast: "uttarati saṃśayaṃ taraty anena iti uttaram | udīcyāṃ prativākye ca śreṣṭhe ca parasminn uttaraḥ ||",
    meaningShort: "An answer or reply (`prativākya`) that resolves a question — and across genders, northern (`udīcī`), subsequent (`uttara-mīmāṃsā`), or preeminent.",
    meaningDeep: "Derived from `ud` + √tṝ ('plavanataraṇayoḥ' — rising above and ferrying the mind across doubt) with `-ac` (or comparative `-tarap` on `ud`, 'higher'), `uttara` displays remarkable structural elegance in Amarakośa (1.6.11 & Nānārthavarga 3.3.175): neuter `uttaram` means a reasoned reply (`prativākya`) answering a `pūrvapakṣa` or `praśna`; feminine `uttarā` (`udīcī`) names the northern direction toward the lofty Himālayas; and adjectival `uttara` denotes both 'later/concluding' (as in *Uttara-Mīmāṃsā* = Vedānta) and 'excelling/superior'.",
    padaccheda: [
      { deva: "संशयम् तरति अनेन", iast: "saṃśayam tarati anena", gloss: "resolves and carries one beyond doubt (`ud` + √tṝ)" },
      { deva: "उदीच्याम् प्रतिवाक्ये च", iast: "udīcyām prativākye ca", gloss: "signifying the northern quarter and a reasoned reply" },
      { deva: "श्रेष्ठे परस्मिन् च", iast: "śreṣṭhe parasmin ca", gloss: "and also superior or subsequent" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.6.11, 3.3.175"
    },
    related: ["prashna", "samvada", "dish", "siddhanta", "katha"]
  },
  {
    id: "shabda",
    deva: "शब्दः",
    iast: "śabdaḥ",
    stem: "śabda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["sound", "word", "verbal testimony", "speech-form"],
    phoneticAliases: ["shabda", "sabda", "dhvani", "nada", "ninada", "pada-word", "word", "sound"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "शब्द्यते आविष्क्रियतेऽर्थोऽनेन इति शब्दः । श्रोत्रग्राह्यो गुणः शब्दः ध्वन्यात्मको वर्णात्मकश्च ॥",
    lakshanaIast: "śabdyate āviṣkriyate 'rtho 'nena iti śabdaḥ | śrotragrāhyo guṇaḥ śabdaḥ dhvanyātmako varṇātmakaś ca ||",
    meaningShort: "Sound or articulate word — the acoustic quality apprehended by the ear, manifesting both as inarticulate tone (`dhvani`) and meaningful language (`varṇa` / `pada`).",
    meaningDeep: "Derived from √śabd ('āviṣkāre bhāṣaṇe ca' — to manifest meaning through utterance), `śabda` spans physics, grammar, and epistemology. Amarakośa (Śabdādivarga 1.6.23) lists `nināda`, `dhvani`, `dhvāna`, `rava`, `svana`, and `nāda`. Tarkasaṅgraha (33) divides `śabda` into `dhvanyātmaka` (percussive/musical tone) and `varṇātmaka` (phonemic language), while Patañjali's *Mahābhāṣya* (`pratītīpadārthako loke dhvaniḥ śabdaḥ`) and Madhvācārya's *Pramāṇalakṣaṇam* establish defectless `śabda` (`āgama`) as the sole valid `pramāṇa` for supersensible spiritual realities.",
    padaccheda: [
      { deva: "आविष्क्रियते अर्थः अनेन", iast: "āviṣkriyate arthaḥ anena", gloss: "reveals and communicates meaning (√śabd)" },
      { deva: "श्रोत्र-ग्राह्यः गुणः", iast: "śrotra-grāhyaḥ guṇaḥ", gloss: "the quality apprehended specifically by the auditory sense" },
      { deva: "ध्वनि-आत्मकः वर्ण-आत्मकः च", iast: "dhvani-ātmakaḥ varṇa-ātmakaḥ ca", gloss: "twofold: non-verbal tone (`dhvani`) and phonemic word (`varṇa`)" }
    ],
    source: {
      grantha: "Tarkasaṅgraha, Mahābhāṣya & Amarakośa",
      granthaDeva: "तर्कसङ्ग्रहः · महाभाष्यम् · अमरकोशः",
      author: "Annambhaṭṭa, Patañjali & Amarasimha",
      locator: "TS 33; MBh Paspaśāhnika; AK 1.6.23"
    },
    related: ["vak", "artha", "shrotra", "akasha", "agama"]
  },
  {
    id: "vak",
    deva: "वाक्",
    iast: "vāk",
    stem: "vāc",
    pos: "strīliṅga (f.)",
    englishGlosses: ["speech", "voice", "eloquence", "sacred utterance"],
    phoneticAliases: ["vak", "vac", "vani", "gir", "bharati", "sarasvati", "speech", "voice"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "उच्यतेऽनया अर्थ इति वाक् । ब्राह्मी तु भारती भाषा गीर्वाग्वाणी सरस्वती ॥",
    lakshanaIast: "ucyate 'nayā artha iti vāk | brāhmī tu bhāratī bhāṣā gīr vāg vāṇī sarasvatī ||",
    meaningShort: "Speech or sacred utterance — the luminous faculty of articulate expression uniting thought, breath, and meaning.",
    meaningDeep: "Derived directly from √vac ('paribhāṣaṇe' — to speak, express clearly; Nirukta 2.23 `vāk kasmāt? vaceḥ`, cognate with Latin *vōx* and English *voice*), `vāc` (nominative `vāk`) opens Amarakośa's Śabdādivarga (1.6.1): `brāhmī`, `bhāratī`, `bhāṣā`, `gir` (`gīḥ`), `vāk`, `vāṇī`, and `sarasvatī`. Celebrated in the Ṛgvedic *Vāg-āmbhṛṇī Sūkta* (RV 10.125) and RV 1.164.45 (`catvāri vāk parimitā padāni` — `parā, paśyantī, madhyamā, vaikharī`), `vāk` in Bhagavadgītā 17.15 reaches perfection as `vāṅmayaṃ tapaḥ`: speech that is truthful, gentle, beneficial, and rooted in Vedic study.",
    padaccheda: [
      { deva: "उच्यते अनया अर्थः", iast: "ucyate anayā arthaḥ", gloss: "the faculty whereby meaning is articulated (√vac)" },
      { deva: "ब्राह्मी भारती भाषा", iast: "brāhmī bhāratī bhāṣā", gloss: "sacred lore, eloquence, living language" },
      { deva: "गीः वाक् वाणी सरस्वती", iast: "gīḥ vāk vāṇī sarasvatī", gloss: "utterance, speech, melodious voice, flowing Sarasvatī" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Ṛgveda",
      granthaDeva: "अमरकोशः · निरुक्तम् · ऋग्वेदः",
      author: "Amarasimha & Yāska",
      locator: "AK 1.6.1 (Śabdādivarga); Nirukta 2.23; RV 1.164.45"
    },
    related: ["shabda", "bhasha", "jihva", "svara", "subhashita"]
  },
  {
    id: "bhasha",
    deva: "भाषा",
    iast: "bhāṣā",
    stem: "bhāṣā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["language", "vernacular speech", "definition", "spoken idiom"],
    phoneticAliases: ["bhasha", "bhasa", "vyavaharika-vak", "gir-bhasha", "language"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "भाष्यते व्यवह्रियतेऽनया इति भाषा । ब्राह्मी तु भारती भाषा गीर्वाग्वाणी सरस्वती ॥",
    lakshanaIast: "bhāṣyate vyavahriyate 'nayā iti bhāṣā | brāhmī tu bhāratī bhāṣā gīr vāg vāṇī sarasvatī ||",
    meaningShort: "Language — a structured, living system of spoken and literary communication shared across a speech community.",
    meaningDeep: "Formed from √bhāṣ ('vyaktāyāṃ vāci' — to speak articulately and distinctly, semantically cognate with √bhās 'to shine forth') with `-aṅ` + `-ṭāp` (Pāṇini 3.3.104), `bhāṣā` is listed in Amarakośa (1.6.1) among the noble names of Sarasvatī and speech. Crucially, in Pāṇini's *Aṣṭādhyāyī* (`bhāṣāyāṃ sadavasaśruvaḥ`, 3.2.108), `bhāṣā` specifically designates living, spoken Classical Sanskrit (`laukika-saṃskṛta`) in distinction to archaic Vedic `chandas` — demonstrating that Pāṇinian Sanskrit thrived as a vibrant spoken idiom.",
    padaccheda: [
      { deva: "भाष्यते व्यवह्रियते अनया", iast: "bhāṣyate vyavahriyate anayā", gloss: "that medium through which articulate communication transpires (√bhāṣ)" },
      { deva: "भारती भाषा", iast: "bhāratī bhāṣā", gloss: "cultivated eloquence and structured language" },
      { deva: "व्यक्ता वाक्", iast: "vyaktā vāk", gloss: "distinct, intelligible human speech" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 3.2.108; AK 1.6.1 (Śabdādivarga)"
    },
    related: ["vak", "shabda", "lipi", "samvada", "sanketa"]
  },
  {
    id: "lipi",
    deva: "लिपिः",
    iast: "lipiḥ",
    stem: "lipi",
    pos: "strīliṅga (f.)",
    englishGlosses: ["script", "alphabet", "writing system", "inscription"],
    phoneticAliases: ["lipi", "libi", "akshara-vinyasa", "varnamala", "devanagari", "script", "writing"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "लिप्यन्ते विलिख्यन्ते वर्णा अनया इति लिपिः । लिपिर्लिबिरुभे स्त्रियाम् ॥",
    lakshanaIast: "lipyante vilikhyante varṇā anayā iti lipiḥ | lipir libir ubhe striyām ||",
    meaningShort: "Script or writing system — the visual array of grapheme characters whereby spoken phonemes (`varṇas`) are inscribed.",
    meaningDeep: "Recorded already in Pāṇini's *Aṣṭādhyāyī* 3.2.21 (`divāvibhāniśāprabhābhāskarāntāntādibahunāndikiṃlipilibibalibhaktikartṛcitrakṣetrasaṅkhyājaṅghābāhvaharyattaddhanuraruṣṣu` — attesting both `lipikara` and `libikara`, 'scribe'), `lipi` derives from √lip ('upadehe' — applying ink or pigment upon birch-bark, palm-leaf, or stone). Amarakośa (Kṣatriyavarga / Śabdādi) notes `lipir libir ubhe striyām`. From ancient Brāhmī to Siddhamātṛkā, Grantha, Nandināgarī, Tigalari (used for Sarvamūla palm-leaf manuscripts in Udupi), and Devanāgarī, `lipi` gives enduring visual form to eternal phonetic `varṇa`.",
    padaccheda: [
      { deva: "लिप्यन्ते वर्णाः अनया", iast: "lipyante varṇāḥ anayā", gloss: "the visual script whereby phonemes are inked or inscribed (√lip)" },
      { deva: "लिपिः लिबिः", iast: "lipiḥ libiḥ", gloss: "Pāṇinian doublet forms for script / writing system" },
      { deva: "उभे स्त्रियाम्", iast: "ubhe striyām", gloss: "both feminine in grammatical gender" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 3.2.21; AK 3.3 (Śabdādi)"
    },
    related: ["lekha", "bhasha", "varna", "pustaka", "kala-art"]
  },
  {
    id: "lekha",
    deva: "लेखः",
    iast: "lekhaḥ",
    stem: "lekha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["writing", "epistle", "document", "inscribed line"],
    phoneticAliases: ["lekha", "lekhana", "patrika", "lipi-lekha", "writing", "document", "letter"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "लिख्यते अक्षरविन्यासोऽनेन इति लेखः । लिपिर्लेखश्च लेखनम् ॥",
    lakshanaIast: "likhyate akṣaravinyāso 'nena iti lekhaḥ | lipir lekhaś ca lekhanam ||",
    meaningShort: "A written document, epistle, or inscription — the composed text or graceful stroke traced by stylus or reed-pen.",
    meaningDeep: "Formed with suffix `-ghañ` (Pāṇini 3.3.18) from √likh ('akṣaravinyāse' — to incise, trace letters, draw lines), `lekha` (alongside feminine `lekhā`, 'delicate line/streak' as in `candralekhā`, and neuter `lekhana`) denotes an official document (`śāsana-lekha`), personal letter (`sandeśa-lekha`), or scholarly composition. Kauṭilya's *Arthaśāstra* (2.10, *Śāsanādhikāra*) devotes an entire chapter to `lekha-sampat` — the six excellences of clear, dignified written composition: logical order (`arthakrama`), relevance (`sambandha`), completeness (`paripūrṇatā`), sweetness (`mādhurya`), elevation (`audārya`), and lucidity (`spaṣṭatva`).",
    padaccheda: [
      { deva: "लिख्यते अक्षर-विन्यासः", iast: "likhyate akṣara-vinyāsaḥ", gloss: "ordered arrangement of written syllables (√likh + -ghañ)" },
      { deva: "लिपिः लेखः", iast: "lipiḥ lekhaḥ", gloss: "script and written epistle or record" },
      { deva: "लेखनम्", iast: "lekhanam", gloss: "the act and art of writing" }
    ],
    source: {
      grantha: "Arthaśāstra & Amarakośa",
      granthaDeva: "अर्थशास्त्रम् · अमरकोशः",
      author: "Kauṭilya & Amarasimha",
      locator: "Arthaśāstra 2.10; AK 3.3.19"
    },
    related: ["lipi", "pustaka", "grantha", "shila", "bhasha"]
  },
  {
    id: "naman",
    deva: "नाम",
    iast: "nāma",
    stem: "nāman",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["name", "noun", "appellation", "divine name"],
    phoneticAliases: ["naman", "nama", "namadheya", "abhidhana", "samjna", "akhya", "name", "noun"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "नमयति अर्थं स्वतोऽभिमुखीकरोति इति नाम । आख्याह्वे अभिधानं च नामधेयं च नाम च ॥",
    lakshanaIast: "namayati arthaṃ svato 'bhimukhīkaroti iti nāma | ākhyāhve abhidhānaṃ ca nāmadheyaṃ ca nāma ca ||",
    meaningShort: "A name or substantive noun — the linguistic designation that calls an entity into cognitive presence.",
    meaningDeep: "Derived via Uṇādi 4.150 (`namer manin`) from √nam ('praṇāme / śabde' — bending meaning directly toward the listener's mind, cognate with Latin *nōmen* and English *name*), `nāman` (nominative `nāma`) is paired in Amarakośa (Śabdādivarga 1.6.8) with `ākhyā`, `āhvā`, `abhidhāna`, `saṃjñā`, and `nāmadheya`. Yāska's *Nirukta* (1.1) places `nāman` ('substance-centered noun', `sattvapradhānāni nāmāni`) first among the four parts of speech (`nāma, ākhyāta, upasarga, nipāta`), while Śrī Madhvācārya's *Sarvamūla* reveals that every primary Vedic `nāma` ultimately converges (`mahāyoga`) upon the infinite attributes of Bhagavān Viṣṇu.",
    padaccheda: [
      { deva: "नमयति अर्थम् इति नाम", iast: "namayati artham iti nāma", gloss: "inclines and brings the referent before awareness (√nam + -man)" },
      { deva: "आख्या अभिधानम्", iast: "ākhyā abhidhānam", gloss: "appellation, expressive designation" },
      { deva: "नामधेयम् नाम", iast: "nāmadheyam nāma", gloss: "proper title, name or substantive noun" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 1.1; AK 1.6.8 (Śabdādivarga)"
    },
    related: ["rupa", "shabda", "artha", "sanketa", "kosha"]
  },
  {
    id: "rupa",
    deva: "रूपम्",
    iast: "rūpam",
    stem: "rūpa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["form", "color", "visible beauty", "intrinsic nature", "dramatic play"],
    phoneticAliases: ["rupa", "roopa", "akriti", "saundarya-rupa", "svarupa", "form", "color", "beauty"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "रूप्यते निरूप्यते चक्षुषा इति रूपम् । चक्षुर्मात्रग्राह्यो गुणो रूपम् रूपं स्वभावे सौन्दर्ये नाणके नाटकादिषु ॥",
    lakshanaIast: "rūpyate nirūpyate cakṣuṣā iti rūpam | cakṣurmātragrāhyo guṇo rūpam rūpaṃ svabhāve saundarye nāṇake nāṭakādiṣu ||",
    meaningShort: "Form, color, or beauty — the visible quality apprehended exclusively by the eye, as well as an entity's intrinsic nature (`svarūpa`).",
    meaningDeep: "Derived from √rūp ('rūpakriyāyām' — configuring distinct visible contour and hue), `rūpa` is defined in Tarkasaṅgraha (24: `cakṣurmātragrāhyo guṇo rūpam — śuklanīlapītaraktaharitakapiśacitrabhedāt saptavidham`) as the visual quality comprising seven hues. Amarakośa (Nānārthavarga 3.3.128) maps its rich polysemy: intrinsic nature (`svabhāva` / `svarūpa`), comeliness (`saundarya`), inflected grammatical word-form (`śabda-rūpa`), stamped coin (`nāṇaka`), and dramatic representation (`rūpaka`). Paired with `nāman` in the Upaniṣads (`nāma-rūpa`), it designates individualized form across the cosmos.",
    padaccheda: [
      { deva: "निरूप्यते चक्षुषा इति रूपम्", iast: "nirūpyate cakṣuṣā iti rūpam", gloss: "visually discerned by the eye (√rūp)" },
      { deva: "चक्षुः-मात्र-ग्राह्यः गुणः", iast: "cakṣuḥ-mātra-grāhyaḥ guṇaḥ", gloss: "the sensible quality grasped solely through vision" },
      { deva: "स्वभावे सौन्दर्ये नाटकादिषु", iast: "svabhāve saundarye nāṭakādiṣu", gloss: "also signifying intrinsic nature, beauty, and drama" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Amarakośa",
      granthaDeva: "तर्कसङ्ग्रहः · अमरकोशः",
      author: "Annambhaṭṭa & Amarasimha",
      locator: "TS 24; AK 3.3.128 (Nānārthavarga)"
    },
    related: ["naman", "netra", "saundarya", "citra", "nataka"]
  },
  {
    id: "artha",
    deva: "अर्थः",
    iast: "arthaḥ",
    stem: "artha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["meaning", "purpose", "object", "wealth"],
    phoneticAliases: ["artha", "abhidheya", "prayojana", "vastu", "purushartha", "meaning", "purpose", "wealth"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "अर्थ्यते याच्यतेऽन्विष्यते वा इति अर्थः । अर्थोऽभिधेयरैवस्तुप्रयोजननिवृत्तिषु ॥",
    lakshanaIast: "arthyate yācyate 'nviṣyate vā iti arthaḥ | artho 'bhidheyaraivastuprayojananivṛttiṣu ||",
    meaningShort: "Meaning, purpose, real object, or material prosperity — that which is intended by words, apprehended by senses, or sought by purposeful action.",
    meaningDeep: "Derived via Uṇādi 2.4 (`ṛ-hanūbhyāṃ than`) from √ṛ ('gatau' — toward which words and efforts move) or √arth ('upayācñāyām' — that which is sought), `artha` receives a celebrated five-meaning *sūtra* in Amarakośa (Nānārthavarga 3.3.87): (1) `abhidheya` — semantic meaning of a word (`śabdārtha`), (2) `rai` — wealth and material sustenance (second of the four `puruṣārthas`: `dharma, artha, kāma, mokṣa`), (3) `vastu` — objective entity/sense-object (`indriyārtha`), (4) `prayojana` — aim or purpose (`kim-artham?`), and (5) `nivṛtti` — cessation (`anartha`-removal). Kālidāsa's *Raghuvaṃśa* 1.1 (`vāgarthāv iva sampṛktau`) immortalizes the inseparable bond of `vāk` and `artha`.",
    padaccheda: [
      { deva: "अर्थ्यते अन्विष्यते इति अर्थः", iast: "arthyate anviṣyate iti arthaḥ", gloss: "that which is intended, signified, or sought (√ṛ / √arth)" },
      { deva: "अभिधेय-रै-वस्तुषु", iast: "abhidheya-rai-vastuṣu", gloss: "signifying word-meaning, wealth (`rai`), and real object (`vastu`)" },
      { deva: "प्रयोजन-निवृत्तिषु", iast: "prayojana-nivṛttiṣu", gloss: "as well as motivating purpose and cessation" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 3.3.87 (Nānārthavarga); Nirukta 1.18"
    },
    related: ["shabda", "vak", "dhana", "dharma", "padartha"]
  },
  {
    id: "grantha",
    deva: "ग्रन्थः",
    iast: "granthaḥ",
    stem: "grantha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["treatise", "book", "literary composition", "thirty-two-syllable measure"],
    phoneticAliases: ["grantha", "prabandha", "nibandha", "kriti", "treatise", "book"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "ग्रथ्यन्ते पदान्यर्थसन्दर्भेणास्मिन्निति ग्रन्थः । द्वात्रिंशदक्षरं ग्रन्थः सन्दर्भेऽपि च पुस्तके ॥",
    lakshanaIast: "grathyante padāny arthasandarbheṇāsminn iti granthaḥ | dvātriṃśadakṣaraṃ granthaḥ sandarbhe 'pi ca pustake ||",
    meaningShort: "A treatise or book — a coherent literary or philosophical work wherein words and arguments are woven together like flowers on a cord.",
    meaningDeep: "Derived from √granth ('sandarbhe' — to string, weave, compose coherently; Pāṇini 1.3.75 / 3.3.18), `grantha` reflects both material book-craft (palm leaves strung together through cord-eyelets) and intellectual architecture (weaving propositions into an unbroken `ekavākyatā`). Technically in scribal colophons and Śrī Madhvācārya's *Sarvamūla Granthāḥ*, one `grantha` unit equals thirty-two syllables (`dvātriṃśadakṣaram`, the length of an `anuṣṭubh` stanza), providing an exact checksum of textual integrity.",
    padaccheda: [
      { deva: "ग्रथ्यन्ते पदानि अस्मिन्", iast: "grathyante padāni asmin", gloss: "wherein words and arguments are woven coherently (√granth)" },
      { deva: "द्वात्रिंशत्-अक्षरम्", iast: "dvātriṃśat-akṣaram", gloss: "scribal measure of thirty-two syllables" },
      { deva: "सन्दर्भे पुस्तके च", iast: "sandarbhe pustake ca", gloss: "signifying a structured treatise and bound volume" }
    ],
    source: {
      grantha: "Amarakośa & Medinīkośa",
      granthaDeva: "अमरकोशः · मेदिनीकोशः",
      author: "Amarasimha",
      locator: "AK 3.3.85; Pāṇini 4.3.87 (`adhikṛtya kṛte granthe`)"
    },
    related: ["pustaka", "shastra", "kosha", "lekha", "shloka"]
  },
  {
    id: "pustaka",
    deva: "पुस्तकम्",
    iast: "pustakam",
    stem: "pustaka",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["book", "manuscript", "codex", "volume"],
    phoneticAliases: ["pustaka", "pustakam", "pothi", "pustika", "book", "manuscript"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "पुस्त्यते आदर्येण बध्यते रक्ष्यते चेति पुस्तकम् । पुस्तकं पुस्ती च लेख्यपत्रादिभाजनम् ॥",
    lakshanaIast: "pustyate ādareṇa badhyate rakṣyate ceti pustakam | pustakaṃ pustī ca lekhyapatrādibhājanam ||",
    meaningShort: "A physical book or manuscript — a bound bundle of inscribed leaves carefully preserved for study and transmission.",
    meaningDeep: "Derived from tenth-gaṇa √pust ('ādarānādarayoḥ / bandhane' — to bind together and cherish respectfully; Dhātupāṭha 10.56), `pustaka` (and feminine `pustikā`, origin of *pothī*) designates the tangible manuscript volume — traditionally seasoned palm-leaf (`tālapatra`) or Himalayan birch-bark (`bhūrjapatra`) enclosed between wooden boards (`kāṣṭha-phalaka`) — whereas `grantha` emphasizes the intellectual composition within. Classical pedagogy pairs manuscript preservation with living mastery: `pustakasthā tu yā vidyā... kāryakāle samutpanne na sā vidyā` — knowledge must live in the heart (`kaṇṭhastha`), not merely sleep on the shelf.",
    padaccheda: [
      { deva: "पुस्त्यते बध्यते रक्ष्यते", iast: "pustyate badhyate rakṣyate", gloss: "bound together and reverently preserved (√pust + -aka)" },
      { deva: "पुस्तकम् पुस्ती", iast: "pustakam pustī", gloss: "volume, manuscript codex" },
      { deva: "लेख्य-पत्र-आदि-भाजनम्", iast: "lekhya-patra-ādi-bhājanam", gloss: "repository of inscribed leaves" }
    ],
    source: {
      grantha: "Dhātupāṭha & Trikāṇḍaśeṣa",
      granthaDeva: "धातुपाठः · त्रिकाण्डशेषः",
      author: "Pāṇini & Puruṣottamadeva",
      locator: "DP 10.56; TŚ 2.7"
    },
    related: ["grantha", "lipi", "lekha", "parna", "vidya"]
  },
  {
    id: "kosha",
    deva: "कोशः",
    iast: "kośaḥ",
    stem: "kośa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["lexicon", "dictionary", "treasury", "sheath", "flower-bud"],
    phoneticAliases: ["kosha", "kosa", "abhidhana-kosha", "nighantu", "khajana", "lexicon", "dictionary", "treasury"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "कुष्यते सङ्गृह्यते शब्दरत्नमस्मिन्निति कोशः । कोशोऽस्त्री कुड्मले खड्गपिधानेऽर्थौघशब्दसङ्ग्रहयोः ॥",
    lakshanaIast: "kuṣyate saṅgṛhyate śabdaratnam asminn iti kośaḥ | kośo 'strī kuḍmale khaḍgapidhāne 'rthaughaśabdasaṅgrahayoḥ ||",
    meaningShort: "A lexicon or treasury — a curated storehouse of word-gems (`abhidhāna-kośa`), royal wealth, protective scabbard, or subtle bodily sheath.",
    meaningDeep: "Derived from √kuṣ ('niṣkarṣe' — extracting and storing refined essences; spelled `kośa` or `koṣa`), Amarakośa (Nānārthavarga 3.3.215) illuminates its rich semantic cluster: an unopened flower-bud (`kuḍmala`), sword-scabbard (`khaḍga-pidhāna`), royal treasury (`arthaugha`), and lexical thesaurus (`śabda-saṅgraha`, exemplified by Amarasimha's own *Amarakośa* and Yāska's *Nighaṇṭu*). In Taittirīya Upaniṣad (2.1–5), the five `kośas` (`annamaya` to `ānandamaya`) trace progressive inward layers leading to the indwelling Supreme Brahman.",
    padaccheda: [
      { deva: "सङ्गृह्यते शब्द-रत्नम् अस्मिन्", iast: "saṅgṛhyate śabda-ratnam asmin", gloss: "wherein precious word-gems are gathered and preserved" },
      { deva: "कुड्मले खड्ग-पिधाने", iast: "kuḍmale khaḍga-pidhāne", gloss: "signifying a lotus-bud and protective scabbard" },
      { deva: "अर्थौघ-शब्द-सङ्ग्रहयोः", iast: "arthaugha-śabda-saṅgrahayoḥ", gloss: "and a treasury of wealth or lexicon of words" }
    ],
    source: {
      grantha: "Amarakośa & Taittirīyopaniṣad",
      granthaDeva: "अमरकोशः · तैत्तिरीयोपनिषत्",
      author: "Amarasimha",
      locator: "AK 3.3.215 (Nānārthavarga); TU 2.1–5"
    },
    related: ["naman", "shabda", "artha", "grantha", "dhana"]
  },
  {
    id: "shastra",
    deva: "शास्त्रम्",
    iast: "śāstram",
    stem: "śāstra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["science", "scripture", "authoritative treatise", "canonical discipline"],
    phoneticAliases: ["shastra", "sastra", "agama-shastra", "vidya-grantha", "science", "scripture"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "शिष्यते हितमनेन अनर्थान्निवार्यते चेति शास्त्रम् । प्रवृत्तौ वा निवृत्तौ वा नित्येन कृतकेन वा पुंसां येनोपदिश्येत तच्छास्त्रमभिधीयते ॥",
    lakshanaIast: "śiṣyate hitam anena anarthān nivāryate ceti śāstram | pravṛttau vā nivṛttau vā nityena kṛtakena vā puṃsāṃ yenopadiśyeta tac chāstram abhidhīyate ||",
    meaningShort: "Science or authoritative scripture — a systematic body of knowledge that instructs humanity in beneficial truth and steers away from harm.",
    meaningDeep: "Derived instrumentally from √śāsu ('anuśiṣṭau' — `śāsti`, to instruct, guide, regulate; Pāṇini 3.2.182 `-ṣṭran`), `śāstra` encompasses both eternal Vedic revelation (`nitya` / `apauruṣeya`) and rigorous human sciences (`vyākaraṇa`, `nyāya`, `jyotiṣa`, `āyurveda`, `arthaśāstra`). Bhagavadgītā 16.24 (`tasmāc chāstraṃ pramāṇaṃ te kāryākāryavyavasthitau`) and Brahmasūtra 1.1.3 (`śāstrayonitvāt`) — expounded at length in Śrī Madhvācārya's *Brahmasūtrabhāṣya* and *Anuvyākhyāna* — establish sacred `śāstra` as the unerring lamp revealing Dharma and Viṣṇu.",
    padaccheda: [
      { deva: "शिष्यते हितम् अनेन", iast: "śiṣyate hitam anena", gloss: "that whereby salutary truth and duty are taught (√śās + -tra)" },
      { deva: "प्रवृत्तौ वा निवृत्तौ वा", iast: "pravṛttau vā nivṛttau vā", gloss: "guiding toward right action and away from harm" },
      { deva: "पुंसाम् उपदिश्येत", iast: "puṃsām upadiśyeta", gloss: "systematically instructs intelligent seekers" }
    ],
    source: {
      grantha: "Ślokavārttika, Bhagavadgītā & Brahmasūtrabhāṣyam",
      granthaDeva: "भगवद्गीता · ब्रह्मसूत्रभाष्यम्",
      author: "Śrī Vedavyāsa & Śrī Madhvācārya",
      locator: "BG 16.24; BSB 1.1.3; AK 1.6.5"
    },
    related: ["vidya", "agama", "grantha", "siddhanta", "dharma"]
  },
  {
    id: "kavya",
    deva: "काव्यम्",
    iast: "kāvyam",
    stem: "kāvya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["poetry", "imaginative literature", "artistic work of a seer-poet"],
    phoneticAliases: ["kavya", "sahitya", "kavi-karma", "mahakavya", "poetry", "literature"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "कवेः कर्म भावो वा काव्यम् । शब्दार्थौ सहितौ काव्यं गद्यं पद्यं च तद्द्विधा वाक्यं रसात्मकं काव्यम् ॥",
    lakshanaIast: "kaveḥ karma bhāvo vā kāvyam | śabdārthau sahitau kāvyaṃ gadyaṃ padyaṃ ca tad dvidhā vākyaṃ rasātmakaṃ kāvyam ||",
    meaningShort: "Poetry or belles-lettres — the artistic creation of an insightful poet (`kavi`) wherein sound and meaning unite in aesthetic relish (`rasa`).",
    meaningDeep: "Formed from `kavi` ('far-seeing seer-poet', from √ku / √kū; `kaver bhāvaḥ karma vā`) with suffix `-ṣyañ`, `kāvya` names the entire realm of Sanskrit imaginative literature — verse (`padya`), artistic prose (`gadya`), mixed `campū`, and drama (`dṛśya-kāvya`). Bhāmaha (*Kāvyālaṅkāra* 1.16) defines it structurally as the harmonious companionship of word and meaning (`śabdārthau sahitau kāvyam`, whence `sāhitya`), Ānandavardhana crowns `dhvani` (poetic suggestion) as its soul, and Viśvanātha (*Sāhityadarpaṇa* 1.3) distills it luminously: `vākyaṃ rasātmakaṃ kāvyam`.",
    padaccheda: [
      { deva: "कवेः कर्म काव्यम्", iast: "kaveḥ karma kāvyam", gloss: "the creative work of a visionary poet (`kavi`)" },
      { deva: "शब्द-अर्थौ सहितौ", iast: "śabda-arthau sahitau", gloss: "word and meaning wedded in mutual grace (`sāhitya`)" },
      { deva: "वाक्यम् रस-आत्मकम्", iast: "vākyam rasa-ātmakam", gloss: "utterance whose living soul is aesthetic `rasa`" }
    ],
    source: {
      grantha: "Kāvyālaṅkāra & Sāhityadarpaṇa",
      granthaDeva: "काव्यालङ्कारः · साहित्यदर्पणः",
      author: "Bhāmaha & Viśvanātha Kavirāja",
      locator: "KA 1.16; SD 1.3"
    },
    related: ["shloka", "gadya", "nataka", "rasa", "upama"]
  },
  {
    id: "shloka",
    deva: "श्लोकः",
    iast: "ślokaḥ",
    stem: "śloka",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["verse", "metrical stanza", "couplet", "poetic renown"],
    phoneticAliases: ["shloka", "sloka", "padya", "anushtubh", "gatha", "verse", "stanza"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "श्लोक्यते सङ्घत्यते वर्णच्छन्दोभिरिति श्लोकः । पद्ये यशसि च श्लोकः शोकः श्लोकत्वमागतः ॥",
    lakshanaIast: "ślokyate saṅghatyate varṇacchandobhir iti ślokaḥ | padye yaśasi ca ślokaḥ śokaḥ ślokatvam āgataḥ ||",
    meaningShort: "A metrical verse or stanza (`padya`) — especially the classical thirty-two-syllable `anuṣṭubh` stanza, as well as noble renown.",
    meaningDeep: "Derived from √ślok ('saṅghāte' — to compose in rhythmic cadence) and older Vedic √śru ('that which is heard far and wide, noble fame', whence `puṇyaśloka` in Amarakośa 3.3.12 `padye yaśasi ca ślokaḥ`), `śloka` is paired with `padya` ('four-footed verse', structured in four `pādas`). In the *Rāmāyaṇa* (Bālakāṇḍa 2.18, `śokaḥ ślokatvam āgataḥ`), Ādikavi Vālmīki's spontaneous grief (`śoka`) upon witnessing a stricken *krauñca* bird transmuted into the first classical `śloka`, inaugurating `laukika-kāvya`.",
    padaccheda: [
      { deva: "श्लोक्यते छन्दोभिः इति श्लोकः", iast: "ślokyate chandobhiḥ iti ślokaḥ", gloss: "woven in measured metrical cadence (√ślok)" },
      { deva: "पद्ये यशसि च", iast: "padye yaśasi ca", gloss: "signifying both metrical stanza (`padya`) and renown (`yaśas`)" },
      { deva: "शोकः श्लोकत्वम् आगतः", iast: "śokaḥ ślokatvam āgataḥ", gloss: "Vālmīki's compassionate grief transmuted into verse" }
    ],
    source: {
      grantha: "Amarakośa & Vālmīki Rāmāyaṇa",
      granthaDeva: "अमरकोशः · वाल्मीकिरामायणम्",
      author: "Amarasimha & Vālmīki",
      locator: "AK 3.3.12; Rāmāyaṇa 1.2.18"
    },
    related: ["kavya", "gadya", "subhashita", "pada-foot", "kirtih"]
  },
  {
    id: "gadya",
    deva: "गद्यम्",
    iast: "gadyam",
    stem: "gadya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["prose", "unmetered literary composition"],
    phoneticAliases: ["gadya", "gadyam", "apada-padasantana", "prose"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "गद्यतेऽच्छन्दोबद्धतया उच्यते इति गद्यम् । अपादः पदसन्तानो गद्यमाख्यायिका कथा ॥",
    lakshanaIast: "gadyate 'cchandobaddhatayā ucyate iti gadyam | apādaḥ padasantāno gadyam ākhyāyikā kathā ||",
    meaningShort: "Prose — continuous, unmetered literary or philosophical discourse free from four-line stanzaic bounds (`apādaḥ padasantānaḥ`).",
    meaningDeep: "Formed with suffix `-yat` (`acah yat`, Pāṇini 3.1.97) from √gad ('vyaktāyāṃ vāci' — that which is spoken directly in natural cadence), `gadya` is classically defined by Daṇḍin in *Kāvyādarśa* 1.23 as `apādaḥ padasantāno gadyam` — 'an unbroken stream of words not partitioned into metrical `pādas`' — subdivided into historical biography (`ākhyāyikā`, like Bāṇabhaṭṭa's *Harṣacarita*) and imaginative romance (`kathā`, like *Kādambarī*), alongside terse scientific commentary (`bhāṣya`). Sanskrit critics famously remark `gadyaṃ kavīnāṃ nikaṣaṃ vadanti` — 'prose is the true touchstone of poets!'",
    padaccheda: [
      { deva: "गद्यते उच्यते इति गद्यम्", iast: "gadyate ucyate iti gadyam", gloss: "spoken forth in natural unmetered flow (√gad + -ya)" },
      { deva: "अपादः पद-सन्तानः", iast: "apādaḥ pada-santānaḥ", gloss: "continuous sequence of words free of metrical `pādas`" },
      { deva: "आख्यायिका कथा", iast: "ākhyāyikā kathā", gloss: "comprising historical chronicle and narrative prose" }
    ],
    source: {
      grantha: "Kāvyādarśa",
      granthaDeva: "काव्यादर्शः",
      author: "Daṇḍin",
      locator: "Kāvyādarśa 1.23"
    },
    related: ["kavya", "shloka", "akhyana", "vak", "grantha"]
  },
  {
    id: "nataka",
    deva: "नाटकम्",
    iast: "nāṭakam",
    stem: "nāṭaka",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["drama", "play", "theatrical representation"],
    phoneticAliases: ["nataka", "rupaka", "abhinaya-kavya", "natya", "drama", "play"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "नटति लोकस्वभावमनुकरोति इति नाटकम् । अवस्थायानुकृतिर्नाट्यं रूपं दृश्यतयोच्यते ॥",
    lakshanaIast: "naṭati lokasvabhāvam anukaroti iti nāṭakam | avasthāyānukṛtir nāṭyaṃ rūpaṃ dṛśyatayocyate ||",
    meaningShort: "A drama or play — the foremost genre of visual poetry (`dṛśya-kāvya`) enacting noble human states on stage to awaken aesthetic `rasa`.",
    meaningDeep: "Derived from √naṭ ('nṛttau / avaspandane' — enacting emotions through gesture, speech, and poise) with agent/form suffix `-ṇvul` (`-aka`), `nāṭaka` stands first among the ten classical dramatic forms (`daśarūpaka`, Dhanañjaya's *Daśarūpaka* 1.7: `avasthāyānukṛtir nāṭyam`). Bharata's *Nāṭyaśāstra* (1.11–17) reveres `nāṭya` as a universal `pañcama-veda` drawing dialogue from Ṛgveda, song from Sāmaveda, histrionics from Yajurveda, and `rasa` from Atharvaveda — leading critics to declare `kāvyeṣu nāṭakaṃ ramyam` ('among all literary arts, drama is most enchanting').",
    padaccheda: [
      { deva: "लोक-स्वभावम् अनुकरोति", iast: "loka-svabhāvam anukaroti", gloss: "enacts the states and character of the world (√naṭ + -aka)" },
      { deva: "अवस्था-अनुकृतिः नाट्यम्", iast: "avasthā-anukṛtiḥ nāṭyam", gloss: "artistic representation of lived emotional states" },
      { deva: "रूपम् दृश्यतया", iast: "rūpam dṛśyatayā", gloss: "called `rūpaka` because it is visually beheld on stage" }
    ],
    source: {
      grantha: "Daśarūpaka, Nāṭyaśāstra & Amarakośa",
      granthaDeva: "दशरूपकम् · नाट्यशास्त्रम् · अमरकोशः",
      author: "Dhanañjaya, Bharata Muni & Amarasimha",
      locator: "DR 1.7; NŚ 1.17; AK 1.7.10"
    },
    related: ["kavya", "nritya", "sangita", "rasa", "rupa"]
  },
  {
    id: "akhyana",
    deva: "आख्यानम्",
    iast: "ākhyānam",
    stem: "ākhyāna",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["narrative", "story", "legend", "epic episode"],
    phoneticAliases: ["akhyana", "katha-story", "upakhyana", "vrittanta", "carita", "story", "narrative"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "आख्यायते पूर्ववृत्तमनेनेति आख्यानम् । प्रबन्धकल्पना कथा आख्यायिका उपलब्धार्था ॥",
    lakshanaIast: "ākhyāyate pūrvavṛttam aneneti ākhyānam | prabandhakalpanā kathā ākhyāyikā upalabdhārthā ||",
    meaningShort: "A narrative or story — an instructive recounting of ancestral deeds, mythic episodes, or moral fables (`kathā`).",
    meaningDeep: "Formed with `-lyuṭ` from `ā` + √khyā ('prakathane' — to recount vividly from beginning to end), `ākhyāna` is paired in Amarakośa (Śabdādivarga 1.6.5–6) with `upākhyāna` (illustrative sub-story, like *Nalopākhyāna* in the Mahābhārata), `kathā` (imaginative or didactic tale, like Viṣṇuśarman's *Pañcatantra*), `ākhyāyikā` (attested historical account), and `purāvṛtta` / `itihāsa`. Across Vedic Brāhmaṇas (`śunaḥśepa-ākhyāna`) and Purāṇas, narrative serves to embody subtle `dharma` in unforgettable human drama.",
    padaccheda: [
      { deva: "आख्यायते पूर्व-वृत्तम् अनेन", iast: "ākhyāyate pūrva-vṛttam anena", gloss: "recounts memorable deeds and episodes (`ā` + √khyā + -ana)" },
      { deva: "प्रबन्ध-कल्पना कथा", iast: "prabandha-kalpanā kathā", gloss: "artistically woven story or fable (`kathā`)" },
      { deva: "आख्यायिका उपलब्ध-अर्था", iast: "ākhyāyikā upalabdha-arthā", gloss: "chronicle grounded in witnessed events" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.6.5–6 (Śabdādivarga)"
    },
    related: ["gadya", "kavya", "samvada", "subhashita", "katha"]
  },
  {
    id: "subhashita",
    deva: "सुभाषितम्",
    iast: "subhāṣitam",
    stem: "subhāṣita",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["epigram", "wise aphorism", "eloquent saying", "well-spoken counsel"],
    phoneticAliases: ["subhashita", "subhasita", "sukti", "vacana", "niti-shloka", "aphorism", "epigram"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "शोभनं हितं सत्यं च भाषितं सुभाषितम् । पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम् ॥",
    lakshanaIast: "śobhanaṃ hitaṃ satyaṃ ca bhāṣitaṃ subhāṣitam | pṛthivyāṃ trīṇi ratnāni jalam annaṃ subhāṣitam ||",
    meaningShort: "A wise, eloquent saying (`sūkti`) — speech uniting poetic grace, moral clarity, and enduring human truth in a single jewel-like stanza.",
    meaningDeep: "Composed of `su-` ('auspicious, true, melodious', parallel to Vedic `su-ukta` → `sūkta` / `sūkti`) + `bhāṣita` ('spoken', √bhāṣ), `subhāṣita` names one of Sanskrit literature's most beloved treasures: standalone gnomic stanzas (`muktaka`) by masters like Bhartṛhari (*Śatakatraya*) and Cāṇakya. A celebrated verse crowns it among earth's three true gems alongside water and food (`pṛthivyāṃ trīṇi ratnāni jalam annaṃ subhāṣitam`), because while water and grain nourish mortal life, a single `subhāṣita` refines character across generations.",
    padaccheda: [
      { deva: "शोभनम् हितम् भाषितम्", iast: "śobhanam hitam bhāṣitam", gloss: "speech that is graceful, true, and salutary (`su-bhāṣita`)" },
      { deva: "पृथिव्याम् त्रीणि रत्नानि", iast: "pṛthivyām trīṇi ratnāni", gloss: "the three true gems upon earth" },
      { deva: "जलम् अन्नम् सुभाषितम्", iast: "jalam annam subhāṣitam", gloss: "pure water, nourishing grain, and wise speech" }
    ],
    source: {
      grantha: "Cāṇakyanīti & Subhāṣitaratnabhāṇḍāgāra",
      granthaDeva: "चाणक्यनीतिः · सुभाषितरत्नभाण्डागारम्",
      author: "Cāṇakya & Classical Poets",
      locator: "CN 14.1; AK 1.6.19 (`sūkta`)"
    },
    related: ["vak", "shloka", "kavya", "nyaya-justice", "ratna"]
  },
  {
    id: "sangita",
    deva: "सङ्गीतम्",
    iast: "saṅgītam",
    stem: "saṅgīta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["music", "symphony of song, instrument, and dance", "musical art"],
    phoneticAliases: ["sangita", "sangeeta", "gandharva-veda", "tauryatrika", "music"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "सम्यक् गीयते तौर्यत्रिकेण इति सङ्गीतम् । गीतं वाद्यं तथा नृत्यं त्रयं सङ्गीतमुच्यते ॥",
    lakshanaIast: "samyak gīyate tauryatrikeṇa iti saṅgītam | gītaṃ vādyaṃ tathā nṛtyaṃ trayaṃ saṅgītam ucyate ||",
    meaningShort: "Music and performing harmony — classically defined as the threefold union (`tauryatrika`) of vocal song, instrumental accompaniment, and expressive dance.",
    meaningDeep: "Formed from `sam` + √gai ('śabde' — harmonious ensemble singing), `saṅgīta` is equated in Amarakośa (Nāṭyavarga 1.7.9: `tauryatrikaṃ nṛtyagītavādyaṃ nāṭyam idaṃ trayam`) and immortalized in Śārṅgadeva's *Saṅgītaratnākara* (1.1.21): `gītaṃ vādyaṃ tathā nṛtyaṃ trayaṃ saṅgītam ucyate`. Rooted in Sāmavedic chant (`gāndharva-veda`), classical Indian `saṅgīta` venerates `nāda-brahman` and in Vaiṣṇava Haridāsa tradition (inaugurated by Narahari Tīrtha and Purandaradāsa in Madhvācārya's lineage) becomes a direct pathway of `bhakti`.",
    padaccheda: [
      { deva: "सम्यक् गीयते इति सङ्गीतम्", iast: "samyak gīyate iti saṅgītam", gloss: "performed in complete ensemble harmony (`sam` + √gai)" },
      { deva: "गीतम् वाद्यम् नृत्यम्", iast: "gītam vādyam nṛtyam", gloss: "vocal song, instrumental music, and dance" },
      { deva: "त्रयम् सङ्गीतम् उच्यते", iast: "trayam saṅgītam ucyate", gloss: "the triad together is called `saṅgīta`" }
    ],
    source: {
      grantha: "Saṅgītaratnākara & Amarakośa",
      granthaDeva: "सङ्गीतरत्नाकरः · अमरकोशः",
      author: "Śārṅgadeva & Amarasimha",
      locator: "SR 1.1.21; AK 1.7.9 (Nāṭyavarga)"
    },
    related: ["gita", "vadya", "nritya", "svara", "raga"]
  },
  {
    id: "gita",
    deva: "गीतम्",
    iast: "gītam",
    stem: "gīta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["song", "chant", "vocal melody", "sacred hymn"],
    phoneticAliases: ["gita", "geeta", "gana", "giti", "samagiti", "song"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "गीयते स्वरपदसमन्वयेन इति गीतम् । रञ्जकः स्वरसन्दर्भो गीतमित्यभिधीयते ॥",
    lakshanaIast: "gīyate svarapadasamanvayena iti gītam | rañjakaḥ svarasandarbho gītam ity abhidhīyate ||",
    meaningShort: "A song or vocal melody — a heart-delighting composition of musical notes (`svaras`) wedded to poetic syllables.",
    meaningDeep: "Derived from √gai ('śabde' — to sing melodiously; `-kta` in neuter action sense `gītam`, alongside feminine `gītā` = sacred philosophical song, preeminently the *Bhagavadgītā*, 'Song of the Lord'), *Saṅgītaratnākara* defines `gīta` as `rañjakaḥ svarasandarbhaḥ` — 'an aesthetically enchanting weave of musical tones'. Classical musicology accords primacy to `gīta` within the `saṅgīta` triad because instrumental music follows vocal phrasing (`gītānugaṃ vādyam`) and dance follows instrumental rhythm.",
    padaccheda: [
      { deva: "गीयते इति गीतम्", iast: "gīyate iti gītam", gloss: "sung forth in melodic intonation (√gai + -kta)" },
      { deva: "रञ्जकः स्वर-सन्दर्भः", iast: "rañjakaḥ svara-sandarbhaḥ", gloss: "an enchanting weave of musical notes" },
      { deva: "गीतम् इति अभिधीयते", iast: "gītam iti abhidhīyate", gloss: "is technically termed `gīta`" }
    ],
    source: {
      grantha: "Saṅgītaratnākara & Amarakośa",
      granthaDeva: "सङ्गीतरत्नाकरः · अमरकोशः",
      author: "Śārṅgadeva & Amarasimha",
      locator: "SR 4.1; AK 1.7.9 (Nāṭyavarga)"
    },
    related: ["sangita", "svara", "raga", "vadya", "saman"]
  },
  {
    id: "vadya",
    deva: "वाद्यम्",
    iast: "vādyam",
    stem: "vādya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["musical instrument", "instrumental music"],
    phoneticAliases: ["vadya", "atodya", "vaditra", "vina", "mridanga", "instrument"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "वाद्यते स्वराभिव्यक्तये इति वाद्यम् । तत्कृतं चारु वाद्यं स्यात् ततं वीणादिकं सुषिरमानद्धं घनमित्यपि चतुर्विधम् ॥",
    lakshanaIast: "vādyate svarābhivyaktaye iti vādyam | tatkṛtaṃ cāru vādyaṃ syāt tataṃ vīṇādikaṃ suṣiram ānaddhaṃ ghanam ity api caturvidham ||",
    meaningShort: "A musical instrument or instrumental music (`ātodya`) — classified into stringed, wind, membrane-drum, and solid-cymbal families.",
    meaningDeep: "Formed as a causative gerundive (`vādayitum yogyaṃ`, from √vad in `ṇic`, 'made to sound melodiously'), `vādya` (`vāditra`, `ātodya`) receives in Bharata's *Nāṭyaśāstra* (28.1–2) and Amarakośa (Nāṭyavarga 1.7.3–4) the foundational fourfold organological taxonomy later adopted by modern ethnomusicology (Sachs–Hornbostel): (1) `tata` — chordophones (`vīṇā`), (2) `suṣira` — aerophones (`vaṃśī` flute), (3) `ānaddha` / `avanaddha` — membranophones (`mṛdaṅga` drum), and (4) `ghana` — idiophones (`tāla` cymbals).",
    padaccheda: [
      { deva: "वाद्यते स्वर-अभिव्यक्तये", iast: "vādyate svara-abhivyaktaye", gloss: "sounded skillfully to manifest tone and rhythm" },
      { deva: "ततम् सुषिरम्", iast: "tatam suṣiram", gloss: "stringed (`vīṇā`) and wind/flute (`vaṃśa`) instruments" },
      { deva: "आनद्धम् घनम् चतुर्विधम्", iast: "ānaddham ghanam caturvidham", gloss: "percussion drums and solid cymbals — the fourfold class" }
    ],
    source: {
      grantha: "Amarakośa & Nāṭyaśāstra",
      granthaDeva: "अमरकोशः · नाट्यशास्त्रम्",
      author: "Amarasimha & Bharata Muni",
      locator: "AK 1.7.3–4 (Nāṭyavarga); NŚ 28.1–2"
    },
    related: ["sangita", "gita", "tala", "svara", "nritya"]
  },
  {
    id: "nritya",
    deva: "नृत्यम्",
    iast: "nṛtyam",
    stem: "nṛtya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["dance", "expressive movement", "choreography"],
    phoneticAliases: ["nritya", "nrtya", "nritta", "tandava", "lasya", "abhinaya", "dance"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "नृत्यते भावतालाश्रयेणेति नृत्यम् । ताण्डवं नटनं नाट्यं लास्यं नृत्यं च नर्तने भावश्रयं तु नृत्यं स्यात् ॥",
    lakshanaIast: "nṛtyate bhāvatālāśrayeṇeti nṛtyam | tāṇḍavaṃ naṭanaṃ nāṭyaṃ lāsyaṃ nṛtyaṃ ca nartane bhāvaśrayaṃ tu nṛtyaṃ syāt ||",
    meaningShort: "Expressive dance — rhythmic movement of limbs, eyes, and hands (`mudrā`) conveying poetic meaning and emotional mood (`bhāva`).",
    meaningDeep: "Derived from √nṛtī ('gātravikṣepe' — graceful rhythmic movement of the limbs; Pāṇini 3.1.120 / Uṇādi `-kyap`), Amarakośa (Nāṭyavarga 1.7.9–10) groups `tāṇḍava` (vigorous cosmic dance), `lāsya` (delicate lyrical dance), `nartana`, and `nṛtya`. Dhanañjaya's *Daśarūpaka* (1.9) and Nandikeśvara's *Abhinayadarpaṇa* draw the classic threefold distinction: `nṛtta` is pure rhythmic movement governed by `tāla` and `laya`; `nṛtya` (`bhāvāśrayam`) expresses word-by-word emotional `bhāva`; and `nāṭya` enacts complete dramatic character and `rasa`.",
    padaccheda: [
      { deva: "नृत्यते इति नृत्यम्", iast: "nṛtyate iti nṛtyam", gloss: "danced with graceful limb-poise and rhythm (√nṛt)" },
      { deva: "ताण्डवम् लास्यम् नर्तनम्", iast: "tāṇḍavam lāsyam nartanam", gloss: "vigorous dance, lyrical grace, choreography" },
      { deva: "भाव-आश्रयम् नृत्यम्", iast: "bhāva-āśrayam nṛtyam", gloss: "expressive dance grounded in emotional `bhāva`" }
    ],
    source: {
      grantha: "Amarakośa & Daśarūpaka",
      granthaDeva: "अमरकोशः · दशरूपकम्",
      author: "Amarasimha & Dhanañjaya",
      locator: "AK 1.7.10 (Nāṭyavarga); DR 1.9"
    },
    related: ["sangita", "tala", "nataka", "hasta", "mayura"]
  },
  {
    id: "kala-art",
    deva: "कला",
    iast: "kalā",
    stem: "kalā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["art", "fine skill", "lunar digit", "sixteenth part"],
    phoneticAliases: ["kala-art", "shilpa-kala", "candrakala", "catuhshashti-kala", "art", "skill"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "कल्यते गण्यते निर्मायते वा अनया इति कला । कला शिल्पे कालभेदे चन्द्रांशौ चापि कथ्यते ॥",
    lakshanaIast: "kalyate gaṇyate nirmāyate vā anayā iti kalā | kalā śilpe kālabhede candrāṃśau cāpi kathyate ||",
    meaningShort: "An art or fine skill — any of the sixty-four cultivated creative disciplines, as well as a one-sixteenth digit of the Moon.",
    meaningDeep: "Derived from √kal ('saṅkhyāne śabde gatau ca' — measuring harmoniously and crafting with finesse), `kalā` unites three classical meanings in Amarakośa (1.3.15, 1.4.11 & Nānārthavarga 3.3.194): (1) a cultivated fine or practical art (`śilpa` — famously enumerated as `catuḥṣaṣṭi-kalāḥ`, sixty-four arts spanning music, painting, architecture, garland-weaving, and mathematical puzzles), (2) one-sixteenth phase (`indu-kalā`) of the waxing Moon, and (3) a subtle unit of time or Praṇava-aspect (`ṣoḍaśa-kalāḥ`, Praśna Upaniṣad 6.2).",
    padaccheda: [
      { deva: "निर्मायते अनया इति कला", iast: "nirmāyate anayā iti kalā", gloss: "measured and fashioned with refined skill (√kal)" },
      { deva: "शिल्पे काल-भेदे", iast: "śilpe kāla-bhede", gloss: "signifying fine art/craft and a subtle division of time" },
      { deva: "चन्द्र-अंशौ", iast: "candra-aṃśau", gloss: "and a one-sixteenth luminous digit of the Moon" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.3.15, 3.3.194 (Nānārthavarga)"
    },
    related: ["citra", "shilpa", "sangita", "candra", "vidya"]
  },
  {
    id: "citra",
    deva: "चित्रम्",
    iast: "citram",
    stem: "citra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["painting", "picture", "wonder", "variegated beauty"],
    phoneticAliases: ["citra", "chitra", "alekhya", "adbhuta", "citra-varna", "painting", "picture", "wonder"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "चाय्यते पूज्यते विस्मापयति चेति चित्रम् । चित्रमालेख्यआश्चर्ययोः किर्मीरे चापि शबलवत् ॥",
    lakshanaIast: "cāyyate pūjyate vismāpayati ceti citram | citram ālekhyāścaryayoḥ kirmīre cāpi śabalavat ||",
    meaningShort: "A painting or picture (`ālekhya`), marvelous wonder (`āścarya`), or variegated harmony of many colors.",
    meaningDeep: "Derived via Uṇādi 2.22 (`ci-ni-pṛ-tṛ... tra`) from √ci / √cit ('gathering colors into wondrous form that awakens admiration'), Amarakośa (Nānārthavarga 3.3.178 & Śabdādivarga) highlights three interwoven senses of `citra`: (1) `ālekhya` — pictorial art governed by the classical `ṣaḍaṅga` (*rūpabheda, pramāṇa, bhāva, lāvaṇyayojana, sādṛśya, varṇikābhaṅga*), (2) `āścarya` — astonishment or poetic tour-de-force (`citra-kāvya`), and (3) `citra-rūpa` — a single variegated whole color accepted in Nyāya realism (`TS 24`).",
    padaccheda: [
      { deva: "विस्मापयति इति चित्रम्", iast: "vismāpayati iti citram", gloss: "delights and awakens wonder through form and color (√cit + -tra)" },
      { deva: "आलेख्य-आश्चर्ययोः", iast: "ālekhya-āścaryayoḥ", gloss: "signifying both a painted picture and marvel" },
      { deva: "किर्मीरे शबलवत्", iast: "kirmīre śabalavat", gloss: "and variegated, multi-hued beauty" }
    ],
    source: {
      grantha: "Amarakośa & Viṣṇudharmottara Purāṇa",
      granthaDeva: "अमरकोशः · विष्णुधर्मोत्तरपुराणम्",
      author: "Amarasimha",
      locator: "AK 3.3.178 (Nānārthavarga); VDP Citrasūtra"
    },
    related: ["kala-art", "shilpa", "rupa", "saundarya", "raga"]
  },
  {
    id: "shilpa",
    deva: "शिल्पम्",
    iast: "śilpam",
    stem: "śilpa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["sculpture", "architecture", "craftsmanship", "plastic art"],
    phoneticAliases: ["shilpa", "silpa", "murti-kala", "vastu-shilpa", "kushalata", "sculpture", "craft"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "शील्यतेऽभ्यस्यते कौशलेन इति शिल्पम् । शिल्पं कर्म कलादिकम् आत्मसंस्कृतिर्वाव शिल्पानि ॥",
    lakshanaIast: "śīlyate 'bhyasyate kauśalena iti śilpam | śilpaṃ karma kalādikam ātmasaṃskṛtir vāva śilpāni ||",
    meaningShort: "Sculpture, sacred architecture, or skilled craft — disciplined manual and aesthetic mastery that shapes raw stone, wood, or metal into living form.",
    meaningDeep: "Derived via Uṇādi 3.28 (`śīleḥ pak`, shortening `ī` to `i`) from √śīl ('samādhau / abhyāse' — practiced with absorbed concentration), `śilpa` is defined in Amarakośa (Vaiśyavarga/Śūdravarga 2.10.35: `śilpaṃ karma kalādikam`) as skilled artistic and architectural workmanship (`śilpin` = master sculptor/artisan). Remarkably, Aitareya Brāhmaṇa 6.27 (`ātmasaṃskṛtir vāva śilpāni; chandomayaṃ vā etair yajamāna ātmānaṃ saṃskurute`) declares that sacred works of art (`śilpāni`) harmonize and refine the human soul itself in rhythmic proportion.",
    padaccheda: [
      { deva: "शील्यते कौशलेन इति शिल्पम्", iast: "śīlyate kauśalena iti śilpam", gloss: "wrought through absorbed practice and skill (√śīl + -pa)" },
      { deva: "कर्म कला-आदिकम्", iast: "karma kalā-ādikam", gloss: "sculpture, temple architecture, and skilled arts" },
      { deva: "आत्म-संस्कृतिः शिल्पानि", iast: "ātma-saṃskṛtiḥ śilpāni", gloss: "AB 6.27: sacred arts refine and harmonize the self" }
    ],
    source: {
      grantha: "Aitareya Brāhmaṇa & Amarakośa",
      granthaDeva: "ऐतरेयब्राह्मणम् · अमरकोशः",
      author: "Amarasimha",
      locator: "AB 6.27; AK 2.10.35"
    },
    related: ["kala-art", "citra", "shila", "ayas", "hasta"]
  },
  {
    id: "saundarya",
    deva: "सौन्दर्यम्",
    iast: "saundaryam",
    stem: "saundarya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["beauty", "loveliness", "harmony of proportion", "aesthetic grace"],
    phoneticAliases: ["saundarya", "lavanya", "kanti", "shobha", "ramaniyata", "caruta", "beauty"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "सुन्दरस्य भावः सौन्दर्यम् । क्षणे क्षणे यन्नवतामुपैति तदेव रूपं रमणीयतायाः ॥",
    lakshanaIast: "sundarasya bhāvaḥ saundaryam | kṣaṇe kṣaṇe yan navatām upaiti tad eva rūpaṃ ramaṇīyatāyāḥ ||",
    meaningShort: "Beauty or loveliness (`ramaṇīyatā`) — harmonious proportion and luminous inner grace (`lāvaṇya`) that appears ever fresh at every moment.",
    meaningDeep: "Formed with abstract suffix `-ṣyañ` (Pāṇini 5.1.124) from `sundara` ('melting the heart with delight', `su + √und` or `su + √dṛ` 'worthy of reverent gaze'), `saundarya` is accompanied in Amarakośa by `kānti`, `śobhā`, `ṣuṣamā`, `cārutā`, and `lāvaṇya` (defined by Udbhaṭa as the pearly inner luster shimmering through symmetrical limbs). Māgha's *Śiśupālavadha* 4.17 gives Sanskrit aesthetics' immortal definition of beauty: `kṣaṇe kṣaṇe yan navatām upaiti tad eva rūpaṃ ramaṇīyatāyāḥ` — 'that alone is true beauty which reveals fresh wonder every single moment' — culminating in Bhagavān `Sundara-mūrti` (`bhuvanasundara`).",
    padaccheda: [
      { deva: "सुन्दरस्य भावः सौन्दर्यम्", iast: "sundarasya bhāvaḥ saundaryam", gloss: "the state or essence of harmonious beauty (`sundara` + `-ya`)" },
      { deva: "क्षणे क्षणे नवताम् उपैति", iast: "kṣaṇe kṣaṇe navatām upaiti", gloss: "attains ever-new freshness from moment to moment" },
      { deva: "रमणीयतायाः रूपम्", iast: "ramaṇīyatāyāḥ rūpam", gloss: "the defining hallmark of aesthetic loveliness" }
    ],
    source: {
      grantha: "Śiśupālavadha & Amarakośa",
      granthaDeva: "शिशुपालवधम् · अमरकोशः",
      author: "Māgha & Amarasimha",
      locator: "ŚV 4.17; AK 3.3.128"
    },
    related: ["rupa", "rasa", "kala-art", "citra", "lakshmi"]
  },
  {
    id: "rasa",
    deva: "रसः",
    iast: "rasaḥ",
    stem: "rasa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["aesthetic relish", "essence", "taste", "sap", "spiritual bliss"],
    phoneticAliases: ["rasa", "svada", "asvada", "shringara-rasa", "sara", "essence", "taste"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "रस्यते आस्वाद्यते इति रसः । रसनग्राह्यो गुणो रसः विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः रसो वै सः ॥",
    lakshanaIast: "rasyate āsvādyate iti rasaḥ | rasanagrāhyo guṇo rasaḥ vibhāvānubhāvavyabhicārisaṃyogād rasaniṣpattiḥ raso vai saḥ ||",
    meaningShort: "Essence, gustatory flavor, or supreme aesthetic relish — that which is savored by tongue, refined heart (`sahṛdaya`), or liberated soul.",
    meaningDeep: "Derived from √ras ('āsvādane snehane ca' — to savor and delight in), Amarakośa (1.5.12, 1.7.17 & Nānārthavarga 3.3.225) charts `rasa` across four classical domains: (1) botanical sap and water, (2) the six gustatory tastes (`madhura, amla, lavaṇa, kaṭu, tikta, kaṣāya`, TS 25), (3) the nine dramatic-poetic `rasas` (`śṛṅgāra, hāsya, karuṇa, raudra, vīra, bhayānaka, bībhatsa, adbhuta, śānta`, Bharata's *Rasa-sūtra* NŚ 6.31), and (4) Upaniṣadic ontology (`raso vai saḥ, rasaṃ hy evāyaṃ labdhvā 'nandī bhavati`, Taittirīya Up. 2.7.1), where Bhagavān Himself is the self-existent Ocean of Bliss.",
    padaccheda: [
      { deva: "रस्यते आस्वाद्यते इति रसः", iast: "rasyate āsvādyate iti rasaḥ", gloss: "that which is savored and relished (√ras + -ac)" },
      { deva: "रसन-ग्राह्यः गुणः", iast: "rasana-grāhyaḥ guṇaḥ", gloss: "sensory flavor grasped by the tongue; and aesthetic relish in art" },
      { deva: "रसः वै सः", iast: "rasaḥ vai saḥ", gloss: "TU 2.7.1: the Supreme Lord Himself is plenary Bliss-Essence" }
    ],
    source: {
      grantha: "Taittirīyopaniṣad, Nāṭyaśāstra & Amarakośa",
      granthaDeva: "तैत्तिरीयोपनिषत् · नाट्यशास्त्रम् · अमरकोशः",
      author: "Bharata Muni & Amarasimha",
      locator: "TU 2.7.1; NŚ 6.31; AK 1.7.17, 3.3.225"
    },
    related: ["jihva", "kavya", "nataka", "ananda", "madhu"]
  },
  {
    id: "gandha",
    deva: "गन्धः",
    iast: "gandhaḥ",
    stem: "gandha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["fragrance", "scent", "odor", "perfume"],
    phoneticAliases: ["gandha", "saurabha", "surabhi-scent", "amoda", "parimala", "fragrance", "scent"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "गन्धयते सूचयति स्वाश्रयमिति गन्धः । घ्राणग्राह्यो गुणो गन्धः स च द्विविधः सुरभिरसुरभिश्च ॥",
    lakshanaIast: "gandhayate sūcayati svāśrayam iti gandhaḥ | ghrāṇagrāhyo guṇo gandhaḥ sa ca dvividhaḥ surabhir asurabhiś ca ||",
    meaningShort: "Fragrance or scent — the olfactory quality inherent exclusively in the earth element (`pṛthivī`) and apprehended by the nose.",
    meaningDeep: "Derived from √gandh ('sūcane' — delicately intimating its unseen floral or earthy source across the breeze), `gandha` is catalogued in Amarakośa (Guṇavarga 1.5.13) with `āmoda` ('far-wafting perfume'), `parimala`, and `saurabha` (sandalwood paste and lotus scent). In Tarkasaṅgraha (26: `ghrāṇagrāhyo guṇo gandhaḥ; pṛthivīmātravṛttiḥ`), `gandha` is the unique defining mark (`lakṣaṇa`) of the `pṛthivī` tattva, celebrated in Bhagavadgītā 7.9: `puṇyo gandhaḥ pṛthivyāṃ ca` ('I am the pure, sacred fragrance within the earth').",
    padaccheda: [
      { deva: "सूचयति स्व-आश्रयम्", iast: "sūcayati sva-āśrayam", gloss: "signals its earthly or floral substratum from afar (√gandh)" },
      { deva: "घ्राण-ग्राह्यः गुणः", iast: "ghrāṇa-grāhyaḥ guṇaḥ", gloss: "the sensible quality grasped by the olfactory organ" },
      { deva: "सुरभिः असुरभिः च", iast: "surabhiḥ asurabhiḥ ca", gloss: "twofold: sweet fragrance and pungent odor" }
    ],
    source: {
      grantha: "Tarkasaṅgraha, Bhagavadgītā & Amarakośa",
      granthaDeva: "तर्कसङ्ग्रहः · भगवद्गीता · अमरकोशः",
      author: "Annambhaṭṭa, Śrī Vedavyāsa & Amarasimha",
      locator: "TS 26; BG 7.9; AK 1.5.13"
    },
    related: ["nasika", "prithivi", "pushpa", "vayu-kosha", "rasa"]
  },
  {
    id: "sparsha",
    deva: "स्पर्शः",
    iast: "sparśaḥ",
    stem: "sparśa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["touch", "tactile sensation", "contact", "stop-consonant"],
    phoneticAliases: ["sparsha", "sparsa", "samsparsha", "sparshana-guna", "touch", "contact"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "स्पृश्यते अनुभूयते त्वगिन्द्रियेण इति स्पर्शः । त्वगिन्द्रियमात्रग्राह्यो गुणः स्पर्शः स च त्रिविधः शीतोष्णानुष्णाशीतभेदात् ॥",
    lakshanaIast: "spṛśyate anubhūyate tvagindriyeṇa iti sparśaḥ | tvagindriyamātragrāhyo guṇaḥ sparśaḥ sa ca trividhaḥ śītoṣṇānuṣṇāśītabhedāt ||",
    meaningShort: "Touch or tactile quality — the sensible property perceived solely through the skin, as well as the twenty-five stop-consonants of Sanskrit phonology.",
    meaningDeep: "Formed with `-ghañ` from √spṛś ('saṃsparśane' — to touch, make direct contact), `sparśa` bridges natural philosophy and grammar. In Nyāya-Padārtha ontology (TS 27), `sparśa` is threefold across the elements: `śīta` (cool in water), `uṣṇa` (hot in fire), and `anuṣṇāśīta` (temperate in earth and air). Simultaneously in Pāṇinian Śikṣā (`kādayo māvasānāḥ sparśāḥ`), the twenty-five consonants from `ka` to `ma` are called `sparśa` ('plosives/stops') because the tongue makes full articulatory contact with palate, roof, teeth, or lips.",
    padaccheda: [
      { deva: "स्पृश्यते इति स्पर्शः", iast: "spṛśyate iti sparśaḥ", gloss: "experienced through direct contact (√spṛś + -ghañ)" },
      { deva: "त्वक्-इन्द्रिय-मात्र-ग्राह्यः", iast: "tvak-indriya-mātra-grāhyaḥ", gloss: "apprehended solely by the tactile sense" },
      { deva: "शीत-उष्ण-अनुष्णाशीत-भेदात्", iast: "śīta-uṣṇa-anuṣṇāśīta-bhedāt", gloss: "threefold: cool, hot, and temperate" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Siddhāntakaumudī",
      granthaDeva: "तर्कसङ्ग्रहः · सिद्धान्तकौमुदी",
      author: "Annambhaṭṭa & Bhaṭṭoji Dīkṣita",
      locator: "TS 27; SK Saṃjñāprakaraṇa"
    },
    related: ["tvach", "vayu-kosha", "jala", "tejas", "varna"]
  },
  {
    id: "raga",
    deva: "रागः",
    iast: "rāgaḥ",
    stem: "rāga",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["melodic mode", "color", "redness", "affection", "attachment"],
    phoneticAliases: ["raga", "raaga", "anuraga", "ranjana", "lohita-raga", "melody", "color", "passion"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "रज्यते चित्तमनेन इति रागः । योऽसौ ध्वनिविशेषस्तु स्वरवर्णविभूषितः रञ्जको जनचित्तानां स च राग उदाहृतः ॥",
    lakshanaIast: "rajyate cittam anena iti rāgaḥ | yo 'sau dhvaniviśeṣas tu svaravarṇavibhūṣitaḥ rañjako janacittānāṃ sa ca rāga udāhṛtaḥ ||",
    meaningShort: "Melodic mode (`rāga`), rich crimson hue, or emotional attachment — that which colors and captivates the human heart.",
    meaningDeep: "Derived with `-ghañ` from √rañj ('rāge' — to dye, color, kindle emotion, charm), `rāga` exhibits a luminous semantic unity across Amarakośa (Nānārthavarga 3.3.26: `rāgo 'nurāge mātsarye lohitādau` and musicology). Visually it means glowing color (especially dawn-red `aruṇa-rāga`); psychologically it means passionate attachment (`rāga-dveṣa`, BG 2.64) or loving devotion (`bhagavad-anurāga`); and in Mataṅga's *Bṛhaddēśī* (280), a `rāga` is that living melodic framework adorned with `svaras` and `varṇas` which colors (`rañjayati`) listeners' minds with aesthetic delight.",
    padaccheda: [
      { deva: "रज्यते चित्तम् अनेन", iast: "rajyate cittam anena", gloss: "colors and delights the mind (√rañj + -ghañ)" },
      { deva: "स्वर-वर्ण-विभूषितः", iast: "svara-varṇa-vibhūṣitaḥ", gloss: "adorned with musical notes and melodic phrases" },
      { deva: "रञ्जकः जन-चित्तानाम्", iast: "rañjakaḥ jana-cittānām", gloss: "enchanting the hearts of listeners — thus called `rāga`" }
    ],
    source: {
      grantha: "Bṛhaddēśī & Amarakośa",
      granthaDeva: "बृहद्देशी · अमरकोशः",
      author: "Mataṅga Muni & Amarasimha",
      locator: "Bṛhaddēśī 280; AK 3.3.26"
    },
    related: ["sangita", "svara", "tala", "rupa", "vairagya"]
  },
  {
    id: "tala",
    deva: "तालः",
    iast: "tālaḥ",
    stem: "tāla",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["rhythm", "musical meter", "time-cycle", "cymbal-beat", "palmyra palm"],
    phoneticAliases: ["tala", "taala", "laya", "kalakriyamanam", "karatala", "rhythm", "beat"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "प्रतिष्ठितं गीतं नृत्यं चास्मिन्निति तालः । तालः कालक्रियामानं लयः साम्यम् ॥",
    lakshanaIast: "pratiṣṭhitaṃ gītaṃ nṛtyaṃ cāsminn iti tālaḥ | tālaḥ kālakriyāmānaṃ layaḥ sāmyam ||",
    meaningShort: "Musical rhythm or cyclic time-measure — the ordered temporal foundation upon which song, instrumental play, and dance stand.",
    meaningDeep: "Derived from √tal ('pratiṣṭhāyām' — providing firm structural grounding, also naming the palm of the hand `karatala` that claps the beat and the palmyra palm whose leaves form `tālapatra` manuscripts), Amarasimha defines `tāla` with crystalline precision in Amarakośa 1.7.9: `tālaḥ kālakriyāmānaṃ layaḥ sāmyam` — '`tāla` is the exact measure of time-intervals in performance, while `laya` is evenness of tempo'. Classical musicology reveres `śruti` (intonation) as mother and `laya`/`tāla` as father (`śrutir mātā layaḥ pitā`).",
    padaccheda: [
      { deva: "प्रतिष्ठितम् गीतम् अस्मिन्", iast: "pratiṣṭhitam gītam asmin", gloss: "that rhythmic foundation wherein song and dance rest (√tal)" },
      { deva: "तालः काल-क्रिया-मानम्", iast: "tālaḥ kāla-kriyā-mānam", gloss: "exact cyclic measurement of musical time-action" },
      { deva: "लयः साम्यम्", iast: "layaḥ sāmyam", gloss: "paired with `laya`, uniform equilibrium of tempo" }
    ],
    source: {
      grantha: "Amarakośa & Saṅgītaratnākara",
      granthaDeva: "अमरकोशः · सङ्गीतरत्नाकरः",
      author: "Amarasimha & Śārṅgadeva",
      locator: "AK 1.7.9 (Nāṭyavarga); SR 5.2"
    },
    related: ["sangita", "gita", "vadya", "nritya", "kala"]
  },
  {
    id: "darshana",
    deva: "दर्शनम्",
    iast: "darśanam",
    stem: "darśana",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["vision", "philosophy", "system of thought", "sacred beholding"],
    phoneticAliases: ["darshana", "darsana", "tattvadarshana", "shaddarshana", "vision", "philosophy"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "दृश्यते साक्षात्क्रियते तत्त्वमनेन इति दर्शनम् । आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यः ॥",
    lakshanaIast: "dṛśyate sākṣātkriyate tattvam anena iti darśanam | ātmā vā are draṣṭavyaḥ śrotavyo mantavyo nididhyāsitavyaḥ ||",
    meaningShort: "Vision or philosophical system — both direct sight (including sacred beholding of the Divine) and a rigorous school of inquiry that leads to direct insight into reality.",
    meaningDeep: "Formed instrumentally with `-lyuṭ` (Pāṇini 3.3.115: `dṛśyate tattvam anena`) from √dṛśir ('prekṣaṇe' — to see directly), `darśana` reveals why Indian philosophy is never mere abstract speculation: its telos is transformative vision (`tattva-darśana` / `aparokṣa-darśana`, Bṛhadāraṇyaka 2.4.5 `ātmā vā are draṣṭavyaḥ`). Amarakośa (Nānārthavarga) notes its meanings of eye, mirror, discernment, sacred `śāstra`, and beholding a deity or saint, crowned in Śrī Madhvācārya's tradition as `Pūrṇaprajña-darśana` (`Tattvavāda`).",
    padaccheda: [
      { deva: "दृश्यते तत्त्वम् अनेन", iast: "dṛśyate tattvam anena", gloss: "that discipline whereby reality is directly beheld (√dṛś + -ana)" },
      { deva: "आत्मा द्रष्टव्यः", iast: "ātmā draṣṭavyaḥ", gloss: "BAU 2.4.5: the Supreme Ātman is to be directly realized" },
      { deva: "श्रोतव्यः मन्तव्यः", iast: "śrotavyaḥ mantavyaḥ", gloss: "through scriptural listening, reasoned reflection, and meditation" }
    ],
    source: {
      grantha: "Bṛhadāraṇyakopaniṣad & Amarakośa",
      granthaDeva: "बृहदारण्यकोपनिषत् · अमरकोशः",
      author: "Amarasimha",
      locator: "BAU 2.4.5; AK 3.3.113"
    },
    related: ["netra", "darpana", "siddhanta", "shastra", "aparokshajnana"]
  },
  {
    id: "siddhanta",
    deva: "सिद्धान्तः",
    iast: "siddhāntaḥ",
    stem: "siddhānta",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["established conclusion", "demonstrated doctrine", "canonical tenet"],
    phoneticAliases: ["siddhanta", "radhanta", "nirnaya", "mata", "doctrine", "conclusion"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "सिद्धोऽन्तो निश्चयो यस्मिन् स सिद्धान्तः । प्रमाणैरर्थपरीक्षणं न्यायः तन्त्राभ्युपगमः सिद्धान्तः ॥",
    lakshanaIast: "siddho 'nto niścayo yasmin sa siddhāntaḥ | pramāṇair arthaparīkṣaṇaṃ nyāyaḥ tantrābhyupagamaḥ siddhāntaḥ ||",
    meaningShort: "An established conclusion (`rāddhānta`) — a philosophical or scientific truth firmly demonstrated by valid `pramāṇas` after refuting counter-arguments.",
    meaningDeep: "Compounded of `siddha` ('proven by valid evidence') + `anta` ('definitive conclusion', parallel to Amarakośa 1.5.5 `siddhānto rāddhāntaḥ`), `siddhānta` represents the culmination of classical Sanskrit dialectical method: first stating the prima facie objection (`pūrvapakṣa`), testing it with critical evidence (`khaṇḍana` / `parīkṣā`), and arriving at the unassailable `uttarapakṣa` or `siddhānta` (Gautama's *Nyāyasūtra* 1.1.26–27). In astronomy too (*Sūryasiddhānta*), it denotes a mathematically proven treatise.",
    padaccheda: [
      { deva: "सिद्धः अन्तः निश्चयः", iast: "siddhaḥ antaḥ niścayaḥ", gloss: "a definitive conclusion established by valid proof (`siddha-anta`)" },
      { deva: "प्रमाणैः अर्थ-परीक्षणम्", iast: "pramāṇaiḥ artha-parīkṣaṇam", gloss: "rigorous testing of reality through epistemic `pramāṇas`" },
      { deva: "तन्त्र-अभ्युपगमः सिद्धान्तः", iast: "tantra-abhyupagamaḥ siddhāntaḥ", gloss: "Nyāyasūtra 1.1.26: demonstrated tenet of a philosophical system" }
    ],
    source: {
      grantha: "Nyāyasūtra & Amarakośa",
      granthaDeva: "न्यायसूत्रम् · अमरकोशः",
      author: "Akṣapāda Gautama & Amarasimha",
      locator: "NS 1.1.26; AK 1.5.5 (Dhīvarga)"
    },
    related: ["darshana", "pramana", "pariksha", "uttara", "apasiddhanta"]
  },
  {
    id: "abhyasa",
    deva: "अभ्यासः",
    iast: "abhyāsaḥ",
    stem: "abhyāsa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["practice", "sustained repetition", "disciplined cultivation", "study"],
    phoneticAliases: ["abhyasa", "avritti", "anushthana", "paricaya", "practice", "study"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "अभ्यस्यते पुनः पुनरनुष्ठीयते इति अभ्यासः । तत्र स्थितौ यत्नोऽभ्यासः अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥",
    lakshanaIast: "abhyasyate punaḥ punar anuṣṭhīyate iti abhyāsaḥ | tatra sthitau yatno 'bhyāsaḥ abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate ||",
    meaningShort: "Sustained practice or disciplined repetition — earnest, uninterrupted effort that transforms initial learning into effortless mastery and mental steadiness.",
    meaningDeep: "Derived from `abhi` + √asu ('kṣepaṇe' — applying the mind repeatedly toward a chosen discipline; `-ghañ`), `abhyāsa` denotes scholarly recitation (`svādhyāya-abhyāsa`), artistic training, grammatical reduplication (Pāṇini 6.1.4), and spiritual cultivation. When Arjuna laments in Bhagavadgītā 6.34 that the mind is as restless and hard to curb as the wind, Śrī Kṛṣṇa replies with the timeless twin remedy (`BG 6.35`) echoed in Yogasūtra 1.12–14: `abhyāsa` (patient, reverent, long-sustained practice) paired with `vairāgya` (dispassion).",
    padaccheda: [
      { deva: "पुनः पुनः अनुष्ठीयते", iast: "punaḥ punaḥ anuṣṭhīyate", gloss: "cultivated repeatedly with patient diligence (`abhi` + √as)" },
      { deva: "तत्र स्थितौ यत्नः अभ्यासः", iast: "tatra sthitau yatnaḥ abhyāsaḥ", gloss: "YS 1.13: steadfast effort to abide in inner stillness" },
      { deva: "अभ्यासेन वैराग्येण च", iast: "abhyāsena vairāgyeṇa ca", gloss: "BG 6.35: mastered through practice and dispassion" }
    ],
    source: {
      grantha: "Bhagavadgītā & Yogasūtra",
      granthaDeva: "भगवद्गीता · योगसूत्रम्",
      author: "Śrī Vedavyāsa & Patañjali",
      locator: "BG 6.35; YS 1.13"
    },
    related: ["vidya", "vairagya", "udyama", "pipilika", "dhyana"]
  },
  {
    id: "pariksha",
    deva: "परीक्षा",
    iast: "parīkṣā",
    stem: "parīkṣā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["examination", "critical investigation", "testing", "verification"],
    phoneticAliases: ["pariksha", "pariksa", "vimarsha-pariksha", "anusandhana", "examination", "testing"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "परित ईक्ष्यते तत्त्वं निर्णीयते अनया इति परीक्षा । प्रतिज्ञाहेतूदाहरणोपनयनिगमनानि पञ्चावयवैः परीक्षणं परीक्षा ॥",
    lakshanaIast: "parita īkṣyate tattvaṃ nirṇīyate anayā iti parīkṣā | pratijñāhetūdāharaṇopanayanigamanāni pañcāvayavaiḥ parīkṣaṇaṃ parīkṣā ||",
    meaningShort: "Critical examination or testing — thorough, all-round scrutiny (`paritaḥ īkṣaṇam`) that separates genuine truth or merit from counterfeit appearance.",
    meaningDeep: "Formed with `-aṅ` + `-ṭāp` (Pāṇini 3.3.104) from `pari` ('all around, from every angle') + √īkṣ ('darśane' — to inspect rigorously), `parīkṣā` is the third pillar of Vātsyāyana's *Nyāyabhāṣya* method: `uddeśa` (enumeration), `lakṣaṇa` (definition), and `parīkṣā` (critical verification whether the definition withstands counterexamples). Kālidāsa (*Mālavikāgnimitra* 1.2: `santaḥ parīkṣyānyatarad bhajante`) praises wise critics who judge nothing blindly by age or novelty, choosing excellence only after independent `parīkṣā`.",
    padaccheda: [
      { deva: "परितः ईक्ष्यते अनया", iast: "paritaḥ īkṣyate anayā", gloss: "inspected thoroughly from every side (`pari` + √īkṣ)" },
      { deva: "तत्त्वम् निर्णीयते", iast: "tattvam nirṇīyate", gloss: "whereby genuine reality or validity is ascertained" },
      { deva: "परीक्षणम् परीक्षा", iast: "parīkṣaṇam parīkṣā", gloss: "critical examination and verification" }
    ],
    source: {
      grantha: "Nyāyabhāṣya & Mālavikāgnimitra",
      granthaDeva: "न्यायभाष्यम् · मालविकाग्निमित्रम्",
      author: "Vātsyāyana & Kālidāsa",
      locator: "NBh 1.1.2; Mālavikāgnimitra 1.2"
    },
    related: ["lakshana", "pramana", "siddhanta", "tarka", "buddhi"]
  },
  {
    id: "upama",
    deva: "उपमा",
    iast: "upamā",
    stem: "upamā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["simile", "comparison", "poetic analogy", "resemblance"],
    phoneticAliases: ["upama", "sadharmya", "tulana", "aupamya", "upamana", "simile", "comparison"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "उपमीयते सादृश्येन निरूप्यते अनया इति उपमा । साधर्म्यमुपमा भेदे यथाप्रख्यं स्फुटं यदि ॥",
    lakshanaIast: "upamīyate sādṛśyena nirūpyate anayā iti upamā | sādharmyam upamā bhede yathāprakhyaṃ sphuṭaṃ yadi ||",
    meaningShort: "Simile or illuminating comparison — perceiving charming shared excellence (`sādharmya`) between two distinct entities (`upameya` and `upamāna`).",
    meaningDeep: "Derived from `upa` ('near, alongside') + √mā ('māne' — to measure together; Pāṇini 3.3.106 `ātacca upasarge`), `upamā` is revered since Yāska's *Nirukta* (3.13–18) and Mammaṭa's *Kāvyaprakāśa* (10.1: `sādharmyam upamā bhede`) as the queen and fountainhead of all poetic figures (`alaṅkāra-śiroratnam`), celebrated in the adage `upamā kālidāsasya`. Notice Mammaṭa's philosophical precision (`bhede`): true comparison presupposes real ontological distinction (`bheda`) alongside genuine similarity (`sādṛśya`), harmonizing seamlessly with Tattvavāda realism.",
    padaccheda: [
      { deva: "उपमीयते अनया इति उपमा", iast: "upamīyate anayā iti upamā", gloss: "measured alongside by shared likeness (`upa` + √mā)" },
      { deva: "साधर्म्यम् उपमा", iast: "sādharmyam upamā", gloss: "felicitous commonality of attribute constitutes `upamā`" },
      { deva: "भेदे स्फुटम्", iast: "bhede sphuṭam", gloss: "shining forth between two genuinely distinct entities" }
    ],
    source: {
      grantha: "Kāvyaprakāśa & Nirukta",
      granthaDeva: "काव्यप्रकाशः · निरुक्तम्",
      author: "Mammaṭa & Yāska",
      locator: "KP 10.1; Nirukta 3.13"
    },
    related: ["kavya", "sadrishya", "bheda", "drishtanta", "darpana"]
  },
  {
    id: "darpana",
    deva: "दर्पणः",
    iast: "darpaṇaḥ",
    stem: "darpaṇa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["mirror", "looking-glass", "clear reflector"],
    phoneticAliases: ["darpana", "adarsha", "mukura", "mirror"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "दृप्यन्ति स्वं रूपं दृष्ट्वा अस्मिन्निति दर्पणः । दर्पणे मुकुरादर्शौ ॥",
    lakshanaIast: "dṛpyanti svaṃ rūpaṃ dṛṣṭvā asminn iti darpaṇaḥ | darpaṇe mukurādarśau ||",
    meaningShort: "A mirror (`ādarśa` / `mukura`) — a polished surface that faithfully reflects the countenance before it, and a classic title for lucid philosophical treatises.",
    meaningDeep: "Derived from √dṛp ('harṣamohanayoḥ' — gladdening beholders who see their adorned visage) alongside `ādarśa` (`ā` + √dṛś, 'complete reflection', also meaning an ideal exemplar or master manuscript), Amarakośa (Manuṣyavarga 2.6.138) gives the terse trio `darpaṇe mukurādarśau`. In Śrī Madhvācārya's *Bimba-pratibimba-vāda* (Brahmasūtrabhāṣya 2.3.50), whereas an external metal mirror (`upādhi-darpaṇa`) is transient, the finite soul's eternal essence (`svarūpopādhi`) reflects its dependence and likeness unto the Sovereign `Bimba`, Lord Viṣṇu — provided dust (`mala`) is wiped clean from the heart-mirror.",
    padaccheda: [
      { deva: "स्वम् रूपम् दृष्ट्वा अस्मिन्", iast: "svam rūpam dṛṣṭvā asmin", gloss: "wherein one beholds one's reflected form (`darpaṇa`)" },
      { deva: "दर्पणे मुकुर-आदर्शौ", iast: "darpaṇe mukura-ādarśau", gloss: "mirror, polished `mukura`, clear `ādarśa`" },
      { deva: "प्रतिबिम्ब-आधारः", iast: "pratibimba-ādhāraḥ", gloss: "locus of clear reflection" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.6.138 (Manuṣyavarga)"
    },
    related: ["pratibimba", "bimba", "chaya", "rupa", "darshana"]
  },
  {
    id: "sanketa",
    deva: "सङ्केतः",
    iast: "saṅketaḥ",
    stem: "saṅketa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["convention", "semantic designation", "symbol", "agreed sign"],
    phoneticAliases: ["sanketa", "samketa", "samaya-sign", "shakti-vritti", "paribhasha", "convention", "symbol"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "सङ्केत्यतेऽस्माच्छब्दादयमर्थो बोद्धव्य इति सङ्केतः । अस्मात्पदादयमर्थो बोद्धव्य इतीश्वरसङ्केतः शक्तिः ॥",
    lakshanaIast: "saṅketyate 'smāc chabdād ayam artho boddhavya iti saṅketaḥ | asmāt padād ayam artho boddhavya itīśvarasaṅketaḥ śaktiḥ ||",
    meaningShort: "Semantic convention, symbol, or rendezvous sign — the established relation linking a word or gesture to its intended meaning.",
    meaningDeep: "Derived from `sam` + √kit ('jñāne / nivāse' — mutual cognitive agreement), `saṅketa` (`samaya`) denotes both an agreed signal or meeting-place in poetry and, in Nyāya-Vyākaraṇa philosophy of language, the denotative relation (`abhidhā-vṛtti`) between signifier (`vācaka`) and signified (`vācya`). Tarkasaṅgraha (59) distinguishes eternal divine/natural word-meaning linkage (`īśvara-saṅketa` / `śakti`) from modern technical terminology coined by authors (`ādhunika-saṅketa` = `paribhāṣā`, such as Pāṇini's `tiṅ`, `sup`, and `guṇa`).",
    padaccheda: [
      { deva: "सङ्केत्यते अनेन इति सङ्केतः", iast: "saṅketyate anena iti saṅketaḥ", gloss: "designated by shared cognitive agreement (`sam` + √kit)" },
      { deva: "अस्मात् पदात् अयम् अर्थः बोद्धव्यः", iast: "asmāt padāt ayam arthaḥ boddhavyaḥ", gloss: "'from this word, this meaning is to be understood'" },
      { deva: "ईश्वर-सङ्केतः शक्तिः", iast: "īśvara-saṅketaḥ śaktiḥ", gloss: "primary denotative potency (`śakti`) in language" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Siddhāntamuktāvalī",
      granthaDeva: "तर्कसङ्ग्रहः · सिद्धान्तमुक्तावली",
      author: "Annambhaṭṭa & Viśvanātha",
      locator: "TS 59; AK 3.3.158 (`samaya`)"
    },
    related: ["shabda", "artha", "naman", "bhasha", "lakshana"]
  },
  {
    id: "samvada",
    deva: "संवादः",
    iast: "saṃvādaḥ",
    stem: "saṃvāda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["dialogue", "conversation", "colloquy", "harmony of evidence"],
    phoneticAliases: ["samvada", "sanvada", "kathopakathana", "sambhashana", "alapa", "dialogue", "conversation"],
    pillar: "kosha",
    domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
    lakshanaDeva: "सम्यक् सह वा वदन्त्यस्मिन्निति संवादः । आलापः प्रलापः संलापः संवादश्च ॥",
    lakshanaIast: "samyak saha vā vadanty asminn iti saṃvādaḥ | ālāpaḥ pralāpaḥ saṃlāpaḥ saṃvādaś ca ||",
    meaningShort: "Dialogue or earnest conversation — constructive, truth-seeking discourse between interlocutors, as well as concord among independent testimonies.",
    meaningDeep: "Formed with `-ghañ` from `sam` + √vad ('vyaktāyāṃ vāci' — speaking together in mutual responsiveness), `saṃvāda` (`saṃlāpa`, `kathopakathana`) names the premier literary frame of Indian wisdom: from Ṛgvedic *Saṃvāda-sūktas* and Upaniṣadic teacher-student colloquies (*Yājñavalkya–Maitreyī*, *Uddālaka–Śvetaketu*) to the *Kṛṣṇa–Arjuna Saṃvāda* (`imaṃ saṃvādam āvayor adhyēṣyate`, BG 18.70). In epistemology too (`pramāṇa-saṃvāda`), `saṃvāda` denotes harmonious agreement between word and lived experience, the opposite of contradiction (`visaṃvāda`).",
    padaccheda: [
      { deva: "सह वदन्ति अस्मिन् इति संवादः", iast: "saha vadanti asmin iti saṃvādaḥ", gloss: "wherein interlocutors converse in mutual harmony (`sam` + √vad)" },
      { deva: "आलापः संलापः", iast: "ālāpaḥ saṃlāpaḥ", gloss: "friendly address and engaging colloquy" },
      { deva: "संवादः", iast: "saṃvādaḥ", gloss: "illuminating dialogue and epistemic concord" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 18.70; AK 1.6.14 (Śabdādivarga)"
    },
    related: ["prashna", "uttara", "vada", "katha", "vak"]
  },

  // ============================================================================
  // DOMAIN 2: Kuṭumba, Samāja & Nīti (Life, Society & Ethics) — 60 Entries
  // ============================================================================
  {
    id: "matri",
    deva: "माता",
    iast: "mātā",
    stem: "mātṛ",
    pos: "strīliṅga (f.)",
    englishGlosses: ["mother", "maternal parent", "creatrix"],
    phoneticAliases: ["matri", "matr", "mata", "janani", "amba", "prasuh", "mother"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "निर्मिते गर्भे सन्तानं मिमीते मानयति वा इति माता । जनयित्री प्रसूः माता जननी अम्बा च ॥",
    lakshanaIast: "nirmite garbhe santānaṃ mimīte mānayati vā iti mātā | janayitrī prasūḥ mātā jananī ambā ca ||",
    meaningShort: "Mother — she who shapes the child within the womb, nurtures with selfless affection, and stands first in reverence.",
    meaningDeep: "Yāska (Nirukta 2.8: `mātā nirmātrī bhavati — antarīkṣe garbho nirmīyate`) and Uṇādi-sūtra (2.95: `naptṛneṣṭṛtvaṣṭṛhotṛpotṛbhrātṛjāmātṛmātṛpitṛduhitṛ`, from √māṅ 'māne / nirmāṇe' or √mān 'pūjāyām', cognate with Latin *māter* and English *mother*) honor `mātṛ` (nominative `mātā`) both as life-shaper (`nirmātrī`) and supreme object of veneration. Amarakośa (Manuṣyavarga 2.6.29) pairs `mātā` with `janayitrī`, `prasū`, `jananī`, and `ambā`. Taittirīya Upaniṣad 1.11.2 places the mother very first in sacred duty (`mātṛdevo bhava`), and Manusmṛti 2.145 declares she surpasses a thousand fathers in venerable weight (`sahasraṃ tu pitṝn mātā gauraveṇātiricyate`).",
    padaccheda: [
      { deva: "निर्मिमीते मानयति इति माता", iast: "nirmimīte mānayati iti mātā", gloss: "shapes the child within and nurtures with honor (√mā + -tṛ)" },
      { deva: "जनयित्री प्रसूः", iast: "janayitrī prasūḥ", gloss: "giver of birth, life-bearer" },
      { deva: "माता जननी अम्बा", iast: "mātā jananī ambā", gloss: "mother, `jananī`, beloved `ambā`" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Taittirīyopaniṣad",
      granthaDeva: "निरुक्तम् · अमरकोशः · तैत्तिरीयोपनिषत्",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.8; AK 2.6.29; TU 1.11.2"
    },
    related: ["pitri", "putra", "duhitri", "kutumba", "lakshmi"]
  },
  {
    id: "pitri",
    deva: "पिता",
    iast: "pitā",
    stem: "pitṛ",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["father", "paternal protector", "ancestor"],
    phoneticAliases: ["pitri", "pitr", "pita", "janaka", "tata", "vaptri", "father"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "पाति रक्षति सन्तानमिति पिता । जनको वप्ता पिता तातश्च ॥",
    lakshanaIast: "pāti rakṣati santānam iti pitā | janako vaptā pitā tātaś ca ||",
    meaningShort: "Father — he who protects, sustains, and guides his offspring in righteous living.",
    meaningDeep: "Yāska (Nirukta 4.21: `pitā pālayitā vā pāyitā vā`) and Uṇādi-sūtra (2.95) derive `pitṛ` (nominative `pitā`, cognate with Greek *patēr*, Latin *pater*, and English *father*) from √pā ('rakṣaṇe' — he who shields and nurtures). Amarakośa (Manuṣyavarga 2.6.28) lists `janaka`, `pitṛ`, and `tāta` (a term of tender affection applied both to one's father and to a beloved son or student), while plural `pitaraḥ` denotes revered ancestors. In Bhagavadgītā 9.17 (`pitāham asya jagato mātā dhātā pitāmahaḥ`), Bhagavān reveals Himself as the eternal cosmic Father of all souls.",
    padaccheda: [
      { deva: "पाति रक्षति इति पिता", iast: "pāti rakṣati iti pitā", gloss: "protects and sustains his children (√pā + -tṛc)" },
      { deva: "जनकः वप्ता", iast: "janakaḥ vaptā", gloss: "progenitor, life-giver" },
      { deva: "पिता तातः", iast: "pitā tātaḥ", gloss: "father, revered `tāta`" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Bhagavadgītā",
      granthaDeva: "निरुक्तम् · अमरकोशः · भगवद्गीता",
      author: "Yāska, Amarasimha & Śrī Vedavyāsa",
      locator: "Nirukta 4.21; AK 2.6.28; BG 9.17"
    },
    related: ["matri", "putra", "duhitri", "kutumba", "bandhu"]
  },
  {
    id: "bhratri",
    deva: "भ्राता",
    iast: "bhrātā",
    stem: "bhrātṛ",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["brother", "fraternal kinsman", "comrade"],
    phoneticAliases: ["bhratri", "bhratr", "bhrata", "sahodara", "sodara", "brother"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "बिभर्ति कुलं भागं वा हरते राजते स्नेहेन वेति भ्राता । समानोदरे शयितः सोदर्यः सहोदरश्च भ्राता ॥",
    lakshanaIast: "bibharti kulaṃ bhāgaṃ vā harate rājate snehena veti bhrātā | samānodare śayitaḥ sodaryaḥ sahodaraś ca bhrātā ||",
    meaningShort: "A brother — a fraternal kinsman born of the same lineage or womb (`sahodara`) who shares family responsibility and mutual support.",
    meaningDeep: "Yāska (Nirukta 4.26: `bhrātā bharaṇād vā harater vā bhāgam` — sustaining the family or sharing ancestral patrimony) and Uṇādi-sūtra (2.95, from √bhrāj 'dīptau' or √bhṛ 'bharaṇe', cognate with Latin *frāter* and English *brother*) illuminate `bhrātṛ` (nominative `bhrātā`). Pāṇini 4.4.109 (`sodarād yaḥ`) and Amarakośa (Manuṣyavarga 2.6.30) distinguish `sodarya` / `sahodara` (full brother born of the same mother's womb), `agrajā` (`jyeṣṭha`, elder brother), and `anuja` (`kaniṣṭha`, younger brother) — immortalized in the *Rāmāyaṇa* through the unbreakable `bhrātṛ-sneha` of Rāma, Lakṣmaṇa, Bharata, and Śatrughna.",
    padaccheda: [
      { deva: "बिभर्ति कुलम् इति भ्राता", iast: "bibharti kulam iti bhrātā", gloss: "upholds the household and shares fraternal duty (√bhṛ / √bhrāj + -tṛ)" },
      { deva: "समान-उदरे शयितः", iast: "samāna-udare śayitaḥ", gloss: "nurtured within the same maternal womb (Pāṇini 4.4.109)" },
      { deva: "सोदर्यः सहोदरः भ्राता", iast: "sodaryaḥ sahodaraḥ bhrātā", gloss: "uterine sibling, brother" }
    ],
    source: {
      grantha: "Nirukta, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "निरुक्तम् · अष्टाध्यायी · अमरकोशः",
      author: "Yāska, Pāṇini & Amarasimha",
      locator: "Nirukta 4.26; Pāṇini 4.4.109; AK 2.6.30"
    },
    related: ["bhagini", "matri", "pitri", "kutumba", "rama"]
  },
  {
    id: "bhagini",
    deva: "भगिनी",
    iast: "bhaginī",
    stem: "bhaginī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["sister", "auspicious kinswoman"],
    phoneticAliases: ["bhagini", "svasa", "svasri", "sahodari", "sister"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "भगः सौभाग्यं स्नेहश्चास्या अस्तीति भगिनी । स्वसा च भगिनी समाना ॥",
    lakshanaIast: "bhagaḥ saubhāgyaṃ snehaś cāsyā astīti bhaginī | svasā ca bhaginī samānā ||",
    meaningShort: "A sister (`svasā`) — the cherished kinswoman whose presence brings auspiciousness (`bhaga`) and affection to the family.",
    meaningDeep: "Sanskrit preserves two complementary words for sister side by side in Amarakośa (Manuṣyavarga 2.6.30): archaic Indo-European `svasṛ` (nominative `svasā`, explained by Yāska in Nirukta 11.32 as `su-asā`, 'abiding gracefully among her own kin', cognate with Latin *soror* and English *sister*) and classical `bhaginī` (`bhaga` 'auspicious fortune, grace, affection' + possessive `-inī`, literally 'the fortunate, blessing-bearing one'). Both words reflect the tender honor accorded to a sister in the Indian household.",
    padaccheda: [
      { deva: "भगः सौभाग्यम् अस्याः अस्ति", iast: "bhagaḥ saubhāgyam asyāḥ asti", gloss: "endowed with auspiciousness and tender grace (`bhaga` + `-inī`)" },
      { deva: "स्वसा", iast: "svasā", gloss: "Vedic and classical synonym (`svasṛ`)" },
      { deva: "भगिनी", iast: "bhaginī", gloss: "beloved sister" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.6.30 (Manuṣyavarga); Nirukta 11.32"
    },
    related: ["bhratri", "matri", "pitri", "duhitri", "kutumba"]
  },
  {
    id: "putra",
    deva: "पुत्रः",
    iast: "putraḥ",
    stem: "putra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["son", "offspring", "filial heir"],
    phoneticAliases: ["putra", "suta", "tanaya", "atmaja", "sunu", "nandana", "son"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "पुनाति पितॄन् सद्वृत्तेन पूरयति कुलमानन्देन वेति पुत्रः । आत्मजस्तनयः सूनुः सुतः पुत्रः ॥",
    lakshanaIast: "punāti pitṝn sadvṛttena pūrayati kulam ānandena veti putraḥ | ātmajas tanayaḥ sūnuḥ sutaḥ putraḥ ||",
    meaningShort: "A son — filial offspring who gladdens his parents and purifies his ancestral lineage through righteous conduct.",
    meaningDeep: "Yāska (Nirukta 2.11: `putraḥ puru trāyate niparaṇād vā, pun narakaṃ tatas trāyata iti vā`) and Manusmṛti 9.138 derive `putra` from √pū ('pavane' — purifying ancestors through noble character) or `pum` + √trai ('delivering lineage from grief'). Amarakośa (Manuṣyavarga 2.6.27) groups five expressive synonyms equally shared in feminine (`-ā`) for a daughter: `ātmaja` ('born of one's own self', echoing *ātmā vai jāyate putraḥ*), `tanaya` ('extending the family line', √tan), `sūnu` (cognate with English *son*), `suta`, and `nandana` ('bringer of joy').",
    padaccheda: [
      { deva: "पुनाति पूरयति त्रायते वा", iast: "punāti pūrayati trāyate vā", gloss: "purifies, fulfills, and protects his lineage (`putra`)" },
      { deva: "आत्मजः तनयः", iast: "ātmajaḥ tanayaḥ", gloss: "born of oneself, extender of the family line" },
      { deva: "सूनुः सुतः पुत्रः", iast: "sūnuḥ sutaḥ putraḥ", gloss: "offspring, filial son" }
    ],
    source: {
      grantha: "Nirukta, Amarakośa & Manusmṛti",
      granthaDeva: "निरुक्तम् · अमरकोशः · मनुस्मृतिः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.11; AK 2.6.27; Manu 9.138"
    },
    related: ["duhitri", "matri", "pitri", "bala-child", "kutumba"]
  },
  {
    id: "duhitri",
    deva: "दुहिता",
    iast: "duhitā",
    stem: "duhitṛ",
    pos: "strīliṅga (f.)",
    englishGlosses: ["daughter", "maiden", "filial daughter"],
    phoneticAliases: ["duhitri", "duhitr", "duhita", "kanya", "putri", "suta", "tanaya-daughter", "atmaja-daughter", "daughter"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "दोग्धि कुलद्वयहितं पूरयति इति दुहिता । आत्मजा तनया सुता नन्दिनी दुहिता कन्या च ॥",
    lakshanaIast: "dogdhi kuladvayahitaṃ pūrayati iti duhitā | ātmajā tanayā sutā nandinī duhitā kanyā ca ||",
    meaningShort: "A daughter — the radiant child (`kanyā` / `nandinī`) who brings blessing and prosperity to both her natal and marital households.",
    meaningDeep: "Derived via Uṇādi 2.95 from √duh ('prapūraṇe' — drawing forth abundance and affection; Yāska, Nirukta 3.4, cognate with Greek *thygatēr* and English *daughter*), `duhitṛ` (nominative `duhitā`) is paired in Amarakośa (Manuṣyavarga 2.6.28) directly with the feminine quartet `ātmajā`, `tanayā`, `sutā`, and `putrī`, alongside `kanyā` (from √kan 'dīptikāntigatiṣu' — 'she who shines with auspicious grace', Nirukta 4.15) and `nandinī` ('delighter of the home'). Mahābhārata (Anuśāsana Parva 45.11) explicitly affirms `putreṇa duhitā samā` — a daughter is equal in dignity to a son.",
    padaccheda: [
      { deva: "दोग्धि प्रपूरयति हितम्", iast: "dogdhi prapūrayati hitam", gloss: "fills both households with auspicious blessing (√duh + -tṛ)" },
      { deva: "आत्मजा तनया सुता", iast: "ātmajā tanayā sutā", gloss: "born of one's own self, filial daughter" },
      { deva: "नन्दिनी दुहिता कन्या", iast: "nandinī duhitā kanyā", gloss: "gladdener of the home, daughter, radiant maiden" }
    ],
    source: {
      grantha: "Amarakośa, Nirukta & Mahābhārata",
      granthaDeva: "अमरकोशः · निरुक्तम् · महाभारतम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.6.28; Nirukta 3.4, 4.15; MBh 13.45.11"
    },
    related: ["putra", "matri", "pitri", "bhagini", "nari"]
  },
  {
    id: "pati",
    deva: "पतिः",
    iast: "patiḥ",
    stem: "pati",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["husband", "lord", "protector", "master"],
    phoneticAliases: ["pati", "bhartri", "bharta", "dhava", "svamin", "isha", "husband", "lord"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "पाति रक्षति धर्मतः इति पतिः । धवः प्रियः पतिर्भर्ता ॥",
    lakshanaIast: "pāti rakṣati dharmataḥ iti patiḥ | dhavaḥ priyaḥ patir bhartā ||",
    meaningShort: "A husband or sovereign lord — one who protects, sustains, and stands in faithful partnership (`bhartṛ`).",
    meaningDeep: "Derived via Uṇādi 4.59 (`pāteḥ ḍatiḥ`) from √pā ('rakṣaṇe' — to protect, cognate with Greek *posis* and Latin *potis*), `pati` has a celebrated Pāṇinian declensional distinction (1.4.8: `patiḥ samāsa eva` — inflecting irregularly as `patyā, patye, patyuḥ, patyau` when standalone meaning 'husband/lord', but regularly like `hari` at the end of compounds such as `bhūpati` or `senāpati`). Amarakośa (Manuṣyavarga 2.6.18) pairs `pati` with `dhava`, `priya` ('beloved'), and `bhartṛ` ('sustainer'). Ultimately in Vedānta, Bhagavān Nārāyaṇa is `Jagatpati` and `Ramāpati`.",
    padaccheda: [
      { deva: "पाति रक्षति इति पतिः", iast: "pāti rakṣati iti patiḥ", gloss: "protects and upholds in dharma (√pā + -ḍati)" },
      { deva: "धवः प्रियः", iast: "dhavaḥ priyaḥ", gloss: "espoused husband, beloved companion" },
      { deva: "पतिः भर्ता", iast: "patiḥ bhartā", gloss: "protector-lord, faithful sustainer (`bhartṛ`)" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 1.4.8; AK 2.6.18 (Manuṣyavarga)"
    },
    related: ["patni", "kutumba", "griha", "nara", "narayana"]
  },
  {
    id: "patni",
    deva: "पत्नी",
    iast: "patnī",
    stem: "patnī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["wife", "wedded partner in dharma", "mistress of the home"],
    phoneticAliases: ["patni", "bharya", "jaya", "sahadharmini", "dara", "kalatra", "wife"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "पत्युर्यज्ञसंयोगे पत्नी । पत्नी पाणिगृहीती च द्वितीया सहधर्मिणी भार्या जाया च ॥",
    lakshanaIast: "patyur yajñasaṃyoge patnī | patnī pāṇigṛhītī ca dvitīyā sahadharmiṇī bhāryā jāyā ca ||",
    meaningShort: "A wedded wife (`sahadharmiṇī`) — consecrated co-partner with her husband in all sacred rites, household hospitality, and life's dharma.",
    meaningDeep: "Pāṇini's famous sūtra 4.1.33 (`patyur no yajñasaṃyoge` — adding `-n` + `-ṅīp` to `pati` → `patnī`) defines `patnī` specifically through spiritual equality: she who shares jointly with her husband in Vedic `yajña` and its merit (`dharma-phala`). Amarakośa (Manuṣyavarga 2.6.5–6) illuminates each facet of wedded companionship: `pāṇigṛhītī` ('whose hand was clasped before sacred Agni'), `dvitīyā` ('indispensable second half'), `sahadharmiṇī` ('co-practitioner of dharma'), `bhāryā` ('cherished one'), and `gṛhiṇī` (`na gṛhaṃ gṛham ity āhur gṛhiṇī gṛham ucyate` — 'walls do not make a home; the wife herself is the home', Pañcatantra / MBh).",
    padaccheda: [
      { deva: "पत्युः यज्ञ-संयोगे पत्नी", iast: "patyuḥ yajña-saṃyoge patnī", gloss: "Pāṇini 4.1.33: co-partner with her husband in sacred `yajña`" },
      { deva: "पाणिगृहीती द्वितीया", iast: "pāṇigṛhītī dvitīyā", gloss: "hand-clasped bride, inseparable half" },
      { deva: "सहधर्मिणी भार्या जाया", iast: "sahadharmiṇī bhāryā jāyā", gloss: "partner in dharma, cherished wife" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 4.1.33; AK 2.6.5–6 (Manuṣyavarga)"
    },
    related: ["pati", "nari", "kutumba", "griha", "yajna"]
  },
  {
    id: "kutumba",
    deva: "कुटुम्बम्",
    iast: "kuṭumbam",
    stem: "kuṭumba",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["family", "household", "kinsfolk"],
    phoneticAliases: ["kutumba", "kula", "anvaya", "vamsha", "parivara", "family", "household"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "कुटुम्बयति धारयति परस्परं स्नेहेनेति कुटुम्बम् । उदारचरितानां तु वसुधैव कुटुम्बकम् ॥",
    lakshanaIast: "kuṭumbayati dhārayati parasparaṃ sneheneti kuṭumbam | udāracaritānāṃ tu vasudhaiva kuṭumbakam ||",
    meaningShort: "A family or household — an interdependent circle of kin bound by shared roof, mutual care, and affection.",
    meaningDeep: "Derived from tenth-gaṇa √kuṭumb ('dhāraṇe' — sustaining and caring for dependents under one household, `kuṭi` / `kuṭa` + support), `kuṭumba` (`kuṭumbaka`) is accompanied in Amarakośa by `kula` (lineage/clan, 2.7.1), `vaṃśa`, `anvaya`, and `parivāra`. Mahopaniṣad 6.71–72 (and Hitopadeśa 1.71) expands the household hearth to encompass the entire earth in India's civilizational motto: `ayaṃ nijaḥ paro veti gaṇanā laghucetasām, udāracaritānāṃ tu vasudhaiva kuṭumbakam` — 'for the magnanimous of character, the whole earth is one family'.",
    padaccheda: [
      { deva: "धारयति परस्परम् इति कुटुम्बम्", iast: "dhārayati parasparam iti kuṭumbam", gloss: "sustains its members in mutual care (√kuṭumb)" },
      { deva: "उदार-चरितानाम्", iast: "udāra-caritānām", gloss: "for those of noble, large-hearted conduct" },
      { deva: "वसुधा एव कुटुम्बकम्", iast: "vasudhā eva kuṭumbakam", gloss: "the entire earth itself is one extended family" }
    ],
    source: {
      grantha: "Mahopaniṣad & Amarakośa",
      granthaDeva: "महोपनिषत् · अमरकोशः",
      author: "Amarasimha",
      locator: "Mahopaniṣad 6.72; AK 2.7.1, 3.3"
    },
    related: ["matri", "pitri", "bandhu", "griha", "prithivi"]
  },
  {
    id: "bandhu",
    deva: "बन्धुः",
    iast: "bandhuḥ",
    stem: "bandhu",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["kinsman", "relative", "steadfast ally", "supportive friend"],
    phoneticAliases: ["bandhu", "bandhava", "svajana", "jnati", "sagotra", "kinsman", "relative"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "बध्नाति मनः स्नेहेन आपदि च उपतिष्ठति इति बन्धुः । सगोत्रबान्धवज्ञातिबन्धुस्वस्वजनाः समाः ॥",
    lakshanaIast: "badhnāti manaḥ snehena āpadi ca upatiṣṭhati iti bandhuḥ | sagotrabāndhavajñātibandhusvasvajanāḥ samāḥ ||",
    meaningShort: "A kinsman, relative, or true ally — one bound by ties of lineage and affection who stands fast beside one in joy and adversity.",
    meaningDeep: "Derived via Uṇādi 1.7 (`bandheḥ uḥ`) from √bandh ('bandhane' — binding hearts together in loyal kinship), `bandhu` is grouped in Amarakośa (Manuṣyavarga 2.6.34) with `sagotra`, `bāndhava`, `jñāti`, `sva`, and `svajana`. Cāṇakya's classic Nīti verse (`utsave vyasane caiva durbhikṣe rāṣṭraviplave, rājadvāre śmaśāne ca yas tiṣṭhati sa bāndhavaḥ`) defines a true `bandhu` operationally by loyal presence in crisis, while Bhagavadgītā 6.5 (`ātmaiva hy ātmano bandhuḥ`) and Vaiṣṇava devotion (`dīnabandhu`) point inward to disciplined self-mastery and upward to the Supreme Kinsman.",
    padaccheda: [
      { deva: "बध्नाति स्नेहेन इति बन्धुः", iast: "badhnāti snehena iti bandhuḥ", gloss: "binds hearts in enduring loyalty and kinship (√bandh + -u)" },
      { deva: "सगोत्र-बान्धव-ज्ञातयः", iast: "sagotra-bāndhava-jñātayaḥ", gloss: "clan-kin, supportive relatives, agnates" },
      { deva: "बन्धु-स्वजनाः", iast: "bandhu-svajanāḥ", gloss: "kinsmen and one's own people" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.6.34 (Manuṣyavarga); BG 6.5"
    },
    related: ["kutumba", "mitra", "bhratri", "sneha", "bandha"]
  },
  {
    id: "mitra",
    deva: "मित्रम्",
    iast: "mitram",
    stem: "mitra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["friend", "trusted companion", "ally"],
    phoneticAliases: ["mitra", "sakha", "sakhi", "suhrit", "suhrid", "friend", "ally"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "मेदते स्निह्यति मिमीते त्रायते वा व्यसनादिति मित्रम् । वयस्यः स्निग्धः सवया अथ मित्रं सखा सुहृत् ॥",
    lakshanaIast: "medate snihyati mimīte trāyate vā vyasanād iti mitram | vayasyaḥ snigdhaḥ savayā atha mitraṃ sakhā suhṛt ||",
    meaningShort: "A friend (`suhṛt` / `sakhā`) — a trusted, affectionate companion who rejoices in one's good and shields one from harm without ulterior motive.",
    meaningDeep: "Derived via Uṇādi 4.165 (`amimipumidibhyaḥ ktraḥ`) from √mid ('snehe' — feeling unfeigned affection) or √mī / √trai ('shielding from ruin'; Nirukta 10.21), `mitra` exhibits a famous gender distinction in Amarakośa (3.3.182 `mitraḥ sūrye suhṛdi klībam`): masculine `mitraḥ` denotes the Vedic solar Aditya of covenants, while neuter `mitram` denotes a true friend alongside `sakhā` (stem `sakhi`), `vayasya`, and `suhṛt` ('good-hearted benefactor without expectation of return'). Bhartṛhari (*Nītiśataka* 72) celebrates six marks of a noble `san-mitra`: restraining from wrong, yoking to good, guarding confidences, highlighting virtues, standing firm in calamity, and giving generously.",
    padaccheda: [
      { deva: "स्निह्यति त्रायते इति मित्रम्", iast: "snihyati trāyate iti mitram", gloss: "loves sincerely and shields from harm (√mid + -tra)" },
      { deva: "वयस्यः स्निग्धः", iast: "vayasyaḥ snigdhaḥ", gloss: "peer-companion, affectionate confidant" },
      { deva: "मित्रम् सखा सुहृत्", iast: "mitram sakhā suhṛt", gloss: "friend, comrade (`sakhi`), selfless well-wisher (`suhṛd`)" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.8.12, 3.3.182; Nirukta 10.21"
    },
    related: ["maitri", "sneha", "bandhu", "surya", "daya"]
  },
  {
    id: "atithi",
    deva: "अतिथिः",
    iast: "atithiḥ",
    stem: "atithi",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["guest", "traveler", "honored visitor"],
    phoneticAliases: ["atithi", "abhyagata", "prahuna", "agantuka", "guest", "visitor"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "न विद्यते तिथिर्नियतकालो यस्य स अतिथिः । आवेशिक आगन्तुः प्राहुणिकोऽतिथिरभ्यागतश्च ॥",
    lakshanaIast: "na vidyate tithir niyatakālo yasya sa atithiḥ | āveśika āgantuḥ prāhuṇiko 'tithir abhyāgataś ca ||",
    meaningShort: "An honored guest — a traveler arriving at one's threshold without prior appointment of lunar day (`a-tithi`), revered as a living deity.",
    meaningDeep: "Yāska (Nirukta 4.5: `atithir abhyatīto gṛhān bhavati` — one who journeys to houses) and Manusmṛti 3.102 (`ekarātraṃ tu nivasann atithir brāhmaṇaḥ smṛtaḥ, anityaṃ hi sthito yasmāt tasmād atithir ucyate` — 'not staying permanently, arriving without fixed `tithi`') explain `atithi`. Amarakośa (Brahmavarga 2.7.34 & 2.8.13) pairs `atithi` with `āveśika`, `āgantu`, `abhyāgata`, and `prāhuṇika`. Taittirīya Upaniṣad 1.11.2 (`atithidevo bhava`) and Kaṭha Upaniṣad 1.1.7 elevate `atithi-satkāra` (offering seat, water, gentle words, and food) into one of the five daily `mahāyajñas` (`nṛ-yajña`) of householder dharma.",
    padaccheda: [
      { deva: "न विद्यते तिथिः यस्य", iast: "na vidyate tithiḥ yasya", gloss: "arriving without a pre-scheduled lunar date (`a-tithi`)" },
      { deva: "आगन्तुः प्राहुणिकः", iast: "āgantuḥ prāhuṇikaḥ", gloss: "wayfaring visitor, welcomed guest" },
      { deva: "अतिथिः अभ्यागतः", iast: "atithiḥ abhyāgataḥ", gloss: "honored guest at the threshold (`atithidevo bhava`)" }
    ],
    source: {
      grantha: "Manusmṛti, Taittirīyopaniṣad & Amarakośa",
      granthaDeva: "मनुस्मृतिः · तैत्तिरीयोपनिषत् · अमरकोशः",
      author: "Manu & Amarasimha",
      locator: "Manu 3.102; TU 1.11.2; AK 2.7.34"
    },
    related: ["satkara", "griha", "anna", "dvara", "yajna"]
  },
  {
    id: "acarya",
    deva: "आचार्यः",
    iast: "ācāryaḥ",
    stem: "ācārya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["preceptor", "spiritual master", "scholar-teacher", "exemplar of conduct"],
    phoneticAliases: ["acarya", "acharya", "adhyapaka", "upadhyaya", "deshika", "preceptor", "teacher"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "आचारं ग्राहयति आचिनोत्यर्थान् बुद्धिं वेति आचार्यः । उपनीय तु यः शिष्यं वेदमध्यापयेद्द्विजः सकल्पं सरहस्यं च तमाचार्यं प्रचक्षते ॥",
    lakshanaIast: "ācāraṃ grāhayati ācinoty arthān buddhiṃ veti ācāryaḥ | upanīya tu yaḥ śiṣyaṃ vedam adhyāpayed dvijaḥ sakalpaṃ sarahasyaṃ ca tam ācāryaṃ pracakṣate ||",
    meaningShort: "A preceptor or master teacher — one who gathers scriptural meanings, embodies righteous conduct (`ācāra`) in his own life, and imparts liberating wisdom to students.",
    meaningDeep: "Yāska's celebrated threefold etymology in Nirukta 1.4 (`ācāryaḥ kasmāt? ācāraṃ grāhayati, ācinoty arthān, ācinoti buddhim iti vā`) defines the true `ācārya`: (1) he instills ethical character (`ācāra`) by living it himself, (2) he systematically synthesizes scriptural meanings (`arthān ācinoti`), and (3) he cultivates the student's intellect (`buddhim ācinoti`). Amarakośa (Brahmavarga 2.7.7) and Manusmṛti (2.140–141) distinguish `upādhyāya` (instructor in a branch of study) from `ācārya` (who initiates the student and teaches Veda together with Upaniṣadic `rahasya`), revered in `ācāryadevo bhava` (TU 1.11.2) and exemplified by Śrī Madhvācārya (`Śrīmad-Ācārya`).",
    padaccheda: [
      { deva: "आचारम् ग्राहयति", iast: "ācāram grāhayati", gloss: "Nirukta 1.4: instills noble conduct by living example" },
      { deva: "आचिनोति अर्थान् बुद्धिम् च", iast: "ācinoti arthān buddhim ca", gloss: "gathers scriptural meanings and nurtures the student's intellect" },
      { deva: "वेदमध्यापयेत् सरहस्यम्", iast: "vedam adhyāpayet sarahasyam", gloss: "teaches sacred lore together with its philosophical essence" }
    ],
    source: {
      grantha: "Nirukta, Manusmṛti & Amarakośa",
      granthaDeva: "निरुक्तम् · मनुस्मृतिः · अमरकोशः",
      author: "Yāska, Manu & Amarasimha",
      locator: "Nirukta 1.4; Manu 2.140; AK 2.7.7"
    },
    related: ["shishya", "guru", "vidya", "shastra", "shila-virtue"]
  },
  {
    id: "shishya",
    deva: "शिष्यः",
    iast: "śiṣyaḥ",
    stem: "śiṣya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["student", "disciple", "pupil", "seeker of instruction"],
    phoneticAliases: ["shishya", "sisya", "chatra", "chhatra", "antevasin", "vidyarthin", "student", "disciple"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "शासनीयोऽनुशास्यो विद्यया इति शिष्यः । छात्रान्तेवासिनौ शिष्ये ॥",
    lakshanaIast: "śāsanīyo 'nuśāsyo vidyayā iti śiṣyaḥ | chātrāntevāsinau śiṣye ||",
    meaningShort: "A student or disciple — an earnest, receptive seeker worthy of being instructed and refined through sacred learning.",
    meaningDeep: "Formed by Pāṇini 3.1.109 (`etistuśāsvṛdṛjuṣaḥ kyap` — √śās 'anuśiṣṭau' + gerundive `-kyap` with `i`-substitution → `śiṣya`, 'worthy of instruction'), Amarakośa (Brahmavarga 2.7.10) pairs `śiṣya` with two evocative synonyms: `antevāsin` ('dwelling closely in the teacher's `gurukula` presence') and `chātra` (explained by Kṣīrasvāmin from `chatra`, 'umbrella' — one who loyally shelters his preceptor's honor and tradition). In Bhagavadgītā 2.7 (`śiṣyas te 'haṃ śādhi māṃ tvāṃ prapannam`), Arjuna's humble acceptance of discipleship unlocks the entire Gītā teaching.",
    padaccheda: [
      { deva: "अनुशास्यः विद्यया इति शिष्यः", iast: "anuśāsyaḥ vidyayā iti śiṣyaḥ", gloss: "receptive and worthy of instruction (`√śās` + `-kyap`)" },
      { deva: "छात्रः", iast: "chātraḥ", gloss: "pupil who upholds the preceptor's tradition" },
      { deva: "अन्तेवासी", iast: "antevāsī", gloss: "residential disciple learning directly beside the master" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · भगवद्गीता",
      author: "Pāṇini, Amarasimha & Śrī Vedavyāsa",
      locator: "Pāṇini 3.1.109; AK 2.7.10; BG 2.7"
    },
    related: ["acarya", "guru", "vidya", "vinaya", "prashna"]
  },
  {
    id: "vriddha",
    deva: "वृद्धः",
    iast: "vṛddhaḥ",
    stem: "vṛddha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["elder", "sage senior", "mature person", "grown"],
    phoneticAliases: ["vriddha", "vrddha", "sthavira", "jyeshtha", "pravina-vriddha", "elder", "senior"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "वर्धितो वयसा ज्ञानेन शीलेन वा इति वृद्धः । न तेन वृद्धो भवति येनास्य पलितं शिरः यो वै युवाप्यधीयानस्तं देवाः स्थविरं विदुः ॥",
    lakshanaIast: "vardhito vayasā jñānena śīlena vā iti vṛddhaḥ | na tena vṛddho bhavati yenāsya palitaṃ śiraḥ yo vai yuvāpy adhīyānas taṃ devāḥ sthaviraṃ viduḥ ||",
    meaningShort: "An elder (`sthavira`) — one matured in years (`vayo-vṛddha`) or, even more eminently, ripened in wisdom and character (`jñāna-vṛddha`).",
    meaningDeep: "Derived from √vṛdhu ('vṛddhau' — grown, matured; `-kta`), `vṛddha` is paired in Amarakośa (Manuṣyavarga 2.6.42) with `sthavira` ('steadfast in counsel'), `jīna`, and `pravayas`. Classical Sanskrit culture honors both elderliness of age (`abhivādanaśīlasya nityaṃ vṛddhopasevinaḥ`, Manu 2.121 — serving elders nourishes lifespan, knowledge, fame, and strength) and maturity of wisdom: Manusmṛti 2.156 memorably proclaims that gray hair alone does not make an elder; even a youth rich in sacred learning is revered by the gods as `sthavira` (`jñāna-vṛddha`).",
    padaccheda: [
      { deva: "वर्धितः वयसा ज्ञानेन वा", iast: "vardhitaḥ vayasā jñānena vā", gloss: "matured in years, wisdom, and character (√vṛdh + -kta)" },
      { deva: "न तेन वृद्धः पलितम् शिरः", iast: "na tena vṛddhaḥ palitam śiraḥ", gloss: "not by gray hair alone is one truly `vṛddha`" },
      { deva: "अधीयानः स्थविरः", iast: "adhīyānaḥ sthaviraḥ", gloss: "one steeped in wisdom is honored as a true elder" }
    ],
    source: {
      grantha: "Manusmṛti & Amarakośa",
      granthaDeva: "मनुस्मृतिः · अमरकोशः",
      author: "Manu & Amarasimha",
      locator: "Manu 2.121, 2.156; AK 2.6.42"
    },
    related: ["bala-child", "acarya", "sabha", "vinaya", "jnana"]
  },
  {
    id: "rajan",
    deva: "राजा",
    iast: "rājā",
    stem: "rājan",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["king", "sovereign", "monarch", "ruler"],
    phoneticAliases: ["rajan", "raja", "nripa", "bhupa", "parthiva", "mahipati", "narapati", "king", "ruler"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "रञ्जयति प्रजां धर्मेण राजते वा इति राजा । राजा प्रकृतिरञ्जनात् राजा राट् पार्थिवक्ष्माभृन्नृपभूपमहीक्षितः ॥",
    lakshanaIast: "rañjayati prajāṃ dharmeṇa rājate vā iti rājā | rājā prakṛtirañjanāt rājā rāṭ pārthivakṣmābhṛn nṛpabhūpamahīkṣitaḥ ||",
    meaningShort: "A king or sovereign (`nṛpa`) — a ruler whose legitimacy rests upon gladdening and protecting citizens (`prajā-rañjana`) in accordance with dharma.",
    meaningDeep: "While grammatically formed via Uṇādi 1.156 (`rājeḥ kanin`) from √rājṛ ('dīptau' — shining with sovereign majesty, cognate with Latin *rēx*), Kālidāsa (*Raghuvaṃśa* 4.12) and Mahābhārata (Śāntiparva 59.125: `rājā prakṛtirañjanāt`) enshrine the deeper ethical *nirukti* from √rañj: a ruler is truly a `rājā` only insofar as he gladdens (`rañjayati`) his people through just governance, just as `nṛpa` (`nṝn pāti`) means 'protector of human beings'. Amarakośa opens Kṣatriyavarga (2.8.1–2) with `rājan`, `rāṭ`, `pārthiva`, `kṣmābhṛt`, `nṛpa`, `bhūpa`, and `mahīkṣit`, echoed in Kauṭilya's *Arthaśāstra* 1.19.34: `prajāsukhe sukhaṃ rājñaḥ`.",
    padaccheda: [
      { deva: "प्रकृति-रञ्जनात् राजा", iast: "prakṛti-rañjanāt rājā", gloss: "called `rājā` from gladdening the citizens through just rule (√rañj / √rāj)" },
      { deva: "पार्थिव-क्ष्माभृत्", iast: "pārthiva-kṣmābhṛt", gloss: "earth-sovereign, sustainer of the realm" },
      { deva: "नृप-भूप-महीक्षितः", iast: "nṛpa-bhūpa-mahīkṣitaḥ", gloss: "protector of people (`nṛ-pa`), guardian of the land" }
    ],
    source: {
      grantha: "Raghuvaṃśa, Mahābhārata & Amarakośa",
      granthaDeva: "रघुवंशम् · महाभारतम् · अमरकोशः",
      author: "Kālidāsa, Śrī Vedavyāsa & Amarasimha",
      locator: "Raghuvaṃśa 4.12; MBh 12.59.125; AK 2.8.1"
    },
    related: ["praja", "rashtra", "sabha", "nyaya-justice", "rama"]
  },
  {
    id: "praja",
    deva: "प्रजा",
    iast: "prajā",
    stem: "prajā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["people", "citizens", "progeny", "living subjects"],
    phoneticAliases: ["praja", "jana", "prakriti-citizens", "loka-jana", "santati", "people", "citizens"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "प्रजायते इति प्रजा । प्रजा स्यात्सन्ततौ जने प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम् ॥",
    lakshanaIast: "prajāyate iti prajā | prajā syāt santatau jane prajāsukhe sukhaṃ rājñaḥ prajānāṃ ca hite hitam ||",
    meaningShort: "The people, citizens of a commonwealth, or filial progeny — the living community whose welfare is the supreme purpose of governance.",
    meaningDeep: "Formed with suffix `-ḍa` + `-ṭāp` (Pāṇini 3.2.99 / 3.3.100 on `pra` + √jan 'prādurbhāve'), `prajā` unites familial and civic life in Amarakośa (Nānārthavarga 3.3.32: `prajā syāt santatau jane`) — signifying both children (`santati`) and citizens (`jana` / `prakṛti`). This linguistic unity shapes Indian political ethics: Kālidāsa (*Raghuvaṃśa* 1.24: `prajānāṃ vinayādhānād rakṣaṇād bharaṇād api sa pitā pitaras tāsāṃ kevalaṃ janmahetavaḥ`) and Kauṭilya (*Arthaśāstra* 1.19.34) insist that the state exists solely for the flourishing (`yogakṣema`) and education of the `prajā`.",
    padaccheda: [
      { deva: "प्रजायते इति प्रजा", iast: "prajāyate iti prajā", gloss: "born forth into living community (`pra` + √jan)" },
      { deva: "सन्ततौ जने", iast: "santatau jane", gloss: "signifying both offspring and civic populace" },
      { deva: "प्रजा-सुखे प्रजा-हिते", iast: "prajā-sukhe prajā-hite", gloss: "Arthaśāstra 1.19: in the people's happiness and welfare lies the ruler's good" }
    ],
    source: {
      grantha: "Amarakośa & Arthaśāstra",
      granthaDeva: "अमरकोशः · अर्थशास्त्रम्",
      author: "Amarasimha & Kauṭilya",
      locator: "AK 3.3.32; Arthaśāstra 1.19.34"
    },
    related: ["rajan", "rashtra", "sabha", "kutumba", "putra"]
  },
  {
    id: "sabha",
    deva: "सभा",
    iast: "sabhā",
    stem: "sabhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["assembly", "council", "scholarly court", "deliberative hall"],
    phoneticAliases: ["sabha", "parishad", "parisad", "samsad", "samaja", "goshthi", "assembly", "council"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "सह भान्ति विद्वांसो धर्मविदश्चात्रेति सभा । सभा समाजः संसच्च परिषद् न सा सभा यत्र न सन्ति वृद्धाः न ते वृद्धा ये न वदन्ति धर्मम् ॥",
    lakshanaIast: "saha bhānti vidvāṃso dharmavidaś cātreti sabhā | sabhā samājaḥ saṃsac ca pariṣad na sā sabhā yatra na santi vṛddhāḥ na te vṛddhā ye na vadanti dharmam ||",
    meaningShort: "An assembly, council, or scholarly conclave (`pariṣad` / `saṃsad`) — a deliberative gathering where wise elders uphold truth and justice.",
    meaningDeep: "Explained etymologically as `saha bhānti asyām` ('wherein learned peers shine together in reasoned deliberation', `sa` + √bhā), `sabhā` (already paired with `samiti` in Ṛgveda 10.191 and Atharvaveda 7.12 as twin pillars of civic concord) is grouped in Amarakośa (Brahmavarga 2.7.15) with `samāja`, `saṃsad` (modern Sanskrit for parliament), `pariṣad`, `goṣṭhī`, and `samiti`. Vidura-nīti in the *Mahābhārata* (Udyogaparva 35.58) sets the timeless benchmark of institutional integrity: `na sā sabhā yatra na santi vṛddhāḥ, na te vṛddhā ye na vadanti dharmam, nāso dharmo yatra na satyam asti`.",
    padaccheda: [
      { deva: "सह भान्ति अत्र इति सभा", iast: "saha bhānti atra iti sabhā", gloss: "wherein wise peers deliberate luminously together (`sa` + √bhā)" },
      { deva: "समाजः संसत् परिषत्", iast: "samājaḥ saṃsat pariṣat", gloss: "concourse, parliamentary council, learned academy" },
      { deva: "वदन्ति धर्मम्", iast: "vadanti dharmam", gloss: "true elders are those who speak fearless dharma in the assembly" }
    ],
    source: {
      grantha: "Amarakośa & Mahābhārata (Viduranīti)",
      granthaDeva: "अमरकोशः · महाभारतम्",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.7.15; MBh 5.35.58"
    },
    related: ["rajan", "praja", "vriddha", "samvada", "dharma"]
  },
  {
    id: "rashtra",
    deva: "राष्ट्रम्",
    iast: "rāṣṭram",
    stem: "rāṣṭra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["nation", "commonwealth", "realm", "country"],
    phoneticAliases: ["rashtra", "rastra", "janapada", "rajya", "svadesha", "nation", "country"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "राजते शोभते धर्मेण रक्ष्यते च इति राष्ट्रम् । नीवृज्जनपदो देशो विषयो राष्ट्रमस्त्रियाम् वयं राष्ट्रे जागृयाम पुरोहिताः ॥",
    lakshanaIast: "rājate śobhate dharmeṇa rakṣyate ca iti rāṣṭram | nīvṛj janapado deśo viṣayo rāṣṭram astriyām vayaṃ rāṣṭre jāgṛyāma purohitāḥ ||",
    meaningShort: "A nation, country, or commonwealth (`janapada`) — a shared homeland of land, culture, and citizens thriving in vigilant civic harmony.",
    meaningDeep: "Derived via Uṇādi 4.158 (`rājeḥ ṣṭran`) from √rājṛ ('dīptau' — shining forth as an ordered polity), `rāṣṭra` appears already in the Vedic pledge of Yajurveda (VS 9.23): `vayaṃ rāṣṭre jāgṛyāma purohitāḥ` — 'May we remain ever vigilant in the service of the nation!' Amarakośa (Bhūmivarga 2.1.7–8) pairs `rāṣṭra` with `janapada` ('footing of the people'), `nīvṛt`, `deśa`, and `viṣaya`. Kauṭilya's *Arthaśāstra* (6.1, *Saptāṅga-rājya*) analyzes `janapada`/`rāṣṭra` — fertile territory united with industrious, ethical citizens — as the indispensable material-human heart of statehood.",
    padaccheda: [
      { deva: "राजते धर्मेण इति राष्ट्रम्", iast: "rājate dharmeṇa iti rāṣṭram", gloss: "flourishes in sovereign order and justice (√rāj + -ṣṭran)" },
      { deva: "जनपदः देशः विषयः", iast: "janapadaḥ deśaḥ viṣayaḥ", gloss: "populated realm, homeland, territory" },
      { deva: "राष्ट्रे जागृयाम", iast: "rāṣṭre jāgṛyāma", gloss: "YV 9.23: may we remain ever wakeful in the nation" }
    ],
    source: {
      grantha: "Śukla Yajurveda & Amarakośa",
      granthaDeva: "शुक्लयजुर्वेदः · अमरकोशः",
      author: "Amarasimha",
      locator: "YV 9.23; AK 2.1.7–8 (Bhūmivarga)"
    },
    related: ["desha", "praja", "rajan", "nagara", "grama"]
  },
  {
    id: "desha",
    deva: "देशः",
    iast: "deśaḥ",
    stem: "deśa",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["place", "region", "country", "spatial locus"],
    phoneticAliases: ["desha", "desa", "sthana", "bhumibhaga", "vishaya", "place", "region", "country"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "दिश्यते निर्दिश्यतेऽयमिति देशः । नीवृज्जनपदो देशो विषयोऽस्त्री तु वर्तनम् ॥",
    lakshanaIast: "diśyate nirdiśyate 'yam iti deśaḥ | nīvṛj janapado deśo viṣayo 'strī tu vartanam ||",
    meaningShort: "A place, region, homeland, or spatial locus — any designated expanse of land or ontological coordinate (`deśa-kāla`).",
    meaningDeep: "Formed with `-ghañ` from √diś ('atisarjanapradarśanayoḥ' — pointing out or demarcating a region), `deśa` operates across two classic registers. Geographically in Amarakośa (Bhūmivarga 2.1.8), it denotes a country or province (`bhārata-deśa`, `svadeśa`), paired with `janapada` and `viṣaya`. Philosophically across Nyāya, Dharmaśāstra (`deśa-kāla-pātra`, BG 17.20), and Śrī Madhvācārya's ontology (`deśataḥ kālato guṇataś ca pūrṇaḥ`), `deśa` denotes objective spatial location — wherein every finite creature is bounded (`deśa-paricchinna`), whereas Bhagavān Viṣṇu alone pervades all places in plenary fullness.",
    padaccheda: [
      { deva: "निर्दिश्यते अयम् इति देशः", iast: "nirdiśyate ayam iti deśaḥ", gloss: "designated as a distinct region or spatial locus (√diś + -ghañ)" },
      { deva: "नीवृत् जनपदः देशः", iast: "nīvṛt janapadaḥ deśaḥ", gloss: "settled province, commonwealth, region or country" },
      { deva: "विषयः वर्तनम्", iast: "viṣayaḥ vartanam", gloss: "district and sphere of habitation" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.1.8 (Bhūmivarga); BG 17.20"
    },
    related: ["rashtra", "dish", "kala", "nagara", "grama"]
  },
  {
    id: "nagara",
    deva: "नगरम्",
    iast: "nagaram",
    stem: "nagara",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["city", "town", "metropolis", "walled capital"],
    phoneticAliases: ["nagara", "pura", "puri", "pattana", "nagari", "city", "town"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "नगा इव प्रासादाः सन्त्यस्मिन्निति नगरम् । पूः स्त्री पुरी नगरी वा पत्तनं पुटभेदनम् ॥",
    lakshanaIast: "nagā iva prāsādāḥ santy asminn iti nagaram | pūḥ strī purī nagarī vā pattanaṃ puṭabhedanam ||",
    meaningShort: "A city or metropolis (`pura` / `purī`) — an urban center of lofty edifices, civic guilds, trade, learning, and culture.",
    meaningDeep: "Classical commentators (`nagā iva uccaprāsādāḥ santy atra` — having mountain-tall mansions and ramparts) link `nagara` (`nagarī` f., whence *Devanāgarī*, the urbane script of sacred cities, and `nāgarika`, a cultured citizen) with `pura` (`pur` / `purī`, from √pṝ 'pālanapūraṇayoḥ' — protecting and fulfilling residents). Amarakośa opens Puravarga (2.2.1) with `pur`, `purī`, `nagarī` / `nagaram`, `pattana` (port/commercial city), `puṭabhedana` (entrepôt where merchant bales are unsealed), `sthānīya`, and `nigama`. Notice too Kaṭha Upaniṣad 2.2.1 (`puram ekādaśadvāram`) and BG 5.13 (`navadvāre pure`), portraying the human body as a marvelous nine-gated city.",
    padaccheda: [
      { deva: "नगाः इव प्रासादाः अस्मिन्", iast: "nagāḥ iva prāsādāḥ asmin", gloss: "graced with mountain-like edifices (`nagara`)" },
      { deva: "पूः पुरी नगरी", iast: "pūḥ purī nagarī", gloss: "citadel, sacred city, metropolis" },
      { deva: "पत्तनम् पुटभेदनम्", iast: "pattanam puṭabhedanam", gloss: "port-town and mercantile emporium" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.2.1 (Puravarga)"
    },
    related: ["grama", "rashtra", "desha", "griha", "marga"]
  },
  {
    id: "grama",
    deva: "ग्रामः",
    iast: "grāmaḥ",
    stem: "grāma",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["village", "rural community", "hamlet", "musical scale"],
    phoneticAliases: ["grama", "samvasatha", "janapada-grama", "palli", "village", "hamlet"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "ग्रस्यते संहत्य उष्यते जनानामनेन इति ग्रामः । ग्रामः संवसथः स्वरसमूहश्च ॥",
    lakshanaIast: "grasyate saṃhatya uṣyate janānām anena iti grāmaḥ | grāmaḥ saṃvasathaḥ svarasamūhaś ca ||",
    meaningShort: "A village or rural settlement (`saṃvasatha`) — an agrarian community of households, and secondarily an ordered collection (`bhūtagrāma`) or musical scale (`ṣaḍja-grāma`).",
    meaningDeep: "Derived via Uṇādi 1.142 from √gras / √gam ('gathering families together in cooperative settlement'), `grāma` (already attested in Ṛgveda 10.146.1 & 10.127.5) is equated in Amarakośa (Puravarga 2.2.19) with `saṃvasatha` ('shared dwelling-community'). Because `grāma` signifies an organic cluster, compounds like `indriya-grāma` and `bhūta-grāma` (BG 8.19) mean 'multitude/assemblage', while in ancient Gandharva musicology (`ṣaḍja-grāma`, `madhyama-grāma`, AK 1.7.2) `grāma` names the foundational heptatonic parent scale wherein musical notes dwell together like neighbors in a village.",
    padaccheda: [
      { deva: "संहत्य उष्यते अत्र", iast: "saṃhatya uṣyate atra", gloss: "where households dwell together in neighborly concord" },
      { deva: "ग्रामः संवसथः", iast: "grāmaḥ saṃvasathaḥ", gloss: "rural village, communal settlement" },
      { deva: "स्वर-समूहः च", iast: "svara-samūhaḥ ca", gloss: "also an assemblage or musical parent-scale" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.2.19, 1.7.2, 3.3.144"
    },
    related: ["nagara", "desha", "kshetra", "griha", "svara"]
  },
  {
    id: "griha",
    deva: "गृहम्",
    iast: "gṛham",
    stem: "gṛha",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["house", "home", "abode", "household"],
    phoneticAliases: ["griha", "grha", "geha", "sadana", "niketana", "veshma", "alaya", "mandira", "house", "home"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "गृह्णाति धान्यादि परिजनं च संवृणोति इति गृहम् । गृहं गेहोदवसितं वेश्म सद्म निकेतनम् निशान्तं सदनं भवनमागारं मन्दिरं च ॥",
    lakshanaIast: "gṛhṇāti dhānyādi parijanaṃ ca saṃvṛṇoti iti gṛham | gṛhaṃ gehodavasitaṃ veśma sadma niketanam niśāntaṃ sadanaṃ bhavanam āgāraṃ mandiraṃ ca ||",
    meaningShort: "A house or home — the sheltered sanctuary where a family dwells, welcomes guests, and practices `gṛhastha-dharma`.",
    meaningDeep: "Formed by Pāṇini 3.1.144 (`gehe kaḥ`: √grah 'upādāne' + `-ka` with `samprasāraṇa` `ra → ṛ` → `gṛha`, neuter in singular and masculine plural `gṛhāḥ` when signifying the household/wife), `gṛha` commands seventeen synonyms in Amarakośa (Puravarga 2.2.4–6): `geha`, `udavasita`, `veśman` (cognate with Latin *vīcus*), `sadman`, `niketana`, `niśānta` ('place of peaceful rest'), `sadana`, `bhavana`, `āgāra`, `mandira`, and `ālaya`. Dharmaśāstra praises the `gṛhastha` home as the sustaining hub supporting students, elders, guests, and renunciants alike.",
    padaccheda: [
      { deva: "गृह्णाति संवृणोति इति गृहम्", iast: "gṛhṇāti saṃvṛṇoti iti gṛham", gloss: "shelters family and sustenance within (√grah + -ka, Pāṇini 3.1.144)" },
      { deva: "गेह-वेश्म-सद्म-निकेतनम्", iast: "geha-veśma-sadma-niketanam", gloss: "home, dwelling, abode, residence" },
      { deva: "सदनम् भवनम् मन्दिरम्", iast: "sadanam bhavanam mandiram", gloss: "resting-seat, house, peaceful sanctuary" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "Pāṇini 3.1.144; AK 2.2.4–6 (Puravarga)"
    },
    related: ["kutumba", "dvara", "shala", "atithi", "patni"]
  },
  {
    id: "dvara",
    deva: "द्वारम्",
    iast: "dvāram",
    stem: "dvāra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["door", "gate", "portal", "means of access"],
    phoneticAliases: ["dvara", "dwara", "dvar", "pratihara", "torana", "gopura", "door", "gate"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "द्वृणोति संवृणोति विवृणोति च प्रवेष्टॄनिति द्वारम् । प्रतीहारो द्वारमस्त्री द्वार् च स्त्री तोरणोऽस्त्रियाम् ॥",
    lakshanaIast: "dvṛṇoti saṃvṛṇoti vivṛṇoti ca praveṣṭṝn iti dvāram | pratīhāro dvāram astrī dvār ca strī toraṇo 'striyām ||",
    meaningShort: "A door, gate, or portal — the threshold opening onto a house, temple, or city, and metaphorically any gateway or means to a goal.",
    meaningDeep: "Yāska (Nirukta 2.2: `dvāraḥ javater vā dravater vā vārayater vā` — through which one hastens in or bars unwanted intrusion, cognate with Greek *thyra* and English *door*) explains both consonant-stem `dvār` (f.) and thematic `dvāra` (n.). Amarakośa (Puravarga 2.2.16) pairs `dvāra` with `pratīhāra` and outer arched `toraṇa`. Philosophically, `dvāra` denotes a mediating channel (`upāya`), as when Yoga-vāsiṣṭha and Vedānta name `śama`, `vicāra`, `santoṣa`, and `sādhu-saṅga` the four auspicious gatekeepers (`mokṣa-dvāra-pālāḥ`) at the portal of liberation.",
    padaccheda: [
      { deva: "संवृणोति विवृणोति च", iast: "saṃvṛṇoti vivṛṇoti ca", gloss: "bars intrusion and opens welcome passage (`dvāra`)" },
      { deva: "प्रतीहारः द्वारम् द्वाः", iast: "pratīhāraḥ dvāram dvāḥ", gloss: "threshold doorway, gate, portal" },
      { deva: "तोरणः", iast: "toraṇaḥ", gloss: "festooned outer gateway arch" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 2.2; AK 2.2.16 (Puravarga)"
    },
    related: ["griha", "shala", "nagara", "atithi", "mukha"]
  },
  {
    id: "shala",
    deva: "शाला",
    iast: "śālā",
    stem: "śālā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["hall", "school", "pavilion", "dedicated chamber"],
    phoneticAliases: ["shala", "sala", "pathashala", "yajnashala", "mandapa", "hall", "school"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "शालते शोभते विद्यायज्ञादिभिरिति शाला । शाला सभा च मण्डपोऽस्त्री ॥",
    lakshanaIast: "śālate śobhate vidyāyajñādibhir iti śālā | śālā sabhā ca maṇḍapo 'strī ||",
    meaningShort: "A spacious hall, pavilion, or school (`pāṭhaśālā`) — a dedicated architectural wing consecrated to learning, hospitality, healing, or worship.",
    meaningDeep: "Derived from √śālṛ ('ślāghāyāṃ śobhāyāṃ ca' — shining with spaciousness and purposeful dignity, cognate with German *Saal* and French *salle*), `śālā` is treated in Amarakośa (Puravarga 2.2.7–10) as a large hall or specialized building wing, generating vital civic compounds across Sanskrit culture: `pāṭhaśālā` (house of study), `yajñaśālā` (sacred fire-pavilion), `ārogyaśālā` / `cikitsāśālā` (infirmary), `citraśālā` (art gallery), `gośālā` (cow-sanctuary), and `dharmaśālā` (charitable rest-house for pilgrims).",
    padaccheda: [
      { deva: "शालते शोभते इति शाला", iast: "śālate śobhate iti śālā", gloss: "shines as a spacious, purposeful hall (√śāl)" },
      { deva: "शाला सभा", iast: "śālā sabhā", gloss: "hall, assembly chamber (`pāṭhaśālā`, `dharmaśālā`)" },
      { deva: "मण्डपः", iast: "maṇḍapaḥ", gloss: "pillared pavilion" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.2.7–9 (Puravarga)"
    },
    related: ["griha", "dvara", "sabha", "vidya", "acarya"]
  },
  {
    id: "anna",
    deva: "अन्नम्",
    iast: "annam",
    stem: "anna",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["food", "cooked grain", "nourishment", "sustenance"],
    phoneticAliases: ["anna", "annam", "bhojana", "ahara", "bhakta", "odana", "andhas", "food", "grain"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "अद्यते भक्ष्यते भूतेरत्ति भूतानि चेति अन्नम् । भिक्षा अन्नमन्धो भक्तमोदनोऽस्त्री च अन्नं न निन्द्यात् अन्नं बहु कुर्वीत ॥",
    lakshanaIast: "adyate bhakṣyate bhūtair atti bhūtāni ceti annam | bhikṣā annam andho bhaktam odano 'strī ca annaṃ na nindyāt annaṃ bahu kurvīta ||",
    meaningShort: "Food, cooked grain, or vital nourishment (`bhojana` / `āhāra`) — the material sustainer of all embodied creatures.",
    meaningDeep: "Grammatically formed from √ad ('bhakṣaṇe' — to eat) + `-kta` (`ad` + `-ta` → `anna` by Pāṇini 8.2.42 *radābhyāṃ niṣṭhāto naḥ pūrvasya ca daḥ*), `anna` is paired in Amarakośa (Vaiśyavarga 2.9.48) with `andhas`, `bhakta`, `odana`, and `āhāra`. Taittirīya Upaniṣad (2.2.1 & 3.7–9: `adyate 'tti ca bhūtāni tasmād annam tad ucyate`) venerates `anna` as the eldest sustenance of beings, enshrining three golden vows (`anna-vrata`): never disparage food (`annaṃ na nindyāt`), never waste or spurn it (`annaṃ na paricakṣīta`), and cultivate and share it abundantly (`annaṃ bahu kurvīta`).",
    padaccheda: [
      { deva: "अद्यते भूतेः इति अन्नम्", iast: "adyate bhūtaiḥ iti annam", gloss: "partaken by living beings as sustenance (`√ad` + `-ta` → `anna`)" },
      { deva: "अन्धः भक्तम् ओदनः", iast: "andhaḥ bhaktam odanaḥ", gloss: "nourishment, prepared meal, cooked grain" },
      { deva: "अन्नम् न निन्द्यात् बहु कुर्वीत", iast: "annam na nindyāt bahu kurvīta", gloss: "TU 3.7–9: honor food reverently and share it generously" }
    ],
    source: {
      grantha: "Taittirīyopaniṣad, Aṣṭādhyāyī & Amarakośa",
      granthaDeva: "तैत्तिरीयोपनिषत् · अष्टाध्यायी · अमरकोशः",
      author: "Pāṇini & Amarasimha",
      locator: "TU 2.2.1, 3.7–9; Pāṇini 8.2.42; AK 2.9.48"
    },
    related: ["kshudha", "vrishti", "kshira", "ghrita", "atithi"]
  },
  {
    id: "kshira",
    deva: "क्षीरम्",
    iast: "kṣīram",
    stem: "kṣīra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["milk", "wholesome dairy nectar", "milky sap"],
    phoneticAliases: ["kshira", "ksira", "dugdha", "payas", "stanya", "milk"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "क्षरति प्रस्नवति धेनोः स्तनादिति क्षीरम् । दुग्धं क्षीरं पयः समाः ॥",
    lakshanaIast: "kṣarati prasnavati dhenoḥ stanād iti kṣīram | dugdhaṃ kṣīraṃ payaḥ samāḥ ||",
    meaningShort: "Milk — the pure, sāttvika, strength-giving white fluid yielded affectionately by mother and cow.",
    meaningDeep: "Derived via Uṇādi 2.25 (`ghasi-kṣari-hasi... īran`) from √kṣar ('sañcalane' — flowing gently in nourishing streams), `kṣīra` forms Amarakośa's crisp three-word equation (Vaiśyavarga 2.9.51): `dugdhaṃ kṣīraṃ payaḥ`. In Āyurveda (*Aṣṭāṅgahṛdaya* Sūtrasthāna 5.20), fresh cow's milk is lauded as `jīvanīya` and `rasāyana` (rejuvenating body and `ojas`), in Vedānta `nīra-kṣīra-viveka` (the swan separating milk from water) symbolizes keen discrimination (`viveka`), and in Purāṇic cosmology the `Kṣīrasāgara` (Ocean of Milk) is the luminous abode of Śrīman Nārāyaṇa.",
    padaccheda: [
      { deva: "क्षरति प्रस्नवति इति क्षीरम्", iast: "kṣarati prasnavati iti kṣīram", gloss: "flows gently as nourishing white nectar (√kṣar + -īra)" },
      { deva: "दुग्धम् क्षीरम् पयः", iast: "dugdham kṣīram payaḥ", gloss: "drawn milk, `kṣīra`, wholesome `payas`" },
      { deva: "समाः", iast: "samāḥ", gloss: "exact classical synonyms in Amarakośa" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 2.9.51 (Vaiśyavarga)"
    },
    related: ["go-cow", "ghrita", "anna", "hamsa", "amrita"]
  },
  {
    id: "ghrita",
    deva: "घृतम्",
    iast: "ghṛtam",
    stem: "ghṛta",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["clarified butter", "ghee", "sacrificial oblation", "lucid brilliance"],
    phoneticAliases: ["ghrita", "ghrta", "ajya", "sarpis", "havis", "ghee", "clarified butter"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "जिघ्रति दीप्यतेऽनेनाग्निः क्षरति वा इति घृतम् । घृतमाज्यं हविः सर्पिः ॥",
    lakshanaIast: "jighrati dīpyate 'nenāgniḥ kṣarati vā iti ghṛtam | ghṛtam ājyaṃ haviḥ sarpiḥ ||",
    meaningShort: "Clarified butter (ghee) — golden essence churned and clarified from milk, nourishing memory (`medhā`), lamps, and Vedic fire-offerings.",
    meaningDeep: "Derived from √ghṛ ('kṣaraṇadīptyoḥ' — melting into golden liquid and kindling radiant flame; `-kta`), `ghṛta` is grouped in Amarakośa (Vaiśyavarga 2.9.52) with `ājya` (consecrated liquid oblation), `havis` (sacred offering), and `sarpis` (smoothly spreading clarified butter). Āyurveda prizes `ghṛta` above all lipids for kindling digestive `agni`, soothing `vāta-pitta`, and sharpening `smṛti`, `dhī`, and `medhā` (`smṛtibuddhimedhāgnikārakam`), while Vedānta invokes `kṣīra-ghṛta-nyāya` — just as invisible ghee pervades milk and manifests through churning (`manthana`), Paramātman pervades creation and shines forth through steady `dhyāna`.",
    padaccheda: [
      { deva: "दीप्यते अग्निः क्षरति च इति घृतम्", iast: "dīpyate agniḥ kṣarati ca iti ghṛtam", gloss: "melts luminously and kindles flame (√ghṛ + -ta)" },
      { deva: "घृतम् आज्यम्", iast: "ghṛtam ājyam", gloss: "clarified butter, consecrated oblation" },
      { deva: "हविः सर्पिः", iast: "haviḥ sarpiḥ", gloss: "sacred fire-offering, golden `sarpis`" }
    ],
    source: {
      grantha: "Amarakośa & Nirukta",
      granthaDeva: "अमरकोशः · निरुक्तम्",
      author: "Amarasimha & Yāska",
      locator: "AK 2.9.52 (Vaiśyavarga); Nirukta 7.24"
    },
    related: ["kshira", "go-cow", "agni", "yajna", "dipa"]
  },
  {
    id: "madhu",
    deva: "मधु",
    iast: "madhu",
    stem: "madhu",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["honey", "sweetness", "floral nectar", "vernal month"],
    phoneticAliases: ["madhu", "makshika", "kshaudra", "madhurya", "honey", "sweetness"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "मन्दन्ते तृप्यन्ति अनेन जना इति मधु । मधु क्षौद्रं माक्षिकं च मधु मद्ये पुष्परसे क्षौद्रे चैत्रे च वत्सरे ॥",
    lakshanaIast: "mandante tṛpyanti anena janā iti madhu | madhu kṣaudraṃ mākṣikaṃ ca madhu madye puṣparase kṣaudre caitre ca vatsare ||",
    meaningShort: "Honey, floral nectar, or pure sweetness (`mādhurya`) — gathered by bees from myriad blossoms, and also the vernal month of Caitra.",
    meaningDeep: "Derived via Uṇādi 1.18 (`manyateḥ uḥ ca dhaḥ`) from √man ('delighting and gladdening', cognate with Greek *methy* and English *mead*), `madhu` is paired in Amarakośa (Vaiśyavarga 2.9.108 & Nānārthavarga 3.3.100) with `kṣaudra` and `mākṣika` for golden bee-honey, `puṣparasa` for floral nectar, and `Caitra` / `Vasanta` for blossom-rich spring. Bṛhadāraṇyaka Upaniṣad's *Madhu-vidyā* (2.5.1: `iyaṃ pṛthivī sarveṣāṃ bhūtānāṃ madhu`) and the Ṛgvedic *Madhu-vātā* prayer (RV 1.90.6–8: `madhu vātā ṛtāyate madhu kṣaranti sindhavaḥ`) celebrate cosmic interdependence as pure sweetness sustained by `Madhusūdana`.",
    padaccheda: [
      { deva: "मन्दन्ते तृप्यन्ति अनेन", iast: "mandante tṛpyanti anena", gloss: "delights and sweetens life (`madhu`)" },
      { deva: "क्षौद्रम् माक्षिकम्", iast: "kṣaudram mākṣikam", gloss: "golden bee-gathered honey" },
      { deva: "पुष्प-रसे चैत्रे च", iast: "puṣpa-rase caitre ca", gloss: "also floral nectar and the vernal month Caitra" }
    ],
    source: {
      grantha: "Amarakośa, Ṛgveda & Bṛhadāraṇyakopaniṣad",
      granthaDeva: "अमरकोशः · ऋग्वेदः · बृहदारण्यकोपनिषत्",
      author: "Amarasimha",
      locator: "AK 2.9.108, 3.3.100; RV 1.90.6; BAU 2.5.1"
    },
    related: ["bhramara", "pushpa", "rasa", "vasanta", "madhusudana"]
  },
  {
    id: "vastra",
    deva: "वस्त्रम्",
    iast: "vastram",
    stem: "vastra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["garment", "cloth", "raiment", "woven attire"],
    phoneticAliases: ["vastra", "vasana", "ambara-cloth", "celam", "dukula", "amshuka", "garment", "cloth"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "वस्ते आच्छादयति शरीरमनेन इति वस्त्रम् । वस्त्रमाच्छादनं वासश्चैलं वसनमंशुकम् अम्बरं च ॥",
    lakshanaIast: "vaste ācchādayati śarīram anena iti vastram | vastram ācchādanaṃ vāsaś cailaṃ vasanam aṃśukam ambaraṃ ca ||",
    meaningShort: "A garment or woven cloth — attire worn to clothe, protect, and dignify the human body.",
    meaningDeep: "Formed instrumentally via Uṇādi 4.160 (`vaseḥ ṣṭran`) from second-gaṇa √vasa ('ācchādane' — `vaste`, to wear, clothe, cognate with Latin *vestis* and English *vestment*), `vastra` is grouped in Amarakośa (Manuṣyavarga 2.6.115) with `ācchādana`, `vāsas`, `caila`, `vasana`, `aṃśuka` ('fine-threaded silk/cotton'), `dukūla`, and `ambara`. In Nyāya-Vedānta causal debates (`tantu-paṭa-nyāya`), threads (`tantavaḥ`) woven into cloth (`paṭa` / `vastra`) illustrate material causation, while Bhagavadgītā 2.22 (`vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi`) compares transmigration to changing worn garments for fresh ones.",
    padaccheda: [
      { deva: "वस्ते आच्छादयति अनेन", iast: "vaste ācchādayati anena", gloss: "that wherewith the body is clothed and dignified (√vas + -tra)" },
      { deva: "आच्छादनम् वासः चैलम्", iast: "ācchādanam vāsaḥ cailam", gloss: "covering, raiment, woven cloth" },
      { deva: "वसनम् अंशुकम् अम्बरम्", iast: "vasanam aṃśukam ambaram", gloss: "attire, fine fabric, garment" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.6.115 (Manuṣyavarga); BG 2.22"
    },
    related: ["sharira", "kala-art", "shilpa", "patra", "kutumba"]
  },
  {
    id: "patra",
    deva: "पात्रम्",
    iast: "pātram",
    stem: "pātra",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["vessel", "cup", "worthy recipient", "dramatic character"],
    phoneticAliases: ["patra", "bhajana", "bhanda", "kalasha", "supatra", "vessel", "recipient"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "पीयते अस्मिन्ननेन वा रक्षति रसं गुणं चेति पात्रम् । आवपनं भाण्डं पात्रं भाजनं च योग्ये नाट्यानुकारिणि च ॥",
    lakshanaIast: "pīyate asminn anena vā rakṣati rasaṃ guṇaṃ ceti pātram | āvapanaṃ bhāṇḍaṃ pātraṃ bhājanaṃ ca yogye nāṭyānukāriṇi ca ||",
    meaningShort: "A vessel, bowl, or cup (`bhājana`) — and by ethical and dramatic extension, a worthy recipient of knowledge or charity (`supātra`) and a dramatic character on stage.",
    meaningDeep: "Formed instrumentally via Uṇādi 4.169 (`pā-ghrā-dhmā... ṣṭran`) from √pā ('pāne' — that from which water or soma is drunk, or √pā 'rakṣaṇe' — holding contents safely), `pātra` spans three classical realms in Amarakośa (Vaiśyavarga 2.9.32 & Nānārthavarga 3.3.180): (1) household or ritual vessel (`bhāṇḍa`, `bhājana`, `kalaśa`), (2) dramatic actor/role embodying `rasa` in `nāṭaka`, and (3) a morally deserving person (`pātratvād dhanam āpnoti`, Hitopadeśa 0.6 — 'education confers humility, from humility comes true worthiness `pātratā`, from worthiness prosperity, and from prosperity dharma').",
    padaccheda: [
      { deva: "पीयते रक्ष्यते वा अस्मिन्", iast: "pīyate rakṣyate vā asmin", gloss: "vessel wherein liquid or virtue is held safely (√pā + -tra)" },
      { deva: "भाण्डम् पात्रम् भाजनम्", iast: "bhāṇḍam pātram bhājanam", gloss: "utensil, cup, receptacle" },
      { deva: "योग्ये नाट्य-अनुकारिणि च", iast: "yogye nāṭya-anukāriṇi ca", gloss: "also a worthy recipient (`supātra`) and dramatic character" }
    ],
    source: {
      grantha: "Amarakośa & Hitopadeśa",
      granthaDeva: "अमरकोशः · हितोपदेशः",
      author: "Amarasimha & Nārāyaṇa Paṇḍita",
      locator: "AK 2.9.32, 3.3.180; Hitopadeśa Prastāvanā 6"
    },
    related: ["dana", "vinaya", "nataka", "griha", "anna"]
  },
  {
    id: "asana",
    deva: "आसनम्",
    iast: "āsanam",
    stem: "āsana",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["seat", "posture", "abiding steadiness", "throne"],
    phoneticAliases: ["asana", "pitha", "vishtara", "simhasana", "yogasana", "seat", "posture"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "आस्यते उपविश्यते अस्मिन्ननेन प्रकारेण वेति आसनम् । आसनं विष्टरः पीठं स्थिरसुखमासनम् ॥",
    lakshanaIast: "āsyate upaviśyate asminn anena prakāreṇa veti āsanam | āsanaṃ viṣṭaraḥ pīṭhaṃ sthirasukham āsanam ||",
    meaningShort: "A seat (`pīṭha` / `viṣṭara`) offered in hospitality or authority, and in Yoga the poised, effortless bodily posture conducive to meditation.",
    meaningDeep: "Derived locatively and instrumentally (`āsyate 'smin` / `'nena`, Pāṇini 3.3.117) from second-gaṇa √āsa ('upaveśane' — to sit poised), `āsana` is paired in Amarakośa (2.6.138 & 2.7.34) with `viṣṭara` (sacred grass-seat offered first to an `atithi`) and `pīṭha` (wooden or royal seat, `siṃhāsana`). In Patañjali's *Yogasūtra* 2.46 (`sthirasukham āsanam`) and Bhagavadgītā 6.11–13 (`samaṃ kāyaśirogrīvaṃ dhārayann acalaṃ sthiraḥ`), `āsana` forms the third limb of `aṣṭāṅga-yoga`, harmonizing bodily steadiness (`sthairya`) with effortless ease (`sukha`) for `dhyāna`.",
    padaccheda: [
      { deva: "आस्यते उपविश्यते अस्मिन्", iast: "āsyate upaviśyate asmin", gloss: "that upon which or whereby one sits poised (√ās + -ana)" },
      { deva: "विष्टरः पीठम्", iast: "viṣṭaraḥ pīṭham", gloss: "hospitality seat, raised bench or throne" },
      { deva: "स्थिर-सुखम् आसनम्", iast: "sthira-sukham āsanam", gloss: "YS 2.46: yogic posture that is both steady and comfortable" }
    ],
    source: {
      grantha: "Amarakośa & Yogasūtra",
      granthaDeva: "अमरकोशः · योगसूत्रम्",
      author: "Amarasimha & Patañjali",
      locator: "AK 2.6.138; YS 2.46; BG 6.11"
    },
    related: ["dhyana", "sharira", "satkara", "atithi", "griha"]
  },
  {
    id: "dhana",
    deva: "धनम्",
    iast: "dhanam",
    stem: "dhana",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["wealth", "treasure", "prosperity", "patrimony"],
    phoneticAliases: ["dhana", "vitta", "vasu", "sampad", "arthasampatti", "dravyam", "riktha", "wealth"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "धिनोति प्रीणयति लोकानुपकाराय इति धनम् । द्रव्यं वित्तं स्वापतेयं रिक्थमृक्थं धनं वसु हिरण्यं द्रविणं द्युम्नमर्थरैविभवा अपि ॥",
    lakshanaIast: "dhinoti prīṇayati lokān upakārāya iti dhanam | dravyaṃ vittaṃ svāpateyaṃ riktham ṛkthaṃ dhanaṃ vasu hiraṇyaṃ draviṇaṃ dyumnam artharai-vibhavā api ||",
    meaningShort: "Wealth or prosperity (`vitta` / `vasu`) — material resources rightly earned (`dharmārjita`) to sustain family, society, charity, and sacred duty.",
    meaningDeep: "Yāska (Nirukta 3.9: `dhanaṃ kasmāt? dhinotīti sataḥ`, from √dhi 'prīṇane' — gladdening and sustaining households) explains `dhana`, for which Amarakośa (Vaiśyavarga 2.9.90) gives twelve synonyms: `dravya`, `vitta` (from √vid, 'acquired'), `svāpateya`, `riktha`, `vasu`, `hiraṇya`, `draviṇa`, `dyumna`, `artha`, `rai`, and `vibhava`. Bhartṛhari (*Nītiśataka* 43) teaches that wealth has three destinies — `dāna` (generous giving), `bhoga` (wholesome enjoyment), or `nāśa` (loss) — while spiritual wisdom honors contentment (`santoṣadhana`) and learning (`vidyādhanaṃ sarvadhanapradhānam`) as imperishable wealth.",
    padaccheda: [
      { deva: "धिनोति प्रीणयति इति धनम्", iast: "dhinoti prīṇayati iti dhanam", gloss: "sustains and gladdens human life (√dhi + -ana, Nirukta 3.9)" },
      { deva: "द्रव्यम् वित्तम् स्वापतेयम्", iast: "dravyam vittam svāpateyam", gloss: "substance, acquired wealth, rightful property" },
      { deva: "रिक्थम् धनम् वसु", iast: "riktham dhanam vasu", gloss: "patrimony, prosperity, treasure" }
    ],
    source: {
      grantha: "Nirukta & Amarakośa",
      granthaDeva: "निरुक्तम् · अमरकोशः",
      author: "Yāska & Amarasimha",
      locator: "Nirukta 3.9; AK 2.9.90 (Vaiśyavarga)"
    },
    related: ["artha", "suvarna", "dana", "kosha", "lakshmi"]
  },
  {
    id: "karya",
    deva: "कार्यम्",
    iast: "kāryam",
    stem: "kārya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["work", "duty", "task", "produced effect"],
    phoneticAliases: ["karya", "kartavya", "kritya", "karman-task", "work", "duty", "effect"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "कर्तुमर्हं क्रियया निष्पाद्यं वा कार्यम् । प्रागभावप्रतियोगि कार्यम् कार्यं तु कर्तव्ये हेतुजेऽपि च ॥",
    lakshanaIast: "kartum arhaṃ kriyayā niṣpādyaṃ vā kāryam | prāgabhāvapratiyogi kāryam kāryaṃ tu kartavye hetuje 'pi ca ||",
    meaningShort: "A task, rightful duty (`kartavya`), or produced effect — both what ought to be accomplished through effort and whatever arises from a prior cause.",
    meaningDeep: "Formed by Pāṇini 3.1.124 (`ṛhalor ṇyat` — √kṛ + gerundive `-ṇyat` → `kārya`, 'to be done / producible'), `kārya` unites ethics and metaphysics. Ethically in Bhagavadgītā 3.19 (`tasmād asaktaḥ satataṃ kāryaṃ karma samācara`) and 16.24 (`kāryākāryavyavasthitau`), `kārya` means appointed duty performed without egoistic attachment. Ontologically in Nyāya and Tattvavāda (`prāgabhāvapratiyogi kāryam`, TS 39), an effect (`kārya`) is that which previously had prior non-existence (`prāgabhāva`) and is genuinely brought into manifestation through material (`upādāna`) and efficient (`nimitta`) causes.",
    padaccheda: [
      { deva: "कर्तुम् अर्हम् कार्यम्", iast: "kartum arham kāryam", gloss: "worthy to be done or brought into being (√kṛ + -ṇyat)" },
      { deva: "प्रागभाव-प्रतियोगि", iast: "prāgabhāva-pratiyogi", gloss: "TS 39: counterpositive of prior non-existence (produced effect)" },
      { deva: "कर्तव्ये हेतुजे च", iast: "kartavye hetuje ca", gloss: "signifying both ethical duty and causal product" }
    ],
    source: {
      grantha: "Tarkasaṅgraha & Bhagavadgītā",
      granthaDeva: "तर्कसङ्ग्रहः · भगवद्गीता",
      author: "Annambhaṭṭa & Śrī Vedavyāsa",
      locator: "TS 39; BG 3.19, 16.24"
    },
    related: ["karma", "udyama", "phala", "pragabhava", "dharma"]
  },
  {
    id: "udyama",
    deva: "उद्यमः",
    iast: "udyamaḥ",
    stem: "udyama",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["effort", "enterprise", "diligence", "persevering initiative"],
    phoneticAliases: ["udyama", "purushakara", "utsaha", "prayatna-udyama", "udyoga", "effort", "diligence"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "उद्यम्यते प्रारभ्यते कार्यमनेनेति उद्यमः । उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः ॥",
    lakshanaIast: "udyamyate prārabhyate kāryam aneneti udyamaḥ | udyamena hi sidhyanti kāryāṇi na manorathaiḥ ||",
    meaningShort: "Resolute effort or enterprise (`puruṣakāra` / `utsāha`) — energetic, persevering initiative through which noble undertakings succeed.",
    meaningDeep: "Formed from `ud` + √yam ('uparame / udyamane' — lifting oneself resolutely to the task; Pāṇini 3.3.57 `-ap`), `udyama` is grouped in Amarakośa (Nāṭyavarga 1.7.25 & Sāmānya) with `utsāha` ('buoyant energy', root-bhāva of heroic `vīra-rasa`), `udyoga`, `adhyavasāya`, and `pauruṣa` / `puruṣakāra`. Pañcatantra / Hitopadeśa (Prastāvanā 36) immortalizes its pragmatic ethic: `udyamena hi sidhyanti kāryāṇi na manorathaiḥ, na hi suptasya siṃhasya praviśanti mukhe mṛgāḥ` — 'by diligent effort alone are tasks accomplished, never by mere wishful thinking; deer do not walk into the mouth of a sleeping lion!'",
    padaccheda: [
      { deva: "प्रारभ्यते कार्यम् अनेन", iast: "prārabhyate kāryam anena", gloss: "resolute exertion initiating and sustaining work (`ud` + √yam)" },
      { deva: "उद्यमेन हि सिध्यन्ति कार्याणि", iast: "udyamena hi sidhyanti kāryāṇi", gloss: "by persevering effort indeed do undertakings succeed" },
      { deva: "न मनोरथैः", iast: "na manorathaiḥ", gloss: "never by idle daydreams alone" }
    ],
    source: {
      grantha: "Hitopadeśa & Amarakośa",
      granthaDeva: "हितोपदेशः · अमरकोशः",
      author: "Nārāyaṇa Paṇḍita & Amarasimha",
      locator: "Hitopadeśa 0.36; AK 1.7.25 (`utsāha`)"
    },
    related: ["karya", "prayatna", "abhyasa", "simha", "jaya"]
  },
  {
    id: "seva",
    deva: "सेवा",
    iast: "sevā",
    stem: "sevā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["service", "attentive care", "devotional ministry", "reverent attendance"],
    phoneticAliases: ["seva", "shushrusha", "paricarya", "upasana", "kinkarya", "service"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "सेव्यते आराध्यते गुरुर्जनो भगवान्वा अनया इति सेवा । शुश्रूषा परिचर्या च सेवा अर्चा च उपासना ॥",
    lakshanaIast: "sevyate ārādhyate gurur jano bhagavān vā anayā iti sevā | śuśrūṣā paricaryā ca sevā arcā ca upāsanā ||",
    meaningShort: "Selfless service or reverent attendance (`śuśrūṣā` / `paricaryā`) — devoted care offered to elders, teachers, fellow beings, and the Supreme Lord.",
    meaningDeep: "Derived from √ṣevṛ ('sevane' — to attend upon, cherish, honor) with `-aṅ` + `-ṭāp` (Pāṇini 3.3.104), `sevā` is paired in Amarakośa (Brahmavarga 2.7.35 & Śūdravarga 2.10.17) with `śuśrūṣā` (desiderative of √śru — 'attentive eagerness to listen and serve'), `paricaryā`, and `upāsanā`. Bhagavadgītā 4.34 (`tad viddhi praṇipātena paripraśnena sevayā`) unites `sevā` directly with philosophical inquiry, and in Śrī Madhvācārya's *Tattvavāda* (`tatkarmākaraṇaṃ... sevā`), performing one's civic and compassionate duties (`paropakāra`) as loving tribute (`bhagavat-pūjā`) sanctifies all action.",
    padaccheda: [
      { deva: "आराध्यते अनया इति सेवा", iast: "ārādhyate anayā iti sevā", gloss: "reverent attendance and selfless ministry (√sev)" },
      { deva: "शुश्रूषा परिचर्या", iast: "śuśrūṣā paricaryā", gloss: "attentive willingness to listen and devoted care" },
      { deva: "अर्चा उपासना", iast: "arcā upāsanā", gloss: "worshipful honor and loving service" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 2.7.35, 2.10.17; BG 4.34"
    },
    related: ["bhakti", "vinaya", "acarya", "daya", "dana"]
  },
  {
    id: "dana",
    deva: "दानम्",
    iast: "dānam",
    stem: "dāna",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["generosity", "gift", "charity", "almsgiving"],
    phoneticAliases: ["dana", "daana", "tyaga-dana", "utsarga", "vitarana", "generosity", "charity", "gift"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "दीयते स्वस्वत्वनिवृत्तिपूर्वकं परस्वत्वापादनमनेनेति दानम् । दातव्यमिति यद्दानं दीयतेऽनुपकारिणे देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ॥",
    lakshanaIast: "dīyate svasvatvanivṛttipūrvakaṃ parasvatvāpādanam aneneti dānam | dātavyam iti yad dānaṃ dīyate 'nupakāriṇe deśe kāle ca pātre ca tad dānaṃ sāttvikaṃ smṛtam ||",
    meaningShort: "Generosity or charitable giving — wholeheartedly relinquishing one's own claim to bestow a gift upon another without expectation of return.",
    meaningDeep: "Derived from √dā ('dāne' — to give; `-lyuṭ`), `dāna` (`tyāga`, `vihāpita`, `utsarga` in Amarakośa 2.7.29) is defined with juridical precision in Dharmaśāstra as `svasvatvanivṛttipūrvaka-parasvatvāpādanam` — extinguishing egoistic ownership so another becomes rightful owner. Bṛhadāraṇyaka Upaniṣad 5.2.3 (`dāmyata, datta, dayadhvam`) enshrining Prajāpati's threefold thunder-syllable `Da-Da-Da`, and Bhagavadgītā 17.20 (`dātavyam iti yad dānaṃ...`) exalt `sāttvika-dāna` — giving food (`annadāna`), knowledge (`vidyādāna`), and safety (`abhayadāna`) purely out of duty at the right place, time, and worthy need.",
    padaccheda: [
      { deva: "दीयते अनेन इति दानम्", iast: "dīyate anena iti dānam", gloss: "wholehearted bestowal relinquishing self-interest (√dā + -ana)" },
      { deva: "दातव्यम् इति अनुपकारिणे", iast: "dātavyam iti anupakāriṇe", gloss: "given purely as duty, expecting no return favor" },
      { deva: "देशे काले पात्रे सात्त्विकम्", iast: "deśe kāle pātre sāttvikam", gloss: "BG 17.20: in fitting place, time, and recipient, such giving is `sāttvika`" }
    ],
    source: {
      grantha: "Bhagavadgītā, Bṛhadāraṇyakopaniṣad & Amarakośa",
      granthaDeva: "भगवद्गीता · बृहदारण्यकोपनिषत् · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 17.20; BAU 5.2.3; AK 2.7.29"
    },
    related: ["dhana", "patra", "daya", "yajna", "hasta"]
  },
  {
    id: "ahimsa",
    deva: "अहिंसा",
    iast: "ahiṃsā",
    stem: "ahiṃsā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["non-harming", "non-violence", "harmlessness", "reverence for life"],
    phoneticAliases: ["ahimsa", "adroha", "anrishamsya", "non-violence", "non-harming"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "सर्वथा सर्वदा सर्वभूतानामनभिद्रोहोऽहिंसा । अहिंसा परमो धर्मः मनसा वाचा कर्मणा च ॥",
    lakshanaIast: "sarvathā sarvadā sarvabhūtānām anabhidroho 'hiṃsā | ahiṃsā paramo dharmaḥ manasā vācā karmaṇā ca ||",
    meaningShort: "Non-harming — refraining in thought, word, and deed from inflicting malice or injury upon any living creature.",
    meaningDeep: "Formed with privative `nañ` (`a-`) + `hiṃsā` (from √hiṃs 'hiṃsāyām' — injury, malice), Vyāsa's *Yogabhāṣya* on Yogasūtra 2.30 (`tatrāhiṃsā sarvathā sarvadā sarvabhūtānām anabhidrohaḥ`) crowns `ahiṃsā` as the root-foundation of all other ethical vows (`yama-niyamāḥ`), because truth, honesty, and self-restraint exist to perfect harmlessness. Mahābhārata (Anuśāsana Parva 115.25: `ahiṃsā paramo dharmaḥ`), Bhagavadgītā 16.2 (`ahiṃsā satyam akrodhaḥ`), and Śrī Madhvācārya's substitution of flour-effigies (`piṣṭa-paśu`) in place of animal injury embody this compassionate ideal.",
    padaccheda: [
      { deva: "सर्व-भूतानाम् अनभिद्रोहः", iast: "sarva-bhūtānām anabhidrohaḥ", gloss: "Yogabhāṣya 2.30: complete absence of malice toward all beings" },
      { deva: "अहिंसा परमः धर्मः", iast: "ahiṃsā paramaḥ dharmaḥ", gloss: "non-harming is the foremost universal dharma" },
      { deva: "मनसा वाचा कर्मणा", iast: "manasā vācā karmaṇā", gloss: "practiced in thought, speech, and action" }
    ],
    source: {
      grantha: "Yogasūtra-bhāṣya, Mahābhārata & Bhagavadgītā",
      granthaDeva: "योगसूत्रभाष्यम् · महाभारतम् · भगवद्गीता",
      author: "Śrī Vedavyāsa & Patañjali",
      locator: "YS 2.30; MBh 13.115.25; BG 16.2"
    },
    related: ["daya", "maitri", "kshama", "pranin", "dharma"]
  },
  {
    id: "daya",
    deva: "दया",
    iast: "dayā",
    stem: "dayā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["compassion", "mercy", "tenderness", "active sympathy"],
    phoneticAliases: ["daya", "karuna", "kripa", "anukampa", "ghrina-mercy", "compassion", "mercy"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "दयते रक्षति परदुःखं प्रमार्ष्टि अनयेति दया । कारुण्यं करुणा घृणा कृपा दयानुकम्पा स्यात् परदुःखप्रहाणेच्छा दया ॥",
    lakshanaIast: "dayate rakṣati paraduḥkhaṃ pramārṣṭi anayeti dayā | kāruṇyaṃ karuṇā ghṛṇā kṛpā dayānukampā syāt paraduḥkhaprahāṇecchā dayā ||",
    meaningShort: "Compassion or mercy (`karuṇā` / `kṛpā`) — the selfless impulse of the heart to relieve the suffering of others without expectation of reward.",
    meaningDeep: "Derived from first-gaṇa Ātmanepada √day ('dānagatirakṣaṇahiṃsādāneṣu' — `dayate`, to protect, share, and shield the vulnerable; Pāṇini 3.3.104 `-aṅ`), `dayā` is grouped in Amarakośa (Nāṭyavarga 1.7.18) with `kāruṇya`, `karuṇā`, `kṛpā`, and `anukampā` ('trembling in empathy alongside another's pain'). Classical Vedāntic ethics defines `dayā` precisely as `svārthānapekṣa-paraduḥkha-prahāṇecchā` ('the uncalculating desire to remove another's sorrow'), celebrated in Bṛhadāraṇyaka 5.2.3 (`dayadhvam`), Bhagavadgītā 16.2 (`dayā bhūteṣu`), and Tattvavāda's teaching that supreme `bhagavat-kṛpā` (`prasāda`) unlocks liberation.",
    padaccheda: [
      { deva: "दयते रक्षति इति दया", iast: "dayate rakṣati iti dayā", gloss: "protects and relieves the afflicted (√day)" },
      { deva: "कारुण्यम् करुणा कृपा अनुकम्पा", iast: "kāruṇyam karuṇā kṛpā anukampā", gloss: "tenderness, mercy, grace, sympathetic resonance" },
      { deva: "पर-दुःख-प्रहाण-इच्छा", iast: "para-duḥkha-prahāṇa-icchā", gloss: "selfless resolve to alleviate the suffering of others" }
    ],
    source: {
      grantha: "Amarakośa, Bṛhadāraṇyakopaniṣad & Bhagavadgītā",
      granthaDeva: "अमरकोशः · बृहदारण्यकोपनिषत् · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.7.18; BAU 5.2.3; BG 16.2"
    },
    related: ["ahimsa", "maitri", "kshama", "dana", "duhkha"]
  },
  {
    id: "maitri",
    deva: "मैत्री",
    iast: "maitrī",
    stem: "maitrī",
    pos: "strīliṅga (f.)",
    englishGlosses: ["friendliness", "benevolence", "amity", "loving-kindness"],
    phoneticAliases: ["maitri", "sakhya", "sauharda", "maitra", "friendliness", "amity", "benevolence"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "मित्रस्य भावः कर्म वा मैत्री । मैत्रीकरुणामुदितोपेक्षणां सुखदुःखपुण्यापुण्यविषयाणां भावनातश्चित्तप्रसादनम् ॥",
    lakshanaIast: "mitrasya bhāvaḥ karma vā maitrī | maitrīkaruṇāmuditopekṣāṇāṃ sukhaduḥkhapuṇyāpuṇyaviṣayāṇāṃ bhāvanātaś cittaprasādanam ||",
    meaningShort: "Active friendliness or universal benevolence — the warm disposition of a true friend (`mitra`) wishing well-being and happiness to all.",
    meaningDeep: "Formed with taddhita `-aṇ` + `-ṅīp` from `mitra` (`mitrasya bhāvaḥ`), `maitrī` (`sauhārda`, `sakhya`) stands first among Patañjali's four luminous heart-purifiers in *Yogasūtra* 1.33: cultivating warm `maitrī` toward the happy (curing envy), `karuṇā` toward the sorrowing, `muditā` (gladness) toward the virtuous, and `upekṣā` (equanimity) toward the erring brings serene lucidity (`citta-prasādana`). Equally, Bhagavadgītā 12.13 opens its portrait of the devotee dearest to Kṛṣṇa with `adveṣṭā sarvabhūtānāṃ maitraḥ karuṇa eva ca` — free from ill-will toward any creature, ever friendly and compassionate.",
    padaccheda: [
      { deva: "मित्रस्य भावः मैत्री", iast: "mitrasya bhāvaḥ maitrī", gloss: "the warm disposition and goodwill of a friend (`mitra`)" },
      { deva: "मैत्री-करुणा-मुदिता-उपेक्षाणाम्", iast: "maitrī-karuṇā-muditā-upekṣāṇām", gloss: "YS 1.33: friendliness, compassion, gladness, and equanimity" },
      { deva: "चित्त-प्रसादनम्", iast: "citta-prasādanam", gloss: "brings crystalline serenity to the heart-mind" }
    ],
    source: {
      grantha: "Yogasūtra & Bhagavadgītā",
      granthaDeva: "योगसूत्रम् · भगवद्गीता",
      author: "Patañjali & Śrī Vedavyāsa",
      locator: "YS 1.33; BG 12.13"
    },
    related: ["mitra", "daya", "ahimsa", "sneha", "shanti"]
  },
  {
    id: "kshama",
    deva: "क्षमा",
    iast: "kṣamā",
    stem: "kṣamā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["forgiveness", "forbearance", "patience", "earth"],
    phoneticAliases: ["kshama", "ksama", "titiksha-kshama", "kshanti", "marsha", "forgiveness", "forbearance", "patience"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "क्षमते सहतेऽपराधं क्रोधं च संहरति अनयेति क्षमा । क्षमा तितिक्षा क्षान्तिश्च क्षमा वीरस्य भूषणम् ॥",
    lakshanaIast: "kṣamate sahate 'parādhaṃ krodhaṃ ca saṃharati anayeti kṣamā | kṣamā titikṣā kṣāntiś ca kṣamā vīrasya bhūṣaṇam ||",
    meaningShort: "Forgiveness or noble forbearance (`kṣānti`) — unruffled composure of mind that pardons offense even when fully capable of retaliation.",
    meaningDeep: "Derived from √kṣamūṣ ('sahane' — `kṣamate`, to bear patiently, forgive; Pāṇini 3.3.104 `-aṅ`), `kṣamā` in Amarakośa (1.7.26 & 2.1.3) names both the virtue of forgiveness (`kṣānti`, `titikṣā`) and Mother Earth herself (`kṣamā` = `pṛthivī`), who patiently bears even those who dig and strike her. Vidura-nīti (*Mahābhārata* 5.33.47: `kṣamā śastram akartṛkam` — 'in the hand of one armed with forgiveness, what harm can the wicked do?') and `kṣamā vīrasya bhūṣaṇam` affirm that forgiveness is not weakness, but the supreme ornament of inner strength (`BG 10.34, 16.3`).",
    padaccheda: [
      { deva: "क्षमते सहते अपराधम्", iast: "kṣamate sahate aparādham", gloss: "pardons offense without vengeful anger (√kṣam)" },
      { deva: "क्षमा तितिक्षा क्षान्तिः", iast: "kṣamā titikṣā kṣāntiḥ", gloss: "forgiveness, patient endurance, forbearance" },
      { deva: "वीरस्य भूषणम्", iast: "vīrasya bhūṣaṇam", gloss: "the crowning ornament of the truly strong" }
    ],
    source: {
      grantha: "Amarakośa, Mahābhārata & Bhagavadgītā",
      granthaDeva: "अमरकोशः · महाभारतम् · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 1.7.26, 2.1.3; MBh 5.33.47; BG 16.3"
    },
    related: ["titiksha", "daya", "shanti", "prithivi", "dhairya"]
  },
  {
    id: "shanti",
    deva: "शान्तिः",
    iast: "śāntiḥ",
    stem: "śānti",
    pos: "strīliṅga (f.)",
    englishGlosses: ["peace", "tranquility", "serenity", "cessation of affliction"],
    phoneticAliases: ["shanti", "santi", "prashanti", "upashama", "nirvriti", "peace", "tranquility"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "शाम्यति उपरमति तापत्रयमनयेति शान्तिः । अशान्तस्य कुतः सुखम् श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥",
    lakshanaIast: "śāmyati uparamati tāpatrayam anayeti śāntiḥ | aśāntasya kutaḥ sukham śraddhāvān labhate jñānaṃ tatparaḥ saṃyatendriyaḥ jñānaṃ labdhvā parāṃ śāntim acireṇādhigacchati ||",
    meaningShort: "Peace or deep inner serenity (`praśānti`) — the stilling of agitation and threefold sorrow (`ādhyātmika, ādhibhautika, ādhidaivika`).",
    meaningDeep: "Formed with `-ktin` (Pāṇini 3.3.94, lengthening `a` to `ā` by 6.4.15 *anunāsikasya kvijhaloḥ kṅiti*) from fourth-gaṇa √śamu ('upaśame' — `śāmyati`, to grow calm and still), `śānti` (`śama`, `upaśama`) frames every Vedic Upaniṣad through the thrice-uttered benediction `Oṃ śāntiḥ śāntiḥ śāntiḥ` — invoking harmony across inner mind, surrounding creatures, and cosmic forces. Bhagavadgītā 2.66 (`aśāntasya kutaḥ sukham` — 'without inner peace, how can there be happiness?') and 4.39 (`parāṃ śāntim`) show that lasting peace flowers from sense-mastery, `jñāna`, and resting in Paramātman (`śāntir āpnoti mām`, BG 5.29).",
    padaccheda: [
      { deva: "शाम्यति ताप-त्रयम् अनया", iast: "śāmyati tāpa-trayam anayā", gloss: "whereby threefold affliction and restlessness subside (√śam + -ti)" },
      { deva: "अशान्तस्य कुतः सुखम्", iast: "aśāntasya kutaḥ sukham", gloss: "BG 2.66: for the unpeaceful mind, whence can happiness arise?" },
      { deva: "पराम् शान्तिम् अधिगच्छति", iast: "parām śāntim adhigacchati", gloss: "BG 4.39: through true knowledge one swiftly attains supreme peace" }
    ],
    source: {
      grantha: "Bhagavadgītā & Upaniṣad Śāntipāṭha",
      granthaDeva: "भगवद्गीता · उपनिषत्-शान्तिपाठः",
      author: "Śrī Vedavyāsa",
      locator: "BG 2.66, 4.39, 5.29; AK 1.7.26"
    },
    related: ["shama", "sukha", "ananda", "kshama", "antariksha"]
  },
  {
    id: "ananda",
    deva: "आनन्दः",
    iast: "ānandaḥ",
    stem: "ānanda",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["bliss", "joy", "felicity", "spiritual beatitude"],
    phoneticAliases: ["ananda", "harsha", "pramoda", "mud", "moda", "ullasa", "joy", "bliss"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "आसमन्तान्नन्दति मोदतेऽनेन इति आनन्दः । मुत्प्रीतिः प्रमदो हर्षः प्रमोदामोदसम्मदाः आनन्दो ब्रह्मेति व्यजानात् ॥",
    lakshanaIast: "āsamantān nandati modate 'nena iti ānandaḥ | mut prītiḥ pramado harṣaḥ pramodāmodasammadāḥ ānando brahmeti vyajānāt ||",
    meaningShort: "Joy or plenary bliss — radiant delight of heart, ascending in Upaniṣadic hierarchy to the infinite, unconditioned Bliss of Brahman.",
    meaningDeep: "Derived from `ā` ('completely, on every side') + √ṭunadi ('samṛddhau' — `nandati`, to rejoice in fullness; `-ghañ`), `ānanda` is grouped in Amarakośa (Nāṭyavarga 1.7.23) with `mud`, `prīti`, `pramada`, `harṣa`, `pramoda`, `āmoda`, and `sammada`. Taittirīya Upaniṣad's *Ānandavallī* (2.8 & 3.6: `ānando brahmeti vyajānāt`) unfolds the celebrated `ānanda-tāratamya` — a hundredfold geometric scale ascending from human joy through celestial sages up to Four-faced Brahmā and culminating in the measureless, self-subsistent `Ānanda` of Bhagavān Viṣṇu, expounded by Śrī Madhvācārya (*Ānandatīrtha*) to prove graded intrinsic bliss even in `mokṣa`.",
    padaccheda: [
      { deva: "आसमन्तात् नन्दति इति आनन्दः", iast: "āsamantāt nandati iti ānandaḥ", gloss: "rejoices in complete, unblemished fullness (`ā` + √nand)" },
      { deva: "मुत् प्रीतिः हर्षः प्रमोदः", iast: "mut prītiḥ harṣaḥ pramodaḥ", gloss: "gladness, delight, exultation, joyous felicity" },
      { deva: "आनन्दः ब्रह्म इति व्यजानात्", iast: "ānandaḥ brahma iti vyajānāt", gloss: "TU 3.6: he realized Supreme Brahman as Sovereign Bliss" }
    ],
    source: {
      grantha: "Taittirīyopaniṣad & Amarakośa",
      granthaDeva: "तैत्तिरीयोपनिषत् · अमरकोशः",
      author: "Amarasimha",
      locator: "TU 2.8, 3.6; AK 1.7.23 (Nāṭyavarga)"
    },
    related: ["sukha", "shanti", "rasa", "brahman", "taratamya"]
  },
  {
    id: "sneha",
    deva: "स्नेहः",
    iast: "snehaḥ",
    stem: "sneha",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["affection", "love", "tenderness", "oiliness", "cohesive moisture"],
    phoneticAliases: ["sneha", "prema", "preman", "priti", "vatsalya", "affection", "love"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "स्निह्यति द्रवीभवति चित्तमनेन इति स्नेहः । चूर्णादिपिण्डीभावहेतुर्गुणः स्नेहः प्रेमा ना प्रियता हार्दं प्रेम स्नेहश्च ॥",
    lakshanaIast: "snihyati dravībhavati cittam anena iti snehaḥ | cūrṇādipiṇḍībhāvahetur guṇaḥ snehaḥ premā nā priyatā hārdaṃ prema snehaś ca ||",
    meaningShort: "Affection or tender love (`preman` / `hārda`) — the warm quality that binds hearts together, mirroring physical cohesion and lamp-oil.",
    meaningDeep: "Derived with `-ghañ` from fourth-gaṇa √ṣṇih ('prītau' — `snihyati`, to feel tender love, be smooth/cohesive), `sneha` possesses one of Sanskrit's most poetic double meanings: in Nyāya physics (`TS 30`), `sneha` is the cohesive viscidity of water/oil that binds dry flour into a single ball (`piṇḍībhāvahetu`) and fuels a glowing `dīpa`; in human life (Amarakośa 1.7.28: `premā priyatā hārdaṃ prema snehaḥ`), `sneha` is heartfelt affection (`vātsalya`, `sakhya`, `anurāga`) that melts isolation and binds souls in enduring care — crowned in Śrī Madhvācārya's *Mahābhāratatātparyanirṇaya* (1.86) where `bhakti` itself is defined as `māhātmyajñānapūrvakas tu sudṛḍhaḥ sarvato 'dhikaḥ snehaḥ`.",
    padaccheda: [
      { deva: "स्निह्यति चित्तम् अनेन", iast: "snihyati cittam anena", gloss: "softens and binds the heart in warm affection (√snih + -ghañ)" },
      { deva: "पिण्डीभाव-हेतुः गुणः", iast: "piṇḍībhāva-hetuḥ guṇaḥ", gloss: "TS 30: physical quality of gentle cohesion and lamp-oil" },
      { deva: "प्रेमा प्रियता हार्दम् स्नेहः", iast: "premā priyatā hārdam snehaḥ", gloss: "love (`preman`), fondness, heartfelt tenderness (`hārda`)" }
    ],
    source: {
      grantha: "Amarakośa, Tarkasaṅgraha & Mahābhāratatātparyanirṇaya",
      granthaDeva: "अमरकोशः · तर्कसङ्ग्रहः · महाभारततात्पर्यनिर्णयः",
      author: "Amarasimha, Annambhaṭṭa & Śrī Madhvācārya",
      locator: "AK 1.7.28; TS 30; MBTN 1.86"
    },
    related: ["bhakti", "mitra", "maitri", "kutumba", "dipa"]
  },
  {
    id: "shraddha",
    deva: "श्रद्धा",
    iast: "śraddhā",
    stem: "śraddhā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["faith", "reverent trust", "earnest conviction", "sincerity"],
    phoneticAliases: ["shraddha", "sraddha", "astikya-buddhi", "vishvasa", "faith", "trust"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "श्रत् सत्यं दधाति धारयति चित्तमनया इति श्रद्धा । आस्तिक्यबुद्धिः श्रद्धा श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ॥",
    lakshanaIast: "śrat satyaṃ dadhāti dhārayati cittam anayā iti śraddhā | āstikyabuddhiḥ śraddhā śraddhāmayo 'yaṃ puruṣo yo yacchraddhaḥ sa eva saḥ ||",
    meaningShort: "Reverent faith or earnest trust — placing one's heart upon truth (`śrat` + √dhā), uniting intellectual respect for valid `śāstra` with wholehearted sincerity.",
    meaningDeep: "Yāska (Nirukta 9.30: `śraddhā śraddadhānāt`, `śrat` = 'satya / truth' in Nighaṇṭu 3.10 + √dhā 'dhāraṇe' + `-aṅ` by Pāṇini 3.3.106, directly cognate with Latin *crēdō* 'I place my heart/trust') reveals that Vedic `śraddhā` (hymned in RV 10.151) is never blind credulity, but `āstikya-buddhi` — serene, receptive confidence in trustworthy guru-śāstra and moral law, likened in *Yogabhāṣya* 1.20 (`sā hi jananīva kalyāṇī yoginaṃ pāti`) to a loving mother protecting the seeker. Bhagavadgītā 17.3 declares `śraddhāmayo 'yaṃ puruṣo yo yacchraddhaḥ sa eva saḥ` — a person is shaped by the quality of their deepest conviction.",
    padaccheda: [
      { deva: "श्रत् सत्यम् दधाति इति श्रद्धा", iast: "śrat satyam dadhāti iti śraddhā", gloss: "holds truth steadfastly within the heart (`śrat` + √dhā)" },
      { deva: "आस्तिक्य-बुद्धिः", iast: "āstikya-buddhiḥ", gloss: "reverent, affirmative conviction in valid truth" },
      { deva: "यः यत्-श्रद्धः सः एव सः", iast: "yaḥ yat-śraddhaḥ saḥ eva saḥ", gloss: "BG 17.3: whatever one's deep conviction, that indeed one becomes" }
    ],
    source: {
      grantha: "Nirukta & Bhagavadgītā",
      granthaDeva: "निरुक्तम् · भगवद्गीता",
      author: "Yāska & Śrī Vedavyāsa",
      locator: "Nirukta 9.30; RV 10.151; BG 4.39, 17.3"
    },
    related: ["jnana", "bhakti", "dana", "tapas", "yajna"]
  },
  {
    id: "tapas",
    deva: "तपः",
    iast: "tapaḥ",
    stem: "tapas",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["austerity", "disciplined ardor", "contemplative focus", "penance"],
    phoneticAliases: ["tapas", "tapah", "tapasya", "vrata", "samyama", "austerity", "discipline"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "तपति दहति कल्मषमालोचयति तत्त्वं वानेन इति तपः । मनसश्चेन्द्रियाणां च ह्यैकाग्र्यं परमं तपः ॥",
    lakshanaIast: "tapati dahati kalmaṣam ālocayati tattvaṃ vānena iti tapaḥ | manasaś cendriyāṇāṃ ca hy aikāgryaṃ paramaṃ tapaḥ ||",
    meaningShort: "Disciplined ardor or spiritual austerity — focused inner heat that refines away dross and gathers mind and senses into one-pointed clarity.",
    meaningDeep: "Derived with `-asun` from √tap ('santāpe / aiśvarye / ālocane' — glowing with purifying ardor and deep reflection, as in Muṇḍaka Upaniṣad 1.1.9 `yasya jñānamayaṃ tapaḥ`, where Paramātman's `tapas` is pure effortless omniscience), `tapas` in human ethics never means self-torture (expressly rejected as `āsura` in BG 17.19). Rather, Mahābhārata (Śāntiparva 250.4: `manasaś cendriyāṇāṃ ca hy aikāgryaṃ paramaṃ tapaḥ`) and Bhagavadgītā 17.14–16 define true `tapas` across three planes: bodily (`śārīra` — purity, `ahiṃsā`, honoring elders), vocal (`vāṅmaya` — truthful, gentle speech), and mental (`mānasa` — serenity, silence, and guileless integrity).",
    padaccheda: [
      { deva: "तपति दहति कल्मषम्", iast: "tapati dahati kalmaṣam", gloss: "refines away impurity like gold in fire (√tap + -as)" },
      { deva: "मनसः इन्द्रियाणाम् च ऐकाग्र्यम्", iast: "manasaḥ indriyāṇām ca aikāgryam", gloss: "one-pointed harmony of mind and senses" },
      { deva: "परमम् तपः", iast: "paramam tapaḥ", gloss: "constitutes the highest spiritual discipline" }
    ],
    source: {
      grantha: "Mahābhārata, Bhagavadgītā & Muṇḍakopaniṣad",
      granthaDeva: "महाभारतम् · भगवद्गीता · मुण्डकोपनिषत्",
      author: "Śrī Vedavyāsa",
      locator: "MBh 12.250.4; BG 17.14–16; Muṇḍaka Up. 1.1.9"
    },
    related: ["shraddha", "yajna", "dana", "shama", "dama"]
  },
  {
    id: "yajna",
    deva: "यज्ञः",
    iast: "yajñaḥ",
    stem: "yajña",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["sacrifice", "worship", "sacred offering", "consecrated service"],
    phoneticAliases: ["yajna", "yagna", "makha", "kratu", "adhvara", "savana", "sacrifice", "worship"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "इज्यते पूज्यते परमात्मा देवाश्च अनेन इति यज्ञः । यज्ञः सप्ततन्तुर्मखः क्रतुरध्वरः यज्ञो वै विष्णुः ॥",
    lakshanaIast: "ijyate pūjyate paramātmā devāś ca anena iti yajñaḥ | yajñaḥ saptatantur makhaḥ kratur adhvaraḥ yajño vai viṣṇuḥ ||",
    meaningShort: "Sacred worship or sacrificial offering (`adhvara`) — any consecrated act of devotion, study, or selfless service offered unto the Supreme.",
    meaningDeep: "Formed by Pāṇini 3.3.90 (`yajayācayatavicchapraccharakṣo naṅ` — √yaj 'devapūjāsaṅgatikaraṇadāneṣu' + `-naṅ` → `yajña`), Dhātupāṭha's own three root-meanings capture the heart of `yajña`: (1) `devapūjā` — reverent worship, (2) `saṅgatikaraṇa` — uniting community and cosmos in harmony, and (3) `dāna` — generous offering. Amarakośa (Brahmavarga 2.7.13) pairs `yajña` with `saptatantu`, `makha`, `kratu`, and `adhvara` (Yāska, Nirukta 1.8: `a-dhvara` = 'devoid of violence/harm'). Crowned by Śatapatha Brāhmaṇa's `yajño vai viṣṇuḥ` and Bhagavadgītā 4.24–33 (`jñānayajña`), every noble act offered without selfishness (`yajñārthāt karmaṇaḥ`, BG 3.9) liberates rather than binds.",
    padaccheda: [
      { deva: "इज्यते पूज्यते अनेन इति यज्ञः", iast: "ijyate pūjyate anena iti yajñaḥ", gloss: "worshipful offering uniting reverence, fellowship, and giving (√yaj + -na)" },
      { deva: "सप्ततन्तुः मखः क्रतुः अध्वरः", iast: "saptatantuḥ makhaḥ kratuḥ adhvaraḥ", gloss: "seven-threaded rite, sacrifice, non-violent `adhvara`" },
      { deva: "यज्ञः वै विष्णुः", iast: "yajñaḥ vai viṣṇuḥ", gloss: "ŚB 1.1.2.13: Viṣṇu Himself is the Lord and Soul of `yajña`" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Amarakośa & Bhagavadgītā",
      granthaDeva: "अष्टाध्यायी · अमरकोशः · भगवद्गीता",
      author: "Pāṇini, Amarasimha & Śrī Vedavyāsa",
      locator: "Pāṇini 3.3.90; AK 2.7.13; BG 3.9, 4.33"
    },
    related: ["dana", "tapas", "agni", "ghrita", "vishnu"]
  },
  {
    id: "dhairya",
    deva: "धैर्यम्",
    iast: "dhairyam",
    stem: "dhairya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["courage", "fortitude", "composure", "steadfastness"],
    phoneticAliases: ["dhairya", "dhriti", "sthairya", "vikrama-dhairya", "courage", "fortitude"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "धीरस्य भावः धैर्यम् । विकारहेतौ सति विक्रियन्ते येषां न चेतांसि त एव धीराः ॥",
    lakshanaIast: "dhīrasya bhāvaḥ dhairyam | vikārahetau sati vikriyante yeṣāṃ na cetāṃsi ta eva dhīrāḥ ||",
    meaningShort: "Courage, fortitude, or unshaken composure (`dhṛti`) — steadiness of heart that remains unperturbed even amidst severe provocation or peril.",
    meaningDeep: "Formed with abstract suffix `-ṣyañ` (Pāṇini 5.1.124) from `dhīra` ('grounded in discerning `dhī` and unshakable resolve'), `dhairya` (`dhṛti` in BG 18.33) is luminously defined by Kālidāsa in *Kumārasambhava* 1.59: `vikārahetau sati vikriyante yeṣāṃ na cetāṃsi ta eva dhīrāḥ` — 'they alone are truly `dhīra` whose minds do not waver even when every cause for perturbation stands before them.' Bhartṛhari (*Nītiśataka* 83) adds that great souls (`mahātmanaḥ`) never deviate from the path of justice whether praised or censured, whether fortune comes or departs (`nyāyyāt pathaḥ pravicalanti padaṃ na dhīrāḥ`).",
    padaccheda: [
      { deva: "धीरस्य भावः धैर्यम्", iast: "dhīrasya bhāvaḥ dhairyam", gloss: "the steadfast fortitude of a wise and resolute mind (`dhīra` + `-ya`)" },
      { deva: "विकार-हेतौ सति", iast: "vikāra-hetau sati", gloss: "even when powerful causes of agitation or temptation arise" },
      { deva: "न विक्रियन्ते चेतांसि", iast: "na vikriyante cetāṃsi", gloss: "whose hearts remain completely unshaken" }
    ],
    source: {
      grantha: "Kumārasambhava & Nītiśataka",
      granthaDeva: "कुमारसम्भवम् · नीतिशतकम्",
      author: "Kālidāsa & Bhartṛhari",
      locator: "KS 1.59; Nītiśataka 83"
    },
    related: ["buddhi", "kshama", "abhaya", "titiksha", "udyama"]
  },
  {
    id: "vinaya",
    deva: "विनयः",
    iast: "vinayaḥ",
    stem: "vinaya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["humility", "modesty", "refined discipline", "courtesy"],
    phoneticAliases: ["vinaya", "namrata", "prashraya", "sushikshana", "humility", "modesty", "courtesy"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "विनीयते शिक्ष्यते इन्द्रियग्रामोऽनेन इति विनयः । विद्या ददाति विनयं विनयाद्याति पात्रताम् विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि ॥",
    lakshanaIast: "vinīyate śikṣyate indriyagrāmo 'nena iti vinayaḥ | vidyā dadāti vinayaṃ vinayād yāti pātratām vidyāvinayasampanne brāhmaṇe gavi hastini ||",
    meaningShort: "Humility, courtesy, and refined self-discipline (`praśraya`) — the graceful absence of arrogance that adorns genuine learning.",
    meaningDeep: "Derived with `-ac` (Pāṇini 3.3.56) from `vi` + √nīñ ('prāpaṇe / śikṣaṇe' — guiding the senses and ego into cultured poise), `vinaya` (`praśraya` in Amarakośa 3.3.149) unites personal humility with educated refinement. Kauṭilya (*Arthaśāstra* 1.5) makes `indriya-jaya` the root of royal `vinaya`, Hitopadeśa 0.6 (`vidyā dadāti vinayam`) makes `vinaya` the first fruit proving whether education has truly taken root (`phalino namrās taravaḥ` — fruit-laden boughs bow low), and Bhagavadgītā 5.18 pairs `vidyā` and `vinaya` (`vidyāvinayasampanne`) as inseparable twin virtues of the sage.",
    padaccheda: [
      { deva: "विनीयते अनेन इति विनयः", iast: "vinīyate anena iti vinayaḥ", gloss: "refined guidance of mind and conduct (`vi` + √nī)" },
      { deva: "विद्या ददाति विनयम्", iast: "vidyā dadāti vinayam", gloss: "true learning bestows unassuming humility" },
      { deva: "विनयात् याति पात्रताम्", iast: "vinayāt yāti pātratām", gloss: "from humility arises genuine worthiness (`pātratā`)" }
    ],
    source: {
      grantha: "Hitopadeśa, Bhagavadgītā & Arthaśāstra",
      granthaDeva: "हितोपदेशः · भगवद्गीता · अर्थशास्त्रम्",
      author: "Nārāyaṇa Paṇḍita, Śrī Vedavyāsa & Kauṭilya",
      locator: "Hitopadeśa 0.6; BG 5.18; Arthaśāstra 1.5"
    },
    related: ["vidya", "patra", "shila-virtue", "shishya", "vriddha"]
  },
  {
    id: "shila-virtue",
    deva: "शीलम्",
    iast: "śīlam",
    stem: "śīla",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["noble character", "integrity", "moral conduct", "disposition"],
    phoneticAliases: ["shila-virtue", "sheela", "sadacara", "vritta", "caritra", "svabhava-shila", "character", "conduct"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "शील्यतेऽभ्यस्यते सद्भिरिति शीलम् । शीलं स्वभावे सद्वृत्ते शीलं परं भूषणम् ॥",
    lakshanaIast: "śīlyate 'bhyasyate sadbhir iti śīlam | śīlaṃ svabhāve sadvṛtte śīlaṃ paraṃ bhūṣaṇam ||",
    meaningShort: "Noble character or moral integrity (`sad-vṛtta` / `sadācāra`) — habitual excellence of disposition practiced consistently in public and private.",
    meaningDeep: "Derived from √śīl ('samādhau / upadhāraṇe' — cultivated until uprightness becomes effortless second nature), `śīla` is defined concisely in Amarakośa (Nānārthavarga 3.3.199 & 1.7.32): `śīlaṃ svabhāve sadvṛtte` — innate disposition and upright conduct. Mahābhārata (Udyogaparva & Śāntiparva 124) lists thirteen hallmarks of `śīla` — truthfulness, self-restraint, non-malice, modesty, generosity, and gratitude — while Bhartṛhari (*Nītiśataka* 82) concludes his enumeration of human virtues with the ringing verdict: `śīlaṃ paraṃ bhūṣaṇam` ('noble character is the supreme ornament of a human being').",
    padaccheda: [
      { deva: "शील्यते सद्भिः इति शीलम्", iast: "śīlyate sadbhiḥ iti śīlam", gloss: "habitually practiced by the upright (√śīl + -ac)" },
      { deva: "स्वभावे सद्वृत्ते", iast: "svabhāve sadvṛtte", gloss: "AK 3.3.199: disposition and exemplary moral conduct" },
      { deva: "शीलम् परम् भूषणम्", iast: "śīlam param bhūṣaṇam", gloss: "Nītiśataka 82: integrity of character is the highest ornament" }
    ],
    source: {
      grantha: "Amarakośa & Nītiśataka",
      granthaDeva: "अमरकोशः · नीतिशतकम्",
      author: "Amarasimha & Bhartṛhari",
      locator: "AK 3.3.199; Nītiśataka 82"
    },
    related: ["vinaya", "dharma", "acarya", "satya", "kirtih"]
  },
  {
    id: "satkara",
    deva: "सत्कारः",
    iast: "satkāraḥ",
    stem: "satkāra",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["hospitality", "reverent honor", "gracious welcome", "respect"],
    phoneticAliases: ["satkara", "adarah", "saparya", "arghya", "pujana", "hospitality", "honor"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "सत्क्रियते पूज्यतेऽतिथिर्गुणवान्वानेन इति सत्कारः । अर्घ्यादिभिः पूजनमादरश्च सत्कारः तृणानि भूमिरुदकं वाक्चतुर्थी च सूनृता ॥",
    lakshanaIast: "satkriyate pūjyate 'tithir guṇavān vānena iti satkāraḥ | arghyādibhiḥ pūjanam ādaraś ca satkāraḥ tṛṇāni bhūmir udakaṃ vāk caturthī ca sūnṛtā ||",
    meaningShort: "Gracious hospitality or honor (`ādara` / `saparyā`) — welcoming guests, elders, and merit with sincere respect and kindness.",
    meaningDeep: "Formed by Pāṇini 1.4.63 (`ādaranādarayoḥ sadasatī` — `sat` and `asat` as `gati` prefixes before √kṛ: `sat` + `kāra` = 'honoring graciously', opposite of `asatkāra` = disrespect), `satkāra` is paired in Amarakośa (2.7.34–35) with `arghya`, `pādya`, `saparyā`, and `ādara`. Manusmṛti 3.101 (`tṛṇāni bhūmir udakaṃ vāk caturthī ca sūnṛtā, etāny api satāṃ gehe nocchidyante kadācana`) teaches that even when material means are modest, true `satkāra` never fails in a noble home: a mat to sit on, space to rest, cool water, and fourth — a warm, truthful word of welcome (`sūnṛtā vāk`).",
    padaccheda: [
      { deva: "सत्-क्रियते पूज्यते अनेन", iast: "sat-kriyate pūjyate anena", gloss: "gracious honoring with sincere respect (`sat` + √kṛ, Pāṇini 1.4.63)" },
      { deva: "पूजनम् आदरः सत्कारः", iast: "pūjanam ādaraḥ satkāraḥ", gloss: "hospitable welcome, esteem, honor" },
      { deva: "भूमिरुदकम् वाक् सूनृता", iast: "bhūmir udakam vāk sūnṛtā", gloss: "Manu 3.101: seat, water, and kind truthful speech" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Manusmṛti & Amarakośa",
      granthaDeva: "अष्टाध्यायी · मनुस्मृतिः · अमरकोशः",
      author: "Pāṇini, Manu & Amarasimha",
      locator: "Pāṇini 1.4.63; Manu 3.101; AK 2.7.34"
    },
    related: ["atithi", "asana", "griha", "vinaya", "seva"]
  },
  {
    id: "kirtih",
    deva: "कीर्तिः",
    iast: "kīrtiḥ",
    stem: "kīrti",
    pos: "strīliṅga (f.)",
    englishGlosses: ["fame", "renown", "good reputation", "glory"],
    phoneticAliases: ["kirtih", "kirti", "yashas", "yasas", "khyati", "pratha", "fame", "renown"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "कीर्त्यते प्रशस्यते सद्भिर्देशान्तरेष्वपि इति कीर्तिः । यशः कीर्तिः समज्ञा च कीर्तिर्यस्य स जीवति ॥",
    lakshanaIast: "kīrtyate praśasyate sadbhir deśāntareṣv api iti kīrtiḥ | yaśaḥ kīrtiḥ samajñā ca kīrtir yasya sa jīvati ||",
    meaningShort: "Unsullied renown or noble reputation (`yaśas`) — the fragrant remembrance earned by righteous deeds, generosity, and scholarship.",
    meaningDeep: "Formed with `-ktin` from tenth-gaṇa √kṝt ('saṃśabdane' — `kīrtayati`, to celebrate, proclaim with praise), `kīrti` is grouped in Amarakośa (Śabdādivarga 1.6.11) with `yaśas` and `samajñā` (later poetics subtly distinguishing `kīrti` born of generosity/piety from `yaśas` born of valor, both pure moonlight-white in poetic convention). Exalted by Śrī Kṛṣṇa in Bhagavadgītā 10.34 (`kīrtiḥ śrīr vāk ca nārīṇām`) and echoed in Subhāṣita wisdom (`sa jīvati guṇā yasya, kīrtir yasya sa jīvati`), spotless `kīrti-kāya` ('the body of good renown', Bhartṛhari *Nītiśataka* 24) outlives mortal age and death.",
    padaccheda: [
      { deva: "कीर्त्यते सद्भिः इति कीर्तिः", iast: "kīrtyate sadbhiḥ iti kīrtiḥ", gloss: "celebrated and remembered by the wise (√kīrt + -ti)" },
      { deva: "यशः कीर्तिः समज्ञा", iast: "yaśaḥ kīrtiḥ samajñā", gloss: "glory, spotless renown, wide repute" },
      { deva: "कीर्तिः यस्य सः जीवति", iast: "kīrtiḥ yasya saḥ jīvati", gloss: "he whose noble renown endures truly lives on" }
    ],
    source: {
      grantha: "Amarakośa, Bhagavadgītā & Nītiśataka",
      granthaDeva: "अमरकोशः · भगवद्गीता · नीतिशतकम्",
      author: "Amarasimha, Śrī Vedavyāsa & Bhartṛhari",
      locator: "AK 1.6.11; BG 10.34; Nītiśataka 24"
    },
    related: ["shloka", "shila-virtue", "dana", "jaya", "mangala"]
  },
  {
    id: "jaya",
    deva: "जयः",
    iast: "jayaḥ",
    stem: "jaya",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["victory", "triumph", "mastery", "epic chronicle of dharma"],
    phoneticAliases: ["jaya", "vijaya", "samjaya", "utkarsha", "victory", "triumph"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "जयति उत्कर्षं प्राप्नोति धर्मेणेति जयः । यतो धर्मस्ततो जयः यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥",
    lakshanaIast: "jayati utkarṣaṃ prāpnoti dharmeṇeti jayaḥ | yato dharmas tato jayaḥ yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanurdharaḥ tatra śrīr vijayo bhūtir dhruvā nītir matir mama ||",
    meaningShort: "Victory or righteous triumph (`vijaya`) — mastery over outer obstacles and inner passions, rooted unfailingly in dharma.",
    meaningDeep: "Formed with `-ac` (`er ac`, Pāṇini 3.3.56) from √ji ('jaye' — `jayati`, to conquer, excel), `jaya` (`vijaya`, AK 2.8.106) is the original sacred title of Vyāsa's *Mahābhārata* (`tato jayam udīrayet`), because its central teaching — expounded across Śrī Madhvācārya's *Mahābhāratatātparyanirṇaya* and *Jayatīrtha*'s commentaries — is `yato dharmas tato jayaḥ` ('wherever Dharma stands, there stands Victory') and `satyam eva jayate` (Muṇḍaka Up. 3.1.6). Bhagavadgītā closes at 18.78 uniting divine grace (`Yogeśvara Kṛṣṇa`) and resolute human effort (`dhanurdhara Pārtha`) as the infallible locus of `śrī`, `vijaya`, and `dhruvā nīti`.",
    padaccheda: [
      { deva: "जयति धर्मेण इति जयः", iast: "jayati dharmeṇa iti jayaḥ", gloss: "triumphs through righteousness and mastery (√ji + -ac)" },
      { deva: "यतः धर्मः ततः जयः", iast: "yataḥ dharmaḥ tataḥ jayaḥ", gloss: "wherever dharma abides, there abides victory" },
      { deva: "श्रीः विजयः ध्रुवा नीतिः", iast: "śrīḥ vijayaḥ dhruvā nītiḥ", gloss: "BG 18.78: auspiciousness, triumph, and unswerving moral policy" }
    ],
    source: {
      grantha: "Mahābhārata, Bhagavadgītā & Amarakośa",
      granthaDeva: "महाभारतम् · भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "MBh 1.1.1, 6.2.14; BG 18.78; AK 2.8.106"
    },
    related: ["dharma", "satya", "udyama", "nyaya-justice", "krishna"]
  },
  {
    id: "mangala",
    deva: "मङ्गलम्",
    iast: "maṅgalam",
    stem: "maṅgala",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["auspiciousness", "well-being", "blessing", "benediction"],
    phoneticAliases: ["mangala", "kalyana", "shubha", "bhadra", "shreyas", "svasti", "auspiciousness", "blessing"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "मङ्गति गच्छति भद्रमनेन अघं वा अपसारयति इति मङ्गलम् । श्वःश्रेयसं शिवं भद्रं कल्याणं मङ्गलं शुभम् भावुकं भविकं भव्यं कुशलं क्षेममस्त्रियाम् ॥",
    lakshanaIast: "maṅgati gacchati bhadram anena aghaṃ vā apasārayati iti maṅgalam | śvaḥśreyasaṃ śivaṃ bhadraṃ kalyāṇaṃ maṅgalaṃ śubham bhāvukaṃ bhavikaṃ bhavyaṃ kuśalaṃ kṣemam astriyām ||",
    meaningShort: "Auspiciousness, holistic well-being, or benediction (`kalyāṇa` / `śubha` / `bhadra`) — whatever removes obstacles and brings enduring good.",
    meaningDeep: "Derived via Uṇādi 5.70 (`maṅger alac`) from √maṅg ('gatau / śubhe' — advancing wholesome good), `maṅgala` inspires one of Amarakośa's most resonant verses (Svargavarga 1.4.25): `śvaḥśreyasa`, `śiva`, `bhadra`, `kalyāṇa`, `maṅgala`, `śubha`, `bhāvuka`, `bhavya`, `kuśala`, `kṣema`, and `svasti`. Every Sanskrit `śāstra` and `kāvya` opens with a `maṅgalācaraṇa` (auspicious invocation of the Supreme Lord — as in Śrī Madhvācārya's `nārāyaṇaṃ nikhilapūrṇaguṇaikadeham`) so that study and life may reach unobstructed completion (`nirvighna-parisamāpti`).",
    padaccheda: [
      { deva: "भद्रम् गच्छति अनेन", iast: "bhadram gacchati anena", gloss: "that whereby auspicious well-being advances (√maṅg + -ala)" },
      { deva: "शिवम् भद्रम् कल्याणम्", iast: "śivam bhadram kalyāṇam", gloss: "benign good, blessedness, welfare" },
      { deva: "मङ्गलम् शुभम् कुशलम् क्षेमम्", iast: "maṅgalam śubham kuśalam kṣemam", gloss: "auspiciousness, radiance, well-being, secure thriving" }
    ],
    source: {
      grantha: "Amarakośa",
      granthaDeva: "अमरकोशः",
      author: "Amarasimha",
      locator: "AK 1.4.25 (Kālavarga/Śubhavarga)"
    },
    related: ["ananda", "shanti", "utsava", "lakshmi", "narayana"]
  },
  {
    id: "svatantrya",
    deva: "स्वातन्त्र्यम्",
    iast: "svātantryam",
    stem: "svātantrya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["freedom", "autonomy", "self-determination", "sovereign independence"],
    phoneticAliases: ["svatantrya", "swatantrya", "svadhinata", "mukti-svatantrya", "freedom", "autonomy", "independence"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "स्वतन्त्रस्य भावः स्वातन्त्र्यम् । स्वतन्त्रः कर्ता स्वरूपप्रमितप्रवृत्त्यादिलक्षणसत्तात्रैविध्ये परानपेक्षत्वं स्वातन्त्र्यम् ॥",
    lakshanaIast: "svatantrasya bhāvaḥ svātantryam | svatantraḥ kartā svarūpapramitapravṛttyādilakṣaṇasattātraividhye parānapekṣatvaṃ svātantryam ||",
    meaningShort: "Freedom, autonomy, or sovereign independence — in grammar and civic life, self-directed agency; in Tattvavāda metaphysics, Paramātman's unique non-dependence upon any other.",
    meaningDeep: "Formed with `-ṣyañ` (Pāṇini 5.1.124) from `svatantra` ('whose loom/governance `tantra` is one's own', celebrated in Pāṇini's agent definition 1.4.54 `svatantraḥ kartā` and Manusmṛti 4.160 `sarvaṃ paravaśaṃ duḥkhaṃ sarvam ātmavaśaṃ sukham` — 'subjugation is sorrow; self-determination is happiness'), `svātantrya` operates on two harmonized levels. Ethically and civically, a human agent possesses real moral choice (`kartṛtva`), never being an inert stone; metaphysically in Śrī Madhvācārya's *Tattvasaṅkhyāna* (`svatantram asvatantraṃ ca`), absolute `svātantrya` (`parānapekṣatva` in essence, knowledge, and power) belongs exclusively to Bhagavān Viṣṇu, who graciously empowers finite freedom.",
    padaccheda: [
      { deva: "स्वतन्त्रस्य भावः स्वातन्त्र्यम्", iast: "svatantrasya bhāvaḥ svātantryam", gloss: "the state of autonomy or sovereign self-governance (`svatantra` + `-ya`)" },
      { deva: "स्वतन्त्रः कर्ता", iast: "svatantraḥ kartā", gloss: "Pāṇini 1.4.54: the autonomous initiator of action is `kartṛ`" },
      { deva: "पर-अनपेक्षत्वम्", iast: "para-anapekṣatvam", gloss: "Tattvasaṅkhyāna: plenary non-dependence belonging uniquely to Viṣṇu" }
    ],
    source: {
      grantha: "Aṣṭādhyāyī, Manusmṛti & Tattvasaṅkhyāna-ṭīkā",
      granthaDeva: "अष्टाध्यायी · मनुस्मृतिः · तत्त्वसङ्ख्यानटीका",
      author: "Pāṇini, Śrī Madhvācārya & Śrī Jayatīrtha",
      locator: "Pāṇini 1.4.54; Manu 4.160; TS 1"
    },
    related: ["svatantra", "asvatantra", "rashtra", "abhaya", "moksha"]
  },
  {
    id: "nyaya-justice",
    deva: "नीतिः",
    iast: "nītiḥ",
    stem: "nīti",
    pos: "strīliṅga (f.)",
    englishGlosses: ["ethics", "wise policy", "prudence", "principled statesmanship"],
    phoneticAliases: ["niti", "neeti", "nyaya-niti", "rajaniti", "naya", "ethics", "policy", "justice"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "नीयते लोकः सन्मार्गेण श्रेयः प्रति अनया इति नीतिः । नयो नीतिर्न्यायश्च दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् ॥",
    lakshanaIast: "nīyate lokaḥ sanmārgeṇa śreyaḥ prati anayā iti nītiḥ | nayo nītir nyāyaś ca daṇḍo damayatām asmi nītir asmi jigīṣatām ||",
    meaningShort: "Ethics, moral wisdom, or principled statesmanship (`naya`) — the guiding art of right conduct that leads individuals and communities safely toward welfare.",
    meaningDeep: "Formed with `-ktin` (Pāṇini 3.3.94) from √nīñ ('prāpaṇe' — `nayati`, guiding wisely toward the good), `nīti` (`naya`) names the vast practical literature of Indian ethics and statecraft — from *Vidura-nīti*, *Pañcatantra*, *Hitopadeśa*, and *Śukranīti* (`sarvalokavyavahārasthitihetuḥ nītiḥ`) to Bhartṛhari's *Nītiśataka*. Crucially, Bhagavadgītā 10.38 (`nītir asmi jigīṣatām`) and 18.78 (`dhruvā nītiḥ`) insist that authentic `nīti` is never cynical expediency divorced from righteousness; true statesmanship is steadfast `dharma` applied with foresight and fairness (`nyāya`).",
    padaccheda: [
      { deva: "नीयते सन्मार्गेण अनया", iast: "nīyate sanmārgeṇa anayā", gloss: "wise guidance leading along the upright path (√nī + -ti)" },
      { deva: "नयः नीतिः न्यायः", iast: "nayaḥ nītiḥ nyāyaḥ", gloss: "prudent guidance, ethical policy, equitable justice" },
      { deva: "नीतिः अस्मि जिगीषताम्", iast: "nītiḥ asmi jigīṣatām", gloss: "BG 10.38: among those seeking triumph, I am principled ethics" }
    ],
    source: {
      grantha: "Bhagavadgītā & Amarakośa",
      granthaDeva: "भगवद्गीता · अमरकोशः",
      author: "Śrī Vedavyāsa & Amarasimha",
      locator: "BG 10.38, 18.78; AK 2.8.20 (`naya`)"
    },
    related: ["dharma", "rajan", "subhashita", "jaya", "shila-virtue"]
  },
  {
    id: "utsava",
    deva: "उत्सवः",
    iast: "utsavaḥ",
    stem: "utsava",
    pos: "puṃliṅga (m.)",
    englishGlosses: ["festival", "celebration", "jubilee", "joyous flowering"],
    phoneticAliases: ["utsava", "mahotsava", "parvan", "kshanah-festival", "uddhava", "festival", "celebration"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "उत्सूयते हर्षोऽस्मिन्निति उत्सवः । क्षण उद्धव आनन्द उत्सवो महश्च सः उत्सवप्रियाः खलु मनुष्याः ॥",
    lakshanaIast: "utsūyate harṣo 'sminn iti utsavaḥ | kṣaṇa uddhava ānanda utsavo mahaś ca saḥ utsavapriyāḥ khalu manuṣyāḥ ||",
    meaningShort: "A festival or communal celebration (`maha` / `parvan`) — an auspicious occasion that brings forth collective joy, art, generosity, and sacred remembrance.",
    meaningDeep: "Formed with `-ap` (Pāṇini 3.3.57) from `ud` + √ṣū ('prasave' — generating buoyant joy, or blossoming like a new shoot `prasava`), `utsava` is grouped in Amarakośa (Nāṭyavarga 1.7.36) with `kṣaṇa`, `uddhava`, and `maha`. Kālidāsa's *Abhijñānaśākuntalam* (6.2) captures human nature in a gentle four-word aphorism: `utsavapriyāḥ khalu manuṣyāḥ` — 'human beings indeed delight in festivals!' Across temple `rathotsavas`, seasonal `ṛtu-utsavas`, and scholarly gatherings, `utsava` weaves music, hospitality, and devotion into shared civic joy.",
    padaccheda: [
      { deva: "उत्सूयते हर्षः अस्मिन्", iast: "utsūyate harṣaḥ asmin", gloss: "wherein collective joy springs forth (`ud` + √sū + -ap)" },
      { deva: "क्षणः उद्धवः उत्सवः महः", iast: "kṣaṇaḥ uddhavaḥ utsavaḥ mahaḥ", gloss: "festive holiday, jubilation, festival, sacred celebration" },
      { deva: "उत्सव-प्रियाः मनुष्याः", iast: "utsava-priyāḥ manuṣyāḥ", gloss: "Śākuntala 6.2: humanity naturally cherishes festive fellowship" }
    ],
    source: {
      grantha: "Amarakośa & Abhijñānaśākuntalam",
      granthaDeva: "अमरकोशः · अभिज्ञानशाकुन्तलम्",
      author: "Amarasimha & Kālidāsa",
      locator: "AK 1.7.36 (Nāṭyavarga); Śākuntala 6.2"
    },
    related: ["ananda", "mangala", "sangita", "krida", "manushya"]
  },
  {
    id: "krida",
    deva: "क्रीडा",
    iast: "krīḍā",
    stem: "krīḍā",
    pos: "strīliṅga (f.)",
    englishGlosses: ["play", "sport", "recreation", "effortless divine pastime"],
    phoneticAliases: ["krida", "kreeda", "lila", "keli", "vilasa", "khela", "play", "sport"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "क्रीड्यते विह्रियते अनया इति क्रीडा । द्रवः केलिः परीहासो नर्म क्रीडा च लीलया लोकवत्तु लीलाकैवल्यम् ॥",
    lakshanaIast: "krīḍyate vihriyate anayā iti krīḍā | dravaḥ keliḥ parīhāso narma krīḍā ca līlayā lokavat tu līlākaivalyam ||",
    meaningShort: "Play, sport, or joyous pastime (`līlā` / `keli`) — spontaneous activity performed out of overflowing delight rather than external compulsion or lack.",
    meaningDeep: "Derived from √krīḍṛ ('vihāre' — to sport, play joyfully; Pāṇini 3.3.104 `-aṅ`), `krīḍā` is grouped in Amarakośa (Nāṭyavarga 1.7.33) with `drava`, `keli`, `narma`, `khela`, and `līlā`. Beyond childhood games and athletic recreation, *Brahmasūtra* 2.1.33 (`lokavat tu līlākaivalyam`) elevates `krīḍā` / `līlā` to solve the deepest question of philosophical theology: why does an already-complete, desireless (`āptakāma`) Supreme Being create and sustain the universe? Śrī Madhvācārya's *Brahmasūtrabhāṣya* explains that just as a joyous person sings or dances spontaneously from sheer overflowing bliss without needing any personal gain, Viṣṇu's cosmic governance is pure `līlā` undertaken solely for the upliftment of dependent souls.",
    padaccheda: [
      { deva: "क्रीड्यते विह्रियते अनया", iast: "krīḍyate vihriyate anayā", gloss: "joyous recreation and spontaneous sport (√krīḍ)" },
      { deva: "केलिः नर्म क्रीडा लीला", iast: "keliḥ narma krīḍā līlā", gloss: "sport, lighthearted play, graceful pastime" },
      { deva: "लोकवत् तु लीला-कैवल्यम्", iast: "lokavat tu līlā-kaivalyam", gloss: "BS 2.1.33: cosmic creation flows from spontaneous, uncompelled `līlā`" }
    ],
    source: {
      grantha: "Amarakośa & Brahmasūtrabhāṣyam",
      granthaDeva: "अमरकोशः · ब्रह्मसूत्रभाष्यम्",
      author: "Amarasimha & Śrī Madhvācārya",
      locator: "AK 1.7.33; BSB 2.1.33"
    },
    related: ["ananda", "utsava", "bala-child", "srishti", "krishna"]
  },
  {
    id: "abhaya",
    deva: "अभयम्",
    iast: "abhayam",
    stem: "abhaya",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["fearlessness", "safety", "sanctuary from peril", "spiritual assurance"],
    phoneticAliases: ["abhaya", "nirbhayata", "kshema-abhaya", "abhayadana", "fearlessness", "safety"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "न विद्यते भयं यस्माद्यस्मिन्वा तत् अभयम् । अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः अभयं वै प्राप्तो भवति ॥",
    lakshanaIast: "na vidyate bhayaṃ yasmād yasmin vā tat abhayam | abhayaṃ sattvasaṃśuddhir jñānayogavyavasthitiḥ abhayaṃ vai prāpto bhavati ||",
    meaningShort: "Fearlessness, safety, or sanctuary from all dread — both the courageous virtue heading the divine heritage (`daivī sampat`) and the promise of protection extended to all beings.",
    meaningDeep: "Compounded of privative `a-` + `bhaya` ('fear/peril', √bhī), `abhaya` stands as the very first virtue in Bhagavadgītā Chapter 16 (`abhayaṃ sattvasaṃśuddhiḥ`, BG 16.1), because moral integrity, truthfulness, and compassion flourish only in a fearless heart. Simultaneously in dharmaśāstra (`sarvabhūtebhyo 'bhayadānam`) it means granting assurance of safety so no creature trembles at one's presence (`yasmān nodvijate lokaḥ`, BG 12.15), and in Taittirīya Upaniṣad 2.7.1 (`atha so 'bhayaṃ gato bhavati`) and Bṛhadāraṇyaka 4.2.4 (`abhayaṃ vai janaka prāpto 'si`), `Abhaya` names final liberation under the raised `abhaya-mudrā` palm of Bhagavān.",
    padaccheda: [
      { deva: "न विद्यते भयम् यत्र", iast: "na vidyate bhayam yatra", gloss: "complete freedom from fear and peril (`a-bhaya`)" },
      { deva: "अभयम् सत्त्व-संशुद्धिः", iast: "abhayam sattva-saṃśuddhiḥ", gloss: "BG 16.1: fearlessness and purity of heart head the divine virtues" },
      { deva: "अभयम् प्राप्तः भवति", iast: "abhayam prāptaḥ bhavati", gloss: "BAU 4.2.4: knowing Brahman, one attains supreme fearlessness" }
    ],
    source: {
      grantha: "Bhagavadgītā & Taittirīyopaniṣad",
      granthaDeva: "भगवद्गीता · तैत्तिरीयोपनिषत्",
      author: "Śrī Vedavyāsa",
      locator: "BG 16.1; TU 2.7.1; BAU 4.2.4"
    },
    related: ["dhairya", "sharanam", "ahimsa", "shanti", "moksha"]
  },
  {
    id: "sharanam",
    deva: "शरणम्",
    iast: "śaraṇam",
    stem: "śaraṇa",
    pos: "napuṃsakaliṅga (n.)",
    englishGlosses: ["refuge", "shelter", "sanctuary", "protector", "home"],
    phoneticAliases: ["sharanam", "sharana", "ashraya", "trana", "rakshitri", "refuge", "shelter", "sanctuary"],
    pillar: "kosha",
    domain: "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)",
    lakshanaDeva: "शृणाति दुःखं भयं च रक्षति आश्रितमिति शरणम् । शरणं गृहरक्षित्रोः सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ॥",
    lakshanaIast: "śṛṇāti duḥkhaṃ bhayaṃ ca rakṣati āśritam iti śaraṇam | śaraṇaṃ gṛharakṣitroḥ sarvadharmān parityajya mām ekaṃ śaraṇaṃ vraja ||",
    meaningShort: "Refuge, protective sanctuary, or saving Protector — a sheltering home and, preeminently, He who dispels all fear and sorrow for those who seek shelter.",
    meaningDeep: "Derived with `-lyuṭ` from √śṝ ('hiṃsāyām' — `śṛṇāti ārtim`, shattering affliction and peril before they touch the refugee), Amarasimha gives a crucial two-word rule in Amarakośa (Nānārthavarga 3.3.47): `śaraṇaṃ gṛharakṣitroḥ` — neuter `śaraṇam` signifies both a sheltering house (`gṛha`) and a living Protector (`rakṣitṛ`, retaining neuter gender even when referring directly to the Lord!). Thus in Bhagavadgītā 18.66 (`mām ekaṃ śaraṇaṃ vraja`) and Viṣṇusahasranāma (`śaraṇaṃ śarma viśvaretāḥ`), Śrī Madhvācārya's Gītābhāṣya highlights Bhagavān Nārāyaṇa as the one unfailing `Śaraṇam` — Shelter, Home, and Liberator of all beings.",
    padaccheda: [
      { deva: "शृणाति दुःखम् रक्षति इति शरणम्", iast: "śṛṇāti duḥkham rakṣati iti śaraṇam", gloss: "dispels sorrow and shields one who seeks refuge (√śṝ + -ana)" },
      { deva: "गृह-रक्षित्रोः", iast: "gṛha-rakṣitroḥ", gloss: "AK 3.3.47: signifying both sheltering home and saving Protector" },
      { deva: "माम् एकम् शरणम् व्रज", iast: "mām ekam śaraṇam vraja", gloss: "BG 18.66: betake yourself unto Me alone as supreme Refuge" }
    ],
    source: {
      grantha: "Amarakośa & Bhagavadgītā",
      granthaDeva: "अमरकोशः · भगवद्गीता",
      author: "Amarasimha & Śrī Vedavyāsa",
      locator: "AK 3.3.47 (Nānārthavarga); BG 18.66"
    },
    related: ["sharanagati", "abhaya", "griha", "krishna", "narayana"]
  }
];
