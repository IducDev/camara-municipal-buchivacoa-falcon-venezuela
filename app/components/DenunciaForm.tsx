"use client"

import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import escudo from "@/public/Escudo_Municipio_Buchivacoa_(Falcón).png";

interface DenunciaData {
  nombresApellidos: string;
  cedula?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  descripcion?: string;
  fecha?: string;
}

export default function DenunciaForm({ datos = {
    nombresApellidos: 'Juan Antonio Pérez González',
    cedula: '12345678',
    direccion: 'Calle Principal, Casa N° 45, Sector Centro, Capatárida',
    telefono: '0412-1234567',
    descripcion: 'Por medio de la presente, me dirijo a ustedes para denunciar la situación que se presenta en la Calle Las Flores del Sector La Esperanza, donde existe un bote de aguas residuales que afecta a toda la comunidad desde hace aproximadamente 2 semanas.\n\nEsta situación está generando problemas de salubridad y malos olores que afectan a todos los vecinos del sector.',
    fecha: '15 de Marzo de 2024',
} }: { datos?: DenunciaData }) {
    const denunciaRef = useRef<HTMLDivElement>(null);

    const exportToPDF = async () => {
        if (denunciaRef.current) {
            const canvas = await html2canvas(denunciaRef.current, {
                scale: 2,
                logging: false,
                useCORS: true
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 4;

            pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('denuncia-oac.pdf');
        }
    };

    return (
        <div  className="w-full md:w-2/3 mx-auto bg-white p-8 mt-4">
            <div ref={denunciaRef} className="w-full bg-white p-8 rounded-lg shadow-md shadow-slate-500">
                <Image src={escudo} alt="Logo" width={100} height={100} className="mx-auto mb-4" />
                <h1 className='font-bold text-center mb-4'>República Bolivariana de Venezuela
                    <br/>
                    Consejo Municipal Buchivacoa <br/>
                    Capatárida - Estado Falcón <br/>
                    Oficina de Atención al Ciudadano
                </h1>
                
                <h2 className="text-2xl font-bold text-center mb-6">DENUNCIA</h2>

                {/* Nombre y Apellidos */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">NOMBRES Y APELLIDOS:</p>
                    <p className="mt-1 px-3 py-2">{datos.nombresApellidos}</p>
                </div>

                {/* C.I. */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">C.I. N°:</p>
                    <p className="mt-1 px-3 py-2">V-{datos.cedula}</p>
                </div>

                {/* Dirección */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">DIRECCIÓN:</p>
                    <p className="mt-1 px-3 py-2">{datos.direccion}</p>
                </div>

                {/* Teléfono */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">TELÉFONO:</p>
                    <p className="mt-1 px-3 py-2">{datos.telefono}</p>
                </div>

                {/* Descripción de la Denuncia */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">DESCRIPCIÓN DE LA DENUNCIA:</p>
                    <p className="mt-1 px-3 py-2 whitespace-pre-wrap">{datos.descripcion}</p>
                </div>

                {/* Nota */}
                <div className="mb-4">
                    <p className="text-sm text-gray-600 italic"><strong>NOTA:</strong> ANEXAR FOTOCOPIA DE LA CÉDULA DE IDENTIDAD.</p>
                </div>

                {/* Fecha de Elaboración */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">FECHA DE ELABORACIÓN:</p>
                    <p className="mt-1 px-3 py-2">{datos.fecha}</p>
                </div>

                {/* Firma del Denunciante */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700">FIRMA DEL DENUNCIANTE:</p>
                    <p className="mt-1 px-3 py-2">{datos.nombresApellidos}</p>
                </div>
            </div>
            <button
                onClick={exportToPDF}
                type="button"
                className="w-full my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Descargar PDF
            </button>
        </div>
    );
}