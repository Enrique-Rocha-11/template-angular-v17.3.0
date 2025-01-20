import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'inicio',
        loadComponent: () => import('./UI/pages/home/home.component'),
        title: 'Home plantilla angular 17'
    },
    {
        path: '**',
        redirectTo: 'inicio',
    },

];
