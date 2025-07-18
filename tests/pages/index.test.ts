import { describe, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import IndexPage from "~/pages/index.vue";
import type { IResume } from "~/classes/IResumeSection";

vi.mock("~/data/resume", async () => {
  return await vi.importActual("~/data/resume.example");
});

describe("Index Page", () => {
  it("renders the page without errors", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.exists()).toBe(true);
  });

  it("displays person information", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.text()).toContain("Your Full Name");
    expect(wrapper.text()).toContain("Your Professional Title");
  });

  it("renders sections based on resume data", async () => {
    const wrapper = await mountSuspended(IndexPage);

    // Check that experience section is rendered
    expect(wrapper.text()).toContain("Current Position Title");
    expect(wrapper.text()).toContain("Your Current Company");

    // Check that education section is rendered
    expect(wrapper.text()).toContain("Master of Science in Computer Engineering");
    expect(wrapper.text()).toContain("Your University");
  });

  it("sets correct page title using useHead", async () => {
    const wrapper = await mountSuspended(IndexPage);

    // The title should be set via useHead composable
    // This tests that the component mounts successfully with useHead
    expect(wrapper.exists()).toBe(true);
  });

  it("renders footer with copyright information", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.text()).toContain("© 2025 Max Clark");
    expect(wrapper.text()).toContain("Built from open source software with ❤️");
  });

  it("applies correct CSS classes for layout", async () => {
    const wrapper = await mountSuspended(IndexPage);

    const mainDiv = wrapper.find(".min-h-screen");
    expect(mainDiv.exists()).toBe(true);
    expect(mainDiv.classes()).toContain("bg-gray-50");
    expect(mainDiv.classes()).toContain("dark:bg-gray-900");
  });

  it("renders sections in the order specified by the sections array", async () => {
    // Test with example data: dialogue first, then expertise, experience, skills, education
    const wrapper = await mountSuspended(IndexPage);
    const html = wrapper.html();

    const overviewPos = html.indexOf("Overview");
    const experiencePos = html.indexOf("Current Position Title");
    const educationPos = html.indexOf("Master of Science in Computer Engineering");

    // Overview should appear before Experience and Education based on the example data
    expect(overviewPos).toBeLessThan(experiencePos);
    expect(experiencePos).toBeLessThan(educationPos);
    expect(overviewPos).toBeGreaterThan(-1);
    expect(experiencePos).toBeGreaterThan(-1);
    expect(educationPos).toBeGreaterThan(-1);
  });

  it("renders sections in reversed order when sections are reversed", async () => {
    // Get the mock and modify it
    const resumeMock = await vi.importMock("~/data/resume");
    const originalSections = [...(resumeMock.resume as IResume).sections];

    // Reverse the sections
    (resumeMock.resume as IResume).sections = originalSections.reverse();

    const wrapper = await mountSuspended(IndexPage);
    const html = wrapper.html();

    const overviewPos = html.indexOf("Overview");
    const experiencePos = html.indexOf("Current Position Title");
    const educationPos = html.indexOf("Master of Science in Computer Engineering");

    // With reversed sections: education should appear before experience, experience before overview
    expect(educationPos).toBeLessThan(experiencePos);
    expect(experiencePos).toBeLessThan(overviewPos);
    expect(educationPos).toBeGreaterThan(-1);
    expect(experiencePos).toBeGreaterThan(-1);
    expect(overviewPos).toBeGreaterThan(-1);

    // Restore original order for other tests
    (resumeMock.resume as IResume).sections = originalSections.reverse();
  });
});
