import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../Services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  
  id: number = 0;
  constructor(private usuarioService: UsuarioService,private router:Router)
  {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')
    if (token)
    {
      this.id =1;
      return true; 
    }else{
    alert("tu no tienes permiso");
    return false;
    }
    
    
    
  }

  
  
}
