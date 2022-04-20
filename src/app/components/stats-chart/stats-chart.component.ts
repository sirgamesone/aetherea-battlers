import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenseaAssetDto} from '../../dto/opensea/opensea-asset.dto';
import {ScaleType} from '@swimlane/ngx-charts';
import {BattlerUtils} from '../../utils/battler.utils';

@Component({
  selector: 'aet-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.scss']
})
export class StatsChartComponent implements OnInit, OnChanges {

  @Input()
  battler: OpenseaAssetDto;

  multi: any[] = [
    {
      name: 'Stats',
      series: []
    }
  ];
  view: [number, number] = undefined;

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'test',
    selectable: true,
    group: ScaleType.Time,
  };

  constructor(private battlerUtils: BattlerUtils) {
    Object.assign(this, {multi: this.multi});
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onSelect(event: any): void {
    console.log(event);
  }

  ngOnInit(): void {
    console.log(this.battler);
    this.updateStatsChart(this.battler);
  }

  updateStatsChart(battler: OpenseaAssetDto): void {
    const stats = this.multi.find(chart => chart.name === 'Stats').series as { name: string, value: number }[];
    stats.push({name: 'POW', value: this.battlerUtils.power(battler)});
    stats.push({name: 'COP', value: this.battlerUtils.cooperativeness(battler)});
    stats.push({name: 'TEC', value: this.battlerUtils.technique(battler)});
    stats.push({name: 'INT', value: this.battlerUtils.intelligence(battler)});
    stats.push({name: 'SPD', value: this.battlerUtils.speed(battler)});
  }

}
