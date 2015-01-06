(function(sheetCalc) {
  sheetCalc.Cell = function (val)
  {
    this.hasFormula = false;
    this.isNumber = false;
    this.set(val);
    return this;
  };

  sheetCalc.Cell.prototype.value = function(val){
    if( arguments.length > 0){
      //return this.set(val);
      this.set(val);
    }else{
      return this.get();
    }
  };

  sheetCalc.Cell.prototype.get = function(){
    if(this.hasFormula){
      return this.content();
    } else {
      return this.content;
    }
  };

  sheetCalc.Cell.prototype.set = function(val){
    this.hasFormula = typeof(val) == 'function' ? true : false;
    var parsed = parseFloat(val);
    if(!isNaN(parsed))
      this.content = parsed;
    else
      this.content = val;

  };

}( window.sheetCalc = window.sheetCalc || {}));
