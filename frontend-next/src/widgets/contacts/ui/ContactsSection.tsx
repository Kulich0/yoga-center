import {PageTitle} from "@/shared/ui/PageTitle";

export const ContactsSection = () => {
    return (
        <section className="bg-[#FAF8FC] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <PageTitle
                    title="Контакты"
                    subtitle="Свяжитесь с нами или приходите в нашу студию"
                />

                <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">

                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            Адрес
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            г. Ваш город
                            <br />
                            ул. Название улицы, 10
                        </p>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">

                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            Телефон
                        </h3>

                        <a
                            href="tel:+79120770429"
                            className="mt-2 text-sm font-medium text-[#7654A8] transition-colors hover:text-[#9370DB]"
                        >
                            +7 (912) 077-04-29
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};