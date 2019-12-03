type proridade = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Lembrete {
    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: proridade;
    /*modificado retorna um número que podemos depois apenas converter pra data, em vez de ficar dando parser em datas*/
    modificado: number;
}
