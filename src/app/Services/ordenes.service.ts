import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Ordenes } from '../Interfaces/ordenes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ordenService 
{
  private orden_url = environment.urlapi+'/ordens';
  
  constructor(private http:HttpClient) { }

  getordens(): Observable<Ordenes[]> 
  {
    return this.http.get<Ordenes[]>(this.orden_url).pipe(retry(3),catchError(this.handleError));
  }

  addorden(orden: Ordenes):Observable<Ordenes>
  {
    return this.http.post<Ordenes>(this.orden_url,orden).pipe(catchError(this.handleError));
  }

  eliminarorden(id: number)
  {
    return this.http.delete<Ordenes>(this.orden_url + '/' + id).pipe(retry(3));
  }

  actualizarorden(orden: Ordenes, id: number)
  {
    return this.http.put<Ordenes>(this.orden_url + '/' + id, orden).pipe(retry(3));
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Ordenes>(this.orden_url + '/' + id).pipe(retry(3));
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
