import {
  NgModule
} from '@angular/core';

import {
  SkyCodeBlockModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyHeroModule
} from '@blackbaud/skyux-lib-media';

import {
  StacheWrapperModule,
  StachePageSummaryModule,
  StacheCodeModule,
  StacheIncludeModule,
  StachePageAnchorModule,
  StacheBlockquoteModule,
  StacheTutorialModule
} from '@blackbaud/skyux-lib-stache';

import {
  SkyAlertModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyCodeBlockModule,
    SkyFluidGridModule,
    SkyHeroModule,
    SkyNavbarModule,
    StacheBlockquoteModule,
    StacheCodeModule,
    StacheIncludeModule,
    StachePageAnchorModule,
    StachePageSummaryModule,
    StacheTutorialModule,
    StacheWrapperModule
  ]
})
export class AppSkyModule { }
