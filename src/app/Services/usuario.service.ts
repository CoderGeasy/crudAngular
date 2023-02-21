import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Usuario } from '../Interfaces/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario_url =environment.urlapi+'/register';
  private login_url =environment.urlapi+'/login';

  private log_out_url =environment.urlapi+'/logout';

  private admin_url = environment.urlapi+ '/admin';
  private usuario_rl =environment.urlapi+ '/usuario';
  

  constructor(private http:HttpClient) { }
  
  addusuario(usuario: Usuario):Observable<Usuario>
  {
    return this.http.post<Usuario>(this.usuario_url,usuario).pipe(catchError(this.handleError));
  }

  login(usuario: Usuario)
  {
      return this.http.post<Usuario>(this.login_url,usuario).pipe(retry(3), catchError(this.handleError));
  }

  logout()
  {
    return this.http.post(this.log_out_url, null).pipe(retry(3), catchError(this.handleError));
  }

  //Funciones de usuarios
  getusuarios(): Observable<Usuario[]> 
  {
    return this.http.get<Usuario[]>(this.admin_url).pipe(retry(3),catchError(this.handleError));
  }
  
  mostrarUnico(id: number)
  {
    return this.http.get<Usuario>(this.usuario_rl + '/' + id).pipe(retry(3));
  }

  actualizarEstado(usuario: Usuario, id: number)
  {
    return this.http.put<Usuario>(this.admin_url + '/status/' + id, usuario).pipe(retry(3));
  }

  actualizarRol(usuario: Usuario, id: number)
  {
    return this.http.put<Usuario>(this.admin_url + '/' + id, usuario).pipe(retry(3));
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
    // Return an observable with a usuario-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
