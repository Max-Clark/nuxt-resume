<template>
  <UCard class="mb-8">
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-briefcase" class="text-primary text-4xl" />
        <h2 class="text-2xl font-semibold">Experience</h2>
      </div>
    </template>

    <div class="space-y-6">
      <div v-for="item in data" :key="item.title" :class="`border-l-4 ${item.borderColor} pl-4`">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-lg font-semibold">
              {{ item.title }}
            </h3>
            <p :class="`${item.companyColor}`">
              {{ item.company }}
            </p>
          </div>
          <UBadge color="neutral" variant="soft">
            {{ item.period }}
          </UBadge>
        </div>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li v-for="achievement in item.achievements" :key="achievement">• {{ achievement }}</li>
        </ul>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { IExperience } from "~/classes/IExperience";

defineProps<{
  data: IExperience[];
}>();
</script>
