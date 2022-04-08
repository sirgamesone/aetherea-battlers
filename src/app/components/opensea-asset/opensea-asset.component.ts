import {Component, OnInit} from '@angular/core';
import {OpenseaService} from '../../service/opensea.service';
import {OpenseaAssetDto} from '../../dto/opensea/opensea-asset.dto';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'aet-opensea-asset',
  templateUrl: './opensea-asset.component.html',
  styleUrls: ['./opensea-asset.component.scss']
})
export class OpenseaAssetComponent implements OnInit {

  aethereaAssets: OpenseaAssetDto[] = [];
  nextPage?: string;
  previousPage?: string;

  constructor(private openseaService: OpenseaService) {
  }

  ngOnInit(): void {
    this.openseaService.retrieveAssets(environment.aethereaBattlersCollectionSlug).subscribe(response => {
      this.aethereaAssets = response.assets;
      this.nextPage = response.next;
      this.previousPage = response.previous;
    });
  }
}
