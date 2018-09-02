function produceDrivingRange(blockRange){
  return function(start, end){
    startParsed = parseInt(start, 10);
    endParsed = parseInt(end, 10);
    range = endParsed - startParsed;
    console.log(range);
    if (range < blockRange){
      return `within range by ${blockRange - range}`;
    }else {
      return `${range - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(amount){
    return amount * percentage;
  }
}

function createDriver(){
  let driverId = 0;

  return class {
      constructor(name){
        this.name = name;
        this.id = ++driverId; 
      }
  }

}
