import { SinglePriceItem } from '../model/types';

type Props = { item: SinglePriceItem };

export const SinglePriceCard = ({ item }: Props) => {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{item.price}</p>
        </article>
    );
};
