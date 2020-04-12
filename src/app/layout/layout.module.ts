import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutClassicComponent } from './layout-classic/layout-classic.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutLoaderComponent } from './layout-loader/layout-loader.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [LayoutClassicComponent, SidenavMenuComponent, TopNavBarComponent, FooterComponent, LayoutLoaderComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
