import { SubscriptionItem } from '@/entities/price';

type Props = { items: SubscriptionItem[] };

export const SubscriptionList = ({ items }: Props) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {items.map((item, index) => (
                <div key={item.id} className={index > 0 ? 'border-t border-gray-200' : ''}>
                    <div className="grid items-center gap-5 p-5 md:grid-cols-[1.5fr_2fr] md:p-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row">
                            {item.prices.map(([count, price], priceIndex) => (
                                <div
                                    key={`${item.id}-${count}`}
                                    className={`flex-1 rounded-xl p-3 ${
                                        priceIndex === 2
                                            ? 'bg-[#9370DB] text-white'
                                            : 'bg-gray-50 text-gray-900'
                                    }`}
                                >
                                    <p
                                        className={`text-xs ${
                                            priceIndex === 2 ? 'text-gray-300' : 'text-gray-500'
                                        }`}
                                    >
                                        {count}
                                    </p>
                                    <p className="mt-1 text-base font-bold">{price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
