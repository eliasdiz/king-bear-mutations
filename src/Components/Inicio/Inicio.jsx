import React, { useState } from 'react'
import './inicio.css'
import { Typography } from '@material-tailwind/react'
import Select from 'react-select'
import Primera from '../Primera/Primera'

export default function Inicio() {

    const tiposMutacionOptions = ['primera','rect. gnral de datos'].sort().map(item => ({value: item, label: item}))
    const [ tipoMutacion, setTipoMutacion ] = useState('')

    return (
    <div className='inicio'>
        
        <div className='flex-col'>
            <Typography 
                variant='h4'
                className='capitalize text-center '
            >
                hagamos una mutacion
            </Typography>

            <div className='flex justify-center w-full  p-2'>
                <Select 
                    className='w-[15rem] capitalize'
                    placeholder='tipo de mutacion'
                    options={tiposMutacionOptions}
                    isSearchable={false}
                    isClearable
                    onChange={(e) => setTipoMutacion(e ? e.value : '')}
                />
            </div>
        </div>
        
        {
            tipoMutacion === 'primera' ? <Primera /> : null
        }
        

    </div>
    )
}
