// import IconType for react icons
import type { IconType } from 'react-icons';

// button props for icons
interface NavIconProps {
    icon: IconType;
    size?: number;
    label: string;
}

// NavIcons
export default function NavIcons({ icon: Icon, size = 24, label }: NavIconProps) {
    return (
        <button
            aria-label={label}
            className="text-white cursor-pointer hover:-translate-y-1 duration-300 bg-transparent border-none"
        >
            <Icon size={size} />
        </button>
    );
}