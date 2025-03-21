import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'justify',
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

const FormPDFToRender = (datos: DenunciaData) => {
  return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Mi Primer PDF con React PDF</Text>
                <Text style={styles.text}>
                Este es un ejemplo de cómo generar un PDF utilizando React PDF en un proyecto de Next.js.
                </Text>
            </View>
        </Page>
    </Document>
  )
}

export default FormPDFToRender;