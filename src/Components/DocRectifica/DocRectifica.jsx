import { Button, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function DocRectifica({checkSelecc,setCheckSelecc}) {

    const [ open, setOpen ] = useState(false)
    const optionsRectificacion = ['nomenclatura','nombre','apellido','matricula inmobiliaria','tipo documento','no documento'].sort()

    const handleOpen = () => setOpen(!open)
    
    const handleCheck = (e) => {
        let value = e.target.value
        let check = e.target.checked
        check ? setCheckSelecc([...checkSelecc,value]) : setCheckSelecc(checkSelecc.filter(item => item !== value))
    }
    
    
    return (
        <>
            <Button
                size='sm'
                className='text-sm'
                color='brown'
                onClick={handleOpen}
            >
                rectificacion
            </Button>    
            <Dialog
                open={open}
                handler={handleOpen}
                size='sm'
            >

            <DialogHeader className='uppercase justify-center'>
                rectificacion
            </DialogHeader>

            <DialogBody 
                divider
                className='flex justify-center'
            >

                <div className='flex flex-wrap gap-3 '>
                {
                    optionsRectificacion.map( (item,i) => (
                        <div key={i} className='h-[40px] w-[45%] flex items-center border rounded-md capitalize p-1'>
                            <Checkbox
                                color='blue'
                                value={item}
                                label={item} 
                                onChange={handleCheck}  
                                checked={checkSelecc.includes(item)}
                            />
                        </div>

                    ))
                }
                </div>

            </DialogBody>

            <DialogFooter className='gap-4'>
                <Button
                    size='sm'
                    color='red'
                    onClick={() => setOpen(!open)}
                >
                    cerrar
                </Button>
            </DialogFooter>

            </Dialog>    
        </>
    )
}
