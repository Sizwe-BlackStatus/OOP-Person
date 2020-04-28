class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
        let greeting = `Hello, my name is ${this.name} and I am a ${this.age} year old ${this.gender}. My interest are ${this.interests[0]}, and ${this.interests[1]}.`
        return greeting;
    }
}
let person = new Person('Stracci', '55', 'Male', ['being a Mob-boss', 'I am one of the 5-families of New-York'])
console.log(person.hello())
module.exports = {
    Person: Person
}
