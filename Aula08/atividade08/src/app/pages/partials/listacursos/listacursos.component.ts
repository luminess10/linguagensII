import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.css']
})
export class ListacursosComponent implements OnInit {
  @Input() nomeCurso;
  constructor() { }

  ngOnInit(): void {
  }

}
