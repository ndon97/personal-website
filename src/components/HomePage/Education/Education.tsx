import EducationTab from './EducationTab';

export default function Education() {
  return (
    <div className="mt-10 flex h-auto w-full flex-col px-4 sm:px-10 lg:mt-0 lg:h-[100dvh]">
      <div className="mb-auto mt-auto">
        <h1 className="mb-8 text-center text-3xl font-medium text-teal-600 sm:text-4xl">
          Education
        </h1>
        <ol>
          <EducationTab
            title="Le Wagon"
            degree="Diploma of Web Development"
            description="During my Web Development Diploma at Le Wagon, I learned the fundamental principles of web development. I gained hands-on experience in building responsive and user-friendly websites, refined my problem-solving skills, and developed best practices for writing clean and efficient code. This education provided me with a strong foundation to tackle real-world web development challenges."
          />
          <EducationTab
            title="Monash University"
            degree="Bachelor Of Commerce -  Major in Economics"
            description="During my Bachelor of Commerce degree with a major in Economics at Monash University, I developed a strong analytical mindset and a deep understanding of market dynamics and financial principles. This background has been invaluable in my web development career, as it enhances my ability to create data-driven applications and understand user needs from a business perspective. The skills I acquired in critical thinking, quantitative analysis, and problem-solving have directly contributed to my ability to develop effective, user-centric web solutions."
          />
          <EducationTab title="Salesian College" degree="VCE" />
        </ol>
      </div>
    </div>
  );
}
