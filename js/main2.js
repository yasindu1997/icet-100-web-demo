function onLogin() {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log(userName + " " + password);


}

//user input month name ---> January, February, March

//Get Button Genarate Sinhala Name

//Duruthu, Nawam, Madin , Invalid Input

function getSinhalaMonth() {
    var month = document.getElementById('month').value;

    switch (month) {
        case "January":
            document.getElementById('result').innerHTML = "Duruthu";
            break;
        case "February":
            document.getElementById('result').innerHTML = "Nawam";
            break;
        default:
            document.getElementById('result').innerHTML = "Inavlid Input";
    }
}

//get student name and average marks
//display student name and his grade in h2 tag

const person1 = { name: "yasindu", age: 26, town: panadura }

console.log(person1.age);