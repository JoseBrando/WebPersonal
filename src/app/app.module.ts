import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Rutas
import { APP_ROUTE } from "./app.routes";

// modules
import { PagesModule } from "./pages/pages.module";

// Componentes
import { AppComponent } from "./app.component";
import { NotfoundpageComponent } from "./404/notfoundpage.component";

@NgModule({
  declarations: [AppComponent, NotfoundpageComponent],
  imports: [BrowserModule, HttpClientModule, PagesModule, APP_ROUTE],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
