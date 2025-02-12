// const fruit = {
//     name: "banana",
//     sayHiFunction: function () {
//         console.log(" Hi I am a " + this.name)

//     }
// }

// console.log("Output of Say Hi Function");
// fruit.sayHiFunction();
// }

class Fruit {
    color;
    name;
    freshness = 5;
    constructor(providedName, providedColor){
        this.name = providedName;
        this.color = providedColor;
    }
    ripen(){
        this.freshness - 1
    }
}
const banana = new Fruit("banana", "yellow");
banana.ripen()
const apple = new Fruit ("apple", "red");
apple.ripen()
const durian = new ExoticFruit("durian", "green", "Thailand")
durian.ripen()

class ExoticFruit extends Fruit { 
    
    constructor(providedName, providedColor, providedCountry){
        super(providedName, providedColor)
    this.country = providedCountry;
}

}


// const apple = {
//     name: "apple",
//     color: "red",

// }

// const banana= {
//     name: "banana",
//     color: "yellow",
// }

