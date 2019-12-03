import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];

  /*Importando o component dentro da calsse*/
  @ViewChild(ErrorMsgComponent, { static: true }) errorMsgComponenet: ErrorMsgComponent;

  /*Injetando o service(singleton, pois o responsavel por isntanciar o objeto e o Angular, nos so informamos que vamos usar) no construtor*/
  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      /* O metodo getListaLembretes nos retorna um Observable que disponibiliza um subscribe */
      /* Se a conexão com a API for bem sucedida o subscribe chama um callback e passa pra nossa variavel
      da classe um array de lembretes vindo da requisição, caso contrario ele cai no callback de erro */
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => { this.errorMsgComponenet.setErro('Falha ao listar lembretes. '); });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      /* O metodo deletaLembrete nos retorna um Observable que disponibiliza um subscribe */
      /* Se a conexão com a API for bem sucedida o subscribe chama um callback e recarrega nossa lista 
     da lembretes, caso contrario ele cai no callback de erro */
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponenet.setErro('Falha ao deletear lembrete'); });
  }

  /* Verifica se existe lembretes*/
  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
