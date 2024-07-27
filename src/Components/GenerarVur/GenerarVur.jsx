import { Button, Dialog, DialogBody, DialogHeader, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { LuUpload } from "react-icons/lu";

export default function GenerarVur() {

    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(!open)

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

                <DialogBody divider>
                    <div className='h-[15rem] flex flex-col items-center justify-evenly borde'>
                        <div className='w-[80%] flex items-end justify-evenly capitalize gap-5'>
                            <Typography className='font-black'>
                                vur basico:
                            </Typography>

                            <div>
                                <Input 
                                    className='capitalize text-center' 
                                    type='url' 
                                    variant='standard' 
                                    placeholder='pega aqui el vur basico' 
                                />
                            </div>

                            <Button 
                                size='sm' 
                                variant='text' 
                                color='green'
                            >
                                <LuUpload className='w-5 h-5' />
                            </Button>
                        </div>

                        <div className='w-[80%] flex items-end justify-evenly capitalize gap-5'>
                            <Typography className='font-black'>
                                vur juridico:
                            </Typography>

                            <div>
                                <Input 
                                    className='capitalize text-center' 
                                    type='url' 
                                    variant='standard' 
                                    placeholder='pega aqui el vur juridico' 
                                />
                            </div>

                            <Button 
                                size='sm' 
                                variant='text' 
                                color='green'
                            >
                                <LuUpload className='w-5 h-5' />
                            </Button>
                        </div>
                        <Button color='green' variant='filled'  >
                            generar
                        </Button>
                    </div>
                </DialogBody>

            </Dialog>
        </>
    )
}
