export interface ISkillCategory {
  name: string;
  skills: string[];
}

export interface ISkills {
  title: string;
  icon: string;
  categories: ISkillCategory[];
}
