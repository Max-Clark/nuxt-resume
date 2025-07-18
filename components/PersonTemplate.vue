<template>
  <div class="text-center mb-12">
    <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-6">
      {{ data.fullName }}
    </h1>
    <p class="text-2xl text-gray-600 dark:text-gray-300 mb-4" bi>
      {{ data.position }}
    </p>
    <div>
      <UButton
        v-if="data.email"
        icon="i-heroicons-envelope"
        color="primary"
        variant="ghost"
        :to="`mailto:${data.email}`"
        external
      >
        {{ data?.email }}
      </UButton>

      <UButton
        v-if="data.phone"
        icon="i-heroicons-phone"
        color="primary"
        variant="ghost"
        :to="`tel:${data.phone.replaceAll('-', '')}`"
        external
      >
        {{ data?.phone }}
      </UButton>

      <UButton
        v-if="data.linkedin"
        icon="i-simple-icons-linkedin"
        color="primary"
        variant="ghost"
        :href="data.linkedin"
        external
      >
        LinkedIn
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPerson } from "~/classes/IPerson";

defineProps<{
  data: IPerson;
}>();
</script>
