// stores/formStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('formStore', () => {
  const cortes = ref([])

  const corteActual = ref({
    fecha: '',
    cajero: '',
    montos: {
      efectivo: 0,
      tarjeta: 0
    },
    corte: {
      sobrante: 0,
      faltante: 0
    },
    gastos: {
      gastoFarmacia: 0,
      comprasFarmacia: 0
    }
  })

  const generarIdUnico = () => {
    return `corte_${Date.now()}_${Math.floor(Math.random() * 1000)}`
  }

  const obtenerFechaHoraActual = () => {
    return new Date().toISOString() // Ejemplo: "2025-04-04T22:31:00.000Z"
  }

  const enviarCorte = () => {
    const corteConMetadata = {
      ...corteActual.value,
      id: generarIdUnico(),
      generadoEn: obtenerFechaHoraActual()
    }

    cortes.value.push(corteConMetadata)
    resetCorteActual()
  }

  const resetCorteActual = () => {
    corteActual.value = {
      fecha: '',
      cajero: '',
      montos: {
        efectivo: 0,
        tarjeta: 0
      },
      corte: {
        sobrante: 0,
        faltante: 0
      },
      gastos: {
        gastoFarmacia: 0,
        conceptoGastoFarmacia: '',
        comprasFarmacia: 0,
        tipoCompraFarmacia: '',
      }
    }
  }

  return { cortes, corteActual, enviarCorte, resetCorteActual }
})
