module.exports = {
  apps : [
    {
      name   : "FORK",
      script : "src/server/server.js",
      env: {
        PORT: 8080
      }
    },
    {
      name   : "CLUSTER",
      script : "src/server/server.js",
      env: {
        PORT: 8081
      },
      exec_mode:'cluster',
      node_args:"--harmony"
    },
]
}
