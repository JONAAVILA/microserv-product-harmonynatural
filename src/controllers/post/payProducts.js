import handlerPayProducts from "../../handlers/post/handlerPayProducts.js"

const payProducts = async (req,res)=>{
    try {
        const { items } = req.body
        const point = await handlerPayProducts(items)
        res.status(200).json(point)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default payProducts