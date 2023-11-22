import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHomeServicesComponent } from './card-home-services/card-home-services.component';
import { AboutMisionVisionComponent } from './about-mision-vision/about-mision-vision.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { DialogScheduleMeetingComponent } from './dialog-schedule-meeting/dialog-schedule-meeting.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SnackConfirmationComponent } from './snack-confirmation/snack-confirmation.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../angularMaterial/angular-material.module';

@NgModule({
  declarations: [
    CardHomeServicesComponent,
    AboutMisionVisionComponent,
    BlogCardComponent,
    BlogCategoriesComponent,
    DialogScheduleMeetingComponent,
    SnackConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    CardHomeServicesComponent,
    AboutMisionVisionComponent,
    BlogCardComponent,
    BlogCategoriesComponent
  ]
})
export class ComponentsModule { }
