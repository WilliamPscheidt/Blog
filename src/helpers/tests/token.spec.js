const Token = require("../token")

describe('[Helper] Token Tests', () => {
    test('Token Generation', async () => { 
        const token = Token().Generate({name: "Test"}, 2000)
        expect(token).toBeDefined()
    })

    test('Token Validation', async () => {
        const token = Token().Generate({name: "Test"}, 100)
        expect(Token().Verify(token)).toBeTruthy()
    })
})