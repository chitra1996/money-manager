export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public phone: string,
        public createdAt?: Date,
        public deletedAt?: Date,
        public updatedAt?: Date
    ) { }
}