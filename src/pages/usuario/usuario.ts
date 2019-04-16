import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../../providers/api-login/http';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  constructor(private http : HttpProvider) {
    console.log('Hello ApiLoginProvider Provider');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  public usuario (id : string,  nome : string){

    let obj = {
      id : id,
      password : nome
    }
    this.http.url = 'http://localhost:3000/usuario'
      return this.http.post(obj);
  }

}
