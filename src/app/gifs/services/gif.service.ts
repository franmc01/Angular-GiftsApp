import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GiphyResponse, Data } from '../models/giphy.model';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial:string[] = [];

  public resultados:Data[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient) { }

  buscarGifs(query:string){
    if(!this._historial.includes(query.toLowerCase())){
      this._historial.unshift(query);
      this._historial =this._historial.splice(0,10);
    }
    const url = `${environment.giphyUrl}/search?api_key=${environment.apiKeyGiphy}&q=${query}&limit=10`;
    this.http.get<GiphyResponse>(url).subscribe(resp=>{
      this.resultados =resp.data;
    })

  }

}
