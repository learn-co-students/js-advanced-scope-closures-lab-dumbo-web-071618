function produceDrivingRange(trip){
  return function(num1, num2){
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    if(trip < (n2 - n1)) {
      return `${Math.abs(trip - (n2 - n1))} blocks out of range`;
    } else {
      return `within range by ${Math.abs(trip - (n2 - n1))}`;
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip;
  }
}

function createDriver(){
  driverId = 0;

  return class Driver{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
