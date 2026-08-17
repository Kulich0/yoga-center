export const weekDays = [
    'Вторник',
    'Четверг',
    'Суббота',
] as const;

export type WeekDay = (typeof weekDays)[number];

export interface ScheduleItem {
    time: string;
    type: string;
}

export type Schedule = Record<WeekDay, ScheduleItem[]>