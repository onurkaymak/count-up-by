function countDracula(countTo, countBy) {
    const parsedCountTo = parseInt(countTo);
    const parsedCountBy = parseInt(countBy);
    console.log(parsedCountTo);
    if ((countTo.trim().length === 0) && (countBy.trim().length === 0))
        return null;
    if (countBy.trim().length === 0) {
        return countTo;
        console.log(parsedCountTo);
    }

    return parsedCountBy;
};


