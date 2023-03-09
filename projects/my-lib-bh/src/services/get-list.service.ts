import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrameWorkList } from '../modals/list.modal';
import { Observable } from 'rxjs/internal/Observable';
import { delay, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  // configUrl = 'https://testapi.io/api/Saikrishnakadarla/';
  configUrl = 'https://testapi.io/api/kadaras/';

  constructor(
    private http: HttpClient
  ) { }

  public getTechnologyList(): Observable<FrameWorkList[]> {
    return this.http.get<FrameWorkList[]>(this.configUrl+'tlist').pipe(
      map(d => d)
    );
  }
}
