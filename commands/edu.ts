import config from '../src/config.json' assert { type: 'json' };

const createEducation = (): string[] => {
  const education: string[] = [];
  education.push("<br>");
  education.push("### Education");
  
  // Loop through the education array in the config file
  config.education.forEach((item: string) => {
    education.push(`- ${item}`);
  });

  education.push("<br>");
  return education;
}

export const EDUCATION = createEducation();