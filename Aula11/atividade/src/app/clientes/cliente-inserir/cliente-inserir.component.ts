import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../cliente.model';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent{
  id: string;
  titulo: string;
  autor: string;
  paginas: string;

  @Output() livroAdicionado = new EventEmitter<Livro>();

  onAdicionarLivro(){
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
    }
    this.livroAdicionado.emit(livro);
  }

}
