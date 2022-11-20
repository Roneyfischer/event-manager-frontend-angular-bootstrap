import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BootstrapOptions } from '@angular/core';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
