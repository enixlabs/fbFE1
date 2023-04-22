import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from "./assets/sidebar/sidebar.component";
import { ToolbarComponent } from "./assets/toolbar/toolbar.component";
import { SharedModule } from "../shared/shared.module";

const COMPONENTS = [
  SidebarComponent,
  ToolbarComponent,
];
@NgModule({
  declarations: [
    LayoutComponent,
      ...COMPONENTS
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LayoutComponent,
    ...COMPONENTS
  ],
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [],
    }
  }
}
