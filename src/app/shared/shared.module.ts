import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// components
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [RouterModule],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
