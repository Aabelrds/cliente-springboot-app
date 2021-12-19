import { ContenidoComponent } from './contenido/clientes/contenido.component';
import { LoginComponent } from './usuarios/login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormComponent } from './contenido/form/form.component';



const routes : Routes = [
  {
    path:'',
    redirectTo:'clientes',
    pathMatch:'full'
  },
  {
    path:'clientes',
    component: ContenidoComponent
  },
  {
    path:'clientes/crear',
    component: FormComponent
  },
  {
    path:'clientes/crear/:id',
    component: FormComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo:''
  }
]

@NgModule({
  imports:[

    RouterModule.forRoot(routes),
  ],
  exports:[

    RouterModule
  ]
})





export class AppRoutingModule{}



