import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import escudog from "@/public/Escudo_Municipio_Buchivacoa_(Falcón).png";
// Estilos para el PDF

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingBottom: 55,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
  section: {
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:"left",
  },
  note: {
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 5,
    textAlign:"left",
  },
  signature: {
    marginTop: 5,
    paddingTop: 5,
    width: '50%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    margin: 8,
  },
  text: {
    margin: 10,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 'auto',
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
});

interface DenunciaData {
    nombresApellidos?: string;
    cedula?: string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    descripcion?: string;
    fecha?: string;
  }

const FormPDFToRender = ({ datos = {
  nombresApellidos: 'Juan Antonio Pérez González',
  cedula: '12345678',
  direccion: 'Calle Principal, Casa N° 45, Sector Centro, Capatárida',
  telefono: '0412-1234567',
  descripcion: 'Por medio de la presente, me dirijo a ustedes para denunciar la situación que se presenta en la Calle Las Flores del Sector La Esperanza, donde existe un bote de aguas residuales que afecta a toda la comunidad desde hace aproximadamente 2 semanas.\n\nEsta situación está generando problemas de salubridad y malos olores que afectan a todos los vecinos del sector.',
  fecha: '15 de Marzo de 2024',
} }: { datos?: DenunciaData }) => {
  return (
    <Document>
        <Page size="A4" style={styles.body}>
            <View style={styles.header}>
            <Image
              style={styles.image}
              src={escudog.src}
              
            />
            <Text style={styles.title}>
              República Bolivariana de Venezuela
              Consejo Municipal Buchivacoa
              Capatárida, Estado Falcón
              Oficina de Atención al Ciudadano
            </Text>
            
            <Text style={styles.subtitle}>
              DENUNCIA
            </Text>
            <View style={styles.section}>
              <Text style={styles.label}>NOMBRES Y APELLIDOS:</Text>
              <Text style={styles.text}>{datos.nombresApellidos}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>C.I. Nº:</Text>
              <Text style={styles.text}>V-{datos.cedula}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>DIRECCIÓN:</Text>
              <Text style={styles.text}>{datos.direccion}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>TELÉFONO:</Text>
              <Text style={styles.text}>{datos.telefono}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>CORREO DEL DENUNCIANTE:</Text>
              <Text style={styles.text}>{datos.correo}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>DESCRIPCIÓN DE LA DENUNCIA:</Text>
              <Text style={styles.text}>
                {datos.descripcion}
              </Text>
            </View>

            

            <View style={styles.section}>
              <Text style={styles.label}>FECHA DE ELABORACIÓN:</Text>
              <Text style={styles.text}>{datos.fecha}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.note}>
                **NOTA:** ANEXAR FOTOCOPIA DE LA CÉDULA DE IDENTIDAD.
              </Text>
            </View>

            <View style={styles.signature}>
              <Text style={styles.label}>FIRMA DEL DENUNCIANTE:</Text>
              <Text style={styles.text}>{datos.nombresApellidos}</Text>
            </View>
            
            </View>
        </Page>
    </Document>
  )
}

export default FormPDFToRender;