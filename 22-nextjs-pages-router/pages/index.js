import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1 className="text-primary-700">Next.js + Supabase g</h1>
      <div>
        <Link href="/about">About</Link>
        <Link href="/cabins">Cabins</Link>
      </div>
    </div>
  );
}
