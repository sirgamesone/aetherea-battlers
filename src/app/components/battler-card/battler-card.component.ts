import {Component, Input, OnInit} from '@angular/core';
import {OpenseaAssetDto} from '../../dto/opensea/opensea-asset.dto';

@Component({
  selector: 'aet-battler-card',
  templateUrl: './battler-card.component.html',
  styleUrls: ['./battler-card.component.scss']
})
export class BattlerCardComponent implements OnInit {

  @Input()
  battler: OpenseaAssetDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
