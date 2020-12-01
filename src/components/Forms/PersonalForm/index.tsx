import React, { ReactElement, useEffect, useState } from 'react'

import Input from '../../Input/index'
import Button from '../../Button'
import Terms from '../../Terms'

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


interface PersonalFormProps {
    addSubmit: Function
    title: ReactElement | string
    terms: boolean
    children: ReactElement | ReactElement[] | string | null
    setData?: (data:any) => void
}
const Personales = ({ addSubmit, title, terms, children, setData=()=>{} }: PersonalFormProps) => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [dni, setDni] = useState('')
    const [nacionalidad, setNacionalidad] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [isPep, setIsPep] = useState(false)
    const [cargosPep, setCargosPep] = useState('')
    const [empresasPep, setEmpresasPep] = useState('')


    useEffect(() => {
        setData({ 
            nombres, apellidos, dni, nacionalidad, ocupacion, isPep, cargosPep, empresasPep
        })
        // eslint-disable-next-line
    }, [
        nombres, apellidos, dni, nacionalidad, ocupacion, isPep, cargosPep, empresasPep
    ])

    return (
        <form className={classes.form} autoComplete="on">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{textAlign: 'center', marginLeft: '8px'}}> { title } </h1>
            </div>
            <fieldset className={classes.fieldset}>
                <Input label="Nombres" value={nombres} setValue={setNombres} />
                <Input label="Apellidos" value={apellidos} setValue={setApellidos} />

                <Input label="NI" value={dni} setValue={setDni} />

                <Input label="Nacionalidad" value={nacionalidad} setValue={setNacionalidad} />
                <Input label="Ocupación" value={ocupacion} setValue={setOcupacion} />

                <div className="field-container" style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <div className="fied-label">(PEP) Persona Expuesta Políticamente</div>
                    <div>
                        <Option onClick={()=>setIsPep(true)} selected={isPep}>Sí</Option>
                        <Option onClick={()=>setIsPep(false)} selected={!isPep}>No</Option>
                    </div>
                </div>

                <Input label="Cargo" value={cargosPep} setValue={setCargosPep} disabled={!isPep} />
                <Input label="Empresas vinculadas" value={empresasPep} setValue={setEmpresasPep} disabled={!isPep} />

                { children }

            </fieldset>

            { terms ? <Terms /> : null }

            <Button style={{margin: 'auto', width: '300px'}}
                onClick={(e)=>{
                    e.preventDefault()
                    addSubmit()
                }}> Siguiente </Button>

        </form>
    )
}

Personales.defaultProps = {
    addSubmit: ()=>{},
    title: '1) Registra tus Datos Personales',
    terms: false,
    children: null
}

export default Personales