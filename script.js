
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    if (a === 0){
        document.getElementById("answerParagraph").textContent = "Not a Quadratic equation";
        return;
    }

    const discriminant = (b * b) - (4 * a * c);
    const denominator = 2 * a;
    const realPart = -b / denominator;

    if (discriminant >= 0) {
        // Two real roots
        const discriminantSquareRoot = Math.sqrt(discriminant);
        const solution1 = ( -b + discriminantSquareRoot ) / denominator;
        const solution2 = ( -b - discriminantSquareRoot ) / denominator;
        document.getElementById("answerParagraph").textContent = "Your answers are: " + solution1 + " or " + solution2;
    } else {
        // Two complex (imaginary) roots
        const imagPart = Math.sqrt(-discriminant) / denominator;
        document.getElementById("answerParagraph").textContent = "Your answers are: " + realPart + " + " + imagPart + "i  or  " + realPart + " - " + imagPart + "i";
    }

})
