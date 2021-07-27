export interface IUserRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUserResponse {
  user_id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
