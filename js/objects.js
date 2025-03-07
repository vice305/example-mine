let person = {
    firstname: 'John',
    lastname: 'Smith',
    height:'1.5',
    age:'30',
}
console.log(person.age)
console.log(person.firstname)

person.gender = 'male'
console.log(person)

// object methods
console.log(Object.keys(person))

console.log(Object.values(person))