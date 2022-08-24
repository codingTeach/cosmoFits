import { defineStore } from "pinia";
import { ref } from "vue";

export const useFits = defineStore('store', () => {
    const fits = ref({})
    const imageBase64 = ref<string>('')
    const saveFits = (fit: any) => {
        fits.value = fit
    }

    return {
        fits,
        imageBase64,
        saveFits,
    }
})