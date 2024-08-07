import MenuButton from "../molecules/MenuButton";
import UserButton from "../molecules/UserButton";

export default function(){
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuButton />
                <UserButton />
            </nav>
        </aside>
  )
}