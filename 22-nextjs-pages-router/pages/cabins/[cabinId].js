import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);

  return {
    props: {
      cabin,
    },
  };
}

// This is how we could do SSG
// getStaticPaths + getStaticProps

// Dynamically rendered page (SSR)
export default function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Cabin ${cabin.name} / The Wild Oasis`}</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}
