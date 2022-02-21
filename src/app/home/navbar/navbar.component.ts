import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  search = new FormControl('')

  constructor(private router: Router, private heroService: HeroesService) { }

  ngOnInit(): void {
  }
  // Log out (Limpio el "LocalStorage")
  cleanLocalStorage(){
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }
  searchHeroComponent(nameHero: any){
    this.heroService.SharingHeroeData = nameHero;
  }
}
