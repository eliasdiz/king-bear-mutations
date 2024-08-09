import { Button } from '@material-tailwind/react'
import React from 'react'
import toast from 'react-hot-toast'
import { FaRegCopy } from "react-icons/fa6";



export default function ArticulosPrimera() {

    const texto =`
ARTICULO SEGUNDO: La inscripción ordenada en el artículo anterior se realizará de conformidad con lo dispuesto en el capítulo 6, artículos 4.6.1 y subsiguientes de la Resolución 1040 de 2023 expedida por el IGAC.

ARTÍCULO TERCERO: La notificación de la presente resolución se realizará conforme lo dispuesto en el inciso 1 y 2 del artículo 4.8.2 de la Resolución 1040 de 2023, del Instituto Geográfico Agustín Codazzi.

ARTÍCULO CUARTO: Contra el presente acto administrativo no procede recurso alguno, conforme lo preceptúa el artículo 4.8.5 de la Resolución 1040 de 2023 y el artículo 75 de la Ley 1437 de 2011.

ARTÍCULO QUINTO: REMITIR copia del acto administrativo a la Secretaría de Hacienda del municipio de Montería, para la actualización de la información respecto al nombre del propietario para fines fiscales y tributarios.

COMUNÍQUESE Y CÚMPLASE.
    `
            
    const handleCopiar = () => {
        navigator.clipboard.writeText(texto.trim())
        toast.success('articulos copiados',{style:{textTransform: 'capitalize'}})
    }

    return (
        <>
            <Button
                size='sm'
                variant='gradient'
                color='blue-gray'
                onClick={handleCopiar}
                className='flex items-center gap-1 '
            >
                articulos
                <FaRegCopy className='w-4 h-4' />
            </Button>
        </>
    )
}
