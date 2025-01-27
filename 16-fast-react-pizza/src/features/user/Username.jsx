import { useSelector } from "react-redux"
import { getUsername } from "./userSlice";


export default function Username() {
  const username = useSelector(getUsername)

  if (!username) {
    return null;
  }

  return (
    <div className="text-sm font-semibold hidden md:block">
      {username}
    </div>
  )
}
