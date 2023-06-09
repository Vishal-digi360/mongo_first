import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true, default: " " },
    desc: { type: String, required: true, default: " " },
})

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;