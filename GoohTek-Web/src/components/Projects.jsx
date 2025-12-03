import { useState } from "react";
import { FaHotel, FaStar, FaTshirt } from "react-icons/fa";

const WebsitePreview = ({ image, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="relative h-64 overflow-hidden bg-black group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={`${title} - Preview`}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          display: isLoading ? "none" : "block",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500 mx-auto mb-2"></div>
            <p className="text-xs text-gray-400">Đang tải ảnh...</p>
          </div>
        </div>
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "opacity-100"
        }`}
      />
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất Cả", icon: <FaStar /> },
    { id: "hotel", name: "Khách Sạn", icon: <FaHotel /> },
    { id: "fashion", name: "Thời Trang", icon: <FaTshirt /> },
  ];

  const projects = {
    hotel: [
      {
        id: 1,
        title: "Hotel Demo 2",
        description:
          "Website khách sạn hiện đại với hệ thống đặt phòng trực tuyến, gallery ảnh đẹp, responsive design",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        features: ["Đặt phòng online", "Gallery", "Responsive"],
        year: "2024",
        price: "1.900.000",
        url: "https://hotel-demo-2.vercel.app/",
      },
      {
        id: 2,
        title: "Demo Hotel Wine",
        description:
          "Website khách sạn cao cấp với thiết kế sang trọng, booking system, tích hợp thanh toán",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        features: ["Booking system", "Luxury design", "Payment gateway"],
        year: "2024",
        price: "1.900.000",
        url: "https://demo-hotel-wine.vercel.app/",
      },
    ],
    fashion: [
      {
        id: 1,
        title: "Vulcano - Thời Trang Nam",
        description:
          "Website bán thời trang nam cao cấp với catalog sản phẩm đa dạng, giỏ hàng, thanh toán online",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        features: ["E-commerce", "Product catalog", "Shopping cart"],
        year: "2024",
        price: "2.900.000",
        url: "https://vulcano.vn/",
      },
      {
        id: 2,
        title: "YA Trend - Fashion Store",
        description:
          "Website shop thời trang hiện đại với bộ lọc sản phẩm, wishlist, tích hợp thanh toán đa phương thức",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        features: ["Modern design", "Product filters", "Multi-payment"],
        year: "2024",
        price: "2.700.000",
        url: "https://yatrend.online/",
      },
    ],
  };

  const getAllProjects = () => {
    return Object.values(projects).flat();
  };

  const getFilteredProjects = () => {
    if (activeCategory === "all") {
      return getAllProjects();
    }
    return projects[activeCategory] || [];
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section
      id="dự-án"
      className="pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-indigo-900/10" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Dự Án Mẫu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Khám phá các dự án đã được chúng tôi thực hiện trong nhiều lĩnh vực
            khác nhau
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105"
                  : "bg-white/5 backdrop-blur-xl text-gray-300 border border-white/10 hover:bg-white/10 hover:scale-105"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {filteredProjects.map((project, idx) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer block"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Website Preview */}
              <div className="relative h-64 overflow-hidden bg-black rounded-t-3xl">
                <WebsitePreview image={project.image} title={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm px-4 py-2 text-white rounded-full text-sm font-semibold z-10">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔗 Click để xem
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  {project.price && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg whitespace-nowrap">
                      {project.price} VNĐ
                    </div>
                  )}
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">
              Chưa có dự án nào trong danh mục này
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
