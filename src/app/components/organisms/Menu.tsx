import MenuButton from "../molecules/MenuButton";

export default function(){
  return (
    <aside className="w-72 bg-zinc-800 h-screen">
            <nav className="flex flex-col">
                <MenuButton />
                <MenuButton />
                <MenuButton />
                <MenuButton />
            </nav>
        </aside>
  )
}