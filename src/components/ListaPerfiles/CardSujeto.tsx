import React, { ReactNode } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Asignamiento, NivelAsignacion } from '../../interfaces/Utils';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import { EmpresaState } from '../../store/Empresas/types';
import { PersonaState } from '../../store/Personas/types';
import { editAsignacion } from '../../store/Sesion/actions';
import { ListItem } from '@material-ui/core';

const Grilla = ({ tipo, nombres }: { tipo: ReactNode, nombres: ReactNode }) => {
  const Icon = tipo === 'Empresa' ? LocationCityIcon : PersonIcon
  return (
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridTemplateRows: '1fr 1fr'}}>
      <div className="left" style={{gridColumn:'1 / 2', gridRow: '1 / 3'}}> <Icon style={{fontSize: '64px'}} /> </div>
      <div className="top"> { tipo } </div>
      <div className="bottom"> <h3> { nombres } </h3> </div>
    </div>
  )
}

export default function SimpleCard({ asignamiento }: { asignamiento: Asignamiento }) {
  const dispatch = useDispatch()
  const { _id, tipo } = asignamiento
  const sesion = useSelector((state: RootState)=>state.Sesion)
  const [sujeto, nombres, propietario]: [(EmpresaState | PersonaState | null), (string | null), string] = useSelector((data: RootState) => {
    let propietario = ''
    if(tipo === 'Empresa') {
      const empresa = data.Empresas.find(em=>em._id === _id)
      const idPropietario = empresa?.usuarios.propietario[0]
      if(idPropietario) {
        propietario = data.Personas.find(p=>p._id === idPropietario)?.identidad.nombres || ''
      }
      if(empresa?.razonSocial && typeof empresa !== 'string') {
        return [empresa, empresa?.razonSocial, propietario]
      }
    } else {
      const persona = data.Personas.find(em=>em._id === _id)
      const idPropietario = persona?.usuarios?.propietario[0]
      console.log('PERSONA', persona, 'IdPropietarioPersona', idPropietario)
      if(idPropietario) {
        propietario = data.Personas.find(p=>p._id === idPropietario)?.identidad.nombres || ''
      }
      if(persona) {
        if(persona?.identidad && typeof persona !== 'string') {
          return [persona, persona?.identidad.nombres, propietario]
        }

      }
    }
    return [null, null, propietario]
  })

  const cargo = useSelector((data: RootState) => {
    if(sujeto) {
      const esPropietario = sujeto.usuarios?.propietario.find(_id=>data.Sesion.persona)
      const esAdministrador = sujeto.usuarios?.administrador.find(_id=>data.Sesion.persona)
      const esEstandar = sujeto.usuarios?.estandar.find(_id=>data.Sesion.persona)
      const esVisitante = sujeto.usuarios?.visitante.find(_id=>data.Sesion.persona)
      if(esPropietario) {
        return NivelAsignacion.propietario
      }
      if(esAdministrador) {
        return NivelAsignacion.administrador
      }
      if(esEstandar) {
        return NivelAsignacion.estandar
      }
      if(esVisitante) {
        return NivelAsignacion.visitante
      }
    }
    return null
  })

  const estaSeleccionado = sesion.asignado?._id===_id

  return sujeto && cargo ? (
    <Card>
      <CardContent>
        <Grilla nombres={nombres} tipo={tipo} />
        <p><strong>Propietario</strong>: {propietario} </p>
        <p><strong>Su tipo de usuario es</strong>: <br/> <span>{cargo}</span> </p>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center'}}>

        <ListItem style={{display: 'flex', justifyContent: 'center'}} button onClick={()=>{
          dispatch(editAsignacion(asignamiento))
        }} selected={estaSeleccionado}>
          { estaSeleccionado ? <strong>Actual</strong> : 'Seleccionar' }
        </ListItem>
        
      </CardActions>
    </Card>
  ) : null
}
