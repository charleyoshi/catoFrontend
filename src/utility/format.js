export const convertTimestampToSeconds = (timestamp) => {
    const timeArray = timestamp.split(':').reverse();

    let totalSeconds = 0;
    for (let i = 0; i < timeArray.length; i++) {
        totalSeconds += parseInt(timeArray[i], 10) * Math.pow(60, i);
    }

    return totalSeconds;
}


export const convertLargeNumToAbbrev = (value) => {
    if (value < 1000) return value
    var suffixes = ["", "K", "M", "B", "T"]
    var suffixNum = Math.floor(("" + value).length / 3)

    // Check if shortValue is less than 1
    var shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2))
    if (shortValue < 1) {
        shortValue *= 1000
        suffixNum--
    }

    // Round to 1 decimal place if needed
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1)
    }

    return shortValue + suffixes[suffixNum]
}


export const convertISODateToReadable = (isoDate, locale = 'en-GB') => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    const date = new Date(isoDate)
    
    return date.toLocaleDateString(locale, options)
}


