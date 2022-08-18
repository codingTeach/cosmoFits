import { defineStore } from "pinia";
import { ref } from "vue";

export const useFits = defineStore('store', () => {
    const fits = ref({})
    const saveFits = (fit: any) => {
        fits.value = fit
    }
    return {
        fits,
        saveFits,
    }
})