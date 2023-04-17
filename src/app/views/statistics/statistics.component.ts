import { Component, Input } from '@angular/core';

interface Stats {
  label: string;
  value: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input()
  stats: Stats[] = [];
}
