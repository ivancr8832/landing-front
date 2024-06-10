import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListBlogsComponent } from './pages/list-blogs/list-blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angularMaterial/angular-material.module';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';


@NgModule({
  declarations: [
    LandingLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListBlogsComponent,
    BlogComponent,
    SafeUrlPipe,
    CookiePolicyComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxPaginationModule
  ]
})
export class LandingModule { }
