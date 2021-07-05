import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface user{
  userId: number
  id: number,
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})

export class TableApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) {
   }
  //  https://jsonplaceholder.typicode.com/todos/

   getApi(): Observable<user[]>{
     console.log(2)
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/posts')
   }
}
