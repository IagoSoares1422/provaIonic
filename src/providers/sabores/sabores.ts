import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/http';


/*
  Generated class for the SaboresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaboresProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello SaboresProvider Provider');
  }

  public listarSabores(idtamanho : string){
    this.http.url = 'http://104.196.102.231/sabores/'+ idtamanho
    return this.http.get();
  }

  public listaBairro(idcidade : string){
    this.http.url = 'http://localhost:3000/bairros/'+ idcidade
    return this.http.get();
  }

}
