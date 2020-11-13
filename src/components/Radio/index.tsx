import React from 'react'

interface CheckboxProps {
    label: string,
    onChange: Function,
    value: boolean
}

const Checkbox = ({ label, onChange, value }: CheckboxProps) => {
    return (
        <label style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '0 .5em',
            margin: '.5em 0',
            borderRadius: '.5em',
            border: '2px solid rgb(84, 84, 84)',
            cursor: 'pointer'
        }}>
            <span >{ label }</span>
            <input type="checkbox" onClick={()=>onChange(!value)} style={{marginLeft: '.5em'}}/>
        </label>
    )
}


export default Checkbox