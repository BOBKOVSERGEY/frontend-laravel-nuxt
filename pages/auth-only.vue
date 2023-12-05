<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['auth']
})
</script>
<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
