import Link from "next/link";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  useEffect(()=>{

    fetcher('/api/hello').then(res=>console.log(res))

    },[])

  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <br />
        <Link href="/about">About</Link>
      </nav>

      <main>
        <h1>Index page updated</h1>
      </main>
    </>
  );
}
