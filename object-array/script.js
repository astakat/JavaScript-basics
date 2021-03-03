let selectedColors = []

let person = {
    name: "Asta",
    age: 44,
    evaluations: [7, 10, 9]
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person["name"])
console.log(person["age"])
console.log(person.evaluations)

selectedColors[0] = "green"
selectedColors[1] = "yellow"
selectedColors[2] = "pink"
console.log(selectedColors)
console.log(selectedColors.length)
console.log(selectedColors[0])
console.log(selectedColors[selectedColors.length - 1])

selectedColors.push("red")
selectedColors.push(7)
console.log(selectedColors)

selectedColors.push({greeting: "Hi ik ben een object"})
console.log(selectedColors[selectedColors.length - 1])

