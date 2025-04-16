<script setup>
import SideBar from '@/components/SideBar.vue';
import AppFooter from '@/components/dashboard/AppFooter.vue';

</script>

<template>
	<div class="flex h-screen bg-gray-50">
	  <SideBar />
	  <div class="flex-1 flex flex-col">
		<main class="flex-1 p-8 overflow-y-auto">
		  <router-view />
		</main>
		<AppFooter />
	  </div>
	</div>
  </template>
  