const skills = [
  'Spring Boot', 'NestJS', 'Next.js', 'React', 'Docker',
  'AWS', 'Go', 'Python', 'TypeScript', 'MongoDB',
  'SwiftUI', 'Kotlin', 'Flutter', 'PostgreSQL', 'Linux',
  'React Native', 'FastAPI', 'Microservices', 'CI/CD', 'Arduino',
];

const MarqueeBanner = () => {
  const doubled = [...skills, ...skills];

  return (
    <div className="overflow-hidden bg-[#1a1a1a] py-5 select-none">
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-6 font-sans text-xs tracking-[0.2em] uppercase text-[#f7f3ee]"
          >
            {skill}
            <span className="ml-6 text-[#e8632a] text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
