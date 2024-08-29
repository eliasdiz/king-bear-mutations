import React, { useState } from 'react'
import Select from 'react-select'
import ComplePropietario from '../ComplePropietario/ComplePropietario'
import ComplementacionSnr from '../ComplementacionSnr/ComplementacionSnr'



export default function Complementacion() {
    const solicitanteOptions = [ 'propietario','snr'].sort().map(item => ({value: item, label: item}))
    const [ solicintante, setSolicitante ] = useState('') 

    const handleSolicitante = (solicitante) => {
        if(solicitante === 'propietario') return  <ComplePropietario />
        if(solicitante === 'snr') return <ComplementacionSnr /> 
        // if(solicitante === 'repre. legal') return <RectRepreLegal />
        // if(solicitante === 'oficio') return <RectOficio />
        if(solicitante === 'snr') return 
        if(solicitante === 'con poder') return 
    }

    return (
        <div className='h-full'>

            <div className='w-full flex justify-center p-1'>
                <Select 
                    placeholder='solicintante'
                    className='w-[15%] uppercase'
                    options={solicitanteOptions}
                    isSearchable={false}
                    onChange={(e) => setSolicitante(e ? e.value : '')}
                />
            </div>
            
            {
                handleSolicitante(solicintante)
            }

        </div>
    )
}
