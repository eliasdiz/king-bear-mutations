import React from 'react'
import './inicio.css'
import { Typography } from '@material-tailwind/react'
import Select from 'react-select'
import Primera from '../Primera/Primera'

export default function Inicio() {

    const tiposOptions = [{value:'primera',label:'primera'}]

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
                    className='w-[12rem] capitalize'
                    placeholder='tipo de mutacion'
                    options={tiposOptions}
                    isSearchable={false}
                />
            </div>
        </div>
        
        <Primera />

    </div>
    )
}
