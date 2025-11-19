import {Product} from '../../models/product.mode';
import {MockData} from '../mock.repository';
import {Injectable} from '@angular/core';
import {ItemRepository} from "../item-repository.service";

@Injectable()
export class ItemRepositoryImpl implements ItemRepository {
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
