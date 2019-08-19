import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{

  numberOfLikes : number = 0;
  quote: any;
  
  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

  voteUp(id:number){
    this.quote[id].upVote()

  }
  voteDown(id:number){
    this.quote[id].downVote()

  }
  constructor() { }

  ngOnInit() {
  }

}
