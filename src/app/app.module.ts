import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/employees/modules/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromEmployees from '../app/components/employees/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromEmployees.reducers), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.forRoot([]) /* Start monitoring app's side effects */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
