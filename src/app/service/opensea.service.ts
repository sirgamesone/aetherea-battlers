import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {OpenseaAssetDto} from '../dto/opensea/opensea-asset.dto';

@Injectable({providedIn: 'root'})
/**
 * OpenSea API https://docs.opensea.io/reference/
 */
export class OpenseaService {

  constructor(private http: HttpClient) {
  }


  retrieveCollections(assetOwnerAddress: string, offsetPagination = 0, limitPagination = 300): Observable<any> {
    const url = environment.opensea.baseHost + environment.opensea.collections;
    const params = new HttpParams()
      .set('asset_owner', assetOwnerAddress)
      .set('offset', offsetPagination.toString())
      .set('limit', limitPagination.toString());
    return this.http.get<any>(url, {params});
  }

  retrieveSingleCollection(collectionSlug: string): Observable<any> {
    const url = environment.opensea.baseHost + environment.opensea.singleCollection.replace('{collection_slug}', collectionSlug);
    return this.http.get<any>(url);
  }

  /**
   * @param collectionSlug Limit responses to members of a collection
   * @param cursor A cursor to be supplied as a query param to retrieve the next page
   */
  retrieveAssets(collectionSlug: string, tokenIds: string[] = [], cursor?: string): Observable<{ assets: OpenseaAssetDto[], next?: string, previous?: string }> {
    const url = environment.opensea.baseHost + environment.opensea.assets;
    let params = new HttpParams()
      .set('collection_slug', collectionSlug)
      .set('limit', '50');
    if (tokenIds.length > 0) {
      params = params.append('token_ids', tokenIds.join(','));
    }
    return this.http.get<{ assets: OpenseaAssetDto[], next?: string, previous?: string }>(url, {params});
  }
}
