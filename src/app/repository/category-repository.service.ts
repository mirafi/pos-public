import {Category} from "../models/category.model";

export interface CategoryRepository {
  getAllCategory(): Category[]
  getById(id: number): Category | undefined
}
