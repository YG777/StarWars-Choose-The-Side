import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'starWarsApp';
  name = 'Kat';
  rootItems = ['apples', 'oranges', 'lemons'];

  onNameChanged(newName) {
    this.name = newName;
  }

  onItemAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

}
