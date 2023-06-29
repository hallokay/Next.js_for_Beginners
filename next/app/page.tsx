import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>hi</h1>
      <Link href="/about">about</Link>

    </main>
  )
}
