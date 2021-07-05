import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHero(id:number):Observable<Hero> {
    const  URL = `${this.heroesUrl}/${id}`
    
    return this.http.get<Hero>(URL).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('getHero'))
    )
  }

  public handleError<T>(operation = 'operation', result?: T) {
    
    return (error:any):Observable<T>  => {
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }

  }

  private log(message:string) {
    this.messageService.addMessage(`HeroService: fetched hero id=${message}`);
  }

  updateHero(hero:Hero): Observable<any> {
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')))
  }
  
  heroSearch(term:string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([])
    }
    
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
    .pipe(
      tap(x => x.length ?
      this.log(`${this.heroesUrl}/?name=${term}`) :
      this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
      )
  }
  

  constructor(private messageService:MessageService, private http:HttpClient) {

   }
}
