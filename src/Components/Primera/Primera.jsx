import React, { useState } from 'react'
import './primera.css'
import Select from 'react-select'
import PrimeraSnr from '../PrimeraSnr/PrimeraSnr'
import PrimeraPropietario from '../PrimeraPropietario/PrimeraPropietario'
import PrimeraAutorizado from '../PrimeraAutorizado/PrimeraAutorizado'
import PrimeraPoder from '../PrimeraPoder/PrimeraPoder'
import PrimeraRepreLegal from '../PrimeraRepreLegal/PrimeraRepreLegal'


export default function Primera() {

    const solicitanteOptions = ['autorizado','con poder','propietario','snr','repre. legal'].sort().map(item => ({value: item, label: item}))
    const [ solicintante, setSolicitante ] = useState('') 

    const handleSolicitante = (solicitante) => {
        if(solicitante === 'snr') return <PrimeraSnr />
        if(solicitante === 'propietario') return <PrimeraPropietario />
        if(solicitante === 'autorizado') return <PrimeraAutorizado />
        if(solicitante === 'con poder') return <PrimeraPoder />
        if(solicitante === 'repre. legal') return <PrimeraRepreLegal />
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
