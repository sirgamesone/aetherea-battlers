import {Component, Input, OnInit} from '@angular/core';
import {OpenseaAssetDto} from '../../dto/opensea/opensea-asset.dto';
import {Router} from '@angular/router';
import {BattlerUtils} from '../../utils/battler.utils';

@Component({
  selector: 'aet-battler-card',
  templateUrl: './battler-card.component.html',
  styleUrls: ['./battler-card.component.scss']
})
export class BattlerCardComponent implements OnInit {

  @Input()
  battler: OpenseaAssetDto;

  constructor(private router: Router,
              public battlerUtils: BattlerUtils) {
  }

  ngOnInit(): void {
  }


  navigateToBattlerDetail(): void {
    this.router.navigate(['battlers', this.battler.token_id]);
  }

}
