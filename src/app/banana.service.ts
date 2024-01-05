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

  updateBanana(banana: Banana): Observable<Banana> {
    return this.http.put<Banana>(`${this.baseUrl}/${banana.id}`, banana);
  }


  submitInfo(name: string, flavor: string, color: string, bunchSize: number, edible: boolean, geneticallyAltered: boolean) {
    console.log(`
    name: ${name}\n
    flavor: ${flavor}\n
    color: ${color}\n
    bunch size: ${bunchSize}\n
    edible?: ${edible}\n
    genetically altered?: ${geneticallyAltered}
    `);
  }
}
