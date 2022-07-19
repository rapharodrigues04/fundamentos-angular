import { Component, } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    {id: 1, nome: "Celular XXL", descricao: "Um tamanho extra grande", esgotado: false},
    {id: 2, nome: "Celular XL", descricao: "Um tamanho grandão", esgotado: true},
    {id: 3, nome: "Celular L", descricao: "Um tamanho grande", esgotado: false},
    {id: 4, nome: "Celular M", descricao: "Um tamanho médio", esgotado: true},
  ]
}
