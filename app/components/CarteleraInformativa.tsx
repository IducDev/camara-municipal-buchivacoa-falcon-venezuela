import Image from 'next/image';
import React from 'react';
import informacion from "../../public/informacion-24-28-febrero.jpeg";

const CarteleraInformativa = () => {
  return (
    <div className='w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white  ">
                    Cartelera Informativa Desde el 24 al 28 de febrero
                </h1>
                El día viernes la comisión de servicios públicos de la cámara Municipal de Buchivacoa en una mesa de trabajo con las diferentes Direcciones Ejecutiva de la Alcaldía Municipal tratando puntos álgidos relacionados  a las aguas Negras, recolección de basura, tocamos los puntos sobre el puerto de Zazarida, problemática existente en la urbanización el Milenio referente aguas blancas,aguas negras a las quejas de los motorizados que molestan a los vecinos y otros aspectos referente a los servicios públicos estuvieron presentes Concejales Antonio Acurero, Luis piña, los Directores y coordinadores Municipales ing Emmanuel Noris,Lic Will Dupont, Tito Palencia,Daniel Toyo, Alex cuartt ,Américo cuenca
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