import UserEmail from "../atoms/UserEmail";
import UserName from "../atoms/UserName";

export default function (){
  return <div className="flex gap-3 items-baseline px-4 py-2">
    <UserName/>
    <UserEmail/>
  </div>

}