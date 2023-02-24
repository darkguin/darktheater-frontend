import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiPlaylist } from '@core/models';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiService } from '@core/values';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class PlaylistsApi {
  constructor(private api: ApiGatewayService) {
  }

  getAll(page = 1, size = 10): Observable<ApiPlaylist[]> {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.api.get<ApiPlaylist[]>(ApiPath.PLAYLISTS, ApiService.CONTENT, { params });
  }

  getById(id: number | string): Observable<ApiPlaylist> {
    const path = ApiPath.PLAYLIST_ID.replace(":id", id.toString());
    return this.api.get<ApiPlaylist>(path, ApiService.CONTENT);
  }
}


/*
{
  "title": "Slider",
  "description": "",
  "playlist_type": "highlights",
  "playlist_items": [
    {
      "object_type": "Movie",
      "object_id": 1
    },
    {
      "object_type": "Movie",
      "object_id": 119
    },
    {
      "object_type": "Movie",
      "object_id": 3
    },
    {
      "object_type": "Movie",
      "object_id": 12
    },
    {
      "object_type": "Movie",
      "object_id": 14
    },
    {
      "object_type": "Movie",
      "object_id": 143
    }
  ]
}
 */

/*
{
  "title": "Special for your",
  "description": "",
  "playlist_type": "cards",
  "playlist_items": [
    {
      "object_type": "Movie",
      "object_id": 23
    },
    {
      "object_type": "Serial",
      "object_id": 6
    },
    {
      "object_type": "Movie",
      "object_id": 11
    },
    {
      "object_type": "Movie",
      "object_id": 30
    },
    {
      "object_type": "Movie",
      "object_id": 62
    },
    {
      "object_type": "Serial",
      "object_id": 16
    },
    {
      "object_type": "Movie",
      "object_id": 35
    },
    {
      "object_type": "Movie",
      "object_id": 36
    },
    {
      "object_type": "Serial",
      "object_id": 30
    }
  ]
}
 */

/*
{
  "title": "New motion pictures",
  "description": "",
  "playlist_type": "cards",
  "playlist_items": [
    {
      "object_type": "Movie",
      "object_id": 7
    },
    {
      "object_type": "Movie",
      "object_id": 1
    },
    {
      "object_type": "Movie",
      "object_id": 2
    },
    {
      "object_type": "Movie",
      "object_id": 3
    },
    {
      "object_type": "Movie",
      "object_id": 4
    },
    {
      "object_type": "Serial",
      "object_id": 9
    },
    {
      "object_type": "Movie",
      "object_id": 13
    },
    {
      "object_type": "Movie",
      "object_id": 44
    },
    {
      "object_type": "Serial",
      "object_id": 15
    }
  ]
}
 */
