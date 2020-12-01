import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <nav style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridGap: '1em'
            }}>
                <Button onClick={() => history.push('/dashboard/inversiones')}>
                    Inversiones
                </Button>
                <Button onClick={() => history.push('/dashboard/mesa-de-dinero')}>
                    Cambios
                </Button>
                <Button onClick={() => history.push('/dashboard/creditos')}>
                    Créditos
                </Button>
            </nav>
        </header>
    )
}

export default Header