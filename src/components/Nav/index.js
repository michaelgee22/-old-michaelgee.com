import Link from 'next/link'
import Image from 'next/image'
import { Button, Icon } from 'semantic-ui-react'
import { Sidebar } from '../Sidebar'

import { useRouter } from 'next/router'
import { useState } from 'react'

import { MG_NAV_PAGES } from '../../constants'

import styles from './Nav.module.css'

export const Nav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        {MG_NAV_PAGES.map(btn => (
          <Link href={btn.pathname} key={btn.icon}>
            <Button
              as="a"
              icon
              size="huge"
              id={btn.pathname === router.pathname ? styles.selected : undefined}
              className={styles.navBtn}
            >
              <Icon name={btn.icon} />
              <div>{btn.text}</div>
            </Button>
          </Link>
        ))}
      </div>

      <div className={styles.mobileNav}>
        <Link href="/">
          <div className={styles.mobileNavContent}>
            <Image
              src="/images/mg-transparent-logo.png"
              alt="Michael Gee logo image"
              width={64}
              height={64}
            />

            <div>
              <h1 className={styles.mobileTitle}>Michael Gee</h1>
              <h2 className={styles.mobileSubtitle}>Software Developer</h2>
            </div>
          </div>
        </Link>

        <Button onClick={_toggleSidebar} icon id={styles.menuBtn} aria-label="Open Side Menu">
          <Icon name="bars" />
        </Button>
      </div>

      {sidebarIsOpen && <Sidebar onHide={_toggleSidebar} />}
    </nav>
  )

  function _toggleSidebar() {
    setSidebarIsOpen(!sidebarIsOpen)
  }
}
