import React, { ReactNode, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import StyleIcon from '@material-ui/icons/Style'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'

import { Isotipo } from '../../../../components/Logo'

import classes from './style.module.css'
import { useSelector } from 'react-redux'

interface ItemProps {
  icon: ReactNode
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  text: string
}

const Item = ({ icon, onClick, text }: ItemProps) => {
  return (
    <ListItem button onClick={onClick}>
        <ListItemIcon>
          { icon }
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
  )
}

function Nav() {
  const history = useHistory()
  const cuenta = useSelector(state => state)
  console.log(cuenta)
  // Cuentas Bancarias:
  // import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
  // Perfiles:
  // import GroupIcon from '@material-ui/icons/Group'
  return (
    <div className={classes.container}>
      <header style={{ display: 'flex', justifyContent: 'center' }}>
        <Isotipo width="80"/>
      </header>
      <nav>
        <List component="nav"
          aria-labelledby="list">
            <Item text="Datos" icon={<AttachMoneyIcon />} 
              onClick={() => history.push('/dashboard/mesa-de-dinero')} />
            <Item text="Inversiones" icon={<TrendingUpIcon />} 
              onClick={() => history.push('/dashboard/inversiones')} />
            <Item text="Créditos" icon={<StyleIcon />} 
              onClick={() => history.push('/dashboard/creditos')} />
        </List>
      </nav>
      <footer>
        <List component="div" aria-labelledby="list">
            <Item text="Soporte" icon={<HelpIcon />} 
              onClick={() => history.push('/dashboard/soporte')} />
            <Item text="Configuración" icon={<SettingsIcon />} 
              onClick={() => history.push('/dashboard/configuracion')} />
        </List>
      </footer>
    </div>
  )
}
  
  export default Nav