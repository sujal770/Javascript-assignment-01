let num=prompt("Enter a number"); // it take number as a string and we need to change that into number
num=Number(num); //converting string into number using Number.


if(num%5===0){
    console.log("This is the multiple of 5.");

}
else{
    console.log("This is not a multiple of 5.")
}