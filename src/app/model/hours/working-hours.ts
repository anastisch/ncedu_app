import { Time } from "@angular/common";

export class WorkingHours {

    constructor(
        public weekday: string,
        public startTime: Time | null,
        public endTime: Time  | null
    ) { }
}
