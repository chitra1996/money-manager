export interface ICategoryRequest {
  budget: number;
  category_name: string;
}

export interface ICategoryResponse {
  category_id: string;
  user_id: string;
  category_name: string;
  budget: number;
  createdAt: Date;
  updatedAt: Date;
}
