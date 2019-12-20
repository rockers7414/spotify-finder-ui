import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../objects';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${environment.apiHost}/tracks/${keyword}`);
  }

}
