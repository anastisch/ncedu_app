import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";

export class Range<T> {
    start: T | null;
    end: T | null;

    constructor() {
        this.start = null;
        this.end = null;
    }
}
