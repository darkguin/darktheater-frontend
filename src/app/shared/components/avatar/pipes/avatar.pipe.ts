import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value = ''): string {
    return value
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
