import { models } from "../../db.js"

const { Product } = models

const handlerDelete = async (id)=>{
    const product = await Product.update(
        {
            active:false
        },
        {
            where:id
        }
    )
    if(!product) throw new Error('No se encontro el producto')

    return 'Producto eliminado'
}

export default handlerDelete