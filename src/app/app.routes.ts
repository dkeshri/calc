import { Routes } from '@angular/router';
export const routes: Routes = [
    { path:'home', loadComponent: ()=> import('./pages/home/home.component').then( c => c.HomeComponent)},
    { path:'area', loadComponent: ()=> import('./pages/area/area.component').then( c => c.AreaComponent)},
    { path:'**', redirectTo:'home'}
];
