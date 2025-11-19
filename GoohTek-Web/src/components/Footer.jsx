const Footer = () => {
  return (
    <footer className="px-12 py-24 bg-black/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            GoohTek
          </h3>
          <p className="text-gray-400 leading-relaxed mb-5">
            Nền tảng công nghệ hàng đầu, mang đến giải pháp sáng tạo và hiệu quả
            cho doanh nghiệp của bạn.
          </p>
          <div className="flex gap-4">
            {["📘", "🐦", "📸", "💼"].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-1 hover:rotate-12 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                {icon}
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
        <p>© 2024 NexGen. Made with 💜 in Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
