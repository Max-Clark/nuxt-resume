<template>
  <UCard class="mb-10">
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-academic-cap" class="text-primary text-4xl" />
        <h2 class="text-2xl font-semibold">Education</h2>
      </div>
    </template>

    <div class="space-y-4">
      <div v-for="item in data" :key="item.degree">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-lg font-semibold">
              {{ item.degree }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ item.institution }}
            </p>
          </div>
          <UBadge color="neutral" variant="subtle">
            {{ item.period }}
          </UBadge>
        </div>
        <p v-if="item.focus" class="text-sm text-gray-600 dark:text-gray-400">
          {{ item.focus }}
        </p>
        <p v-if="item.note" class="text-sm text-gray-600 dark:text-gray-400">
          {{ item.note }}
        </p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { IEducation } from "~/classes/IEducation";

defineProps<{
  data: IEducation[];
}>();
</script>
