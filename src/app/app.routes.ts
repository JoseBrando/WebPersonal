import {
  RouterModule,
  Routes
} from "@angular/router";

import {
  NotfoundpageComponent
} from "./404/notfoundpage.component";

const appRoute: Routes = [{
  path: "**",
  component: NotfoundpageComponent
}];

export const APP_ROUTE = RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' });
