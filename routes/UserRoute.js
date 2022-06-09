import express from "express"
import {
    GetUsers,
    SaveUser,
    GetUserById,
    EditUser,
    DeleteUser
} from "../controllers/UserController.js"

const router = express.Router()

router.get('/user', GetUsers)
router.get('/user/:id', GetUserById)
router.post('/user', SaveUser)
router.patch('/user/:id', EditUser)
router.delete('/user/:id', DeleteUser)

export default router