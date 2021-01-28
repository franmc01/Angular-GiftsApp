import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { SearchComponent } from './components/search/search.component';
import { DataGifsComponent } from './components/data-gifs/data-gifs.component';



@NgModule({
  declarations: [GifPageComponent, SearchComponent,DataGifsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GifPageComponent
  ]
})
export class GifsModule { }
