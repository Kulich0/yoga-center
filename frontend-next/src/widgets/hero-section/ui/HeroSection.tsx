import Image from 'next/image';
import HeroImage from '@/shared/ui/assets/images/HeroImage.webp';

export const HeroSection = () => {
    return (
        <section className="relative h-[500px] w-full overflow-hidden">
            <Image
                src={HeroImage}
                alt="Студия йоги"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    Студия йоги «Гармония движения»
                </h1>

                <p className="mt-4 text-lg text-white sm:text-xl lg:text-2xl">
                    Здоровье и хорошее настроение вместе с нами
                </p>
            </div>
        </section>
    );
};