import React, { useState } from 'react'
import Select from 'react-select'
import RectPropietario from '../RectPropietario/RectPropietario'
import RectAutorizado from '../RectAutorizado/RectAutorizado'
import RectRepreLegal from '../RectRepreLegal/RectRepreLegal'
import RectOficio from '../RectOficio/RectOficio'




export default function Rectificacion() {

    const solicitanteOptions = [ 'autorizado','propietario','repre. legal','oficio'].sort().map(item => ({value: item, label: item}))
    const [ solicintante, setSolicitante ] = useState('') 

    const handleSolicitante = (solicitante) => {
        if(solicitante === 'propietario') return <RectPropietario />
        if(solicitante === 'autorizado') return <RectAutorizado /> 
        if(solicitante === 'repre. legal') return <RectRepreLegal />
        if(solicitante === 'oficio') return <RectOficio />
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
