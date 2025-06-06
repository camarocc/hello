import type { UserConfig } from 'vitepress';
import type { VitePressI18nOptions } from './types.js';
export default class VitePressI18n {
    static withI18n(vitePressOptions: UserConfig, i18nOptions: Partial<VitePressI18nOptions>): Partial<UserConfig>;
    private static getDefaultLabelValue;
    private static getDefaultLangValue;
    private static isObject;
    private static objMergeNewKey;
}
export { VitePressI18n };
export declare const withI18n: typeof VitePressI18n.withI18n;
