import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { EmployeeStoreModule } from './components/store/employee-store.module';
import { appReducer, CustomSerialier } from '../app/components/store/root/root.reducer';
import { AppComponent } from './app.component';
import { routes } from './app.route';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EmployeeStoreModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerialier },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
