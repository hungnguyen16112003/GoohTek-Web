const Hero = () => {
  const cards = [
    {
      icon: "✨",
      title: "Siêu Mượt Mà",
      desc: "Animation 60fps, mượt như lụa",
    },
    { icon: "🎯", title: "Chuẩn Xác", desc: "Hiệu ứng tối ưu hoàn hảo" },
    { icon: "💫", title: "Ấn Tượng", desc: "Thu hút mọi ánh nhìn" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-indigo-900/20 animate-gradient" />

      <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-fadeIn relative z-10">
        Tương Lai Trong Tầm Tay
      </h1>

      <p className="text-2xl text-gray-400 mb-12 animate-fadeIn animation-delay-300 relative z-10">
        Goohtek - biến ý tưởng của bạn thành hiện thực.
      </p>

      <a
        href="#"
        className="relative z-10  px-16 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 !text-white rounded-full text-xl font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:scale-105 transition-all animate-fadeIn animation-delay-600"
      >
        Khám Phá Ngay
      </a>

      <div className="flex flex-wrap justify-center gap-8 mt-20 relative z-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-72 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all animate-float"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {card.icon} {card.title}
            </h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
