function getMaxLessThanK(n,k) {
    let max = 0;
    for(let i = 1; i <= n ; i++) {
        for(let j = i + 1; j <= n ; j++) {
            let c = i & j;
            if(c < k && c > max) {
                max = c;
            }
        }
    }
    return max;
}