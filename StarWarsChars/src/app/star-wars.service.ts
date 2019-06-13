import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice(); //will return a copy of the array
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }
  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => { //get position of the element
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }
  constructor() { }
}
