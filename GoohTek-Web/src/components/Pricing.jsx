const Pricing = () => {
  const plans = [
    {
      name: "Landing Page",
      price: "399K",
      features: [
        "1 Trang Landing Page",
        "Thiết kế hiện đại",
        "Chuẩn SEO cơ bản",
        "Tối ưu mobile",
        "Form liên hệ",
        "Bảo hành 1 năm",
      ],
    },
    {
      name: "Website Cơ Bản",
      price: "1.5M",
      features: [
        "3–5 Trang",
        "Giao diện đẹp, chuyên nghiệp",
        "Chuẩn SEO",
        "Tích hợp mạng xã hội",
        "Hosting + tên miền (tuỳ chọn)",
        "Bảo hành 1 năm",
      ],
    },
    {
      name: "Website Doanh Nghiệp",
      price: "2.9M",
      features: [
        "5–10 Trang",
        "Thiết kế theo nhận diện thương hiệu",
        "SEO Onpage",
        "Tối ưu tốc độ",
        "Trang liên hệ + bản đồ",
        "Bảo hành 1 năm",
      ],
    },
    {
      name: "Website Dịch Vụ",
      price: "3.9M",
      features: [
        "7–12 Trang",
        "Đặt lịch hẹn",
        "Tối ưu SEO mạnh",
        "Bảo mật SSL",
        "Thiết kế độc quyền",
        "Bảo hành 1 năm",
      ],
    },
    {
      name: "Website Bán Hàng",
      price: "5.9M",
      features: [
        "Quản lý sản phẩm",
        "Giỏ hàng + Thanh toán",
        "Quản lý đơn hàng",
        "Tích hợp vận chuyển",
        "Tối ưu SEO từ khóa niche",
        "Bảo hành 1 năm",
      ],
    },
    {
      name: "Website Cao Cấp",
      price: "7.9M",
      features: [
        "Thiết kế cao cấp độc quyền",
        "Đa ngôn ngữ",
        "Tích hợp thanh toán online",
        "Trang blog + landing đa dạng",
        "Bảo mật nâng cao",
        "Bảo hành 1 năm",
      ],
      featured: true,
    },
  ];

  return (
    <section id="giá cả" className="px-12 py-32 max-w-7xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
        Bảng Giá Linh Hoạt
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
