export type StringsDict = {
  [key: string]: string | StringsDict;
};

export const messages: {
  en: StringsDict;
  ar: StringsDict;
  de: StringsDict;
  es: StringsDict;
  fr: StringsDict;
  ru: StringsDict;
  uk: StringsDict;
};

export const locales: (keyof typeof messages)[];
