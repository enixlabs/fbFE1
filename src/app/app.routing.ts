import { Route } from "@angular/router";
import { LayoutComponent } from "../settings/layout/layout.component";

export const appRoutes: Route[] = [
  // { path: '', pathMatch: 'full', redirectTo: 'register' },
  // { path: 'redirectUrl', pathMatch: 'full', redirectTo: 'account' },

  { path: '', // PUBLIC ROUTES
    component: LayoutComponent,
    children: [

      { path: 'help',
      children: [

      ]
      },
    ]
  },
  { path: '', // AUTH ROUTES
    component: LayoutComponent,
    children: [

    ]
  },
  { path: '', // PRIVATE ROUTES
    component: LayoutComponent,
    canActivate: [],
    children: [

    ]
  },
];
