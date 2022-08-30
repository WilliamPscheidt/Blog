const Database = require("../database")

describe('[Helper] Database', () => {
    test('Database Connection & query', async () => { 
        await Database().Execute("SELECT * FROM comentarios;").then((result, error) => {
            expect(result)
        })
    })
})