import { PipeTransform, Pipe } from '@angular/core';

import { IProducts } from './products';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProducts[], filterBy: string): IProducts[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy? value.filter((product: IProducts) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}