import React from 'react'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import GreenLink from '../../components/GreenLink'
import classes from './style.module.css'


const Email = () => {
    return (
        <div className={classes.container}>
            <main style={{width: '400px'}}>
                <table>
                    <tr>
                        <td colSpan={3} style={{
                            textAlign: 'center',
                            background: '#222A4F',
                        }}>
                            <Logo img='/img/LogoAzul.png' width="250"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '50px'}}></td>
                        <td>
                            <div style={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                margin: '8px auto 0 auto',
                                textAlign: 'center'
                            }}>Bienvenido Iván</div>
                        </td>
                        <td style={{width: '50px'}}></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <div style={{
                                margin: '8px',
                                border: '1px solid gray', 
                                borderRadius: '1em',
                                padding: '8px',
                                textAlign: 'center'
                            }}>
                                Confirma tu mail  para tu nueva experiencia en soluciones financieras
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '50px'}}></td>
                        <td style={{textAlign: 'center'}}>
                            <Button style={{margin: 'auto'}}>Confirmar Email</Button>
                        </td>
                        <td style={{width: '50px'}}></td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{textAlign: 'center'}}>
                            <div style={{marginTop: '16px', fontSize: '14px'}}>
                                Si el botón de arriba no funciona, copia y pega este link en tu navegador:
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{textAlign: 'center'}}>
                            <GreenLink to="https://imoney-frontend.herokuapp.com">https://imoney-frontend.herokuapp.com</GreenLink>
                        </td>
                    </tr>
                </table>
            </main>
        </div>
    )
}

export default Email