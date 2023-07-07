import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hihi</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
