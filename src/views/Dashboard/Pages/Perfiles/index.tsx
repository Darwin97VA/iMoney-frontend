import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'

const Perfiles = () => {
    const perfiles = useSelector((store: RootState) => store)
    console.log(perfiles)
    return (
        <div>

        </div>
    )
}

export default Perfiles