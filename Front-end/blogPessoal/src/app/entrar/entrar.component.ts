import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)        
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) =>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      console.log(environment.token) //apagar depois
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id) 

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500)
      alert('Usuário ou senha incorretos.')
      
      if(erro.status == 401) 
      alert('Acesso negado')
    
    })
  }

}
