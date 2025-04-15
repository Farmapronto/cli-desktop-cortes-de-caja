// src/utils/fechas.js
export const ajustarFechaAlMediodia = (fechaStr) => {
    const fecha = new Date(fechaStr);
    fecha.setHours(12, 0, 0, 0); // Forzar hora 12:00 PM local
    return fecha.toISOString(); // Se guarda como UTC
  };

  export const prepararFechaParaGuardar = (fechaSeleccionada) => {
    return ajustarFechaAlMediodia(fechaSeleccionada);
  };

  // Función para convertir una fecha al formato DD/MM/YYYY
    export const formatearFechaDDMMYYYY = (fecha) => {
    const dia = String(fecha.getDate()).padStart(2, '0');    // Día con dos dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos (0-indexado)
    const anio = fecha.getFullYear();                         // Año completo
  
    return `${dia}-${mes}-${anio}`;
  };

  export const formatearISOaYYYYMMDD = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${anio}-${mes}-${dia}`;
  }
  

  export const obtenerRangoMesActual = () => {
    const today = new Date();
  
    // Día 1 del mes actual
    const primerDiaMes = new Date(today.getFullYear(), today.getMonth(), 1);
    // Último día del mes actual
    const ultimoDiaMes = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
    // Ajustamos ambas fechas a las 12:00 PM local
    const fechaInicio = ajustarFechaAlMediodia(primerDiaMes);
    const fechaFin = ajustarFechaAlMediodia(ultimoDiaMes);
  
    return { fechaInicio, fechaFin };
  };
  