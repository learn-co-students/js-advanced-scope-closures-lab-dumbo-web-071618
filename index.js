const produceDrivingRange = function(range) {
  return function (street1, street2){
    let street1_num = parseInt(street1.slice(0,2));
    let street2_num = parseInt(street2.slice(0,2));
    if (street1_num + range > street2_num){
      return `within range by ${(street1_num+range)-street2_num}`
    }else{
      return `${street2_num-(street1_num+range)} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percent){
  return function (fare){
    return fare*percent
  }
}

const createDriver = function(name){
  return new Driver(name)
}
