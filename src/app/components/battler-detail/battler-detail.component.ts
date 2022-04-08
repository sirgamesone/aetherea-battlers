import {Component, OnInit} from '@angular/core';
import {OpenseaService} from '../../service/opensea.service';
import {environment} from '../../../environments/environment';
import {OpenseaAssetDto} from '../../dto/opensea/opensea-asset.dto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'aet-battler-detail',
  templateUrl: './battler-detail.component.html',
  styleUrls: ['./battler-detail.component.scss']
})
export class BattlerDetailComponent implements OnInit {

  battlerTokenId: string;
  battlerAsset: OpenseaAssetDto;

  constructor(private route: ActivatedRoute,
              private openseaService: OpenseaService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.battlerTokenId = params.get('battlerTokenId');
      this.loadBattlerDetail(this.battlerTokenId);
    });

  }

  loadBattlerDetail(battlerTokenId: string): void {
    this.openseaService.retrieveAssets(environment.aethereaBattlersCollectionSlug, [battlerTokenId]).subscribe(response => {
      this.battlerAsset = response.assets[0];
    });
  }

}
