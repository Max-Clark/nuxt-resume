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

    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="category in data.categories" :key="category.name">
        <h3 class="font-semibold mb-3">
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="skill in category.skills" :key="skill">
            {{ skill }}
          </UBadge>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { ISkills } from "~/classes/ISkills";

defineProps<{
  data: ISkills;
}>();
</script>
