import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import {
  AppStacheModule
} from './app-stache.module';

@NgModule({
  exports: [
    AppSkyModule,
    AppStacheModule
  ]
})
export class AppExtrasModule { }
