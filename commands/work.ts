import config from '../src/config.json' assert { type: 'json' };

const createWorkExperience = (): string[] => {
  const workExperience: string[] = [];
  workExperience.push("<br>");
  workExperience.push("### Work Experience");

  // Loop through the workExperience array in the config file
  config.workExperience.forEach((item: any) => {
    workExperience.push(`<div class="title">**${item.title}**</div>`);
    workExperience.push(`<div class="company">${item.company}</div>`);
    workExperience.push(`<div class="duration">${item.duration}</div>`);
    item.responsibilities.forEach((responsibility: string) => {
      workExperience.push(`  - ${responsibility}`);
    });
    workExperience.push("<br>"); // Add space between work experiences
  });

  workExperience.push("<br>");
  return workExperience;
}

export const WORK_EXPERIENCE = createWorkExperience();