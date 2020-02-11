import { Component, ElementRef, ViewChild } from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-sobremi",
  templateUrl: "./sobremi.component.html"
})
export class SobremiComponent {
  @ViewChild("sobremi", { static: true }) content: ElementRef;

  downloadPDF() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });

    doc.save("test.pdf");
  } // fin de la función downloadPDF
} // fin de la clase SobremiComponent
