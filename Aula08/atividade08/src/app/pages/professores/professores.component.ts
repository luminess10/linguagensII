import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  angular = 'Listagem de cursos e seus respectivos professores';
  nomeCursos = [
    { curso: 'Engenharia da Computação' },
    { curso: 'Engenharia Elétrica' },
    { curso: 'Engenharia Eletrônica' },
    { curso: 'Engenharia de Controle e Automação' },
    { curso: 'Engenharia Mecânica' },
    { curso: 'Engenharia Civil' },
    { curso: 'Engenharia Química' },
    { curso: 'Engenharia de Alimentos' },
    { curso: 'Engenharia de Produção' },
  ];
  onAdicionarCurso(nomeCurso) {this.nomeCursos = [nomeCurso, ...this.nomeCursos]};
  constructor() {}

  ngOnInit(): void {}
}
