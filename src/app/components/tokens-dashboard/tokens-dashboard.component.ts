import {Component, OnInit} from '@angular/core';
import Moralis from 'moralis';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'aet-tokens-dashboard',
  templateUrl: './tokens-dashboard.component.html',
  styleUrls: ['./tokens-dashboard.component.scss']
})
export class TokensDashboardComponent implements OnInit {

  ethBalance: any;
  balanceToken: any;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  loadERC20(): void {
    const user = Moralis.User.current() as Moralis.User<Moralis.Attributes>;
    Moralis.Web3API.account.getNativeBalance({chain: 'eth', address: user.get('ethAddress')}).then(ethBalance => {
      this.ethBalance = ethBalance;
    });
    Moralis.Web3API.account.getTokenBalances({chain: 'eth', address: user.get('ethAddress')}).then(balance => {
      this.balanceToken = balance;
    });
  }
}
