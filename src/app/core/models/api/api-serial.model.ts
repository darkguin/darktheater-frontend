import { ApiContent } from '@models/api/api-content.model';
import { ApiSeason } from '@models/api/api-season.model';

export interface ApiSerial extends ApiContent {
  seasons: ApiSeason[];
}
