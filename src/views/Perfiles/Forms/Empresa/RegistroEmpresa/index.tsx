import React, { useEffect, useState } from 'react'

import Input from '../../../../../components/Input/index'
import Button, { ButtonFile } from '../../../../../components/Button'

import classes from './style.module.css'
import { faAddressCard, faBuilding, faCity, faIndustry, faMap, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSafari } from '@fortawesome/free-brands-svg-icons'

interface RegisterProps {
    addSubmit: () => void
    setData?: (data: any) => void
}

const Register = ({ addSubmit, setData=()=>{} }: RegisterProps) => {
    const [ruc, setRuc] = useState('')
    const [empresa, setEmpresa] = useState('')

    const [actividad, setActividad] = useState('')
    const [telefono, setTelefono] = useState('')

    const [domicilio, setDomicilio] = useState('')
    const [distrito, setDistrito] = useState('')

    const [provincia, setProvincia] = useState('')
    const [departamento, setDepartamento] = useState('')

    const [grupo, setGrupo] = useState('')
    const [empresas, setEmpresas] = useState('')

    useEffect(() => {
        setData({
            ruc, empresa, actividad, telefono, domicilio, distrito, provincia, departamento, grupo, empresas
        })
        // eslint-disable-next-line
    }, [
        ruc, empresa, actividad, telefono, domicilio, distrito, provincia, departamento, grupo, empresas
    ])

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setData({
            ruc, empresa, actividad, telefono, domicilio, distrito, provincia, departamento, grupo, empresas
        })
        addSubmit()
    }
    return (
        <div className={classes.container}>
            
            <form action="" className={classes.form} onSubmit={_handleSubmit}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="/img/simbolo-empresa.png" width="50px" alt="Empresa"/>
                    <h1 style={{textAlign: 'center', marginLeft: '8px'}}>Empresa</h1>
                </div>
                <fieldset className={classes.fieldset}>
                    <Input label="Número de RUC" type="number" value={ruc} setValue={setRuc} icon={faAddressCard} />
                    <Input label="Razón Social" value={empresa} setValue={setEmpresa} icon={faBuilding} />

                    <Input label="Actividad Económica" value={actividad} setValue={setActividad} icon={faSafari} />
                    <Input label="Teléfono Fijo" value={telefono} setValue={setTelefono} icon={faPhone} />

                    <Input label="Dirección" value={domicilio} setValue={setDomicilio} icon={faMapMarkerAlt} />
                    <Input label="Distrito" value={distrito} setValue={setDistrito} icon={faMapMarkedAlt} />

                    <Input label="Provincia" value={provincia} setValue={setProvincia} icon={faMapMarked} />
                    <Input label="Departamento" value={departamento} setValue={setDepartamento} icon={faMap} />

                    <Input label="Grupo Económico" value={grupo} setValue={setGrupo} icon={faIndustry} />
                    <Input label="Empresas vinculadas" placeholder="Separa por comas 'A, B'" value={empresas} setValue={setEmpresas} icon={faCity} />
                    <ButtonFile style={{width: '80%', margin: 'auto'}}> Adjuntar Ficha RUC </ButtonFile>
                </fieldset>
                <Button type="submit" style={{margin: 'auto', width: '300px'}}> Siguiente </Button>

            </form>
        </div>
    )
}

export default Register