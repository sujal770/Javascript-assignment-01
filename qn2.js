let totalScore=parseInt(prompt("Enter student score"));
if(totalScore>=80 && totalScore>=100){
    console.log("Congrulation you score A");
}
else if(totalScore>=70 && totalScore >=79){
    console.log("Congrulation you get B");
}
else if(totalScore>=60 && totalScore>=69){
    console.log("Congrulation you get C");
}
else if(totalScore>=50 && totalScore>=59){
    console.log("Congrulation you get D");
}
else if(totalScore>=0 && totalScore>=49){
    console.log("You get F");
}
else{
    console.log("Invalid input");
}
