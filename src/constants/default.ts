interface IOption {
  label: string,
  value: any,
}

export interface IDefaultSetting {
  title: string,
  defaultValue: any,
  type: string,
  options?: IOption[],
}

export const allSettings = {
  language: {
    title: 'language',
    defaultValue: 'ru',
    type: 'checkbox',
    options: [
      { label: 'Русский', value: 'ru' },
      { label: 'English', value: 'en' },
    ],
  },
};

export const availableSettings = Object.keys(allSettings);
