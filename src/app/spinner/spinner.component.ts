import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading$: boolean = false;

  constructor(private spinner: SpinnerService) {}

  ngOnInit(): void{
    this.spinner.getSpinner$().subscribe(spinner => {
      this.isLoading$ = spinner;
    })
  }
}
