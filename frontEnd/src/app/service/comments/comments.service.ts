import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../../models/comment';
import {catchError, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CommentsService {
	private url = 'http://localhost:8080/SpringCore/comments/all';

	constructor(private http: HttpClient, private router:Router) { }

	getAllComments(): Observable<Comment[]> {
    console.log("CommentsService > getAllComments +++++++++++++++++++++");
		return this.http.get<Comment[]>(this.url)
		.pipe(
			catchError(this.handleError<Comment[]>('getAllComments', []))
		);
	}

  postNewComment(comment: Comment):Observable<Comment> {
    return this.http.post<Comment>("http://localhost:8080/SpringCore/comments/usercomment", comment)
      .pipe(
        catchError(this.handleError('postNewComment', comment))
      );
  }

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			console.error("CommentsService > ERROR: ", error);

			this.router.navigateByUrl('error');
			return of(result as T);
		};
	}
}
