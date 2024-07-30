import React, { useState } from 'react'
import './inicio.css'
import { Typography } from '@material-tailwind/react'
import Select from 'react-select'
import Primera from '../Primera/Primera'
import Rectificacion from '../Rectificacion/Rectificacion'
// import GenerarVur from '../GenerarVur/GenerarVur'
import Complementacion from '../Complementacion/Complementacion'

export default function Inicio() {

    const tiposMutacionOptions = ['primera','rect. gnral de datos', 'complementacion'].sort().map(item => ({value: item, label: item}))
    const [ tipoMutacion, setTipoMutacion ] = useState('')

    const pickMutacion = (tipo) => {
        if(tipo === 'primera') return <Primera />
        if(tipo === 'rect. gnral de datos') return <Rectificacion />
        if(tipo === 'complementacion') return <Complementacion />
    }


    return (
    <div className='inicio'>
        
        <div className='flex-col'>
            <Typography 
                variant='h4'
                className='capitalize text-center '
            >
                hagamos una mutacion
            </Typography>

            <div className='flex w-full gap-5 p-2'>
                <div className='w-[59%] flex justify-end'>
                    <Select 
                        className='w-[15rem] capitalize'
                        placeholder='tipo de mutacion'
                        options={tiposMutacionOptions}
                        isSearchable={false}
                        isClearable
                        onChange={(e) => setTipoMutacion(e ? e.value : '')}
                    />
                </div>
                {/* <GenerarVur /> */}
            </div>
        </div>
        
        {
            pickMutacion(tipoMutacion)
        }
        

    </div>
    )
}
