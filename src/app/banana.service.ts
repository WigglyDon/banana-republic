import { Injectable } from '@angular/core';
import { Banana } from './banana/banana.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BananaService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/bananas';

  getAllBananas(): Observable<Banana[]> {
    return this.http.get<Banana[]>(`${this.baseUrl}`);
  }

  getBananaById(id:number): Observable<Banana> {
    return this.http.get<Banana>(`${this.baseUrl}/${id}`);
  }

  updateBanana(id: number, newInfo: Banana): Observable<Banana> {
    return this.http.patch<Banana>(`${this.baseUrl}/${id}`, newInfo);
  }

}
