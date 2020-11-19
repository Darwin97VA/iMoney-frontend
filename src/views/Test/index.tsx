import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Select, { OptionInterface } from '../../components/Select/index'

const options = [
    { 
        name: 'Perú'
    },
    {
        name: 'Brasil'
    },
    {
        name: 'México',
    },
    {
        name: 'Rusia',
    },
]

const Test = () => {
    const [value, setValue_] = useState('')
    const [option, setOption] = useState<OptionInterface>({ name: 'Ninguno' })
    const _setValue = (newOption: OptionInterface) => {
        console.log(newOption)
        setOption(newOption)
    }
    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <Input label='Input' value={value} setValue={setValue_} icon={faAngleUp} />
            <div style={{height: '20px', width: '20px'}}></div>
            <Select options={options} setValue={_setValue} label='Países' value={option} />
        </div>
    )
}

export default Test 