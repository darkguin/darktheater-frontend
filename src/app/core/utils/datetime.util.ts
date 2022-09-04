export class DatetimeUtil {
  static toHms(offset: number) {
    return {
      h: Math.floor(offset / 3600),
      m: Math.floor((offset % 3600) / 60),
      s: Math.floor((offset % 3600) % 60),
    };
  }
}
