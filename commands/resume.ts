import command from '../src/config.json' assert {type: 'json'};

const createResume = (): string[] => {
  const resume: string[] = [];
  resume.push("<br>");
  resume.push(`You can view my resume <a href='${command.resumeLink}' target='_blank'>here</a>.`);
  resume.push("<br>");
  return resume;
}

export const RESUME = createResume();