import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

import { Login } from './../../models/login.interface';
import { Response } from './../../models/response.interface';

import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  API_TOKEN = "http://challenge-react.alkemy.org/";

  constructor(private http: HttpClient, private configService: ConfigService) { }

  // Iniciar sesión
  SignIn(form: Login):Observable<Response>{
    return this.http.post<Response>(this.API_TOKEN, form);
  }
}
