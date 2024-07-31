import MenuButton from "../molecules/MenuButton";
import UserButton from "../molecules/UserButton";

export default function(){
  return (
    <aside className="w-72 bg-zinc-800 h-screen">
            <nav className="flex flex-col">
                <MenuButton />
                <UserButton />
            </nav>
        </aside>
  )
}