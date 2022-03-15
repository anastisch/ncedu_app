import { Role } from "./Role";

export class User {
    // id!: number;
    // name!: string;
    // email!: string;
    // password!: string;
    // role!: Role;    

    constructor (
        public id: number, 
        public name: string, 
        public email: string, 
        public token: string, 
        public role: Role
    ) { }

    get isAdmin(): boolean {
        return this.role == Role.Admin;
    }

    get isUser(): boolean {
        return this.role == Role.User;
    }

}
