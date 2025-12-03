const Header = () => {
  return (
    <header className="fixed top-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-5 flex justify-between items-center bg-black/90 backdrop-blur-xl z-50 border-b border-white/5 animate-slideDown opacity-30 hover:opacity-100 transition-opacity duration-300">
      <div className="flex items-center">
        <img
          src="/logo_goohtek-removebg.png"
          alt="GoohTek Logo"
          className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
        />
      </div>
      <nav className="flex gap-4 sm:gap-6 md:gap-8">
        {[
          { name: "Tính năng", href: "#tính năng" },
          { name: "Dự án", href: "#dự-án" },
          { name: "Giá cả", href: "#giá cả" },
          { name: "Đội ngũ", href: "#đội ngũ" },
          { name: "Liên hệ", href: "#liên hệ" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="text-sm sm:text-base text-white hover:text-indigo-400 transition-all hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500 after:transition-all after:-translate-x-1/2 hover:after:w-full"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
