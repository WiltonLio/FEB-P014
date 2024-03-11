import { Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './Components/cadastrar-atendimento/cadastrar-atendimento.component';
import { ListaAtendimentosComponent } from './Components/lista-atendimentos/lista-atendimentos.component';
import { EditarAtendimentosComponent } from './Pages/editar-atendimentos/editar-atendimentos.component';
import { HomeComponent } from './Components/home/home.component';

import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { AuthGuard } from './Services/auth.guard';
import { SemAutorizacaoComponent } from './Pages/sem-autorizacao/sem-autorizacao.component';

export const routes: Routes = [
    { path: 'cadastrarAtendimento', component: CadastrarAtendimentoComponent, canActivate: [AuthGuard] },
    { path: 'listarAtendimento', component: ListaAtendimentosComponent, canActivate: [AuthGuard] },
    { path: 'editarAtendimento/:id', component: EditarAtendimentosComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    {path: 'sem-autorizacao', component: SemAutorizacaoComponent},
];
