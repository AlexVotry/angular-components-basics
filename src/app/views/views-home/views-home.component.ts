import { Component } from '@angular/core';
import { stats, itemArr } from '../data';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = stats;
  items = itemArr;
}
