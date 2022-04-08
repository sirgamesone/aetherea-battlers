import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BattlersListComponent} from './components/battlers-list/battlers-list.component';
import {BattlerDetailComponent} from './components/battler-detail/battler-detail.component';
import {LoreComponent} from './components/lore/lore.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lore', component: LoreComponent},
  {path: 'battlers', component: BattlersListComponent},
  {path: 'battlers/:battlerTokenId', component: BattlerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
