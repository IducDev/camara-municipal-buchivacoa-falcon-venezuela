import { NavBar } from '@/app/components/NavBar';
import React from 'react';
import alcaldia from "@/public/Logo_Alcaldía_de_Buchivacoa.jpg";
import Image from 'next/image';
import Link from 'next/link';
import gmail from "@/public/gmail.png";
import araguaney from "@/public/ARAGUANEY-_jpg.jpg"
import impuestos from "@/public/impuestos-municipales.jpg";
import catastro from "@/public/catastro.jpg";
import alcalde from "@/public/alcalde-municipio.jpg";
import sindicatura from "@/public/sindicatura.jpg";
import Footer from '@/app/components/Footer';
import { StaticImageData } from 'next/image';



interface ComisionProps {
  imagen: StaticImageData;
  titulo: string;
  vision: string;
  mision: string;
  descripcion: string;
  correo: string;
}

const Comision: React.FC<ComisionProps> = ({
  imagen,
  titulo,
  mision,
  vision,
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
        {titulo}
      </h2>

      <div className="text-gray-600 dark:text-gray-300 flex-grow">
        <p className="mb-2"><span className='font-bold'>vision: </span> {mision}</p>
        <p className="mb-2"><span className='font-bold'>mision: </span> {vision}</p>
        <p className="mt-2"><span className='font-bold'></span> {descripcion}</p>
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

const comisiones = [
  {
    imagen: impuestos,
    titulo: "Administracion Tributaria",
    mision: "Gestionar con eficiencia y eficacia la recaudación, control y fiscalización de los tributos municipales manteniendo una relación de cercanía con los contribuyentes, fomentando el cumplimiento a cabalidad de los compromisos tributarios en un marco de transparencia equidad y rectitud con estricto apego a la normativa legal. ",
    vision: "Ser una Dirección con moderna base tecnológica y Recurso Humano altamente capacitado para el desarrollo de los procesos de Recaudación, Control y Fiscalización de los Tributos Municipales, para la asistencia a los contribuyentes y abierta a la inspección de la ciudadanía. Aspiramos hacer de la Cultura Tributaria el medio para la reducción de la evasión fiscal y el cumplimiento voluntario de las obligaciones fiscales con el fin de coadyuvar en la satisfacción de las necesidades colectivas de la población y del desarrollo Municipal.",
    descroption:"",
    correo: "Tributosbuchivacoa@gmail.com"
  },
  {
    imagen: catastro,
    titulo: "Catastro Municipal",
    mision: "La Dirección de Catastro del Municipio Buchivacoa de la Parroquia Capatárida es el órgano técnico encargado de la formación y conservación del Catastro dentro del ámbito territorial del Municipio, a cuyos efectos debe programar, coordinar y dirigir actividad catastral, garantizando la actualización y confiabilidad de la información catastral de todos los bienes inmuebles ubicados dentro del Municipio a través de la identificación, numeración y descripción de los mismos, con especificación, numeración y descripción de los mismos, con especificación de su propietario, superficie, situación, linderos, valores y demás datos que prueban sus características físicas, económicas y jurídicas.",
    vision: "La Dirección de Catastro Municipal tiene como misión la planificación, coordinación y supervisión de todas aquellas actividades que están relacionadas con la formación, mantenimiento y actualización del Catastro Urbano Rural, basados en las normativas jurídicas existentes, así como el instrumento de acción fundamental de Catastro. ",
    descroption:"",
    correo: "Catastrocatastro15@gmail.com"
  },
  {
    imagen: alcalde,
    titulo: "Direccion General - Despacho del Alcalce",
    mision: "Coordinar, dirigir y programar actividades dentro de cada Dirección perteneciente a la Institución",
    vision: "Supervisar dichas actividades que estén relacionadas con la formación de las mismas.",
    descroption:"",
    correo: "diaszavalajoseesteban@gmail.com"
  },
  {
    imagen: sindicatura,
    titulo: "Sindicatura",
    mision: "Representar al Municipio en asuntos jurídicos, administrativos y sociales. Defender los intereses del Municipio en juicio y fuera de ellos. Aplicar la normativa jurídica de manera justa eficiente y oportuna. Promover, respetar, proteger y garantizar los derechos humanos.",
    vision: "Ser una autoridad modelo en la protección de los derechos  humanos. Fortalecer y lograr un alto grado de excelencia, reconocimiento, credibilidad y Proyecto Municipal. Ser una autoridad modelo a nivel nacional en materia de protección de los derechos humanos.",
    descroption:"La Sindicatura Municipal es el órgano encargado de brindar asesoría jurídica al Municipio y representar sus intereses de forma judicial y extrajudicial, en el ámbito Legal y su visión es ser una actividad modelo en la protección de los derechos humanos.",
    correo: "Sindicaturamfalconbuchivacoa@gmail.com"
  },

];

const page = () => {
  return (
    <>
        <NavBar />
        <main className="w-full h-auto pb-10 px-4 bg-white dark:bg-gray-800 ">
          <div style={{backgroundImage: `url()`,}} className='flex justify-center items-center w-full h-screen p-4'>
            <Image src={alcaldia} alt='oficina atencion ciudadana'/>
          </div>

          
            <section className="dark:text-white mb-10 md:mb-5 text-center p-5 md:p-10">
              <div className='mx-auto flex justify-center items-center mb-10'>
                <Image src={araguaney} alt='araguaney' width={300} height={200} className='rounded-lg'/>
              </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Adopta un arbol</h1>
                <p className="mb-4 w-[300px] md:w-[700px] text-center mx-auto">
                  ESTE PROGRAMA EN COOPERACION CAMARA MUNICIPAL ALCALDIA DE MUNICIPIO, POR INICIATIVA DEL ALCALDE CORONEL JOSE ESTEBAN DIAZ ZAVALA TIENE LA FINALIDAD DE REFORESTAR NUESTROS PUEBLOS CON EL ARBOL EL ARAGUANEY, CONSISTE EN QUE CADA CIUDADANO PUEDA ADOPTAR UN ARBOL, CUIDARLO Y SEMBRARLOS EN LOS SITIOS PUBLICOS COMO PLAZA, PARQUES, CARRETERAS, AVENIDAS ENTRE OTROS.
                  LA SOLICITUD SE HACE POR MEDIO DE CORREO ELECTRONICO DE LA DIRECCION DE DESARROLLO MUNICIPAL DONDE EN COORDINACION CON ESTA OFICINA PODRAN GESTIONAR UN ARBOL PARA EL VIVERO MUNICIPAL. ASI COMO SOLICITAR UN ARBOL PARA SU ADOPCION Y CUIDO.
                  CONTRIBUYAMOS CON EL EMBELLECIMIENTO DEL MAMBIENTE EN NUESTRO MUNICIPIO.
                </p>
                <Link target="_blank"  rel="noopener noreferrer" href={`mailto:agricolabuchivacoa@gmail.com`}  className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primaryBlue to-primaryBlue group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <div className="flex justify-center items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    <Image src={gmail} alt="Gmail" width={30} height={30} className="mr-2" />
                    <p>Adopta o Dona aqui</p>
                  </div>
                </Link>
            </section>

            <section className="dark:text-white  p-5 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">DIRECCIÒN DE DESARROLLO AGROPECUARIO MUNICIPAL</h1>
              <p className="mb-4">
              ESTE PROGRAMA EN COOPERACION CAMARA MUNICIPAL ALCALDIA DE MUNICIPIO, POR INICIATIVA DEL ALCALDE CORONEL JOSE ESTEBAN DIAZ ZAVALA TIENE LA FINALIDAD DE REFORESTAR NUESTROS PUEBLOS CON EL ARBOL EL ARAGUANEY, CONSISTE EN QUE CADA CIUDADANO PUEDA ADOPTAR UN ARBOL, CUIDARLO Y SEMBRARLOS EN LOS SITIOS PUBLICOS COMO PLAZA, PARQUES, CARRETERAS, AVENIDAS ENTRE OTROS.
              LA SOLICITUD SE HACE POR MEDIO DE CORREO ELECTRONICO DE LA DIRECCION DE DESARROLLO MUNICIPAL DONDE EN COORDINACION CON ESTA OFICINA PODRAN GESTIONAR UN ARBOL PARA EL VIVERO MUNICIPAL. ASI COMO SOLICITAR UN ARBOL PARA SU ADOPCION Y CUIDO.
              CONTRIBUYAMOS CON EL EMBELLECIMIENTO DEL MAMBIENTE EN NUESTRO MUNICIPIO.
              </p>

              <ol className="list-decimal ml-6 dark:text-white">
                <li>
                  <span className="font-semibold">OBJETIVO:</span>
                  <p>
                  La Dirección de Desarrollo Agropecuario Municipal tiene como objetivo primordial: la organización de los productores y de las unidades de producción, con el fin de promover el desarrollo endógeno y sostenible con el fin de fortalecer las prácticas agrícolas que respeten el medio ambiente, fomenten la autosuficiencia local y mejoren la calidad de vida de las comunidades rurales, a través de implementación de tecnologías adecuadas, capacitación y la integración de conocimientos tradicionales con innovación sostenible.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">FUNCION:</span>
                  <p>
                  La función de la Oficina de Desarrollo Agrícola es coordinar y ejecutar proyectos que impulsen el crecimiento y la sostenibilidad del sector agrícola, ofreciendo asesoría técnica a los productores, promoviendo el acceso a recursos, apoyando la investigación e innovación agropecuaria, y facilitando la formación. Además, busca fomentar los recursos naturales y garantizar la seguridad alimentaria en las comunidades.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">MISION:</span>
                  <p>
                  La Dirección de Desarrollo Agrícola Municipal tiene como misión fomentar la Producción Agropecuaria de una forma Agro Ecológica, mejorando los niveles de Producción y Productividad, incentivando el cumplimiento de los programas de sanidad agrícola y promover planes y proyectos para el manejo; selección y mejoramiento de cultivos y rebaños.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">VISION:</span>
                  <p>
                  La Dirección de Desarrollo Agrícola del Municipio Buchivacoa, tiene como visión organizar en su totalidad a los productores, con el fin de obtener recursos financieros e insumos de producción para mejorar las unidades de Producción, brindar asesorías técnicas, planes y programas que contribuyan a elevar el nivel de la vida de los Productores.
                  </p>
                </li>
                </ol>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {comisiones.map((comision, index) => (
            <Comision
              key={index}
              imagen={comision.imagen}
              titulo={comision.titulo}
              mision={comision.mision}
              vision={comision.vision}
              descripcion={comision.descroption}
              correo={comision.correo}
            />
          ))}
        </div>

      

        
    </main>
        
    <Footer/>
        
    </>
  )
}

export default page;