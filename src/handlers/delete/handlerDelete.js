import { models } from "../../db.js"

const { Product } = models

const handlerDelete = async (id)=>{
    const product = await Product.findByPk(id)
    if(!product) throw new Error('No se encontro el producto');

    product.active = false
    await product.save()

    return 'Producto eliminado'
}

export default handlerDelete