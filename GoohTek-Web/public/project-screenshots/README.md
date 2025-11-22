# Hướng Dẫn Tạo Screenshots Cho Projects

## Cách 1: Sử dụng Browser Extension (Dễ nhất)

1. Cài đặt extension "Full Page Screen Capture" hoặc "Awesome Screenshot" trên Chrome/Firefox
2. Mở từng trang web trong danh sách projects
3. Chụp screenshot toàn trang
4. Lưu với tên file theo format: `domain-name.webp` (ví dụ: `booking-com.webp`)
5. Đặt vào thư mục này: `public/project-screenshots/`

## Cách 2: Sử dụng Online Tools

1. Truy cập: https://www.screenshot.rocks/ hoặc https://screenshot.guru/
2. Nhập URL của trang web
3. Chọn kích thước: 800x600 hoặc 1024x768
4. Download ảnh
5. Đổi tên theo format và đặt vào thư mục

## Cách 3: Sử dụng Command Line (Puppeteer)

```bash
npm install -g puppeteer-cli
puppeteer screenshot https://www.booking.com --output public/project-screenshots/booking-com.webp --width 800 --height 600
```

## Danh sách URLs cần chụp:

### Khách Sạn:
- booking.com → booking-com.webp
- agoda.com → agoda-com.webp
- tripadvisor.com → tripadvisor-com.webp
- hotels.com → hotels-com.webp

### Nhà Hàng:
- opentable.com → opentable-com.webp
- grab.com/vn/en/food → grab-com.webp
- starbucks.com → starbucks-com.webp
- resy.com → resy-com.webp

### Shop Quần Áo:
- zara.com → zara-com.webp
- asos.com → asos-com.webp
- supreme.com → supreme-com.webp
- net-a-porter.com → net-a-porter-com.webp

### Phòng Khám:
- zocdoc.com → zocdoc-com.webp
- 1stdental.com → 1stdental-com.webp
- childrenshospital.org → childrenshospital-org.webp
- aad.org → aad-org.webp

### Café:
- bluebottlecoffee.com → bluebottlecoffee-com.webp
- we-work.com → we-work-com.webp

### Spa:
- spafinder.com → spafinder-com.webp
- booksy.com → booksy-com.webp

### Bán Lẻ:
- bestbuy.com → bestbuy-com.webp
- ikea.com → ikea-com.webp

## Lưu ý:
- Format ảnh: WebP (khuyến nghị) hoặc PNG
- Kích thước: 800x600 hoặc 1024x768
- Chất lượng: Tốt nhất có thể
- Tên file: Chỉ dùng chữ thường, dấu gạch ngang, không có khoảng trắng

