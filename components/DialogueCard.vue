<template>
  <UCard class="mb-8">
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon :name="data.icon" class="text-primary text-4xl" />
        <h2 class="text-2xl font-semibold">
          {{ data.title }}
        </h2>
      </div>
    </template>

    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      {{ data.content }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
import type { IDialogue } from "~/classes/IDialogue";

defineProps<{
  data: IDialogue;
}>();
</script>
