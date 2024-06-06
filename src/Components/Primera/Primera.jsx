import React, { useState } from 'react'
import './primera.css'
import Select from 'react-select'
import PrimeraSnr from '../PrimeraSnr/PrimeraSnr'
import PrimeraPropietario from '../PrimeraPropietario/PrimeraPropietario'


export default function Primera() {

    const solicitanteOptions = ['autorizado','con poder','propietario','snr'].map(item => ({value: item, label: item}))
    const [ solicintante, setSolicitante ] = useState('') 

    const handleSolicitante = (solicitante) => {
        if(solicitante === 'snr') return <PrimeraSnr />
        if(solicitante === 'propietario') return <PrimeraPropietario />
    }
    
    return (
        <div className='mPrimera'>

            <div className='w-full flex justify-center'>
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