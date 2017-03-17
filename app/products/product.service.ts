import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProducts } from './products';

@Injectable()
export class ProductService {
    private _produductUrl = 'api/products/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable <IProducts[]> {
        return this._http.get(this._produductUrl)
            .map((response: Response) => <IProducts[]> response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.errorHandler);
    }
     getProduct(id: number): Observable<IProducts> {
        return this.getProducts()
            .map((products: IProducts[]) => products.find(p => p.productId === id));
    }

    private errorHandler(error: Response){
        console.error("error: "+error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
