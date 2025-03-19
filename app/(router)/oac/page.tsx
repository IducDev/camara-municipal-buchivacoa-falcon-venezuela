import Footer from '@/app/components/Footer';
import { NavBar } from '@/app/components/NavBar';
import React from 'react';
import oac from "@/public/oac.png";
import Image from 'next/image';
import FormOAC from '@/app/components/FormOAC';

const page = () => {


  return (
    <>
    <NavBar/>

    <main className="w-full h-auto pb-10 px-4 bg-white dark:bg-gray-800 ">
    <div style={{backgroundImage: `url()`,}} className='flex justify-center items-center w-full h-screen p-4'>
      <Image src={oac} alt='oficina atencion ciudadana'/>
    </div>

      <section className="dark:text-white">
          <h1 className="text-2xl font-bold mb-4">Oficina de Atención al Ciudadano (OAC)</h1>
          <p className="mb-4">
           La Oficina de Atención al Ciudadano (OAC) en Venezuela es una dependencia de las Instituciones Públicas
           dedicada a brindar información, asesoría y facilitar documentación esencial a los ciudadanos. Actuando
           como un canal vital para la participación ciudadana y el control social, la OAC se compromete con la
           transparencia y la eficiencia en la gestión pública.
          </p>

          <h2 className="text-xl font-semibold mb-2">Funciones Clave de la OAC:</h2>
          <ul className="list-disc pl-5 mb-4">
           <li>Recepción, orientación y tramitación de denuncias, quejas, reclamos, sugerencias y peticiones.</li>
           <li>Asesoría integral, suministro de información precisa y facilitación de documentación relevante.</li>
           <li>Promoción activa de la participación ciudadana en la gestión pública.</li>
           <li>Fomento de la transparencia y el control social sobre las acciones gubernamentales.</li>
           <li>Desarrollo de programas pedagógicos e informativos para empoderar a los ciudadanos.</li>
           <li>Creación de espacios de deliberación pública para el intercambio de ideas y la construcción colectiva.</li>
          </ul>

          <p className="mb-4">
           La OAC sirve como un punto de encuentro crucial entre la comunidad y las instituciones públicas,
           contribuyendo significativamente a mejorar la calidad de vida de los ciudadanos al asegurar que sus voces
           sean escuchadas y sus necesidades atendidas.
          </p>

          <p className="mb-4">
           En nuestra Cámara Municipal, la Dirección de la OAC está a cargo de la Licenciada Luiseth Delmoral.
           Nuestro horario de atención es de Lunes a Viernes, de 8:00 AM a 2:00 PM, en la sede de la Cámara Municipal.
          </p>

          <p>
           Ahora, para su conveniencia, también puede gestionar cualquier trámite a través del siguiente correo
           electrónico:
          </p>
          
          {/*
            <Link target="_blank"  rel="noopener noreferrer" href={`mailto:luisethd.jdelmoral@gmail.com`}  className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primaryBlue to-primaryBlue group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            
            <div className="flex justify-center items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
              <p>Contacto</p>
            </div>
          </Link>
          */}
          <FormOAC/>
        </section>
    </main>
    
    <Footer/>
    </>
  )
}

export default page;