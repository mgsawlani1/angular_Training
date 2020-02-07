import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './signup/signupform.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {
    path:' ',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpFormComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:'userdetails/:id',
        component:UserDetailsComponent
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
