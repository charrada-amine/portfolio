const ProjectCard = ({ project }) => {
  const isDark = project.color === 'dark';

  return (
    <div
      className={`group relative flex flex-col justify-between p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-h-[280px] ${
        isDark
          ? 'bg-[#1a1a1a] text-[#f7f3ee]'
          : 'bg-[#e8632a] text-[#f7f3ee]'
      }`}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-6">
        <span
          className={`font-sans text-xs tracking-[0.15em] uppercase ${
            isDark ? 'text-[#f7f3ee]/40' : 'text-[#f7f3ee]/70'
          }`}
        >
          {project.number} — {project.year}
        </span>
        <span
          className={`w-9 h-9 rounded-full border flex items-center justify-center font-sans text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
            isDark
              ? 'border-[#f7f3ee]/25 text-[#f7f3ee]'
              : 'border-[#f7f3ee]/50 text-[#f7f3ee]'
          }`}
        >
          →
        </span>
      </div>

      {/* Name */}
      <h3 className="font-serif text-2xl md:text-3xl mb-5 leading-tight">
        {project.name}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className={`font-sans text-xs px-3 py-1 rounded-full border ${
              isDark
                ? 'border-[#f7f3ee]/20 text-[#f7f3ee]/55'
                : 'border-[#f7f3ee]/40 text-[#f7f3ee]/80'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        className={`font-sans text-sm leading-relaxed ${
          isDark ? 'text-[#f7f3ee]/55' : 'text-[#f7f3ee]/80'
        }`}
      >
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
