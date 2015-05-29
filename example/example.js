$(document).ready(function(){
  //Init - Load excel data into sheetCalc.WorkBook.Sheet
  $("#sum").text(sheetCalc.WorkBook.Sheet1.B2.Value());
  $("#avg").text(sheetCalc.WorkBook.Sheet1.C2.Value());
  $("#stdev").text(sheetCalc.WorkBook.Sheet1.D2.Value());
  $("#max").text(sheetCalc.WorkBook.Sheet1.E2.Value());
  $("#min").text(sheetCalc.WorkBook.Sheet1.F2.Value());

  for( var i=2; i<14; i++){
    $("#a"+i).val(sheetCalc.WorkBook.Sheet1["A"+i].Value());
    //console.log("sheetCalc.WorkBook.Sheet.A"+i, sheetCalc.WorkBook.Sheet1["A"+i].Value());
  }

  //Calculate
  $("#calc").click(function(){

    for( var i=2; i<14; i++){
      //console.log("A"+i);
      sheetCalc.WorkBook.Sheet1["A"+i].Value($("#a"+i).val());
      //console.log(sheetCalc.WorkBook.Sheet1["A"+i].Value());
    }

    //console.log(sheetCalc.WorkBook.Sheet1);
    $("#sum").text(sheetCalc.WorkBook.Sheet1.B2.Value());
    $("#avg").text(sheetCalc.WorkBook.Sheet1.C2.Value());
    $("#stdev").text(sheetCalc.WorkBook.Sheet1.D2.Value());
    $("#max").text(sheetCalc.WorkBook.Sheet1.E2.Value());
    $("#min").text(sheetCalc.WorkBook.Sheet1.F2.Value());

  });

  $("#newCalc").click(function(){
    var guess = parseFloat( $("#newGuess").val());
    var newGuess = null;
    var delta = 1;
    while(delta < 24){
      sheetCalc.WorkBook.Sheet2.A2.Value(guess);
      newGuess = sheetCalc.WorkBook.Sheet2.A3.Value();
      delta++;
      guess = newGuess;
    }
    $("#newResult").text(guess);
  });


});
