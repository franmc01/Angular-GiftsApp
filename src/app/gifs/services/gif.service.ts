import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial:string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(query:string){
    if(!this._historial.includes(query.toLowerCase())){
      this._historial.unshift(query);
      this._historial =this._historial.splice(0,10);
    }
    console.log(this._historial);
  }

}
