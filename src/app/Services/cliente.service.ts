import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Cliente } from '../Interfaces/cliente.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class clienteService {

  private clientees_url =environment.urlapi+'/clientes';

  constructor(private http:HttpClient) { }

  getclientees(): Observable<Cliente[]> 
  {
    return this.http.get<Cliente[]>(this.clientees_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addcliente(cliente: Cliente):Observable<Cliente>
  {
    return this.http.post<Cliente>(this.clientees_url,cliente)
    .pipe(
      catchError(this.handleError)
    );
  }

  eliminarcliente(id: number)
  {
    return this.http.delete<Cliente>(this.clientees_url + '/' + id).pipe(retry(3));
  }

  actualizarcliente(cliente: Cliente, id: number)
  {
    return this.http.put<Cliente>(this.clientees_url + '/' + id, cliente).pipe(retry(3));
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Cliente>(this.clientees_url + '/' + id).pipe(retry(3));
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
