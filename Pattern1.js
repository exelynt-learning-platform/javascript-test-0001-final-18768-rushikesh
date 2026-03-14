let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {

    let row = "";

    // Left spaces
    for (let j = i; j < n; j++) {
        row += " ";
    }

    // First star
    row += "*";

    // Middle spaces
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {

    let row = "";

    // Left spaces
    for (let j = n; j > i; j--) {
        row += " ";
    }

    // First star
    row += "*";

    // Middle spaces
    if (i > 1) {
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}