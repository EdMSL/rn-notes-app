import { ILanguage , localisations } from '$constants/language';

export const getText = (language: ILanguage, textId: string): string => {
  return localisations[language]?.dictionary[textId] || '';
};
