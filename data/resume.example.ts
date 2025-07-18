/**
 * Tips:
 * 1. Copy this to `resume.ts` as a head start to development
 * 1. The only strictly required section is `person`
 * 2. Removing/adding/reordering items in `sections` will
 *    change the order on the page
 * 3. New items can be added easily, see the README.md
 * 4. `key` values must be unique with the resume
 */

import type { IResume } from "~/classes/IResumeSection";

export const resume: IResume = {
  person: {
    fullName: "Your Full Name",
    position: "Your Professional Title",
    email: "your.email@example.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  sections: [
    {
      id: "dialogue",
      key: "myoverview",
      data: {
        title: "Overview",
        icon: "i-heroicons-user",
        content:
          "Brief professional summary highlighting your years of experience, core competencies, and key areas of expertise. Include your passion for your field and notable achievements or focus areas that demonstrate your value and specialization.",
      },
    },
    {
      id: "expertise",
      key: "myexpertise",
      data: [
        {
          title: "Primary Expertise Area",
          icon: "i-heroicons-computer-desktop",
          iconColor: "text-blue-600",
          content: "Your main area of technical expertise and key skills",
        },
        {
          title: "Secondary Expertise Area",
          icon: "i-heroicons-cloud",
          iconColor: "text-purple-600",
          content: "Your secondary technical specialization and related technologies",
        },
        {
          title: "Additional Expertise Area",
          icon: "i-heroicons-cpu-chip",
          iconColor: "text-green-600",
          content: "Additional technical competencies and specialized knowledge",
        },
      ],
    },
    {
      id: "experience",
      key: "myexperience",
      data: [
        {
          title: "Current Position Title",
          company: "Your Current Company",
          period: "2022 - Present",
          borderColor: "border-blue-500",
          companyColor: "text-blue-600 dark:text-blue-400",
          achievements: [
            "Key achievement or responsibility from current role",
            "Another significant accomplishment or project",
            "Leadership or mentoring responsibilities",
            "Cross-functional collaboration or technical initiative",
          ],
        },
        {
          title: "Previous Position Title",
          company: "Previous Company",
          period: "2020 - 2022",
          borderColor: "border-green-500",
          companyColor: "text-green-600 dark:text-green-400",
          achievements: [
            "Primary technical responsibility or project",
            "Performance improvement or optimization achievement",
            "Technology implementation or integration work",
            "Process improvement or automation initiative",
          ],
        },
        {
          title: "Earlier Position Title",
          company: "Earlier Company",
          period: "2018 - 2020",
          borderColor: "border-purple-500",
          companyColor: "text-purple-600 dark:text-purple-400",
          achievements: [
            "Infrastructure or system design responsibility",
            "Platform or technology management experience",
            "Monitoring, logging, or operational improvements",
            "Cost reduction or efficiency improvement",
          ],
        },
      ],
    },
    {
      id: "skills",
      key: "myskills",
      data: {
        title: "Technical Skills",
        icon: "i-heroicons-wrench-screwdriver",
        categories: [
          {
            name: "Programming Languages",
            skills: ["Language 1", "Language 2", "Language 3", "Language 4", "Language 5", "Language 6"],
          },
          {
            name: "Frameworks & Tools",
            skills: ["Framework 1", "Framework 2", "Tool 1", "Tool 2", "Tool 3", "Tool 4"],
          },
          {
            name: "Specialized Technology Area",
            skills: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5", "Technology 6"],
          },
          {
            name: "Databases",
            skills: ["Database 1", "Database 2", "Database 3"],
          },
        ],
      },
    },
    {
      id: "education",
      key: "myeducation",
      data: [
        {
          degree: "Master of Science in Computer Engineering",
          institution: "Your University",
          period: "2016 - 2018",
          focus: "Focus: Your Specialization Area",
        },
        {
          degree: "Bachelor of Science in Electrical Engineering",
          institution: "Your Undergraduate Institution",
          period: "2012 - 2016",
          note: "Academic Distinction",
        },
      ],
    },
  ],
};
