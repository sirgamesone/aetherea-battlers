import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedUserInfoComponent } from './components/logged-user-info/logged-user-info.component';
import { TokensDashboardComponent } from './components/tokens-dashboard/tokens-dashboard.component';
import { NftsDashboardComponent } from './components/nfts-dashboard/nfts-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedUserInfoComponent,
    TokensDashboardComponent,
    NftsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
