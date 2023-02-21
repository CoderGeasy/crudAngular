import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Componentes
import { AppComponent } from './app.component';
import { CrearClienteComponent } from './Componentes/Clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './Componentes/Clientes/editar-cliente/editar-cliente.component';
import { CrearProductoComponent } from './Componentes/Productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './Componentes/Productos/editar-producto/editar-producto.component';
import { VerClienteComponent } from './Componentes/Clientes/ver-cliente/ver-cliente.component';
import { VerProductoComponent } from './Componentes/Productos/ver-producto/ver-producto.component';
import { CrearOrdenComponent } from './Componentes/Ordenes/crear-orden/crear-orden.component';
import { EditarOrdenComponent } from './Componentes/Ordenes/editar-orden/editar-orden.component';
import { VerOrdenComponent } from './Componentes/Ordenes/ver-orden/ver-orden.component';
import { PaginaErrorComponent } from './Componentes/pagina-error/pagina-error.component';
import { NavbarComponent } from './Componentes/Dashboard/navbar/navbar.component';
import { VerUsuariosComponent } from './Componentes/Usuarios/ver-usuarios/ver-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    VerClienteComponent,
    VerProductoComponent,
    CrearOrdenComponent,
    EditarOrdenComponent,
    VerOrdenComponent,
    PaginaErrorComponent,
    NavbarComponent,
    VerUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
