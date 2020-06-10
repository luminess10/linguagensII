import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { ListaprofessoresComponent } from './pages/partials/listaprofessores/listaprofessores.component';
import { ListacursosComponent } from './pages/partials/listacursos/listacursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessoresComponent,
    SugestoesComponent,
    ListaprofessoresComponent,
    ListacursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
