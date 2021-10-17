import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from '../../models/comment';
import { CommentsService } from '../../service/comments/comments.service';

const c = {product_id:2, user_id:2, comment:"Another Placeholder Comment here."};

@Component({
	selector: 'app-modal',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	error:string = "";
	commentSubmitted = false;

	constructor(private commentService: CommentsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
	}

	submitCommentForm(data: string): void  {
		console.log("submitCommentForm data ++++++++++: ", data);
		this.commentService.postNewComment(c).subscribe();
	}
}
