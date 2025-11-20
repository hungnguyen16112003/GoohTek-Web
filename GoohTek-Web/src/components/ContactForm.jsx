import { useState } from "react";
import Toast from "./Toast";
import LoadingSpinner from "./LoadingSpinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Lấy URL từ biến môi trường
      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptURL || scriptURL === "YOUR_GOOGLE_SCRIPT_URL") {
        throw new Error(
          "Google Script URL chưa được cấu hình. Vui lòng cấu hình biến môi trường VITE_GOOGLE_SCRIPT_URL."
        );
      }

      // Gửi dữ liệu với mode no-cors để tránh CORS error
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Quan trọng: no-cors để tránh CORS error trên Vercel
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toLocaleString("vi-VN"),
        }),
      });

      // Với no-cors, không thể đọc response nhưng request vẫn được gửi
      setToast({
        message: `🎉 Cảm ơn ${formData.name}! Chúng tôi sẽ liên hệ với bạn sớm nhất.`,
        type: "success",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setToast({
        message: `❌ ${
          error.message || "Có lỗi xảy ra. Vui lòng thử lại sau."
        }`,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="liên hệ" className="px-12 py-32 max-w-3xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Liên Hệ Với Chúng Tôi
      </h2>
      <p className="text-xl text-gray-400 mb-10">
        Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Họ và tên *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all"
          />
          <input
            type="tel"
            placeholder="Số điện thoại *"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all"
          />
        </div>

        <input
          type="email"
          placeholder="Email của bạn *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all"
        />

        <textarea
          placeholder="Tin nhắn của bạn..."
          rows="5"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-12 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-lg font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <LoadingSpinner size="sm" />
              <span className="animate-pulse">Đang gửi...</span>
            </span>
          ) : (
            <span className="relative z-10">Gửi Thông Tin</span>
          )}
          {isSubmitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 animate-shimmer" />
          )}
        </button>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={5000}
        />
      )}
    </section>
  );
};

export default ContactForm;
