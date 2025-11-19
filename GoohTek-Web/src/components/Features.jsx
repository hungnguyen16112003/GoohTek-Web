const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "Tốc Độ Ánh Sáng",
      desc: "Hiệu suất vượt trội với animation được tối ưu hóa, load nhanh chóng như chớp",
    },
    {
      icon: "💎",
      title: "Design Sang Trọng",
      desc: "Giao diện hiện đại với glassmorphism và gradient đỉnh cao, thu hút mọi ánh nhìn",
    },
    {
      icon: "🎨",
      title: "Màu Sắc Rực Rỡ",
      desc: "Bảng màu gradient chuyên nghiệp, tạo điểm nhấn hoàn hảo cho nội dung của bạn",
    },
    {
      icon: "⚡",
      title: "Hiệu Suất Cao",
      desc: "Tối ưu hóa tối đa để mang lại trải nghiệm mượt mà nhất cho người dùng",
    },
    {
      icon: "🔒",
      title: "Bảo Mật Tuyệt Đối",
      desc: "Hệ thống bảo mật đa lớp, đảm bảo an toàn cho dữ liệu của bạn",
    },
    {
      icon: "🌐",
      title: "Đa Nền Tảng",
      desc: "Hoạt động mượt mà trên mọi thiết bị và trình duyệt hiện đại",
    },
  ];

  return (
    <section
      id="tính năng"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 py-32 max-w-7xl mx-auto"
    >
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:-translate-y-6 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all group"
        >
          <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {feature.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
