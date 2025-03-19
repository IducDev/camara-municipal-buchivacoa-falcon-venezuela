"use client"
import React, { useState } from 'react'
import DenunciaForm from './DenunciaForm';

const FormOAC = () => {
  const [formData, setFormData] = useState({
    nombresApellidos: '',
    cedula: '',
    direccion: '',
    telefono: '',
    correo: '',
    descripcion: '',
    fecha: ''
  });

  const [showPDf, setShowPdf] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPdf(true);
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <>
        {!showPDf ? (
            <>
            <div className="p-6  rounded-lg border border-gray-300 shadow-md shadow-slate-500 w-full md:w-2/3 mx-auto mt-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Formulario de Denuncia OAC</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombres y Apellidos */}
        <div>
          <label htmlFor="nombresApellidos" className="block mb-2 text-sm font-medium text-gray-900">
            Nombres y Apellidos
          </label>
          <input
            type="text"
            name="nombresApellidos"
            id="nombresApellidos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={formData.nombresApellidos}
            onChange={handleChange}
          />
        </div>

        {/* Cédula */}
        <div>
          <label htmlFor="cedula" className="block mb-2 text-sm font-medium text-gray-900">
            Cédula de Identidad
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              V-
            </span>
            <input
              type="text"
              name="cedula"
              id="cedula"
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
              required
              value={formData.cedula}
              onChange={handleChange}
              pattern="[0-9]*"
            />
          </div>
        </div>

        {/* Dirección */}
        <div>
          <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={formData.correo}
            onChange={handleChange}
          />
        </div>

        {/* Fecha */}
        <div>
          <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900">
            Fecha de Elaboración
          </label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900">
            Descripción de la Denuncia
          </label>
          <textarea
            name="descripcion"
            id="descripcion"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escriba aquí los detalles de su denuncia..."
            required
            value={formData.descripcion}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Generar Documento de Denuncia
        </button>
      </form>
    </div>
            </>

        ) : ( <>
        
            <DenunciaForm datos={formData} />
        
        </>)}
     
    
    </>
    
  );
};

export default FormOAC;