import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { GiphyResponse, Data } from '../models/giphy.model';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];

  public resultados: Data[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {
    if (!this._historial.includes(query.toLowerCase())) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', environment.apiKeyGiphy)
      .set('limit', '15')
      .set('q', query)

    const url = `${environment.giphyUrl}/search?`;
    this.http.get<GiphyResponse>(url, { params }).subscribe(resp => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })

  }

}
