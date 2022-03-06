import Link from 'next/link'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav className={styles.nav} id="sec">
      <Link href="/resume" >
        <a>resume</a>
      </Link>
      <Link href="/info" >
        <a>info</a>
      </Link>
      <Link href="/" >
        <a>work</a>
      </Link>
    </nav>
  )
}
