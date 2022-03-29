import { Time } from "@angular/common";

export class WorkingHours {

    constructor(
        public weekday: string,
        public start_time: Time | null,
        public end_time: Time  | null
    ) { }
}
