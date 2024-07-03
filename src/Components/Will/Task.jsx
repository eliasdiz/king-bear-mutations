import { Typography } from '@material-tailwind/react'
import React from 'react'
import database from '../../data'

export default function Task() {

    const countNames = (database) => {
            return database.reduce((acc, item) => {
            acc[item.name] = (acc[item.name] || 0) + 1;
            //   console.log(acc)
            return acc;
            }, {});
        };
        
        // Función para filtrar los objetos con nombres repetidos
        const findRepeatedNames = (database, nameCounts) => {
            return database.filter(item => nameCounts[item.name] > 1);
        };
        
        // Uso de las funciones
        const nameCounts = countNames(database);
        const repeatedObjects = findRepeatedNames(database, nameCounts);
        
        console.log(repeatedObjects);
    

    return (
        <div>
            <div className='flex items-end gap-7 h-[12vh] border border-black capitalize '>
                <Typography className='font-bold'>secret service</Typography>
                <Typography className='font-bold'>country</Typography>
            </div>

            <div className='border border-blue-500'>

                <div className='fila flex gap-3'>
                    <div className='flex items-center justify-center w-[6rem] h-[6rem] border border-green-500'>
                        <Typography>{repeatedObjects[0].name}</Typography>
                    </div>
                    {
                        repeatedObjects.map(item => (
                            <div className='flex flex-col w-[25rem] h-auto border border-green-500'>
                                <span>{item.enviroment}</span>
                                <span>microservice: {item.microservice}</span>
                                <span>parent_id: null</span>
                                <span>shareable: {item.shareable}</span>
                                <span>system: {item.system}</span>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}
