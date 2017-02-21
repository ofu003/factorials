$(function(){
  //store input as findFact.For example:(5)
  $("#form").submit(function(event){
    event.preventDefault();
    var findFact = $("#factorial").val();
    var numbers=[];

    //i is 1 through 5
    for (var i=1; i<=findFact; i++){
      //push 1 through 5 into empty
        numbers.push(i);
        console.log(numbers);
    }

    var factorialResult = 1;
    console.log(numbers.length);
    for (i=0; i<numbers.length; i++){
    factorialResult = factorialResult*numbers[i];
        console.log(factorialResult);
    }
    $("#showResult").text(factorialResult);
  });
});

//this also works
// var numbah = numbers.reduce(function(a,b){
//   return a * b;
// });
// console.log(numbah);
//
