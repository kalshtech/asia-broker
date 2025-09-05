import {defineRouting} from 'next-intl/routing';

export type AppLocale = typeof locales[number];
export const locales = ['en', 'id', 'ko', 'ja', 'th', 'vi', 'zh-cn', 'zh-tw'] as const;
export const defaultLocale: AppLocale = 'en';
// 建议始终带前缀，便于清晰的多语言路径控制
export const localePrefix = 'always' as const;

export const routing = defineRouting({
    locales,
    defaultLocale,
    localeDetection: false
});