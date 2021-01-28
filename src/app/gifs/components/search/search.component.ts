import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtBuscar') txt!: ElementRef<HTMLInputElement>;

  constructor(private gifService:GifService) { }

  ngOnInit(): void {
  }

  buscarGif() {
    const valor = this.txt.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txt.nativeElement.value = "";
  }

}
