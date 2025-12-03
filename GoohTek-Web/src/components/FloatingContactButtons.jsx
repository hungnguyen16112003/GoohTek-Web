import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

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
        <SiZalo className="w-9 h-9 text-white" />
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
        <FaFacebook className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
