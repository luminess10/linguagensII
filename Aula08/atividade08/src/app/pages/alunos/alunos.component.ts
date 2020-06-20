import { Component, OnInit } from '@angular/core';
import { Pessoas } from 'src/app/model/pessoas';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  titulo= "Adicionar Alunos";

  cursos: Array<string> = [
    'Engenharia da Computação',
    'Engenharia Elétrica',
    'Engenharia Eletrônica',
    'Engenharia de Controle e Automação',
    'Engenharia Química',
    'Engenharia Alimentos',
    'Engenharia Mecânica',
    'Engenharia Civil',
    'Engenharia Produção',
  ];

  alunos = [];

  pessoas: Pessoas = new Pessoas();

  salvar(pessoaForm) {
    this.pessoas.nome = pessoaForm.value.nome;
    this.pessoas.idade = pessoaForm.value.idade;
    this.pessoas.email = pessoaForm.value.email;
    this.pessoas.curso = pessoaForm.value.curso;
    this.alunos.push({
      nome: pessoaForm.value.nome,
      idade: pessoaForm.value.idade,
      email: pessoaForm.value.email,
      curso: pessoaForm.value.curso
    })
  }

  constructor() {}

  ngOnInit(): void {}
}
