const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-5 md:px-8 lg:px-12 pt-32 overflow-hidden">
      {/* Background Video Vũ Trụ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/11/21/98569-649310877_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay để text dễ đọc */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-fadeIn relative z-10">
          Tương Lai Trong Tầm Tay
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 animate-fadeIn animation-delay-300 relative z-10 px-4">
          Goohtek - Biến ý tưởng của bạn thành hiện thực.
        </p>

        <a
          href="#"
          className="relative z-10 inline-block px-10 sm:px-12 md:px-16 py-4 md:py-5 bg-gradient-to-r from-indigo-500 to-purple-600 !text-white rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:scale-105 transition-all animate-fadeIn animation-delay-600"
        >
          Khám Phá Ngay
        </a>
      </div>
    </section>
  );
};

export default Hero;
