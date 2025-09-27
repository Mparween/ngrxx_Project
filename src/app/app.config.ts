import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { departmentReducer } from './stored/actionReducer';
import { DepartmentEffects } from './stored/actioneffect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({departments:departmentReducer}),
  provideEffects(DepartmentEffects)]
};
