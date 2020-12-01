import React, { ReactNode } from 'react'
import classes from './style.module.css'

const Movil = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.header__left}></div>
        <div className={classes.header__right}></div>
      </header>
      <main className={classes.main}>
        <nav></nav>
      </main>
    </div>
  )
}


export default Movil




