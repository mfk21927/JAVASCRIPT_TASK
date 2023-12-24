// creating calculator for grade checking

let grade = +prompt("Enter Your Percentage Between 1 to 100");

if (grade >= 95){
    console.log("Congrats! You Have Got 'A+' Grade");
}

else if (grade >= 80 ){
    console.log("Congrats! You Have Got 'A-' Grade");
}

else if (grade >= 75){
    console.log("Congrats! You Have Got 'B+' Grade");
}

else if (grade >= 70){
     console.log("Congrats! You Have Got 'B' Grade");
}

else if (grade >= 65){
    console.log("Congrats! You Have Got 'B-' Grade");
}

else if (grade >= 60){
    console.log("Congrats! You Have Got 'C+' Grade");
}

else if (grade >= 55){
    console.log("Congrats! You Have Got 'C' Grade");
}

else if (grade >= 50){
    console.log("Congrats! You Have Got 'D' Grade");
}

else  {
    console.log("Unfortunatily! You Have Failed The Exam");
}



