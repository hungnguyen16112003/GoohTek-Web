import { useState, useEffect } from "react";

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
          transform: isHovered ? "scale(1.05)" : "scale(1)"
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
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
        isHovered ? "opacity-30" : "opacity-100"
      }`} />
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất Cả", icon: "🌟" },
    { id: "hotel", name: "Khách Sạn", icon: "🏨" },
    { id: "restaurant", name: "Nhà Hàng", icon: "🍽️" },
    { id: "fashion", name: "Shop Quần Áo", icon: "👔" },
    { id: "cafe", name: "Café", icon: "☕" },
    { id: "spa", name: "Spa & Wellness", icon: "💆" },
    { id: "retail", name: "Bán Lẻ", icon: "🛍️" },
  ];

  const projects = {
    hotel: [
      {
        id: 1,
        title: "Khách Sạn Đà Nẵng 5 Sao",
        description: "Thiết kế khách sạn hiện đại với 200 phòng, hệ thống đặt phòng trực tuyến, quản lý toàn diện",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        features: ["Đặt phòng online", "Quản lý phòng", "Thanh toán tích hợp"],
        year: "2024",
        url: "https://www.booking.com",
      },
      {
        id: 2,
        title: "Resort Phú Quốc Premium",
        description: "Website resort cao cấp với booking system, gallery ảnh 360 độ, tích hợp thanh toán đa phương thức",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        features: ["Booking system", "Gallery 360°", "Multi-payment"],
        year: "2023",
        url: "https://www.agoda.com",
      },
      {
        id: 3,
        title: "Khách Sạn Boutique Hà Nội",
        description: "Website khách sạn boutique với thiết kế sang trọng, hệ thống review, tích hợp Google Maps",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        features: ["Review system", "Google Maps", "Multi-language"],
        year: "2023",
        url: "https://www.tripadvisor.com",
      },
      {
        id: 4,
        title: "Hotel Management System",
        description: "Hệ thống quản lý khách sạn toàn diện với dashboard admin, báo cáo thống kê, quản lý nhân viên",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        features: ["Admin dashboard", "Analytics", "Staff management"],
        year: "2024",
        url: "https://www.hotels.com",
      },
    ],
    restaurant: [
      {
        id: 1,
        title: "Nhà Hàng Hải Sản Sài Gòn",
        description: "Website nhà hàng với menu tương tác, đặt bàn online, tích hợp delivery, gallery món ăn",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        features: ["Đặt bàn online", "Menu tương tác", "Food delivery"],
        year: "2024",
        url: "https://www.opentable.com",
      },
      {
        id: 2,
        title: "Lẩu Nấm Hoàng Kim",
        description: "Website nhà hàng lẩu với hệ thống đặt món, thanh toán online, chương trình khách hàng thân thiết",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        features: ["Đặt món online", "Loyalty program", "Online payment"],
        year: "2023",
        url: "https://www.grab.com/vn/en/food",
      },
      {
        id: 3,
        title: "Fine Dining Restaurant",
        description: "Website nhà hàng cao cấp với reservation system, wine pairing menu, private dining booking",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        features: ["Reservation system", "Wine menu", "Private events"],
        year: "2023",
        url: "https://www.resy.com",
      },
      {
        id: 4,
        title: "Nhà Hàng Buffet Premium",
        description: "Website nhà hàng buffet với menu đa dạng, đặt bàn trực tuyến, hệ thống thanh toán tích hợp",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
        features: ["Buffet menu", "Online booking", "Payment integration"],
        year: "2024",
        url: "https://www.opentable.com",
      },
    ],
    fashion: [
      {
        id: 1,
        title: "Fashion Store Online",
        description: "E-commerce thời trang với catalog sản phẩm, filter tìm kiếm, giỏ hàng, thanh toán đa phương thức",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        features: ["Product catalog", "Advanced filters", "Shopping cart"],
        year: "2024",
        url: "https://www.zara.com",
      },
      {
        id: 2,
        title: "Boutique Clothing Shop",
        description: "Website shop quần áo với lookbook, size guide, wishlist, tích hợp Instagram feed",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        features: ["Lookbook", "Size guide", "Wishlist"],
        year: "2023",
        url: "https://www.asos.com",
      },
      {
        id: 3,
        title: "Streetwear Brand Store",
        description: "Website thương hiệu streetwear với collection showcase, limited edition drops, member area",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
        features: ["Collection showcase", "Limited drops", "Member area"],
        year: "2024",
        url: "https://www.supreme.com",
      },
      {
        id: 4,
        title: "Luxury Fashion E-commerce",
        description: "Website thời trang cao cấp với AR try-on, virtual stylist, personal shopping service",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
        features: ["AR try-on", "Virtual stylist", "Personal shopping"],
        year: "2024",
        url: "https://www.net-a-porter.com",
      },
    ],
    cafe: [
      {
        id: 1,
        title: "Quán Cafe Linh Đàm",
        description: "Website cafe với menu đồ uống, đặt hàng takeaway, tích hợp mạng xã hội, blog tin tức",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
        features: ["Takeaway order", "Social integration", "Blog system"],
        year: "2024",
        url: "https://www.starbucks.com",
      },
      {
        id: 2,
        title: "Specialty Coffee Shop",
        description: "Website cafe specialty với menu chi tiết, story về nguồn gốc cà phê, đặt hàng online, loyalty card",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
        features: ["Coffee menu", "Origin stories", "Loyalty program"],
        year: "2024",
        url: "https://www.bluebottlecoffee.com",
      },
      {
        id: 3,
        title: "Co-working Cafe Space",
        description: "Website cafe co-working với booking không gian, wifi info, event calendar, membership plans",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
        features: ["Space booking", "Event calendar", "Membership"],
        year: "2023",
        url: "https://www.we-work.com",
      },
    ],
    spa: [
      {
        id: 1,
        title: "Luxury Spa & Wellness",
        description: "Website spa cao cấp với booking dịch vụ, package deals, gift vouchers, treatment menu",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
        features: ["Service booking", "Package deals", "Gift vouchers"],
        year: "2024",
        url: "https://www.spafinder.com",
      },
      {
        id: 2,
        title: "Beauty Salon & Spa",
        description: "Website salon làm đẹp với portfolio, price list, đặt lịch, tích hợp social media",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        features: ["Portfolio", "Price list", "Social integration"],
        year: "2023",
        url: "https://www.booksy.com",
      },
    ],
    retail: [
      {
        id: 1,
        title: "Electronics Store",
        description: "Website cửa hàng điện tử với product comparison, reviews, warranty info, tech support",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        features: ["Product comparison", "Reviews", "Tech support"],
        year: "2024",
        url: "https://www.bestbuy.com",
      },
      {
        id: 2,
        title: "Home Decor Store",
        description: "Website nội thất với room planner, 3D visualization, inspiration gallery, consultation booking",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        features: ["Room planner", "3D visualization", "Consultation"],
        year: "2023",
        url: "https://www.ikea.com",
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
    <section id="dự-án" className="py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-indigo-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Dự Án Mẫu
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Khám phá các dự án đã được chúng tôi thực hiện trong nhiều lĩnh vực khác nhau
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105"
                  : "bg-white/5 backdrop-blur-xl text-gray-300 border border-white/10 hover:bg-white/10 hover:scale-105"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Website Preview */}
              <div className="relative h-64 overflow-hidden bg-black rounded-t-3xl">
                <WebsitePreview
                  image={project.image}
                  title={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold z-10">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔗 Live Preview
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-xl text-indigo-300 font-semibold hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 text-center"
                >
                  Xem Chi Tiết
                </a>
              </div>
            </div>
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

