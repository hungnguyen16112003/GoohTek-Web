// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu khi click hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Ngăn scroll khi menu mở
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Đóng menu khi click overlay
navOverlay.addEventListener("click", () => {
  closeMenu();
});

// Đóng menu khi click vào link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Function đóng menu
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Đóng menu khi resize màn hình về desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Smooth scroll cho navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Thêm hiệu ứng khi scroll
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Thêm shadow khi scroll
  if (currentScroll > 10) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Animation khi element vào viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Áp dụng animation cho các elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .pricing-card, .contact-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Form validation và submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  const submitBtn = contactForm.querySelector(".btn-primary");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const phoneInput = contactForm.querySelectorAll('input[type="text"]')[1];
    const messageInput = contactForm.querySelector("textarea");

    // Validate
    let isValid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, "Vui lòng nhập họ tên");
      isValid = false;
    }

    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      showError(emailInput, "Vui lòng nhập email hợp lệ");
      isValid = false;
    }

    if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
      showError(phoneInput, "Vui lòng nhập số điện thoại hợp lệ");
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, "Vui lòng nhập nội dung tin nhắn");
      isValid = false;
    }

    if (isValid) {
      // Hiển thị thông báo thành công
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");

      // Reset form
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      messageInput.value = "";
    }
  });
}

// Helper functions
function showError(input, message) {
  input.style.borderColor = "#ff6b6b";

  // Tạo hoặc update error message
  let errorDiv = input.nextElementSibling;
  if (!errorDiv || !errorDiv.classList.contains("error-message")) {
    errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.style.color = "#ff6b6b";
    errorDiv.style.fontSize = "0.85rem";
    errorDiv.style.marginTop = "-0.5rem";
    errorDiv.style.marginBottom = "0.5rem";
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }
  errorDiv.textContent = message;

  // Xóa error khi user bắt đầu nhập
  input.addEventListener(
    "input",
    () => {
      input.style.borderColor = "#e0e0e0";
      if (errorDiv) errorDiv.remove();
    },
    { once: true }
  );
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^[0-9]{10,11}$/;
  return re.test(phone.replace(/\s/g, ""));
}

// Thêm loading state cho buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (
      this.classList.contains("btn-primary") ||
      this.classList.contains("btn-outline")
    ) {
      const originalText = this.textContent;

      // Không áp dụng cho submit button
      if (this.textContent !== "Gửi tin nhắn") {
        return;
      }
    }
  });
});

// Console log để kiểm tra
console.log("Website loaded successfully! 🚀");
console.log("Responsive menu is active");
console.log("Smooth scrolling is enabled");
console.log("Form validation is ready");
