import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    localeDetection: true, // Автоматическое определение локали
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en)/:path*']
};