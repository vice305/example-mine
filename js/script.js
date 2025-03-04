console.log("Hello World");

let fruits = ['Banana','Mango','Kiwi','Pears','Avacado']

console.log (fruits.length)
console.log(fruits[4 
])

// unshift
fruits.unshift('Dates')

console.log (fruits)

//push
fruits.push('Lemon')
console.log(fruits)

//shift
fruits.shift()
console.log(fruits)

//pop 
fruits.pop()
console.log(fruits)

//spread operator(...)
let new_fruits =[...fruits, 'Apple','Pineapple', 'Watermelon']
console.log(new_fruits)

let new_fruit_array=['Grapes','Blackberry',...fruits]
console.log(new_fruit_array)

//objects
let person ={
    name:'John',
    gender:'Male',
    age:'34',
    isActive:true,
    friends:['Brenda','Elvis','Collins','Alice']
}
console.log(person.age)
console.log(person.friends[2])
