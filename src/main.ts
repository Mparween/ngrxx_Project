import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/stored/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { departmentReducer } from './app/stored/actionReducer';
import { DepartmentEffects } from './app/stored/actioneffect';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
     provideHttpClient(), 
    provideStore({departments: departmentReducer}),
    provideEffects([DepartmentEffects])
]
})
  .catch((err) => console.error(err));
