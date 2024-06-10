import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { environments } from '../environments/environments';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: environments.domainCookies
  },
  position: "bottom-left",
  theme: "classic",
  palette: {
    popup: {
      background: "#000000",
      text: "#ffffff",
      link: "#ffffff",
    },
    button: {
      background: "#f1d600",
      text: "#000000",
      border: "transparent"
    }
  },
  type: "opt-out",
  content: {
    header: 'Esta página web usa cookies',
    message: "Utilizamos cookies propias y de terceros para mejorar tu experiencia en nuestro sitio web, analizar el tráfico, y ofrecerte publicidad adaptada a tus intereses. Al hacer clic en 'Aceptar todas las cookies', aceptas el uso de todas las cookies. Puedes gestionar tus preferencias de cookies o rechazar su uso haciendo clic en 'Configuración de cookies'. Para más información, consulta nuestra política de privacidad y cookies.",
    dismiss: "Aceptar",
    allow: "Aceptar",
    deny: "Rechazar cookies",
    link: "Politica de Privacidad",
    href: `${environments.baseUrlFront}/cookie-policy`,
    policy: "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
