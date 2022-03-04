import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { infoHeroe } from '../models/infoHeroe';

@Injectable({
  providedIn: 'root'
})
export class InfoHeroeService {

  private heroe: BehaviorSubject<infoHeroe> = new BehaviorSubject<infoHeroe>({
    biography: {
      "aliases": [
        "",
        ""
      ]
    },
    appearance: {
      "height": [
        "Desconocido",
        "Desconocido"
      ],
      "weight": [
        "Desconocido",
        "Desconocido"
      ],
    },
    work: {}
  });

  constructor() { }

  // Obtengo el observable que contendrá la card del superheroe
  get SharingHeroe(){
    return this.heroe.asObservable();
  }
  set SharingHeroeData(value: any){
    this.heroe.next(value);
  }
}
