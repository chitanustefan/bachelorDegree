import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from '../app/news/news.component';
import { ContactComponent } from '../app/contact/contact.component';
import { HomeComponent } from '../app/home/home.component';
import { ProfilComponent } from '../app/profil/profil.component';
import { AboutComponent } from '../app/about/about.component';
import { CoordonatorComponent } from '../app/coordonator/coordonator.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { from } from 'rxjs';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { RedirectHomeService } from './service/redirect-home.service';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RedirectHomeService]},  
  {path: 'news', component: NewsComponent, canActivate: [AfterLoginService]},
  {path: 'contact', component: ContactComponent, canActivate: [AfterLoginService]},
  {path: 'home', component: HomeComponent, canActivate: [AfterLoginService]},
  {path: 'profil', component: ProfilComponent, canActivate: [AfterLoginService]},
  {path: 'about', component: AboutComponent, canActivate: [AfterLoginService]},
  {path: 'coordonator', component: CoordonatorComponent, canActivate: [AfterLoginService]},
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  {path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  {path: 'charts', component: ChartsComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
