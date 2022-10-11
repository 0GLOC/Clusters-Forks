import minimist from "minimist";

const {
    MODE,
    PORT,
    DEBUG,
    NAME
} = minimist(process.argv.slice(2), {alias: {m: "MODE", p: "PORT", d: "DEBUG", n:"NAME"}, default: {m: "PROD", p: 8080, d: false, n:"FORK"}});

const configMinimist = {
    mode: MODE,
    port: PORT,
    debug: DEBUG,
    name: NAME
}

export default configMinimist;