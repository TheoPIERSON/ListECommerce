import { Injectable } from '@angular/core';
import { ItemModel } from 'src/model/itemDataModel';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  items: ItemModel[] = [
    {
      name: 'beherit',
      price: 42,
      image: 'assets/images/cfc484acdc9d56e9961b6037d76314be.jpeg',
      availablity: true,
    },
    {
      name: 'guts',
      price: 420,
      image: 'assets/images/guts_175.webp',
      availablity: false,
    },
    {
      name: 'guts',
      price: 12,
      image: 'assets/images/cfc484acdc9d56e9961b6037d76314be.jpeg',
      availablity: false,
    },
    {
      name: 'beherit',
      price: 4240,
      image: 'assets/images/guts_175.webp',
      availablity: false,
    },
  ];
  getArticles(): ItemModel[] {
    return this.items;
  }
}
