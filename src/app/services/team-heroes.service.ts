import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamHeroesService {

  private heroe: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  // Obtengo el observable que contendrá la card del superheroe
  get SharingHeroe(){
    return this.heroe.asObservable();
  }
  set SharingHeroeData(value: any){
    this.heroe.next(value);
  }
}
