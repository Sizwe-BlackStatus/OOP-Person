class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
        let greeting = `Hello, my name is ${this.name} and I am a ${this.age} year old ${this.gender}. My interest are ${this.interests}.`
        return greeting;
    }
}

let person = new Person('Stracci', '55', 'Male', ['being a Mob-boss', ' run the streets', ' I love kids', ' I am one of the 5-families of New-York'])
console.log(person.hello())
