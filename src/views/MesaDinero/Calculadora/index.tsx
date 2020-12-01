
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { TipoMoneda } from '../../../interfaces/Utils'
import Row from './Row'

const Head = ({ titulo, cantidad, left=false }: { left?: boolean, titulo: string, cantidad: string | number }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <strong style={{display: 'flex', justifyContent: left?'flex-end':''}}> { titulo } </strong>
      <strong style={{display: 'flex', justifyContent: left?'flex-end':'', fontSize: '2em'}}> { cantidad } </strong>
    </div>
  )
}

enum TipoCambio {
  Compra = 'compra',
  Venta = 'venta'
}
const Calculadora = () => {
  // Entrada y salida de iMoney
  const data = {
    moneda: TipoMoneda.Dolar,
    compra: 3.585,
    venta: 3.611
  }
  const [valor, setValor] = useState<number>(100)
  const [tipoCambio, setTipoCambio] = useState<TipoCambio>(TipoCambio.Compra) 
  const result = tipoCambio==='compra' ? (valor * data[tipoCambio]) : (valor / data[tipoCambio])
  const [cuentaSalida, setCuentaSalida] = useState('')
  const [cuentaLlegada, setCuentaLlegada] = useState('')
  
  return (
    <div style={{width: '300px', border: '1px solid black'}}>
      <header style={{display: 'flex', padding: '.5em 1em', alignItems: 'center'}}>
        <Head titulo="Compra" cantidad={data.compra} />
        
        <FontAwesomeIcon style={{
          fontSize: '32px'
        }} icon={faExchangeAlt} onClick={()=>{
          if(tipoCambio === TipoCambio.Compra) {
            setTipoCambio(TipoCambio.Venta)
            setValor(result)
          } else {
            setTipoCambio(TipoCambio.Compra)
          }
          setValor(result)
        }} />

        <Head titulo="Venta" left={true} cantidad={data.venta} />
      </header>
      <main style={{padding: '.5em 1em'}}>


        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Row title="Lo que envías" imgMoneda={tipoCambio==='compra' ? "PEN_Sol" : "USD_DOLAR"}
            cantidad={Math.round((valor + Number.EPSILON) * 100) / 100} setCantidad={v=>setValor(Math.round((v + Number.EPSILON) * 100) / 100)}
            cuenta={cuentaSalida} setCuenta={setCuentaSalida} />
          
          <hr style={{ margin: '.25em'}}/>

          <Row title="Lo que recibes" imgMoneda={tipoCambio==='venta' ? "PEN_Sol" : "USD_DOLAR"}
            cantidad={Math.round((result + Number.EPSILON) * 100) / 100} setCantidad={()=>{}}
            cuenta={cuentaSalida} setCuenta={setCuentaSalida} />
        </div>



        <div style={{margin: '.25em', display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" style={{background: '#FDB338'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <small>
              Tipo de cambio usado:
            </small>
            <strong style={{fontSize: '2.25em'}}>
              { data[tipoCambio] }
            </strong>
            </div>
          </Button>
        </div>



      </main>
    </div>
  )
}

export default Calculadora