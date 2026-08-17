import {SinglePriceCard, singlePrices, SubscriptionList, subscriptions} from "@/entities/price";
import {PageTitle} from "@/shared/ui/PageTitle";
import {SectionWrapper} from "@/shared/ui/Wrapper";
import {ContactButton} from "@/shared/ui/ContactButton";
import MaxIcon from '@/shared/ui/assets/icons/MaxLogo.svg';
import Image from 'next/image';
export const PriceSection = () => {
    return (
        <SectionWrapper>
            <PageTitle
                title="Выберите свой формат"
                subtitle="Разовые занятия и абонементы для регулярных тренировок"
            />

            <div className="flex flex-row gap-3">
                <div className="flex-1">
                    <div className="grid grid-cols-1 gap-3">
                        {singlePrices.map((item) => (
                            <SinglePriceCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <SubscriptionList items={subscriptions} />
                </div>
            </div>
            <ContactButton
                href="https://t.me/+79120770429"
                icon={<Image src={MaxIcon} alt="" width={20} height={20} />}
            >
                Записаться
            </ContactButton>
        </SectionWrapper>
    );
}