import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

// export function middleware(req: NextRequest) {
//     const ua = req.headers.get('user-agent')?.toLowerCase() || '';
//     const badBots = ['curl', 'python', 'scrapy', 'wget', 'postman', 'bot'];
//
//     if (badBots.some(bot => ua.includes(bot))) {
//         return new NextResponse('Forbidden', { status: 403 });
//     }
//
//     return NextResponse.next();
// }

export default createMiddleware(routing);
export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};