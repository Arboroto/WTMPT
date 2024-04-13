import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Hero } from '../../models/hero.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'assets/heroes.json';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(delay(1000));
  }

  getHero(id: number): Observable<Hero | undefined> {
    return this.getHeroes().pipe(
      delay(1000),
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }
}

