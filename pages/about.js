import Link from "next/link";


export default function Home() {
  return (
    <>
      <nav>
        <Link href='/'>Home</Link>
                <br/>
                <br/>
        <Link href='/about'>About</Link>
      </nav>

      <main >
        <h1>About Page</h1>
      </main>
    </>
  );
}
