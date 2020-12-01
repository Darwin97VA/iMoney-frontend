import React, { ReactNode } from 'react'
import classes from './style.module.css'
import Aside from './Nav'
import Header from './Header'
import { Button } from '@material-ui/core'

const BtnProfile = () => {
    return (
        <Button>Perfil</Button>
    )
}
const BtnHome = () => {
    return (
        <Button>Home</Button>
    )
}

const Dashboard = ({ children }: { children: ReactNode }) => {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <div className={classes.header__logo}>
                    <BtnHome />
                </div>
                <div className={classes.header__nav}>
                    <Header />
                </div>
                <div className={classes.header__profile}>
                    <BtnProfile />
                </div>
            </header>
            <main className={classes.main}>
                <nav className={classes.main__nav}>
                    <Aside />
                </nav>
                <main className={classes.main__content}>
                    { children }
                </main>
            </main>
        </div>
    )
}



export default Dashboard
