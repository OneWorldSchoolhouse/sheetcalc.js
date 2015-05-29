/*! sheetCalc | (c) 2015, One World Schoolhouse, University of Toledo | The MIT License (MIT) */

module sheetCalc {
	export module WorkBook {}
	export module SheetModels{	}
	export class Cell {
		public HasFormula: boolean;
		public Content: any;

		constructor(value: any) {
			this.HasFormula = false;
			this.Set(value);
			return this;
		}
		public Value(value?: any): any {
			if (arguments.length > 0) {
				this.Set(value);
			}
			return this.Get();
		}
		public Get(): any {
			if (this.HasFormula) {
				return this.Content();
			} else {
				return this.Content;
			}
		}
		public Set(value: any): Cell {
			this.HasFormula = typeof (value) === 'function' ? true : false;
			var parsed = parseFloat(value);
			if (!isNaN(parsed)) {
				this.Content = parsed;
			} else {
				this.Content = value;
			}
			return this;
		}
	}

	export class WorkSheet {
		constructor() { }
		public static Create(): Function{
			var f = function() {};
			f.prototype.Cells = WorkSheet.Cells;
			return f;
		}
		public static Cells(row: number, col: number): Cell {
			var dividend = col;
			var columnName: string = "";
			var modulo: number;

			while (dividend > 0) {
				modulo = (dividend - 1) % 26;
				columnName = String.fromCharCode(65 + modulo) + columnName;
				dividend = Math.floor((dividend - modulo) / 26);
			}
			if(typeof this[columnName + row] !== "undefined"){
				return this[columnName + row];
			}else{
				return new Cell(undefined);
			}
		}
	}
}
