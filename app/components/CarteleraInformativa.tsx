import React from 'react';
import { YouTubeEmbed } from './YoutubeEmbed';

const CarteleraInformativa = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>
        <div className="grid grid-cols-2 gap-4 h-3/6">
            <div className="col-span-2 md:col-span-1 p-4 text-center flex flex-col justify-center items-center">
                <h1 className="mb-4 text-xl text-center  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white  ">
                    Sesión solemne San José de Seque orden Ana Julia Oberto
                </h1>
                <p className="text-sm text-gray-500">
                    {/*aqui va el texto de la cartelera*/}
                </p>
            </div>

            <div className="col-span-2  md:col-span-1 flex justify-center items-center">
            
                <YouTubeEmbed videoId={'slhb7OvhRCc'} />
            </div>
        </div>

    </div>
  )
}

export default CarteleraInformativa;