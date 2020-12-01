import React, { useEffect, useMemo, useState } from 'react'
import RegistroEmpresa from './RegistroEmpresa'
import PersonalForm from '../../../../components/Forms/PersonalForm'
import ConfirmedUser from '../../../../components/Forms/ConfirmedUser'
import { ButtonFile } from '../../../../components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'

const { REACT_APP_URLHOST } = process.env
const API = REACT_APP_URLHOST + 'api/empresa/registro'

type PersonaForm = {
    nombres: string
    apellidos: string
    dni: string
    cargosPep: string
    empresasPep: string
    isPep: string
    nacionalidad: string
    ocupacion: string
} | null

type EmpresaForm = {
    actividad: string
    departamento: string
    distrito: string
    domicilio: string
    empresa: string
    empresas: string
    grupo: string
    provincia: string
    ruc: string
    telefono: string
} | null
const convertData = ({ empresa, representante, autorizados }: { empresa: EmpresaForm, representante: PersonaForm, autorizados: PersonaForm }) => {
    
    if(empresa?.ruc && representante?.dni && autorizados?.dni) {
        const apellidosRepresentante = representante.apellidos.split(' ')
        const apellidosAutorizados = autorizados.apellidos.split(' ')
        const data = {
            ruc: empresa.ruc,
            razonSocial: empresa.empresa,
            representanteLegal: [{
                identidad: {
                    tipoDocumentoIdentidad: "Dni",
                    documentoIdentidad: representante.dni,
                    foto: "Id de foto de representante " + representante.dni,
                    nacionalidad: representante.nacionalidad,
                    nombres: representante.nombres,
                    primerApellido: apellidosRepresentante[0],
                    segundoApellido: apellidosRepresentante[1]
                },
                docRelacion: "Módulo integrador de fotos en proceso",
                estado: {
                    estaRegistrado: true,
                    relacionVerificada: false
                },
                cargo: representante.ocupacion
            }],
            usuarios: {
                estandar: [
                    {
                        tipoDocumentoIdentidad: "Dni",
                        documentoIdentidad: autorizados.dni,
                        foto: "Id de foto de encargado " + autorizados.dni,
                        nacionalidad: autorizados.nacionalidad,
                        nombres: autorizados.nombres,
                        primerApellido: apellidosAutorizados[0],
                        segundoApellido: apellidosAutorizados[1],
                    }
                ]
            }
        }
        return data
    }
    return null
}

const Representante = (props: any) => <PersonalForm title="2) Información del Representante Legal" {...props}>
    <ButtonFile>Adjuntar DNI o Carnet de Extranjería</ButtonFile>
    <ButtonFile>Adjuntar vigencia de poderes</ButtonFile>
</PersonalForm>

const Autorizada = (props: any) => <PersonalForm title="3) Persona autorizada a realizar operaciones" {...props}>
    <ButtonFile>Adjuntar DNI o Carnet de Extranjería</ButtonFile>
</PersonalForm>

const FINAL = 4
const Empresa = ({ addSubmit }: { addSubmit: Function }) => {
    const token = useSelector((data:RootState) => data.Sesion.token)
    const [step, setStep] = useState(1)
    // eslint-disable-next-line
    const [empresa, setEmpresa] = useState<EmpresaForm>(null)
    // eslint-disable-next-line
    const [representante, setRepresentante] = useState<PersonaForm>(null)
    // eslint-disable-next-line
    const [autorizados, setAutorizados] = useState<PersonaForm>(null)
    
    const data = useMemo(() => ({ empresa, representante, autorizados }), [empresa, representante, autorizados])

    console.log(token)

    const callToApi = () => {
        const realData = convertData(data)

        console.log("realData", realData)
        
        if(realData) {

            const body = JSON.stringify(realData)
            fetch(API, {
                method: 'POST',
                body,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }).then(res=>res.json())
            .then(res=>{
                console.log(res)
                setStep(4)
            })
            .catch(console.error)
        }
    }

    useEffect(() => {
        if(step === FINAL) {
            addSubmit()
        }
        // eslint-disable-next-line
    }, [step])
    switch(step) {
        case 2:
            return <Representante setData={setRepresentante} addSubmit={()=>setStep(3)} />
        case 3:
            return <Autorizada setData={setAutorizados} addSubmit={callToApi} />
        case FINAL:
            return <ConfirmedUser />
        case 1:
        default:
            return <RegistroEmpresa setData={setEmpresa} addSubmit={()=>setStep(2)}/>
    }
}

export default Empresa