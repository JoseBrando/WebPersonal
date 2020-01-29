import { RouterModule, Routes } from "@angular/router";

// components
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { SobremiComponent } from "./sobremi/sobremi.component";
import { ContactoComponent } from "./contacto/contacto.component";

const pageRoute: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "portafolio", component: PortafolioComponent },
      { path: "sobre_mi", component: SobremiComponent },
      { path: "contacto", component: ContactoComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

export const PAGE_ROUTE = RouterModule.forChild(pageRoute);
