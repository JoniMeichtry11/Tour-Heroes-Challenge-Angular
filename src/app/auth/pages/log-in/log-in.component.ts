import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from 'src/app/models/login.interface';

import { AutenticationService } from '../../services/autentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @ViewChild('errorMessage', {static: false}) errorMessage: any;

  group!: FormGroup;
  messageErrorText = "";
  sonido: boolean = true;


  constructor(private autenticationService: AutenticationService, private router: Router) { }

  ngOnInit(): void {
    this.group = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  }

  loginWhitEmail(form:Login){
    const messageError = this.errorMessage.nativeElement;
    this.autenticationService.SignIn(form).subscribe({
      next: (data) => {
        console.log("data: ", data);
        localStorage.setItem("token", data.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log("errorHTTP: ", err)
        messageError.style.display = 'block';
        this.messageErrorText = err.error.error;
      }
    })
  }

  sonidoVideo(){
    if(this.sonido === true){
      this.sonido = false
    }else {
      this.sonido = true;
    }
  }

  get Email(){return this.group.get('email')}
  get Password(){return this.group.get('password')}
}
