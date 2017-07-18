import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
