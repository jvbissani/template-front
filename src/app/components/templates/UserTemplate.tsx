import Menu from "../organisms/Menu"
import UserList from "../molecules/UserList"
import UserHeader from "../molecules/UserHeader"

export default function UserTemplate() {
  return (
      <div className="flex">
          <Menu />
          <div className="w-screen">
              <UserHeader />
              <UserList />
          </div>
      </div>
  )
}