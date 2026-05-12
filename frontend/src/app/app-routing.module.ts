import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'issues',
    loadChildren: () => import('./pages/issues/issues.module').then( m => m.IssuesPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'revenue',
    loadChildren: () => import('./pages/revenue/revenue.module').then( m => m.RevenuePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
