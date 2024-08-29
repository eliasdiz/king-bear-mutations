import { Button, Typography } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Select from 'react-select'
import ArticulosRect from '../ArticulosRect/ArticulosRect'
import DocComple from '../DocComple/DocComple'
import DocJustifica from '../DocJustifica/DocJustifica'

export default function ComplementacionSnr() {

    const [ radicado, setRadicado ] = useState('')
    const [ npn, setNpn ] = useState('')
    const optionsFuenteAdmin = ['documento publico','escritura publica','sentencia judicial','acto administrativo','sin documento','documento privado'].sort().map(item => ({value: item, label: item}))
    const [ fuenteAdmin, setFuenteAdmin ] = useState('')
    const [ numFuenteAdmin, setNumFuenteAdmin ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ emisor, setEmisor ] = useState('')
    const [ fmi, setFmi ] = useState('')
    const textoOk = useRef()
    const [ checkSelecc, setCheckSelecc ] = useState([])
    const [ docSelecc, setDocSelecc ] = useState([])



    const handleLimpiar = () => {
        setRadicado('')
        setNpn('')
        setFuenteAdmin('')
        setNumFuenteAdmin('')
        setFecha('')
        setEmisor('')
        setFmi('')
        setCheckSelecc([])
        setDocSelecc([])
    }

    const handleCopiar = () => {
        let texto = textoOk?.current?.innerText
        let data = {
            '# de radicado': radicado,
            'numero predial nacional': npn,
            'fuente Administrativa': fuenteAdmin,
            '# Fuente Administrativa': numFuenteAdmin,
            fecha: fecha,
            emisor: emisor,
            'documentos aportados': docSelecc,
            'folio matricula inmobiliaria': fmi,
            'complementacion': checkSelecc,
        } 

        for( let item in data){
            if( data[item] === '' || data[item].length === 0){
                return toast.error(`debes ingresar ${item}`, {duration: 1500, style:{textAlign: 'center', textTransform: 'capitalize'}})
            }
            }
        navigator.clipboard.writeText(texto.trim())
        toast.success('texto copiado')
    }


    return (
        <div className='primeraSnr'>

            <div className='w-[40%] flex justify-center items-center border border-gray-300'>
                <div className='flex flex-col gap-3 p-2'>       
                
                    <div className='w-full flex justify-center items-center gap-3'>
                        <input 
                            value={radicado ? radicado : ''}
                            placeholder='# radicado'
                            type='number'
                            className='h-[35px] w-[28%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            onChange={(e) => setRadicado(e.target.value)}
                        />  
                        <input 
                            value={npn ? npn : ''}
                            placeholder='NPN'
                            className='h-[35px] w-[72%]  border border-gray-500 rounded-md p-2 text-center'
                            onChange={(e) => setNpn(e.target.value)}
                        />
                    </div>
                    
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
                            className='h-[35px] w-[25%] uppercase  border border-gray-500 rounded-md p-2 text-center'
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
                        className='h-[35px] w-[80%] capitalize border border-gray-500 rounded-md p-2 text-center'
                        placeholder='ente emisor'
                        onChange={(e) => setEmisor(e.target.value.toLocaleLowerCase())}
                    />

                    <div className='flex w-full gap-4'>
                        <div>
                            <DocJustifica docSelecc={docSelecc} setDocSelecc={setDocSelecc} />
                        </div>

                        <input 
                            type='number'
                            value={fmi ? fmi : ''}
                            className='h-[35px] w-[25%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            placeholder='FMI'
                            onChange={(e) => setFmi(e.target.value)}
                        />

                        <div>
                            <DocComple checkSelecc={checkSelecc} setCheckSelecc={setCheckSelecc}  />
                        </div>
                    </div>

                    
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

                        <ArticulosRect />
                    </div>

                    
                </div>
            </div>
            <div 
                className='w-[65%] p-5 max-h-[72vh] overflow-y-auto border border-gray-300'
            >
                    <Typography 
                        className='text-justify font-normal p-2'
                        ref={textoOk}
                    > 
                        <span>
                            Que la Resolución 1040 de 2023 del Instituto Geográfico Agustín Codazzi (IGAC), en su artículo 4.5.4 
                            numeral 1, señala que los errores en la inscripción catastral que no corresponden con la realidad del 
                            predio.
                        </span>
                        <br/><br/>
                        <span>
                            Que teniendo en cuenta la interrelación catastro-registro y la colaboración 
                            armónica que entre estas existe, la superintendencia de notariado y registro del 
                            circuito de Montería, suministró información para realizar el debido estudio 
                            jurídico,con el fin de inscribir en la base catastral del municipio de Montería, 
                            Córdoba las respectivas mutaciones. La oficina de catastro radico con el número 
                            <span className='text-red-500'> 2024-{radicado}</span>, el predio 
                            <span className='text-red-500'> {npn}</span>, con el(los) siguiente(s) 
                            documento(s) aportado(s) por oficina de instrumentos públicos: 
                            <span className='text-red-500 capitalize'> {fuenteAdmin} No. {numFuenteAdmin} </span>
                            del <span className='text-red-500'>{fecha}</span> de(la)
                            <span className='text-red-500 capitalize'> {emisor}</span>,
                            <span className='text-red-500'> {docSelecc.sort().join(', ')}</span>
                        </span>
                        <br/><br/>
                        <span>
                            De acuerdo con el estudio de los documentos jurídicos y revisada la información vigente 
                            en el folio de matrícula inmobiliaria<span className='text-red-500'> 140-{fmi}</span>, 
                            se procede a realizar la respectiva complementación.
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
