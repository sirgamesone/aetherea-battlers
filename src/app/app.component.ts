import {Component, OnInit} from '@angular/core';
import Moralis from 'moralis';
import {environment} from '../environments/environment';

@Component({
  selector: 'aet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aetherea-battlers';

  ngOnInit(): void {
    Moralis.start({serverUrl: environment.moralis.serverUrl, appId: environment.moralis.appId});

    // using the cached current Moralis.User object (disabled by default)
    Moralis.User.enableUnsafeCurrentUser();
    console.log('Enabled Unsafe CurrentUser');
  }
}
