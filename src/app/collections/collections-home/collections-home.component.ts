import { Component } from '@angular/core';
import { headers, data } from './data';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  headers = headers;
  data = data;
}
