const express = require('express')
const bodyParser = require('body-parser')
const router = express()

const routerMiddleware = require('./routerMiddleware')

const Router = () => {
    router.use(bodyParser.urlencoded({extended: false}))
    router.use(bodyParser.json())
    
    router.get("/", async (req, res) => { res.send({ok: "ok"}) })
    router.post("/api/register", async (req, res) => { routerMiddleware(req, res, "Register") })
    router.post("/api/createPost", async (req, res) => { CreatePost(req, res) })
    router.post("/api/addComment", async (req, res) => { AddComment(req, res) })
    router.post("/api/login", async (req, res) => { Login(req, res) })

    router.listen(3000, () => {
        console.log("> Server Running")
    })
}

module.exports = Router