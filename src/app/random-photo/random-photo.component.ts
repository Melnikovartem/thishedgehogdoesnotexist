import { Component, OnInit } from '@angular/core';

function generateNum(size: number, ) {
  let len = Math.ceil(Math.log10(size));
  let num = Math.round(Math.random() * size);
  let s = new Array(len + 1).join("0") + num;
  return s.substr(s.length - len);
}

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {
  src = `./assets/imgs/seed${generateNum(3000)}.png`;
  constructor() { }

  ngOnInit(): void { }
}
