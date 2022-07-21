import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {

  constructor(public logger: LoggerService){}

  descricao = "";

  adicionarProduto(){
    this.logger.logar(`O produto com a descrição ${this.descricao} foi adicionado.`)
  }

}
