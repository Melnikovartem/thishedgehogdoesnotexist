import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {

  number = 9900 + Math.floor(Math.random() * 100);
  src = `${environment.imgs}/seed${9900 + Math.round(Math.random() * 100)}.png`;
  constructor() { }

  ngOnInit(): void { }
}
