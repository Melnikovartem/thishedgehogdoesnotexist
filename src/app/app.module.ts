import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
