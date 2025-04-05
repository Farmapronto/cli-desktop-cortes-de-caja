<script setup>
import SideBar from '@/components/SideBar.vue';
</script>

<template>
	<div class="flex h-screen bg-gray-50">
		<SideBar />

		<div class="flex-1 p-8">
			<router-view />
		</div>
	</div>
</template>
