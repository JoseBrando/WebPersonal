import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url = 'https://brandocortes.com/php/contacto/';

  constructor(private http: HttpClient) {}

  enviarMensaje(mensajeContacto: ContactoModel) {
    
    return this.http.post(`${this.url}/mainContacto.php`, JSON.stringify(mensajeContacto));
  
  }// fin del método enviarMensaje 

} // fin de la clase ContactoService