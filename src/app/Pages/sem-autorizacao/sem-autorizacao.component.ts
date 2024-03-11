import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-autorizacao',
  template: `<p>
    Você não está logado. Você será redirecionado para a página de login em alguns
    segundos...
  </p>`,
  styleUrl: './sem-autorizacao.component.scss',
})
export class SemAutorizacaoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
