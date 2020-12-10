interface Human {
    name: string,
    gender: string,
    age: number
}

const person = {
    name: "david",
    gender: "male",
    age: 23
}

const sayHi = (person: Human): string => {
    return (`hello ${person.name}, you are ${person.age}, you are ${person.gender}!!`)
};

console.log(sayHi(person));


export {};
