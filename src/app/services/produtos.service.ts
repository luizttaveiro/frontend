import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IProduto } from '../components/model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produstos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  busacarTodos(): Observable<any>{
    return this.http.get<IProduto[]>(this.URL);
  }
  exibirErro(e: any): void {
    this.exibirMensagem('Erro!!!', 'Não foi possivel realizar a operação','toast- error');

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void {
       this.toastr.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo)
  }
}
