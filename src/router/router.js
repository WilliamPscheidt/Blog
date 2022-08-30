const express = require('express')
const bodyParser = require('body-parser')
const router = express()

const AddComment = require("./routes/addComment")
const CreatePost = require("./routes/createPost")
const Login = require("./routes/login")
const Register = require("./routes/register")

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

const initial_Route = require("./routes/initial")

router.get("/", async (req, res) => { initial_Route(req, res) })
router.post("/api/register", async (req, res) => { Register(req, res) })
router.post("/api/createPost", async (req, res) => { CreatePost(req, res) })
router.post("/api/addComment", async (req, res) => { AddComment(req, res) })
router.post("/api/login", async (req, res) => { Login(req, res) })

router.listen(3000, () => {
    console.log("> Server Running")
})