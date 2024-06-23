import numeral from 'numeral'
import './rectpropietario.css'
import { Button, Typography } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Select from 'react-select'
import ArticulosRect from '../ArticulosRect/ArticulosRect'
import DocJustifica from '../DocJustifica/DocJustifica'
import DocRectifica from '../DocRectifica/DocRectifica'

export default function RectPropietario() {

    const movitvada = useRef()
    const [ nombre, setNombre ] = useState('')
    const optionsTipoDoc = ['cc', 'ti', 'ce','nit'].sort().map( item => ({value: item, label: item}))
    const [ tipoDoc, setTipoDoc ] = useState('')
    const [ numDoc, setNumDoc ] = useState('')
    const [ npn, setNpn ] = useState('')
    const optionsFuenteAdmin = ['resolucion', 'documento publico','escritura publica','sentencia judicial','acto administrativo','sin documento','documento privado'].sort().map(item => ({value: item, label: item}))
    const [ fuenteAdmin, setFuenteAdmin ] = useState('')
    const [ numFuenteAdmin, setNumFuenteAdmin ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ emisor, setEmisor ] = useState('')
    const [ fmi, setFmi ] = useState('')
    const [ docSelecc, setDocSelecc ] = useState([])
    const [ checkSelecc, setCheckSelecc ] = useState([])




    const handleLimpiar = () => {
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
        setCheckSelecc([])
    }

    const handleCopiar = () => {
        let texto = movitvada?.current?.innerText
        let data = {
            nombre: nombre,
            tipoDoc: tipoDoc,
            numDoc: numDoc,
            npn: npn,
            fuenteAdmin: fuenteAdmin,
            numFuenteAdmin: numFuenteAdmin,
            fecha: fecha,
            emisor: emisor,
            fmi: fmi,
            docSelecc: docSelecc,
            checkSelecc: checkSelecc
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
        <div className='w-full h-[78vh] flex '>

            <div className='flex justify-center items-center border border-gray-500'>
                <div className='opciones-rectificacion-propietario max-h-[100%] overflow-y-auto'>
                    <input 
                        value={nombre ?nombre : ''}
                        placeholder='NOMBRE'
                        className='h-[35px] w-[80%] capitalize  border border-gray-500 rounded-md p-2'
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <div className='w-full  flex items-center gap-6'>
                        <Select
                            isSearchable={false}
                            className='w-[40%] uppercase'
                            options={optionsTipoDoc}
                            onChange={(e) => setTipoDoc(e.value)}
                            placeholder={tipoDoc !== '' ? tipoDoc : 'documento'}
                            value={tipoDoc}
                        />

                        <input 
                            type='number'
                            value={numDoc ?numDoc : ''}
                            placeholder='# documento'
                            className='h-[35px] w-[35%] capitalize  border border-gray-500 rounded-md p-2 text-center'
                            onChange={(e) => setNumDoc(e.target.value)}
                        />
                    </div>

                    <input 
                        value={npn ?npn : ''}
                        placeholder='NPN'
                        className='h-[35px] w-[80%] capitalize  border border-gray-500 rounded-md p-2 text-center'
                        onChange={(e) => setNpn(e.target.value)}
                    />

                    <div className='w-full flex gap-5 items-center'>
                        <Select 
                            menuPlacement='auto'
                            isSearchable={false}
                            className='w-[60%] capitalize'
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
                    
                    <div className='flex gap-3'>
                        <input 
                            value={fecha ? fecha : ''}
                            className='w-[35%] h-[35px] uppercase  border border-gray-500 rounded-md p-2'
                            label='fecha'
                            type='date'
                            onChange={(e) => setFecha(e.target.value)}
                        />
                        <input 
                            value={emisor ? emisor : ''}
                            className='h-[35px] w-[65%] capitalize border border-gray-500 rounded-md p-2'
                            placeholder='ente emisor'
                            onChange={(e) => setEmisor(e.target.value.toLocaleLowerCase())}
                        />
                    </div>

                    <DocJustifica docSelecc={docSelecc} setDocSelecc={setDocSelecc} />

                    <div className='flex items-center gap-6 '>
                        <DocRectifica checkSelecc={checkSelecc} setCheckSelecc={setCheckSelecc} />
                        <input 
                            type='number'
                            value={fmi ? fmi : ''}
                            className='h-[35px] w-[35%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            placeholder='FMI'
                            onChange={(e) => setFmi(e.target.value)}
                        />
                    </div>


                    <div className='flex justify-evenly items-center p-1'>
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
                className='w-[65%] p-5 max-h-[100%] overflow-y-auto border border-gray-500'
            >
                <Typography 
                    className='text-justify font-normal'
                    ref={movitvada}
                >
                    <span>
                        Que la Resolución 1040 de 2023 del Instituto Geográfico Agustín Codazzi (IGAC), 
                        en su artículo 4.5.4 numeral 1, señala que los errores en la inscripción catastral 
                        que no corresponden con la realidad del predio.
                    </span>
                    <br/><br/>
                    <span>
                        Que el(la) señor(a) <span className='text-red-500'>{nombre}</span>, identificado(a) 
                        con <span className='text-red-500 uppercase'>{tipoDoc}. </span> 
                        No. <span className='text-red-500'>{formatNumber(numDoc)}</span>, en su condición de propietario del inmueble con número 
                        predial <span className='text-red-500'>{npn}</span>, 
                        inscrito en la base de datos catastral, presentó ante la Oficina de Catastro 
                        adscrita a la Secretaria de Planeación del municipio de Montería, el trámite 
                        catastral correspondiente a rectificación general de datos del referido predio, 
                        soportada en los siguientes documentos 
                        aportados: 
                        <span className='text-red-500 capitalize'> {fuenteAdmin} No. {numFuenteAdmin} </span>  
                        del <span className='text-red-500'>{fecha}</span> de (la) 
                        <span className='text-red-500 capitalize'> {emisor}</span>, 
                        <span className='text-red-500'> {docSelecc.sort().join(', ')}</span>.
                    </span>
                    <br/><br/>
                    <span>
                        De acuerdo al estudio realizado, se procede a rectificar el(la) 
                        <span className='capitalize text-red-500'> {checkSelecc.join(', ')} </span>
                        del predio en mención, soportada en el certificado tradición y
                        libertad 140- <span className='text-red-500'>{fmi}</span>.
                    </span>
                    <br/><br/>
                    <span>
                        Que revisados los antecedentes catastrales del municipio de Montería, verificada la 
                        documentación aportada por el(la) solicitante, así como la validación correspondiente a 
                        través de la aplicación combinada de métodos INDIRECTO y DECLARATIVO - COLABORATIVO, 
                        en los términos del artículo 2.2.2.2.6. del Decreto 1170 de 2015, modificado por el 
                        Decreto 148 de 2020, que procede la rectificación de(la)  
                        <span className='capitalize text-red-500'> {checkSelecc.join(', ')}</span>
                        , del presente acto y su correspondiente inscripción 
                        en el catastro, conforme lo indican en los artículos 4.5.4 y 4.6.8 de la Resolución 1040 
                        de 2023, en concordancia del artículo 2.2.2.2.2 literal C del 1170 de 2015, modificado 
                        por el Decreto 148 de 2020.
                    </span>
                    <br/><br/>
                    <span>
                        Que la rectificación ordenada hace alusión a una corrección simplemente formal, 
                        la cual no modifica el avalúo catastral del predio objeto de la misma.
                    </span>
                </Typography>
            </div>
        <Toaster />
        </div>
    )
}
