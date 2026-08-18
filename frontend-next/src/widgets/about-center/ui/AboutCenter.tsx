import { HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';

import { PageTitle } from '@/shared/ui/PageTitle';
import { SectionWrapper } from '@/shared/ui/Wrapper';

const advantages = [
    {
        title: 'Комфорт',
        icon: Sparkles,
    },
    {
        title: 'Квалификация инструкторов',
        icon: ShieldCheck,
    },
    {
        title: 'Укрепление здоровья',
        icon: HeartPulse,
    },
];

export const AboutCenter = () => {
    return (
        <SectionWrapper>
            <PageTitle title="Почему именно Студия йоги «Гармония движения»" />

            <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                {advantages.map(({ title, icon: Icon }, index) => {
                    return (
                        <li key={title} className="relative">
                            <article className="relative h-full rounded-xl border border-neutral-300 bg-white px-5 py-6 text-center shadow-sm">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#7654A8]">
                                    <Icon className="h6 w-6" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

                                <p className="text-sm leading-relaxed text-gray-600">
                                    {index + 1} из {advantages.length}
                                </p>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </SectionWrapper>
    );
};
