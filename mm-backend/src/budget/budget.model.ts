export class Budget {
    constructor(
        public id: string,
        public user_id: string,
        public budget: number,
        public category: string,
        public createdAt?: Date,
        public deletedAt?: Date,
        public updatedAt?: Date
    ) { }
}