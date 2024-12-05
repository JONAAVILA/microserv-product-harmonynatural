import handlerDelete from "../../handlers/delete/handlerDelete.js"

const deleteProduct = async (req,res)=>{
    try {
        const { id } = req.body
        const product = await handlerDelete(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default deleteProduct