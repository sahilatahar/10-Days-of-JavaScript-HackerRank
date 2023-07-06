function isPositive(a) {
    try {
        if (a > 0) {
            return "YES";
        } else if (a === 0) {
            throw 'Zero Error';
        } else {
            throw 'Negative Error';
        }
    } catch(error) {
        return error;
    }
}
