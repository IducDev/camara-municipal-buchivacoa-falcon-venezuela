"use client"
import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import FormPDFToRender from './FormPDFToRender';

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
    correo: "email@example.com",
} }: { datos?: DenunciaData }) {

    return (
        <>
        <div style={{ padding: 20 }}>
              <PDFDownloadLink
                document={<FormPDFToRender datos={datos}/>}
                fileName="denuncia-aoc.pdf"
                style={{
                  padding: 10,
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: 5,
                  textDecoration: 'none',
                }}
              >
                {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
              </PDFDownloadLink>
            </div>
            <div style={{ padding: 20 }}>
              <PDFViewer width="100%" height="600px">
                <FormPDFToRender datos={datos} />
              </PDFViewer>
            </div>
        </>
        
    );
}