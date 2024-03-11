import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseConnectionService } from '../../Services/database-connection.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-editar-atendimentos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './editar-atendimentos.component.html',
  styleUrl: './editar-atendimentos.component.scss',
  providers: [DatabaseConnectionService]
})
export class EditarAtendimentosComponent {
  AtendimentoForm!: FormGroup;
  id: string = '';
  editadoSucesso: boolean = false;



  constructor(private formConstrutor: FormBuilder, private bancoService: DatabaseConnectionService, private rotas: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.AtendimentoForm = this.formConstrutor.group({
      dateAtendimento: ['', Validators.required],
      tutorName: ['', Validators.required],
      petName: ['', Validators.required],
      especie: ['', Validators.required],
      race: ['', Validators.required],
      obs: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getTicket(this.id);
  }

  getTicket(id: any) {
    console.log("id-->" + id);
    this.bancoService.getAtendimentoByID(id).subscribe(responseData => {
      console.log(responseData);
      this.AtendimentoForm.setValue(responseData);
    });
  }

  salvarTicket() {
    console.log("salvar ticket: " + this.AtendimentoForm.value);
    this.bancoService.editarAtendimento(this.id, this.AtendimentoForm.value).subscribe(responseData => {
      if (responseData.status == 200) {
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal() {
    setTimeout(() => {
      this.rotas.navigate(['listarTicket']);
    }, 2000);

  }

}
