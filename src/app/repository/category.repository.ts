import {Injectable} from '@angular/core';
import {Category} from '../models/category.model'
import {MockData} from './mock.repository';

@Injectable()
export class CategoryRepository {
    getAllCategory():Category[]{
      return MockData.dataCategory;
    }
}
