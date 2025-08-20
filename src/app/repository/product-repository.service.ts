import {Product} from '../models/product.mode';
import {MockData} from './mock.repository';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
    getAllItem():Product[]{
      const products:Product[] = [];
      MockData.dataItem.forEach(
        (value, key) => products.push(...value)
      )
      return products;
    }
    getItemByCategory(categoryId:number): Product[]|undefined {
      return MockData.dataItem.get(categoryId);
    }

}

