import {ScheduleItem, WeekDay} from "../model/types";
import {ScheduleClass} from "@/entities/schedule/ui/ScheduleClass";

type Props = {
    day: WeekDay;
    classes: ScheduleItem[];
}

export const ScheduleDay = ({day, classes}: Props) => {
    return (
        <div className="rounded-xl border border-gray-200">
            <div className="border-gray-200 px-3 py-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {day}
                    </h3>

                    <span className="rounded-full bg-[#F1ECF8] px-2.5 py-1 text-xs font-medium text-[#7654A8]">
                        {classes.length}{' '}
                        {classes.length === 1
                            ? 'занятие'
                            : classes.length < 5
                                ? 'занятия'
                                : 'занятий'}
                    </span>
                </div>
            </div>

            {classes.map((item) => (
                    <ScheduleClass key={`${item.time}-${item.type}`} item={item} />
            ))}
        </div>
    );
}