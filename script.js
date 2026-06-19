
const btn = document.getElementById("btn")
btn.addEventListener("click", ()=> {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    if (a===0){
        document.getElementById("answerParagraph").textContent = "Not a Quadratic equation" ;  
        return;
    }
   
    const discriminant = (b*b) - (4*a*c);
    const discriminantSquareRoot = Math.sqrt(discriminant);

    const numerator1 = - b + discriminantSquareRoot;
    const numerator2 = - b - discriminantSquareRoot;
    const denomenator = 2*a;

    const solution1 = numerator1/denomenator;
    const solution2 = numerator2/denomenator;
   
    document.getElementById("answerParagraph").textContent = " Your answers are: " + solution1 + " or " + solution2 ;  
    
    if ( discriminant < 0 ){
        document.getElementById("answerParagraph").textContent = "No real roots" ;  
    }
    
})
