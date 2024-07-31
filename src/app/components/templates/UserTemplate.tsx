import Menu from "../organisms/Menu"
import UserMainText from "../atoms/UserMainText"
import UserMain from "../organisms/UserMain"

export default function UserTemplate(){
  return(
    <div className="flex">
      <Menu />
      <UserMainText />
      <UserMain />
    </div>
  )
}