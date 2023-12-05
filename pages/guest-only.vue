<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['guest']
})
</script>

<template>
  <div>
    Page: foo ddd
  </div>
</template>

<style scoped></style>
