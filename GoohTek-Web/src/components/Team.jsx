const Team = () => {
  const team = [
    {
      name: "Nguyễn Minh A",
      role: "CEO & Founder",
      desc: "10+ năm kinh nghiệm trong lĩnh vực công nghệ và quản lý dự án",
      avatar: "👨‍💼",
    },
    {
      name: "Trần Thị B",
      role: "Lead Designer",
      desc: "Chuyên gia UI/UX với nhiều giải thưởng quốc tế về design",
      avatar: "👩‍💻",
    },
    {
      name: "Lê Văn C",
      role: "Tech Lead",
      desc: "Full-stack developer với kinh nghiệm xây dựng hệ thống lớn",
      avatar: "👨‍💻",
    },
    {
      name: "Phạm Thị D",
      role: "Creative Director",
      desc: "Đam mê sáng tạo và tạo ra những trải nghiệm độc đáo",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <section id="đội ngũ" className="px-12 py-32 max-w-7xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
        Đội Ngũ Chuyên Nghiệp
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-center hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all group"
          >
            <div className="w-36 h-36 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-indigo-500/40">
              {member.avatar}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              {member.name}
            </h3>
            <p className="text-indigo-400 font-semibold mb-4">{member.role}</p>
            <p className="text-gray-400 leading-relaxed text-sm">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
