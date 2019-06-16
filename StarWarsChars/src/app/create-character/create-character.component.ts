import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'Light' },
    { display: 'Dark', value: 'Dark' }
  ];

  swService: StarWarsService;
  defaultName = 'Name';
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

 onSubmit(submittedFormData) {
   if (submittedFormData.invalid) {
     return;
   }
   console.log(submittedFormData);
   this.swService.addCharacter(submittedFormData.name, submittedFormData.side);
 }
}
