import React from 'react';

const Videoplayer = () => {
    return (
        <div className='w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20'>
            <video width="640" height="360" controls className='rounded-xl mx-auto'> 
                <source src="video-principal.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
        </div>
    );
}

export default Videoplayer;