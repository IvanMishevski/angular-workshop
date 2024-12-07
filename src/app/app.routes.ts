import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFound } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //user routing
    { path: 'login', component: LoginComponent,canActivate: [AuthGuard], },
    { path: 'register', component: RegisterComponent,canActivate: [AuthGuard], },
    { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard], },
    { path: 'logout', component: ProfileComponent },
    //start theme routing
    {
        path: 'themes', children: [
            { path: '', component: MainComponent },
            { path: ':themeId', component: CurrentThemeComponent }
        ]
    },
    {
        path: 'add-theme',
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./theme/add-theme/add-theme.component').then((c) => 
                c.AddThemeComponent
         )
    },
//end theme routing
{ path: 'error', component: ErrorMsgComponent },
{ path: '404*', component: PageNotFound },
{ path: '**', component: PageNotFound }
];
