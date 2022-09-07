const mysql = require('mysql2/promise');

const DatabaseProvider = () => {

    const StartDatabase = async () => {
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

    const DropConnection = async (databaseConnection) => {
        databaseConnection.end()
    }

    const GetData = async (query) => {
        const mysqlconnection = await StartDatabase()

        let connectionResults = {}

        await mysqlconnection.query(query)
        .then((result) => {
            DropConnection(mysqlconnection)
            connectionResults = result[0]
        }).catch((error) => {
            throw error.sqlMessage
        })

        return connectionResults
    }

    const InsertData = async (query) => {
        const mysqlconnection = await StartDatabase()

        await mysqlconnection.query(query)
        .then(() => {
            DropConnection(mysqlconnection)
        }).catch((error) => {
            if(error.sqlMessage.startsWith("Duplicate entry")) {
                throw "Erro: Dados Duplicados"
            }
            throw "Erro: Erro desconhecido"
        })
    }

    return {
        GetData,
        InsertData
    }
}

module.exports = DatabaseProvider