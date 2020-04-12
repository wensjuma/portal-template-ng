import { TillModule } from './till/till.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutClassicComponent } from './layout/layout-classic/layout-classic.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    // data: {
    //   base: true
    // },
    component: LayoutClassicComponent,
    //scanActivate: [AuthGuard,AdminGuard],
    children: [

      {
        path: 'dashboard',
        loadChildren: './dashboards/dashboards.module#DashboardsModule',
        data: {
          title: 'Dashboard'
        }
      },

      {
        path: 'till',
        loadChildren: () => import('./till/till.module').then(m => m.TillModule),
        data: {
          title: 'Till Operations'
        }

      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
        data: {
          title: 'Transactions'
        }
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'users',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        data: {
          title: 'Users'
        }
      },
    ]
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/external/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
