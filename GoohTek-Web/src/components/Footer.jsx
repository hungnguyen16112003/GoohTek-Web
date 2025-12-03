import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/GooHTek" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
  ];

  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-black/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 w-full">
        <div>
          <div className="mb-6">
            <img
              src="/logo_goohtek-removebg.png"
              alt="GoohTek Logo"
              className="h-20 w-auto"
            />
          </div>
          <p className="text-gray-400 leading-relaxed mb-5">
            Nền tảng công nghệ hàng đầu, mang đến giải pháp sáng tạo và hiệu quả
            cho doanh nghiệp của bạn.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-1 hover:rotate-12 hover:shadow-lg hover:shadow-indigo-500/50 transition-all text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Sản Phẩm",
            links: ["Tính năng", "Giá cả", "Case Study", "Reviews", "Updates"],
          },
          {
            title: "Công Ty",
            links: ["Về chúng tôi", "Đội ngũ", "Tuyển dụng", "Blog", "Liên hệ"],
          },
          {
            title: "Hỗ Trợ",
            links: [
              "Trung tâm trợ giúp",
              "Tài liệu API",
              "Cộng đồng",
              "Điều khoản",
              "Chính sách",
            ],
          },
        ].map((column, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 hover:pl-2 transition-all inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center pt-12 border-t border-white/10 text-gray-600">
        <p>© 2024 GoohTek. Made with 💜 in Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
