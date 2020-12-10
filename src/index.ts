class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const david = new Human("david", 18, "male");

const sayHi = (person): string => {
    return (`hello ${person.name}, you are ${person.age}, you are ${person.gender}!!`)
};

console.log(sayHi(david));


export {};
