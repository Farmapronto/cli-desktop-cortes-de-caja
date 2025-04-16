<script setup>
import { DocumentTextIcon, EyeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
		<!-- Generar Corte -->
		<router-link to="/newcorte" class="group">
			<div
				class="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg 
				group-hover:shadow-2xl transition-all duration-300 cursor-pointer transform group-hover:scale-105 
				flex flex-col items-center text-center"
			>
				<DocumentTextIcon class="w-14 h-14 mb-4 transition-transform duration-300 group-hover:rotate-6" />
				<h3 class="text-lg font-semibold">Generar Corte</h3>
				<p class="text-sm text-white/90 mt-2">Inicia el cierre de tu turno con un nuevo corte.</p>
			</div>
		</router-link>

		<!-- Ver Corte por Cajero -->
		<router-link to="/cortes" class="group">
			<div
				class="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg 
				group-hover:shadow-2xl transition-all duration-300 cursor-pointer transform group-hover:scale-105 
				flex flex-col items-center text-center"
			>
				<EyeIcon class="w-14 h-14 mb-4 transition-transform duration-300 group-hover:rotate-6" />
				<h3 class="text-lg font-semibold">Ver Corte por Cajero</h3>
				<p class="text-sm text-white/90 mt-2">Consulta los cortes individuales realizados.</p>
			</div>
		</router-link>

		<!-- Ver Corte a Detalle -->
		<router-link to="/cortedetallado" class="group">
			<div
				class="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-lg 
				group-hover:shadow-2xl transition-all duration-300 cursor-pointer transform group-hover:scale-105 
				flex flex-col items-center text-center"
			>
				<MagnifyingGlassIcon class="w-14 h-14 mb-4 transition-transform duration-300 group-hover:rotate-6" />
				<h3 class="text-lg font-semibold">Ver Corte a Detalle</h3>
				<p class="text-sm text-white/90 mt-2">Desglosa cada transacción con claridad y precisión.</p>
			</div>
		</router-link>
	</div>
</template>
