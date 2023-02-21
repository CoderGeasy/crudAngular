import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Producto } from '../Interfaces/producto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class productoService {
  private productos_url =environment.urlapi+'/productos';
  
  constructor(private http:HttpClient) { }

  getproductos(): Observable<Producto[]> 
  {
    return this.http.get<Producto[]>(this.productos_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addproductos(producto: Producto):Observable<Producto>
  {
    return this.http.post<Producto>(this.productos_url,producto)
    .pipe(
      catchError(this.handleError)
    );
  }

  eliminarproducto(id: number)
  {
    return this.http.delete<Producto>(this.productos_url + '/' + id).pipe(retry(3));
  }

  actualizarproducto(producto: Producto, id: number)
  {
    return this.http.put<Producto>(this.productos_url + '/' + id, producto).pipe(retry(3));
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Producto>(this.productos_url + '/' + id).pipe(retry(3));
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
