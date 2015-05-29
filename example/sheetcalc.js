$(document).ready(function() {
  (function(sheetCalc) {
    sheetCalc.WorkBook = sheetCalc.WorkBook || {};

    sheetCalc.WorkBook.Student = {
      L8: new sheetCalc.Cell("number"),
      M8: new sheetCalc.Cell("number"),
      N8: new sheetCalc.Cell("number"),
      O8: new sheetCalc.Cell("number"),
      A8: new sheetCalc.Cell("Type"),
      B8: new sheetCalc.Cell("number"),
      C8: new sheetCalc.Cell("number"),
      D8: new sheetCalc.Cell("OWS.Models.Data.ICourse"),
      K7: new sheetCalc.Cell("Motivation"),
      F8: new sheetCalc.Cell("string"),
      G8: new sheetCalc.Cell("number"),
      N7: new sheetCalc.Cell("Extroversion"),
      O7: new sheetCalc.Cell("EmotionalStress"),
      P7: new sheetCalc.Cell("EnergyLevel"),
      A7: new sheetCalc.Cell("Field"),
      B7: new sheetCalc.Cell("ID"),
      C7: new sheetCalc.Cell("CourseID"),
      D7: new sheetCalc.Cell("Course"),
      E7: new sheetCalc.Cell("Parent"),
      F7: new sheetCalc.Cell("Name"),
      G7: new sheetCalc.Cell("Type"),
      I7: new sheetCalc.Cell("Engagment"),
      E9: new sheetCalc.Cell("-"),
      G9: new sheetCalc.Cell(0),
      H7: new sheetCalc.Cell("Grade"),
      J7: new sheetCalc.Cell("LeanringAbility"),
      B10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.B9.value();
      }),
      L7: new sheetCalc.Cell("Curiosity"),
      I10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.H9.value() * sheetCalc.WorkBook.Student.I9.value() + sheetCalc.WorkBook.Student.H10.value(), 5) + 1;
      }),
      M10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.L9.value() * sheetCalc.WorkBook.Student.M9.value() + sheetCalc.WorkBook.Student.L10.value(), 5) + 1;
      }),
      E8: new sheetCalc.Cell("OWS.Models.Game.Actor.IParent"),
      C9: new sheetCalc.Cell(3),
      E10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.E9.value();
      }),
      B9: new sheetCalc.Cell(1),
      K10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.J9.value() * sheetCalc.WorkBook.Student.K9.value() + sheetCalc.WorkBook.Student.J10.value(), 5) + 1;
      }),
      P9: new sheetCalc.Cell(4),
      D9: new sheetCalc.Cell("-"),
      P10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.O9.value() * sheetCalc.WorkBook.Student.P9.value() + sheetCalc.WorkBook.Student.O10.value(), 5) + 1;
      }),
      I9: new sheetCalc.Cell(3),
      J9: new sheetCalc.Cell(4),
      F9: new sheetCalc.Cell("Test Subject 1"),
      L9: new sheetCalc.Cell(3),
      M9: new sheetCalc.Cell(3),
      N9: new sheetCalc.Cell(2),
      O9: new sheetCalc.Cell(1),
      A5: new sheetCalc.Cell("IStudent"),
      N10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.M9.value() * sheetCalc.WorkBook.Student.N9.value() + sheetCalc.WorkBook.Student.M10.value(), 5) + 1;
      }),
      O10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.N9.value() * sheetCalc.WorkBook.Student.O9.value() + sheetCalc.WorkBook.Student.N10.value(), 5) + 1;
      }),
      A10: new sheetCalc.Cell("Outputs"),
      M7: new sheetCalc.Cell("Collaboration"),
      C10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.C9.value();
      }),
      D10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.D9.value();
      }),
      A9: new sheetCalc.Cell("Inputs"),
      F10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.F9.value();
      }),
      G10: new sheetCalc.Cell(function() {
        return sheetCalc.WorkBook.Student.G9.value();
      }),
      H9: new sheetCalc.Cell(2),
      J10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.I9.value() * sheetCalc.WorkBook.Student.J9.value() + sheetCalc.WorkBook.Student.I10.value(), 5) + 1;
      }),
      H10: new sheetCalc.Cell(function() {
        return formulajs.MOD(formulajs.ROUND(formulajs.RAND() * 1000, 0), 5) + 1;
      }),
      L10: new sheetCalc.Cell(function() {
        return formulajs.MOD(sheetCalc.WorkBook.Student.K9.value() * sheetCalc.WorkBook.Student.L9.value() + sheetCalc.WorkBook.Student.K10.value(), 5) + 1;
      }),
      P8: new sheetCalc.Cell("number"),
      K9: new sheetCalc.Cell(5),
      H8: new sheetCalc.Cell("number"),
      I8: new sheetCalc.Cell("number"),
      J8: new sheetCalc.Cell("number"),
      K8: new sheetCalc.Cell("number"),

      LoadModel: function(model) {
        sheetCalc.WorkBook.Student.B9.value(model.ID);
        sheetCalc.WorkBook.Student.C9.value(model.CourseID);
        sheetCalc.WorkBook.Student.D9.value(model.Course);
        sheetCalc.WorkBook.Student.E9.value(model.Parent);
        sheetCalc.WorkBook.Student.F9.value(model.Name);
        sheetCalc.WorkBook.Student.G9.value(model.Type);
        sheetCalc.WorkBook.Student.H9.value(model.Grade);
        sheetCalc.WorkBook.Student.I9.value(model.Engagment);
        sheetCalc.WorkBook.Student.J9.value(model.LeanringAbility);
        sheetCalc.WorkBook.Student.K9.value(model.Motivation);
        sheetCalc.WorkBook.Student.L9.value(model.Curiosity);
        sheetCalc.WorkBook.Student.M9.value(model.Collaboration);
        sheetCalc.WorkBook.Student.N9.value(model.Extroversion);
        sheetCalc.WorkBook.Student.O9.value(model.EmotionalStress);
        sheetCalc.WorkBook.Student.P9.value(model.EnergyLevel);
      },
      GetModel: function() {
        return {
          ID: sheetCalc.WorkBook.Student.B10.value(),
          CourseID: sheetCalc.WorkBook.Student.C10.value(),
          Course: sheetCalc.WorkBook.Student.D10.value(),
          Parent: sheetCalc.WorkBook.Student.E10.value(),
          Name: sheetCalc.WorkBook.Student.F10.value(),
          Type: sheetCalc.WorkBook.Student.G10.value(),
          Grade: sheetCalc.WorkBook.Student.H10.value(),
          Engagment: sheetCalc.WorkBook.Student.I10.value(),
          LeanringAbility: sheetCalc.WorkBook.Student.J10.value(),
          Motivation: sheetCalc.WorkBook.Student.K10.value(),
          Curiosity: sheetCalc.WorkBook.Student.L10.value(),
          Collaboration: sheetCalc.WorkBook.Student.M10.value(),
          Extroversion: sheetCalc.WorkBook.Student.N10.value(),
          EmotionalStress: sheetCalc.WorkBook.Student.O10.value(),
          EnergyLevel: sheetCalc.WorkBook.Student.P10.value(),
        };
      },

    };
  }(window.sheetCalc = window.sheetCalc || {}));
});
