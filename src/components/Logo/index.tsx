import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ color='black', ...props }: any) => 
<Link to="/">
    <img src={`/img/logotipo-${color}.png`} alt="iMoney" width="300" {...props}/>
</Link>

const Isotipo = ({ color='blue', ...props}: any) => 
<Link to="/">
    <img src={`/img/isotipo-${color}.png`} alt="iMoney" {...props}/>
</Link>


export {
    Isotipo
}
export default Logo