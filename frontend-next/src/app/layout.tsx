import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Гармония движения',
    description: 'Студия йоги в Тюмени',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
