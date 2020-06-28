import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listacampos',
  templateUrl: './listacampos.component.html',
  styleUrls: ['./listacampos.component.css']
})
export class ListacamposComponent {
  campos="Adicionar Curso";
  nomeCurso;
  @Output() cursoAdicionado= new EventEmitter();

  adicionar(curso){
    const nomeCurso = {curso: curso, };
    this.cursoAdicionado.emit(nomeCurso);
  }
  

}
