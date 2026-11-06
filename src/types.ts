export type Pillar = "lakshana" | "kosha" | "ekakshara" | "nirukti";
export type PillarFilter = "all" | Pillar | "saved";
export type ThemeMode = "light" | "dark";
export type ViewMode = "reader" | "directory" | "matrika";
export type FontScale = "normal" | "large" | "xlarge";

export interface PadacchedaItem {
  deva: string;
  iast: string;
  gloss: string;
}

export interface SecondaryLakshana {
  deva: string;
  iast: string;
  translation: string;
  source: string;
}

export type EkaksharaRegister =
  | "parama-mukhya"
  | "taratamya-daivata"
  | "amarakosha-nanartha"
  | "vyakarana-avyaya";

export interface EkaksharaSense {
  register: EkaksharaRegister;
  formDeva: string;
  formIast: string;
  gloss: string;
  samanvaya: string;
}

export interface SourceCitation {
  grantha: string;
  granthaDeva: string;
  author: string;
  locator: string;
}

export interface KoshaEntry {
  index: number;
  id: string;
  deva: string;
  iast: string;
  stem: string;
  pos: string;
  englishGlosses: string[];
  phoneticAliases: string[];
  pillar: Pillar;
  domain: string;
  lakshanaDeva: string;
  lakshanaIast: string;
  secondaryLakshana?: SecondaryLakshana;
  ekaksharaSenses?: EkaksharaSense[];
  meaningShort: string;
  meaningDeep: string;
  padaccheda: PadacchedaItem[];
  source: SourceCitation;
  related: string[];
}

export interface KoshaMeta {
  title: string;
  subtitle: string;
  version: string;
  totalEntries: number;
  pillarCounts: Record<Pillar, number>;
  domainCounts: Record<string, number>;
  distinctSourceTraditions: number;
  primarySources: string[];
}

export interface KoshaDataset {
  meta: KoshaMeta;
  entries: KoshaEntry[];
}
