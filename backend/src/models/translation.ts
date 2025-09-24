// Language interface
export interface Language {
  code: string;
  name: string;
  flag: string;
  speakers: string;
}

// Translation result interface
export interface TranslationResult {
  original: string;
  translated: string;
  targetLanguage: string;
}