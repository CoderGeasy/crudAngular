import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';


import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario.interface';
import { UsuarioService } from 'src/app/Services/usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './Registro.component.html',
  styleUrls: ['./Registro.component.css']
})
export class RegistroComponent {

  showError: boolean = false;
  form: FormGroup;
  usuario?:Usuario;

  public apiFailed: boolean = false;
  
  constructor(private usuarioService: UsuarioService,private fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
      confirmar_contraseña: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
 
  ngOnInit() { }

  onSubmit(values: Usuario)
  {
    this.usuarioService.addusuario(values).subscribe((response:any) => {
      localStorage.setItem('url', response.url);
    },
    error => {
      console.log(error); 
      this.showError = true; 
      this.apiFailed = true;
    });
  }

  backToLogin()
  {
    this.router.navigate(['login']);
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
