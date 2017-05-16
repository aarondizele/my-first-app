import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import {ActivatedRoute, Params, Route} from '@angular/router';
import { Location } from '@angular/common';
import { emailMatcher } from './emailMatcher';
// import { pizzaGroup } from './pizzaGroup';

const pizzaGroup = {
  size: ['small', Validators.required],
  topping: [[]]
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  email: string = '';
  submitted: boolean = false;
  titleAlert = 'This field is required';
  day = new Date(1994, 5, 5);

  form: FormGroup; // Template-driven

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) {
    this.rForm = formBuilder.group({
      details: this.formBuilder.group({
        'name': [null, Validators.required],
        'description': [null, Validators.compose([Validators.required, Validators.maxLength(500), Validators.minLength(30)])],
        'email': [null, Validators.required],
        'confirm': [null, Validators.required],
        'validate': '',
      }, {validator: emailMatcher}),
      pizzas: this.formBuilder.array([]),
    });
  }

  userLogin(post) {
    this.submitted = true;
    this.description = post.description;
    this.name = post.name;
    this.email = post.email;
    this.location.back();
  }

  // Pizza
  //


  //

  ngOnInit() {
    // Form 1
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();

      });

    // Template-driven
    // this.form = new FormGroup({
    //   details: new FormGroup({
    //     name: new FormControl(''),
    //     email: new FormControl(''),
    //     confirm: new FormControl(''),
    //     phone: new FormControl(''),
    //     address: new FormControl(''),
    //     postcode: new FormControl(''),
    //   }),
    //   pizzas: new FormArray([])
    // });

  }
}

