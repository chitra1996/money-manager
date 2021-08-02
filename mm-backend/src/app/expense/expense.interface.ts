export interface IExpenseRequest {
  description: string;
  classification: string;
  category_id: string;
  amount: number;
}

export interface IExpenseResponse {
  expense_id: string;
  user_id: string;
  category_id: string;
  description: string;
  classification: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  expense_date: Date;
}
