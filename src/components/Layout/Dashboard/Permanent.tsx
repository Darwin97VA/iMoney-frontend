import React from 'react' 
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HelpIcon from '@material-ui/icons/Help';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const Lateral = () => {
  const history = useHistory()
  const { pathname } = useLocation();
  return (
    <List>
    <ListItem button onClick={() => history.push('/perfiles/crear')} selected={pathname==='/perfiles/crear'}>
      <ListItemIcon><AddCircleIcon /></ListItemIcon>
      <ListItemText primary="Crear Perfil" />
    </ListItem>
    <ListItem button onClick={() => history.push('/perfiles')} selected={pathname==='/perfiles'}>
      <ListItemIcon><GroupIcon /></ListItemIcon>
      <ListItemText primary="Perfiles" />
    </ListItem>
      <ListItem button onClick={() => history.push('/configuraciones')} selected={pathname==='/configuraciones'}>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Configuraciones" />
      </ListItem>
      <ListItem button onClick={() => history.push('/soporte')} selected={pathname==='/soporte'}>
        <ListItemIcon><HelpIcon /></ListItemIcon>
        <ListItemText primary="Soporte" />
      </ListItem>
    </List>
  )
}

export default Lateral