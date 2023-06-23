import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/model/itemDataModel';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  items!: ItemModel[];

  constructor(private articlesServices: ArticlesService) {}

  ngOnInit(): void {
    this.items = this.articlesServices.getArticles();
  }
}
