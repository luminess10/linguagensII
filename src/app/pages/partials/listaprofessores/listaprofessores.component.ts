import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaprofessores',
  templateUrl: './listaprofessores.component.html',
  styleUrls: ['./listaprofessores.component.css'],
})
export class ListaprofessoresComponent implements OnInit {
  nomeProf = [
    { professores: 'Angelo Sebastiao Zanini' },
    { professores: 'Edval Delbone' },
    { professores: 'Sergio Ribeiro Augusto' },
    { professores: 'Fernando Silveira Madani' },
    { professores: 'Susana Marraccini Giampietri Lebrao' },
    { professores: 'Cassia Silveira de Assis' },
    { professores: 'Luciano Gonçalves Ribeiro' },
    { professores: 'Eliana Paula Ribeiro' },
    { professores: 'David Garcia Penof' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
