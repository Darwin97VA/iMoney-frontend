import React, { ImgHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    img?: string
}

const Logo = ({ img='/img/Logo.png', ...props }: LogoProps) => 
<Link to="/">
    <img src={img} alt="Logode iMoney" width="300" {...props}/>
</Link>

export default Logo