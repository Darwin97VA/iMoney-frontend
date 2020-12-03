import React from 'react' 
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const Lateral = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  return (
    <List>
      <ListItem button onClick={() => history.push('/mesa-de-dinero')} selected={pathname === '/mesa-de-dinero'}>
        <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
        <ListItemText primary="Mesa de dinero" />
      </ListItem>
      <ListItem button onClick={() => history.push('/inversiones')} selected={pathname === '/inversiones'}>
        <ListItemIcon><TrendingUpIcon /></ListItemIcon>
        <ListItemText primary="Inversiones" />
      </ListItem>
      <ListItem button onClick={() => history.push('/financiamientos')} selected={pathname === '/financiamientos'}>
        <ListItemIcon><ThumbUpIcon /></ListItemIcon>
        <ListItemText primary="Financiamientos" />
      </ListItem>
    </List>
  )
}

export default Lateral