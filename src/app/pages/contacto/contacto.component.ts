import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoModel } from '../../models/contacto.model';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  @ViewChild( 'smsContacto', {static: true} ) smsContacto: ElementRef;
  @ViewChild( 'smsEnviado', {static: true} ) smsEnviado: ElementRef;
  @ViewChild( 'smsError', {static: true} ) smsError: ElementRef;
  public contactoModel = new ContactoModel();

  constructor(private contactoService: ContactoService, private renderer: Renderer2 ) {}

  guardar(form: NgForm) {
    if(form.invalid) {
      this.renderer.addClass( this.smsContacto.nativeElement, 'block' );
      setTimeout(()=> {
        this.renderer.removeClass( this.smsContacto.nativeElement, 'block' );
      }, 4000);
      return;
    }
  
    this.contactoService.enviarMensaje(this.contactoModel).subscribe(resp=> {
    
      if(resp == 1) {
        this.renderer.addClass( this.smsEnviado.nativeElement, 'block' );
        setTimeout(()=> {
          this.renderer.removeClass( this.smsEnviado.nativeElement, 'block' );
        }, 5000);
        form.reset();
      } else if(resp == 0) {
        this.renderer.addClass( this.smsError.nativeElement, 'block' );
          setTimeout(()=> {
          this.renderer.removeClass( this.smsError.nativeElement, 'block' );
        }, 5000);
      }
    
    });
  } // fin del método guardar

} // fin de la clase ContactoComponent
