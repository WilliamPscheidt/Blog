const cluster = require('cluster')
const os = require('os')
const Router = require('./router/router')

const CPUCores = os.cpus().length

if (cluster.isMaster) {
    for (let worker = 0; worker < CPUCores; worker++){
        cluster.fork()
    }

    cluster.on('exit', () => {
        cluster.fork()
    })
} else {
    Router()
}
