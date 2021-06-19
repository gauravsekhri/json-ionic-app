import { Component, OnInit } from '@angular/core';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.page.html',
  styleUrls: ['./image-page.page.scss'],
})
export class ImagePagePage implements OnInit {

  constructor() { }

  data2 = {
    imgpath: "E:\ionic1\scratch\src\assets\sec5.png"
  }

  ngOnInit() {
  }

}
