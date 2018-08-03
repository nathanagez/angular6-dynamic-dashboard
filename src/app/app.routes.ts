import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router'; 

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard/1' },
    { path: 'dashboard/:id', component: DashboardComponent },
]