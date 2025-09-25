import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        title: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'clientes',
                loadComponent: () => import('./components/clients/clients.component').then((m) => m.ClientsComponent)
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'clientes'
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    }
];
