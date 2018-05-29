import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.modulet';
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
