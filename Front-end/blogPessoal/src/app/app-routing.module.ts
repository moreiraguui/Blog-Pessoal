import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path:'menu', component: MenuComponent},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'rodape', component: RodapeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
