import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { ListaprofessoresComponent } from './pages/partials/listaprofessores/listaprofessores.component';
import { ListacursosComponent } from './pages/partials/listacursos/listacursos.component';
import { ListacamposComponent } from './pages/partials/listacampos/listacampos.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { SombraDirective } from './diretivas/sombra.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessoresComponent,
    SugestoesComponent,
    ListaprofessoresComponent,
    ListacursosComponent,
    ListacamposComponent,
    AlunosComponent,
    SombraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
