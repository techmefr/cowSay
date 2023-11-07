const cowsay = require("cowsay");
const myInformation = require("./information");

const message = `Hello, I'm ${myInformation.name} from ${myInformation.campus}!`;

console.log(cowsay.say({ text: message }));
