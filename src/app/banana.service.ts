import { Injectable } from '@angular/core';
import { BananaBunch } from './bananabunch';
import { mockData } from './banana/bananaData';

@Injectable({
  providedIn: 'root'
})
export class BananaService {
  bananaData = mockData;

  getAllBananaBunches(): BananaBunch[] {
    return this.bananaData
  }

  getBananaBunchById(id: number): BananaBunch | undefined {
    return this.bananaData.find(bananaBunch => bananaBunch.id === id);
  }

  submitInfo(firstName: string, lastName: string, email: string) {
    console.log(`Info received! firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }

  constructor() { }
}
