import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [SharedModule],
  exports: [
  ],
  declarations: [
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          // Disable 'theme' sanity check
          provide : MATERIAL_SANITY_CHECKS,
          useValue: {
            doctype: true,
            theme  : false,
            version: true
          }
        },
        {
          // Use the 'fill' appearance on Angular Material form fields by default
          provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          }
        }
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: ThemeModule) {
    if (parentModule) {
      throw new Error('ThemeModule has already been loaded. Import this module in the AppModule only!');
    }
  }
}
