import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom }    from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

    importProvidersFrom(
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut:          4000,
        positionClass:    'toast-top-center',
        preventDuplicates: true
      })
    ),

  ]
})
.catch(err => console.error(err));