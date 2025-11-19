const FloatingContactButtons = () => {
  return (
    <div className="fixed left-4 bottom-10 flex flex-col gap-6 z-50">
      {/* Zalo */}
      <a
        href="https://zalo.me/84386905265"
        target="_blank"
        className="
          w-16 h-16 rounded-full flex items-center justify-center
          bg-blue-500  
          shadow-[0_0_40px_12px_rgba(59,130,246,0.9)]
          hover:shadow-[0_0_60px_20px_rgba(59,130,246,1)]
          hover:scale-110 
          animate-float
          transition-all duration-300
        "
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt="Zalo"
          className="w-9 h-9"
        />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/GooHTek"
        target="_blank"
        className="
          w-16 h-16 rounded-full flex items-center justify-center
          bg-blue-600  
          shadow-[0_0_40px_12px_rgba(37,99,235,0.9)]
          hover:shadow-[0_0_60px_20px_rgba(37,99,235,1)]
          hover:scale-110 
          animate-float
          transition-all duration-300
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.69V11.01h3.13V8.41c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.316h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
