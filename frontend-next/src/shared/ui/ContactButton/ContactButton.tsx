import { ContactButtonProps } from './types';

export const ContactButton = ({ href, icon, children }: ContactButtonProps) => {
    return (
        <a
            href={href}
            className="
        inline-flex w-fit items-center gap-2
        rounded-xl bg-[#9370DB] px-6 py-3
        text-sm font-semibold text-white
        transition hover:bg-[#7f5fc1]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9370DB] focus-visible:ring-offset-2
      "
        >
            <span>{children}</span>
            {icon}
        </a>
    );
};
