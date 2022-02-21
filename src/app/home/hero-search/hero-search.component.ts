import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { TeamHeroesService } from 'src/app/services/team-heroes.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  search = new FormControl('');

  heroe$:any = [];

  error$: boolean = false;

  constructor(private heroService: HeroesService, private teamHeroe: TeamHeroesService) {
    this.heroe$ = this.heroService.SharingHeroe
  }

  ngOnInit(): void {
    this.heroService.getMessageError().subscribe(error => {
      this.error$ = error;
    });
  }

  searchHeroComponent(nameHero: any){
    this.heroService.SharingHeroeData = nameHero;
  }

  sendHeroe(card: any){
    this.teamHeroe.SharingHeroeData = card;
  }
}
