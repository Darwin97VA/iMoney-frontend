import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React, { MouseEvent } from 'react'

const TipoCuenta = ({ cuenta, setCuenta, img }: { img: string, cuenta: string, setCuenta: (data: any) => void }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <img src={img} alt="Moneda" />
      <Button style={{background: '#FEDEA9'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <small> Cuenta: { cuenta } </small> 
      </Button>
      <Menu id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

interface RowProps {
  title: string
  imgMoneda: string
  cantidad: number
  setCantidad: (data: any) => void
  cuenta: string
  setCuenta: (data: any) => void
}
const Row = ({
  title,
  imgMoneda,
  cantidad,
  setCantidad,
  cuenta,
  setCuenta,
}: RowProps) => {

  return (
    <div style={{display: 'flex', width: '100%'}}>
      <div className="left" style={{flexGrow: 1, width:'50%', fontSize: '16px',display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <span>{ title }</span>
        <input type="number" min={1} value={cantidad} onChange={e=>setCantidad(Number(e.target.value))}
          style={{
            maxWidth: '100%',
            border: 'none', padding: '.5em 0', fontSize: '24px', outline: 'none'
          }} />
      </div>
      <div className="right" style={{flexGrow: 1, width:'50%'}}>
        <TipoCuenta img={"/img/"+imgMoneda+".png"} cuenta={cuenta} setCuenta={setCuenta} />
      </div>
    </div>
  )
}

export default Row