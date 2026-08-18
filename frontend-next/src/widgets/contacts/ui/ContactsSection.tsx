import { MapPin, Phone } from 'lucide-react';

import { PageTitle } from '@/shared/ui/PageTitle';
import { SectionWrapper } from '@/shared/ui/Wrapper';

export const ContactsSection = () => {
    return (
        <SectionWrapper>
            <PageTitle title="Контакты" subtitle="Свяжитесь с нами или приходите в нашу студию" />
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 p-2">
                <a
                    href="https://go.2gis.com/Tr8GK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-neutral-300 bg-white p-6 shadow-sm"
                >
                    <div className="mb-3 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#7654A8]" />
                        <h3 className="text-xl font-semibold text-gray-900">Адрес</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                        г. Тюмень
                        <br />
                        Спасская улица, 14
                    </p>
                </a>

                <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#7654A8]" />
                        <h3 className="text-xl font-semibold text-gray-900">Телефон</h3>
                    </div>
                    <a
                        href="tel:+79120770429"
                        className="text-sm font-medium text-[#7654A8] transition-colors hover:text-[#9370DB]"
                    >
                        +7 (912) 077-04-29
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};
