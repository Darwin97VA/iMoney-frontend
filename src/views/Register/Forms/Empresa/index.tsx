import React from 'react'

interface RegisterProps {
    addSubmit: () => void
}

const Empresa = ({ addSubmit }: RegisterProps) => {
    console.log(addSubmit)
    return (
        <h1>Empresa</h1>
    )
}

export default Empresa