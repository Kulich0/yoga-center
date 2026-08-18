import Link from 'next/link';

const navLinks = [
    { label: 'Занятия', href: '/classes' },
    { label: 'Расписание', href: '/schedule' },
    { label: 'Прайс', href: '/price' },
] as const;

export const Footer = () => {
    return (
        <footer className="w-full bg-[#9370DB] py-5 text-white">
            <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-start justify-between gap-8 px-4 sm:px-6">
                <section className="min-w-[220px] flex-1 basis-[240px]">
                    <h3 className="mb-2 text-lg font-semibold">О центре</h3>
                    <p className="text-sm">
                        Гармония движения - это центр йоги и здоровья. Мы предлагаем различные
                        занятия для улучшения вашего здоровья и настроения.
                    </p>
                </section>

                <section className="min-w-[220px] flex-1 basis-[240px]">
                    <h3 className="mb-2 text-lg font-semibold">Навигация</h3>
                    <div className="space-y-1.5">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block text-sm text-white hover:underline"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="min-w-[220px] flex-1 basis-[240px]">
                    <h3 className="mb-2 text-lg font-semibold">Контакты</h3>
                    <p className="text-sm">Адрес: Спасская улица, 14</p>
                    <Link
                        href="tel:+79120770429"
                        className="mt-1 block text-sm text-white hover:underline"
                    >
                        Телефон: +7 (912) 077-04-29
                    </Link>
                </section>
            </div>
        </footer>
    );
};
