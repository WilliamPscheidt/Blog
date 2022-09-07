const express = require('express')
const bodyParser = require('body-parser')
const router = express()

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json({ limit: "10mb" }));

const routerMiddleware = require('./routerMiddleware')

const Router = () => {
    router.use(bodyParser.urlencoded({extended: false}))
    router.use(bodyParser.json())
    
    router.post("/api/login", async (req, res) => { routerMiddleware(req, res, "Login") })
    router.put("/api/register", async (req, res) => { routerMiddleware(req, res, "Register") })
    router.put("/api/post", async (req, res) => { routerMiddleware(req, res, "CreatePost") })
    router.put("/api/post/comment", async (req, res) => { routerMiddleware(req, res, "AddComment") })
    router.get("/api/post", async (req, res) => { routerMiddleware(req, res, "GetPosts") })

    router.listen(3000, () => {
        console.log("> Server Running")
    })
}

module.exports = Router