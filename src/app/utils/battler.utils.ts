import {OpenseaAssetDto, OpenseaAssetTraitDto} from '../dto/opensea/opensea-asset.dto';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class BattlerUtils {

  battlerClass(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'class').value.toString();
  }

  legion(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'legion').value.toString();
  }

  gender(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'gender').value.toString();
  }

  zodiacSign(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'zodiacSign').value.toString();
  }

  personality(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'personality').value.toString();
  }

  rank(battler: OpenseaAssetDto): string {
    return this.getTrait(battler, 'rank').value.toString();
  }

  power(battler: OpenseaAssetDto): number {
    return +this.getTrait(battler, 'power').value;
  }

  speed(battler: OpenseaAssetDto): number {
    return +this.getTrait(battler, 'speed').value;
  }

  technique(battler: OpenseaAssetDto): number {
    return +this.getTrait(battler, 'technique').value;
  }

  intelligence(battler: OpenseaAssetDto): number {
    return +this.getTrait(battler, 'intelligence').value;
  }

  cooperativeness(battler: OpenseaAssetDto): number {
    return +this.getTrait(battler, 'cooperativeness').value;
  }

  getTrait(battler: OpenseaAssetDto, traitType: string): OpenseaAssetTraitDto {
    const traitFound = battler.traits.find(trait => trait.trait_type.toLowerCase() === traitType.toLowerCase());
    if (traitFound) {
      return traitFound;
    }
    throw new Error('trait of name ' + traitType + ' not found');
  }

  /**
   * @returns the sum of power + speed + technique + intelligence + cooperativeness
   */
  attributesSum(battler: OpenseaAssetDto): number {
    return this.cooperativeness(battler) + this.speed(battler) + this.power(battler) + this.technique(battler) + this.intelligence(battler);
  }

  getTier(battler: OpenseaAssetDto): string {
    const rating = this.attributesSum(battler) - this.cooperativeness(battler);
    switch (true) {
      case (rating >= 35):
        return 'S';
      case (rating >= 30):
        return 'A';
      case (rating >= 25):
        return 'B';
      case (rating >= 20):
        return 'C';
      default:
        return 'D';

    }
  }
}
