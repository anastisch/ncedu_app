export enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export const allWeekDays: Array<WeekDay> = Object.values(WeekDay)
    .map(value => Number(value))
    .filter(value => !Number.isNaN(value))
    .map(value => value as WeekDay)

type WeekDayProperties<T> = { [key in WeekDay] : T }

export const WeekDayCodes: WeekDayProperties<string> = {
    [WeekDay.Monday]: "ПН",
    [WeekDay.Tuesday]: "ВТ",
    [WeekDay.Wednesday]: "СР",
    [WeekDay.Thursday]: "ЧТ",
    [WeekDay.Friday]: "ПТ",
    [WeekDay.Saturday]: "СБ",
    [WeekDay.Sunday]: "ВС"
}

export const WeekDayCodesf: { [key in keyof typeof WeekDay]: string } = {
    Monday: "ПН",
    Tuesday: "ВТ",
    Wednesday: "СР",
    Thursday: "ЧТ",
    Friday: "ПТ",
    Saturday: "СБ",
    Sunday: "ВС"
}

Object.values(WeekDay).map(day => WeekDayCodes[day as WeekDay])