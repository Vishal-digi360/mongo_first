import express from "express"
import { updateProduct, deleteProductByID, getProductByID,createProduct ,getAllProduct } from "../controllers/productController.js"

const router = express.Router()

router.route("/all").get(getAllProduct)
router.route("/:id").get(getProductByID)
router.route("/create").post(createProduct)
router.route("/delete/:id").delete(deleteProductByID)
router.route("/update/:id").put(updateProduct)
// router.route("/:id").patch(updateUEmail)



export default router