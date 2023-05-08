'use client'
import styles from './page.module.css'
import NavBar from './components/Navbar'
import { useState } from 'react'
import { MobileMenuOptions } from './components/MobileMenuOptions'
import { DealRoom } from './components/DealRoom'


export default function Home() {

  const [toggleMenu, setToggle] = useState(false)

  const handleClose = () => {
    setToggle(false)
  }

  const handleShow = () => {
    setToggle(true)
  }

  return (
    <main className={styles.main}>
      <NavBar handleShow={handleShow} />
      <DealRoom/>
      {toggleMenu && <MobileMenuOptions handleClose={handleClose} />}
    </main>
  )
}
