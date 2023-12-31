import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from 'src/model/itemDataModel';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  @Input() itemArray!: ItemModel;
  ngOnInit(): void {}
}
