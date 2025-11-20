# Hướng Dẫn Deploy Lên Vercel và Cấu Hình Biến Môi Trường

## Vấn đề khi deploy lên Vercel

Khi deploy lên Vercel, form không gửi được dữ liệu thường do:
1. **Biến môi trường chưa được cấu hình** trên Vercel
2. **CORS issues** với Google Apps Script
3. **URL không được load đúng** trong production

## Giải pháp

### Bước 1: Cấu hình Biến Môi Trường trên Vercel

1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào **Settings** → **Environment Variables**
4. Thêm biến môi trường mới:
   - **Name**: `VITE_GOOGLE_SCRIPT_URL`
   - **Value**: URL Google Apps Script của bạn
     ```
     https://script.google.com/macros/s/AKfycbyjCh4CDXNU77q4h1TgEyspd-kVElYXySPmwqKJP13OEGPP3iEBpnvVC-TTQA2SbzQ5ag/exec
     ```
   - **Environment**: Chọn tất cả (Production, Preview, Development)
5. Click **Save**

### Bước 2: Redeploy Project

Sau khi thêm biến môi trường:
1. Vào tab **Deployments**
2. Click vào 3 chấm (⋯) của deployment mới nhất
3. Chọn **Redeploy**
4. Hoặc push code mới lên Git để trigger auto-deploy

### Bước 3: Kiểm tra Google Apps Script

Đảm bảo Google Apps Script đã được cấu hình đúng:

1. **Deploy với quyền "Anyone"**:
   - Vào Google Apps Script
   - Deploy → Manage deployments
   - Chọn deployment → Edit
   - Đảm bảo "Execute as" là "Me" và "Who has access" là "Anyone"

2. **Kiểm tra hàm doPost**:
   - Đảm bảo code có hàm `doPost(e)` (không phải `doGet`)
   - Copy code từ file `google-apps-script-code.js`

### Bước 4: Test Form

1. Mở website đã deploy trên Vercel
2. Điền form và submit
3. Kiểm tra Google Sheet xem dữ liệu đã được thêm chưa

## Troubleshooting

### Lỗi: "Failed to fetch" hoặc CORS error

**Giải pháp**: Code đã được cấu hình với `mode: "no-cors"` để tránh lỗi này. Nếu vẫn gặp lỗi:
- Kiểm tra lại URL Google Apps Script
- Đảm bảo Google Apps Script đã được deploy với quyền "Anyone"

### Lỗi: Biến môi trường không được load

**Giải pháp**:
- Kiểm tra tên biến môi trường phải bắt đầu bằng `VITE_` (cho Vite)
- Redeploy lại project sau khi thêm biến môi trường
- Kiểm tra trong Vercel Dashboard → Settings → Environment Variables

### Dữ liệu không được gửi vào Google Sheet

**Kiểm tra**:
1. Mở Google Apps Script → View → Execution log
2. Xem có lỗi gì không
3. Chạy hàm `test()` trong Apps Script để kiểm tra
4. Kiểm tra Google Sheet có đúng format header không

## Lưu ý

- **Mode no-cors**: Với `mode: "no-cors"`, browser không thể đọc response từ server, nhưng request vẫn được gửi đi. Đây là cách duy nhất để gửi request từ Vercel đến Google Apps Script mà không gặp CORS error.

- **Fallback URL**: Code đã có fallback URL trong trường hợp biến môi trường không được load. Bạn có thể hardcode URL trực tiếp trong code nếu cần.

## Cấu trúc File .env (Local Development)

File `.env` trong project (chỉ dùng cho local):
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Lưu ý**: File `.env` không được commit lên Git (đã có trong `.gitignore`). Trên Vercel, bạn phải cấu hình qua Dashboard.

