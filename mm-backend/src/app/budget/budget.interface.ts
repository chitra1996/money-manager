export interface IBudgetRequest {
  budget: number;
  category_id: string;
}

export interface IBudgetResponse {
  budget_id: string;
  user_id: string;
  category_id: string;
  budget: number;
  createdAt: Date;
  updatedAt: Date;
}
