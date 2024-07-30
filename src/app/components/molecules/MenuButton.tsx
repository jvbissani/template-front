import Link from "next/link";
import HomeIcon from "../atoms/HomeIcon";
import HomeText from "../atoms/HomeText";

export default function(){
  return(
    <Link href="/" className="flex gap-3 items-baseline px-4 py-2 hover:bg-black">
      <HomeIcon />
      <HomeText />
    </Link>
  )
}