import Link from 'next/link';

import { navItems } from '@/shared/config/navigation';

export const Header = () => {
    return (
        <header className="sticky top-0 bg-[#9370DB] shadow-sm">
            <nav className="flex flex-row justify-center py-3">
                {/*<Image
                        src={Logo}
                        alt="Гармония движения"
                        width={50}
                        height={50}
                    />*/}
                <div className="flex gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-md px-3 py-2 text-base uppercase font-medium text-white transition hover:bg-white/15"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};
