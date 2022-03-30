import {Component, OnInit} from '@angular/core';
import {OpenseaService} from '../../service/opensea.service';

@Component({
  selector: 'aet-opensea-asset',
  templateUrl: './opensea-asset.component.html',
  styleUrls: ['./opensea-asset.component.scss']
})
export class OpenseaAssetComponent implements OnInit {

  constructor(private openseaService: OpenseaService) {
  }

  ngOnInit(): void {
  }
}
