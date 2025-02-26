import Image from 'next/image';
import React from 'react';
import flag from "../../public/BAND-I-Buchivacoa.svg.png";
import Link from 'next/link';
import tiktok from "../../public/tiktok.png";
import youtube from "../../public/youtube.png";
import instagram from "../../public/instagram.png";



const Footer = () => {
  return (
    <footer className="bg-pureWhite rounded-lg rounded-br-none rounded-bl-none shadow-sm border-t-2 border-primaryBlue  dark:border-primaryBlue dark:bg-gray-900 fixed bottom-0 left-0 right-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <Image  src={flag} width={60} height={60} alt="Camara municipal Logo" className="mr-4" />
                  <span className="self-center  text-xs font-semibold text-pureBlack">
                    República Bolivariana de Venezuela, <br/> Cámara Municipal Buchivacoa 
                  </span>
                </Link>
                <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <Link href="/" className="hover:underline me-4 md:me-6 font-semibold">
                        Quines somos
                    </Link>
                    <Link href="/" className="hover:underline font-semibold">
                        Contactos
                    </Link>
                </div>
            </div>
            <div className="flex mt-5 justify-start ">
              <Link href="https://www.tiktok.com/@camarabuchivacoa?lang=es" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <div>
                    <Image src={tiktok} width={30} height={30} className='mx-2' alt="tiktok" />
                  </div>
              </Link> 
              <Link href="https://www.youtube.com/@camara-buchivacoa" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <div>
                    <Image src={youtube} width={30} height={30} className='mx-2'  alt="youtube" />
                  </div>
              </Link> 
              <Link href="https://www.instagram.com/camara_buchivacoa/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <div>
                    <Image src={instagram} width={30} height={30} className='mx-2'  alt="instagram" />
                  </div>
              </Link> 
          </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center font-semibold dark:text-gray-400">
                © 2025 developed by:  
                <Link href="https://isaac-urdaneta.netlify.app" target='_blank' className="underline font-semibold"> Isaac Urdaneta - IDUCDEV™</Link>. 
                 All Rights Reserved.
            </span>

        </div>
    </footer>


  )
}

export default Footer;