import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent/*,
        children: [{ path:'recover-password', component: RecoverPasswordComponent }]*/ },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent }
];
