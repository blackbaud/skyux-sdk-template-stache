import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  AppNavComponent
} from './app-nav.component';

describe('AppNavComponent', () => {
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SkyNavbarModule
      ],
      declarations: [
        AppNavComponent
      ]
    });

    fixture = TestBed.createComponent(AppNavComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
