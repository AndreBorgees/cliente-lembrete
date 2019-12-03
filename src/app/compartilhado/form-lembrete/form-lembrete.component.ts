import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  /* Recebemos através do componente pai atraves do Decorator Input um Lembrete para fazermos edições*/
  @Input() lembrete: Lembrete = <Lembrete>{};

  /* Esse atributo passa o Lembrete como evento(parametro) de um callback, podendo ter sido criado ou editado*/
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();

  onSubmit(){
    this.outputLembrete.emit(this.lembrete);
  }



}
