function onEdit() {
  // Open the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Select the range where you want to apply the font style
  var range = sheet.getRange("A1:H"); // Change to your desired range
  
  // Set the font family (e.g., Arial, Times New Roman, etc.)
  range.setFontFamily("Arial");
  sheet.getActiveRangeList().setHorizontalAlignment('center')
  // Optionally, set font size or style
  range.setFontSize(10); // Set font size
  range.setFontColor("black");
  range.setFontStyle("normal");
  range.setFontLine("none");
  range.setBackground("white");
  range.setFontWeight("normal");
  // Log to confirm execution
  var lastRow = sheet.getLastRow();

  // Get the range of the last row
  var range = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()); // Adjust the column range if needed

  // Apply borders to the last row
  range.setBorder(
    true,  // top border
    true,  // left border
    true,  // bottom border
    true,  // right border
    true, // no horizontal inner borders
    true, // no vertical inner borders
    "black", // border color
    SpreadsheetApp.BorderStyle.SOLID // border style
  );

  Logger.log("Borders applied to the last row!");
  Logger.log("Font style updated!");
}
