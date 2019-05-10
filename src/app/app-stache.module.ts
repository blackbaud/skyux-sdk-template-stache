import {
  NgModule
} from '@angular/core';

import {
  StacheWrapperModule,
  StachePageSummaryModule,
  StacheCodeModule,
  StacheIncludeModule,
  StachePageAnchorModule,
  StacheBlockquoteModule,
  StacheTutorialModule
} from '@blackbaud/skyux-lib-stache';

@NgModule({
  exports: [
    StacheBlockquoteModule,
    StacheCodeModule,
    StacheIncludeModule,
    StachePageAnchorModule,
    StachePageSummaryModule,
    StacheTutorialModule,
    StacheWrapperModule
  ]
})
export class AppStacheModule { }
