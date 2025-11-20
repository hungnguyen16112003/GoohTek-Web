# Hướng Dẫn Setup Google Sheets để Nhận Dữ Liệu Form

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo một Sheet mới
3. Đặt tên Sheet (ví dụ: "Contact Form Data")
4. Tạo header ở dòng đầu tiên với các cột:
   - A1: `Thời gian`
   - B1: `Họ và tên`
   - C1: `Số điện thoại`
   - D1: `Email`
   - E1: `Tin nhắn`

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, click vào **Extensions** → **Apps Script**
2. Xóa code mặc định và dán code sau:

**Copy toàn bộ code từ file `google-apps-script-code.js` trong dự án của bạn.**

Hoặc copy code sau:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Xử lý cả JSON và FormData
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }
    
    // Thêm dữ liệu vào sheet
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('vi-VN'),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.message || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Hàm test để kiểm tra
function test() {
  const testData = {
    timestamp: new Date().toLocaleString('vi-VN'),
    name: 'Test User',
    phone: '0123456789',
    email: 'test@example.com',
    message: 'Test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
  Logger.log('Test completed! Check your sheet.');
}
```

3. Click **Save** (💾) và đặt tên project (ví dụ: "Contact Form Handler")

## Bước 3: Deploy Web App

1. Click vào **Deploy** → **New deployment**
2. Click vào biểu tượng bánh răng ⚙️ bên cạnh "Select type" → chọn **Web app**
3. Điền thông tin:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **QUAN TRỌNG**: Copy **Web App URL** (sẽ có dạng: `https://script.google.com/macros/s/...`)
6. Click **Authorize access** và cho phép quyền truy cập

## Bước 4: Cấu hình trong dự án

1. Tạo file `.env` trong thư mục gốc của dự án (nếu chưa có)
2. Thêm dòng sau vào file `.env`:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Thay `YOUR_SCRIPT_ID` bằng ID từ URL bạn đã copy ở bước 3.

3. Restart dev server để áp dụng thay đổi

## Bước 5: Test

1. Chạy lại dự án: `npm run dev`
2. Điền form và submit
3. Kiểm tra Google Sheet xem dữ liệu đã được thêm chưa

## Lưu ý

- Google Apps Script có giới hạn 6 phút/thực thi
- Mỗi ngày có thể xử lý tối đa 20,000 requests
- Nếu cần bảo mật hơn, có thể thêm API key hoặc authentication

## Troubleshooting

- Nếu không nhận được dữ liệu, kiểm tra:
  1. URL trong `.env` đã đúng chưa
  2. Google Apps Script đã được deploy với quyền "Anyone" chưa
  3. Console trong browser có lỗi gì không
  4. Thử chạy hàm `test()` trong Apps Script để kiểm tra

