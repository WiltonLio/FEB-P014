import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseConnectionService } from '../../Services/database-connection.service';
import { HttpClientModule } from '@angular/common/http';
import { AtendimentoInterface } from '../../atendimento-interface';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-atendimentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './lista-atendimentos.component.html',
  styleUrl: './lista-atendimentos.component.scss',
  providers: [DatabaseConnectionService]
})
export class ListaAtendimentosComponent implements OnInit {

  loadedAtendimentos: AtendimentoInterface[] = [];

  constructor(private DataBaseServidor: DatabaseConnectionService) { }

  ngOnInit(): void {

    this.ListarAtendimentos();

  }



  ListarAtendimentos() {
    this.DataBaseServidor.getData().subscribe((response) => {
      this.loadedAtendimentos = response;
    });

  }
  apagarTudo(){
    this.DataBaseServidor.apagarTodosAtendimentos().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedAtendimentos = [];
    });
  }

  DetalharById(id: any) {
    var newLoadedAtendimentos = this.loadedAtendimentos.find((atendimento) => atendimento.id = id);
    console.log(id)
    alert("Este é o DETALHAMENTO do atendimento: " + JSON.stringify(newLoadedAtendimentos));
  }
}
