import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/guards/auth.guard';
import { CONTAINERS } from './common/common-layout.module'

const routes: Routes = [
  {
    path: '',
    component: CONTAINERS.CommonLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'build',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/build/build.module').then(m => m.BuildModule)
      },
      {
        path: 'myresume',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/myresume/myresume.module').then(m => m.MyresumeModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
