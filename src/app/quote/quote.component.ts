import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote (1,'“It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.”', 'Brian Tracy'),
    new Quote(2,'“Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.”','An Awesome Quote By Tim Ferriss'),
    new Quote(3,' “You Can Develop Any Habit Or Thought Or Behavior That You Consider Desirable Or Necessary.”','Brian Tracy'),
    new Quote(4,' “We Become What We Think About.”','Earl Nightingale'),
    new Quote(5,' “A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.”','Brian Tracy'),
    new Quote(6,'“The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It.”','Chinese Proverb'),

];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }



  constructor() { }

  ngOnInit() {
  }

}
