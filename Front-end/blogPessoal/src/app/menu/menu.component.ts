import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }
  /* Configurado no botão sair no HTML, para ao clicar para sair, todas as info são apagadas com o enviroment e você precisará entrar novamente sendo redirecionado através do this.router/entrar */
  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}
