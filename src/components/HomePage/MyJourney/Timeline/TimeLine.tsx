import TimelineItem from './TimelineItem';

export default function Timeline() {
  return (
    <ol className="border-s border-neutral-300 dark:border-neutral-500">
      <TimelineItem
        date={'01.01.2015'}
        title="Started Bachelor of Commerce at Monash University"
        description="In 2015, after graduating from high school, I began my Bachelor of Commerce at Monash University. This marked the start of a journey that would eventually lead me to discover my passion for software development."
      />

      <TimelineItem
        date={'01.12.2019'}
        title="Completed Commerce Degree and Started Work at Commonwealth Bank"
        description="Throughout my time at Monash University, I developed a strong interest in coding and technology. However, feeling committed to my degree in commerce, I began working at Commonwealth Bank to pursue a career in finance."
      />

      <TimelineItem
        date={'01.02.2022'}
        title="Started Diploma of Web Development at Le Wagon"
        description="While working at Commonwealth Bank, I learned to code in my free time. Realising my passion for coding was unwavering, I decided to pursue a career in technology by joining the 2022 Le Wagon Full Stack Web Development course for structured learning."
      />

      <TimelineItem
        date={'02.11.2022'}
        title="First Job as a Junior Full Stack Developer at Xplor"
        description="After completing the Le Wagon course, I landed my first job as a Junior Full Stack Developer at Xplor. Twelve months later, I was promoted to Mid-Level Developer. I am excited to continue learning and growing as a developer, contributing to the creation of high-quality products."
      />
    </ol>
  );
}
