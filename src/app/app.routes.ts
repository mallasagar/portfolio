import { Routes } from '@angular/router';

export const routes: Routes = [
     {path: '', loadComponent: () => import('./components/profile/profile.component').then(mod => mod.ProfileComponent)},
     {path:'home', redirectTo:'' }
   
];
