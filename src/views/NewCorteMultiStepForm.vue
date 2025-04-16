<template>
  <div class="max-w-3xl mx-auto space-y-6">

	<!-- Encabezado general -->
	<div class="flex justify-between items-center px-6 py-4">
	  <img
		src="@/assets/farmapronto-logo.png"
		alt="Farmapronto"
		class="h-10 object-contain"
	  />
	  <DateWidget />
	</div>

	<!-- Card del formulario -->
	<div class="p-6 bg-white rounded-2xl shadow-xl space-y-6">
	  
	  <!-- Barra de progreso -->
	  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
		<div
		  class="bg-[#009fe3] h-2.5 rounded-full transition-all duration-300"
		  :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
		></div>
	  </div>

	  <Toast :show="showToast" :message="toastMessage" />

	  <!-- Títulos de pasos -->
	  <div class="flex justify-between text-sm text-gray-600 mb-4">
		<div
		  v-for="(step, index) in steps"
		  :key="index"
		  class="flex flex-col items-center"
		>
		  <div
			class="rounded-full p-2 mb-1"
			:class="{
			  'bg-[#009fe3] text-white': index === currentStep,
			  'bg-gray-300': index !== currentStep
			}"
		  >
			<component :is="step.icon" class="w-5 h-5" />
		  </div>
		  <span :class="{ 'text-[#009fe3] font-semibold': index === currentStep }">
			{{ step.label }}
		  </span>
		</div>
	  </div>

	  <!-- Contenido dinámico -->
	  <transition name="fade" mode="out-in">
		<component :is="steps[currentStep].component" :key="currentStep" />
	  </transition>

	  <!-- Botones -->
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
		  Confirmar y Enviar ✅
		</button>
	  </div>

	</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Calendar, CreditCard, DollarSign, ShoppingBag, AlertTriangle } from 'lucide-vue-next'
import { crearCorte } from '@/services/cortes.services'

// Componentes por etapa
import StepOne from '@/components/cortesDeCaja/Form/StepOneForm.vue'
import StepTwo from '@/components/cortesDeCaja/Form/StepTwoForm.vue'
import StepThree from '@/components/cortesDeCaja/Form/StepThreeForm.vue'
import StepFour from '@/components/cortesDeCaja/Form/StepFourForm.vue'
import StepFive from '@/components/cortesDeCaja/Form/StepFiveForm.vue'
import DateWidget from '../components/dashboard/DateWidget.vue'

import Toast from '@/components/Toast.vue'
import { useFormStore } from '@/stores/formStore'

const currentStep = ref(0)
const router = useRouter()
const formStore = useFormStore()

const steps = [
  { label: 'Turno', component: StepOne, icon: Calendar },
  { label: 'Montos', component: StepTwo, icon: CreditCard },
  { label: 'Corte', component: StepThree, icon: DollarSign },
  { label: 'Gastos', component: StepFour, icon: ShoppingBag },
  { label: 'Confirmar', component: StepFive, icon: AlertTriangle }
]

const showToast = ref(false)
const toastMessage = ref('')

const submitForm = async () => {
  try {
	console.log('📦 Datos antes de enviar:', formStore.corteActual)
	await formStore.enviarCorte()
	toastMessage.value = '🎉 Reporte enviado exitosamente!'
	showToast.value = true
	setTimeout(() => router.push('/'), 1000)
  } catch (error) {
	console.error('❌ Error al enviar el reporte:', error)
	toastMessage.value = '❌ Ocurrió un error al enviar el reporte.'
	showToast.value = true
  }
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
