import {ScheduleItem} from "@/entities/schedule/model/types";

type Props = { item: ScheduleItem };

export const ScheduleClass = ({item}: Props) => {
    return (
        <div className="rounded-xl bg-gray-50 p-3">
            <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-900">
                    {item.time}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {item.type}
                </p>
            </div>
        </div>
    );
}