import React, { useState } from 'react'
import FormLogin from './FormLogin'
import Cuenta from './Cuenta'

import classes from './style.module.css'

const Login = () => {
    const [isLoged, setLogin] = useState<Boolean>(false)
    return (
        <div className={classes.containerAll}>
            { isLoged ? <Cuenta /> : <FormLogin addSubmit={()=>setLogin(true)} /> }
        </div>
    )
}

export default Login