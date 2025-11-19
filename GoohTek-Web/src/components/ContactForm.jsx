import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${formData.name}! Chúng tôi sẽ liên hệ với bạn sớm nhất.`);
    setFormData({ name: "", phone: "", email: "", message: "" });
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
          className="w-full px-12 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-lg font-bold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:-translate-y-1 transition-all"
        >
          Gửi Thông Tin
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
