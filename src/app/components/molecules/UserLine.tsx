import UserEmail from "../atoms/UserEmail";
import UserName from "../atoms/UserName";
import UserPhoto from "../atoms/UserPhoto";

export default function UserLine() {
  return (
    <div className="flex items-center bg-zinc-800 p-4 rounded-md gap-5 w-full">
      <UserPhoto />
      <div className="flex flex-col">
        <UserName />
        <UserEmail />
      </div>
    </div>
  );
}
