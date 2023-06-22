import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/model/itemDataModel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  items!: ItemModel[];
  ngOnInit(): void {
    this.items = [
      {
        name: 'beherit',
        price: 42,
        image: 'assets/images/cfc484acdc9d56e9961b6037d76314be.jpeg',
        availablity: true,
      },
      { name: 'guts', price: 420, image: '', availablity: false },
    ];
  }
}
