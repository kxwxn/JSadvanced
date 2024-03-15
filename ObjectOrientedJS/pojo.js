// Plain Old Javascript Obeject (POJO)

let o1 = {};
let o2 = new Object(); // same thing

o1.name = "Amigo";
o1["name"] = "Amigo"; // same thing

const key = "species";
const pet = { species: "Dog", name: "Elton", age: "1.5", sex: "female" };

pet[true] = "hello";

pet["sex"] = "male";

pet.bark = () => {
    return "WOOF WOOF!!";
};

console.log(pet.bark());
