import {Component, OnInit} from '@angular/core';
import Moralis from 'moralis';

@Component({
  selector: 'aet-nfts-dashboard',
  templateUrl: './nfts-dashboard.component.html',
  styleUrls: ['./nfts-dashboard.component.scss']
})
export class NftsDashboardComponent implements OnInit {

  nfts: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadNFTs(): void {
    const user = Moralis.User.current() as Moralis.User<Moralis.Attributes>;
    Moralis.Web3API.account.getNFTs({chain: 'eth', address: user.get('ethAddress')}).then(nfts => {
      this.nfts = nfts;
    });
  }

}
