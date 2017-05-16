import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServerComponent } from './server.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';


/* Fake web services */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login.component';
import { SortedPipe } from './sorted.pipe';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';


@NgModule({
  declarations: [
    SortedPipe,
    AppComponent,
    ServerComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    PizzaCreatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // for ngModel Data binding
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
