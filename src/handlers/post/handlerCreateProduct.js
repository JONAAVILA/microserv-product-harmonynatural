import { models } from "../../db.js"
import { schema } from '../../utils/schema.js'

const { Product } = models

const handlerCreateProduct = async (name,description,image,price,category,stock)=>{
    const { error } = schema.validate({
        name:name,
        description:description,
        image:image,
        price:price,
        category:category,
        stock:stock
    })
    if(error) throw new Error("Valores inválidos");

    const product = await Product.create({
        name:name,
        description:description,
        image:image,
        price:price,
        category:category,
        stock:stock
    })
    if(!product) throw new Error("Error al crear producto");

    return product 
}

export default handlerCreateProduct