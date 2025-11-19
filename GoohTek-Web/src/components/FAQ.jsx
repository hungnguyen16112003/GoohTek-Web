import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Thời gian hoàn thành dự án là bao lâu?",
      a: "Thời gian hoàn thành phụ thuộc vào quy mô dự án. Thông thường một landing page đơn giản mất 1-2 tuần, trong khi các dự án lớn hơn có thể mất 1-3 tháng.",
    },
    {
      q: "Chi phí cho một dự án như thế nào?",
      a: "Chi phí được tính dựa trên độ phức tạp, tính năng và thời gian phát triển. Chúng tôi cung cấp báo giá minh bạch sau khi trao đổi yêu cầu chi tiết.",
    },
    {
      q: "Có hỗ trợ sau khi dự án hoàn thành không?",
      a: "Có! Chúng tôi cung cấp gói bảo hành và hỗ trợ kỹ thuật trong 3-6 tháng đầu. Sau đó bạn có thể gia hạn gói hỗ trợ theo nhu cầu.",
    },
    {
      q: "Website có responsive trên mobile không?",
      a: "Tất nhiên rồi! Mọi dự án của chúng tôi đều được thiết kế responsive, hoạt động mượt mà trên mọi thiết bị từ desktop, tablet đến mobile.",
    },
  ];

  return (
    <section className="px-12 py-32 max-w-4xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
        Câu Hỏi Thường Gặp
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            <div
              className="p-8 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-all"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <h3 className="text-xl font-semibold text-white">{faq.q}</h3>
              <span
                className={`text-4xl text-indigo-400 transition-transform ${
                  activeIndex === idx ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all ${
                activeIndex === idx ? "max-h-96 p-8 pt-0" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
