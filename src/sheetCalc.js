
function Cell(val)
{
  this.hasFormula = false;
  this.isNumber = false;
  this.set(val);
  return this;
}

Cell.prototype.value = function(val){
  if( arguments.length > 0){
    //return this.set(val);
    this.set(val);
  }else{
    return this.get();
  }
};

Cell.prototype.get = function(){
  if(this.hasFormula){
    return this.content();
  } else {
    return this.content;
  }
};

Cell.prototype.set = function(val){
  this.hasFormula = typeof(val) == 'function' ? true : false;
  var parsed = parseFloat(val);
  if(!isNaN(parsed))
    this.content = parsed;
  else
    this.content = val;
  //return this.get();
};


// function Cell(e){
//   this.hasFormula=typeof e=='function'?true:false;
//   this.content=e;
//   return this;
// }
//
// Cell.prototype.value=function(e){
//   if(arguments.length>0){
//     this.hasFormula=typeof e=='function'?true:false;
//     this.content=e;
//   }
//   if(this.hasFormula){
//     return this.content();
//   }else{
//     return this.content;
//   }
// };
