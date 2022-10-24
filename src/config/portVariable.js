import configMinimist from "../utils/minimistArgs.js";

const PORT = process.env.PORT ||configMinimist.port;

console.log(PORT);

export default PORT;