import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  private logService: LogService;
  http: HttpClient;


  //Subject is a substance provided by rxjs
  //It is a generic type
  //It is used here instead of event emitter
  charactersChanged = new Subject<void>();

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people/')
    .map((response) => { // <--change the data for the app
      const data = response;
      const extractedChars = data.results;
      const chars = extractedChars.map((char) => {
        return {name: char.name, side: ''}
      });
      return chars;
    })
    .subscribe(
      (data) => {
        this.characters = data;
        this.charactersChanged.next();
      }
    );
  }

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
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addCharacter(name, side) {
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }

}
