const {Person} = require ("../src/person.js")
let person = new Person('Ryan', '30', 'Male', ['being a hardarse', 'agile', 'ssd hard'])

describe("Attributes of Person", function(){
    it("should give a name of Person", function(){
        expect(person.name).toBe('Ryan')
    })
    it("should give the age of Person", function(){
        expect(person.age).toBe('30')
    })
    it("should give the gender of Person", function(){
        expect(person.gender).toBe('Male')
    })
    it("should provide the interests of Person", function(){
        expect(person.interests).toEqual(['being a hardarse', 'agile', 'ssd hard'])
    })
    it("should print greeting from person", function(){
        expect(person.hello()).toBe('Hello, my name is Ryan and I am a 30 year old Male. My interest are being a hardarse, agile and ssd hard.')
    })
})