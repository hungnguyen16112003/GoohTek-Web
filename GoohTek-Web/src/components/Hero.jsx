const Hero = () => {
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
    </section>
  );
};

export default Hero;
