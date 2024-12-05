import { models } from '../../db.js'
import jwt from 'jsonwebtoken'
 
const { Product } = models 
const { SECRET_KEY } = process.env

const handlerGetProduct = async (accessToken,refreshToken)=>{
    const access = jwt.validate({
        accessToken,
        SECRET_KEY
    })
    const refresh = jwt.validate({
        refreshToken,
        SECRET_KEY
    })
    if(!access && !refresh) throw new Error('Se require validaciones')

    const { id } = refresh
    const product = await Product.findAll({
        where:{
            idAdmin:id
        }
    })
    if(!product) throw new Error('No existen productos')
    
    return product  
}

export default handlerGetProduct