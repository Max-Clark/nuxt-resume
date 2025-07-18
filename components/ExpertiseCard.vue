<template>
  <UCard class="mb-8">
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-code-bracket" class="text-primary text-4xl" />
        <h2 class="text-2xl font-semibold">Expertise</h2>
      </div>
    </template>

    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="item in data" :key="item.title" class="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <UIcon :name="item.icon" :class="`text-4xl ${item.iconColor} mx-auto mb-3`" />
        <h3 class="text-lg font-semibold mb-2">
          {{ item.title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ item.content }}
        </p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { IExpertise } from "~/classes/IExpertise";

defineProps<{
  data: IExpertise[];
}>();
</script>
