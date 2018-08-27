function produceDrivingRange(range) {
  return function(start, end) {
    let total = parseInt(start) - parseInt(end);
    if ((total + range) > 0) {
      return `within range by ${Math.abs(total + range)}`;
    } else {
      return `${Math.abs(total + range)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(amount) {
    return tip * amount;
  }
}


function createDriver() {
  let id = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id;
    }
  }
}
