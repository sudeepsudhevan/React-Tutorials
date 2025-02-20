import Head from "next/head"
import { useRouter } from "next/router"


export default function Cabin() {
  const router = useRouter()

  return (
    <>
    <Head>
      <title>{`Cabin ${router.query.cabinId} / The Wild Oasis`}</title>
    </Head>
    <div>cabin {router.query.cabinId}</div>
    </>
  )
}
