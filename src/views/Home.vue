<template>
    <div class="flex h-screen bg-gray-50">
        <!-- Sidebar -->
        <SideBar />

        <!-- Main Content -->
        <div class="flex-1 p-8">
            <!-- Topbar -->
            <div class="flex justify-between items-center mb-8">
                <!-- <h1 class="text-3xl font-semibold text-dark">Farmapronto</h1> -->
                <img src="@/assets/farmapronto-logo.png" alt="">
                <div class="flex items-center space-x-4">

                    <div class="relative">
                        <button class="rounded-full p-2 hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Main Cards -->
            <MainCards />

        </div>
    </div>
</template>

<script>

import ButtonsCortesDeCaja from '@/components/dashboard/ButtonsCortesDeCaja.vue';
import SideBar from '@/components/SideBar.vue';
import MainCards from '@/components/dashboard/MainCards.vue';

export default {

        components: {
            ButtonsCortesDeCaja,
            SideBar,
            MainCards
        }
    };
</script>

<style scoped>
    /* Transitions for smooth opening/closing of the sidebar */
    .transition-all {
        transition: all 0.3s ease;
    }

    .md\\:hidden {
        display: none;
    }

    /* Enhance accessibility */
    button:focus {
        outline: none;
    }
</style>
