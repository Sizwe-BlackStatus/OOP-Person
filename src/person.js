class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
        let greeting = `Hello, my name is ${this.name} and I am a ${this.age} year old ${this.gender}. My interest are ${this.interests[0]}, ${this.interests[1]} and ${this.interests[2]}.`
        return greeting;
    }
}
let person = new Person('Ryan', '30', 'Male', ['being a hardarse', 'agile', 'ssd hard'])
let greeting = person.hello()
console.log(greeting)
module.exports = {Person}
