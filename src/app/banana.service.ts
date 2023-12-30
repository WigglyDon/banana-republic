import { Injectable } from '@angular/core';
import { BananaBunch } from './bananabunch';

@Injectable({
  providedIn: 'root'
})
export class BananaService {

  url = 'http://localhost:3000/bananas';

  async getAllBananaBunches(): Promise<BananaBunch[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getBananaBunchById(id: number): Promise<BananaBunch | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitInfo(firstName: string, lastName: string, email: string) {
    console.log(`Info received! firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }

  constructor() { }
}
