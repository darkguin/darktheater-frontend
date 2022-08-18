import jwtDecode from 'jwt-decode';
import { TokenPayload } from '@core/models';
import * as dayjs from 'dayjs';

export class TokenUtil {
  static decode(token: string): TokenPayload | null {
    try {
      return jwtDecode<TokenPayload>(token);
    } catch (err) {
      console.error('Unexpected situation: Bad JWT token.');
      return null;
    }
  }

  static checkExp(token: string): boolean {
    const payload = this.decode(token);

    if (!payload?.exp) return false;

    return dayjs().isAfter(dayjs(payload.exp));
  }
}
