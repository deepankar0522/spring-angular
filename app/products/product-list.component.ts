import { Component, OnInit } from '@angular/core'

import { IProducts } from './products'
import { ProductService } from './product.service'

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-style.component.css']
})
export class ProductListComponent {
    selectedRating: string = "Please select Rating";
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProducts[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.products = this._productService.getProdcts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string): void {
        //  console.log(this.selectedRating + " " + message);
        this.selectedRating = message;
    }
}