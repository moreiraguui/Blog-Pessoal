import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
    ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://moreiraguuiblogpessoal.herokuapp.com/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://moreiraguuiblogpessoal.herokuapp.com/temas/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://moreiraguuiblogpessoal.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://moreiraguuiblogpessoal.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://moreiraguuiblogpessoal.herokuapp.com/temas/${id}`, this.token) //para passar parametros
  }
  

}
