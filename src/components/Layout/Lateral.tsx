import React from 'react' 
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CommentIcon from '@material-ui/icons/Comment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const Lateral = () => {
  const history = useHistory()
  const { pathname } = useLocation();
  return (
    <List>
      <ListItem button onClick={() => history.push('/perfil')} selected={pathname==='/perfil'}>
        <ListItemIcon><PersonIcon /></ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
      <ListItem button onClick={() => history.push('/operaciones')} selected={pathname==='/operaciones'}>
        <ListItemIcon><ReceiptIcon /></ListItemIcon>
        <ListItemText primary="Operaciones" />
      </ListItem>
      <ListItem button onClick={() => history.push('/cuentas')} selected={pathname==='/cuentas'}>
        <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
        <ListItemText primary="Cuentas" />
      </ListItem>
      <ListItem button onClick={() => history.push('/mensajes')} selected={pathname==='/mensajes'}>
        <ListItemIcon><CommentIcon /></ListItemIcon>
        <ListItemText primary="Mensajes" />
      </ListItem>
    </List>
  )
}

export default Lateral