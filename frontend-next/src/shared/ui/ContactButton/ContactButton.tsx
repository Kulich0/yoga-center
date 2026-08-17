import { ContactButtonProps } from "./types";

export const ContactButton = ({href, icon, children}: ContactButtonProps) => {
    return (
        <a href={href} className="bg-[#9370DB] text-white">
            <span>{children}</span>
            {icon}
        </a>
    );
}