import { PageShell } from "@/widgets/layout";
import { AboutCenter } from "@/widgets/about-center";
import {HeroSection} from "@/widgets/hero-section";
import {ContactsSection} from "@/widgets/contacts";

export default function HomePage() {
    return (
        <PageShell>
            {/*<HeroSection />*/}
            <AboutCenter />
            <ContactsSection />
        </PageShell>
    );
}
