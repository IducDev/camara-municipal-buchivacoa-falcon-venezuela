
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

// Imágenes
import proteccionCivil from "@/public/proteccion-covil.png";
import servicioPublico from "@/public/servicio-publico.jpg";
import docente from "@/public/docente-venezuela.png";
import gmail from "@/public/gmail.png";

// Definición de tipos
import { StaticImageData } from 'next/image';

interface ComisionProps {
  imagen: StaticImageData;
  titulo: string;
  presidente: string;
  vicepresidente: string;
  miembro: string;
  descripcion: string;
  correo: string;
}

// Componente reutilizable para cada comisión
const Comision: React.FC<ComisionProps> = ({
  imagen,
  titulo,
  presidente,
  vicepresidente,
  miembro,
  descripcion,
  correo
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-center items-center mb-4">
        <Image 
          src={imagen} 
          alt={titulo} 
          className="rounded-lg object-cover w-full h-[300px]"
          priority
        />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        COMISION: {titulo}
      </h2>

      <div className="text-gray-600 dark:text-gray-300 flex-grow">
        <p className="font-bold">PRESIDENTE: {presidente}</p>
        <p className="font-bold">VICE-PRESIDENTE: {vicepresidente}</p>
        <p className="font-bold">MIEMBRO: {miembro}</p>
        <p className="mt-2">{descripcion}</p>
        <p className="mt-2">Para comunicarte con esta Comisión puedes hacerlo mediante el Correo Electrónico.</p>
      </div>

      <Link 
        className="inline-flex items-center text-white bg-primaryBlue hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 dark:bg-primaryBlue dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-200"
        href={`mailto:${correo}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
        Contacto
      </Link>
    </div>
  );
};

// Datos de las comisiones
const comisiones = [
  {
    imagen: proteccionCivil,
    titulo: "Protección Civil, Administración de Desastres, Legislación, Seguridad y Defensa",
    presidente: "ANTONIO ACURERO",
    vicepresidente: "LUIS PIÑA",
    miembro: "RAFAEL ACOSTA",
    descripcion: "Esta Comisión está dirigida para atender los asuntos relacionados a la Protección de las Comunidades ante acontecimientos que pongan en peligro a la Población, Desarrolla los Instrumentos Jurídicos (Ordenanzas) que permiten el Desarrollo del Municipio, así como las Gestiones que Garanticen su Seguridad y su Defensa.",
    correo: "antoniojoseacurerolugo@gmail.com"
  },
  {
    imagen: servicioPublico,
    titulo: "Comuna, Protección Social y Servicios Públicos",
    presidente: "ANTONIO ACURERO",
    vicepresidente: "LUIS PIÑA",
    miembro: "CRUZ ALVAREZ",
    descripcion: "Su función es tener un contacto directo con las Comunidades para Gestionar y Solventar con el Ejecutivo Municipal los problemas que enfrentan en cuanto a Servicios Públicos y Protección Social.",
    correo: "tawalachon@gmail.com"
  },
  {
    imagen: docente,
    titulo: "Educación, Cultura y Deporte",
    presidente: "BRENDA CUEVAS",
    vicepresidente: "ANTONIO ACURERO",
    miembro: "CARLOS FERRER",
    descripcion: "Se encarga de todo lo relacionado a las Actividades Recreativas, Culturales y de Educación dentro del Municipio.",
    correo: "brendalouc8@gmail.com"
  }
];

// Componente principal de la página
const page: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20">
        <h1 className="text-6xl mb-6 font-bold text-gray-800 dark:text-white text-center underline decoration-green-500 decoration-4 underline-offset-8">
          ESTAMOS PARA TI
        </h1>
        
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center">
          ESTAS SON LAS COMISIONES QUE TE PERMITIRÁN CANALIZAR TU INQUIETUD
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {comisiones.map((comision, index) => (
            <Comision
              key={index}
              imagen={comision.imagen}
              titulo={comision.titulo}
              presidente={comision.presidente}
              vicepresidente={comision.vicepresidente}
              miembro={comision.miembro}
              descripcion={comision.descripcion}
              correo={comision.correo}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};



export default page