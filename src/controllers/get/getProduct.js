import handlerGetProduct from "../../handlers/get/handlerGetProducts.js"

const getProduct = async (req,res)=>{
    try {
        const accessToken = req.cookies['access_token']
        const refreshToken = req.cookies['refresh_token']
        const product = await handlerGetProduct(
            accessToken,
            refreshToken
        )
    
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default getProduct