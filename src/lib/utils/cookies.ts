import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function removeCookies() {
  cookies.remove('userId', { path: '/' });
  cookies.remove('userNickname', { path: '/' });
  cookies.remove('userImage', { path: '/' });
  cookies.remove('userEmail', { path: '/' });
}
