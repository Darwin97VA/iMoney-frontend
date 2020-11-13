import React from 'react'

interface Value {
    name: string,
    value: any
} 

interface CheckboxProps {
    label: string,
    onChange: Function,
    values: Value[],
    result: boolean
}

const Checkbox = ({ label, onChange, values, result }: CheckboxProps) => {
    return (
        <div>
            <span>{ label }</span>
            {
                values.map(({name, value}) => {
                    return (
                        <span>
                            { name }                        
                            <input type="checkbox" onClick={()=>onChange(value)} checked={result===value} />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Checkbox