import handlerGetProduct from "../../handlers/get/handlerGetProducts.js"

const getProduct = async (req,res)=>{
    try {
        const product = await handlerGetProduct()
    
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default getProduct