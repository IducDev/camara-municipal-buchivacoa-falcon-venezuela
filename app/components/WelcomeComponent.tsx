import Image from 'next/image';
import React from 'react';
import header2 from "../../public/header-2.jpg";


const WelcomeComponent = () => {
  return (
    <div className='w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 md:mt-20 mt-0'>

      <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 md:col-span-1 p-4">
            <h1 className="mb-10 text-4xl text-center md:text-start font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white border-b-4 border-green-500 w-min">
              Bienvenidos
            </h1>
            
          <p className="mb-6 text-lg text-start font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            La Cámara Municipal Buchivacoa le da la Bienvenida a nuestra WEB Oficial, en donde podrás encontrar información sobre Ordenanzas, Resoluciones y Decretos sobre la Legislación del Municipio Buchivacoa con la finalidad de acercarnos a las Comunidades.
            Estamos Orientados a las Parroquias de Nuestro Municipio con una Visión de Participación e Incorporación de las Nuevas Tecnologías para el Desarrollo del Municipio.
            Esta iniciativa nace bajo la Presidencia del Concejal Lcdo. Leobardo Calleja, en el Periodo 2.025 - 2.026, que citando su Discurso inicial el día 06 de Enero del año 2.025, donde se
            comprometió a buscar la manera de integrar la participación de todas las Parroquias en la vida Política y Legislativa del Municipio.
            De esta manera haciendo un llamado a las Comunidades para trabajar en conjunto en la integración de nuestro Municipio y sentirnos realmente Buchivacoenses y participes de nuestras transformaciones y desarrollo.
          </p>
        </div>

        <div className="col-span-2  md:col-span-1">
          <Image
          src={header2}
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

export default WelcomeComponent;