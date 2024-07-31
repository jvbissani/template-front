import Link from "next/link";
import UserIcon from "../atoms/UserIcon";
import UserText from "../atoms/UserText";

export default function(){
  return(
    <Link href="/users" className="flex gap-3 items-baseline px-4 py-2 hover:bg-black">
      <UserIcon />
      <UserText />
    </Link>
  )
}