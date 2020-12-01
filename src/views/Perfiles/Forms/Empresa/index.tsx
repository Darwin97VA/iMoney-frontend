import React, { useEffect, useState } from 'react'
import RegistroEmpresa from './RegistroEmpresa'
import PersonalForm from '../../../../components/Forms/PersonalForm'
import ConfirmedUser from '../../../../components/Forms/ConfirmedUser'
import { ButtonFile } from '../../../../components/Button'

const Representante = (props: any) => <PersonalForm title="2) Información del Representante Legal" {...props}>
    <ButtonFile>Adjuntar DNI o Carnet de Extranjería</ButtonFile>
    <ButtonFile>Adjuntar vigencia de poderes</ButtonFile>
</PersonalForm>

const Autorizada = (props: any) => <PersonalForm title="3) Persona autorizada a realizar operaciones" {...props}>
    <ButtonFile>Adjuntar DNI o Carnet de Extranjería</ButtonFile>
</PersonalForm>

const FINAL = 4
const Empresa = ({ addSubmit }: { addSubmit: Function }) => {
    const [step, setStep] = useState(1)
    useEffect(() => {
        if(step === FINAL) {
            addSubmit()
        }
        // eslint-disable-next-line
    }, [step])
    switch(step) {
        case 2:
            return <Representante addSubmit={()=>setStep(3)} />
        case 3:
            return <Autorizada addSubmit={()=>setStep(4)} />
        case FINAL:
            return <ConfirmedUser />
        case 1:
        default:
            return <RegistroEmpresa addSubmit={()=>setStep(2)}/>
    }
}

export default Empresa