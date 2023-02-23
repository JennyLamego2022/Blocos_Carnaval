import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export interface Blocos {
  date: number;
  city: string
}


export class BlocosService {

  // url = `https://www.blocosderua.com/${city}/programacao-carnaval-blocos-de-rua?data=${date}`

  // constructor( private httpClient: HttpClient) { }

  // getBloco(): Observable<Blocos[]>{
  //   return this.httpClient.get<Blocos[]>(this.url)
  //   .pipe(
  //     retry(2),
  //     catchError(this.handleError))
  // }
}



