export class Quote {
    showDescription: boolean;
    upvotes: number;
    downvotes: number;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date, upvotes:number,downvotes:number){
    this.showDescription=false;
    this.upvotes = upvotes
	this.downvotes = downvotes
    }

    upVote(){
		this.upvotes++
	}
	downVote(){
		this.downvotes++
	}
}