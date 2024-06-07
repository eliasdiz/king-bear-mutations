import React, { useRef, useState } from 'react'
import './primerasnr.css'
import { Button, Typography } from '@material-tailwind/react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast'
import ArticulosPrimera from '../ArticulosPrimera/ArticulosPrimera'

export default function PrimeraSnr() {

    const optionsAñoRadicado = ['2023','2024'].map(item => ({value: item, label: item}))
    const [ añoRadicado, setAñoRadicado ] = useState('')
    const [ radicado, setRadicado ] = useState('')
    const [ npn, setNpn ] = useState('')
    const optionsFuenteAdmin = ['documento publico','escritura publica','sentencia judicial','acto administratico','sin documento','documento privado'].sort().map(item => ({value: item, label: item}))
    const [ fuenteAdmin, setFuenteAdmin ] = useState('')
    const [ numFuenteAdmin, setNumFuenteAdmin ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ emisor, setEmisor ] = useState('')
    const [ fmi, setFmi ] = useState('')
    const textoOk = useRef()

    // console.log(textoOk.current.innerText)

    const handleLimpiar = () => {
        setRadicado('')
        setAñoRadicado('')
        setNpn('')
        setFuenteAdmin('')
        setNumFuenteAdmin('')
        setFecha('')
        setEmisor('')
        setFmi('')
    }

    const handleCopiar = () => {
        let texto = textoOk?.current?.innerText
        let data = {
            añoRadicado: añoRadicado,
            radicado: radicado,
            npn: npn,
            fuenteAdmin: fuenteAdmin,
            numFuenteAdmin: numFuenteAdmin,
            fecha: fecha,
            emisor: emisor,
            fmi: fmi
        } 

        for( let item in data){
            if( data[item] === ''){
                return toast.error(`debes ingresar ${item}`, {duration: 1000})
            }
            }
        navigator.clipboard.writeText(texto.trim())
        toast.success('texto copiado')
    }

    return (
        <div className='primeraSnr'>

            <div className='w-[40%] flex justify-center items-center border border-gray-300'>
                <div className='opciones'>                
                    <div className='flex justify-center items-center gap-6'>
                        <Select 
                            isSearchable={false}
                            options={optionsAñoRadicado}
                            className='w-[9rem] uppercase'
                            placeholder={añoRadicado !== '' ? añoRadicado : 'año'}
                            onChange={(e) => setAñoRadicado(e.value)}
                            value={añoRadicado}
                        />
                        <input 
                            value={radicado ? radicado : ''}
                            placeholder='# radicado'
                            type='number'
                            className='h-[35px] w-[7rem] capitalize border border-gray-500 rounded-md p-2'
                            onChange={(e) => setRadicado(e.target.value)}
                        />  
                    </div>

                    <input 
                        value={npn ? npn : ''}
                        placeholder='NPN'
                        className='h-[35px] w-[80%]  border border-gray-500 rounded-md p-2'
                        onChange={(e) => setNpn(e.target.value)}
                        />
                    
                    <div className='w-full flex gap-5 items-center'>
                        <Select 
                            isSearchable={false}
                            className='capitalize'
                            placeholder={fuenteAdmin !== '' ? fuenteAdmin : 'fuente administrativa'}
                            options={optionsFuenteAdmin}
                            onChange={(e) => setFuenteAdmin(e.value)}
                            value={fuenteAdmin}
                        />
                        <input 
                            value={numFuenteAdmin ? numFuenteAdmin : ''}
                            className='h-[35px] w-[25%] uppercase  border border-gray-500 rounded-md p-2'
                            placeholder='N°'
                            onChange={(e) => setNumFuenteAdmin(e.target.value)}
                        />
                    </div>

                    <input 
                        value={fecha ? fecha : ''}
                        className='w-[39%] h-[35px] uppercase  border border-gray-500 rounded-md p-2'
                        label='fecha'
                        type='date'
                        onChange={(e) => setFecha(e.target.value)}
                    />

                    <input 
                        value={emisor ? emisor : ''}
                        className='h-[35px] w-[80%] capitalize border border-gray-500 rounded-md p-2'
                        placeholder='ente emisor'
                        onChange={(e) => setEmisor(e.target.value.toLocaleLowerCase())}
                    />

                    <input 
                        value={fmi ? fmi : ''}
                        className='h-[35px] w-[40%] capitalize border border-gray-500 rounded-md p-2'
                        placeholder='FMI'
                        onChange={(e) => setFmi(e.target.value)}
                    />

                    <div className='flex items-center gap-5'>
                        <Button
                            size='sm'
                            color='orange'
                            onClick={handleLimpiar}
                        >
                            limpiar 
                        </Button>

                        <Button
                            size='sm'
                            color='green'
                            variant='gradient'
                            onClick={handleCopiar}
                        >
                            copiar
                        </Button>

                        <ArticulosPrimera />
                    </div>

                    
                </div>
            </div>
            <div className='w-[60%] flex justify-center border p-2'>
                    <Typography 
                        className='text-justify font-normal p-2'
                        ref={textoOk}
                    >
                        <span>
                            Que teniendo en cuenta la interrelación catastro-registro y la colaboración armónica que entre estas existe, 
                            la superintendencia de notariado y registro del circuito de Montería, suministro información para realizar el debido estudio jurídico,
                            con el fin de inscribir en la base catastral del municipio de Montería, Córdoba las respectivas mutaciones. La oficina de catastro 
                            radico con el número <span className='text-red-500'>{añoRadicado} - {radicado}</span>, el predio <span className='text-red-500'>{npn}</span>, soportada en los siguientes documentos 
                            justificativos: <span className='text-red-500 capitalize'>{fuenteAdmin} No.{numFuenteAdmin}</span>  del <span className='text-red-500'>{fecha}</span> de (la) <span className='text-red-500 capitalize'>{emisor}</span>, 
                            debidamente registrada en el folio de matrícula inmobiliaria <span className='text-red-500'>140 - {fmi}</span>.
                        </span>
                        <br/><br/>
                        <span>
                            Que, en consecuencia, procede una mutación de primera y su correspondiente inscripción en el catastro, conforme lo indican en los 
                            artículos 4.5.1, y subsiguientes de la Resolución 1040 de 2023, “por la cual se expide la resolución única de la gestión catastral 
                            multipropósito”, el artículo 4.6.1 y subsiguientes de la resolución 1040 preceptuado en la resolución vigente sobre los requisitos 
                            para trámites y otros procedimientos administrativos.
                        </span>
                        <br/><br/>
                        <span>
                            Que, revisados los antecedentes catastrales del municipio de Montería, 
                            verificada la documentación aportada por el(la) solicitante, procede la mutación de primera y su correspondiente 
                            inscripción en el catastro.
                        </span>
                    </Typography>
            </div>
            <Toaster />
        </div>
    )
}
