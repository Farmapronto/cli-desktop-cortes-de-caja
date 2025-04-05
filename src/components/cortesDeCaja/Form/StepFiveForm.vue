<template>
    <div class="space-y-4 text-center">
      <div class="alert alert-warning">
        <span>⚠️ ¡Revisa los datos antes de enviar!</span>
      </div>
  
      <!-- Mostrar los valores del formulario -->
      <div class="mt-4 space-y-2 text-left">
        <p><strong>Fecha:</strong> {{ formStore.corteActual.fecha }}</p>
        <p><strong>Cajero:</strong> {{ formStore.corteActual.cajero }}</p>
        <p><strong>Monto en efectivo:</strong> {{ formStore.corteActual.montos.efectivo }}</p>
        <p><strong>Monto en tarjeta:</strong> {{ formStore.corteActual.montos.tarjeta }}</p>
        <p><strong>Sobrante:</strong> {{ formStore.corteActual.corte.sobrante }}</p>
        <p><strong>Faltante:</strong> {{ formStore.corteActual.corte.faltante }}</p>
        <p><strong>Gasto farmacia:</strong> {{ formStore.corteActual.gastos.gastoFarmacia }}</p>
        <p><strong>Compras farmacia:</strong> {{ formStore.corteActual.gastos.comprasFarmacia }}</p>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '@/stores/formStore'
  
  const formStore = useFormStore()
  
  const submitForm = () => {
    // Aquí puedes acceder a todos los valores del formulario
    console.log('Datos del formulario:', formStore)
  
    // Aquí se podría enviar a un API o realizar cualquier otra acción
    alert('¡Reporte enviado! 🧾')
  }
  </script>
  