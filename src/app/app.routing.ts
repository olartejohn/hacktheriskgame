import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes camara
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from './modules/zxing-scanner/zxing-scanner.module';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AfterloginComponent } from './views/afterlogin/afterlogin.component';
import { InstructionsComponent } from './views/instructions/instructions.component';
import { Page1980Component } from './views/1980/1980.component';
import { RegisterComponent } from './views/register/register.component';
import { BeginComponent } from './views/begin/begin.component';
import { MapComponent } from './views/map/map.component';
import { FirstRiskComponent } from './views/firstrisk/firstrisk.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'afterlogin',
    component: AfterloginComponent,
    data: {
      title: 'Afterlogin Page'
    }
  },
  {
    path: 'begin',
    component: BeginComponent,
    data: {
      title: 'Begin Page'
    }
  },
  {
    path: 'map',
    component: MapComponent,
    data: {
      title: 'Map Page'
    }
  },
  {
    path: 'firstrisk',
    component: FirstRiskComponent,
    data: {
      title: 'First Risk'
    }
  },
  {
    path: 'instrucciones',
    component: InstructionsComponent,
    data: {
      title: 'Página de instrucciones'
    }
  },
  {
    path: '1980',
    component: Page1980Component,
    data: {
      title: '1980 Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
  BrowserModule
],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
