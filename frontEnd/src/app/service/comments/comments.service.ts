import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from './comment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CommentsService {
	private url = 'http://localhost:8080/SpringCore/comments/all';

	constructor(private http: HttpClient) { }

	getAllComments(): Observable<Comment[]> {
    console.log("CommentsService > getAllComments +++++++++++++++++++++");
		return this.http.get<Comment[]>(this.url)
		.pipe(
			catchError(this.handleError<Comment[]>('getAllComments', []))
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			console.error("CommentsService > ERROR: ", error);

			return of(result as T);
		};
	}
}