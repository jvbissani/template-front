import Image from "next/image";

export default function UserPhoto(){
  return (
    <div>
      <Image src="https://picsum.photos/80" width={80} height={80} alt="user photo" className="rounded-full"/>
    </div>
  )
}