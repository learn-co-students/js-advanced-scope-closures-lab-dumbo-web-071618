const produceDrivingRange = function (blockRange){
  return function isItInRange(blockOne, blockTwo) {
    console.log(parseInt(blockTwo[0]+blockTwo[1]) - parseInt(blockOne[0]+blockOne[1]))
    if (parseInt(blockTwo[0]+blockTwo[1]) - parseInt(blockOne[0]+blockOne[1]) < blockRange) {
      return `within range by ${blockRange - (parseInt(blockTwo[0]+blockTwo[1]) - parseInt(blockOne[0]+blockOne[1]))}`
    } else {
      return `${(parseInt(blockTwo[0]+blockTwo[1]) - parseInt(blockOne[0]+blockOne[1])) - blockRange} blocks out of range`
    }
  }
}

const produceTipCalculator = function (percent) {
  return function(amount) {
    return percent * amount
  }
}
