import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OfficesComponent } from './offices/offices.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo: "/home" , pathMatch: "full"},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"services" , component:ServicesComponent},
  {path:"offices" , component:OfficesComponent},
  {path:"news" , component:NewsComponent},
  {path:"contact" , component:ContactComponent},
  {path:"admin" , component:AdminComponent},
  {path:"user" , component:UserComponent},
  {path:"login" , component:LoginComponent},
  {path: "signup", component: SignupComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent=[HomeComponent, AboutComponent,ServicesComponent,OfficesComponent,NewsComponent,ContactComponent,AdminComponent,UserComponent,LoginComponent, SignupComponent]
