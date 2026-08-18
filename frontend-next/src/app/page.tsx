import { AboutCenter } from '@/widgets/about-center';
import { ContactsSection } from '@/widgets/contacts';
import { HeroSection } from '@/widgets/hero-section';
import { PageShell } from '@/widgets/layout';

export default function HomePage() {
    return (
        <PageShell>
            <HeroSection />
            <AboutCenter />
            <ContactsSection />
        </PageShell>
    );
}
