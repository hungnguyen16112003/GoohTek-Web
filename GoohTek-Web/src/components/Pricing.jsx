const Pricing = () => {
  const plans = [
    {
      name: "Landing Page",
      price: "299K",
      description:
        "Website 1 trang giới thiệu sản phẩm/dịch vụ – tối ưu chuyển đổi.",
      features: [
        "1 Trang Landing Page chuẩn Marketing",
        "Thiết kế hiện đại, đẹp mắt",
        "Tối ưu tốc độ tải trang",
        "Chuẩn SEO cơ bản",
        "Responsive: Mobile + Tablet + PC",
        "Form liên hệ / Form báo giá",
        "Tích hợp Zalo / Messenger",
        "Bảo hành 1 năm",
      ],
      delivery: "1–2 ngày",
    },

    {
      name: "Website Cơ Bản",
      price: "2.9M",
      description:
        "Website 3–5 trang dành cho doanh nghiệp nhỏ hoặc nhu cầu giới thiệu cơ bản.",
      features: [
        "3–5 Trang chuyên nghiệp",
        "Thiết kế UI/UX hiện đại",
        "Chuẩn SEO Onpage",
        "Tối ưu tốc độ",
        "Tích hợp bản đồ Google",
        "Tích hợp mạng xã hội",
        "Form gửi email",
        "SSL miễn phí",
        "Bảo hành 1 năm",
      ],
      delivery: "2–4 ngày",
    },

    {
      name: "Website Doanh Nghiệp",
      price: "4.9M",
      description:
        "Website tiêu chuẩn dành cho doanh nghiệp vừa – đầy đủ thông tin, thương hiệu và trải nghiệm tốt.",
      features: [
        "5–10 Trang nội dung",
        "Thiết kế theo nhận diện thương hiệu",
        "SEO Onpage nâng cao",
        "Tối ưu hình ảnh & tốc độ",
        "Tích hợp chat Zalo/Facebook",
        "Cài Google Analytics + Search Console",
        "Hosting + Domain (tuỳ chọn)",
        "Bảo hành 1 năm",
      ],
      delivery: "4–7 ngày",
    },

    {
      name: "Website Dịch Vụ",
      price: "6.9M",
      description:
        "Phù hợp cho Spa – Phòng khám – Salon – Nha Khoa… có chức năng đặt lịch & tư vấn.",
      features: [
        "7–12 Trang nội dung",
        "Form đặt lịch chuyên nghiệp",
        "Lịch hẹn (Calendar)",
        "SEO mạnh các từ khóa dịch vụ",
        "Bảo mật SSL nâng cao",
        "Thiết kế độc quyền",
        "Tối ưu chuyển đổi khách hàng",
        "Bảo hành 1 năm",
      ],
      delivery: "5–10 ngày",
    },

    {
      name: "Website Bán Hàng",
      price: "7.9M",
      description:
        "Hệ thống bán hàng online với giỏ hàng – quản lý sản phẩm – thanh toán.",
      features: [
        "Quản lý sản phẩm",
        "Giỏ hàng + Thanh toán",
        "Quản lý đơn hàng",
        "Tích hợp vận chuyển",
        "Bộ lọc sản phẩm",
        "SEO sản phẩm mạnh",
        "Trang chi tiết đẹp – chuyên nghiệp",
        "Bảo hành 1 năm",
      ],
      delivery: "7–14 ngày",
    },

    {
      name: "Website Cao Cấp",
      price: "8.9M",
      featured: true,
      description:
        "Website cao cấp – đa ngôn ngữ – hiệu suất cực cao – chuẩn thương hiệu doanh nghiệp lớn.",
      features: [
        "Thiết kế cao cấp độc quyền",
        "Đa ngôn ngữ (Việt – Anh – Trung…)",
        "Tích hợp thanh toán online",
        "Blog + nhiều landing page",
        "Bảo mật cao cấp",
        "SEO nâng cao + Schema",
        "Trang tốc độ > 90 (Google Speed)",
        "Hosting + Domain cao cấp",
        "Bảo hành 1 năm",
      ],
      delivery: "10–20 ngày",
    },
  ];

  return (
    <section id="giá cả" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto w-full">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
        Bảng Giá Linh Hoạt
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl border text-center hover:-translate-y-5 hover:scale-105 transition-all ${
              plan.featured
                ? "border-indigo-500/60 bg-gradient-to-br from-indigo-500/15 to-purple-500/15  shadow-2xl shadow-purple-500/40"
                : "border-white/10"
            }`}
          >
            {plan.featured && (
              <span className="absolute top-2 right-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold animate-pulse">
                PHỔ BIẾN
              </span>
            )}

            <h3 className="text-3xl font-bold mb-6 text-white">{plan.name}</h3>
            <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              {plan.price}
            </div>
            <p className="text-gray-500 mb-8">/ trọn gói</p>

            <ul className="text-left mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-gray-400 border-b border-white/5 pb-3 hover:text-white hover:pl-2 transition-all"
                >
                  <span className="text-indigo-400 font-bold mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:scale-105 transition-all">
              Chọn Gói
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
