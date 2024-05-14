import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full',
        loadComponent:() => import('./components/welcome/welcome.component').then(c => c.WelcomeComponent) },
    { path: 'welcome',
        loadComponent:() => import('./components/welcome/welcome.component').then(c => c.WelcomeComponent) },
    { path: 'login',
        loadComponent:() => import('./components/login/login.component').then(c => c.LoginComponent) },
    { path: 'register',
        loadComponent:() => import('./components/register/register.component').then(c => c.RegisterComponent) },
    { path: 'recover-password',
        loadComponent:() => import('./components/recover-password/recover-password.component').then(c => c.RecoverPasswordComponent) },
    { path: 'about',
        loadComponent:() => import('./components/about/about.component').then(c => c.AboutComponent) },
    { path: 'home',
        loadComponent:() => import('./components/home/home.component').then(c => c.HomeComponent) },
    { path: 'chat',
        loadComponent:() => import('./components/home/dashboard/chat/chat.component').then(c => c.ChatComponent) },
    { path: 'user-profile',
        loadComponent:() => import('./components/home/dashboard/user-profile/user-profile.component').then(c => c.UserProfileComponent) },
    { path: 'statistics',
        loadComponent:() => import('./components/home/dashboard/statistics/statistics.component').then(c => c.StatisticsComponent) },
    { path: '**',
        loadComponent:() => import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) 
    }
];