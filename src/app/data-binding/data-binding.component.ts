import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string;
  cursoAngular: boolean;
  urlImagem: string;
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean;
  texto: string;
  pessoa: any;
  nomeDoCurso: string;
  valorInicial: number;

  getValor()
  {
    return 1;
  }

  getCurtirCurso()
  {
    return true;
  }

  botaoClicado()
  {
    alert('você clicou!');
  }

  onKeyUp(evento: KeyboardEvent)
  {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string)
  {
    this.valorSalvo = valor;
  }

  onMouseOverOut()
  {
    this.isMouseOver = !this.isMouseOver;
  }
    
  onMudouValor(evento: any)
  {
    console.log(evento.novoValor);
  }

  constructor() 
  {
    this.url = 'http://loiane.com';
    this.cursoAngular = true;
    this.urlImagem = 'http://lorempixel.com.br/400/200/';
    this.valorAtual = '';
    this.valorSalvo = '';
    this.isMouseOver = false;
    this.texto = '';
    this.pessoa = {nome: 'Thay', idade: 21};
    this.nomeDoCurso = 'Angular';
    this.valorInicial = 20;
  }

  ngOnInit(): void {
  }

}
