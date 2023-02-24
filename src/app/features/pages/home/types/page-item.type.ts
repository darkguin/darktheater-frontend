import { Slide } from '@shared/components/slider';
import { Card } from '@shared/components/card';

export interface PageItem {
  id: string | number;
  title?: string;
  type: string;
  items: Slide[] | Card[];
}
