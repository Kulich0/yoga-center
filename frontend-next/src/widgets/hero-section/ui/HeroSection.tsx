import Image from 'next/image';

import HeroImage from '@/shared/ui/assets/images/HeroImage.webp';

export const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative min-h-[56vh] md:min-h-[64vh] lg:min-h-[72vh]">
                <Image
                    src={HeroImage}
                    alt="Студия йоги"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />

                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
                                Студия йоги «Гармония движения»
                            </h1>
                            <p className="mt-4 text-base text-white/90 sm:text-lg lg:text-xl">
                                Здоровье и хорошее настроение вместе с нами
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
