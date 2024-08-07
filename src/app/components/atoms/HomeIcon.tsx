import { AiOutlineHome } from "react-icons/ai";

export interface HomeIconProps {
  size: number,
  stroke: number
}

export default function HomeIcon(props: HomeIconProps) {
  return (
    <AiOutlineHome size={props.size} />
  )
};