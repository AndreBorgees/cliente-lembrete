import { Component, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  /*Importando o component dentro da calsse*/
  @ViewChild(ErrorMsgComponent, { static: true }) errorMsgComponenet: ErrorMsgComponent;

  /*Injetando o service(singleton, pois o responsavel por isntanciar o objeto e o Angular, nos so informamos que vamos usar) no construtor*/
  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
      /* Se a conexão com a API for bem sucedida o subscribe chama um callback e redireciona o usuario para a raiz
      do nosso projeto, caso contrario ele cai no callback de erro */
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponenet.setErro('Falha ao adicionar lembretes. '); });
  }

}
