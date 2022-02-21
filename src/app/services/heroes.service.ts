import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL_API = "api/111653218098260";
  errorMessage: Subject<boolean>;

  private heroe: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient, private spinner: SpinnerService) {
    this.errorMessage = new Subject();
  }
  // Obtengo el observable que contiene el "valor" del mensaje de error.
  getMessageError(): Observable<boolean>{
    return this.errorMessage.asObservable();
  }
  // Obtengo el observable que contendrá los super heroes
  get SharingHeroe(){
    return this.heroe.asObservable();
  }
  // Envio el valor que escribí en el "search" input
  set SharingHeroeData(value: any){
    this.errorMessage.next(false);
    console.log("error service: ", this.errorMessage);
    this.searchHeroService(value).subscribe({
      next: (v) => {
        this.spinner.cerrarSpinner();
        console.log("llego el valor", v.results);
        this.heroe.next(v.results);
        if(v.results === undefined){
          this.errorMessage.next(true);
          console.log("error service: ", this.errorMessage);
        }
      },
      error: (e) => {
        this.spinner.cerrarSpinner();
        console.error("algo ocurrio: ", e)
      }
    })
  }
  // Yamado a la API para buscar los super heroes
  searchHeroService(searchValue: any): Observable<any>{
    return this.http.get(`${this.URL_API}/search/${searchValue}`)
  }
}
