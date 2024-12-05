import handlerCreateProduct from "../../handlers/post/handlerCreateProduct.js";

const createProduct = async (req,res)=>{
    try {
        const {
            name,
            description,
            image,
            price,
            category,
            stock
        } = req.body

        const product = await handlerCreateProduct(
            name,
            description,
            image,
            price,
            category,
            stock
        )
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createProduct