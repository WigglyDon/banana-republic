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

  submitInfo(firstName: string, lastName: string, email: string) {
    console.log(`Info received! firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }

  constructor() { }
}
