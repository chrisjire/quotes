import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{

  numberOfLikes : number = 0;
  
  likeButtonClick(voteUp) {
    this.numberOfLikes++;
  }

  dislikeButtonClick(downVote) {
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
