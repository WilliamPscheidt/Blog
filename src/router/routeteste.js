const express = require('express')
const router = express()

router.get("/", async (req, res) => { res.status(200).json({ name: 'john' }); })

router.listen(5000, () => {
    console.log("> Server Running")
})

module.exports = {
    server: router
}





