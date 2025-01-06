function onOpen() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var Bvals = ss.getRange("B1:B").getValues();
  var Blast = Bvals.filter(String).length;
  //Logger.log(Blast)

  var activecell = sheet.getRange(Blast,2);
  //Logger.log(activecell.getA1Notation());

  activecell.activate();
}