export class Expense {
    constructor(
        public id: string,
        public user_id: string,
        public description: string,
        public classification: string,
        public category_id: string,
        public amount: number,
        public createdAt?: Date,
        public deletedAt?: Date,
        public updatedAt?: Date
    ) { }
}