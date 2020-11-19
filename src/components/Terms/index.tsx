import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.css'

const Terms = () => {
    return (
        <div className={classes.terms}>
            Registrándote aceptas nuestos <Link to='/terms'>
                términos y condiciones, política de privacidad y uso de datos
            </Link> 
        </div>
    )
}

export default Terms