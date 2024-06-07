import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaRegCopy } from "react-icons/fa6";

export default function ArticulosPrimera() {

    const articulos = useRef()
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => setOpen(!open)

    const handleCopiar = () => {
        let texto = articulos.current.innerText
        navigator.clipboard.writeText(texto.trim())
        toast.success('texto copiado',{style:{textTransform: 'capitalize'}})
        
        setTimeout(() => {
            setOpen(false)
        }, 1500);
    }

    return (
        <>
            <Button
                size='sm'
                variant='gradient'
                color='blue-gray'
                onClick={handleOpen}
            >
                articulos
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
            >
                <Toaster/>
                <DialogHeader className='capitalize justify-center'>
                    articulos mutacion de primera
                </DialogHeader>

                <DialogBody divider>
                    <div className='p-2'>
                        <Typography
                            className='text-justify font-normal'
                            ref={articulos}
                        >
                            <span>
                                ARTICULO SEGUNDO: La inscripción ordenada en el artículo anterior se realizará de 
                                conformidad con lo dispuesto en el capítulo 6, artículos 4.6.1 y subsiguientes de la 
                                Resolución 1040 de 2023 expedida por el IGAC.
                            </span>
                            <br/><br/>
                            <span>    
                                ARTÍCULO TERCERO: la notificación de la presente resolución se realizará conforme lo 
                                dispuesto en el inciso 1 y 2 del artículo 4.8.2 de la Resolución 1040 de 2023, del 
                                Instituto Geográfico Agustín Codazzi.
                            </span>
                            <br/><br/>
                            <span>
                                ARTÍCULO CUARTO: Contra el presente acto administrativo no procede recurso alguno,
                                conforme lo preceptúa el artículo 4.8.5 de la Resolución 1040 de 2023 y el artículo 75 
                                de la Ley 1437 de 2011.
                            </span>
                            <br/><br/>
                            <span>
                                ARTÍCULO QUINTO: REMITIR copia del acto administrativo a la Secretaría de Hacienda del
                                municipio de Montería, para la actualización de la información respecto al nombre del 
                                propietario para fines fiscales y tributarios.
                            </span>
                            <br/><br/>
                            <span>
                                COMUNÍQUESE Y CÚMPLASE.
                            </span>
                        </Typography>
                    </div>

                </DialogBody>

                <DialogFooter className='gap-3'>
                    <Button
                        size='sm'
                        color='red'
                        onClick={() => setOpen(false)}
                    >
                        cerrar
                    </Button>

                    <Button
                        color='indigo'
                        size='sm'
                        className='flex items-center gap-2'
                        onClick={handleCopiar}
                    >
                        copiar
                        <FaRegCopy className='w-4 h-4'/>
                    </Button>

                </DialogFooter>   

            </Dialog>
        </>
    )
}
