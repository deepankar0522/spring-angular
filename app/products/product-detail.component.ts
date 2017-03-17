import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-details',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetail implements OnInit {
    pageTitle: string = 'Product Details';
    productName: string = 'name';
    productId: number;

    constructor(private _route: ActivatedRoute) {
    }
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

    }
}