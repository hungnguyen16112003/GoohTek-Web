/**
 * Google Apps Script Code để nhận dữ liệu từ Contact Form
 *
 * HƯỚNG DẪN:
 * 1. Mở Google Sheets và tạo sheet mới
 * 2. Vào Extensions → Apps Script
 * 3. Dán code này vào
 * 4. Save và Deploy như Web App
 * 5. Copy URL và thêm vào file .env với key VITE_GOOGLE_SCRIPT_URL
 */

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
      throw new Error("No data received");
    }

    // Thêm dữ liệu vào sheet
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.message || "",
    ]);

    // Trả về response với CORS headers để hỗ trợ tốt hơn
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Data saved successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Thêm hàm doGet để test (optional)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "OK",
      message: "Google Apps Script is working",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Hàm test để kiểm tra (chạy trong Apps Script editor)
function test() {
  const testData = {
    timestamp: new Date().toLocaleString("vi-VN"),
    name: "Test User",
    phone: "0123456789",
    email: "test@example.com",
    message: "Test message",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  doPost(mockEvent);
  Logger.log("Test completed! Check your sheet.");
}
