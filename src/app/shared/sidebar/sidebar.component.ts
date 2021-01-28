import { Component, OnInit } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.gifService.historial;
  }
  constructor(private gifService:GifService) { }

  ngOnInit(): void {
  }

  buscarH(termino:string){
    this.gifService.buscarGifs(termino);
  }

}
