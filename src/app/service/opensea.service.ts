import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class OpenseaService {

  constructor(private http: HttpClient) {
  }


  retrieveCollections(assetOwnerAddress: string, offsetPagination = 0, limitPagination = 300): Observable<any> {
    const url = environment.opensea.baseHost + environment.opensea.collections;
    const params = new HttpParams();
    params.set('asset_owner', assetOwnerAddress);
    params.set('offset', offsetPagination.toString());
    params.set('limit', limitPagination.toString());
    return this.http.get<any>(url, {params});
  }

  retrieveSingleCollection(collectionSlug: string): Observable<any> {
    const url = environment.opensea.baseHost + environment.opensea.singleCollection.replace('{collection_slug}', collectionSlug);
    return this.http.get<any>(url);
  }

  retrieveAssets(collectionSlug: string): Observable<any> {
    const url = environment.opensea.baseHost + environment.opensea.assets;
    const params = new HttpParams();
    params.set('collection_slug', collectionSlug);
    return this.http.get<any>(url, {params});
  }
}
