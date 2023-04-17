import { Component, Input } from '@angular/core';

interface ItemsType {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  @Input() items: ItemsType[] = [];
  openIndex = 0;

  open(i: number) {
    if (this.openIndex === i) this.openIndex = -1;
    else this.openIndex = i;
  }
}
