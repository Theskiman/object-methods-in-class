const outputElement = document.querySelector(".food")

const myFood = [{
    name: "Tortillini Soup",
    creator: "Steve Matuszewski",
    season: "Fall",
    MainIng: ["Chicken", "Tortillini", "Tomato Soup"]
},
    {
    name: "Philly",
    creator: "Smart guy",
    season: "anytime",
    MainIng: ["Cheese", "Steak", "Onions", "Peppers"]
    }]

outputElement.innerHTML += "<h1>My Food</h1>"

myFood.forEach(food => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(food)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})