import UserHeaderSubtitle from "../atoms/UserHeaderSubtitle";
import UserHeaderTitle from "../atoms/UserHeaderTitle";
import UserIcon from "../atoms/UserIcon";

export default function UserHeader() {
  return (
    <div className="flex items-center gap-2 p-5 w-max">
      <UserIcon size={55} stroke={1} />
      <div className="flex flex-col">
        <UserHeaderTitle />
        <UserHeaderSubtitle />
      </div>
    </div>
  );
}