import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ethAddressMinify'})
export class EthAddressMinifyPipe implements PipeTransform {
  transform(value: string): string {
    return value.substring(0, 5) + '...' + value.substring(value.length - 4);
  }
}
