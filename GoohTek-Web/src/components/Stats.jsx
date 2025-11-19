const Stats = () => {
  const stats = [
    { number: "1M+", label: "Người dùng" },
    { number: "99%", label: "Hài lòng" },
    { number: "500K+", label: "Dự án" },
    { number: "24/7", label: "Hỗ trợ" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-12 py-32 max-w-7xl mx-auto">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="text-center p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
            {stat.number}
          </div>
          <div className="text-gray-400 text-xl">{stat.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
