$(document).ready(function() {
  (function(sheetCalc) {
    sheetCalc.SheetModels = sheetCalc.SheetModels || {};
    (function(SheetModels) {
      var Sheet1 = sheetCalc.WorkSheet.Create();
      Sheet1.prototype.A1 = new sheetCalc.Cell("Run Times");
      Sheet1.prototype.B1 = new sheetCalc.Cell("Sum");
      Sheet1.prototype.C1 = new sheetCalc.Cell("Average");
      Sheet1.prototype.D1 = new sheetCalc.Cell("Std Dev");
      Sheet1.prototype.E1 = new sheetCalc.Cell("High");
      Sheet1.prototype.F1 = new sheetCalc.Cell("Low");
      Sheet1.prototype.A2 = new sheetCalc.Cell(1.2);
      Sheet1.prototype.B2 = new sheetCalc.Cell(function() {
        return formulajs.SUM(sheetCalc.WorkBook.Sheet1.A2.Value(), sheetCalc.WorkBook.Sheet1.A3.Value(), sheetCalc.WorkBook.Sheet1.A4.Value(), sheetCalc.WorkBook.Sheet1.A5.Value(), sheetCalc.WorkBook.Sheet1.A6.Value(), sheetCalc.WorkBook.Sheet1.A7.Value(), sheetCalc.WorkBook.Sheet1.A8.Value(), sheetCalc.WorkBook.Sheet1.A9.Value(), sheetCalc.WorkBook.Sheet1.A10.Value(), sheetCalc.WorkBook.Sheet1.A11.Value(), sheetCalc.WorkBook.Sheet1.A12.Value(), sheetCalc.WorkBook.Sheet1.A13.Value());
      });
      Sheet1.prototype.C2 = new sheetCalc.Cell(function() {
        return formulajs.AVERAGE(sheetCalc.WorkBook.Sheet1.A2.Value(), sheetCalc.WorkBook.Sheet1.A3.Value(), sheetCalc.WorkBook.Sheet1.A4.Value(), sheetCalc.WorkBook.Sheet1.A5.Value(), sheetCalc.WorkBook.Sheet1.A6.Value(), sheetCalc.WorkBook.Sheet1.A7.Value(), sheetCalc.WorkBook.Sheet1.A8.Value(), sheetCalc.WorkBook.Sheet1.A9.Value(), sheetCalc.WorkBook.Sheet1.A10.Value(), sheetCalc.WorkBook.Sheet1.A11.Value(), sheetCalc.WorkBook.Sheet1.A12.Value(), sheetCalc.WorkBook.Sheet1.A13.Value());
      });
      Sheet1.prototype.D2 = new sheetCalc.Cell(function() {
        return formulajs.STDEVP(sheetCalc.WorkBook.Sheet1.A2.Value(), sheetCalc.WorkBook.Sheet1.A3.Value(), sheetCalc.WorkBook.Sheet1.A4.Value(), sheetCalc.WorkBook.Sheet1.A5.Value(), sheetCalc.WorkBook.Sheet1.A6.Value(), sheetCalc.WorkBook.Sheet1.A7.Value(), sheetCalc.WorkBook.Sheet1.A8.Value(), sheetCalc.WorkBook.Sheet1.A9.Value(), sheetCalc.WorkBook.Sheet1.A10.Value(), sheetCalc.WorkBook.Sheet1.A11.Value(), sheetCalc.WorkBook.Sheet1.A12.Value(), sheetCalc.WorkBook.Sheet1.A13.Value());
      });
      Sheet1.prototype.E2 = new sheetCalc.Cell(function() {
        return formulajs.MAX(sheetCalc.WorkBook.Sheet1.A2.Value(), sheetCalc.WorkBook.Sheet1.A3.Value(), sheetCalc.WorkBook.Sheet1.A4.Value(), sheetCalc.WorkBook.Sheet1.A5.Value(), sheetCalc.WorkBook.Sheet1.A6.Value(), sheetCalc.WorkBook.Sheet1.A7.Value(), sheetCalc.WorkBook.Sheet1.A8.Value(), sheetCalc.WorkBook.Sheet1.A9.Value(), sheetCalc.WorkBook.Sheet1.A10.Value(), sheetCalc.WorkBook.Sheet1.A11.Value(), sheetCalc.WorkBook.Sheet1.A12.Value(), sheetCalc.WorkBook.Sheet1.A13.Value());
      });
      Sheet1.prototype.F2 = new sheetCalc.Cell(function() {
        return formulajs.MIN(sheetCalc.WorkBook.Sheet1.A2.Value(), sheetCalc.WorkBook.Sheet1.A3.Value(), sheetCalc.WorkBook.Sheet1.A4.Value(), sheetCalc.WorkBook.Sheet1.A5.Value(), sheetCalc.WorkBook.Sheet1.A6.Value(), sheetCalc.WorkBook.Sheet1.A7.Value(), sheetCalc.WorkBook.Sheet1.A8.Value(), sheetCalc.WorkBook.Sheet1.A9.Value(), sheetCalc.WorkBook.Sheet1.A10.Value(), sheetCalc.WorkBook.Sheet1.A11.Value(), sheetCalc.WorkBook.Sheet1.A12.Value(), sheetCalc.WorkBook.Sheet1.A13.Value());
      });
      Sheet1.prototype.A3 = new sheetCalc.Cell(1.6);
      Sheet1.prototype.A4 = new sheetCalc.Cell(2.1);
      Sheet1.prototype.A5 = new sheetCalc.Cell(2.6);
      Sheet1.prototype.A6 = new sheetCalc.Cell(1.3);
      Sheet1.prototype.A7 = new sheetCalc.Cell(1.1);
      Sheet1.prototype.A8 = new sheetCalc.Cell(0.9);
      Sheet1.prototype.A9 = new sheetCalc.Cell(1);
      Sheet1.prototype.A10 = new sheetCalc.Cell(3);
      Sheet1.prototype.A11 = new sheetCalc.Cell(1.4);
      Sheet1.prototype.A12 = new sheetCalc.Cell(0.6);
      Sheet1.prototype.A13 = new sheetCalc.Cell(1.6);

      var Sheet2 = sheetCalc.WorkSheet.Create();
      Sheet2.prototype.A1 = new sheetCalc.Cell("Input");
      Sheet2.prototype.B1 = new sheetCalc.Cell("Equ");
      Sheet2.prototype.C1 = new sheetCalc.Cell("Equ`");
      Sheet2.prototype.A2 = new sheetCalc.Cell(1);
      Sheet2.prototype.B2 = new sheetCalc.Cell(function() {
        return (Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 6) - Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 5) - 6 * Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 4) - Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 2) + sheetCalc.WorkBook.Sheet2.A2.Value() + 10);
      });
      Sheet2.prototype.C2 = new sheetCalc.Cell(function() {
        return (6 * Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 5) - 5 * Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 4) - 24 * Math.pow(sheetCalc.WorkBook.Sheet2.A2.Value(), 3) - 2 * sheetCalc.WorkBook.Sheet2.A2.Value() + 1);
      });
      Sheet2.prototype.A3 = new sheetCalc.Cell(function() {
        return (sheetCalc.WorkBook.Sheet2.A2.Value() - sheetCalc.WorkBook.Sheet2.B2.Value() / sheetCalc.WorkBook.Sheet2.C2.Value());
      });
      SheetModels.Sheet1 = Sheet1;
      SheetModels.Sheet2 = Sheet2;
    }(SheetModels = sheetCalc.SheetModels || {}));

    sheetCalc.WorkBook = sheetCalc.WorkBook || {};
    (function(WorkBook) {
      WorkBook.Sheet1 = new SheetModels.Sheet1();
      WorkBook.Sheet2 = new SheetModels.Sheet2();
    }(WorkBook = sheetCalc.WorkBook || {}));

  }(sheetCalc || (sheetCalc = {})));
});
