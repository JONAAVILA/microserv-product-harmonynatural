import handlerCreateProduct from "../../handlers/post/handlerCreateProduct.js";

const createProduct = async (req,res)=>{
    try {
        const accessToken = req.cookies['access_token']
        const refreshToken = req.cookies['refresh_token']
        const {
            idAdmin,
            tittle,
            description,
            image,
            price,
            category,
            stock
        } = req.body

        const product = await handlerCreateProduct(
            idAdmin,
            tittle,
            description,
            image,
            price,
            category,
            stock,
            accessToken,
            refreshToken
        )
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createProduct