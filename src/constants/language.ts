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
      createNote: 'Создать новую заметку',
      createNotePlaceholder: 'Введите текст заметки',
      createNoteBtn: 'Сохранить',
      noNotes: 'Нет заметок',
    },
  },
  en: {
    title: 'English',
    dictionary: {
      notes: 'My notes',
      note: 'Note',
      settings: 'Settings',
      create: 'Create',
      createNote: 'Create a new note',
      createNotePlaceholder: 'Enter a note text',
      createNoteBtn: 'Save',
      noNotes: 'No notes',
    },
  },
};
