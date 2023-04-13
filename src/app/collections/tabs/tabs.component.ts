import { Component, Input } from '@angular/core';

interface Tab {
  label: string;
  url: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input()
  tabs: Tab[] = [];
}
