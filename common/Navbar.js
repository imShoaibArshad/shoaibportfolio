import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Shoaib Arshad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav>
       <div className={styles.navbar__logo}>
        <img src="/pic/logo.png" alt="logo" />
      </div>
      <ul className={styles.navStyle}>
        <li>
          <Link href="/home">
          Home
          </Link>
        </li>
        <li>
          <Link href="/aboutme">
          About Me
          </Link>
        </li>
        <li>
          <Link href="/project">
          Projects
          </Link>
        </li>
        <li>
          <Link href="/certification">
          Certification
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
