import {SectionWrapper} from "@/shared/ui/Wrapper";
import {PageTitle} from "@/shared/ui/PageTitle";
const advantages = [
    {
        title: 'Комфорт',
    },
    {
        title: 'Квалификация инструкторов',
    },
    {
        title: 'Укрепление здоровья',
    },
];

export const AboutCenter = () => {
    return (
        <div className="mx-auto w-full bg-white px-4 py-8 sm:px-8">
            <PageTitle title="Почему именно Студия йоги «Гармония движения»" />

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {advantages.map(({ title }) => (
                    <div
                        key={title}
                        className="
                        w-full max-w-[250px]
                        rounded-xl
                        bg-white
                        p-6
                        text-center
                    "
                    >

                        <h3 className="mt-3 text-lg font-semibold text-[#9370DB]">
                            {title}
                        </h3>
                    </div>
                ))}
            </div>

            <div className="my-6 h-px w-full bg-[#9370DB]" />
        </div>
    );
}