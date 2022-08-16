export enum RegexpValidation {
  EMAIL = `^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`,
  LOWERCASE_LETTER_CONTAINS = '(?=.*[a-z])',
  UPPERCASE_LETTER_CONTAINS = '(?=.*[A-Z])',
  NUMBER_CONTAINS = '(?=.*[0-9])',
  SPECIAL_CHARACTER_CONTAINS = '(?=.*[!@#$%^&])',
}
