import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles['navbar-wrap']}>
      <div className={styles['logo']}>
        <img src="/logo-to-do-list.png" alt="logo-from-icons8" className={styles['image-logo']}/>
        <div>To Do Application</div>
      </div>
    </nav>
  )
}

export default Navbar
