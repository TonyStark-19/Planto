// import IconType for react icons
import type { IconType } from 'react-icons';

// button props for icons
interface ButtonProps {
    icon: IconType;
}

// NavIcons
export default function NavIcons({ icon: Icon }: ButtonProps) {
    return (
        <Icon className='text-white text-2xl cursor-pointer hover:-translate-y-1 duration-300'></Icon>
    )
}