//**
//VERSION  =1.0.0
//* This code will helps us to grt the maximum number from the given Array

var arr = [1, 3, 4, 2, 10]; 
var max = arr[0]; 

for (var x = 1; x < arr.length; x++) {
    if (arr[x] > max) max = arr[x];
}

console.log(max); //10 
 