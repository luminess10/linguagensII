import { Component } from '@angular/core';

import { Livro } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade de inserir livros';

  livros: Livro[] = [];
  onLivroAdicionado (livro){
    this.livros = [livro, ...this.livros];
  }
}
