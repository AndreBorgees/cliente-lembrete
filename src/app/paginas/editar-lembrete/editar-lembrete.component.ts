import { Component, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {

  public lembrete: Lembrete;

  /*Importando o component dentro da calsse*/
  @ViewChild(ErrorMsgComponent, { static: true }) errorMsgComponenet: ErrorMsgComponent;

  /*Injetando o service(singleton, pois o responsavel por isntanciar o objeto e o Angular, nos so informamos que vamos usar) no construtor*/
  constructor(private lembreteService: LembreteService, private router: Router, private activatedRoute: ActivatedRoute) {
    /* pegando o id que foi passado pela URL*/
    this.getLembrete(this.activatedRoute.snapshot.params.id);
  }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe(
        (lembrete: Lembrete) => { this.lembrete = lembrete; },
        () => { this.errorMsgComponenet.setErro('Falha ao listar lembretes. '); });
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponenet.setErro('Falha ao listar lembretes. '); });
  }


}
