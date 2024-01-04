import { Injectable } from '@angular/core';
import { Banana } from './banana/banana.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BananaService {
  baseUrl = 'http://localhost:3000/bananas';

  async getAllBananas(): Promise<Banana[]> {
    const data = await fetch(this.baseUrl);
    return await data.json() ?? [];
  }

  async getBananaById(id: number): Promise<Banana | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return await data.json() ?? {};
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

  constructor() { }
}
