import { Component } from '@angular/core';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.css']
})
export class SugestoesComponent {
  valor=false;
  titulo(){
    return{
      display: 'block',
      padding: '20px',
      color: 'black',
      'font-size': '15px',
      'border-radius': '10px'
    }
  }

  alterar(){
    this.valor=!this.valor;
  }

  ehAzul(): Boolean{
    return this.valor==true;
  }
}
