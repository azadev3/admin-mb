export interface LoginPayloadInterface {
  email?: string;
  password?: string;
}

export interface LanguagePayloadShowData {
  [langCode: string]: string | null;
}
