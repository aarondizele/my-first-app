import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]> // request-cancel-new-request

  private searchTerms = new Subject<string>();

  constructor(private route: Router,
              private heroSearch: HeroSearchService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300) // wait 300ms after each keystroke
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(term => term ? this.heroSearch.search(term) : Observable.of<Hero[]>([])) // switch to new observable each time the term changes | return the http search observable or the observables of empty heroes of there was no search term
      .catch(error => {
        return Observable.of<Hero[]>([]);
      });
  }


  gotoDetail(hero: Hero): void{
    let link = ['/detail', hero.id];
    this.route.navigate(link);
  }


}
