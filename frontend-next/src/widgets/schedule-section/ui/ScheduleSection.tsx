import {PageTitle} from "@/shared/ui/PageTitle";
import {SectionWrapper} from "@/shared/ui/Wrapper";
import {ScheduleDay, weekDays, schedule} from "@/entities/schedule";

export const ScheduleSection = () => {
    return (
        <SectionWrapper>
            <PageTitle
                title="Расписание занятий"
                subtitle="Выберите удобный день и время для своей практики"
            />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {weekDays.map((day) => (
                    <ScheduleDay key={day} day={day} classes={schedule[day]} />
                ))}
            </div>
        </SectionWrapper>
    );
};