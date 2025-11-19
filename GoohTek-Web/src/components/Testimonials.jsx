const Testimonials = () => {
  const testimonials = [
    {
      text: "Sản phẩm tuyệt vời! Animation mượt mà, giao diện đẹp. Tôi đã giới thiệu cho rất nhiều bạn bè sử dụng.",
      author: "Nguyễn Văn A",
      role: "CEO - Tech Corp",
      avatar: "👨",
    },
    {
      text: "Chưa bao giờ tôi thấy một trang web nào có animation đẹp và mượt mà như vậy. Đúng là đáng đồng tiền bát gạo!",
      author: "Trần Thị B",
      role: "Designer - Creative Agency",
      avatar: "👩",
    },
    {
      text: "Đội ngũ hỗ trợ nhiệt tình, sản phẩm chất lượng. Tôi rất hài lòng và sẽ tiếp tục sử dụng lâu dài.",
      author: "Lê Văn C",
      role: "Developer - StartUp XYZ",
      avatar: "👨",
    },
  ];

  return (
    <section className="px-12 py-32 max-w-7xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
        Khách Hàng Nói Gì
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:scale-105 hover:-rotate-2 hover:shadow-2xl hover:shadow-purple-500/40 transition-all"
          >
            <div className="absolute top-5 left-8 text-8xl text-indigo-500/20 font-serif">
              "
            </div>
            <p className="text-gray-400 leading-loose mb-6 relative z-10">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-3xl animate-pulse">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="text-white font-bold">{testimonial.author}</h4>
                <p className="text-indigo-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
