import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Login//
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/Registro/Registro.component';
//Cliente//
import { CrearClienteComponent } from './Componentes/Clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './Componentes/Clientes/editar-cliente/editar-cliente.component';
import { VerClienteComponent } from './Componentes/Clientes/ver-cliente/ver-cliente.component';
//Producto//
import { CrearProductoComponent } from './Componentes/Productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './Componentes/Productos/editar-producto/editar-producto.component';
import { VerProductoComponent } from './Componentes/Productos/ver-producto/ver-producto.component';
//Orden//
import { CrearOrdenComponent } from './Componentes/Ordenes/crear-orden/crear-orden.component';
import { EditarOrdenComponent } from './Componentes/Ordenes/editar-orden/editar-orden.component';
import { VerOrdenComponent } from './Componentes/Ordenes/ver-orden/ver-orden.component';



const routes: Routes = [
  //Default
  { path:'',redirectTo:'producto/ver',pathMatch:'full'},

  //Login
  { path:'login',component:LoginComponent},
  { path:'sign-up',component:RegistroComponent},

  //Cliente
  { path:'cliente/crear',component:CrearClienteComponent},
  { path:'cliente/editar/:id',component:EditarClienteComponent},
  { path:'cliente/ver',component:VerClienteComponent},

  //Productos
  { path:'producto/crear',component:CrearProductoComponent},
  { path:'producto/editar/:id',component:EditarProductoComponent},
  { path:'produto/ver',component:VerProductoComponent},

  //Ordenes
  { path:'ordenes/crear',component:CrearOrdenComponent},
  { path:'ordenes/editar/:id',component:EditarOrdenComponent},
  { path:'ordenes/ver',component:VerOrdenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
