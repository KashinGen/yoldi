import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/user', '/profile'];
const publicRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const xApiKey = request.cookies.get('x-api-key')?.value;
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (path === '/') {
    return NextResponse.redirect(new URL(xApiKey ? '/profile' : '/login', request.nextUrl));
  }

  if (isProtectedRoute && !xApiKey) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (isPublicRoute && xApiKey && !path.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};