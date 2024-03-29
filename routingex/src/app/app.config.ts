import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //registerig application level routes wih the rouer service
  providers: [provideRouter(routes)]
};
