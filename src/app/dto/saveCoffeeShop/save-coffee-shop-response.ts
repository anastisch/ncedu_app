import { User } from "src/app/model/user/user";

export class SaveCoffeeShopResponse {
    constructor(
        public id: number,
        public coffeeShopName: string, 
        public desc: string,
        public location: string,
        public address: string,
        public url: string,
        public phone: string,
        public rating: number,
        public manager: User,
        public workingHours: Array<number>
        ) { }
}
