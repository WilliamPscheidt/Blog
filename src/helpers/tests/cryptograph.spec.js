const Cryptography = require("../cryptography")


describe('[Helper] Cryptograph Helper Tests', () => { 
    test('Hash Password', async () => { 
        const result = await Cryptography().Hash("Pass")
        expect(result).toBeDefined()
    })
    test('Hash Verify Invalid', async () => { 
        const result = await Cryptography().Verify("Pass", "INVALID_HAS")
        expect(result).toBeFalsy()
    })
    test('Hash Verify Valid', async () => { 
        const hashResult = await Cryptography().Hash("Password")
        const verifyhash = await Cryptography().Verify("Password", hashResult)
        expect(verifyhash).toBeTruthy()
    })
})