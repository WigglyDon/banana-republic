import { Injectable } from '@angular/core';
import { Banana } from './banana/banana.types';

@Injectable({
  providedIn: 'root'
})
export class BananaService {

  url = 'http://localhost:3000/bananas';

  async getAllBananas(): Promise<Banana[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getBananaById(id: number): Promise<Banana | undefined> {
    const data = await fetch(`${this.url}/${id}`);
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
