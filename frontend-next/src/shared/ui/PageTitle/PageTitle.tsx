type Props = {
    title: string;
    subtitle?: string;
};

export const PageTitle = ({ title, subtitle }: Props) => {
    return (
        <header className="mb-6">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                {title}
            </h1>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500">{subtitle}</p>
        </header>
    );
};
