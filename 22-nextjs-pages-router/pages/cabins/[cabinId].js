import { useRouter } from "next/router"


export default function Cabin() {
  const router = useRouter()

  return (
    <div>cabin {router.query.cabinId}</div>
  )
}
