import { Component, OnInit } from '@angular/core';
import { TeamHeroesService } from 'src/app/services/team-heroes.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  // Pido que busque un heroe si el array "cards$" está vacio
  headerTeam: boolean = false;
  // Array con heroes
  cards$:any = [];
  // Para validar la cantidad de heroes buenos y malos
  cardsHeroe = 0;
  cardsEvil = 0;
  // Titulo del equipo
  teamTitle = "";
  // Peso y altura total
  totalHeight = 0;
  totalWeight = 0;
  // Peso y altura promedio
  averageHeight = 0;
  averageWeight = 0;
  // Labels para las barras de progreso y su respectivo valor
  progressOne = [
    {name: "intelligence", valor: 0, percentage: 0},
    {name: "strength", valor: 0, percentage: 0},
    {name: "speed", valor: 0, percentage: 0},
  ];
  progressTwo = [
    {name: "durability", valor: 0, percentage: 0},
    {name: "power", valor: 0, percentage: 0},
    {name: "combat", valor: 0, percentage: 0},
  ];
  constructor(private teamHeroes: TeamHeroesService, private toastTr: ToastrService) {}

  ngOnInit(): void {
    this.teamHeroes.SharingHeroe.subscribe({
      next: (card) => {
        // Valido que la card no venga vacia
        if(card.length !== 0){
          this.headerTeam = true;
          // Valido que no existan más de 6 cards en "cards$"
          if(this.cards$.length <= 5){
            let cards = this.cards$;
            // Valido si el heroe ya existe
            function heroeExists(id: any) {
              return cards.some(function(cardHeroe: any) {
                return cardHeroe.id === id;
              });
            }
            if(heroeExists(card.id)){
              this.toastTr.error("The hero/villain already exists");
            } else {
              // Valido si es un heroe o un villano
              if(card.biography.alignment === 'good'){
                // Valido que no existan más de 3 heroes buenos
                if(this.cardsHeroe < 3){
                  // Sumo uno a la cantidad de heroes existentes.
                  this.cardsHeroe += 1;
                  // Sumo el "powerstat"
                  // Valido si el valor devuelto es NaN

                  // INTELLIGENCE
                  if(isNaN(Number(card.powerstats.intelligence))){
                    this.progressOne[0].valor += 0;
                  } else {
                    this.progressOne[0].valor += Number(card.powerstats.intelligence);
                  }
                  // STRENGTH
                  if(isNaN(Number(card.powerstats.strength))){
                    this.progressOne[1].valor += 0;
                  } else {
                    this.progressOne[1].valor += Number(card.powerstats.strength);
                  }
                  // SPEED
                  if(isNaN(Number(card.powerstats.speed))){
                    this.progressOne[2].valor += 0;
                  } else {
                    this.progressOne[2].valor += Number(card.powerstats.speed);
                  }
                  // DURABILITY
                  if(isNaN(Number(card.powerstats.durability))){
                    this.progressTwo[0].valor += 0;
                  } else {
                    this.progressTwo[0].valor += Number(card.powerstats.durability);
                  }
                  // POWER
                  if(isNaN(Number(card.powerstats.power))){
                    this.progressTwo[1].valor += 0;
                  } else {
                    this.progressTwo[1].valor += Number(card.powerstats.power);
                  }
                  // COMBAT
                  if(isNaN(Number(card.powerstats.combat))){
                    this.progressTwo[2].valor += 0;
                  } else {
                    this.progressTwo[2].valor += Number(card.powerstats.combat);
                  }
                  // Cambio el nombre del Team segun su powerstat
                  let mayor = Math.max(
                    this.progressOne[0].valor,
                    this.progressOne[1].valor,
                    this.progressOne[2].valor,
                    this.progressTwo[0].valor,
                    this.progressTwo[1].valor,
                    this.progressTwo[2].valor
                  );
                  if(mayor === this.progressOne[0].valor){
                    this.teamTitle =  this.progressOne[0].name;
                  } else if(mayor === this.progressOne[1].valor){
                    this.teamTitle =  this.progressOne[1].name;
                  } else if(mayor === this.progressOne[2].valor){
                    this.teamTitle =  this.progressOne[2].name;
                  } else if(mayor === this.progressTwo[0].valor){
                    this.teamTitle =  this.progressTwo[0].name;
                  } else if(mayor === this.progressTwo[1].valor){
                    this.teamTitle =  this.progressTwo[1].name;
                  } else if(mayor === this.progressTwo[2].valor){
                    this.teamTitle =  this.progressTwo[2].name;
                  }
                  // Calculo el promedio de el peso y la altura
                  this.calculateAverage(card, "sumando");
                  // Agrego el heroe satisfactoriamente :D
                  this.cards$.push(card);
                }else{
                  this.toastTr.error("You can't add more than 3 good heroes");
                }
              } else{
                // Valido que no existan más de 3 villanos
                if(this.cardsEvil < 3){
                  // Sumo uno a la cantidad de villanos existentes.
                  this.cardsEvil += 1;
                  // Sumo el "powerstat"
                  // Valido si el valor devuelto es NaN

                  // INTELLIGENCE
                  if(isNaN(Number(card.powerstats.intelligence))){
                    this.progressOne[0].valor += 0;
                  } else {
                    this.progressOne[0].valor += Number(card.powerstats.intelligence);
                  }
                  // STRENGTH
                  if(isNaN(Number(card.powerstats.strength))){
                    this.progressOne[1].valor += 0;
                  } else {
                    this.progressOne[1].valor += Number(card.powerstats.strength);
                  }
                  // SPEED
                  if(isNaN(Number(card.powerstats.speed))){
                    this.progressOne[2].valor += 0;
                  } else {
                    this.progressOne[2].valor += Number(card.powerstats.speed);
                  }
                  // DURABILITY
                  if(isNaN(Number(card.powerstats.durability))){
                    this.progressTwo[0].valor += 0;
                  } else {
                    this.progressTwo[0].valor += Number(card.powerstats.durability);
                  }
                  // POWER
                  if(isNaN(Number(card.powerstats.power))){
                    this.progressTwo[1].valor += 0;
                  } else {
                    this.progressTwo[1].valor += Number(card.powerstats.power);
                  }
                  // COMBAT
                  if(isNaN(Number(card.powerstats.combat))){
                    this.progressTwo[2].valor += 0;
                  } else {
                    this.progressTwo[2].valor += Number(card.powerstats.combat);
                  }
                  // Calculo el promedio de el peso y la altura
                  this.calculateAverage(card, "sumando");
                  // Agrego el villano satisfactoriamente :D
                  this.cards$.push(card);
                }else{
                  this.toastTr.error("You can't add more than 3 villains");
                }
              }
            }
          }
          else{
            this.toastTr.error("You can not add more than 6 members");
          }
        } else{
          this.headerTeam = false;
        }
      }
    })
  }

  calculateAverage(card: any, calculo: string){
    let cantidadCards = this.cards$.length;
    let height = Number(card.appearance.height[1].slice(0, -2));
    let weight = Number(card.appearance.weight[1].slice(0, -2));
    if(isNaN(height)){
      height = 0;
    }
    if(isNaN(weight)){
      weight = 0;
    }
    if(calculo === "sumando"){
      if(cantidadCards === 0){
        // Promedio de altura
        this.totalHeight += height;
        this.averageHeight = this.totalHeight;
        // Promedio de Peso
        this.totalWeight += weight;
        this.averageWeight = this.totalWeight;
      } else {
        // Promedio de altura
        this.totalHeight += height;
        this.averageHeight = this.totalHeight / cantidadCards;
        // Promedio de Peso
        this.totalWeight += weight;
        this.averageWeight = this.totalWeight / cantidadCards;
      }
    } else {
      // Promedio de altura
      this.totalHeight -= height;
      this.averageHeight = this.totalHeight / cantidadCards;
      // Promedio de Peso
      this.totalWeight -= weight;
      this.averageWeight = this.totalWeight / cantidadCards;
    }
  }

  deleteCard(card: any){
    // Resto el "powerstat"
    // Valido si el valor devuelto es NaN

    // INTELLIGENCE
    if(isNaN(Number(card.powerstats.intelligence))){
      this.progressOne[0].valor -= 0;
    } else {
      this.progressOne[0].valor -= Number(card.powerstats.intelligence);
    }
    // STRENGTH
    if(isNaN(Number(card.powerstats.strength))){
      this.progressOne[1].valor -= 0;
    } else {
      this.progressOne[1].valor -= Number(card.powerstats.strength);
    }
    // SPEED
    if(isNaN(Number(card.powerstats.speed))){
      this.progressOne[2].valor -= 0;
    } else {
      this.progressOne[2].valor -= Number(card.powerstats.speed);
    }
    // DURABILITY
    if(isNaN(Number(card.powerstats.durability))){
      this.progressTwo[0].valor -= 0;
    } else {
      this.progressTwo[0].valor -= Number(card.powerstats.durability);
    }
    // POWER
    if(isNaN(Number(card.powerstats.power))){
      this.progressTwo[1].valor -= 0;
    } else {
      this.progressTwo[1].valor -= Number(card.powerstats.power);
    }
    // COMBAT
    if(isNaN(Number(card.powerstats.combat))){
      this.progressTwo[2].valor -= 0;
    } else {
      this.progressTwo[2].valor -= Number(card.powerstats.combat);
    }
    // Cambio el nombre del Team segun su powerstat
    let mayor = Math.max(
      this.progressOne[0].valor,
      this.progressOne[1].valor,
      this.progressOne[2].valor,
      this.progressTwo[0].valor,
      this.progressTwo[1].valor,
      this.progressTwo[2].valor
    );
    if(mayor === this.progressOne[0].valor){
      this.teamTitle =  this.progressOne[0].name;
    } else if(mayor === this.progressOne[1].valor){
      this.teamTitle =  this.progressOne[1].name;
    } else if(mayor === this.progressOne[2].valor){
      this.teamTitle =  this.progressOne[2].name;
    } else if(mayor === this.progressTwo[0].valor){
      this.teamTitle =  this.progressTwo[0].name;
    } else if(mayor === this.progressTwo[1].valor){
      this.teamTitle =  this.progressTwo[1].name;
    } else if(mayor === this.progressTwo[2].valor){
      this.teamTitle =  this.progressTwo[2].name;
    }
    // Calculo el promedio de el peso y la altura
    this.calculateAverage(card, "restando");
    // Valido si es un heroe o un villano y bajo su "cantidad"
    if(card.biography.alignment === 'good'){
        this.cardsHeroe -= 1;
    } else{
      this.cardsEvil -= 1;
    }
    // Elimino la card
    this.cards$ = this.cards$.filter((heroe:any) => {
      return heroe.id !== card.id;
    })
    if(this.cards$.length === 0){
      this.headerTeam = false;
    }
  }
}
