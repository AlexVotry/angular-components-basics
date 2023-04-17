import { Component, Input } from '@angular/core';

interface Item {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input()
  itemArr: Item[] = [];
  
  // itemArray(): Item[] {
  //   const arr = this.itemArr.map(item => {
  //     item.image = `assets/images${item.image}`;
  //     return item;
  //   });
  //   return arr;
  // }
}
