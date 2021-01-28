import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-data-gifs',
  templateUrl: './data-gifs.component.html',
  styleUrls: ['./data-gifs.component.css']
})
export class DataGifsComponent implements OnInit {

  get resultados(){
    return this.gifService.resultados;
  }

  constructor(private gifService:GifService) { }

  ngOnInit(): void {
  }

}
