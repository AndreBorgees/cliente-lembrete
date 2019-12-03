import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {

  /* Se esse atributo fosse private, e for usado no HTML, em ambiente de desenvolvimento ele não daria erro,
  mas em ambiente de produção ele não poderia ser acessado */
  public error: string;
  constructor() { }

  setErro(error: string, tempo: number = 5000){
    this.error = error;
    setTimeout(() => {
      /* Callback da arrow function, seta nullo a variavel erro sempre que o tempo difinido é decorrido */
      this.error = null;
    }, tempo);
  }

}
