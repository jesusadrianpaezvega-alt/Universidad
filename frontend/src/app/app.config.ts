import { ApplicationConfig, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { APP_CONFIG } from './core/config/app-config.token';
import { environment } from '../environments/environment';
import { provideEquipmentRepository } from './infrastructure/equipment';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiUrlInterceptor } from './core/http/api-url-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([apiUrlInterceptor])
    ),
    {
      provide: APP_CONFIG,
      useValue: {
        apiUrl: environment.apiUrl,
        useFakeApi: environment.useFakeApi,
      },
    },
    provideEquipmentRepository(),
  ],
};
