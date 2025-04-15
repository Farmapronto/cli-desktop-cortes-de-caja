// stores/formStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { crearCorte } from '@/services/cortes.services.js'
import { prepararFechaParaGuardar } from '@/utils/fechas';


export const useFormStore = defineStore('formStore', () => {
  const cortes = ref([])

  // Puedes obtener estos valores desde login o algún otro store según tu flujo
  const userId = ref('6c370f57-fa6e-4ce3-8686-dd8fc7352407')
  const branchId = ref('86bd6d81-ee0d-4f63-b661-c058093e590a')

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
    },
    movimientos: {
      retiroTarjeta: 0,
      depositoTarjeta: 0
    }
  })

  const generarIdUnico = () => {
    return `corte_${Date.now()}_${Math.floor(Math.random() * 1000)}`
  }

  
  const enviarCorte = async () => {
    const fechaForm = corteActual.value.fecha;
    const corteFinal = {
      userId: userId.value,
      branchId: branchId.value,
      fecha: fechaForm,
      cajero: corteActual.value.cajero,
      efectivo: corteActual.value.montos.efectivo,
      tarjeta: corteActual.value.montos.tarjeta,
      gastoFarmacia: corteActual.value.gastos.gastoFarmacia,
      conceptoGastoFarmacia: corteActual.value.gastos.conceptoGastoFarmacia,
      compraFarmacia: corteActual.value.gastos.comprasFarmacia,
      tipoCompraFarmacia: corteActual.value.gastos.tipoCompraFarmacia,
      sobrante: corteActual.value.corte.sobrante,
      faltante: corteActual.value.corte.faltante,
      retiroTarjeta: corteActual.value.movimientos.retiroTarjeta
      //totalPorCajero: (corteActual.value.montos.efectivo + corteActual.value.montos.tarjeta + corteActual.value.corte.sobrante) - (corteActual.value.corte.faltante + corteActual.value.gastos.gastoFarmacia + corteActual.value.gastos.comprasFarmacia)
    }
  
    try {
      console.log('Payload a enviar:', corteFinal)
      await crearCorte(corteFinal)
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
