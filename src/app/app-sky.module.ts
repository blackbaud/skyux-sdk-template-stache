import {
  NgModule
} from '@angular/core';

import {
  SkyClipboardModule
} from '@blackbaud/skyux-lib-clipboard';

import {
  SkyCodeModule,
  SkyCodeBlockModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyImageModule,
  SkyHeroModule,
  SkyVideoModule
} from '@blackbaud/skyux-lib-media';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyAlertModule,
  SkyHelpInlineModule,
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyWaitModule
} from '@skyux/indicators';

import {
  SkyDefinitionListModule,
  SkyFluidGridModule,
  SkyTextExpandModule,
  SkyTextExpandRepeaterModule,
  SkyCardModule
} from '@skyux/layout';

import {
  SkyRepeaterModule
} from '@skyux/lists';

import {
  SkyListModule,
  SkyListToolbarModule,
  SkyListFiltersModule
} from '@skyux/list-builder';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyTilesModule
} from '@skyux/tiles';

import {
  SkyTabsModule,
  SkyVerticalTabsetModule
} from '@skyux/tabs';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyCardModule,
    SkyClipboardModule,
    SkyCodeBlockModule,
    SkyCodeModule,
    SkyDefinitionListModule,
    SkyDropdownModule,
    SkyFluidGridModule,
    SkyGridModule,
    SkyHelpInlineModule,
    SkyHeroModule,
    SkyImageModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyListFiltersModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyListViewGridModule,
    SkyModalModule,
    SkyNavbarModule,
    SkyRepeaterModule,
    SkyTabsModule,
    SkyTextExpandModule,
    SkyTextExpandRepeaterModule,
    SkyTilesModule,
    SkyVerticalTabsetModule,
    SkyVideoModule,
    SkyWaitModule
  ]
})
export class AppSkyModule { }
