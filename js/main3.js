var students = ["yasindu", "kasun", "ramesh"];

console.log(students[1]);

///////////////////////////////////////////

const cars = [];

cars[0] = "Toyota";
cars[1] = "Jeep";
cars[2] = "BMW";
cars[3] = 45;
cars[4] = { id: "I001", item_name: "Parippu", price: 300.00 }

console.log(cars[4]);

/////////////////////////////////////////

const marks = [];

marks.push(90.8);
marks.push(34);
marks.push(67);
marks.push(21);

marks.pop();

console.log(marks);

///////////////////////////////////////////// create an array with js new keyword

const foods = new Array("Rice","Koththu","Milk Rice");

console.log(foods);

////////////////////////////////////////////

for(var i=0; i<10; i++){
    console.log("Hellooooooo "+ i);
}

// while(true){

// }


//for-each (in/of)

for(var car in cars){
    console.log(car);
}

//app 1 

//get user input a number
//check that number is odd or even


