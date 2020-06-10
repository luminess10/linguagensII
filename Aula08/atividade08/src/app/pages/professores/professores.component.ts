import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  angular = "Listagem de cursos e seus respectivos professores";

  constructor() { }

  ngOnInit(): void {
  }

}
