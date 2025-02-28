
"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import flag from "../../public/BAND-I-Buchivacoa.svg.png";
import { usePathname } from "next/navigation";

export function NavBar() {

  const pathname = usePathname();
  return (
    <Navbar fluid rounded className="border-b-2 border-primaryBlue bg-white dark:bg-primaryBlue dark:border-primaryBlue fixed top-0 left-0 right-0">
                <Navbar.Brand as={Link} href="/">
                  <Image  src={flag} width={60} height={60} alt="Camara municipal Logo" className="mr-4" />
                  <span className="self-center  text-xs font-semibold text-pureBlack">
                    República Bolivariana de Venezuela, <br/> Cámara Municipal Buchivacoa 
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="md:mt-4 lg:mt-0">
                    <Link href="/" className={pathname === "/" ? "text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue" : "text-pureBlack font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"}>
                      Inicio
                    </Link>
                  
                    <Link href="/comisiones" className={pathname === "/comisiones" ? "text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue" : "text-pureBlack font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"}>
                      comisiones
                    </Link>

                    <Link href="/oficinaAtencionCiudadana" className={pathname === "/oficinaAtencionCiudadana" ? "text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue" : "text-pureBlack font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"}>
                      O.A.C
                    </Link>

                    <Link href="/alcaldia" className={pathname === "/alcaldia" ? "text-white bg-primaryBlue hover:bg-primaryBlue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primaryBlue dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue" : "text-pureBlack font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:primaryBlue focus:outline-none dark:focus:primaryBlue"}>
                      Alcaldia
                    </Link>

                    <Link href="https://drive.google.com/drive/folders/1kzKM_GX8aSNqXbFDorv2hkGhFxgHamS8" target="_blank" className="focus:outline-none text-black bg-secondaryYellow hover:bg-yellow-500 focus:ring-4 focus:ring-secondaryYellow font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                      Ordenanzas 
                    </Link>
                </Navbar.Collapse>
              </Navbar>
          
          
     
  );
}
