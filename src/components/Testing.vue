<template>
<Slider v-model="value" />
<ColorPicker></ColorPicker>

</template>

<script setup lang="ts">
import { ref } from 'vue'

import Slider  from 'primevue/colorpicker';


const value = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
