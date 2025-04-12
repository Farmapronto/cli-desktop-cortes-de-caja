<template>
  <div class="space-y-6">
    <!-- Fecha -->
    <div
      class="flex flex-col gap-2 cursor-pointer"
      @click="focusFecha"
    >
      <label for="fecha" class="text-sm font-medium text-gray-700">
        Fecha del corte
      </label>
      <input
        id="fecha"
        ref="fechaInput"
        type="date"
        v-model="formStore.corteActual.fecha"
        class="input input-bordered w-full focus:input-primary transition-all"
      />
    </div>

    <!-- Cajero -->
    <div class="flex flex-col gap-2">
      <label for="cajero" class="text-sm font-medium text-gray-700">
        Selecciona el cajero
      </label>
      <select
        id="cajero"
        v-model="formStore.corteActual.cajero"
        class="select select-bordered w-full focus:select-primary transition-all"
      >
        <option disabled value="">-- Selecciona un cajero --</option>
        <option :value="1">Cajero 1</option>
        <option :value="2">Cajero 2</option>
        <option :value="3">Cajero 3</option>
        <option :value="4">Cajero 4</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()
const fechaInput = ref(null)

const focusFecha = () => {
  if (fechaInput.value?.showPicker) {
    fechaInput.value.showPicker()
  } else {
    fechaInput.value.focus()
  }
}
</script>
