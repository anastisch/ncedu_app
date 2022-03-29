import { WorkingHours } from "../hours/working-hours";
import { User } from "../user/user";

export class CoffeeShop {

    constructor(
        public id: number,
        public name: string, 
        public description: string,
        public location: any,
        public address: string,
        public url: string,
        public phone: string,
        public rating: number,
        public manager: User,
        public workingHours: Array<WorkingHours>,
        public grades: Array<number>
        ) { }
}
