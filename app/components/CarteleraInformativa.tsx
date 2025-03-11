import React from 'react';
import { YouTubeEmbed } from './YoutubeEmbed';

const CarteleraInformativa = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white  ">
                    Sesion del Dia 11 De Marzo 2025
                </h1>
                Hoy con participación del alcalde del municipio de Buchivacoa teniente coronel José Esteban Díaz Zavala fue promulgada en la reforma del reglamento interno de debate que permite a la cámara municipal transmitir e interactuar con las nuevas tecnologías para que las comunidades puedan ser parte del desarrollo ordenanzas y tener conocimiento de todo lo que realizamos una manera de integrar a cada ciudadano al desarrollo de nuestro municipio buchivacoa hace historia en este día
            </div>

            <div className="col-span-2  md:col-span-1 flex justify-center items-center">
            
                <YouTubeEmbed videoId={'mYwK4CpBVZU'} />
            </div>
        </div>

    </div>
  )
}

export default CarteleraInformativa;