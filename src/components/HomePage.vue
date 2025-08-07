<template>
  <div class="wedding-navbar">
    <Menubar :model="items" class="justify-content-end">
      <template #start>
        <div class="brand-title">James &amp; Melanie.<br /><small>Tie the knot!</small></div>
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { label: "Our Story", to: "/story" },
  { label: "Wedding Details", to: "/details" },
  { label: "Dress Code", to: "/dress-code" },
  { label: "Gifts Registry", to: "/registry" },
  { label: "Engagement", to: "/engagement" },
  { label: "RSVP", to: "/rsvp" },
]);
</script>

<style scoped>
.wedding-navbar .p-menubar {
  justify-content: flex-end;
}
.brand-title {
  color: var(--color-babys-breath-700);
  font-size: 1.1rem;
  line-height: 1.2;
}
</style>
