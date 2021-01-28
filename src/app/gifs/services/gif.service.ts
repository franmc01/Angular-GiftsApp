import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial:string[] = [];

  //TODO: Tipar el arreglo y no dejar con any
  public resultados:any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient) { }

  buscarGifs(query:string){
    if(!this._historial.includes(query.toLowerCase())){
      this._historial.unshift(query);
      this._historial =this._historial.splice(0,10);
    }
    this.http.get(`${environment.giphyUrl}/search?api_key=${environment.apiKeyGiphy}&q=${query}&limit=10`).subscribe((resp:any)=>{
      this.resultados =resp.data;
    })

  }

}
