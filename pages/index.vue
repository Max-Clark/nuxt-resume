<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!--
        Hey! Hey you! If you're reading this, thanks for putting in the effort
     to peek at my source code. Here's trogdor as a reward:
                                                 :::
                                             :: :::.
                       \/,                    .:::::
           \),          \`-._                 :::888
           /\            \   `-.             ::88888
          /  \            | .(                ::88
         /,.  \           ; ( `              .:8888
            ), \         / ;``               :::888
           /_   \     __/_(_                  :88
             `. ,`..-'      `-._    \  /      :8
               )__ `.           `._ .\/.
              /   `. `             `-._______m         _,
  ,-=====-.-;'                 ,  ___________/ _,-_,'"`/__,-.
 C   =--   ;                   `.`._    V V V       -=-'"#==-._
:,  \     ,|      UuUu _,......__   `-.__A_A_ -. ._ ,--._ ",`` `-
||  |`---' :    uUuUu,'          `'--...____/   `" `".   `
|`  :       \   UuUu:
:  /         \   UuUu`-._
 \(_          `._  uUuUu `-.
 (_3             `._  uUu   `._
                    ``-._      `.
                         `-._    `.
                             `.    \
                               )   ;
                              /   /
               `.        |\ ,'   /
                 ",_A_/\-| `   ,'
                   `--..,_|_,-'\
                          |     \
                          |      \__
                          |__
    -->
    <UContainer class="py-8">
      <PersonContainer :data="resume.person" />
      <template v-for="section in resume.sections" :key="section.key">
        <!-- Custom components need to be added here -->
        <DialogueCard v-if="section.id === 'dialogue'" :data="section.data" />
        <ExpertiseCard v-else-if="section.id === 'expertise'" :data="section.data" />
        <ExperienceCard v-else-if="section.id === 'experience'" :data="section.data" />
        <SkillsCard v-else-if="section.id === 'skills'" :data="section.data" />
        <EducationCard v-else-if="section.id === 'education'" :data="section.data" />
      </template>

      <div class="text-center py-8 text-gray-600 dark:text-gray-400">
        <p>© 2025 Max Clark. Built from open source software with ❤️</p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Note: This file is .gitignored. Use data/resume.example.ts as a template.
import { resume } from "~/data/resume";

import PersonContainer from "~/components/PersonTemplate.vue";
import DialogueCard from "~/components/DialogueCard.vue";
import ExpertiseCard from "~/components/ExpertiseCard.vue";
import ExperienceCard from "~/components/ExperienceCard.vue";
import SkillsCard from "~/components/SkillsCard.vue";
import EducationCard from "~/components/EducationCard.vue";

useHead({
  title: `${resume.person.fullName} - ${resume.person.position}`,
});
</script>
