function produceDrivingRange(range)  {
    return function (start, finish)    {
        totalBlocks = Math.abs(parseInt(start) - parseInt(finish))
        if (totalBlocks < range) {
            return `within range by ${Math.abs(range - totalBlocks)}`
        } else {
            return `${Math.abs(totalBlocks - range)} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function (fare)  {
        return fare * percent
    }
}