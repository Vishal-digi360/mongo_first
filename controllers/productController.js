import Product from "../mongodb/models/product.js";

const getAllProduct = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  try {
    const { title,
        category,
        price,
        img,
        desc } = req.body;

    const productExist = await Product.findOne({ title });
    if (productExist) {
      return res
        .status(200)
        .json({ message: "Product Already Exists!!", product: productExist });
    }

    const newProduct = await Product.create({
        title,
        category,
        price,
        img,
        desc
    });

   return res.status(200).json({ message: "Product Created!!", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById({ _id: id });

    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductByID = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById({ _id: id });

    if (product) {
      await Product.findByIdAndDelete({ _id: id });

      return res.status(200).json({ message: "Product Deleted" });
    } else {
      return res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById({ _id: id });
    const {title , category, price,img,desc } = req.body;


    if (product) {
      await Product.findByIdAndUpdate({ _id: id }, { title, category, price,img,desc });

      return res.status(200).json({ message: "product Updated" });
    } else {
      return res.status(404).json({ message: "product Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { updateProduct, deleteProductByID, getProductByID, createProduct, getAllProduct };