import React, { useState } from 'react'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

import classes from './style.module.css'


const Option = ({selected, children, onClick, props} : any) => 
<button style={{
    padding: '.15em .25em', 
    margin: '.5em .5em 0 0',
    background: selected ? '#BBBBBB' : 'white',
    border: '#BBBBBB',
}} {...props} onClick={e=>{
    e.preventDefault()
    onClick(e)
}}>{children}</button>

const _handlerChange = (callback: Function) => 
    (e: React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)

const Personales = ({ addSubmit }: { addSubmit: Function }) => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nacionalidad, setNacionalidad] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [isPep, setIsPep] = useState(false)
    const [cargo, setCargo] = useState('')
    const [empresa, setEmpresa] = useState('')

    return (
        <form className={classes.form}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{textAlign: 'center', marginLeft: '8px'}}>1) Registra tus Datos Personales</h1>
            </div>
            <fieldset className={classes.fieldset}>
                <Input label="Nombres" value={nombres} onChange={_handlerChange(setNombres)} />
                <Input label="Apellidos" value={apellidos} onChange={_handlerChange(setApellidos)} />

                <Input label="Nacionalidad" value={nacionalidad} onChange={_handlerChange(setNacionalidad)} />
                <Input label="Ocupación" value={ocupacion} onChange={_handlerChange(setOcupacion)} />

                <div style={{
                    border: '2px solid rgb(84, 84, 84)',
                    borderRadius: '.5em',
                    padding: '.5em', 
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <div>(PEP) Persona Expuesta Políticamente</div>
                    <div>
                        <Option onClick={()=>setIsPep(true)} selected={isPep}>Sí</Option>
                        <Option onClick={()=>setIsPep(false)} selected={!isPep}>No</Option>
                    </div>
                </div>

                <Input label="Cargo" value={cargo} onChange={_handlerChange(setCargo)} disabled={!isPep} />
                <Input label="Empresas vinculadas" value={empresa} onChange={_handlerChange(setEmpresa)} disabled={!isPep} />
            </fieldset>

            <Button style={{margin: 'auto', width: '300px'}}
                onClick={(e)=>{
                    e.preventDefault()
                    addSubmit()
                }}> Siguiente </Button>

        </form>
    )
}

export default Personales