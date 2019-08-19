import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{

  numberOfLikes : number = 0;
  
  likeButtonClick(id) {
    this.numberOfLikes++;
  }

  dislikeButtonClick(id) {
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
