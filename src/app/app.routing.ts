import { Routes } from '@angular/router';
import { usersComponent } from './views/users/users.component';

export const rootRouterConfig: Routes = [
    {
      path: '',
      component: usersComponent,
      pathMatch: 'full'
    }
]
