import { FiUser } from "react-icons/fi";

export interface UserIconProps {
    size: number,
    stroke: number
}

export default function UserIcon(props: UserIconProps) {
    return (
        <FiUser size={props.size}/>
    )
}