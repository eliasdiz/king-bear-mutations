import { Button, Dialog, DialogBody, DialogHeader, Typography } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import { LuUpload } from "react-icons/lu";
// import { PDFDocument } from 'pdf-lib';

export default function GenerarVur() {

    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(!open)
    const cargarDocs = useRef()
    const [ archivos, setArchivos ] = useState([])

    const handleCargarDocs = () => {
        cargarDocs.current.click()
        setArchivos(cargarDocs.current.files)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(e.dataTransfer.files)
    }

    
    console.log(archivos)


    return (
        <>
            <Button
                size='sm'
                color='red'
                onClick={handleOpen}
            >
                generar vur
            </Button>
            <Dialog open={open} handler={handleOpen}>

                <DialogHeader className='uppercase justify-center'>
                    generar vur 
                </DialogHeader>

                <DialogBody divider className='flex justify-center'>
                    <div 
                        className='flex justify-center items-center w-full h-[5rem] border-4 border-gray-400 border-dashed  rounded-md'
                        size='sm'
                        color='blue'
                        variant='gradient'
                        onClick={handleCargarDocs}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <LuUpload className='w-6 h-6 ' />
                        <Typography variant='h5'>cargar documentos</Typography>
                        <input multiple type='file' className='hidden' ref={cargarDocs} />
                    </div>
                </DialogBody>

            </Dialog>
        </>
    )
}


