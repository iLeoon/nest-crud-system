import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('nest-session')?.value;

  if (!currentUser) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  NextResponse.redirect(new URL('/products', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/products']
};
