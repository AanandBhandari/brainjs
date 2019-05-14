const net = new brain.NeuralNetwork({ hiddenlayers: [5] })
const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

net.train(trainingData);
console.log(net.run([1, 1]))