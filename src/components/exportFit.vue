<script setup lang="ts" >
import { ref } from 'vue';
import { useFits } from "../store/store";

let image = ref<string>('')
const handleChange = () => {
    image.value = useFits().imageBase64
    image.value = ("data:image/jpeg;base64," + image.value);
    return image.value
}




</script>

<template>
        <a @click="handleChange" :href="image" download="">Download</a>
</template>