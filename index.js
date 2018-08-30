const produceDrivingRange = (blockRange) => (st1, st2) => {
    let differenece = Math.abs(parseInt(st1) - parseInt(st2))
    if (differenece > blockRange) {
        return `${differenece - blockRange} blocks out of range`
    } else {
        return `within range by ${blockRange - differenece}`
    }
}

const produceTipCalculator = (percentage) => (total) => percentage * total

