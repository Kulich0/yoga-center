type Price = [count: string, amount: string];

export type SinglePriceItem = {
    id: string;
    label: string;
    price: string;
};

export type SubscriptionItem = {
    id: string;
    title: string;
    subtitle: string;
    prices: Price[];
};