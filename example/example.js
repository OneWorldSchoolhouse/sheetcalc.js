$(document).ready(function(){
  //Init - Load excel data into sheet
  $("#sum").text(Sheet1.B2.value());
  $("#avg").text(Sheet1.C2.value());
  $("#stdev").text(Sheet1.D2.value());
  $("#max").text(Sheet1.E2.value());
  $("#min").text(Sheet1.F2.value());

  for( var i=2; i<14; i++){
    $("#a"+i).val(Sheet1["A"+i].value());
    //console.log("Sheet.A"+i, Sheet1["A"+i].value());
  }

  //Calculate
  $("#calc").click(function(){

    for( var i=2; i<14; i++){
      //console.log("A"+i);
      Sheet1["A"+i].value($("#a"+i).val());
      //console.log(Sheet1["A"+i].value());
    }

    //console.log(Sheet1);
    $("#sum").text(Sheet1.B2.value());
    $("#avg").text(Sheet1.C2.value());
    $("#stdev").text(Sheet1.D2.value());
    $("#max").text(Sheet1.E2.value());
    $("#min").text(Sheet1.F2.value());

  });

  $("#newCalc").click(function(){
    var guess = parseFloat( $("#newGuess").val());
    var newGuess = null;
    var delta = 1;
    while(delta < 24){
      Sheet2.A2.value(guess);
      newGuess = Sheet2.A3.value();
      delta++;
      guess = newGuess;
    }
    $("#newResult").text(guess);
  });


});
