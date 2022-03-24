import { Time } from "@angular/common";
import { Range } from "./range";
import { WorkingHours } from "./working-hours";

export class Schedulec {
    monday!: Range<Time>;
    tuesday!: Range<Time>;
    wednesday!: Range<Time>;
    thursday!: Range<Time>;
    friday!: Range<Time>;
    saturday!: Range<Time>;
    sunday!: Range<Time>;

    constructor() {
        this.init();
    }

    toWorkingHours(): Array<WorkingHours> {
        return [
            new WorkingHours("MONDAY", this.monday.start!, this.monday.end!),
            new WorkingHours("TUESDAY", this.tuesday.start!, this.tuesday.end!),
            new WorkingHours("WEDNESDAY", this.wednesday.start!, this.wednesday.end!),
            new WorkingHours("THURSDAY", this.thursday.start!, this.thursday.end!),
            new WorkingHours("FRIDAY", this.friday.start!, this.friday.end!),
            new WorkingHours("SATURDAY", this.saturday.start!, this.saturday.end!),
            new WorkingHours("SUNDAY", this.sunday.start!, this.sunday.end!)
        ]
    }

    clear() {
        this.init();
    }

    private init() {
        this.monday = new Range<Time>();
        this.tuesday = new Range<Time>();
        this.wednesday = new Range<Time>();
        this.thursday = new Range<Time>();
        this.friday = new Range<Time>();
        this.saturday = new Range<Time>();
        this.sunday = new Range<Time>();
    }
}
