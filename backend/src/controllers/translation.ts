import { Request, Response } from 'express';
import { Language, TranslationResult } from '../models';

export const getLanguages = async (req: Request, res: Response) => {
  try {
    // Mock data for supported languages
    const languages: Language[] = [
      { code: 'en', name: 'English', flag: '🇺🇸', speakers: '1.5B' },
      { code: 'es', name: 'Spanish', flag: '🇪🇸', speakers: '543M' },
      { code: 'fr', name: 'French', flag: '🇫🇷', speakers: '280M' },
      { code: 'de', name: 'German', flag: '🇩🇪', speakers: '132M' },
      { code: 'zh', name: 'Chinese', flag: '🇨🇳', speakers: '1.2B' },
      { code: 'ja', name: 'Japanese', flag: '🇯🇵', speakers: '126M' },
      { code: 'ko', name: 'Korean', flag: '🇰🇷', speakers: '81M' },
      { code: 'ru', name: 'Russian', flag: '🇷🇺', speakers: '258M' },
      { code: 'ar', name: 'Arabic', flag: '🇸🇦', speakers: '422M' },
      { code: 'hi', name: 'Hindi', flag: '🇮🇳', speakers: '615M' }
    ];
    
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch languages' });
  }
};

export const getTranslation = async (req: Request, res: Response) => {
  try {
    const { text, targetLanguage } = req.query;
    
    // Default to English if no target language is provided
    const language = targetLanguage as string || 'en';
    
    // Ensure text is a string
    const sourceText = typeof text === 'string' ? text : '';
    
    // Mock translation based on target language
    let translatedText = sourceText; // Default to original text
    
    // Simple mock translations for demonstration
    if (language === 'es') {
      translatedText = sourceText === 'Hello world!' ? '¡Hola mundo!' : 'Traducción automática';
    } else if (language === 'fr') {
      translatedText = sourceText === 'Hello world!' ? 'Bonjour le monde !' : 'Traduction automatique';
    } else if (language === 'de') {
      translatedText = sourceText === 'Hello world!' ? 'Hallo Welt!' : 'Automatische Übersetzung';
    } else if (language === 'zh') {
      translatedText = sourceText === 'Hello world!' ? '你好，世界！' : '自动翻译';
    }
    
    const translationResult: TranslationResult = {
      original: sourceText,
      translated: translatedText,
      targetLanguage: language
    };
    
    res.status(200).json(translationResult);
  } catch (error) {
    res.status(500).json({ error: 'Failed to translate text' });
  }
};