import React, { useRef, useState } from 'react'
import './primeraautorizado.css'
import { Button, Typography } from '@material-tailwind/react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast'
import numeral from 'numeral'
import ArticulosPrimera from '../ArticulosPrimera/ArticulosPrimera'
import DocJustifica from '../DocJustifica/DocJustifica'

export default function PrimeraAutorizado() {

    const [ nombreAut, setNombreAut ] = useState('')
    const [ tipoDocAut, setTipoDocAut ] = useState('')
    const [ numDocAut, setNumDocAut ] = useState('')
	const [ nombre, setNombre ] = useState('')
    const optionsTipoDoc = ['cc', 'ti', 'ce'].map( item => ({value: item, label: item}))
    const [ tipoDoc, setTipoDoc ] = useState('')
    const [ numDoc, setNumDoc ] = useState('')
    const [ npn, setNpn ] = useState('')
    const optionsFuenteAdmin = ['documento publico','escritura publica','sentencia judicial','acto administrativo','sin documento','documento privado'].sort().map(item => ({value: item, label: item}))
    const [ fuenteAdmin, setFuenteAdmin ] = useState('')
    const [ numFuenteAdmin, setNumFuenteAdmin ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ emisor, setEmisor ] = useState('')
    const [ fmi, setFmi ] = useState('')
    const textoOk = useRef()
    const [ docSelecc, setDocSelecc ] = useState([])


    // console.log(textoOk.current.innerText)

    const handleLimpiar = () => {
        setNombreAut('')
        setTipoDocAut('')
        setNumDocAut('')
        setNombre('')
        setTipoDoc('')
        setNumDoc('')
        setNpn('')
        setFuenteAdmin('')
        setNumFuenteAdmin('')
        setFecha('')
        setEmisor('')
        setFmi('')
        setDocSelecc([])
    }

    const handleCopiar = () => {
        let texto = textoOk?.current?.innerText
        let data = {
            nombreAut: nombreAut,
            tipoDocAut: tipoDocAut,
            numDocAut: numDocAut,
            nombre: nombre,
            tipoDoc: tipoDoc,
            numDoc: numDoc,
            npn: npn,
            fuenteAdmin: fuenteAdmin,
            numFuenteAdmin: numFuenteAdmin,
            fecha: fecha,
            emisor: emisor,
            fmi: fmi,
            docSelecc: docSelecc
        } 

        for( let item in data){
            if( data[item] === '' || data[item].length === 0){
                return toast.error(`debes ingresar ${item}`, {duration: 1000, style:{textTransform: 'capitalize'}})
            }
            }
        navigator.clipboard.writeText(texto.trim())
        toast.success('texto copiado',{style:{textTransform: 'capitalize'}})
    }    

    const formatNumber = (number) => {
        return numeral(number).format('0,0').replace(/,/g, '.');
    };

return (
    <div className='primeraAutorizado'>

        <div className='w-[40%] flex justify-center items-center border border-gray-300'>

                <div className='opciones'>               
                    <input 
                        value={nombreAut ? nombreAut : ''}
                        placeholder='nombre autorizado'
                        className='h-[35px] w-[80%] capitalize  border border-gray-500 rounded-md p-2'
                        onChange={(e) => setNombreAut(e.target.value)}
                    />

                    <div className='flex justify-center items-center gap-6'>
                        <Select
                            isSearchable={false}
                            className='w-[50%] uppercase'
                            placeholder={tipoDocAut !== '' ? tipoDocAut : 'doc. aut'}
                            options={optionsTipoDoc}
                            onChange={(e) => setTipoDocAut(e.value)}
                            value={tipoDocAut}
                        />

                        <input 
                            value={numDocAut ? numDocAut : ''}
                            placeholder='# doc. autorizado'
                            type='number'
                            className='h-[35px] w-[50%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            onChange={(e) => setNumDocAut(e.target.value)}
                        />  
                    </div>

                    <input 
                        value={nombre ?nombre : ''}
                        placeholder='nombre propietario'
                        className='h-[35px] w-[80%] capitalize  border border-gray-500 rounded-md p-2'
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <div className='flex justify-center items-center gap-6'>
                        <Select
                            isSearchable={false}
                            className='w-[50%] uppercase'
                            placeholder={tipoDoc !== '' ? tipoDoc : 'doc. propietario'}
                            options={optionsTipoDoc}
                            onChange={(e) => setTipoDoc(e.value)}
                            value={tipoDoc}
                        />

                        <input 
                            value={numDoc ? numDoc : ''}
                            placeholder='# doc. propietario'
                            type='number'
                            className='h-[35px] w-[50%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            onChange={(e) => setNumDoc(e.target.value)}
                        />  
                    </div>

                    <input 
                        value={npn ? npn : ''}
                        placeholder='NPN'
                        className='h-[35px] w-[80%]  border border-gray-500 rounded-md p-2 text-center'
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
                            menuPlacement='auto'
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
                        className='h-[35px] w-[80%] capitalize border border-gray-500 rounded-md p-2'
                        placeholder='ente emisor'
                        onChange={(e) => setEmisor(e.target.value.toLocaleLowerCase())}
                    />

                    <div className='w-full flex gap-3'>
                        <input 
                            value={fmi ? fmi : ''}
                            className='h-[35px] w-[30%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            placeholder='FMI'
                            onChange={(e) => setFmi(e.target.value)}
                        />

                        <DocJustifica docSelecc={docSelecc} setDocSelecc={setDocSelecc} />
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

                        <ArticulosPrimera />
                    </div>

                    
                </div>
            </div>
            <div className='w-[60%] flex justify-center border p-2'>
                    <Typography 
                        className='text-justify font-normal p-3'
                        ref={textoOk}
                    >
                        <span>
                            Que el(la) señor(a) <span className='text-red-500 capitalize'>{nombreAut} </span>  
                            identificado(a) con <span className='text-red-500 uppercase'>{tipoDocAut}</span>. 
                            NO. <span className='text-red-500'>{formatNumber(numDocAut)}</span>,
                            en su condición de contacto y/o autorizado del (la) señor(a)
                            <span className='text-red-500 capitalize'> {nombre} </span> identificado(a) con
                            <span className='text-red-500 uppercase'> {tipoDoc}</span>. 
                            <span className='text-red-500'> {formatNumber(numDoc)} </span>
                            propietario del inmueble identificado con número predial
                            <span className='text-red-500'>{npn}</span>, inscrito en la base de datos catastral 
                            del municipio de Montería, presentó ante la Oficina de atención al público una solicitud 
                            de trámite catastral, consistente en Cambio de propietario. soportada en los siguientes 
                            documentos aportados: <span className='text-red-500 capitalize'>{fuenteAdmin} No. {numFuenteAdmin} </span>  
                            del <span className='text-red-500'>{fecha}</span> de (la) 
                            <span className='text-red-500 capitalize'> {emisor}</span>, 
                            debidamente registrada en el folio de matrícula inmobiliaria 
                            <span className='text-red-500'> 140 - {fmi}</span>,
                            <span className='text-red-500'> {docSelecc.sort().join(', ')}</span>.
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
