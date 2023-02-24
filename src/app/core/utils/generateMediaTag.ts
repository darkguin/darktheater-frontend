import { Content } from '@core/models';

export function generateMediaTag(media: Content) {
  return [].filter(Boolean).join(', ');
}
