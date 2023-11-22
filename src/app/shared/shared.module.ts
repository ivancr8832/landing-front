import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { WhatsAppButtonComponent } from './components/whats-app-button/whats-app-button.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    WhatsAppButtonComponent,
    OnlyNumbersDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    WhatsAppButtonComponent,
    OnlyNumbersDirective
  ]
})
export class SharedModule { }
