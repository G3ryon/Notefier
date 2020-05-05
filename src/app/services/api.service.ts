import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Note } from '../models/note';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API path
  base_path = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Get notes data
  getListNotes(): Observable<Note> {
    return this.http
      .get<Note>(this.base_path + 'notes')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get categories data
  getListCategories(): Observable<Category> {
    return this.http
      .get<Category>(this.base_path + 'categories')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get notes data by id
  getNote(id): Observable<Note> {
    return this.http
      .get<Note>(this.base_path + 'notes/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get categories data by id
  getCategory(id): Observable<Category> {
    return this.http
      .get<Category>(this.base_path + 'categories/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update Note by id
  updateNote(id, item): Observable<Note> {
    return this.http
      .put<Note>(this.base_path + 'notes/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update category by id
  updateCategory(id, item): Observable<Category> {
    return this.http
      .put<Category>(this.base_path + 'categories/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete Note by id
 deleteNote(id) {
      return this.http
      .delete<Note>(this.base_path + 'notes/' + id, this.httpOptions)
      .pipe(
       retry(2),
        catchError(this.handleError)
      )
  }
  // Delete category by id
  deleteCategory(id){
      return this.http
        .delete<Category>(this.base_path + 'categories/' + id, this.httpOptions)
        .pipe(
          retry(2),
            catchError(this.handleError)
        )
  }


  // Create a new note
  createItemNotes(item): Observable<Note> {
    return this.http
      .post<Note>(this.base_path + 'notes', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Create a new category
    createItemCategories(item): Observable<Category> {
      return this.http
        .post<Category>(this.base_path + 'categories', JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

}
