import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DataService } from './data.service';
import { ProductUpdaterComponent } from './products/product-updater/product-updater.component';
import { HeaderComponent } from './header/header.component';
import { SignUpFormComponent } from './signup/signupform.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './users/user.service';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    InventoryComponent,
    ProductUpdaterComponent,
    HeaderComponent,
    SignUpFormComponent,
    UsersComponent,
    MenuComponent,
    PageNotFoundComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
