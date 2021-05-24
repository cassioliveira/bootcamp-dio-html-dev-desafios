var total = 0;
for (let i = 0; i < 6; i++) {
    var value = Number(gets());
    if (value > 0 && value != NaN) {
        total++;
    }
}

console.log(Number(total) + " valores positivos");