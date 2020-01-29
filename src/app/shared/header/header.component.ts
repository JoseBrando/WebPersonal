import { Component, ViewChild, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  isVerMenu: boolean;
  @ViewChild("menu", { static: true }) menu: ElementRef;
  @ViewChild("iconoMenu", { static: true }) iconoMenu: ElementRef;

  constructor(private renderer: Renderer2) {
    this.isVerMenu = false;
  }

  funIconMenu() {
    let tamanioPantalla: number = window.screen.width;

    if (tamanioPantalla <= 800) {
      if (!this.isVerMenu) {
        this.renderer.removeClass(this.menu.nativeElement, "ocultarMenu");
        this.renderer.addClass(this.iconoMenu.nativeElement, "icon-cross");
        this.renderer.addClass(this.menu.nativeElement, "mostrarMenu");
        this.isVerMenu = true;
      } else {
        this.renderer.removeClass(this.menu.nativeElement, "mostrarMenu");
        this.renderer.removeClass(this.iconoMenu.nativeElement, "icon-cross");
        this.renderer.addClass(this.menu.nativeElement, "ocultarMenu");
        this.isVerMenu = false;
      }
    }
  } // fin de la función funIconMenu
} // fin de la clase HeaderComponent
