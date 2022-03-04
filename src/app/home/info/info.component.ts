import { Component, OnInit } from '@angular/core';
import { infoHeroe } from 'src/app/models/infoHeroe';
import { InfoHeroeService } from 'src/app/services/info-heroe.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  // Variables
  heroeData$: infoHeroe = {
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
  };

  aliasContainer: any;
  alias: any;

  constructor(private infoHeroe: InfoHeroeService) {

  }

  ngOnInit(): void {
    this.infoHeroe.SharingHeroe.subscribe({
      next: (heroe) => {
        this.heroeData$ = heroe
        this.alias = this.heroeData$.biography?.aliases.map((alias: any) => {
           return alias;
        });
        // Validaciones
        if(this.heroeData$.biography?.['full-name'] === ""){
          this.heroeData$.biography['full-name'] = this.heroeData$.name;
        }
        if(this.alias?.length <= 1){
          this.aliasContainer = {"display": "none"};
        } else{
          this.aliasContainer = {"display": "block"};
        }
        if(this.heroeData$.appearance?.weight[1] === "0 kg"){
          this.heroeData$.appearance.weight[1] = "Desconocido"
        }
        if(this.heroeData$.appearance?.height[1] === "0 cm"){
          this.heroeData$.appearance.height[1] = "Desconocido"
        }
        if(this.heroeData$.appearance?.["eye-color"] === "-"){
          this.heroeData$.appearance["eye-color"] = "Desconocido"
        }
        if(this.heroeData$.appearance?.["hair-color"] === "-"){
          this.heroeData$.appearance["hair-color"] = "Desconocido"
        }
        if(this.heroeData$.work?.occupation === "-"){
          this.heroeData$.work.occupation = "Desconocido"
        }
      },
      error: (error) => console.log("ocurrió un error", error)
    });
  }
}
