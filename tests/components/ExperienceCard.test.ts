import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ExperienceCard from "~/components/ExperienceCard.vue";
import type { IExperience } from "~/classes/IExperience";

describe("ExperienceCard", () => {
  const mockExperienceData: IExperience[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022-2024",
      borderColor: "border-blue-500",
      companyColor: "text-blue-600",
      achievements: [
        "Led development of microservices architecture",
        "Improved application performance by 40%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Software Engineer",
      company: "StartupCo",
      period: "2020-2022",
      borderColor: "border-green-500",
      companyColor: "text-green-600",
      achievements: ["Built REST APIs using Node.js", "Implemented CI/CD pipelines"],
    },
  ];

  it("renders the Experience header correctly", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    expect(wrapper.text()).toContain("Experience");
  });

  it("renders all experience items", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    expect(wrapper.text()).toContain("Senior Software Engineer");
    expect(wrapper.text()).toContain("Tech Corp");
    expect(wrapper.text()).toContain("2022-2024");

    expect(wrapper.text()).toContain("Software Engineer");
    expect(wrapper.text()).toContain("StartupCo");
    expect(wrapper.text()).toContain("2020-2022");
  });

  it("renders all achievements for each experience", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    expect(wrapper.text()).toContain("Led development of microservices architecture");
    expect(wrapper.text()).toContain("Improved application performance by 40%");
    expect(wrapper.text()).toContain("Mentored junior developers");
    expect(wrapper.text()).toContain("Built REST APIs using Node.js");
    expect(wrapper.text()).toContain("Implemented CI/CD pipelines");
  });

  it("applies correct border colors", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    const borderElements = wrapper.findAll(".border-l-4");
    expect(borderElements[0].classes()).toContain("border-blue-500");
    expect(borderElements[1].classes()).toContain("border-green-500");
  });

  it("applies correct company colors", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    const companyElements = wrapper.findAll(".text-blue-600, .text-green-600");
    expect(companyElements.length).toBeGreaterThan(0);
  });

  it("renders empty state when no data is provided", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: [],
      },
    });

    expect(wrapper.text()).toContain("Experience");
    expect(wrapper.findAll(".border-l-4")).toHaveLength(0);
  });

  it("renders period badges correctly", async () => {
    const wrapper = await mountSuspended(ExperienceCard, {
      props: {
        data: mockExperienceData,
      },
    });

    expect(wrapper.text()).toContain("2022-2024");
    expect(wrapper.text()).toContain("2020-2022");
  });
});
