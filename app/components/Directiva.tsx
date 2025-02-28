import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import directiva from "../../public/directiva.jpg";

const Directiva = () => {
  return (
    <div className='w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>

        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white  ">
                    DIRECTIVA AÑO 2025 CONCEJO MUNICIPAL
                </h1>
                <ul className="list-disc pl-5 text-start">
                    <li className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Presidente: Licenciado. Leobardo José Calleja
                    </li>
                    <li className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Vicepresidente: Ingeniero. Carlos Ferrer
                    </li>
                    <li className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Secretario: Sr. Brigido Franco
                    </li>
                    <li className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Administrador: Licenciado. Juan Carlos Gutiérrez
                    </li>
                    <li className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Recursos Humanos: Sra Laura Mindiola
                    </li>
                </ul>
            </div>

            <div className="col-span-2  md:col-span-1 flex justify-center items-center">
            <Image
                src={directiva}
                alt="Entrada"
                width={500}
                height={300}
                className="mx-auto rounded-xl"
            />
            </div>
        </div>

    </div>
  )
}

export default Directiva;