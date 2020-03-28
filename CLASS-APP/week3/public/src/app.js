
class Person {
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }   

    getSeniorDiscount(){
        return this.age >= 55;
    }

}



var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
document.querySelector('form.login').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);
    console.log(ageInput.value);
    var NewPerson = new Person((nameInput.value),(ageInput.value));
    console.log(NewPerson.getSeniorDiscount());
    
    if (NewPerson.getSeniorDiscount()){
        console.log("You get a Senior Discount");
        document.getElementById("SD").innerHTML = "You get a Senior Discount";
    }else{
        console.log("No Discount for YOU!!");
        document.getElementById("SD").innerHTML = "No Discount for YOU!!";
    }
});



var Robert = new Person("Robert",25);
var Bob = new Person("Bob Jones", 56);
//console.log(Robert.getSeniorDiscount());
//console.log(Bob.getSeniorDiscount());