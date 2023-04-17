import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  show = false;
  items = [
    { title: 'What is a dog?', content: 'A dog is a domesticated animal' },
    { title: 'What kind of dogs are there?', content: 'there are two types of dogs: friendly and deadly'},
    { title: 'How do you get a dog:', content: 'At a dog pound' }
  ]

  onClick() {
    this.show = !this.show;
  }
}
