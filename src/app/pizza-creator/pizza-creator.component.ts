import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginComponent } from '../login.component';


const pizzaGroup = {
  size: ['small', Validators.required],
  toppings: [[]]
};

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent implements OnInit {

  addPizzaGroup(): FormGroup {
    return this.formBuilder.group(pizzaGroup);
  };

  removePizza(index: number){
    this.pizzas.removeAt(index)
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form.controls.pizzas.push(addPizzaGroup());
  }

}
