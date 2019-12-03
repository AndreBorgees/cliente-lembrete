import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

/* Para realizar as requisições para a API */
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

/* Qualquer componente da nossa aplicação pode injetar esse service*/
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  /* O metodo retorna um Observable*/
  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    /* Realiza uma requisição do tipo get passando a url e retorna um array de Lembrete*/
    return this.http.get<Lembrete[]>(url);
  }

  /* O metodo retorna um Observable*/
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    /* Realiza uma requisição do tipo get passando a url e retorna um unico Lembrete*/
    return this.http.get<Lembrete>(url);
  }

  /* O metodo retorna um Observable*/
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    /* Realiza uma requisição do tipo post passando a url e um lembrete*/
    return this.http.post<Lembrete>(url, lembrete);
  }

  /* O metodo retorna um Observable*/
  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    /* Realiza uma requisição do tipo put passando a url e um lembrete*/
    return this.http.put<Lembrete>(url, lembrete);
  }

  /* O metodo retorna um Observable*/
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    /* Realiza uma requisição do tipo delete passando a url e um lembrete*/
    return this.http.delete<Lembrete>(url);
  }
}
