import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Person {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private persons: Person[] = [
    { firstName: 'Roger', lastName: 'Federer' },
    { firstName: 'Rafael', lastName: 'Nadal' },
    { firstName: 'John', lastName: 'McEnroe' },
    { firstName: 'Jimmy', lastName: 'Connors' },
    { firstName: 'Novak', lastName: 'Djoković' },
    { firstName: 'Pete', lastName: 'Sampras' },
    { firstName: 'Rod', lastName: 'Laver' },
    { firstName: 'Ivan', lastName: 'Lendl' },
    { firstName: 'Arthur', lastName: 'Ashe' },
    { firstName: 'Gustavo', lastName: 'Kuerten' },
  ];

  fetchPersons(): Observable<Person[]> {
    return of(this.persons);
  }

  addPerson(person: Person): Observable<Person[]> {
    this.persons.push(person);
    return of(this.persons);
  }
}
