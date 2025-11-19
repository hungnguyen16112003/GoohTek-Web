const Header = () => {
  return (
    <header className="fixed top-0 w-full px-12 py-5 flex justify-between items-center bg-black/90 backdrop-blur-xl z-50 border-b border-white/5 animate-slideDown">
      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-pulse">
        GoohTek
      </div>
      <nav className="flex gap-8">
        {["Tính năng", "Giá cả", "Đội ngũ", "Liên hệ"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-indigo-400 transition-all hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500 after:transition-all after:-translate-x-1/2 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
