import { models } from "../../db.js"
import { schema } from '../../utils/schema.js'
import jwt from 'jsonwebtoken'

const { SECRET_KEY } = process.env
const { Product } = models

const handlerCreateProduct = async (
        idAdmin,
        tittle,
        description,
        image,
        price,
        category,
        stock,
        accessToken,
        refreshToken
    )=>{
    
    const access = jwt.validate({
        accessToken,
        SECRET_KEY
    })

    const refresh = jwt.validate({
        refreshToken,
        SECRET_KEY
    })
    if(!access && refresh.id !== idAdmin) throw new Error('Se requiren validaciones')

    const { error } = schema.validate({
        uuid:idAdmin,
        tittle:tittle,
        description:description,
        image:image,
        price:price,
        category:category,
        stock:stock
    })
    if(error) throw new Error("Valores inválidos");

    const product = await Product.create({
        id:idAdmin,
        tittle:tittle,
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