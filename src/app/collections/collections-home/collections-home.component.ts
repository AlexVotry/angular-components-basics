import { Component } from '@angular/core';
import { headers, data, tabs } from './data';
import {  } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  headers = headers;
  data = data;
  tabs = tabs;
}
