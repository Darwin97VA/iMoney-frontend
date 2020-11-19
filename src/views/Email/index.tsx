import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import GreenLink from '../../components/GreenLink'
import classes from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const BLUECOLOR = '#222A4F'

const Email = () => {
    return (
        <div className={classes.container}>
            <main style={{width: '400px'}}>
                <table>
                    <tr>
                        <td colSpan={3} style={{
                            textAlign: 'center',
                            background: BLUECOLOR,
                            padding: '1em'
                        }}>
                            {/* <Isotipo color="white" width="100" /> */}
                            <Logo color="white" width="350"/>
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
                            <Button style={{margin: 'auto'}}>
                                <Link to="/cuenta" style={{textDecoration: 'none', color: 'white'}}>
                                    Confirmar Email
                                </Link>
                            </Button>
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
                            <GreenLink to="/cuenta">https://imoney-frontend.herokuapp.com/cuenta</GreenLink>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}> 
                            <div style={{ display: 'flex', width:'100%', justifyContent: 'center'}}>
                                <Icon href="https://www.instagram.com/imoneyperu/" icon={faInstagram}/>
                                <Icon href="https://www.linkedin.com/company/imoney-peru-sac/" icon={faLinkedinIn}/>
                                <Icon href="https://www.facebook.com/imoney.pe/?ref=bookmarks" icon={faFacebookF}/>
                                <Icon href="https://twitter.com/imoney_peru" icon={faTwitter}/>
                                <Icon href="https://www.youtube.com/channel/UCrGvRpgVyFpEEvITbA6NBrA?view_as=subscriber" icon={faYoutube}/>
                            </div>
                        </td>
                    </tr>
                </table>
            </main>
        </div>
    )
}
const Icon = ({ icon, href }: any) => {
    return (
        <a target="_blank" rel="noreferrer" href={href} style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center',
            borderRadius: '50%', border: '2px solid '+BLUECOLOR, color: 'white', background: BLUECOLOR, cursor: 'pointer', margin: '.5em' }}>
            <FontAwesomeIcon icon={icon} size="2x" />
        </a>
    )
}

export default Email