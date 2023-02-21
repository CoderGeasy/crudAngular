import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario.interface';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  estado?:Usuario;  
  id: number = 0;

  showError: boolean = false;
  public apiFailed: boolean = false;

  constructor(private fb: FormBuilder,private usuarioService: UsuarioService,private router:Router,private route: ActivatedRoute)
  {
    this.form = this.fb.group({
      email:  ['', [Validators.required, Validators.email]],
      contraseña:  ['',Validators.required],
    });  
  }
  
  onSubmit(values: Usuario)
  {  
    this.usuarioService.login(values).subscribe((response:any) =>
    {
      localStorage.setItem('id',response.usuario.id);
      localStorage.setItem('nombre',response.usuario.nombre);
      localStorage.setItem('rol',response.usuario.rol);
      localStorage.setItem('token',response.token);
      this.router.navigate(['/']);
    },
    error => {
      console.log(error); 
      this.showError = true; 
      this.apiFailed = true;
    });
  }

  backToSignUp()
  {
    this.router.navigate(['registro'])
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
