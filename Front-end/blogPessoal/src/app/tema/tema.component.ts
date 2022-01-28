import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){ 
    window.scroll(0,0)
   /* Caso de F5 (atualize a página) será informado e solicitado que o usuario entre novamente */
        if (environment.token == '') {
          this.router.navigate(['/entrar'])
        } 

        this.findAllTemas()
  }

    findAllTemas(){
      this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
  }
  
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }
}
