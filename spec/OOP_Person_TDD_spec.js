const {Person} = require ("../src/OOP_Person_TDD.js")
let person = new Person('Stracci', '55', 'Male', ['being a Mob-boss', ' I am one of the 5-families of New-York'])

describe("Attributes of Person", function(){
    it("should give a name of Person", function(){
        expect(person.name).toBe('Stracci')
    })
    it("should give the age of Person", function(){
        expect(person.age).toBe('55')
    })
    it("should give the gender of Person", function(){
        expect(person.gender).toBe('Male')
    })
    it("should provide the interests of Person", function(){
        expect(person.interests).toContain('being a Mob-boss', 'I am one of the 5-families of New-York')
    })
})