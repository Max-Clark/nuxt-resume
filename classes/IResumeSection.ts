import type { IEducation } from "./IEducation";
import type { IExperience } from "./IExperience";
import type { IExpertise } from "./IExpertise";
import type { IDialogue } from "./IDialogue";
import type { IPerson } from "./IPerson";
import type { ISkills } from "./ISkills";

export type IResume = {
  person: IPerson;
  sections: IResumeSection[];
};

// If adding a custom component, add it here with a unique id
export type IResumeSection =
  | {
      id: "dialogue";
      key: string;
      data: IDialogue;
    }
  | {
      id: "expertise";
      key: string;
      data: IExpertise[];
    }
  | {
      id: "experience";
      key: string;
      data: IExperience[];
    }
  | {
      id: "skills";
      key: string;
      data: ISkills;
    }
  | {
      id: "education";
      key: string;
      data: IEducation[];
    };
