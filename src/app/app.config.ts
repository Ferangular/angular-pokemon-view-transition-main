import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(), provideRouter(routes, withComponentInputBinding(), withViewTransitions()), provideHttpClient(),]
};
