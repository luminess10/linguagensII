import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { AlunosComponent } from './pages/alunos/alunos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'sugestoes', component: SugestoesComponent},
  {path: 'alunos', component: AlunosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
