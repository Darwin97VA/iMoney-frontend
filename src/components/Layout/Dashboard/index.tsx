import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Lateral from './Lateral'
import Permanente from './Permanent'
import Servicios from './Servicios'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, useLocation } from 'react-router-dom';
import { Isotipo } from '../../Logo';
import CambioSujeto from './CambioSujeto'
import { AppBar, IconButton, ListItem, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const Cabecera = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  return (
    <div style={{ display: 'flex' }}>
      <ListItem style={{display: 'flex', justifyContent: 'center', minWidth: '160px'}} button onClick={() => history.push('/mesa-de-dinero')} selected={pathname === '/mesa-de-dinero'}>
        <strong> Mesa de dinero </strong>
      </ListItem>
      <ListItem style={{display: 'flex', justifyContent: 'center', minWidth: '160px'}} button onClick={() => history.push('/inversiones')} selected={pathname === '/inversiones'}>
        <strong> Inversiones </strong>
      </ListItem>
      <ListItem style={{display: 'flex', justifyContent: 'center', minWidth: '160px'}}  button onClick={() => history.push('/financiamientos')} selected={pathname === '/financiamientos'}>
        <strong>Financiamientos </strong>
      </ListItem>
    </div>
  )
}

export default function SwipeableTemporaryDrawer({ children }: { children: ReactNode }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [esMovil] = useState(isMobile())

  const _handleOpen = () => {
    setOpen(!open)
  }

  
  return (
    <div style={{minHeight: '100vh', width: '100%'}}>
      <AppBar position="sticky" style={{
        display: 'flex', 
        justifyContent: 'space-between',
        background: 'white',
        color: 'black'
      }}>
        <Toolbar style={{
          display: 'flex', 
          justifyContent: 'space-between',
          background: 'white',
          color: 'black'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={_handleOpen}>
              <MenuIcon />
            </IconButton>
            <Isotipo width="60"/>
          </div>
          
          {
            esMovil 
            ? null
            : <Cabecera />
          }
          <CambioSujeto />
        </Toolbar>
      </AppBar>
      <main style={{padding: '2em'}}>
        { children }
      </main>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={_handleOpen}
        onOpen={_handleOpen}
      >
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}
          className={clsx(classes.list)}
          role="presentation"
          onClick={_handleOpen}
          onKeyDown={_handleOpen}
        >
          <div className="top">
            {
              esMovil 
              ? (
                <>
                  <h3 style={{padding: '1em', paddingBottom: '.25em' }}>Servicios</h3>
                  <Servicios />
                  <Divider />
                </>
              ) : null
            }
            <h3 style={{padding: '1em', paddingBottom: '.25em' }}>Información</h3>
            <Lateral />
          </div>
          <div className="botton">
            <Divider />
            <Permanente />
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
