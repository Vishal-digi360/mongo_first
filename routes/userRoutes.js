import express from "express"
import { createUser, getAllUser, getUserByID,deleteUserByID ,updateUser ,updateUserEmail} from "../controllers/userController.js"

const router = express.Router()

router.route("/").get(getAllUser)
router.route("/:id").get(getUserByID)
router.route("/").post(createUser)
router.route("/:id").delete(deleteUserByID)
router.route("/:id").put(updateUser)
router.route("/:id").patch(updateUserEmail)



export default router