// stores/formStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { crearCorte } from '@/services/cortes.services.js'

export const useFormStore = defineStore('formStore', () => {
  const cortes = ref([])

  // Puedes obtener estos valores desde login o algún otro store según tu flujo
  const userId = ref('c176c99b-8356-4691-b87e-7f55cce28c86')
  const branchId = ref('2b748144-a8dc-4d72-a5a9-f84c6e93e82e')

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
      conceptoGastoFarmacia: '',
      comprasFarmacia: 0,
      tipoCompraFarmacia: ''
    }
  })

  const generarIdUnico = () => {
    return `corte_${Date.now()}_${Math.floor(Math.random() * 1000)}`
  }

  const obtenerFechaHoraActual = () => {
    return new Date().toISOString()
  }

  const enviarCorte = async () => {
    const corteFinal = {
      userId: userId.value,
      branchId: branchId.value,
      fecha: obtenerFechaHoraActual(),
      cajero: corteActual.value.cajero,
      efectivo: corteActual.value.montos.efectivo,
      tarjeta: corteActual.value.montos.tarjeta,
      gastoFarmacia: corteActual.value.gastos.gastoFarmacia,
      compraFarmacia: corteActual.value.gastos.comprasFarmacia,
      sobrante: corteActual.value.corte.sobrante,
      faltante: corteActual.value.corte.faltante
    }

    try {
      await crearCorte(corteFinal) // Petición real al backend
      cortes.value.push(corteFinal)
      resetCorteActual()
    } catch (err) {
      console.error('Error al enviar corte:', err)
    }
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
        tipoCompraFarmacia: ''
      }
    }
  }

  return {
    cortes,
    corteActual,
    userId,
    branchId,
    enviarCorte,
    resetCorteActual
  }
})
