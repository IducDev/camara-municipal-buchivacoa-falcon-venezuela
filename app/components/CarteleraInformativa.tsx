import Image from 'next/image';
import React from 'react';
import informacion from "../../public/informacion-26-febrero.jpeg";

const CarteleraInformativa = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white  ">
                    Cartelera Informativa Desde el 24 al 28 de febrero
                </h1>
                En reunión efectuada el día 26 de febrero del 2025 con la comisión de legislación, se discutió la ordenanza de convivencia, 
                orden público y seguridad ciudadana del Municipio Buchivacoa, 
                la cual fue pasada al seno de la cámara municipal y fue aprobada en su primera discusión.
            </div>

            <div className="col-span-2  md:col-span-1 flex justify-center items-center">
            <Image
                src={informacion}
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

export default CarteleraInformativa;