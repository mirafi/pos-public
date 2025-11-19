import {Injectable} from '@angular/core';
import {Category} from '../../models/category.model'
import {MockData} from '../mock.repository';
import {CategoryRepository} from "../category-repository.service";

@Injectable()
export class CategoryRepositoryImpl implements CategoryRepository{
    getAllCategory():Category[]{
      return MockData.dataCategory;
    }
    getById(id:number):Category|undefined{
      return MockData.dataCategory.find(c=>c.id==id);
    }
}
