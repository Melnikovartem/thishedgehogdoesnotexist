import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    RandomPhotoComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
