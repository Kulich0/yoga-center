import { SinglePriceItem, SubscriptionItem } from "./types";

export const singlePrices: SinglePriceItem[] = [
    { id: "trial", label: "Пробное занятие", price: "300 ₽" },
    { id: "single", label: "Разовое занятие", price: "600 ₽" },
    { id: "personal", label: "Индивидуальная тренировка", price: "1 200 ₽" },
];

export const subscriptions: SubscriptionItem[] = [
    {
        id: '1',
        title: 'Йога в гамаках',
        subtitle: 'Для начинающих',
        prices: [
            ['4 занятия', '2 000 ₽'],
            ['8 занятий', '3 600 ₽'],
            ['12 занятий', '4 000 ₽'],
        ],
    },
    {
        id: '2',
        title: 'Йога в гамаках',
        subtitle: 'Средний уровень',
        prices: [
            ['4 занятия', '2 000 ₽'],
            ['8 занятий', '3 600 ₽'],
            ['12 занятий', '4 000 ₽'],
        ],
    },
    {
        id: '3',
        title: 'Хатха-йога',
        subtitle: 'Классическая практика',
        prices: [
            ['4 занятия', '2 000 ₽'],
            ['8 занятий', '3 600 ₽'],
            ['12 занятий', '4 000 ₽'],
        ],
    },
    {
        id: '4',
        title: 'Йога-нидра',
        subtitle: 'Глубокое расслабление',
        prices: [
            ['4 занятия', '2 000 ₽'],
            ['8 занятий', '3 600 ₽'],
            ['12 занятий', '4 000 ₽'],
        ],
    },
];