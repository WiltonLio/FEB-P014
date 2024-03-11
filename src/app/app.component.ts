import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CadastrarAtendimentoComponent } from './Components/cadastrar-atendimento/cadastrar-atendimento.component';
import { ListaAtendimentosComponent } from './Components/lista-atendimentos/lista-atendimentos.component';
import { EditarAtendimentosComponent } from './Pages/editar-atendimentos/editar-atendimentos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CadastrarAtendimentoComponent, ListaAtendimentosComponent, EditarAtendimentosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PetConsult';
}
