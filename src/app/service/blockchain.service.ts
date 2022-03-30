import {Injectable} from '@angular/core';
import Moralis from 'moralis';
import {from, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BlockchainService {
  constructor() {
  }

  getAllERC20(options?: { chain: string, address?: string }): Observable<any> {
    return from(Moralis.Web3.getAllERC20(options));
  }

}
