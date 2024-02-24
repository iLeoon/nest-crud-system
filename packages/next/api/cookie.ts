import { cookies } from 'next/headers';

export function getCookie() {
  const cookie = cookies().get('nest-session')?.value;

  return cookie || null;
}
