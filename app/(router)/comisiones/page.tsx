import { NavBar } from '@/app/components/NavBar'
import Image from 'next/image'
import React from 'react';
import proteccionCivil from "@/public/proteccion-covil.png";
import servicioPublico from "@/public/servicio-publico.jpg";
import docente from "@/public/docente-venezuela.png";

import gmail from "@/public/gmail.png";
import Link from 'next/link';
import Footer from '@/app/components/Footer';

const page = () => {
  return (
    <>
      <NavBar />
      {/*aqui va el cuerpo de la pagina*/}
      <div className="w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20">

        <h1 className="text-6xl mb-6 font-bold text-gray-800 dark:text-white text-center underline decoration-green-500 decoration-4 underline-offset-8">ESTAMOS PARA TI</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center">
          ESTAS SON LAS COMISIONES QUE TE PERMITIRAN CANALIZAR TU INQUIETUD
        </p>
        {/* Modified grid layout for better image proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* Comisión Protección Civil */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
            
            {/* Standardized image container */}
            <div className="flex justify-center items-center mb-4">
              <Image src={proteccionCivil} alt="Comisiones"  className="rounded-lg object-cover w-full h-[300px]"/>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              COMISION: Protección Civil, Administración de Desastres, Legislación, Seguridad y Defensa.
            </h2>

            <div className="text-gray-600 dark:text-gray-300 flex-grow">
              <p className="font-bold">PRESIDENTE: ANTONIO ACURERO.</p>
              <span className="font-bold">PRESIDENTE: LUIS PIÑA.</span>
              <p className="font-bold">MIEMBRO ; RAFAEL ACOSTA</p>
              Esta Comisión está dirigida para atender los asuntos relacionados a la Protección de las Comunidades ante acontecimientos que pongan en peligro a la Población, Desarrolla los Instrumentos Jurídicos (Ordenanzas) que permiten el Desarrollo del Municipio, así como las Gestiones que Garanticen su Seguridad y su Defensa.
              Para comunicarte con esta Comisión Puedes hacerlo mediante el Correo Electrónico
            </div>

            <Link className={"inline-flex items-center text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"} href="mailto:antoniojoseacurerolugo@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
              Contacto
            </Link>
          </div>

          {/* Comisión Comuna y Servicios Públicos */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
            
            {/* Standardized image container */}
            <div className="flex justify-center items-center mb-4">
              <Image src={servicioPublico} alt="Comisiones"  className="rounded-lg object-cover w-full h-[300px]"/>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              COMISION: Comuna, Protección Social y Servicios Públicos.
            </h2>

            <div className="text-gray-600 dark:text-gray-300 flex-grow">
              <p className="font-bold">PRESIDENTE: ANTONIO ACURERO.</p>
              <span className="font-bold">PRESIDENTE: LUIS PIÑA.</span>
              <p className="font-bold">MIEMBRO: CRUZ ALVAREZ.</p>
              Su función es tener un contacto directo con las Comunidades para Gestionar y Solventar con el Ejecutivo Municipal los problemas que enfrentan en cuanto a Servicios Públicos y Protección Social.
              Para comunicarte con esta Comisión puedes hacerlo mediante el Correo Electrónico.
            </div>

            <Link className={"inline-flex items-center text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"} href="mailto:tawalachon@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
              Contacto
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
            
            {/* Standardized image container */}
            <div className="flex justify-center items-center mb-4">
              <Image src={docente} alt="Comisiones"  className="rounded-lg object-cover w-full h-[300px]"/>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              COMISION: Educación, Cultura y Deporte.
            </h2>

            <div className="text-gray-600 dark:text-gray-300 flex-grow">
              <p className="font-bold">PRESIDENTE: BRENDA CUEVAS.</p>
              <p className="font-bold">VICE-PRESIDENTE: ANTONIO ACURERO.</p>
              <p className="font-bold">MIEMBRO: CARLOS FERRER.</p>
              Se encarga de todo lo relacionado a las Actividades Recreativas, Culturales y de Educación dentro del Municipio.
              Para comunicarte con esta Comisión puedes hacerlo mediante el Correo Electrónico.
            </div>

            <Link className={"inline-flex items-center text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"} href="mailto:brendalouc8@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
              Contacto
            </Link>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default page