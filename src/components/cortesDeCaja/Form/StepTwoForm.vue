<template>
    <div class="space-y-4">
      <div>
        <label class="label"><span class="label-text">Ventas Netas ($)</span></label>
        <input
          type="number"
          min="0"
          class="input input-bordered p-2 w-full"
          v-model="formStore.corteActual.montos.efectivo"
          placeholder="0.00"
        />
      </div>
  
      <div>
        <label class="label"><span class="label-text">Cobros con Tarjeta ($)</span></label>
        <input
          type="number"
          min="0"
          class="input input-bordered w-full"
          v-model="formStore.corteActual.montos.tarjeta"
          placeholder="0.00"
        />
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '@/stores/formStore'
  const formStore = useFormStore()
  </script>
  