const restaurants = {
    "global": "Sunday",
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "bells cafe": "Thursday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday",
    "kfc": "Thursday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName]
    trainingData.push({
        input : {[dayOfWeek]:1},
        output :{[restaurantName]: 1}
    });
}
// console.log(trainingData);
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);
// console.log(stats);
// console.log(net.run({ 'Monday': 1 }));

// function returning the restaurantForDay name
function restaurantForDay(dayOfWeek){
    const result = net.run({[dayOfWeek]: 1 });
    console.log(result);
    let highestValue = 0;
    let highestResturentName = '';
    for(let restaurantName in result) {
        if (result[restaurantName]>highestValue) {
            highestValue = result[restaurantName]
            highestResturentName = restaurantName
        }
    }
    return highestResturentName
}
console.log(restaurantForDay('Sunday'));