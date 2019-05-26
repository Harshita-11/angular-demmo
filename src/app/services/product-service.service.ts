import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http: HttpService) { }

  getProduct(): Observable<any> {
    const url = '../../assets/api/products.json';
    return this._http.get(url);
  }
}
