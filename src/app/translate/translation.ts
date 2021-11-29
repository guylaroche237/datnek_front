import { OpaqueToken } from './opaque_token'; 
// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';
import { LANG_AL_NAME, LANG_AL_TRANS } from './lang-al';
import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');
//export const TRANSLATION_CORE = new Translator('jj')

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
    [LANG_ZH_NAME]: LANG_ZH_TRANS,
    [LANG_AL_NAME]: LANG_AL_TRANS,
    [LANG_FR_NAME]: LANG_FR_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];