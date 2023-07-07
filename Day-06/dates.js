function getDayName(dateString) {
    const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Write your code here
    let date = new Date(dateString);
    return daysName[date.getDay()];
}
