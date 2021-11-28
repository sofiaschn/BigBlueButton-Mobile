import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import pt_BR from './pt_BR';
import en from './en';

const deviceLanguage: string =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

I18n.defaultLocale = 'pt-BR';
I18n.locale = deviceLanguage;
I18n.fallbacks = true;

I18n.translations = {
    pt_BR: pt_BR,
    en_US: en,
    en_GB: en,
};

const translate = (
    scope: I18n.Scope,
    options?: I18n.TranslateOptions,
): string => I18n.t(scope, options);

export default translate;
