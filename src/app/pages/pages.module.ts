import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// routes
import { PAGE_ROUTE } from "./pages.route";

// modules
import { SharedModule } from "../shared/shared.module";

// components
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { SobremiComponent } from "./sobremi/sobremi.component";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    PortafolioComponent,
    SobremiComponent
  ],
  imports: [BrowserModule, SharedModule, FormsModule, PAGE_ROUTE],
  exports: [
    HomeComponent,
    PortafolioComponent,
    SobremiComponent
  ]
})
export class PagesModule {}
