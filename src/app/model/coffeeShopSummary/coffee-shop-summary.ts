import { WorkingHours } from "../hours/working-hours";

export class CoffeeShopSummary {
    constructor(
        public id: number,
        public name: string, 
        public location: string,
        public address: string,
        public phone: string,
        public rating: number,
        public workingHours: Array<WorkingHours>
        ) { }
}
