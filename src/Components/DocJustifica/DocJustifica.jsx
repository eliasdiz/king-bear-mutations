import { Button, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function DocJustifica({docSelecc,setDocSelecc}) {

    const [ open, setOpen ] = useState(false)
    const optionsDocJusti = ['registro civil de nacimiento','cedula','acta de defuncion','registro civil','planos','solicitud','certificado tradicion libertad'].sort()
    const [ docJusti, setDocJusti ] = useState(optionsDocJusti || [] )
    const [ docIngresado, setDocIngresado ] = useState('')
    // const [ docSelecc, setDocSelecc ] = useState([])
    // console.log()

    const handleOpen = () => setOpen(!open)

    const handleCheck = (e) =>{
        let value = e.target.value
        let isCheck = e.target.checked
        isCheck ? setDocSelecc([...docSelecc,value]) : setDocSelecc(docSelecc.filter(item => item !== value))
        
        }
    
    const handleIngresar = () => {
        if(docIngresado === ''){
            toast.error('debes ingresar un documento')
        }else{
            setDocJusti([...docJusti,docIngresado])
        }
        setDocIngresado('')
    }
    
    const handleClose = () => {
        setOpen(false)
        // setDocJusti(optionsDocJusti)
    }
    // console.log(docSelecc)            

    return (
        <>
            <Button
                color='deep-purple'
                size='sm'
                variant='gradient'
                onClick={handleOpen}
                className='w-full capitalize text-sm'
            >
                doc. justificativos
            </Button>

            <Dialog open={open} handler={handleOpen}>
            <Toaster />
                <DialogHeader className='justify-center capitalize '>
                    selecciona los documentos justificativos
                </DialogHeader>

                <DialogBody 
                    divider
                    className='flex justify-center gap-5'
                >
                    <div className='flex flex-col justify-center items-center gap-4 w-[25%] capitalize'>
                        
                        <div className='w-full'>
                            <Input 
                                className='capitalize'
                                label={'ingresa el documento'}
                                variant='standard'
                                onChange={(e) => setDocIngresado(e.target.value.toLocaleLowerCase())}
                                value={docIngresado}
                            />
                        </div>

                        <Button
                            size='sm'
                            color='green'
                            onClick={handleIngresar}
                        >
                            agregar
                        </Button>
                    </div>
                    <div className='flex flex-wrap  max-w-[75%] p-1 rounded-md capitalize'>

                        {
                            docJusti.map( (item,i) => (
                                <div key={i} className='w-[50%] border rounded-md'>
                                    <Checkbox
                                        value={item}
                                        color='blue'
                                        label={item} 
                                        className=''
                                        onChange={handleCheck}  
                                        checked={docSelecc.includes(item)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </DialogBody>

                <DialogFooter>
                    <Button
                        size='sm'
                        color='red'
                        variant='gradient'
                        onClick={handleClose}
                    >
                        cerrar
                    </Button>
                </DialogFooter>

            </Dialog>
        </>
    )
}
