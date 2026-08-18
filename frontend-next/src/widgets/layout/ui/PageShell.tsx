import type { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export const PageShell = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex min-w-0 flex-1 flex-col">{children}</main>
            <Footer />
        </div>
    );
};
