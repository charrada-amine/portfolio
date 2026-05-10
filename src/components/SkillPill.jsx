const SkillPill = ({ skill }) => (
  <span className="inline-block font-sans text-sm px-4 py-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] cursor-default transition-all duration-200 hover:bg-[#e8632a] hover:text-[#f7f3ee] hover:border-[#e8632a] hover:scale-105">
    {skill}
  </span>
);

export default SkillPill;
