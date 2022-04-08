import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedUserInfoComponent } from './components/logged-user-info/logged-user-info.component';
import { TokensDashboardComponent } from './components/tokens-dashboard/tokens-dashboard.component';
import { NftsDashboardComponent } from './components/nfts-dashboard/nfts-dashboard.component';
import { OpenseaAssetComponent } from './components/opensea-asset/opensea-asset.component';
import {HttpClientModule} from '@angular/common/http';
import { BattlerCardComponent } from './components/battler-card/battler-card.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {EthAddressMinifyPipe} from './pipe/eth-address-minify.pipe';
import { BattlersListComponent } from './components/battlers-list/battlers-list.component';
import { BattlerDetailComponent } from './components/battler-detail/battler-detail.component';

@NgModule({
  declarations: [
    EthAddressMinifyPipe,
    AppComponent,
    LoginComponent,
    LoggedUserInfoComponent,
    TokensDashboardComponent,
    NftsDashboardComponent,
    OpenseaAssetComponent,
    BattlerCardComponent,
    PageLayoutComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    BattlersListComponent,
    BattlerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
