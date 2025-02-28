import Image from 'next/image';
import React from 'react';
import alcaldia from "../../public/alcaldia-buchivacoa.jpg";
import Link from 'next/link';

const AdoptaArbol = () => {
  return (
    <div className='w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>

        <div className="grid grid-cols-2 gap-4">

        <div className="col-span-2  md:col-span-1 flex justify-center items-center">
            <Image
            src={alcaldia}
            alt="Entrada"
            width={200}
            height={100}
            className="mx-auto rounded-xl"
            />
        </div>

            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-4xl text-center md:text-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white  ">
                    Adopta un Arbol
                </h1>
                
                <p className="mb-6 text-lg text-start font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                    <small className="ms-2 font-semibold  dark:text-gray-400 text-4xl text-center">Cooperacion Camara Alcaldia</small>
                </p>
                <div className=''>
                    <Link href="/" className={"text-white mx-auto bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"}>
                        Enterate
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AdoptaArbol;