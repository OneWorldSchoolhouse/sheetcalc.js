/*! sheetCalc | (c) 2015, One World Schoolhouse, University of Toledo | The MIT License (MIT) */
var sheetCalc;
(function (sheetCalc) {
    var Cell = (function () {
        function Cell(value) {
            this.HasFormula = false;
            this.Set(value);
            return this;
        }
        Cell.prototype.Value = function (value) {
            if (arguments.length > 0) {
                this.Set(value);
            }
            return this.Get();
        };
        Cell.prototype.Get = function () {
            if (this.HasFormula) {
                return this.Content();
            }
            else {
                return this.Content;
            }
        };
        Cell.prototype.Set = function (value) {
            this.HasFormula = typeof (value) === 'function' ? true : false;
            var parsed = parseFloat(value);
            if (!isNaN(parsed)) {
                this.Content = parsed;
            }
            else {
                this.Content = value;
            }
            return this;
        };
        return Cell;
    })();
    sheetCalc.Cell = Cell;
    var WorkSheet = (function () {
        function WorkSheet() {
        }
        WorkSheet.Create = function () {
            var f = function () { };
            f.prototype.Cells = WorkSheet.Cells;
            return f;
        };
        WorkSheet.Cells = function (row, col) {
            var dividend = col;
            var columnName = "";
            var modulo;
            while (dividend > 0) {
                modulo = (dividend - 1) % 26;
                columnName = String.fromCharCode(65 + modulo) + columnName;
                dividend = Math.floor((dividend - modulo) / 26);
            }
            if (typeof this[columnName + row] !== "undefined") {
                return this[columnName + row];
            }
            else {
                return new Cell(undefined);
            }
        };
        return WorkSheet;
    })();
    sheetCalc.WorkSheet = WorkSheet;
})(sheetCalc || (sheetCalc = {}));
