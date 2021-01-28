import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtBuscar') txt!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  buscarGif() {
    const valor = this.txt.nativeElement.value;
    console.log(valor);
    this.txt.nativeElement.value = "";
  }

}
