import { Injectable } from '@angular/core';
import { Hero } from './models/hero';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
 
//Registers this object for dependency injection.

/*
  Before you can you DI, we need to specify a provider. A provider is the component that will create and deliver
  a instance of the service object.

  This this exmaple with are making the root inject reponsible for this component.

  root - creates a singleton of the HeroService and inject where ever needed.
*/

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }  
  ];

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    
    //need to change this into an asynchronous operation
    this.messageService.add('HeroService: fetched heroes');

    return of(this.heroes);
  }
}
