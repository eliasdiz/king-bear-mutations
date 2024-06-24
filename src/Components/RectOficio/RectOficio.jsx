import { Button, Typography } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import DocJustifica from '../DocJustifica/DocJustifica'
import DocRectifica from '../DocRectifica/DocRectifica'
import ArticulosRect from '../ArticulosRect/ArticulosRect'

export default function RectOficio() {

    const motivada = useRef()
    const [ npn, setNpn ] = useState('')
    const [ fmi, setFmi ] = useState('')
    const [ docSelecc, setDocSelecc ] = useState([])
    const [ checkSelecc, setCheckSelecc ] = useState([])


    // console.log(textoOk.current.innerText)

    const handleLimpiar = () => {
        setNpn('')
        setFmi('')
        setDocSelecc([])
        setCheckSelecc([])
    }


    const handleCopiar = () => {
        let texto = motivada?.current?.innerText
        let data = {
            'numero predial nacional': npn,
            'documentos aportados': docSelecc,
            'rectificacion': checkSelecc,
            'folio matricula inmobiliaria': fmi
        } 

        for( let item in data){
            if( data[item] === '' || data[item].length === 0){
                return toast.error(`debes ingresar ${item}`, {duration: 1000, style:{textTransform: 'capitalize', textAlign: 'center'}})
            }
            }
        navigator.clipboard.writeText(texto.trim())
        toast.success('texto copiado',{style:{textTransform: 'capitalize'}})
    }    


    return (
        <div className='flex h-[78vh] '>
                
            <div className='w-[40%] flex justify-center items-center border border-gray-300'>

                <div className='flex flex-col justify-center gap-4 h-full'>               
                    <input 
                        value={npn ? npn : ''}
                        placeholder='NPN'
                        className='h-[35px]  border border-gray-500 rounded-md p-2 text-center'
                        onChange={(e) => setNpn(e.target.value)}
                        />

                    <DocJustifica docSelecc={docSelecc} setDocSelecc={setDocSelecc} />
                    
                    <div className='w-full flex gap-3'>
                        <DocRectifica checkSelecc={checkSelecc} setCheckSelecc={setCheckSelecc} />

                        <input 
                            value={fmi ? fmi : ''}
                            className='h-[35px] w-[30%] capitalize border border-gray-500 rounded-md p-2 text-center'
                            placeholder='FMI'
                            onChange={(e) => setFmi(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-evenly items-center '>
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
                className='w-[65%] p-5 max-h-[100%] overflow-y-auto border border-gray-300'
            >
                <Typography 
                    className='text-justify font-normal'
                    ref={motivada}
                >
                    <span>
                        Que la Resolución 1040 de 2023 del Instituto Geográfico Agustín Codazzi (IGAC), 
                        en su artículo 4.5.4 numeral 1, señala que los errores en la inscripción catastral 
                        que no corresponden con la realidad del predio.
                    </span>
                    <br/><br/>
                    <span>
                        Ante la Oficina de Catastro de atención al público adscrita a la secretaria 
                        de Planeación del municipio de Montería, se presentó una solicitud 
                        de trámite catastral consistente en rectificación de datos, del 
                        inmueble con número predial
                        <span className='text-red-500 capitalize'> {npn}</span>  
                        , inscrito en la base de datos catastral del municipio de Montería, 
                        soportada en los siguientes documentos aportados:
                        <span className='text-red-500 capitalize'> {docSelecc.join(', ')}</span>  
                        .
                    </span>
                    <br/><br/>
                    <span>
                        De acuerdo con el estudio realizado, se procede a rectificar el(la) 
                        <span className='capitalize text-red-500'> {checkSelecc.join(', ')} </span>
                        del predio en mención, soportada en el certificado tradición y
                        libertad 140- <span className='text-red-500'>{fmi}</span>.
                    </span>
                    <br/><br/>
                    <span>
                        Que, revisados los antecedentes catastrales del municipio de Montería, verificada la 
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
                        la cual no modifica el avalúo catastral del predio objeto de esta.
                    </span>
                </Typography>
            </div>
            <Toaster />
        </div>
    )
}
