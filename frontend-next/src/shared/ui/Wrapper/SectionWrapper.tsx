import type { ReactNode } from 'react';

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
    return <section className="w-full px-4 sm:px-6 md:py-6">{children}</section>;
};
