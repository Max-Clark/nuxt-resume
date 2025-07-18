import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import EducationCard from "~/components/EducationCard.vue";
import type { IEducation } from "~/classes/IEducation";

describe("EducationCard", () => {
  const mockEducationData: IEducation[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2018-2022",
      focus: "Software Engineering",
      note: "Graduated Magna Cum Laude",
    },
    {
      degree: "Master of Science in Software Engineering",
      institution: "Tech University",
      period: "2022-2024",
      focus: "Machine Learning",
      note: "",
    },
  ];

  it("renders the Education header correctly", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    expect(wrapper.text()).toContain("Education");
  });

  it("renders all education items", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    expect(wrapper.text()).toContain("Bachelor of Science in Computer Science");
    expect(wrapper.text()).toContain("University of Technology");
    expect(wrapper.text()).toContain("2018-2022");

    expect(wrapper.text()).toContain("Master of Science in Software Engineering");
    expect(wrapper.text()).toContain("Tech University");
    expect(wrapper.text()).toContain("2022-2024");
  });

  it("renders focus areas when provided", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    expect(wrapper.text()).toContain("Software Engineering");
    expect(wrapper.text()).toContain("Machine Learning");
  });

  it("renders notes when provided", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    expect(wrapper.text()).toContain("Graduated Magna Cum Laude");
  });

  it("does not render empty notes", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    const noteElements = wrapper.findAll("p");
    const emptyNotes = noteElements.filter((el) => el.text().trim() === "");
    expect(emptyNotes.length).toBe(0);
  });

  it("renders empty state when no data is provided", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: [],
      },
    });

    expect(wrapper.text()).toContain("Education");
    expect(wrapper.findAll('[class*="space-y-4"] > div')).toHaveLength(0);
  });

  it("renders period badges correctly", async () => {
    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: mockEducationData,
      },
    });

    expect(wrapper.text()).toContain("2018-2022");
    expect(wrapper.text()).toContain("2022-2024");
  });

  it("handles missing focus field gracefully", async () => {
    const educationWithoutFocus: IEducation[] = [
      {
        degree: "Bachelor of Arts",
        institution: "Liberal Arts College",
        period: "2015-2019",
        focus: "",
        note: "Honor Roll",
      },
    ];

    const wrapper = await mountSuspended(EducationCard, {
      props: {
        data: educationWithoutFocus,
      },
    });

    expect(wrapper.text()).toContain("Bachelor of Arts");
    expect(wrapper.text()).toContain("Liberal Arts College");
    expect(wrapper.text()).toContain("Honor Roll");
  });
});
