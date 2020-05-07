export type ILanguage = 'ru'|'en';

interface IDictionary {
  [id: string]: string,
}

interface ILocalisation {
  [id: string]: {
    title: string,
    dictionary: IDictionary,
  }
}

export const localisations: ILocalisation = {
  ru: {
    title: 'Русский',
    dictionary: {
      notes: 'Мои заметки',
      note: 'Заметка',
      settings: 'Настройки',
      create: 'Создать',
    },
  },
  en: {
    title: 'English',
    dictionary: {
      notes: 'My notes',
      note: 'Note',
      settings: 'Settings',
      create: 'Create',
    },
  },
};
