const mysql = require('mysql2/promise');

module.exports = function DatabaseProvider() {

    async function StartDatabase() {
        const configurations = require('../configurations/configurations.json')

        let databaseConnection = {}

        await mysql.createConnection({
            host: configurations.database.host,
            user: configurations.database.user,
            password: configurations.database.password,
            database: configurations.database.database
        }).then((result) => {
            databaseConnection = result
        }).catch(() => {
            throw "Error in database connection"
        })
    
        return databaseConnection
    }

    async function DropConnection(databaseConnection) {
        databaseConnection.end()
    }

    async function GetData(query) {
        const mysqlconnection = await StartDatabase()

        let connectionResults = {}

        await mysqlconnection.query(query)
        .then((result) => {
            DropConnection(mysqlconnection)
            connectionResults = result
        }).catch((error) => {
            throw error.sqlMessage
        })

        return connectionResults
    }

    async function InsertData(query) {
        console.log("inser")

        const mysqlconnection = await StartDatabase()

        await mysqlconnection.query(query)
        .then(() => {
            DropConnection(mysqlconnection)
        }).catch((error) => {
            throw error.sqlMessage
        })
    }

    return {
        GetData,
        InsertData
    }
}