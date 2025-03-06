
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
import miramar from "@/public/miramar.jpg";
import ejidos from "@/public/EJIDOS.png";
import finanzas from "@/public/finanzas-presupuestos.jpg";
import vialidad from "@/public/vialidad.jpg";
import apreton from "@/public/apreton-manos.jpg";
import salaSesiones from "@/public/saladesesiones.jpeg";

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

      <div>
      <Link target="_blank"  rel="noopener noreferrer" href={`mailto:${correo}`}  className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primaryBlue to-primaryBlue group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <div className="flex justify-center items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
              
              <p>Contacto</p>
            </div>
      </Link>
      </div>
      
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
  },
  {
    imagen: miramar,
    titulo: "Agricultura, Ambiente y Turismo.",
    presidente: "LEOBALDO CALLEJA",
    vicepresidente: "BRENDA CUEVAS",
    miembro: "RAFAEL ACOSTA",
    descripcion: "Se encarga de atender temas relacionados con la Agricultura, el Ambiente y el Turismo.",
    correo: "lcalleja30@gmail.com"
  },
  {
    imagen: ejidos,
    presidente: "CARLOS FERRER",
    titulo: "Ejidos y Urbanismo.",
    vicepresidente: "ANTONIO ACURERO",
    miembro: "CRUZ ALVAREZ",
    descripcion: "Esta Comisión está relacionada directamente con la Inspección de Tierras Rural, Urbana e Industrial, trabajando en conjunto con la Oficina de Catastro para su posterior asignación.",
    correo: "carlosjferrers@gmail.com"
  },
  {
    imagen: finanzas,
    presidente: "LEOBALDO CALLEJA",
    titulo: "Presupuesto, Finanzas y Contraloría.",
    vicepresidente: "CARLOS FERRER",
    miembro: "LUIS PIÑA",
    descripcion: "Tendrá a su Cargo la Vigilancia de Inversión de Fondos Públicos, y a su vez el Control de las Operaciones de la Administración Pública Municipal.",
    correo: "lcalleja30@gmail.com"
  },
  {
    imagen: vialidad,
    presidente: "CRUZ ALVAREZ",
    titulo: "Vialidad e Infraestructura.",
    vicepresidente: "BRENDA CUEVAS",
    miembro: "CARLOS FERRER",
    descripcion: "Su función es Vigilar el buen Funcionamiento de la Vialidad y de libre Tránsito en el Municipio, Pasos Peatonales, Puentes, Pavimento y Señalizaciones, los cuales son Fundamentales para el  Desarrollo Económico y Movilidad Humana dentro del Municipio.",
    correo: "tawalachon@gmail.com"
  },
  {
    imagen: apreton,
    presidente: "LUIS PIÑA",
    titulo: "Relaciones Interinstitucionales.",
    vicepresidente: "ANTONIO ACURERO",
    miembro: "RAFAEL ACOSTA",
    descripcion: "Tiene como base Mantener Relaciones tanto con el Sector Público y con el Sector Privado en Pro del Beneficio y Crecimiento Económico de este Municipio.",
    correo: "pinaluisfelipe21@gmail.com"
  },

];

// Componente principal de la página
const page: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${salaSesiones.src})`}}>
        <h1 className="flex justify-center items-center text-6xl h-screen mb-6 font-bold text-gray-800 dark:text-white text-center underline decoration-green-500 decoration-4 underline-offset-8">
            <p className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white text-center underline decoration-green-500 decoration-4 underline-offset-8">
              ESTAMOS PARA TI
            </p>
        </h1>
      </div>
      <main className="w-full h-auto pb-10 px-4 bg-white dark:bg-gray-800 ">
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center my-8">
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