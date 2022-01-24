import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    /* Caso de F5 (atualize a página) será informado e solicitado que o usuario entre novamente */
        if (environment.token == '') {
          // alert('Sua sessão expirou, faça o login novamente.')
          this.router.navigate(['/entrar'])
        } 
      }
}
