import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valor: number;
  deletar: boolean;

  constructor()
  {
    this.valor = 5;
    this.deletar = false;
  }

  mudarValor()
  {
    this.valor++;
  }

  destruirCiclo()
  {
    this.deletar = true;
  }
}
