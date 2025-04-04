<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6">
      <!-- Barra de progreso -->
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          class="bg-[#009fe3] h-2.5 rounded-full transition-all duration-300"
          :style="{ width: `${(currentStep / steps.length) * 100}%` }"
        ></div>
      </div>
  
      <!-- Títulos de pasos -->
      <div class="flex justify-between text-sm text-gray-600 mb-6">
        <span v-for="(step, index) in steps" :key="index" :class="{ 'text-[#009fe3] font-semibold': index === currentStep }">
          {{ step.label }}
        </span>
      </div>
  
      <!-- Contenido del formulario -->
      <div>
        <component :is="steps[currentStep].component" />
      </div>
  
      <!-- Botones de navegación -->
      <div class="flex justify-between pt-4">
        <button
          v-if="currentStep > 0"
          @click="currentStep--"
          class="btn btn-outline btn-sm"
        >
          ← Anterior
        </button>
        <div class="flex-grow"></div>
        <button
          v-if="currentStep < steps.length - 1"
          @click="currentStep++"
          class="btn btn-primary btn-sm bg-[#00c292] border-none"
        >
          Siguiente →
        </button>
        <button
          v-else
          @click="submitForm"
          class="btn btn-success btn-sm bg-[#009fe3] border-none"
        >
          Enviar ✅
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Importa tus componentes individuales por paso
  import StepOne from '@/components/cortesDeCaja/Form/StepOneForm.vue'
  import StepTwo from '@/components/cortesDeCaja/Form/StepTwoForm.vue'
  import StepThree from '@/components/cortesDeCaja/Form/StepThreeForm.vue'
  import StepFour from '@/components/cortesDeCaja/Form/StepFourForm.vue'

  const currentStep = ref(0)
  
  const steps = [
    { label: 'Datos Personales', component: StepOne },
    { label: 'Dirección', component: StepTwo },
    { label: 'Método de Pago', component: StepThree },
    { label: 'Confirmación', component: StepFour }
  ]
  
  const submitForm = () => {
    alert('Formulario enviado ✨')
  }
  </script>
  