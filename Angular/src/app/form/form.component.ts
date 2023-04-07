import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit  {
  homeForm!: FormGroup;

constructor(){}

   ngOnInit(): void {
  this.homeForm = new FormGroup({
    name:  new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    codFiscale: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$')])
  })
  }
    

  onSubmit(): void {
    console.log(this.homeForm)
  }
}
