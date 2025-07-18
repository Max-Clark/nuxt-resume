import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PersonTemplate from "~/components/PersonTemplate.vue";
import type { IPerson } from "~/classes/IPerson";

describe("PersonTemplate", () => {
  const mockPersonData: IPerson = {
    fullName: "John Doe",
    position: "Software Engineer",
    email: "john@example.com",
    phone: "123-456-7890",
    linkedin: "https://linkedin.com/in/johndoe",
  };

  it("renders person information correctly", async () => {
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: mockPersonData,
      },
    });

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("Software Engineer");
    expect(wrapper.text()).toContain("john@example.com");
    expect(wrapper.text()).toContain("123-456-7890");
    expect(wrapper.text()).toContain("LinkedIn");
  });

  it("renders email button with correct mailto link", async () => {
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: mockPersonData,
      },
    });

    const emailButton = wrapper.find('[href="mailto:john@example.com"]');
    expect(emailButton.exists()).toBe(true);
  });

  it("renders phone button with correct tel link", async () => {
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: mockPersonData,
      },
    });

    const phoneButton = wrapper.find('[href="tel:1234567890"]');
    expect(phoneButton.exists()).toBe(true);
  });

  it("renders LinkedIn button with correct href", async () => {
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: mockPersonData,
      },
    });

    const linkedinButton = wrapper.find('[href="https://linkedin.com/in/johndoe"]');
    expect(linkedinButton.exists()).toBe(true);
  });

  it("does not render email button when email is not provided", async () => {
    const personWithoutEmail = { ...mockPersonData, email: "" };
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: personWithoutEmail,
      },
    });

    const emailButton = wrapper.find('button[href^="mailto:"]');
    expect(emailButton.exists()).toBe(false);
  });

  it("does not render phone button when phone is not provided", async () => {
    const personWithoutPhone = { ...mockPersonData, phone: "" };
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: personWithoutPhone,
      },
    });

    const phoneButton = wrapper.find('button[href^="tel:"]');
    expect(phoneButton.exists()).toBe(false);
  });

  it("does not render LinkedIn button when linkedin is not provided", async () => {
    const personWithoutLinkedin = { ...mockPersonData, linkedin: "" };
    const wrapper = await mountSuspended(PersonTemplate, {
      props: {
        data: personWithoutLinkedin,
      },
    });

    const linkedinButton = wrapper.find('button[href^="https://linkedin.com"]');
    expect(linkedinButton.exists()).toBe(false);
  });
});
